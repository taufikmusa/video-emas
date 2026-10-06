/* Jana og.jpg (1200x630) dan poster kad (380x559) untuk satu EP.
 *
 *   node render_images.js <repo> <N> <gambar> [slide=1]
 *
 * <gambar>  : gambar dari video yang Taufik bagi (webp/png/jpg menegak).
 * slide     : nombor slide (1..) yang gambar tu datang dari, supaya topik
 *             dan komen dalam poster padan dengan gambar.
 *
 * Poster = tangkap layar player sebenar dengan gambar sebagai latar video
 * (Chromium sandbox tiada codec H.264, jadi video tak boleh dirender).
 * og.jpg ikut susun atur EP07/EP08: gambar dalam bingkai emas di kiri,
 * host + chip EP + tajuk di kanan.
 *
 * Perlu: Playwright (NODE_PATH=$(npm root -g)), ffmpeg, font Inter.
 * Output: <repo>/epNN/og.jpg dan <repo>/assets/img/epNN.webp
 *         + salinan PNG dalam /tmp untuk ditunjuk kepada Taufik.
 */
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');

const [repo, N, img, slideArg] = process.argv.slice(2);
if (!repo || !N || !img) { console.error('guna: node render_images.js <repo> <N> <gambar> [slide]'); process.exit(1); }
const n = String(N).padStart(2, '0');
const slide = Math.max(1, parseInt(slideArg || '1', 10)) - 1;
const CHROME = fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined;

/* tajuk, bilangan video dan minit diambil dari kad main page */
const main = fs.readFileSync(path.join(repo, 'index.html'), 'utf8');
const src = main.slice(main.indexOf('const EPISODES'), main.indexOf('/* Kad "akan datang"'));
const EP = new Function(src + ';return EPISODES;')().find(e => e.ep === Number(N));
if (!EP) { console.error(`EP${n} tiada dalam EPISODES — jalankan new_ep.py dulu`); process.exit(1); }

const mime = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.webp':'image/webp',
  '.png':'image/png', '.jpg':'image/jpeg', '.mp4':'video/mp4' };
const server = http.createServer((req, res) => {
  let f = path.join(repo, decodeURIComponent(req.url.split('?')[0]));
  if (f.endsWith('/')) f += 'index.html';
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(f)] || 'application/octet-stream' }); res.end(d); });
});

const b64 = (f) => `data:image/${path.extname(f).slice(1).replace('jpg','jpeg')};base64,` + fs.readFileSync(f).toString('base64');
const esc = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');

const ogHtml = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(120% 90% at 20% 10%,#1d1b17 0%,#0b0b0b 60%,#080808 100%)}
.phone{position:absolute;left:56px;top:52px;width:296px;height:526px;border-radius:20px;overflow:hidden;
  border:3px solid #FFCE32;box-shadow:0 18px 50px rgba(0,0,0,.6)}
.phone img{width:100%;height:100%;object-fit:cover;object-position:center 35%}
.right{position:absolute;left:396px;right:56px;top:52px;bottom:52px}
.host{display:flex;align-items:center;gap:14px}
.host img{width:58px;height:58px;border-radius:50%;border:2.5px solid #FFCE32;object-fit:cover;background:#fff}
.hn{font-size:24px;font-weight:700}.hs{font-size:17px;color:rgba(255,255,255,.6);margin-top:2px}
.chip{position:absolute;right:0;top:8px;background:#FFCE32;color:#120d00;font-weight:800;font-size:17px;
  letter-spacing:.06em;padding:9px 16px;border-radius:8px}
.eyebrow{position:absolute;top:168px;display:flex;align-items:center;gap:14px;color:#FFCE32;font-weight:800;font-size:18px;letter-spacing:.14em}
.eyebrow i{width:52px;height:5px;background:#FFCE32;border-radius:3px}
h1{position:absolute;top:214px;left:0;right:0;font-size:62px;line-height:1.1;font-weight:800;letter-spacing:-.015em}
.foot{position:absolute;left:0;right:0;bottom:0;border-top:1.5px solid rgba(255,255,255,.12);padding-top:22px;
  display:flex;justify-content:space-between;font-size:20px}
.foot span{color:rgba(255,255,255,.75)}.foot b{color:#FFCE32;font-weight:700}
</style></head><body>
<div class="phone"><img src="${b64(img)}"></div>
<div class="right">
  <div class="host"><img src="${b64(path.join(repo,'assets/avatar.webp'))}"><div><div class="hn">Taufik Musa</div><div class="hs">Dealer Public Gold</div></div></div>
  <div class="chip">SIRI SOAL JAWAB · EP${n}</div>
  <div class="eyebrow"><i></i>SIMPAN EMAS FIZIKAL</div>
  <h1>${esc(EP.title)}</h1>
  <div class="foot"><span>${EP.videos} soalan pendek · swipe &amp; faham dalam ${EP.mins} minit</span><b>simpanemasfizikal.com</b></div>
</div></body></html>`;

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const b = await chromium.launch({ executablePath: CHROME });

  const p = await b.newPage({ viewport: { width: 380, height: 559 }, deviceScaleFactor: 1 });
  await p.goto(`http://localhost:${port}/ep${n}/`);
  await p.evaluate(([src, i]) => {
    const sec = document.querySelectorAll('.slide')[i];
    document.getElementById('feed').scrollTop = sec.offsetTop;
    const im = document.createElement('img'); im.src = src;
    im.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1';
    sec.insertBefore(im, sec.firstChild.nextSibling);
    document.getElementById('soundCue').style.display = 'none';
  }, [b64(img), slide]);
  await p.waitForTimeout(9500);               // tunggu disclaimer hilang + 3 komen naik
  const posterPng = `/tmp/ep${n}-poster.png`;
  await p.screenshot({ path: posterPng });

  const o = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await o.setContent(ogHtml); await o.waitForTimeout(400);
  const ogPng = `/tmp/ep${n}-og.png`;
  await o.screenshot({ path: ogPng });
  await b.close(); server.close();

  execFileSync('ffmpeg', ['-loglevel','error','-y','-i',ogPng,'-q:v','3',path.join(repo,`ep${n}`,'og.jpg')]);
  execFileSync('ffmpeg', ['-loglevel','error','-y','-i',posterPng,'-c:v','libwebp','-quality','80',path.join(repo,'assets/img',`ep${n}.webp`)]);
  console.log(`siap: ep${n}/og.jpg, assets/img/ep${n}.webp\npratonton: ${ogPng} ${posterPng}`);
})();
