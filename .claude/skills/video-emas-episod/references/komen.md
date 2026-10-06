# Panduan topik dan komen `slides-data.js`

Baca fail ni sebelum tulis `slides-data.js` untuk EP baru. Contoh rujukan
terbaik: `ep08/slides-data.js` dan `ep09/slides-data.js`.

## Format

```js
const SLIDES = [
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Soalan pendek yang orang betul-betul tanya?",
    comments: [
      {n:"Nama Penonton", t:"komen santai"},
      {n:"Taufik", t:"Jawapan dealer.", reply:true},
    ],
    cta_label: "Daftar"          // slide akhir: "Buka Akaun Emas GAP"
  },
];
```

Jangan declare `const`/`let` lain dalam fail ni dan jangan letak `cta_url`.
Player dah tetapkan link CTA dalam `assets/player.js`.

## Topik (`topic`)

- Satu soalan, 40-60 aksara, dalam bentuk yang penonton akan taip:
  "Gaji RM2,000 tapi idam kereta ansuran RM3,000?"
- Ikut cerita clip tu sendiri (baca caption dulu), bukan tema umum.
- Senarai `soalan` untuk kad main page ialah versi lebih pendek topik ni,
  tanpa tanda soal: "Gaji RM2,000 idam kereta ansuran RM3,000".

## Bilangan komen ikut panjang clip

Enjin komen jarakkan komen ikut tempoh clip, maksimum 5.2 saat antara komen.
Kalau komen sikit sangat, feed habis dan mula ulang sebelum clip tamat,
dan ulangan tu yang paling cepat tunjuk komen bukan masa nyata.

| Tempoh clip | Komen |
|---|---|
| ~10 s | 5-6 |
| ~30 s | 7 |
| 40-60 s | 10-12 |
| ~70 s | 12-13 |
| Slide CTA akhir | tambah 2 (soalan buka akaun) |

Kira-kira 3 daripada 7 ialah jawapan dealer, berselang dengan komen penonton.

## Komen penonton

- Nama Melayu penuh yang berbeza-beza, campur lelaki/perempuan, kadang gelaran
  ("Kak Mah Selayang", "Mak Long Zaitun"). Jangan ulang nama dari EP lain kalau boleh.
- Gaya taip betul-betul: huruf kecil, singkatan (skrg, aku, tu, je, la),
  1 emoji sekali-sekala. Bukan ayat iklan.
- Campur jenis: reaksi pada cerita ("oren tu sebiji macam aku 😭"), pengalaman
  sendiri ("masa banjir 2021 duit dalam laci habis lunyai"), soalan yang buka
  ruang jawapan dealer ("emas betul tak rosak kena air ke"), dan setuju
  ("sedia payung sebelum hujan. noted").
- Petik ayat dari caption video bila sesuai — penonton memang buat macam tu.

## Jawapan dealer (`reply:true`, nama "Taufik")

Nada tenang, berfakta, satu-dua ayat. Tak menjual keras.

Fakta yang **boleh** dipakai (semua dah muncul dalam EP sebelum ni):
- Akaun Emas GAP: buka percuma, tak sampai 5 minit dengan bantuan dealer.
- Beli mula dari RM100. Tiada kewajipan bayar setiap bulan.
- Jenis akaun ikut umur; kanak-kanak didaftar ibu bapa.
- Emas disimpan oleh Public Gold; boleh withdraw jadi goldbar atau dinar, pos ke rumah.
- Public Gold ditubuhkan sejak 2008, lebih 2 juta penyimpan.
- 1 Dinar = 4.25 gram emas 999. Goldbar dan dinar 999 untuk simpanan; 916 untuk perhiasan, ada upah.
- Harga sejarah Public Gold yang ada dalam video (contoh 10 gram: 2021 ~RM2,700, kini >RM6,000) —
  sentiasa disertai "prestasi lalu bukan jaminan".
- Tunai kecemasan perlu ada dulu; emas untuk jangka panjang (2 tahun ke atas).

**Jangan**:
- Janji untung atau kata harga pasti naik.
- Kata emas "kalis api/terbakar" walaupun video sebut — emas boleh cair dalam
  kebakaran rumah. Cukup sebut tak berkarat, tak reput bila kena air.
- Reka fakta baru (caj, peratus, jaminan syariah baru, kadar keuntungan).
  Kalau caption sebut fakta yang tiada dalam senarai atas, tanya Taufik dulu.

Bila video buat claim kuat, dealer lembutkan dalam jawapan — dan beritahu
Taufik dalam ringkasan PR apa yang dilembutkan dan kenapa.

## Slide akhir (CTA)

`cta_label: "Buka Akaun Emas GAP"`. Komen tambahan fokus pada halangan
buka akaun: percuma ke, susah tak, selamat ke, emas simpan mana,
kena bayar setiap bulan ke.
