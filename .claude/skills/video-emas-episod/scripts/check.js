/* Semakan sebelum PR: data, video dan browser.
 *
 *   NODE_PATH=$(npm root -g) node check.js <repo>
 *
 * Untuk setiap epNN: slides-data.js boleh parse, setiap `video:` wujud,
 * tiada video berulang atau tak dipakai, setiap slide ada topik + CTA,
 * semua mp4 ada faststart. Kemudian buka setiap EP dan main page dalam
 * Chromium: counter, komen naik, tiada JS error, tiada 404.
 * (Video tak main dalam Chromium sandbox sebab tiada codec H.264 — itu normal.)
 */
const fs = require('fs'), path = require('path'), http = require('http');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const repo = process.argv[2] || '.';
let bad = 0;
const eps = fs.readdirSync(repo).filter(d => /^ep\d\d$/.test(d)).sort();

for (const d of eps) {
  const dir = path.join(repo, d);
  if (!fs.existsSync(path.join(dir, 'slides-data.js'))) { console.log(`${d}: (tiada slides-data.js, dilangkau)`); continue; }
  let S; try { S = new Function(fs.readFileSync(path.join(dir, 'slides-data.js'), 'utf8') + ';return SLIDES;')(); }
  catch (e) { console.log(`${d}: PARSE ERROR ${e.message}`); bad++; continue; }
  const vids = fs.existsSync(path.join(dir, 'videos')) ? fs.readdirSync(path.join(dir, 'videos')).filter(f => f.endsWith('.mp4')) : [];
  const loose = fs.readdirSync(dir).filter(f => f.endsWith('.mp4'));
  const have = new Set(vids.map(f => 'videos/' + f));
  const used = new Set(S.map(s => s.video));
  const issues = [];
  S.filter(s => !have.has(s.video)).forEach(s => issues.push(`hilang ${s.video}`));
  [...have].filter(v => !used.has(v)).forEach(v => issues.push(`tak dipakai ${v}`));
  if (used.size !== S.length) issues.push('video berulang');
  if (loose.length) issues.push(`mp4 di luar videos/: ${loose}`);
  S.forEach(s => { if (!s.topic || !s.cta_label) issues.push(`slide ${s.id} tiada topic/cta`); });
  const noFast = vids.filter(f => {
    try { execFileSync('sh', ['-c', `ffprobe -v trace "${path.join(dir, 'videos', f)}" 2>&1 | grep -o "type:'moov'\\|type:'mdat'" | head -1 | grep -q moov`]); return false; }
    catch { return true; }
  });
  if (noFast.length) issues.push(`tiada faststart: ${noFast}`);
  ['og.jpg', 'index.html'].forEach(f => { if (!fs.existsSync(path.join(dir, f))) issues.push(`tiada ${f}`); });
  if (!fs.existsSync(path.join(repo, 'assets/img', `${d}.webp`))) issues.push(`tiada assets/img/${d}.webp`);
  const cm = S.map(s => (s.comments || []).length).join(' ');
  console.log(`${d}: ${S.length} slide | komen ${cm} | CTA akhir "${S[S.length - 1].cta_label}"` + (issues.length ? `  ✗ ${issues.join('; ')}` : '  ✓'));
  bad += issues.length;
}

const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4' };
const server = http.createServer((req, res) => {
  let f = path.join(repo, decodeURIComponent(req.url.split('?')[0])); if (f.endsWith('/')) f += 'index.html';
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': mime[path.extname(f)] || 'application/octet-stream' }); res.end(d); });
});
(async () => {
  await new Promise(r => server.listen(0, r)); const port = server.address().port;
  const b = await chromium.launch({ executablePath: fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined });
  for (const d of eps.filter(d => fs.existsSync(path.join(repo, d, 'slides-data.js')))) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 } });
    const errs = [], nf = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('response', r => { if (r.status() >= 400 && r.url().includes(`localhost:${port}`)) nf.push(r.url().split(String(port))[1]); });
    await p.goto(`http://localhost:${port}/${d}/`); await p.waitForTimeout(3500);
    const c = await p.textContent('#count'), k = await p.$$eval('.c-row', x => x.length);
    const ok = !errs.length && !nf.length && k > 0;
    console.log(`browser ${d}: ${c} komen-naik=${k}` + (ok ? '  ✓' : `  ✗ err=${errs} 404=${nf}`)); if (!ok) bad++;
    await p.close();
  }
  const p = await b.newPage({ viewport: { width: 1300, height: 900 } }); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(`http://localhost:${port}/`); await p.waitForTimeout(800);
  const order = (await p.$$eval('#grid .ep-badge', x => x.map(e => e.textContent))).join(' ');
  const posters = await p.$$eval('.poster-mini img', x => x.length);
  console.log(`main page: ${order} | poster ${posters} | stat ${await p.textContent('#stEp')} EP / ${await p.textContent('#stQ')} soalan` + (errs.length ? `  ✗ ${errs}` : '  ✓'));
  if (errs.length) bad++;
  await b.close(); server.close();
  console.log(bad ? `\n${bad} masalah` : '\nsemua lulus'); process.exit(bad ? 1 : 0);
})();
