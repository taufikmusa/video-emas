/* ============================================================
   SLIDES DATA EP08 — Simpanan Oyen bertambah tanpa beban hutang
   ============================================================

   Satu objek = satu slide. Format sama macam EP lain:
     {n:"Nama", t:"Teks"}               = komen penonton
     {n:"Taufik", t:"...", reply:true}  = jawapan dealer (kotak emas)

   Setiap clip EP08 lebih kurang 30 saat, jadi setiap slide ada
   7-9 komen supaya feed tak mula ulang sebelum clip habis.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : Oren habiskan duit tabung pesan makanan ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Belanja kecil hari-hari, kenapa tabung cepat habis?",
    comments: [
      {n:"Aqilah Rosli", t:"oren tu sebiji macam aku 😭 order je tiap petang"},
      {n:"Haziq Firdaus", t:"belanja kecil la paling bahaya, tak rasa tapi banyak"},
      {n:"Taufik", t:"Betul. RM15 sehari nampak kecil, tapi sebulan dah dekat RM450. Itu yang buat tabung kosong tanpa sedar.", reply:true},
      {n:"Nadia Kamarul", t:"cuba la tengok history app delivery, terkejut aku"},
      {n:"Taufik", t:"Cara paling senang: asingkan simpanan dulu awal bulan, baru belanja dengan baki. Bukan terbalik.", reply:true},
      {n:"Syafiq Ramli", t:"kumpul emas sikit sikit tu boleh ke dengan gaji biasa"},
      {n:"Taufik", t:"Boleh. Akaun Emas GAP mula dari RM100, tambah bila ada lebih. Tiada kewajipan bayar setiap bulan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : Raya serba baru vs hutang kad ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Raya serba baru, tapi hutang kad lepas raya?",
    comments: [
      {n:"Farah Hanim", t:"tahun lepas aku swipe kad untuk langsir 🥲 baru habis bayar"},
      {n:"Iskandar Zul", t:"ibu kucing tu bijak, sederhana asalkan tak berhutang"},
      {n:"Taufik", t:"Bergaya seminggu, bayar berbulan-bulan. Raya tetap meriah walaupun langsir tahun lepas.", reply:true},
      {n:"Mira Adlina", t:"tapi raya kan sekali setahun, takkan nak kedekut"},
      {n:"Taufik", t:"Bukan kedekut. Belanja guna duit yang memang dah ada, bukan duit bulan depan. Itu je bezanya.", reply:true},
      {n:"Hakim Basri", t:"tukar tradisi kumpul gram emas, ni idea bagus untuk duit raya anak"},
      {n:"Taufik", t:"Ramai mula dengan duit raya anak. Gram emas dalam Akaun Emas GAP tak hilang macam duit dalam sampul.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : Kereta rosak, kad kredit tak aktif ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Masa cemas, kad kredit boleh jadi penyelamat ke?",
    comments: [
      {n:"Shahrul Aiman", t:"kereta rosak masa nak balik kampung, pernah kena 😩"},
      {n:"Liyana Hafiz", t:"masa cemas la baru sedar takde simpanan"},
      {n:"Taufik", t:"Kad kredit selesaikan masalah hari ni, tapi pindahkan masalah ke bulan depan dengan faedah sekali.", reply:true},
      {n:"Danish Haikal", t:"emas boleh guna masa cemas ke? tak rugi ke jual"},
      {n:"Taufik", t:"Sebab tu tunai kecemasan kena ada dulu. Emas untuk simpanan jangka panjang, bukan untuk dijual setiap kali ada masalah kecil.", reply:true},
      {n:"Rosmah Yusoff", t:"alhamdulillah ibu ada emas, sedih tengok anak kucing tu nangis"},
      {n:"Taufik", t:"Waktu senang kita kumpul. Waktu susah, InsyaAllah ada yang boleh dipegang.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : Gaji 2,000, ansuran kereta 3,000 ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Gaji RM2,000 tapi idam kereta ansuran RM3,000?",
    comments: [
      {n:"Amirul Hakim", t:"ansuran 3k gaji 2k 😂 alamak bang janganlah"},
      {n:"Nurul Izzati", t:"kawan aku buat macam ni, sekarang kereta kena tarik"},
      {n:"Taufik", t:"Kereta susut nilai setiap tahun. Ansuran pula kekal sampai habis tempoh. Dua-dua tarik poket serentak.", reply:true},
      {n:"Zarif Iqbal", t:"tapi kereta kan keperluan, takkan nak naik bas je"},
      {n:"Taufik", t:"Keperluan, ya. Tapi pilih yang ikut kemampuan. Beza ansuran tu boleh jadi simpanan setiap bulan.", reply:true},
      {n:"Siti Khadijah", t:"kumpul aset dulu baru beli liability, betul la"},
      {n:"Taufik", t:"Bila aset dah ada, keputusan besar dibuat dengan tenang, bukan sebab tekanan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : Kondo mewah, makan mi segera ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Kondo mewah, tapi makan mi segera tiap hari?",
    comments: [
      {n:"Hafizah Ismail", t:"kolam infinity tapi makan maggi 😂 ni realiti"},
      {n:"Fakhrul Razi", t:"yuran selenggara tu orang selalu lupa kira"},
      {n:"Taufik", t:"Ansuran rumah baru separuh cerita. Yuran selenggara, sinking fund dan bil semua datang setiap bulan.", reply:true},
      {n:"Alya Natasha", t:"simpan emas takde komitmen bulanan ke?"},
      {n:"Taufik", t:"Tiada. Beli bila ada lebihan, dari RM100. Bulan sempit boleh rehat dulu tanpa penalti.", reply:true},
      {n:"Ridhwan Jalil", t:"aku pilih rumah biasa, tidur pun lena"},
      {n:"Taufik", t:"Ketenangan tu pun satu bentuk kekayaan. Aset kecil yang dikumpul konsisten lama-lama jadi besar.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : Gadai emas pusaka demi telefon ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Gadai emas pusaka semata-mata nak beli telefon baru?",
    comments: [
      {n:"Kamaliah Omar", t:"sentap aku 😅 telefon masih elok pun nak tukar"},
      {n:"Hairul Nizam", t:"emas pusaka mak aku pun pernah tergadai, menyesal"},
      {n:"Taufik", t:"Telefon baru turun nilai sebaik kotak dibuka. Emas pusaka pula simpan nilai dan kenangan keluarga.", reply:true},
      {n:"Puteri Balqis", t:"916 tu sesuai untuk simpanan ke"},
      {n:"Taufik", t:"916 biasanya untuk perhiasan dan ada harga upah. Untuk simpanan, goldbar dan dinar 999 lebih sesuai.", reply:true},
      {n:"Azri Mukhriz", t:"tolak trend sementara, ayat padu"},
      {n:"Taufik", t:"Gadget ada musim. Emas yang disimpan boleh sampai ke anak cucu, InsyaAllah.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : Kerja lebih masa, baki tetap kosong ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Kerja lebih masa, kenapa baki tetap kosong?",
    comments: [
      {n:"Zulkarnain Ali", t:"OT tiap minggu tapi hujung bulan tetap sesak 😩"},
      {n:"Wani Syuhada", t:"bayar minimum kad kredit, aku pun buat macam ni"},
      {n:"Taufik", t:"Bayar minimum buat baki kad hampir tak bergerak sebab faedah terus jalan. Itu yang buat rasa kerja tak berhasil.", reply:true},
      {n:"Firdaus Hamzah", t:"rasa berduit walaupun takde duit, kena batang hidung"},
      {n:"Taufik", t:"Kad kredit buat kita rasa ada duit. Gram emas pula buat kita nampak duit yang betul-betul tinggal.", reply:true},
      {n:"Sabrina Johari", t:"nak mula macam mana kalau hutang ada lagi"},
      {n:"Taufik", t:"Langsaikan hutang berfaedah tinggi dulu. Sambil tu mula simpan kecil supaya tabiat menyimpan terbina.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : CTA — inflasi dan 1 dinar ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "1 Dinar emas dulu seekor kambing. Hari ini?",
    comments: [
      {n:"Hasnah Rahim", t:"barang dapur naik je setiap bulan 😮‍💨"},
      {n:"Taufik", t:"Duit kertas tak hilang, tapi kuasa belinya menyusut. Sebab tu sebahagian simpanan perlu ditukar jadi aset.", reply:true},
      {n:"Ammar Hakimi", t:"1 dinar tu berapa gram sebenarnya"},
      {n:"Taufik", t:"1 Dinar ialah 4.25 gram emas 999. Dari zaman dulu sampai sekarang ia masih boleh dibandingkan dengan harga seekor kambing.", reply:true},
      {n:"Nur Syahirah", t:"buka akaun emas ni kena bayar ke"},
      {n:"Taufik", t:"Buka akaun percuma, tak sampai 5 minit dengan bantuan dealer. Lepas tu beli dari RM100.", reply:true},
      {n:"Badrul Hisham", t:"emas tu simpan kat mana, boleh ambil fizikal?"},
      {n:"Taufik", t:"Disimpan oleh Public Gold. Bila gram dah cukup, boleh withdraw jadi goldbar atau dinar dan pos terus ke rumah.", reply:true},
      {n:"Aisyah Mardhiah", t:"ok nak mula simpan untuk anak anak"},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
