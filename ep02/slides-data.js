/* ============================================================
   EP02 — SIRI SOAL JAWAB: SOALAN MEKANIKAL & BANTAHAN
   ============================================================

   Angle EP02 berbeza dari EP01. EP01 sapu asas — inflasi, harga naik,
   999 vs 916, cara mula. EP02 jawab soalan yang orang tanya SELEPAS
   mereka dah percaya emas: zakat, siapa tetapkan harga, waris, susah
   nak jual, kos upah barang kemas.

   ---------- PLAYLIST ----------
   Slide | Fail | Source     | Isi clip
     1   | q1   | Video-10   | Kedai emas — cantik tapi ada kos upah
     2   | q2   | Video-02   | Selamat ke? Lebih 2 juta penyimpan
     3   | q3   | Video-04   | Takut sebab zakat — 85 gram, setahun
     4   | q4   | Video-03   | Gram GAP tukar jadi emas fizikal
     5   | q5   | Video-06   | Waris boleh tuntut dengan mudah
     6   | q6   | Video-05   | Harga ikut pasaran dunia, update 12 malam
     7   | q7   | Video-01   | Apa beza Public Gold dan kedai emas
     8   | q8   | Video-07   | Emas GAP boleh jual online
     9   | q9   | Video-08   | Orang muda ada kelebihan masa
    10   | q10  | Video-09   | Buka akaun percuma, mula RM100

   Dua clip perbandingan kedai emas (slide 1 dan 7) sengaja dijarakkan
   enam slide. Bersebelahan ia bunyi macam ulangan.

   ---------- NAMA PENONTON ----------
   Semua 33 nama di bawah BARU — tiada satu pun berulang dari EP01.
   Kalau buat EP03, senaraikan yang ni juga sebagai terpakai.

   ---------- YANG PERLU TAUFIK SEMAK ----------
   Jawapan zakat (slide 3) sengaja tak masuk perincian fiqh — ia sebut
   nisab dan haul, kemudian rujuk pusat zakat negeri. Kalau kau nak
   sebut angka lain, betulkan di sini.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — kedai emas vs simpanan ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Barang kemas cantik — tapi kenapa bukan untuk simpanan?",
    comments: [
      {n:"Syafiq Nasir", t:"aku baru beli rantai bulan lepas 😅"},
      {n:"Rohaya Mansor", t:"kos upah tu memang tinggi kan"},
      {n:"Taufik", t:"Upah itu bayaran untuk reka bentuk dan kerja tangan. Ia tak kembali bila anda jual balik.", reply:true},
      {n:"Khairul Anwar", t:"jadi kalau nak simpan kena bar la"},
      {n:"Taufik", t:"Goldbar dan Dinar 999 direka khas untuk simpanan. Harganya lebih rapat dengan harga emas itu sendiri.", reply:true},
      {n:"Puteri Balqis", t:"patut la aku rasa rugi masa jual dulu"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : KEPERCAYAAN ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Selamat ke simpan emas di Public Gold?",
    comments: [
      {n:"Halim Sabtu", t:"soalan jujur — ni bukan skim kan?"},
      {n:"Taufik", t:"Bukan. Anda beli emas fizikal dan emas itu milik anda. Public Gold ditubuhkan sejak 2008.", reply:true},
      {n:"Norlia Hashim", t:"2 juta penyimpan tu ramai gak"},
      {n:"Taufik", t:"Lebih 2 juta. Bilangan bukan bukti mutlak — tapi rekod panjang lebih bermakna daripada janji manis.", reply:true},
      {n:"Fadhil Manaf", t:"ok lega sikit hati aku"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : ZAKAT ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Takut simpan emas sebab zakat?",
    comments: [
      {n:"Siti Zubaidah", t:"ni yang aku tertanya lama dah"},
      {n:"Redza Asyraf", t:"85 gram tu banyak jugak"},
      {n:"Taufik", t:"Zakat emas simpanan kena bila cukup nisab dan cukup setahun. Bawah itu belum kena.", reply:true},
      {n:"Hasnah Talib", t:"kalau dah lebih macam mana nak kira"},
      {n:"Taufik", t:"Untuk pengiraan tepat, rujuk pusat zakat negeri anda — mereka yang berautoriti dalam hal ini.", reply:true},
      {n:"Zaidi Mokhtar", t:"bagus ada orang terangkan benda ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : MEKANIK — gram jadi fizikal ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Gram dalam akaun boleh jadi emas fizikal?",
    comments: [
      {n:"Nur Farhana", t:"gram dalam app tu emas betul ke"},
      {n:"Taufik", t:"Ya. Gram dalam Akaun Emas GAP disandarkan pada emas fizikal, dan boleh di-withdraw bila anda mahu.", reply:true},
      {n:"Ridzuan Latif", t:"kena kumpul berapa baru boleh keluarkan"},
      {n:"Taufik", t:"Ikut item yang anda pilih. Bila gram cukup, mohon withdraw dan ia dipos terus ke rumah.", reply:true},
      {n:"Maisarah Kadir", t:"senang je rupanya"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : WARIS ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Kalau kita tiada, waris boleh tuntut?",
    comments: [
      {n:"Syed Hamzah", t:"ni yang orang selalu tak fikir"},
      {n:"Taufik", t:"Simpanan emas tak luput. Yang penting dokumen tersusun supaya waris tahu apa yang ada dan di mana.", reply:true},
      {n:"Rosnah Idris", t:"ayah aku dulu tinggal emas, memang berguna masa susah"},
      {n:"Haziq Naim", t:"kena bagitau isteri la ni"},
      {n:"Taufik", t:"Itu langkah paling mudah dan paling kerap terlepas. Simpanan yang tiada siapa tahu, tiada nilai kepada keluarga.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : KETELUSAN HARGA ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Harga emas Public Gold — siapa yang tetapkan?",
    comments: [
      {n:"Zamri Othman", t:"ingat syarikat letak harga sendiri 😅"},
      {n:"Taufik", t:"Tidak. Ia ikut pasaran emas dunia. Public Gold cuma menterjemah harga itu ke ringgit.", reply:true},
      {n:"Suhaila Munir", t:"update bila?"},
      {n:"Taufik", t:"Update 12.00 malam setiap hari, dan anda semak sendiri dalam app — tak perlu tanya sesiapa.", reply:true},
      {n:"Tengku Adnan", t:"telus la macam ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : PERBANDINGAN ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Apa beza Public Gold dan kedai emas biasa?",
    comments: [
      {n:"Norain Jalil", t:"kedai emas pun ada jual bar kan"},
      {n:"Taufik", t:"Ada. Beza utamanya di Public Gold anda boleh kumpul gram dulu — tak perlu bayar penuh sekali gus.", reply:true},
      {n:"Shukri Rahim", t:"jadi tak payah tunggu cukup duit dulu"},
      {n:"Taufik", t:"Betul. Mula RM100, tiada komitmen bulanan. Kumpul ikut kemampuan anda.", reply:true},
      {n:"Marlina Sapawi", t:"ni yang buat aku rasa boleh mula"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : BUY BACK ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Emas ni susah tak nak jual balik?",
    comments: [
      {n:"Johan Mustafa", t:"ni yang aku risau — beli senang, jual susah"},
      {n:"Taufik", t:"Gram dalam Akaun Emas GAP boleh dijual online, tak perlu ke cawangan.", reply:true},
      {n:"Rosli Kamarudin", t:"kalau bar fizikal yang dah ada kat rumah?"},
      {n:"Taufik", t:"Yang fizikal dijual di cawangan. Buy back pada harga semasa — jual beli direct dengan Public Gold.", reply:true},
      {n:"Intan Zulaikha", t:"ok senang hati aku"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 9 : MASA & KONSISTENSI ---------- */
  {
    id: 9,
    video: "videos/q9.mp4",
    topic: "Kalau anda masih muda, ini kelebihan anda",
    comments: [
      {n:"Izzat Zaman", t:"aku 24, baru start kerja"},
      {n:"Taufik", t:"Masa itu kelebihan yang tak boleh dibeli. Yang mula awal tak perlu simpan besar-besar.", reply:true},
      {n:"Sabri Ahmad", t:"aku dah 45, dah lambat ke"},
      {n:"Taufik", t:"Tak. Yang menentukan bukan umur, tapi berapa lama anda konsisten selepas mula.", reply:true},
      {n:"Zarina Wahab", t:"suka ayat tu"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 10 : CTA — buka akaun ---------- */
  {
    id: 10,
    video: "videos/q10.mp4",
    topic: "Nak mula simpan emas — apa dulu?",
    comments: [
      {n:"Nazrin Shah", t:"jadi step pertama apa"},
      {n:"Taufik", t:"Buka Akaun Emas GAP. Percuma, tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Hidayah Zainuddin", t:"lepas tu terus boleh beli?"},
      {n:"Taufik", t:"Boleh. Login, beli dari RM100, gram terus masuk akaun anda.", reply:true},
      {n:"Zulkarnain Idrus", t:"kena bayar setiap bulan ke"},
      {n:"Taufik", t:"Tak. Tiada komitmen bulanan — tambah bila ada lebih.", reply:true},
      {n:"Wahida Ghani", t:"ok aku nak mula bulan ni"},
      {n:"Taufik", t:"Mula dulu, jangan tangguh. Simpanan yang tertangguh selalunya tak pernah bermula.", reply:true},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
