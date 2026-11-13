#!/usr/bin/env node
// Garde-fous du dépôt : fuite de chemins internes, taille des fichiers de code,
// longueur des fonctions, cohérence du corpus, liens internes du site construit.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const errors = [];
const warnings = [];

function fail(message) { errors.push(message); }

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (entry === 'node_modules' || entry === '.git' || entry === 'dist') continue;
    out.push(...(statSync(path).isDirectory() ? walk(path) : [path]));
  }
  return out;
}

const FORBIDDEN = [
  /\/home\/baptiste/, /~\/Bureau/, /inventaire-codegeist/, /idees-codegeist\//,
  /\.zeroclaw/, /tidewater/, /100\.124\.18\.48/,
];

function checkLeaks() {
  // Le garde-fou contient lui-même les motifs interdits : il est exclu du scan.
  const sources = walk(join(ROOT, 'content'))
    .concat(walk(join(ROOT, 'scripts')), walk(join(ROOT, 'site')))
    .filter((file) => !file.endsWith('check.mjs'));
  for (const file of sources) {
    const text = readFileSync(file, 'utf8');
    for (const pattern of FORBIDDEN) {
      if (pattern.test(text)) fail(`${relative(ROOT, file)} : contenu interne (${pattern})`);
    }
  }
}

function checkCodeSize() {
  const code = walk(ROOT).filter((f) => ['.mjs', '.js', '.css', '.html', '.yml'].includes(extname(f)));
  for (const file of code) {
    const lines = readFileSync(file, 'utf8').split('\n');
    if (lines.length >= 500) fail(`${relative(ROOT, file)} : ${lines.length} lignes (limite 500)`);
  }
}

function checkCorpus(data) {
  const expected = 2600;
  if (data.ideas.length !== expected) fail(`corpus : ${data.ideas.length} idées indexées, ${expected} attendues`);
  const duplicates = new Map();
  for (const idea of data.ideas) {
    const key = idea.nom.toLowerCase();
    duplicates.set(key, (duplicates.get(key) || 0) + 1);
  }
  for (const [nom, count] of duplicates) {
    if (count > 1) warnings.push(`nom d'idée en double (${count}×) : ${nom}`);
  }
  const sansBonus = data.ideas.filter((i) => !i.bonus).length;
  if (sansBonus > data.ideas.length * 0.5) warnings.push(`${sansBonus} idées sans bonus identifié`);
}

/** Chaque idée doit appartenir à un axe déclaré, et chaque axe à un compte exact. */
function checkAxes(data) {
  const axes = data.axes || [];
  const expected = 101;
  if (axes.length !== expected) fail(`axes : ${axes.length} déclarés, ${expected} attendus`);
  const counts = new Map();
  for (const idea of data.ideas) {
    counts.set(idea.tranche, (counts.get(idea.tranche) || 0) + 1);
  }
  for (const axis of axes) {
    if (!axis.label) fail(`axe ${axis.code} : libellé vide`);
    const indexed = counts.get(axis.code) || 0;
    if (indexed !== axis.count) fail(`axe ${axis.code} : ${axis.count} idées annoncées, ${indexed} indexées`);
  }
  for (const code of counts.keys()) {
    if (!axes.some((axis) => axis.code === code)) fail(`axe ${code} : idées indexées sans axe déclaré`);
  }
}

function checkLinks() {
  const pages = readdirSync(DIST, { recursive: true }).filter((f) => String(f).endsWith('.html'));
  const known = new Set(pages.map((p) => `/${String(p).replace(/\\/g, '/')}`));
  known.add('/');
  for (const page of pages) {
    const html = readFileSync(join(DIST, String(page)), 'utf8');
    for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = match[1];
      if (href.startsWith('/assets/') || href.endsWith('.json')) continue;
      if (!known.has(href) && !known.has(href.replace(/\.html$/, ''))) {
        fail(`${String(page)} : lien interne cassé ${href}`);
      }
    }
  }
}

function checkAssets() {
  for (const asset of ['assets/style.css', 'assets/app.js', 'assets/ideas.js', 'idees.json']) {
    if (!statSync(join(DIST, asset)).isFile()) fail(`dist/${asset} manquant`);
  }
}

execSync('node scripts/build.mjs', { stdio: 'inherit' });
checkLeaks();
checkCodeSize();
const corpus = JSON.parse(readFileSync(join(DIST, 'idees.json'), 'utf8'));
checkCorpus(corpus);
checkAxes(corpus);
checkAssets();
checkLinks();

for (const warning of warnings) console.warn(`AVERTISSEMENT : ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERREUR : ${error}`);
  console.error(`\n${errors.length} garde-fou(s) en échec`);
  process.exit(1);
}
console.log('garde-fous : OK');
