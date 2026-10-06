/* ============================================================
   EP07 — SIRI SOAL JAWAB: SIMPANAN YANG TAK BOCOR
   ============================================================

   EP01 sapu asas. EP02 soalan mekanikal. EP03 sebab & tujuan.
   EP04 disiplin tunai. EP05 tabiat selepas akaun dibuka.
   EP06 literasi harga & peranan emas.

   EP07 pergi ke satu tema yang belum disentuh langsung: **wang,
   amanah dan matlamat**. Kenapa simpanan tunai bocor sebelum genap
   setahun, kenapa emas fizikal berat nak dilepaskan, dan macam mana
   zakat serta infaq sebenarnya jadi penanda aras kewangan yang
   stabil — bukan beban.

   Sasaran: orang yang tak kekurangan pendapatan, tapi tak pernah
   berjaya kekalkan simpanan. Bantahan utama mereka bukan "emas ni
   apa", tapi "aku memang tak reti simpan".

   10 slide. Progress bar auto ikut panjang array.

   ---------- PLAYLIST ----------
   Slide | Fail | Source     | Isi clip
     1   | q1   | Video-01   | Duit bank laju habis — emas sayang nak jual
     2   | q2   | Video-02   | Pegang emas rasa lain dari tengok baki bank
     3   | q3   | Video-03   | 1 Dinar emas dan seekor kambing
     4   | q4   | Video-04   | Duit simpanan pun kena zakat — tapi bocor dulu
     5   | q5   | Video-06   | Harga naik laju, ramai gelabah nak borong
     6   | q6   | Video-07   | Beli emas guna duit lebihan, bukan duit dapur
     7   | q7   | Video-05   | Mampu bayar zakat tanda kewangan dah stabil
     8   | q8   | Video-09   | Asingkan infaq sebaik gaji masuk
     9   | q9   | Video-08   | Mula masa muda, sedia bila tanggungjawab datang
    10   | q10  | Video-10   | Simpan dulu baru belanja — mula dengan matlamat

   Dua clip zakat (Video-04 dan Video-05) sengaja dijarakkan ke slide
   4 dan 7 — bersebelahan ia bunyi macam ceramah. Slide 3 (dinar &
   kambing) diletak awal sebagai proof sejarah sebelum masuk bab
   ibadah harta, supaya penonton dah "beli" idea nilai kekal dahulu.
   Slide 5 satu-satunya clip harga, jadi tiada isu dua harga
   bersebelahan.

   ---------- NAMA PENONTON ----------
   40 nama baru. Sifar pertindihan dengan 229 nama EP01-EP06
   (lihat ep07\NAMA-TERPAKAI.txt).

   ---------- YANG PERLU TAUFIK SEMAK ----------
   1. Slide 3 (dinar & kambing). Aku bingkai sebagai perbandingan
      yang sering dibuat, bukan sebagai fakta harga hari ini, dan
      dealer ajak semak harga sendiri dalam app. Kalau kau nak
      versi lebih tegas, betulkan di sini.
   2. Slide 4 dan 7 (zakat). Aku sengaja TAK sebut kadar, nisab
      atau haul dalam nombor — cuma prinsip, dan rujuk pusat zakat
      negeri untuk pengiraan. Ini bahagian paling mudah tersasar
      kalau ditambah nombor.
   3. Slide 9 (kudrat). Clip sebut "bersedia saat miliki kudrat
      yang sempurna". Aku bingkai sebagai tanggungjawab dan ibadah
      secara umum tanpa nama produk atau nama ibadah tertentu.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — simpanan bocor ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Duit dalam bank laju je habis. Kenapa?",
    comments: [
      {n:"Aidil Syazwan", t:"belum masuk minggu ketiga dah kosong 😩"},
      {n:"Nazatul Fasihah", t:"aku pun sama, tak tahu pergi mana"},
      {n:"Taufik", t:"Duit dalam bank memang direka untuk digunakan. Satu tap, ia keluar, tiada apa yang menahan.", reply:true},
      {n:"Badrul Hisham", t:"tp emas pulak berat nak jual kan"},
      {n:"Taufik", t:"Itu kelebihannya. Nak jual emas perlu satu keputusan sedar, bukan sekadar tekan butang.", reply:true},
      {n:"Hazlina Rusli", t:"maknanya emas ni jadi pagar la"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : TINGKAH LAKU — rasa memiliki ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Kenapa pegang emas rasa lain dari tengok baki bank?",
    comments: [
      {n:"Marsya Adlina", t:"betul, tengok nombor je tak rasa apa"},
      {n:"Taufik", t:"Nombor dalam app senang dilupakan. Barang yang boleh dipegang lebih sukar dilepaskan.", reply:true},
      {n:"Fitri Haziq", t:"tengok baki byk sikit terus rasa nak spend 😅"},
      {n:"Taufik", t:"Itu perkara biasa. Sebab itu simpanan yang berjaya selalunya simpanan yang dialihkan keluar dari akaun belanja.", reply:true},
      {n:"Qistina Adleen", t:"ok aku nak cuba alihkan sikit bulan ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : PROOF SEJARAH — dinar & kambing ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "1 Dinar emas dan seekor kambing — kekal sampai sekarang?",
    comments: [
      {n:"Hafizi Zulkifli", t:"selalu dengar cerita ni tp tak pernah check"},
      {n:"Taufik", t:"Perbandingan itu memang sering dibuat sebab beratnya tak pernah berubah, 1 Dinar tetap 4.25 gram emas 999.", reply:true},
      {n:"Rashidah Sulong", t:"duit kertas lain betul la ceritanya"},
      {n:"Taufik", t:"Ya. Yang berubah bukan emasnya, tapi berapa banyak wang kertas diperlukan untuk mendapatkannya.", reply:true},
      {n:"Irfan Danish", t:"harga dinar sekarang berapa eh"},
      {n:"Taufik", t:"Harga bergerak setiap hari, boleh semak sendiri dalam app, jelas dan mudah.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : ZAKAT — simpanan yang tak sempat setahun ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Duit simpanan pun kena zakat?",
    comments: [
      {n:"Kamil Redzuan", t:"eh simpanan pun kira harta ke"},
      {n:"Taufik", t:"Ya, simpanan termasuk dalam harta yang dikira. Syarat dan kadarnya elok dirujuk terus kepada pusat zakat negeri masing-masing.", reply:true},
      {n:"Nuraini Zaidi", t:"jujurnya simpanan aku tak pernah sampai setahun 😆"},
      {n:"Taufik", t:"Itu realiti ramai orang. Duit yang cair terlalu mudah jarang bertahan cukup lama untuk jadi apa-apa.", reply:true},
      {n:"Salihin Bakar", t:"jd emas lagi senang nak kekal la"},
      {n:"Taufik", t:"Lebih senang dikekalkan, ya. Bukan sebab ia terkunci, tapi sebab kita sendiri berat nak lepaskan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : HARGA — jangan gelabah ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Harga naik laju — patut borong sekarang?",
    comments: [
      {n:"Zakwan Aiman", t:"orang dah start panic buying ni 😬"},
      {n:"Taufik", t:"Membeli sebab takut ketinggalan selalunya berakhir dengan menjual sebab panik. Dua-dua keputusan emosi.", reply:true},
      {n:"Khairunnisa Mokhtar", t:"jd tunggu turun dulu ke"},
      {n:"Taufik", t:"Tiada siapa tahu arah harga. Yang boleh dikawal ialah jumlah dan kekerapan, kumpul ikut bajet, bukan ikut berita.", reply:true},
      {n:"Mahfuz Ariffin", t:"lagi senang bila ada jumlah tetap sebulan"},
      {n:"Taufik", t:"Betul. Emas simpanan jangka masa panjang, disiplin yang konsisten lebih mudah dikekalkan daripada tekaan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : SUMBER DANA — duit lebihan ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Beli emas guna duit mana?",
    comments: [
      {n:"Naqib Hisyam", t:"takut terjebak, komitmen aku dah byk"},
      {n:"Taufik", t:"Emas dibeli dengan duit lebihan, duit yang tak diperlukan segera. Jangan sesekali guna duit dapur atau duit nak bayar bil.", reply:true},
      {n:"Sofiya Kamila", t:"lebihan aku kecil je, malu nak start"},
      {n:"Taufik", t:"Tak perlu malu. Boleh mula RM100 dan tambah bila ada lebih. Tiada kewajipan simpan setiap bulan.", reply:true},
      {n:"Wahyu Nasrudin", t:"ok kalau macam tu boleh la ikut kemampuan"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : ZAKAT SEBAGAI PENANDA ARAS ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Mampu bayar zakat — tanda apa sebenarnya?",
    comments: [
      {n:"Jamilah Osman", t:"selama ni aku fikir zakat tu beban 😔"},
      {n:"Taufik", t:"Ia sebenarnya penanda aras. Ia bermakna harta kita cukup dan bertahan cukup lama untuk melepasi syaratnya.", reply:true},
      {n:"Rizwan Hakim", t:"aku belum sampai tahap tu lagi rasanya"},
      {n:"Taufik", t:"Kalau belum, matlamatnya jelas, bina simpanan dahulu sampai ia stabil. Itu satu sasaran yang boleh diukur.", reply:true},
      {n:"Anis Mardhiah", t:"suka cara pandang ni, jadi motivasi pulak"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : TABIAT — asingkan dahulu ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Asingkan duit sebaik gaji masuk — berkesan ke?",
    comments: [
      {n:"Nadzmi Faliq", t:"aku selalu plan nak sisihkan hujung bulan, tp tak pernah jadi"},
      {n:"Taufik", t:"Sebab hujung bulan selalunya tiada baki. Apa yang diasingkan awal sahaja yang benar-benar selamat.", reply:true},
      {n:"Izzati Munirah", t:"potongan awal ni memang latih kita kan"},
      {n:"Taufik", t:"Ya. Ia memaksa kita rancang perbelanjaan pada baki yang tinggal, bukan sebaliknya.", reply:true},
      {n:"Talhah Yusri", t:"boleh buat sama untuk simpanan emas jugak"},
      {n:"Taufik", t:"Boleh, prinsipnya sama. Asingkan dahulu, kemudian barulah belanja apa yang berbaki.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 9 : JANGKA PANJANG — mula masa muda ---------- */
  {
    id: 9,
    video: "videos/q9.mp4",
    topic: "Kenapa perlu mula masa muda lagi?",
    comments: [
      {n:"Safwan Nasrul", t:"umur 25 ni rasa macam awal sangat nak fikir simpanan"},
      {n:"Taufik", t:"Awal itu kelebihan, bukan kelemahan. Tanggungjawab datang tanpa memberi amaran, dan ia jarang menunggu kita bersedia.", reply:true},
      {n:"Zulfa Nadhrah", t:"betul, bersedia lebih baik dari meminta minta"},
      {n:"Taufik", t:"Sebab itu simpanan jangka panjang lebih bermakna dimulakan ketika kita masih ada tenaga dan masa.", reply:true},
      {n:"Hasrol Amsyar", t:"aku start bulan ni la, jangan tunggu dah tua"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 10 : CTA — simpan dulu, baru belanja ---------- */
  {
    id: 10,
    video: "videos/q10.mp4",
    topic: "Simpan dulu, baru belanja, macam mana nak mula?",
    comments: [
      {n:"Lutfi Naim", t:"nampak senang bila dengar, tp mula tu yang susah"},
      {n:"Taufik", t:"Langkah pertama paling mudah sebenarnya. Buka Akaun Emas GAP — percuma, tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Dalilah Munawwarah", t:"lepas buka kena beli terus ke"},
      {n:"Taufik", t:"Tak. Kumpul gram sikit-sikit dari RM100, dan bila cukup boleh withdraw jadi emas fizikal, pos terus sampai rumah.", reply:true},
      {n:"Nordin Sabri", t:"syarikat ni dah lama beroperasi ke"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008, kini lebih 2 juta penyimpan. Ada jaminan patuh syariah.", reply:true},
      {n:"Shafinaz Roslee", t:"ok aku set matlamat dulu, lepas tu baru start"},
      {n:"Taufik", t:"Matlamat penting, tapi jangan tunggu ia sempurna. Mula dahulu, simpanan yang tertangguh selalunya tak pernah bermula.", reply:true},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
