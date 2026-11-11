#!/usr/bin/env node
// Serveur statique local pour prévisualiser dist/ (node scripts/serve.mjs [port]).

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const PORT = Number(process.argv[2] || 8080);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function resolve(urlPath) {
  const clean = normalize(urlPath.split('?')[0]).replace(/^(\.\.[/\\])+/, '');
  const candidate = join(DIST, clean === '/' ? 'index.html' : clean);
  return candidate.startsWith(DIST) ? candidate : join(DIST, 'index.html');
}

async function send(res, status, body, type) {
  res.writeHead(status, { 'content-type': type, 'cache-control': 'no-store' });
  res.end(body);
}

const server = createServer(async (req, res) => {
  try {
    let file = resolve(req.url);
    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    } catch {
      file = join(DIST, '404.html');
    }
    const body = await readFile(file);
    await send(res, file.endsWith('404.html') ? 404 : 200, body, TYPES[extname(file)] || 'application/octet-stream');
  } catch (error) {
    await send(res, 500, `erreur : ${error.message}`, 'text/plain; charset=utf-8');
  }
});

execSync('node scripts/build.mjs', { stdio: 'inherit' });
server.listen(PORT, () => console.log(`site local : http://localhost:${PORT}/`));
