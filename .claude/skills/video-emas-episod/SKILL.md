---
name: video-emas-episod
description: Tambah episod baru (EP10, EP11 ...) ke siri soal jawab emas video.taufik.fyi milik Taufik Musa (repo taufikmusa/video-emas, GitHub Pages) — encode video yang diupload, baca caption, tulis topik dan komen gaya live dalam slides-data.js, bina page EP, og.jpg dan poster kad dari gambar yang diberi, tambah kad di main page, buka PR dan merge/deploy. Guna skill ini SETIAP KALI Taufik sebut "episod baru", "next episod", "EP10", "dah upload video ep", "buat komen ep", "tajuk dia ...", atau bagi gambar + tajuk untuk EP, atau minta ubah player/main page video.taufik.fyi — walaupun dia tak sebut nama skill.
---

# Episod baru untuk video.taufik.fyi

Siri soal jawab emas Public Gold. Main page `index.html` senaraikan semua EP
(terbaru di atas); setiap `epNN/` ialah player swipe gaya TikTok dengan komen
naik, emoji, butang bunyi, Home dan CTA Daftar. Rupa dan enjin player dikongsi
dari `assets/` — EP baru cuma perlukan data, video dan dua gambar.

```
index.html              main page; array EPISODES + NEXT_EP (kad "akan datang")
assets/player.js|css    enjin player (jangan salin ke folder EP)
assets/comments.js      enjin komen
assets/img/epNN.webp    poster kad main page
epNN/index.html         blok OG + markup, salinan EP sebelum
epNN/slides-data.js     topik + komen setiap video
epNN/og.jpg             preview WhatsApp 1200x630
epNN/videos/qN.mp4      video, H.264 720x1280, faststart
```

Skrip ada dalam `.claude/skills/video-emas-episod/scripts/` (rujuk sebagai `$K`).
Untuk skrip Node: `NODE_PATH=$(npm root -g)`. Rangkaian sandbox block
`*.taufik.fyi`, jadi semua semakan dibuat pada fail repo, bukan site live.

## Aliran kerja

### 0. Sedia folder (kalau Taufik baru nak mula)
Cipta `epNN/videos/README.md` ringkas, commit, push terus ke `main` (perubahan
kecil). Minta Taufik upload video ke folder tu, kemudian bagi **tajuk** dan
**satu gambar** dari video.

### 1. Ambil upload dan encode
```bash
git fetch origin && git checkout -B <branch-kerja> origin/main
bash $K/encode.sh epNN
```
Upload Taufik biasanya tiada faststart dan bitrate ~2.2Mbps (8MB/30s). Skrip ni
rename ikut nombor jadi `q1..qN`, encode semula (lebih kurang separuh saiz) dan
cetak tempoh setiap clip. Jumlahkan tempoh → minit untuk kad (bundarkan).
Kalau Taufik upload ke tempat salah (fail di luar `videos/`, avatar dalam
`videos/`), pindahkan dengan `git mv` dan beritahu dia.

### 2. Baca caption
```bash
bash $K/captions.sh overview epNN /tmp/ov.png     # cari tinggi caption setiap clip
bash $K/captions.sh strip epNN/videos/q1.mp4 /tmp/c1.png 870 130
```
Tengok gambar dengan Read. Caption biasanya di y≈870 (70% tinggi), kadang
y≈655 atau 760 — ubah y bila jalur kosong atau teks terpotong. Clip >55 s
terpotong di hujung tile: ulang dengan argumen ke-5 `48` (mula dari saat 48).
Tulis semula skrip setiap clip dalam ayat penuh sebelum mula tulis komen.
Biasanya clip ialah cerita kucing (Oyen/Oren, Mama, Putih) diikuti presenter
wanita yang beri pengajaran emas. Clip terakhir jadi slide CTA.

### 3. Tulis `epNN/slides-data.js`
Baca `references/komen.md` dulu — format, bilangan komen ikut tempoh, gaya
penonton, fakta dealer yang dibenarkan dan claim yang mesti dilembutkan.

### 4. Bina page EP dan kad main page
```bash
python3 $K/new_ep.py . NN --title "Tajuk dari Taufik" --desc "1 ayat ringkas cerita EP" \
  --mins 6 --tags "Disiplin,Mula kecil,Kecemasan" --soalan "Topik 1 ringkas|Topik 2|..."
```
Tajuk guna ejaan Taufik; besarkan huruf nama watak ("Oyen"). Tag 3-5, guna
semula tag EP lain bila sesuai supaya chip carian main page berguna.
Skrip naikkan NEXT_EP sendiri dan selamat diulang.

### 5. Gambar
Simpan gambar dari Taufik (lampiran chat) dan jalankan:
```bash
NODE_PATH=$(npm root -g) node $K/render_images.js . NN /path/gambar.webp <slide>
```
`<slide>` = nombor clip yang gambar tu datang dari (padankan caption dalam
gambar dengan bacaan langkah 2), supaya topik dan komen dalam poster sepadan
dengan gambar. Hantar `/tmp/epNN-og.png` dan `/tmp/epNN-poster.png` kepada
Taufik dengan SendUserFile.

### 6. Semak, commit, PR
```bash
NODE_PATH=$(npm root -g) node $K/check.js .
```
Mesti "semua lulus". Video tak main dalam Chromium sandbox (tiada H.264) — normal.
Commit (mesej Melayu, terangkan apa dan kenapa), push branch kerja, buka PR ke
`main` dengan senarai topik setiap slide.

### 7. Tunjuk draf, kemudian merge
`slides-data.js` ialah **kandungan**, jadi jangan merge sebelum Taufik setuju.
Dalam balasan: jadual clip → cerita → topik, satu contoh komen, dan senarai
claim video yang dilembutkan. Bila dia kata "merge":
merge PR (dengan `expectedHeadSha`), tunggu ~1-2 minit, semak run
"pages build and deployment" berjaya, dan beri link `video.taufik.fyi/epNN/`.

Perubahan kecil bukan kandungan (fix susun atur, fail tersalah upload, butang)
boleh terus merge selepas `check.js` lulus — Taufik dah benarkan dalam sesi
asal, tapi sahkan semula sekali dalam sesi baru.

## Cara bercakap dengan Taufik
Bahasa Melayu Malaysia santai, istilah teknikal kekal English. Ringkas dan
terus: apa dah siap, apa dia kena buat, apa yang aku putuskan sendiri.
