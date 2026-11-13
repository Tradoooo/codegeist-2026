#!/usr/bin/env node
// Construit le site statique dans dist/ à partir de content/ et site/.
// Aucune dépendance externe : node scripts/build.mjs

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { renderDocument, slugify, escapeHtml } from './lib/markdown.mjs';
import { parseIdeas, trancheLabel } from './lib/ideas.mjs';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'content');
const SITE = join(ROOT, 'site');
const DIST = join(ROOT, 'dist');

const CONCEPT_ORDER = ['trame', 'banc', 'gammes', 'vigie', 'placard-wiki'];

function read(path) {
  return readFileSync(path, 'utf8');
}

function write(path, data) {
  mkdirSync(path.slice(0, path.lastIndexOf('/')), { recursive: true });
  writeFileSync(path, data);
}

/** Extrait le titre, la catégorie, les bonus, l'idée en une phrase et le dépôt. */
function conceptMeta(source, slug) {
  const title = (/^#\s+(.+)$/m.exec(source) || [, slug])[1].replace(/\s*[—-]\s*cahier des charges$/i, '');
  const quote = source.split('\n').filter((l) => l.startsWith('> ')).map((l) => l.slice(2));
  const find = (re) => (quote.find((l) => re.test(l)) || '').replace(/^.*?:\s*/, '');
  const categorie = find(/catégorie/i) || '';
  const bonus = find(/bonus visés/i);
  const depot = (find(/nom de dépôt proposé/i).match(/`([^`]+)`/) || [, slug])[1];
  const slogan = find(/slogan/i).replace(/^[^:]*:\s*/, '');
  const body = source.slice(source.indexOf('## 1.'));
  const idea = (body.split('\n\n')[0] || '').replace(/^##\s+1\.[^\n]*\n/, '').trim();
  return { slug, title, categorie, bonus, depot, slogan, idea };
}

function pageShell(shell, { title, description, body, toc = [], active = '' }) {
  return shell
    .replaceAll('{{TITLE}}', escapeHtml(title))
    .replaceAll('{{DESCRIPTION}}', escapeHtml(description))
    .replaceAll('{{ACTIVE}}', active)
    .replace('{{TOC}}', toc.length
      ? `<nav class="toc" aria-label="Table des matières"><p>Sur cette page</p><ol>${toc
        .map((t) => `<li><a href="#${t.id}">${escapeHtml(t.text)}</a></li>`).join('')}</ol></nav>`
      : '')
    .replace('{{CONTENT}}', body)
    .replace('{{YEAR}}', String(new Date().getFullYear()));
}

function renderMarkdownPage(shell, source, { title, description, active }) {
  const { html, toc } = renderDocument(source);
  return pageShell(shell, { title, description, body: `<article class="doc">${html}</article>`, toc, active });
}

function conceptCards(metas) {
  return metas
    .map((m) => `<a class="card" href="/concepts/${m.slug}.html">
      <h3>${escapeHtml(m.title)}</h3>
      <p class="card-meta">${escapeHtml(m.categorie)} · dépôt <code>${escapeHtml(m.depot)}</code></p>
      <p class="card-idea">${escapeHtml(m.idea)}</p>
      <p class="card-bonus">${escapeHtml(m.bonus)}</p>
    </a>`)
    .join('\n');
}

function buildIndex(shell, metas, ideas) {
  const passes = new Set(ideas.map((i) => i.passe)).size;
  const stats = `<dl class="stats">
    <div><dt>Idées générées</dt><dd>${ideas.length}</dd></div>
    <div><dt>Passes</dt><dd>${passes}</dd></div>
    <div><dt>Tranches explorées</dt><dd>${new Set(ideas.map((i) => i.tranche)).size}</dd></div>
    <div><dt>Cahiers des charges</dt><dd>${metas.length}</dd></div>
  </dl>`;
  const body = `<section class="hero">
    <p class="eyebrow">Codegeist 2026 · Atlassian Forge · soumission avant le 22 décembre 2026</p>
    <h1>Cinq concepts d'applications Forge, poussés jusqu'au cahier des charges</h1>
    <p class="lede">Un corpus de ${ideas.length} idées générées en quatre passes — d'abord onze tranches par produit
    (Jira, JSM, Confluence, Bitbucket, Compass, Rovo, Teamwork Graph, MCP, métier, industries, transversal), puis cent
    idées sur des axes non couverts, puis deux mille de plus par front inter-produits et par mécanisme — filtré contre
    les projets déjà construits, puis réduit à dix finalistes, dont cinq sont documentés ici en détail.</p>
    <p class="cta"><a class="btn" href="/top-10.html">Voir le top 10</a>
    <a class="btn ghost" href="/classements.html">Tous les classements</a>
    <a class="btn ghost" href="/idees.html">Parcourir les ${ideas.length} idées</a></p>
    ${stats}
  </section>
  <section class="concepts"><h2>Les cinq concepts documentés</h2><div class="grid">${conceptCards(metas)}</div></section>`;
  return pageShell(shell, {
    title: 'Codegeist 2026 — concepts Forge',
    description: 'Cinq concepts d\'applications Atlassian Forge issus d\'un corpus de 2 600 idées, avec cahier des charges complet.',
    body,
    active: 'home',
  });
}

function buildIdeasPage(shell, ideas) {
  const options = (values) => values
    .map((v) => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');
  const passes = ['1', '2', '3', '4']
    .map((p) => ({ value: p, count: ideas.filter((i) => i.passe === p).length }))
    .filter((p) => p.count > 0)
    .map((p) => `<option value="${p.value}">Passe ${p.value} — ${p.count} idées</option>`)
    .join('');
  const categories = [...new Set(ideas.map((i) => i.categorie).filter(Boolean))].sort();
  const bonuses = [...new Set(ideas.map((i) => i.bonus).filter(Boolean))].sort();
  const body = `<section class="hero slim">
    <h1>${ideas.length} idées, filtrables</h1>
    <p class="lede">Chaque idée est une ligne : nom, pitch, produit et modules Forge, bonus visés, catégorie.
    Quatre passes (500, 100, 1 000, 1 000) et aucun doublon avec les projets déjà construits.</p>
  </section>
  <section class="filters" id="filters">
    <label>Recherche<input type="search" id="q" placeholder="mot-clé, nom de produit…"></label>
    <label>Passe<select id="passe"><option value="">Toutes</option>${passes}</select></label>
    <label>Catégorie<select id="categorie"><option value="">Toutes</option>${options(categories)}</select></label>
    <label>Bonus<select id="bonus"><option value="">Tous</option>${options(bonuses)}</select></label>
    <p class="count" id="count" aria-live="polite"></p>
  </section>
  <section id="results" class="results" aria-live="polite"></section>`;
  const page = pageShell(shell, {
    title: `${ideas.length} idées — Codegeist 2026`,
    description: 'Corpus complet des idées d\'applications Forge générées pour Codegeist 2026, filtrable par passe, catégorie et bonus.',
    body,
    active: 'idees',
  });
  return page.replace('</body>', '<script type="module" src="/assets/ideas.js"></script></body>');
}

function collectIdeas() {
  const dir = join(CONTENT, 'idees');
  const files = readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
  const ideas = [];
  const tranches = [];
  for (const file of files) {
    const source = read(join(dir, file));
    const code = (/^[A-Z]+\d+/i.exec(file) || [file.replace(/\.md$/, '')])[0];
    const label = trancheLabel(source);
    const parsed = parseIdeas(source, code);
    tranches.push({ code, label, count: parsed.length });
    ideas.push(...parsed);
  }
  return { ideas, tranches };
}

function build() {
  if (existsSync(DIST)) rmSync(DIST, { recursive: true, force: true });
  mkdirSync(join(DIST, 'assets'), { recursive: true });
  const shell = read(join(SITE, 'shell.html'));

  const metas = CONCEPT_ORDER.map((slug) => {
    const source = read(join(CONTENT, 'concepts', `${slug}.md`));
    const meta = conceptMeta(source, slug);
    const body = source.split('\n').filter((l, i) => !(i < 12 && (l.startsWith('# ') || l.startsWith('> ') || !l.trim()))).join('\n');
    const { html, toc } = renderDocument(body);
    write(join(DIST, 'concepts', `${slug}.html`), pageShell(shell, {
      title: `${meta.title} — cahier des charges`,
      description: meta.idea.slice(0, 180),
      body: `<article class="doc"><header class="doc-head"><h1>${escapeHtml(meta.title)}</h1>
        <p class="doc-meta">${escapeHtml(meta.categorie)}</p>
        <p class="doc-meta">${escapeHtml(meta.bonus)}</p>
        <p class="doc-meta">Dépôt proposé : <code>${escapeHtml(meta.depot)}</code></p></header>${html}</article>`,
      toc,
      active: 'concepts',
    }));
    return meta;
  });

  const { ideas, tranches } = collectIdeas();
  write(join(DIST, 'idees.json'), JSON.stringify({ generatedAt: new Date().toISOString(), tranches, ideas }, null, 1));
  write(join(DIST, 'index.html'), buildIndex(shell, metas, ideas));
  write(join(DIST, 'idees.html'), buildIdeasPage(shell, ideas));
  write(join(DIST, 'top-10.html'), renderMarkdownPage(shell, read(join(CONTENT, 'top-10.md')), {
    title: 'Top 10 — Codegeist 2026',
    description: 'Les dix idées retenues sur les 500 de la première passe, avec leur note et leur justification.',
    active: 'top10',
  }));
  write(join(DIST, 'classements.html'), renderMarkdownPage(shell, read(join(CONTENT, 'classements.md')), {
    title: 'Classements — Codegeist 2026',
    description: 'Les classements des quatre passes : top 10 de chacune, et les deux idées notées 22/22.',
    active: 'classements',
  }));
  write(join(DIST, 'methode.html'), renderMarkdownPage(shell, read(join(CONTENT, 'methode.md')), {
    title: 'Méthode — Codegeist 2026',
    description: 'Comment le corpus de 500 idées a été produit, filtré et noté.',
    active: 'methode',
  }));
  write(join(DIST, 'assets', 'style.css'), read(join(SITE, 'style.css')));
  write(join(DIST, 'assets', 'app.js'), read(join(SITE, 'app.js')));
  write(join(DIST, 'assets', 'ideas.js'), read(join(SITE, 'ideas.js')));
  write(join(DIST, 'CNAME'), '');
  rmSync(join(DIST, 'CNAME'));
  const pages = readdirSync(DIST, { recursive: true }).filter((f) => String(f).endsWith('.html'));
  console.log(`dist/ construit : ${pages.length} pages HTML, ${ideas.length} idées indexées`);
}

build();
