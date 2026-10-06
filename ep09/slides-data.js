/* ============================================================
   SLIDES DATA EP09 — Sabar sayang, rezeki Oyen sentiasa ada
   ============================================================

   Satu objek = satu slide. Format sama macam EP lain:
     {n:"Nama", t:"Teks"}               = komen penonton
     {n:"Taufik", t:"...", reply:true}  = jawapan dealer (kotak emas)

   Clip 1, 5 dan 7 panjang 70 saat, jadi dapat 12-13 komen supaya
   feed tak berulang sebelum clip habis. Clip 30 saat dapat 7.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : Lauk habis, simpan sikit tak berhenti (70s) ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Biar sikit asalkan tak berhenti, macam kura-kura?",
    comments: [
      {n:"Hidayah Kamal", t:"sabar sayang rezeki sentiasa ada 🥹 terus teringat mak aku"},
      {n:"Fadzli Rahman", t:"makan sup sayur dulu, nanti ada duit beli lauk. relate sangat"},
      {n:"Taufik", t:"Hidup berjimat bukan bermakna susah. Ia cara pastikan esok masih ada pilihan.", reply:true},
      {n:"Ain Sofea", t:"jangan ikut orang, ikut poket kita. jiran arnab tu sape 😂"},
      {n:"Rizwan Hakim", t:"kalau simpan sikit sikit, bila nak nampak hasil"},
      {n:"Taufik", t:"Macam kura-kura tu. Perlahan, tapi tak berhenti. Yang penting simpanan tu terus berjalan setiap kali ada lebihan.", reply:true},
      {n:"Nabilah Aziz", t:"mama tu simpan emas kat public gold, comel betul"},
      {n:"Syazwan Idris", t:"RM100 je boleh ke start? ingat kena beribu"},
      {n:"Taufik", t:"Boleh. Akaun Emas GAP mula dari RM100. Ramai yang mula dengan jumlah kecil dan tambah bila mampu.", reply:true},
      {n:"Marlina Yusof", t:"dulu aku pun rasa simpan emas untuk orang kaya je"},
      {n:"Taufik", t:"Ramai fikir macam tu. Rupanya yang buat beza bukan jumlah besar, tapi berapa lama kita konsisten.", reply:true},
      {n:"Hakimi Zainal", t:"simpan dulu, belanja selebihnya. nak tampal kat peti ais"},
      {n:"Farhana Ismail", t:"jom ajak kawan sekali, baru semangat 💪"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : Gadget ansuran, elaun habis ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Beli gadget ansuran, kenapa elaun habis?",
    comments: [
      {n:"Aiman Najmi", t:"bayar sikit je setiap bulan, ayat paling bahaya 😅"},
      {n:"Sufiah Halim", t:"ansuran kecil kecil tapi ada 4-5, terus sesak"},
      {n:"Taufik", t:"Satu ansuran nampak kecil. Bila bertimbun, gaji habis bayar barang yang dah lama dibeli.", reply:true},
      {n:"Khairul Anuar", t:"gaji habis bayar belanja masa lalu, pedih tapi betul"},
      {n:"Taufik", t:"Sebab tu kena tukar arah. Kurangkan liabiliti, mula kumpul sesuatu yang nilainya kekal.", reply:true},
      {n:"Dayana Rosli", t:"putih serik beli ikut nafsu, aku pun nak serik"},
      {n:"Taufik", t:"Mula kecil pun tak apa. Setiap gram yang terkumpul ialah duit yang tak lari ke ansuran baru.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : Yuran kolej Oren ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Yuran kolej anak mahal, kena pinjam ke?",
    comments: [
      {n:"Rohani Saad", t:"tahniah oren 🎓 sebak pula tengok"},
      {n:"Zahid Kamarul", t:"yuran pendaftaran memang mahal, anak aku tahun ni masuk U"},
      {n:"Taufik", t:"Yuran pendidikan naik setiap tahun. Simpanan yang dimulakan awal beri ruang bernafas bila tiba masanya.", reply:true},
      {n:"Syahirah Nor", t:"ibu kumpul emas sejak anak kecil, nak buat macam ni untuk anak aku"},
      {n:"Taufik", t:"Ramai ibu bapa buka simpanan emas atas tujuan pendidikan anak. Tujuan yang jelas buat kita lebih konsisten.", reply:true},
      {n:"Hafiz Abdullah", t:"anak umur 3 tahun dah boleh mula ke"},
      {n:"Taufik", t:"Lagi awal lagi baik. Masa yang panjang tu sendiri dah jadi kelebihan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : Banjir, duit kertas hancur ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Banjir datang, duit kertas hancur. Emas?",
    comments: [
      {n:"Norazlin Che Mat", t:"masa banjir 2021 duit dalam laci habis lunyai 😢"},
      {n:"Iqbal Haziq", t:"nyawa utama, harta kemudian. betul tu"},
      {n:"Taufik", t:"Betul, nyawa dulu. Tapi bila air surut, yang tinggal ialah apa yang tak rosak.", reply:true},
      {n:"Salwa Mohd", t:"emas betul tak rosak kena air ke"},
      {n:"Taufik", t:"Emas tak berkarat dan tak reput bila kena air. Duit kertas dan dokumen pula mudah musnah.", reply:true},
      {n:"Fikri Azman", t:"tapi kalau simpan kat rumah risau juga"},
      {n:"Taufik", t:"Gram dalam Akaun Emas GAP disimpan oleh Public Gold, bukan di rumah anda. Bila perlu, boleh withdraw jadi fizikal.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : Ikan makin mahal, wang kertas susut (70s) ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Ikan makin mahal, kenapa duit makin tak cukup?",
    comments: [
      {n:"Kak Mah Selayang", t:"ikan kembung sekarang dah tak macam dulu harganya 😮‍💨"},
      {n:"Aqil Danish", t:"duit sama tapi dapat sikit je, ni la yang orang panggil inflasi"},
      {n:"Taufik", t:"Duit tak hilang, tapi kuasa belinya menyusut. RM50 yang sama beli lebih sedikit setiap tahun.", reply:true},
      {n:"Wardah Iman", t:"wang mainan tapi nampak megah 😂 ayat anak kucing tu padu"},
      {n:"Harith Iskandar", t:"jadi simpan duit dalam bank salah ke"},
      {n:"Taufik", t:"Tak salah. Tunai kecemasan memang perlu dalam bank. Cuma lebihan untuk jangka panjang elok ditukar sebahagian jadi aset.", reply:true},
      {n:"Ummi Kalsom", t:"emas untuk kekalkan nilai, wang kertas untuk belanja. baru faham"},
      {n:"Taufik", t:"Tepat. Dua-dua ada fungsi masing-masing. Masalah timbul bila semua simpanan dibiar dalam bentuk yang susut.", reply:true},
      {n:"Nizam Sulaiman", t:"anak kecil pun boleh ada akaun emas ke?"},
      {n:"Taufik", t:"Boleh. Ada jenis akaun ikut umur, untuk kanak-kanak didaftarkan oleh ibu bapa.", reply:true},
      {n:"Qistina Ramli", t:"daftar percuma je kan?"},
      {n:"Taufik", t:"Ya, buka akaun percuma dan mula beli dari RM100.", reply:true},
      {n:"Baharom Ali", t:"pelindung simpanan bocor, nak cuba"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : Syarikat tutup, dana kecemasan ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Syarikat tutup esok, simpanan cukup 6 bulan?",
    comments: [
      {n:"Mohd Faiz", t:"kena VSS tahun lepas, takde simpanan langsung masa tu 😔"},
      {n:"Atiqah Zulkifli", t:"ibu kucing tu tenang je, sebab dah bersedia"},
      {n:"Taufik", t:"Dana kecemasan 6 bulan perbelanjaan ialah benteng pertama. Ia beri masa untuk cari rezeki baru tanpa panik.", reply:true},
      {n:"Shamsul Bahri", t:"6 bulan tu kira gaji atau belanja"},
      {n:"Taufik", t:"Kira perbelanjaan wajib sebulan: sewa, makan, bil, ansuran. Darab enam.", reply:true},
      {n:"Raihana Osman", t:"sedia payung sebelum hujan. noted"},
      {n:"Taufik", t:"Sebahagian dalam tunai untuk guna segera, sebahagian lagi dalam emas untuk kekalkan nilai jangka panjang.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : Tunggu harga turun? (70s) ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Nak tunggu harga emas turun dulu baru mula?",
    comments: [
      {n:"Azlan Mansor", t:"aku tunggu harga turun dari 2020 lagi 😭"},
      {n:"Nurin Batrisya", t:"rugi tak beli awal, sama macam aku"},
      {n:"Taufik", t:"Ramai yang sama. Tak siapa tahu harga paling murah. Yang kita boleh kawal cuma bila kita mula.", reply:true},
      {n:"Fakhri Johan", t:"kalau beli sekarang lepas tu harga turun macam mana"},
      {n:"Taufik", t:"Harga emas memang naik turun. Kalau turun, gram yang sama boleh dibeli lebih banyak. Sebab tu simpan secara berkala.", reply:true},
      {n:"Siti Aisyah", t:"10 gram dulu 2,700 sekarang 6,000?? 😮"},
      {n:"Taufik", t:"Itu rekod harga 10 gram Public Gold sejak 2021. Prestasi lalu bukan jaminan, tapi ia tunjuk kenapa simpanan jangka panjang penting.", reply:true},
      {n:"Ezani Hamid", t:"public gold ni selamat ke, ramai ke yang simpan"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008 dan kini lebih 2 juta penyimpan.", reply:true},
      {n:"Lyana Hasrul", t:"beli emas dapat emas betul ke, bukan atas kertas je"},
      {n:"Taufik", t:"Betul. Gram dalam akaun boleh di-withdraw jadi goldbar atau dinar fizikal.", reply:true},
      {n:"Rahmat Saidin", t:"mula dulu baru tunggu. ok aku faham dah"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : CTA — hari tua ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Hari tua nanti, nak harap siapa?",
    comments: [
      {n:"Mak Long Zaitun", t:"ibu takkan susahkan kamu sayang 🥹 terkena"},
      {n:"Hairi Shukor", t:"tengok atuk kucing tu sedih, tiada simpanan hari tua"},
      {n:"Taufik", t:"Ramai bersara dengan simpanan yang tak cukup. Persediaan hari tua paling ringan bila dimulakan awal.", reply:true},
      {n:"Sharifah Nadia", t:"kena simpan setiap bulan ke?"},
      {n:"Taufik", t:"Tiada kewajipan bulanan. Tapi kalau mampu, jadikan tabiat setiap bulan supaya gram terus bertambah.", reply:true},
      {n:"Zul Ariffin", t:"buka akaun ni susah tak"},
      {n:"Taufik", t:"Buka akaun percuma, tak sampai 5 minit dengan bantuan dealer. Lepas tu beli dari RM100.", reply:true},
      {n:"Nor Hayati", t:"mulakan dengan 1 gram, ok target aku tahun ni"},
      {n:"Taufik", t:"Satu gram pertama paling bermakna. Selebihnya ikut bila ada lebihan, InsyaAllah.", reply:true},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
