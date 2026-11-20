import fs from 'node:fs';
import path from 'node:path';
const D = path.resolve(process.argv[2] || '.');
let a = fs.readFileSync(path.join(D, 'index.html'), 'utf8');
a = a.replace(/<!doctype html>\s*<html[^>]*>\s*<head>\s*<meta charset="utf-8"\s*\/?>\s*<meta name="viewport"[^>]*>\s*/i, '').replace(/<\/head>\s*<body>\s*/i, '').replace(/<\/body>\s*<\/html>\s*$/i, '\n').replace(/<a href="\$\{m\.src\}" download>Download<\/a>/g, '');
if (/<html|<body|download>/i.test(a)) throw new Error('strip failed: index.html no longer matches the template shell');
fs.writeFileSync(path.join(D, 'artifact.html'), a);
const window = {}; eval(fs.readFileSync(path.join(D, 'calendar.js'), 'utf8'));
const C = window.CAL;
const s = new Set(['calendar.js']);
for (const d of [...C.weeks.flatMap(w => w.days).flatMap(d => [d, d.also].filter(Boolean)), ...(C.spares || [])]) for (const m of d.media || []) s.add(m.src);
const files = {};
for (const f of s) { if (!fs.existsSync(path.join(D, f))) throw new Error('missing ' + f); files[f] = path.join(D, f); }
fs.writeFileSync(path.join(D, 'artifact-files.json'), JSON.stringify(files, null, 1));
console.log('wrote', path.join(D, 'artifact.html'), '| files', s.size, '->', path.join(D, 'artifact-files.json'));
