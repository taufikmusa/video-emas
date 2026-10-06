# video.taufik.fyi

Siri Soal Jawab Emas — main page + player swipe setiap EP, host di GitHub Pages.

```
/                     main page (senarai episod)
/assets/              benda yang dikongsi semua EP
  player.css          gaya player swipe
  player.js           enjin player (autoplay, bunyi, progress, emoji, CTA)
  comments.js         enjin komen naik
  avatar.webp         gambar profil dalam header player
  site-icon.png       ikon kad PIN + CTA akhir
  img/                gambar main page: ep01.webp..ep07.webp, profile-cut.webp,
                      profile-cut-460.webp, favicon.png, og.jpg
/ep01/
  index.html          blok OG + markup sahaja
  slides-data.js      topik + komen setiap video
  og.jpg              preview WhatsApp (1200x630, bawah 600KB)
  videos/q1.mp4 ...   video
```

## Fail yang perlu diupload (belum ada dalam repo)

- `assets/avatar.webp`, `assets/site-icon.png` — ambil dari folder `ep01/deploy` lama
- `assets/img/` — semua gambar main page
- `ep01/og.jpg`, `ep01/videos/q1.mp4` … `q10.mp4`

## Gambar poster setiap EP

Letak tangkap layar halaman EP dalam `assets/img/` ikut nama nombor EP:

```
assets/img/ep01.webp   assets/img/ep02.webp   ...   assets/img/ep08.webp
```

Kad main page ambil sendiri ikut nombor, tak perlu edit `index.html`.
Kalau fail belum ada, kad tunjuk butang play (bukan gambar pecah).
Saiz cadangan: potret lebih kurang 380x540, format `.webp`, bawah 60KB.
Tiga telefon dalam hero guna `ep01`, `ep02` dan `ep04`.

Upload: github.com → repo → masuk folder `assets/img` → **Add file → Upload files**
→ drag semua gambar → Commit. Site update sendiri dalam 1-2 minit.

## Tambah EP baru (contoh EP02)

1. Salin folder `ep01/` jadi `ep02/`.
2. Dalam `ep02/index.html`: tukar blok OG (tajuk, `ep01` → `ep02` dalam URL) dan `EP_NUM = 2`.
3. Ganti `ep02/slides-data.js`, `ep02/og.jpg`, dan video dalam `ep02/videos/`.
4. Dalam `index.html` (main page): tukar `url` EP02 jadi `"ep02/"`.

## Had GitHub Pages yang perlu tahu

- Satu fail maksimum **100MB**; upload melalui web github.com maksimum 25MB satu fail.
- Saiz site disyorkan bawah **1GB**, bandwidth soft limit **100GB/bulan**.
- Fail `_headers` Cloudflare tak dipakai — GitHub Pages set cache sendiri (10 minit).
- Kalau trafik ads naik tinggi, video boleh dipindah ke Cloudflare R2 dan
  `video:` dalam `slides-data.js` ditukar jadi URL penuh. HTML kekal di sini.

## Setup domain

1. Repo Settings → Pages → Source: branch `main`, folder `/ (root)`.
2. Fail `CNAME` dah ada (`video.taufik.fyi`).
3. DNS Cloudflare: `CNAME  video  →  taufikmusa.github.io`, **DNS only (awan kelabu)**
   sampai GitHub siap keluarkan SSL, lepas tu tick "Enforce HTTPS".
