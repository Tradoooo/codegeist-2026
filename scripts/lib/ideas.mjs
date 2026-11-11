// Analyse des listes d'idées : une idée par ligne, au format
// `N. **Nom** — pitch. [produit · modules] [bonus] [catégorie]`.

const LINE = /^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/;
const BRACKET = /\[([^\]]+)\]/g;

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
    });
  }
  return ideas;
}

/** Titre lisible d'une tranche, tiré de la première ligne `# Sxx — ...`. */
export function trancheLabel(source, file) {
  const heading = /^#\s+(.+)$/m.exec(source);
  if (heading) return heading[1].replace(/^S\d+\s*[-—–]\s*/, '').replace(/\s*\(\d+\)\s*$/, '');
  return file.replace(/^S\d+-/, '').replace(/\.md$/, '');
}
