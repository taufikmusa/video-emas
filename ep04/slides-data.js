/* ============================================================
   EP04 — SIRI SOAL JAWAB: DISIPLIN SEBELUM EMAS
   ============================================================

   EP01 asas · EP02 mekanik · EP03 sebab & tujuan.
   EP04 pergi ke tabiat dan susunan kewangan — kenapa orang gagal
   kekalkan simpanan, kenapa tunai kecemasan kena ada DULU sebelum
   emas, dan bagaimana peniaga guna emas sebagai backup modal.

   7 slide. Clip EP04 panjang (38-59 saat), bukan 10 saat macam EP
   sebelum ini. Sebab itu setiap slide dapat 10-14 komen, dan engine
   komen kini menyebarkan pool merentas panjang clip secara automatik
   (lihat CommentFeed.pace dalam comments.js).

   ---------- PLAYLIST ----------
   Slide | Fail | Source   | Durasi | Isi clip
     1   | q1   | Video-02 | 43s | 4 bantahan biasa + "ilmu dulu, baru emas"
     2   | q2   | Video-03 | 39s | Emas bukan untuk orang kaya sahaja
     3   | q3   | Video-06 | 46s | Simpan nombor vs simpan nilai
     4   | q4   | Video-05 | 58s | Simpanan asyik terkorek balik
     5   | q5   | Video-07 | 49s | Tunai 3 bulan DULU, baru emas
     6   | q6   | Video-04 | 51s | Peniaga kecil — emas backup modal
     7   | q7   | Video-01 | 59s | 4 langkah untuk mula (CTA)

   Slide 5 ialah slide paling kuat dalam EP ini. Seorang dealer yang
   menyuruh orang simpan TUNAI dahulu sebelum beli emas darinya —
   itu yang membezakan nasihat daripada jualan. Komen di situ sengaja
   mengangkat percanggahan itu, bukan menyembunyikannya.

   ---------- NAMA PENONTON ----------
   Semua nama BARU. Tiada yang berulang dari EP01, EP02 atau EP03
   (100 nama terpakai setakat ini). Beberapa nama muncul semula dalam
   slide 7 — itu disengajakan, penonton yang sama kembali bertanya.

   ---------- YANG PERLU TAUFIK SEMAK ----------
   1. Slide 3 — kisah "1 dinar beli seekor kambing sejak 1400 tahun".
      Aku bingkaikan sebagai perumpamaan kuasa beli, bukan harga tepat,
      sebab ia tak boleh disahkan sebagai angka. Kalau kau nak nyatakan
      lebih tegas, betulkan di sini.
   2. Slide 6 — pajak/Ar-Rahnu. Aku tak sebut kadar atau institusi
      tertentu, cuma "syarat berbeza, semak dulu".
   3. Slide 5 — angka 3 bulan dan 1 bulan gaji datang terus dari video.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — empat bantahan sekali gus ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Empat perkara orang selalu risau pasal simpan emas",
    comments: [
      {n:"Hakimi Jamal", t:"aku dengar semua ni dari kawan 😅"},
      {n:"Norliza Bakar", t:"yang rugi tu betul ke? beli mahal jual murah"},
      {n:"Taufik", t:"Itu berlaku bila emas yang dibeli ada kos upah tinggi. Untuk simpanan, pilih emas goldbar dan dinar, spread rendah.", reply:true},
      {n:"Fadzil Rahmat", t:"zakat tu macam mana pula"},
      {n:"Taufik", t:"Zakat emas simpanan ada nisab dan haul sendiri. Untuk pengiraan tepat, rujuk pusat zakat negeri anda.", reply:true},
      {n:"Aisyah Nordin", t:"aku ingat kena ada beribu baru boleh mula"},
      {n:"Taufik", t:"Tak. Mula dari RM100. Yang menghalang selalunya tanggapan, bukan harga.", reply:true},
      {n:"Rusli Awang", t:"takut emas hilang pun ada jugak"},
      {n:"Taufik", t:"Sebab itu gram disimpan dalam Akaun Emas GAP dulu, dan di-withdraw bila anda dah bersedia simpan sendiri.", reply:true},
      {n:"Mazlina Sidek", t:"ilmu dulu baru beli — betul tu"},
      {n:"Hasrul Zakwan", t:"aku rasa dulu aku silap tempat"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : EMAS BUKAN UNTUK ORANG KAYA ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Kumpul emas ni untuk orang kaya je ke?",
    comments: [
      {n:"Rabiatul Adawiyah", t:"aku selalu rasa macam tu 😔"},
      {n:"Fikri Hazman", t:"tengok orang lain je selama ni"},
      {n:"Taufik", t:"Simpan emas tak perlu tunggu gaji tinggi. Simpan ikut bajet kita sendiri, janji konsisten.", reply:true},
      {n:"Noraini Sarip", t:"nenek aku dulu memang ada rantai emas"},
      {n:"Taufik", t:"Itu contoh terbaik. Mereka tiada akaun emas, tapi mereka ada emas fizikal, dan itu yang menolong masa susah.", reply:true},
      {n:"Syamsul Bahri", t:"sekarang lagi senang kan, boleh mula kecil"},
      {n:"Taufik", t:"Ya. Mula RM100, tiada komitmen bulanan.", reply:true},
      {n:"Erra Yusnita", t:"ok aku tak nak tunggu kaya dulu"},
      {n:"Mohd Faiq", t:"start dulu, kaya kemudian 😄"},
      {n:"Sharifah Munirah", t:"betul, tunggu 'cukup duit' tu tak pernah sampai"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : NOMBOR vs NILAI ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Simpan nombor, atau simpan nilai?",
    comments: [
      {n:"Zulhaimi Sapiee", t:"ayat ni makan dalam sikit 😮"},
      {n:"Nasuha Amran", t:"duit dalam bank memang nombor je"},
      {n:"Taufik", t:"Nombor dalam akaun boleh naik. Tapi kalau harga barang naik lebih laju, kuasa beli anda tetap turun.", reply:true},
      {n:"Ridhwan Selamat", t:"jadi kena tukar sebahagian je la"},
      {n:"Taufik", t:"Sebahagian, bukan semua. Simpanan tunai tetap perlu untuk kegunaan harian dan kecemasan.", reply:true},
      {n:"Halimatun Saadiah", t:"kisah kambing tu betul ke 1400 tahun"},
      {n:"Taufik", t:"Itu perumpamaan lama tentang kuasa beli emas yang bertahan. Emas terbukti kekal bernilai zaman berzaman.", reply:true},
      {n:"Aziman Latiff", t:"aku faham maksud dia"},
      {n:"Rozita Karim", t:"nilai lawan nombor, baru nampak bezanya"},
      {n:"Taufik", t:"Emas tak beri faedah atau dividen. Emas lindungi kuasa beli simpanan yang tak boleh dicetak sesiapa.", reply:true},
      {n:"Ikhwan Shafie", t:"ok aku nak asingkan sikit"},
      {n:"Munira Salleh", t:"sikit-sikit pun jadilah"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : SIMPANAN TERKOREK BALIK ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Simpanan asyik terkorek balik — kenapa?",
    comments: [
      {n:"Suzila Manap", t:"ni memang aku 😩"},
      {n:"Hamdi Ismadi", t:"duit dalam bank senang sangat nak keluar"},
      {n:"Taufik", t:"Itu puncanya. Bukan anda tak boleh menyimpan, cuma simpanan itu terlalu mudah dicapai.", reply:true},
      {n:"Fariza Zulhelmi", t:"so kena buat susah sikit la"},
      {n:"Taufik", t:"Ya. Bila simpanan jadi gram emas, ada satu langkah tambahan sebelum ia jadi duit semula. Langkah itu yang menyelamatkan.", reply:true},
      {n:"Amin Sanusi", t:"tapi kalau betul-betul perlu macam mana?"},
      {n:"Taufik", t:"Boleh dijual bila-bila. Emas tu duit juga, cuma emas memberi masa bertenang sebelum buat keputusan tergesa.", reply:true},
      {n:"Che Rahimah", t:"aku selalu korek masa ada sale 😅"},
      {n:"Hafizah Duraini", t:"sama! lepas tu menyesal"},
      {n:"Taufik", t:"Itu fitrah biasa. Sistem simpanan yang baik ialah yang mudah nak disimpan dan mudah nak dilupakan.", reply:true},
      {n:"Saiful Anuar", t:"1 gram sampai 100 gram tu menarik"},
      {n:"Taufik", t:"Matlamat yang boleh dilihat lebih mudah dikejar daripada 'simpan je banyak-banyak'.", reply:true},
      {n:"Zaleha Ithnin", t:"aku nak cuba cara ni"},
      {n:"Roslinda Yahaya", t:"dua tahun, boleh la kot"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : TUNAI DULU, BARU EMAS ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Harga emas jatuh — kena risau tak?",
    comments: [
      {n:"Azri Hasnan", t:"kalau turun aku mesti tak lena"},
      {n:"Taufik", t:"Yang paling risau turun naik harga ialah orang yang tiada simpanan tunai, sebab mereka terpaksa jual masa harga rendah.", reply:true},
      {n:"Farah Aqilah", t:"jadi kena ada cash dulu?"},
      {n:"Taufik", t:"Ya. Sebelum kumpul emas, pastikan ada simpanan tunai sekurang-kurangnya 3 bulan untuk kecemasan.", reply:true},
      {n:"Muzammil Radzi", t:"dealer suruh simpan cash dulu? 😮"},
      {n:"Taufik", t:"Sebab emas untuk jangka panjang. Kalau ia terpaksa dijual tahun depan, ia tak sempat buat kerjanya.", reply:true},
      {n:"Latifah Omar", t:"3 bulan tu berat jugak"},
      {n:"Taufik", t:"Kalau berat, mula dengan 1 bulan gaji. Selebihnya baru dikeraskan jadi emas.", reply:true},
      {n:"Firuz Talha", t:"nasihat ni jujur"},
      {n:"Suriani Puteh", t:"baru aku faham kenapa orang panik jual"},
      {n:"Amrul Fauzan", t:"ok aku betulkan susunan dulu"},
      {n:"Zaharuddin Alias", t:"cash dulu, emas kemudian. noted"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : PENIAGA KECIL ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Peniaga kecil — kenapa perlu ada emas?",
    comments: [
      {n:"Yusrina Salim", t:"aku ada kedai kecil, kos naik gila"},
      {n:"Faizul Adha", t:"modal pusingan memang ketat"},
      {n:"Taufik", t:"Perniagaan ada musimnya. Aset yang mudah dicairkan memberi ruang bernafas bila musim itu sepi.", reply:true},
      {n:"Hanisah Mahmud", t:"emas lagi cepat cair dari kedai atau rumah kan"},
      {n:"Taufik", t:"Ya. Hartanah ambil masa berbulan. Emas boleh dijual balik pada harga semasa, atau dipajak dulu tanpa melepaskannya.", reply:true},
      {n:"Rafiq Awal", t:"pajak tu macam mana pula"},
      {n:"Taufik", t:"Syarat dan kadar berbeza ikut institusi, semak dulu sebelum bergantung padanya.", reply:true},
      {n:"Sabariah Tajuddin", t:"cash dalam peti besi memang tak berkembang"},
      {n:"Taufik", t:"Dan ia ada risiko sendiri. Emas sekurang-kurangnya menjaga kuasa beli simpanan anda.", reply:true},
      {n:"Izwan Shahril", t:"backup modal, aku suka istilah tu"},
      {n:"Mahani Yaacob", t:"aku nak cuba asingkan untung sikit"},
      {n:"Taufik", t:"Mula dengan peratus kecil dari untung bulanan. Konsisten lebih penting dari jumlah.", reply:true},
      {n:"Umairah Solehin", t:"noted, terima kasih"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : CTA — 4 langkah untuk mula ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Empat langkah untuk mula hari ini",
    comments: [
      {n:"Norhisham Buang", t:"step dia senang je rupanya"},
      {n:"Taufik", t:"Empat langkah: daftar akaun percuma, install app Public Gold, login guna nombor IC tanpa dash, kemudian beli.", reply:true},
      {n:"Aliyah Zakri", t:"daftar tu kena bayar?"},
      {n:"Taufik", t:"Percuma. Tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Termizi Hanafi", t:"login guna IC je?"},
      {n:"Taufik", t:"Ya, nombor IC tanpa dash. TAC akan dihantar ke nombor telefon yang anda daftar.", reply:true},
      {n:"Hakimi Jamal", t:"minimum berapa"},
      {n:"Taufik", t:"Boleh mula dari RM100, atau terus 1 gram mengikut harga semasa.", reply:true},
      {n:"Noraini Sarip", t:"lepas beli, gram masuk terus ke?"},
      {n:"Taufik", t:"Ya, gram masuk ke Akaun Emas GAP anda. Bila cukup, withdraw jadi emas fizikal dan ia dipos ke rumah.", reply:true},
      {n:"Fikri Hazman", t:"syarikat ni dah lama ke"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008, kini lebih 2 juta penyimpan. Ada jaminan patuh syariah.", reply:true},
      {n:"Rozita Karim", t:"ok aku nak mula bulan ni"},
      {n:"Taufik", t:"Mula dulu, jangan tangguh. Hujung tahun nanti anda akan berterima kasih pada diri hari ini.", reply:true},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
