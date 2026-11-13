# Codegeist 2026 — concepts Forge

Site statique des concepts d'applications [Atlassian Forge](https://developer.atlassian.com/platform/forge/) rédigés pour le hackathon [Codegeist 2026](https://codegeist2026.devpost.com/).

**En ligne :** <https://tradoooo.github.io/codegeist-2026/>

## Ce qu'on y trouve

- **Cinq cahiers des charges complets** — Trame, Banc, Gammes, Vigie, Placard du wiki. Chacun pousse un concept jusqu'au bout : vocabulaire, mécanique, exigences fonctionnelles numérotées, outils MCP exposés, agent Rovo, écrans, architecture Forge, modèle de données SQL, contraintes vérifiées dans la documentation, exigences non fonctionnelles, cas limites, recette, scénario de la vidéo de démonstration, plan jusqu'à la date de soumission, risques, vision à long terme.
- **Un corpus de 2 600 idées** en quatre passes (500 + 100 + 1 000 + 1 000), filtrable par passe, catégorie et bonus visés. Aucun doublon de nom, vérifié par script.
- **Les classements** : le top 10 de chaque passe, et les deux idées qui maximisent la grille de notation (22/22).
- **La méthode** : comment le corpus a été produit, comment l'existant a été cartographié pour éviter les doublons, et quelles contraintes techniques ont été vérifiées avant d'écrire.

## Deux règles qui traversent tous les concepts

- **Honnêteté de la mesure.** Aucun chiffre sans effectif, aucune moyenne sans fourchette, et « on ne sait pas » est une réponse affichée comme les autres. Une application qui affiche un zéro quand elle n'a pas le droit de lire est pire qu'une application qui dit qu'elle ne voit rien.
- **Zéro duplication.** Les concepts partagent leurs briques (grille de force des preuves, moteur de signature d'échec, détecteurs de secrets, discipline de citation, refus de conclure sous un seuil) au lieu de les réécrire.

## Construire le site

Aucune dépendance externe : Node 20 suffit.

```bash
node scripts/build.mjs     # construit dist/
node scripts/check.mjs     # garde-fous + construction (fuites, taille, corpus, liens)
node scripts/serve.mjs     # construction + prévisualisation sur http://localhost:8080
```

Le rendu Markdown est maison (`scripts/lib/markdown.mjs`) : titres, paragraphes, listes, tableaux GFM, blocs de code, citations, gras, italique, liens — exactement ce dont le contenu a besoin, rien de plus.

## Structure

```
content/
  concepts/    les cinq cahiers des charges (source Markdown)
  idees/       les 93 tranches du corpus (2 600 idées, quatre passes)
  top-10.md    les finalistes de la première passe et leur note
  classements.md  les classements des passes 2, 3 et 4, puis le résultat du 22/22
  methode.md   la méthode de génération et de sélection
scripts/
  build.mjs    construction du site dans dist/
  check.mjs    garde-fous : aucune fuite de chemin interne, fichiers < 500 lignes,
               corpus complet, liens internes valides
  serve.mjs    serveur statique local
  lib/         rendu Markdown et analyse des listes d'idées
site/
  shell.html   gabarit de page
  style.css    feuille de style (thème sombre et clair, responsive, impression)
  app.js       thème + surlignage de la table des matières
  ideas.js     filtrage côté client du corpus
.github/workflows/ci.yml   garde-fous en CI (construction + validation)
```

## Publication

La publication se fait par branche, sans dépendre d'un runner : `bash scripts/publish.sh` reconstruit,
rejoue les garde-fous, puis pousse `dist/` sur la branche `gh-pages` (GitHub Pages sert depuis cette
branche). Le workflow `ci.yml` ne fait que les garde-fous (`timeout-minutes: 5`, `concurrency` avec
annulation, `fetch-depth: 1`), sur chaque PR et push de `main`.

## Avertissement

Travaux préparatoires personnels pour un hackathon public. Ni produits Atlassian, ni engagements de livraison, ni conseils. Les noms de produits cités appartiennent à leurs propriétaires respectifs.
