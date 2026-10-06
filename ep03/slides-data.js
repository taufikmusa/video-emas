/* ============================================================
   EP03 — SIRI SOAL JAWAB: KENAPA EMAS, DAN UNTUK SIAPA
   ============================================================

   EP01 sapu asas (inflasi, harga, 999 vs 916, cara mula).
   EP02 jawab soalan mekanikal (zakat, harga, waris, jual balik).
   EP03 pergi ke sebab dan tujuan — kenapa emas berbeza dari duit
   kertas, kenapa ia mudah dicairkan, dan untuk siapa ia disimpan.

   12 slide. Progress bar auto ikut panjang array.

   ---------- PLAYLIST ----------
   Slide | Fail | Source     | Isi clip
     1   | q1   | Video-03   | Duit kertas boleh dicetak, emas tak boleh
     2   | q2   | Video-01   | Takut emas palsu — setiap bar ada sijil
     3   | q3   | Video-09   | Perhiasan cantik tapi caj upah tinggi
     4   | q4   | Video-05   | 3 tahun paksa diri simpan, sekarang tak berhutang
     5   | q5   | Video-02   | Jual rumah berbulan, emas sehari dua
     6   | q6   | Video-04   | Kecil, ringan, tapi nilainya bukan kaleng-kaleng
     7   | q7   | Video-12   | Kecemasan — emas boleh digadai, tak perlu jual
     8   | q8   | Video-08   | Yuran universiti anak makin naik
     9   | q9   | Video-10   | Cincin emas mak dulu — tradisi sama, lebih moden
    10   | q10  | Video-11   | Emas 50g untuk keluarga, boleh diwarisi
    11   | q11  | Video-07   | Ramai mula dengan emas kecil, janji konsisten
    12   | q12  | Video-06   | Senang ke nak kumpul? Mudah je sebenarnya

   Tiga clip menyentuh "kumpul sikit-sikit" (Video-05, 07, 06). Aku
   jarakkan ke slide 4, 11, 12. Slide 11 dan 12 sengaja bersebelahan —
   "ramai mula dengan emas kecil" naik ke "ini caranya" tepat sebelum
   butang. Kalau kau rasa berulang, buang salah satu, array pendek
   sekadar jadi 11 slide dan page tetap jalan.

   ---------- NAMA PENONTON ----------
   36 nama baru. Tiada yang berulang dari EP01 atau EP02.

   ---------- YANG PERLU TAUFIK SEMAK ----------
   Slide 7 (gadai). Aku tak sebut institusi atau kadar — cuma prinsip
   bahawa emas beri pilihan selain menjual, dan syarat berbeza ikut
   tempat. Kalau kau nak lebih spesifik, betulkan di sini.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — kenapa emas berbeza ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Duit boleh dicetak. Emas tak boleh.",
    comments: [
      {n:"Adam Firdaus", t:"tak pernah fikir macam tu 😮"},
      {n:"Roziah Sulaiman", t:"patut la duit makin tak cukup"},
      {n:"Taufik", t:"Bila bekalan duit bertambah, nilai setiap ringgit terhakis. Emas tiada butang cetak.", reply:true},
      {n:"Nik Hakim", t:"jadi emas ni memang terhad la"},
      {n:"Taufik", t:"Ya. Itu yang menjadikannya berbeza — bukan janji sesiapa, tapi bekalan yang memang terhad.", reply:true},
      {n:"Suzana Aziz", t:"baru faham kenapa orang simpan emas"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : KETULENAN ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Macam mana nak pasti emas tu tulen?",
    comments: [
      {n:"Faridzuan Malek", t:"ni yang aku paling risau sebenarnya"},
      {n:"Taufik", t:"Setiap bar datang dengan sijil ketulenan. Nombor siri pada bar sepadan dengan sijilnya.", reply:true},
      {n:"Laila Zakaria", t:"beli direct dari syarikat lagi selamat kan"},
      {n:"Taufik", t:"Betul. Beli direct dari Public Gold, bukan dari pihak ketiga — itu yang paling mudah untuk disemak.", reply:true},
      {n:"Idris Ghazali", t:"ok senang hati bila ada sijil"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : PERHIASAN vs BAR ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Perhiasan cantik — tapi sesuai untuk simpanan?",
    comments: [
      {n:"Mastura Yahya", t:"aku suka tengok rantai tu 😍"},
      {n:"Bakhtiar Roslee", t:"tapi caj upah tu bukan main"},
      {n:"Taufik", t:"Upah bayar untuk reka bentuk. Bila jual balik, yang dikira ialah emasnya, bukan upahnya.", reply:true},
      {n:"Hanim Sulong", t:"jadi kalau nak simpan, bar lagi berbaloi"},
      {n:"Taufik", t:"Untuk simpanan, ya. Perhiasan tetap ada tempatnya — cuma tujuannya berlainan.", reply:true},
      {n:"Zulfadli Hisham", t:"boleh ada dua-dua, cuma jangan campur tujuan"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : KISAH PERIBADI ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Tiga tahun paksa diri simpan — apa berubah?",
    comments: [
      {n:"Rahayu Kassim", t:"paksa diri tu memang bahagian paling susah"},
      {n:"Taufik", t:"Bulan pertama paling berat. Lepas enam bulan ia jadi biasa, dan lepas setahun ia jadi tabiat.", reply:true},
      {n:"Ariff Danish", t:"aku start banyak kali tapi asyik berhenti 😔"},
      {n:"Taufik", t:"Itu biasa. Mula semula dengan jumlah yang lebih kecil — yang penting ia tak putus, bukan ia besar.", reply:true},
      {n:"Norhayati Deraman", t:"ok aku cuba lagi bulan ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : KECAIRAN ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Rumah ambil bertahun nak jual. Emas?",
    comments: [
      {n:"Muhaimin Sahak", t:"betul, rumah aku dah setahun tak laku"},
      {n:"Taufik", t:"Aset yang bagus tapi lambat dicairkan tak banyak membantu masa anda betul-betul perlukan tunai.", reply:true},
      {n:"Fauziah Ismail", t:"emas boleh jual bila-bila je ke"},
      {n:"Taufik", t:"Public Gold buy back pada harga semasa. Gram dalam Akaun Emas GAP boleh dijual terus dari app.", reply:true},
      {n:"Zaharah Md Noor", t:"ni yang aku tak tahu sebelum ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : MUDAH ALIH ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Kecil dan ringan — tapi berapa nilainya?",
    comments: [
      {n:"Amirudin Kadri", t:"tak sangka sekeping tu berapa ribu"},
      {n:"Salina Baharom", t:"senang nak simpan, tak makan tempat"},
      {n:"Taufik", t:"Itu kelebihan yang orang selalu terlepas pandang. Nilai yang tinggi dalam bentuk yang kecil.", reply:true},
      {n:"Tuan Rashid", t:"simpan kat rumah selamat ke"},
      {n:"Taufik", t:"Ikut keselesaan anda — simpan sendiri, atau biar gram kekal dalam Akaun Emas GAP sampai anda perlukan.", reply:true},
      {n:"Nurhaliza Zainol", t:"aku pilih simpan dalam akaun dulu"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : FLEKSIBILITI KECEMASAN ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Kecemasan datang — kena jual emas ke?",
    comments: [
      {n:"Effendi Jalaludin", t:"ni soalan yang aku selalu terfikir"},
      {n:"Taufik", t:"Tak semestinya. Emas fizikal boleh digadai — syarat dan kadar berbeza ikut institusi, jadi semak dulu.", reply:true},
      {n:"Sofian Rejab", t:"maknanya emas tu masih kita punya la"},
      {n:"Taufik", t:"Ya. Yang penting anda ada pilihan, bukan terdesak menjual pada masa yang salah.", reply:true},
      {n:"Halimah Daud", t:"lega bila ada jalan lain"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : PENDIDIKAN ANAK ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Yuran universiti anak makin naik setiap tahun",
    comments: [
      {n:"Zainuddin Ali", t:"anak sulung aku 5 tahun lagi masuk U 😅"},
      {n:"Rosmawati Yunus", t:"yuran sekarang dah berganda dari zaman kita"},
      {n:"Taufik", t:"Sebab itu simpanan untuk pendidikan perlu masa yang panjang. Lima tahun cukup untuk bina sesuatu.", reply:true},
      {n:"Hairul Anas", t:"berapa patut simpan sebulan"},
      {n:"Taufik", t:"Mula dengan jumlah yang anda pasti mampu setiap bulan. RM100 yang konsisten kalahkan RM500 yang putus.", reply:true},
      {n:"Wardah Kamil", t:"betul, konsisten tu kuncinya"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 9 : TRADISI ---------- */
  {
    id: 9,
    video: "videos/q9.mp4",
    topic: "Cincin emas mak kita dulu — tradisi yang sama",
    comments: [
      {n:"Lokman Sharif", t:"mak aku memang simpan cincin dalam almari 😄"},
      {n:"Junaidah Sallehuddin", t:"zaman dulu tak ada bank, emas je"},
      {n:"Taufik", t:"Mereka dah faham benda ni lama sebelum kita. Yang berubah cuma caranya, bukan sebabnya.", reply:true},
      {n:"Azman Tahir", t:"sekarang boleh kumpul dalam app pula"},
      {n:"Taufik", t:"Ya — Akaun Emas GAP. Kumpul gram dulu, withdraw jadi emas fizikal bila anda mahu.", reply:true},
      {n:"Khadijah Munawar", t:"macam sambung apa yang mak buat"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 10 : KELUARGA & WARIS ---------- */
  {
    id: 10,
    video: "videos/q10.mp4",
    topic: "Simpan emas bukan untuk diri sendiri sahaja",
    comments: [
      {n:"Razali Ngah", t:"aku simpan sebab tak nak anak susah nanti"},
      {n:"Taufik", t:"Emas mudah dijual balik dan mudah diwarisi. Itu yang buat ia praktikal untuk keluarga.", reply:true},
      {n:"Kalsom Baba", t:"kena bagitau waris kat mana simpan"},
      {n:"Taufik", t:"Itu langkah paling penting. Simpanan yang tiada siapa tahu, tiada nilai kepada mereka yang tinggal.", reply:true},
      {n:"Shahrizal Aman", t:"nak susun dokumen la macam ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 11 : MULA KECIL ---------- */
  {
    id: 11,
    video: "videos/q11.mp4",
    topic: "Mula dengan emas kecil — cukup ke?",
    comments: [
      {n:"Nadhirah Hamdan", t:"aku rasa malu nak start kecil 😅"},
      {n:"Taufik", t:"Tak perlu malu. Hampir semua penyimpan emas bermula dengan gram yang paling kecil.", reply:true},
      {n:"Adam Firdaus", t:"lama-lama jadi banyak jugak kan"},
      {n:"Taufik", t:"Ya, asalkan tak putus. Yang menentukan hasil bukan saiz permulaan, tapi berapa lama anda teruskan.", reply:true},
      {n:"Mastura Yahya", t:"ok aku start dengan yang kecil dulu"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 12 : CTA — senang nak kumpul ---------- */
  {
    id: 12,
    video: "videos/q12.mp4",
    topic: "Susah ke nak kumpul emas fizikal?",
    comments: [
      {n:"Idris Ghazali", t:"nampak macam rumit je"},
      {n:"Taufik", t:"Sebenarnya mudah. Buka Akaun Emas GAP — percuma, tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Rahayu Kassim", t:"kena beli seketul terus ke?"},
      {n:"Taufik", t:"Tak. Kumpul gram sikit-sikit dari RM100, atau beli seketul terus — ikut kemampuan anda.", reply:true},
      {n:"Zainuddin Ali", t:"syarikat ni dah lama ke"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008, kini lebih 2 juta penyimpan. Ada jaminan patuh syariah.", reply:true},
      {n:"Suzana Aziz", t:"ok aku nak mula bulan ni"},
      {n:"Taufik", t:"Mula dulu, jangan tangguh. Simpanan yang tertangguh selalunya tak pernah bermula.", reply:true},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
