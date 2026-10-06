/* ============================================================
   SLIDES DATA — EDIT FAIL NI SAHAJA
   ============================================================

   Satu objek = satu slide (satu video penuh skrin).

     id        : nombor slide, kekal 1..10 ikut susunan array
     video     : nama fail dalam folder videos/
     topic     : label soalan kecil yang papar atas komen
     comments  : array komen. {n:"Nama", t:"Teks"} = komen pelanggan
                 {n:"Taufik", t:"...", reply:true} = jawapan dealer (kotak emas)
     cta_label : teks butang
     (link butang ditetapkan oleh CTA_URL dalam index.html, bukan di sini)

   Nak tukar susunan slide: tukar nilai `video` antara objek.
   Nak tambah/buang slide: tambah/buang objek — progress bar "x/10"
   auto ikut panjang array, tak payah sentuh index.html.

   Timing komen: satu komen setiap ~2.0-3.2 saat. Clip ~10 saat dan
   berulang (loop), jadi 5-6 komen satu slide dah cukup sebelum ia
   kitar semula.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — inflasi ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "RM100 hari ni tak sama macam RM100 dulu?",
    comments: [
      {n:"Hafiz Rahman", t:"betul ni.. dulu 100 penuh satu troli 😩"},
      {n:"Nurul Ain", t:"skrg 100 dapat dua beg je"},
      {n:"Taufik", t:"Duit sama, kuasa beli berbeza. Sebab itu sebahagian simpanan perlu ditukar jadi aset yang tak dimakan inflasi.", reply:true},
      {n:"Amir Hakim", t:"jadi emas boleh lawan inflasi la ye"},
      {n:"Taufik", t:"Emas bukan jaminan untung. Tapi sejarah panjangnya menjaga nilai — dan ia perlu masa, 2 tahun ke atas.", reply:true},
      {n:"Sofea Adlina", t:"aku baru start sedar benda ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : PROOF — 5 gram ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Emas 5 gram: harga dulu vs hari ini",
    comments: [
      {n:"Zulhilmi", t:"naik dua kali ganda dalam 4 tahun? serius?"},
      {n:"Taufik", t:"Itu harga 5 gram Public Gold. Semua harga boleh disemak sendiri dalam app — tak perlu ikut cakap sesiapa.", reply:true},
      {n:"Aina Sofia", t:"alaaa dah mahal skrg, dah terlambat ke"},
      {n:"Taufik", t:"Soalan yang sama ditanya setiap tahun. Yang menentukan hasil bukan harga masuk, tapi berapa lama anda simpan.", reply:true},
      {n:"Faiz Aiman", t:"start kecil pun ok kot"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : TINGKAH LAKU — 2 tips ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Susah nak simpan duit? Ada 2 tips",
    comments: [
      {n:"Mira Hanani", t:"gaji masuk je terus habis 😭"},
      {n:"Hafiz Rahman", t:"tip kedua tu betul, susahkan pengeluaran"},
      {n:"Taufik", t:"Betul. Bila simpanan ditukar jadi gram emas, ia tak semudah itu nak dikeluarkan — itu yang lindungi simpanan anda.", reply:true},
      {n:"Nabila Yusof", t:"jadi kena buat macam auto tolak la ye"},
      {n:"Taufik", t:"Boleh mula RM100 dan tambah bila ada lebih. Tiada kewajipan bayar setiap bulan.", reply:true},
      {n:"Rizal Amin", t:"ok nak cuba cara ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : EDUKASI — 999 vs 916 ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Beza emas 999 dan 916 untuk simpanan",
    comments: [
      {n:"Suraya Kamal", t:"aku ingat emas semua sama 😅"},
      {n:"Taufik", t:"916 ialah 22K, direka untuk perhiasan — ada upah dan reka bentuk dalam harganya.", reply:true},
      {n:"Kamal Ariffin", t:"jadi untuk simpan kena 999?"},
      {n:"Taufik", t:"Ya. Goldbar dan Dinar 999 direka khas untuk simpanan, bukan perhiasan.", reply:true},
      {n:"Wan Adilah", t:"patut la kalau jual balik ada beza harga"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : PROOF — 10 gram ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "10 gram emas: 2021 vs hari ini",
    comments: [
      {n:"Along Zainal", t:"2,700 jadi 6,000?? 😮"},
      {n:"Taufik", t:"Itu rekod harga 10 gram Public Gold. Prestasi lalu bukan jaminan masa depan — tapi ia sejarah yang berulang.", reply:true},
      {n:"Ika Roslan", t:"aku dulu ada niat nak beli tapi tangguh"},
      {n:"Taufik", t:"Ramai yang sama. Lebih baik mula kecil hari ini daripada tunggu 'masa yang sesuai' yang tak pernah sampai.", reply:true},
      {n:"Shahrul Nizam", t:"betul, tangguh je kerja aku"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : EDUKASI — dinar ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "1 Dinar bukan 1 gram — ini beratnya",
    comments: [
      {n:"Nadia Iskandar", t:"eh aku ingat dinar 1 gram 😅"},
      {n:"Taufik", t:"1 Dinar ialah 4.25 gram emas 999. Berat itu kekal sama sejak dahulu.", reply:true},
      {n:"Iman Danial", t:"boleh dapat dinar dari akaun emas gak ke?"},
      {n:"Taufik", t:"Boleh. Gram dalam Akaun Emas GAP boleh di-withdraw dalam bentuk goldbar atau dinar, pos terus sampai rumah.", reply:true},
      {n:"Hasan Bakri", t:"menarik untuk akikah ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : SOLUSI — gaji biasa ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Cara orang gaji biasa kumpul emas",
    comments: [
      {n:"Fauzi Hamid", t:"gaji 2k boleh ke nak simpan emas"},
      {n:"Taufik", t:"Boleh. Mula RM100 sebulan. Ia bukan pasal jumlah besar, ia pasal konsisten.", reply:true},
      {n:"Liyana Sabri", t:"tak payah beli terus satu bar ke?"},
      {n:"Taufik", t:"Tak perlu. Kumpul gram dulu dalam Akaun Emas GAP, bila cukup baru withdraw jadi goldbar fizikal.", reply:true},
      {n:"Ummu Hani", t:"ni patuh syariah ke?"},
      {n:"Taufik", t:"Ada jaminan patuh syariah untuk Akaun Emas GAP.", reply:true},
      {n:"Azhar Yaakob", t:"ni yang aku cari sebenarnya"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : PROOF — jangka panjang ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Tahun 2000: 1 kilo emas RM35,000",
    comments: [
      {n:"Rahim Osman", t:"35 ribu 1 kilo? masa tu aku sekolah lagi 😭"},
      {n:"Taufik", t:"Hari ini nilainya jauh berbeza. Emas memang selalu nampak murah bila kita lihat ke belakang.", reply:true},
      {n:"Yana Marlisa", t:"20 tahun lagi kita cakap benda sama la ni"},
      {n:"Taufik", t:"Mungkin. Sebab itu emas sesuai untuk simpanan jangka panjang, bukan untuk untung cepat.", reply:true},
      {n:"Din Hakimi", t:"aku nak simpan untuk anak"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 9 : TUJUAN — 100 gram ---------- */
  {
    id: 9,
    video: "videos/q9.mp4",
    topic: "Kalau ada 100 gram emas, nak buat apa?",
    comments: [
      {n:"Salmah Ibrahim", t:"haji. tu je impian aku"},
      {n:"Zaki Ramli", t:"duit sekolah anak"},
      {n:"Taufik", t:"Tulis dulu impian itu. Lepas tu barulah nombor gram jadi bermakna, bukan sekadar simpan tanpa tujuan.", reply:true},
      {n:"Nurin Zahra", t:"100 gram tu jauh lagi untuk aku 😅"},
      {n:"Taufik", t:"Semua orang mula dari gram yang pertama. Yang penting sistem simpanan itu berjalan.", reply:true},
      {n:"Aiman Zulkifli", t:"ok aku start dengan 100"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 10 : CTA — buka akaun ---------- */
  {
    id: 10,
    video: "videos/q10.mp4",
    topic: "Macam mana nak buka Akaun Emas GAP?",
    comments: [
      {n:"Hafiz Rahman", t:"buka akaun ni kena bayar tak?"},
      {n:"Taufik", t:"Buka akaun percuma, tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Aina Sofia", t:"lepas buka terus boleh beli ke?"},
      {n:"Taufik", t:"Boleh. Login, beli dari RM100, gram terus masuk Akaun Emas GAP anda.", reply:true},
      {n:"Farid Zaini", t:"selamat ke syarikat ni"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008 dan kini lebih 2 juta penyimpan.", reply:true},
      {n:"Zulhilmi", t:"emas tu simpan kat mana"},
      {n:"Taufik", t:"Disimpan oleh Public Gold. Bila-bila anda mahu, withdraw dan pos terus ke rumah.", reply:true},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
