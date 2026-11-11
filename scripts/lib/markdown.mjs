// Rendu Markdown minimal (GFM) -> HTML, sans dépendance externe.
// Couvre exactement les constructions utilisées par le contenu du site :
// titres, paragraphes, listes (un niveau d'imbrication), tables, code inline et
// fences, blockquotes, filets, gras, italique, liens.

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

export function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, (c) => ESC[c]);
}

export function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

export function renderInline(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, (_, bold) => `<strong>${bold}</strong>`);
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, (_, pre, italic) => `${pre}<em>${italic}</em>`);
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) =>
    `<a href="${href}"${href.startsWith('http') ? ' rel="noopener noreferrer"' : ''}>${label}</a>`);
  return out;
}

function isTableRow(line) {
  return /^\s*\|.*\|\s*$/.test(line);
}

function isTableSeparator(line) {
  return /^\s*\|(\s*:?-{2,}:?\s*\|)+\s*$/.test(line);
}

function splitRow(line) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
}

function renderTable(rows) {
  const [head, ...body] = rows;
  const thead = `<thead><tr>${head.map((c) => `<th>${renderInline(c)}</th>`).join('')}</tr></thead>`;
  const tbody = body
    .map((row) => `<tr>${row.map((c) => `<td>${renderInline(c)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="table-wrap"><table>${thead}<tbody>${tbody}</tbody></table></div>`;
}

function renderList(lines, ordered) {
  const pattern = ordered ? /^(\s*)(\d+)\.\s+(.*)$/ : /^(\s*)[-*]\s+(.*)$/;
  const items = [];
  let current = null;
  for (const line of lines) {
    const match = pattern.exec(line);
    if (!match) continue;
    const indent = match[1].length;
    const text = match[ordered ? 3 : 2];
    if (indent >= 2 && current) {
      current.sub.push(text);
    } else {
      current = { text, sub: [] };
      items.push(current);
    }
  }
  const tag = ordered ? 'ol' : 'ul';
  const html = items
    .map((item) => {
      const sub = item.sub.length
        ? `<${tag} class="sub">${item.sub.map((s) => `<li>${renderInline(s)}</li>`).join('')}</${tag}>`
        : '';
      return `<li>${renderInline(item.text)}${sub}</li>`;
    })
    .join('');
  return `<${tag}>${html}</${tag}>`;
}

function renderFence(lines) {
  const lang = (lines[0].match(/^```(\w*)/) || [, ''])[1];
  const code = lines.slice(1, lines.length - 1).join('\n');
  return `<pre class="code" data-lang="${lang}"><code>${escapeHtml(code)}</code></pre>`;
}

function renderBlockquote(lines) {
  const inner = lines.map((l) => l.replace(/^>\s?/, '')).join('\n');
  return `<blockquote>${renderInline(inner)}</blockquote>`;
}

/** Convertit un bloc de Markdown en HTML. */
export function renderBlocks(lines) {
  const html = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    if (line.startsWith('```')) {
      const fence = [lines[i]];
      i += 1;
      while (i < lines.length) {
        fence.push(lines[i]);
        i += 1;
        if (fence[fence.length - 1].startsWith('```')) break;
      }
      html.push(renderFence(fence));
      continue;
    }
    if (isTableRow(line) && isTableSeparator(lines[i + 1] || '')) {
      const rows = [splitRow(line)];
      i += 2;
      while (i < lines.length && isTableRow(lines[i])) { rows.push(splitRow(lines[i])); i += 1; }
      html.push(renderTable(rows));
      continue;
    }
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      const id = slugify(text);
      html.push(`<h${level} id="${id}">${renderInline(text)}<a class="anchor" href="#${id}" aria-label="Lien vers cette section">#</a></h${level}>`);
      i += 1;
      continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const block = [];
      while (i < lines.length && (/^\s*([-*]|\d+\.)\s+/.test(lines[i]) || (block.length && lines[i].trim()))) {
        block.push(lines[i]); i += 1;
      }
      html.push(renderList(block, ordered));
      continue;
    }
    if (/^>\s?/.test(line)) {
      const block = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { block.push(lines[i]); i += 1; }
      html.push(renderBlockquote(block));
      continue;
    }
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { html.push('<hr>'); i += 1; continue; }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|>|\s*([-*]|\d+\.)\s)/.test(lines[i])) {
      para.push(lines[i]); i += 1;
    }
    if (para.length) html.push(`<p>${renderInline(para.join(' '))}</p>`);
  }
  return html.join('\n');
}

/** Rendu complet + table des matières (titres de niveau 2). */
export function renderDocument(source) {
  const lines = source.split('\n');
  const html = renderBlocks(lines);
  const toc = lines
    .map((l) => /^(#{2,3})\s+(.*)$/.exec(l))
    .filter(Boolean)
    .map((m) => ({ level: m[1].length, text: m[2].replace(/[*`]/g, ''), id: slugify(m[2]) }))
    .filter((t) => t.level === 2);
  return { html, toc };
}
