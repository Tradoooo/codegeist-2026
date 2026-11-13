// Analyse des listes d'idées : une idée par ligne, au format
// `N. **Nom** — pitch. [produit · modules] [bonus] [catégorie]`.

const LINE = /^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/;
const BRACKET = /\[([^\]]+)\]/g;

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

/** Transforme le texte d'une tranche en liste d'idées structurées. */
export function parseIdeas(source, tranche) {
  const ideas = [];
  const passe = passOf(tranche);
  for (const line of source.split('\n')) {
    const match = LINE.exec(line);
    if (!match) continue;
    const { brackets, pitch } = splitTail(match[3]);
    ideas.push({
      n: Number(match[1]),
      nom: match[2].trim(),
      pitch,
      produit: brackets[0] || '',
      bonus: pickBonus(brackets),
      categorie: pickCategory(brackets),
      tranche,
      passe,
    });
  }
  return ideas;
}

/** Titre lisible d'une tranche, tiré de sa première ligne `# …`. */
export function trancheLabel(source) {
  const heading = /^#\s+(.+)$/m.exec(source);
  return (heading ? heading[1] : '')
    .replace(/^[A-Z]\d+(\s*[-—––]\s*|\s+)\s*/, '')
    .replace(/\s*\(\d+\)\s*$/, '');
}