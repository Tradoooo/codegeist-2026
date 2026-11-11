#!/usr/bin/env bash
# Publie dist/ sur la branche gh-pages : GitHub Pages sert depuis la branche,
# sans dépendre d'un runner d'actions.
# Usage : bash scripts/publish.sh
set -euo pipefail

REPO_ROOT=$(cd "$(dirname "$0")/.." && pwd)
cd "$REPO_ROOT"

REMOTE_URL=$(git remote get-url origin)
node scripts/check.mjs
[ -d dist ] || { echo "ERREUR : dist/ absent" >&2; exit 1; }

PAGES=$(find dist -name '*.html' | wc -l | tr -d ' ')
IDEAS=$(node -e 'console.log(JSON.parse(require("fs").readFileSync("dist/idees.json")).ideas.length)')
STAMP=$(date -u +%FT%TZ)

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT
cp -r dist/. "$WORK"/
cd "$WORK"

git init -q -b gh-pages
git add -A
git -c user.name=BaptisteFaisy -c user.email=baptiste.faisy@gmail.com \
    commit -qm "Site construit le ${STAMP} — ${PAGES} pages, ${IDEAS} idées"
git remote add origin "$REMOTE_URL"
git push -q -f origin gh-pages

echo "publié : ${PAGES} pages, ${IDEAS} idées → gh-pages"
