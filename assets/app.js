// Thème clair/sombre et surlignage de la table des matières.

const KEY = 'codegeist-theme';

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function initTheme() {
  const stored = localStorage.getItem(KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(stored || (prefersLight ? 'light' : 'dark'));
  const button = document.getElementById('theme');
  if (!button) return;
  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(KEY, next);
  });
}

function initTocSpy() {
  const links = [...document.querySelectorAll('.toc a')];
  if (!links.length) return;
  const headings = links
    .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);
  if (!headings.length) return;
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((a) => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
    }
  }, { rootMargin: '-10% 0px -80% 0px' });
  headings.forEach((h) => observer.observe(h));
}

initTheme();
initTocSpy();
