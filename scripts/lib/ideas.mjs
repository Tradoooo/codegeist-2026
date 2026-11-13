// Analyse des listes d'idées : une idée par ligne, au format
// `N. **Nom** — pitch. [produit · modules] [bonus] [catégorie]`.
//
// Un fichier de corpus peut porter plusieurs axes : le fichier `N01-a-N05`
// contient les axes N01 à N05, chacun annoncé par un titre `## N03 — …`.
// L'axe d'une idée est donc celui du dernier titre rencontré avant elle.

const LINE = /^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/;
const BRACKET = /\[([^\]]+)\]/g;
const HEADING = /^#{1,3}\s+(?:TRANCHE\s+)?([A-Z]\d+)\b[ \t]*(?:[—–-][ \t]*(.*))?$/;
const TRAILING_COUNT = /\s*\(\s*\d+[^)]*\)\s*$/;

// Préfixe de tranche → numéro de passe (S=1, N=2, T=3, U=4).
const PASSES = { S: '1', N: '2', T: '3', U: '4' };

/** Numéro de passe (1→4) dérivé du préfixe du code de tranche. */
export function passOf(tranche) {
  return PASSES[String(tranche).charAt(0).toUpperCase()] || '';
}

function pickBonus(brackets) {
  const found = brackets.find((b) => /^[AMTP\s/+·,-]+$/i.test(b.trim()) && /[AMTP]/i.test(b));
  if (!found) return '';
  const letters = [...new Set(found.toUpperCase().match(/[AMTP]/g) || [])].sort();
  return letters.join('+');
}

function pickCategory(brackets) {
  const found = brackets.find((b) => /software|business|specialized|apps for/i.test(b));
  if (!found) return '';
  const text = found.toLowerCase();
  if (text.includes('software')) return 'Software Teams';
  if (text.includes('specialized')) return 'Specialized Industries';
  if (text.includes('business')) return 'Business Teams';
  return found;
}

function splitTail(tail) {
  const brackets = [...tail.matchAll(BRACKET)].map((m) => m[1].trim());
  const pitch = tail.slice(0, tail.indexOf('[') >= 0 ? tail.indexOf('[') : tail.length).trim();
  return { brackets, pitch: pitch.replace(/[.\s]+$/, '') };
}

/** Libellé d'axe lisible : sans code devant, sans effectif entre parenthèses. */
function cleanLabel(text) {
  return String(text || '').replace(TRAILING_COUNT, '').replace(/\s+/g, ' ').trim();
}

/** Titre d'axe : `# S01 — …`, `## TRANCHE S09 — …`, `## N03 — …`. */
function axisFromHeading(line) {
  const match = HEADING.exec(line);
  if (!match) return null;
  return { code: match[1], label: cleanLabel(match[2] || '') };
}

/** Transforme une ligne d'idée en objet structuré. */
function buildIdea(match, tranche) {
  const { brackets, pitch } = splitTail(match[3]);
  return {
    n: Number(match[1]),
    nom: match[2].trim(),
    pitch,
    produit: brackets[0] || '',
    bonus: pickBonus(brackets),
    categorie: pickCategory(brackets),
    tranche,
    passe: passOf(tranche),
  };
}

/**
 * Découpe un fichier de corpus en axes et en idées indexées.
 * @param {string} source contenu Markdown du fichier
 * @param {string} fallbackCode code d'axe si le fichier n'a aucun titre
 * @returns {{axes: Array<{code: string, label: string, count: number}>, ideas: Array<object>}}
 */
export function parseCorpusFile(source, fallbackCode) {
  const axes = [];
  const ideas = [];
  let current = null;

  const openAxis = (code, label) => {
    current = { code, label, count: 0 };
    axes.push(current);
    return current;
  };

  for (const line of source.split('\n')) {
    const heading = axisFromHeading(line);
    if (heading) {
      openAxis(heading.code, heading.label);
      continue;
    }
    const match = LINE.exec(line);
    if (!match) continue;
    if (!current) openAxis(fallbackCode, cleanLabel(fallbackCode));
    ideas.push(buildIdea(match, current.code));
    current.count += 1;
  }

  return { axes, ideas };
}
