// Page « 500 idées » : chargement de l'index, filtrage et rendu paginé côté client.

const PAGE_SIZE = 60;

const state = { q: '', tranche: '', categorie: '', bonus: '', shown: PAGE_SIZE, ideas: [] };

const els = {};

function cacheEls() {
  for (const id of ['q', 'tranche', 'categorie', 'bonus', 'count', 'results']) {
    els[id] = document.getElementById(id);
  }
}

function matches(idea) {
  if (state.tranche && idea.tranche !== state.tranche) return false;
  if (state.categorie && idea.categorie !== state.categorie) return false;
  if (state.bonus && idea.bonus !== state.bonus) return false;
  if (!state.q) return true;
  const haystack = `${idea.nom} ${idea.pitch} ${idea.produit} ${idea.categorie}`.toLowerCase();
  return state.q.toLowerCase().split(/\s+/).every((word) => haystack.includes(word));
}

function ideaCard(idea) {
  const tags = [
    idea.tranche ? `<span class="tag">${idea.tranche}</span>` : '',
    idea.categorie ? `<span class="tag">${idea.categorie}</span>` : '',
    idea.bonus ? `<span class="tag bonus">bonus ${idea.bonus}</span>` : '',
    idea.produit ? `<span class="tag">${idea.produit}</span>` : '',
  ].join('');
  return `<article class="idea">
    <h3><span class="num">${idea.tranche}·${idea.n}</span>${idea.nom}</h3>
    <p>${idea.pitch}</p>
    <div class="tags">${tags}</div>
  </article>`;
}

function render() {
  const filtered = state.ideas.filter(matches);
  const slice = filtered.slice(0, state.shown);
  els.count.textContent = `${filtered.length} idée${filtered.length > 1 ? 's' : ''} sur ${state.ideas.length}`;
  if (!filtered.length) {
    els.results.innerHTML = '<p class="empty">Aucune idée ne correspond à ces filtres.</p>';
    return;
  }
  const more = filtered.length > slice.length
    ? `<p class="more"><button class="btn ghost" id="more" type="button">Afficher ${Math.min(PAGE_SIZE, filtered.length - slice.length)} de plus</button></p>`
    : '';
  els.results.innerHTML = slice.map(ideaCard).join('') + more;
  const button = document.getElementById('more');
  if (button) {
    button.addEventListener('click', () => { state.shown += PAGE_SIZE; render(); });
  }
}

function bindFilters() {
  const onInput = () => { state.q = els.q.value; state.shown = PAGE_SIZE; render(); };
  els.q.addEventListener('input', onInput);
  for (const key of ['tranche', 'categorie', 'bonus']) {
    els[key].addEventListener('change', () => {
      state[key] = els[key].value;
      state.shown = PAGE_SIZE;
      render();
    });
  }
}

async function init() {
  cacheEls();
  if (!els.results) return;
  const response = await fetch('/idees.json');
  const data = await response.json();
  state.ideas = data.ideas;
  bindFilters();
  render();
}

init();
