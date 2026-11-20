import fs from 'node:fs';
import path from 'node:path';
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const dir = path.resolve(args.find(a => !a.startsWith('--') && a !== opt('--ledger') && a !== opt('--today')) || '.');
const window = {}; eval(fs.readFileSync(path.join(dir, 'calendar.js'), 'utf8'));
const C = window.CAL;
const len = s => [...s].reduce((a, c) => a + (c.codePointAt(0) > 0x2000 ? 2 : 1), 0);
const tags = s => (s.match(/#\w+/g) || []).filter(t => !/^#\d/.test(t)).length;
let bad = 0, warn = 0;
const fail = (w, k, m) => { bad++; console.log('FAIL', w, k, m); };
const note = (w, k, m) => { warn++; console.log('WARN', w, k, m); };
const RULES = [
  ['X thread', { per: 280, split: /\n\n(?=\d+\/ )/, tags: [0, 2] }],
  ['X', { max: 280, tags: [0, 2] }],
  ['Answer', { max: 280 }],
  ['Bluesky thread', { per: 300, split: /\n\n—\n\n/, tags: [0, 0] }],
  ['Bluesky', { max: 300, tags: [0, 0] }],
  ['Threads', { max: 500, tags: [0, 1] }],
  ['Mastodon', { soft: 500 }],
  ['LinkedIn', { max: 3000, tags: [3, 5] }],
  ['Facebook', { soft: 63206, tags: [0, 3] }],
  ['Instagram', { max: 2200, tags: [3, 10] }],
  ['Reels caption', { max: 2200, tags: [3, 10] }],
  ['TikTok caption', { max: 2200, soft: 150, tags: [3, 5] }],
  ['Shorts caption', { under: 150, need: '#shorts', tags: [0, 3] }],
  ['YouTube Shorts title', { max: 100, soft: 70 }],
  ['YouTube title', { max: 100, soft: 70 }],
  ['Pinterest', { soft: 500, tags: [0, 0] }],
  ['Alt text', { soft: 1000 }]
].sort((a, b) => b[0].length - a[0].length);
const banned = (C.banned || ['—', "isn't just"]).map(s => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
const weeks = C.weeks || [];
const dated = weeks.flatMap(w => w.days).flatMap(d => [d, d.also && { ...d.also, date: d.date, dow: d.dow }].filter(Boolean));
const prod = dated.filter(d => d.copy);
const all = [...prod, ...(C.spares || []).map((d, i) => ({ ...d, date: 'spare-' + i }))].filter(d => d.copy);
const pillarIds = new Set((C.pillars || []).map(p => p.id));
for (const d of all) {
  const w = d.date;
  for (const f of ['pillar', 'title', 'format', 'platforms', 'media', 'hooks']) if (d[f] == null) fail(w, f, 'missing');
  if (d.pillar && !pillarIds.has(d.pillar)) fail(w, 'pillar', 'unknown ' + d.pillar);
  if (d.hooks && (!Array.isArray(d.hooks.list) || d.hooks.list.length < 5 || d.hooks.list[d.hooks.pick] == null || !d.hooks.why)) fail(w, 'hooks', 'need 5 variants, a valid pick and why');
  if ((d.media || []).some(m => m.type === 'img') && !d.copy.some(c => c.k.startsWith('Alt text'))) note(w, 'Alt text', 'image without alt text');
  for (const { k, t } of d.copy) {
    if (banned.some(r => r.test(t.replace(/\n\n—\n\n/g, '\n\n')))) fail(w, k, 'banned pattern');
    const rule = RULES.find(([p]) => k.startsWith(p));
    if (!rule) { note(w, k, 'no limit rule for this key'); continue; }
    const r = rule[1];
    const parts = r.split ? t.split(r.split) : [t];
    if (r.per) parts.forEach((p, i) => { if (len(p) > r.per) fail(w, k, `post ${i + 1}: ${len(p)} > ${r.per}`); });
    if (r.max && len(t) > r.max) fail(w, k, `${len(t)} > ${r.max}`);
    if (r.under && len(t) >= r.under) fail(w, k, `${len(t)} >= ${r.under}`);
    if (r.soft && len(t) > r.soft) note(w, k, `${len(t)} > ${r.soft} recommended`);
    if (r.need && !t.includes(r.need)) fail(w, k, 'needs ' + r.need);
    if (r.tags) { const n = tags(t); if (n < r.tags[0] || n > r.tags[1]) fail(w, k, `hashtags ${n}, want ${r.tags[0]}-${r.tags[1]}`); }
  }
  for (const m of d.media || []) if (!fs.existsSync(path.join(dir, m.src))) fail(w, 'media', 'missing ' + m.src);
}
const dates = weeks.flatMap(w => w.days).map(d => d.date).filter(Boolean).sort();
const monday = s => { const d = new Date(s + 'T12:00:00Z'); return new Date(d.getTime() - ((d.getUTCDay() + 6) % 7) * 864e5); };
const span = dates.length ? Math.round((monday(dates.at(-1)) - monday(dates[0])) / 864e5) + 7 : 0;
if (span < 28) fail('plan', 'period', `${span / 7} weeks, need 4 or more`);
const today = opt('--today') || new Date().toISOString().slice(0, 10);
if (dates[0] && dates[0] < today) note('plan', 'period', `starts ${dates[0]}, before today ${today}`);
const by = {}; prod.forEach(d => by[d.pillar] = (by[d.pillar] || 0) + 1);
for (const p of C.pillars || []) {
  const s = (by[p.id] || 0) / (prod.length || 1);
  if (s > 0.4) fail('plan', 'pillar', `${p.id} ${(s * 100).toFixed(0)}% > 40%`);
  if (p.promo && s > 0.15) fail('plan', 'pillar', `${p.id} promotional ${(s * 100).toFixed(0)}% > 15%`);
}
const memes = {};
for (const d of all) if (!d.meme && /\bmeme\b/i.test(d.title + ' ' + d.format)) note(d.date, 'meme', 'looks like a meme post but has no meme field');
for (const d of all) if (d.meme) { const k = d.meme.toLowerCase().trim(); if (memes[k]) fail(d.date, 'meme', `template "${d.meme}" already used on ${memes[k]}`); memes[k] = d.date; }
const ledger = opt('--ledger');
if (ledger && fs.existsSync(ledger)) for (const e of JSON.parse(fs.readFileSync(ledger, 'utf8'))) if (e.period !== C.period && memes[e.template.toLowerCase().trim()]) fail(memes[e.template.toLowerCase().trim()], 'meme', `template "${e.template}" used in an earlier plan (${e.date})`);
const trendSrc = (C.trends || []).filter(t => t.src).length;
for (const d of prod) if (d.trend && !trendSrc) fail(d.date, 'trend', 'no sourced entry in CAL.trends');
for (const t of C.trends || []) if (!t.src && !/unconfirmed|conflict/i.test(t.status || '')) note(t.date, 'trend', `"${t.name}" has no source`);
const gapMax = C.maxGap ?? 3;
const primary = new Set(((C.page || {}).platforms || []).filter(r => /^primary/i.test(r.role || '')).map(r => r.name));
const plats = [...new Set(prod.flatMap(d => d.platforms))];
const flex = dated.filter(d => d.flex).length;
console.log('posts', prod.length, '| flexible', flex, `(${(flex / (prod.length + flex || 1) * 100).toFixed(0)}%)`, '| span', span, 'days');
console.log('pillars', Object.entries(by).map(([k, v]) => `${k} ${v} (${(v / prod.length * 100).toFixed(0)}%)`).join(', '));
const side = Object.fromEntries((C.pillars || []).map(p => [p.id, p.side]));
const nSub = prod.filter(d => side[d.pillar] === 'subject').length;
console.log('split', `subject ${nSub} / around ${prod.length - nSub}`);
for (const p of plats) {
  const ds = [...new Set(prod.filter(d => d.platforms.includes(p)).map(d => d.date))].sort().map(x => new Date(x));
  let mx = 0; for (let i = 1; i < ds.length; i++) mx = Math.max(mx, (ds[i] - ds[i - 1]) / 864e5 - 1);
  const line = `${p}: ${ds.length} posts, longest silence ${mx} days`;
  const lim = primary.size === 0 || primary.has(p) ? gapMax : 7;
  if (ds.length >= weeks.length && mx > lim) fail('plan', 'gap', line + ` > ${lim}${lim === 7 ? ' (secondary)' : ''}`); else console.log(line);
}
console.log(bad ? `${bad} failures, ${warn} warnings` : `all checks pass (${warn} warnings)`);
process.exit(bad ? 1 : 0);
