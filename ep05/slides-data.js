/* ============================================================
   EP05 — SIRI SOAL JAWAB: TABIAT SIMPANAN
   Dari akaun kosong ke 100 gram pertama
   ============================================================

   EP01 asas (inflasi, harga, 999 vs 916, cara mula)
   EP02 mekanik (zakat, harga, waris, buy back, kos upah)
   EP03 sebab & tujuan (bekalan terhad, kecairan, keluarga)
   EP04 disiplin (tunai kecemasan dulu, simpanan terkorek, peniaga)
   EP05 -> tabiat SELEPAS akaun dibuka. Kenapa gram masih kosong,
           macam mana nak konsisten, apa jadi bila terlepas sebulan,
           dan bila nak withdraw. Sasaran utamanya orang yang DAH
           buka akaun tetapi tak pernah isi — segmen paling senyap
           dan paling mudah dihidupkan semula.

   10 slide, setiap clip 10 saat, video avatar AI.
   Disclaimer index.html = versi "Video content AI".

   ---------- PLAYLIST ----------
   Slide | Fail | Source     | Isi clip
     1   | q1   | Video-01   | Akaun dah buka, gram masih 0 (hook)
     2   | q2   | Video-02   | "RM100 buat apa" — gram tetap bertambah
     3   | q3   | Video-03   | Top up dalam app, tak sampai seminit
     4   | q4   | Video-04   | Gaji habis — isunya tabiat, bukan jumlah
     5   | q5   | Video-07   | Gram pertama: bukan nombor, emas sebenar
     6   | q6   | Video-05   | Terlepas sebulan bukan gagal selamanya
     7   | q7   | Video-06   | Simpan 2 tahun ke atas, bukan cepat kaya
     8   | q8   | Video-09   | Tabiat -> berhenti kejar harga, kejar 100g
     9   | q9   | Video-08   | Gram dah banyak: withdraw atau biarkan
    10   | q10  | Video-10   | "Tunggu harga turun" — mula dulu (CTA)

   Susunan BUKAN ikut nombor fail. Tiga sebab:

   1. Video-07 (gram pertama) dinaikkan ke slide 5 untuk memecahkan
      tiga slide disiplin berturut-turut (4, 5, 6 asal). Selepas
      diberitahu "kena berdisiplin" dua kali, orang perlu nampak
      ganjarannya sebelum diberitahu kali ketiga.
   2. Video-09 (fokus 100g) dan Video-10 (tunggu harga turun) dua-dua
      pasal psikologi harga. Video-08 (withdraw) diselitkan di antara
      supaya ia tak bunyi berulang.
   3. Video-08 duduk tepat sebelum CTA sebagai bukti terakhir: gram
      dalam akaun itu emas sebenar yang boleh dikeluarkan.

   ---------- NAMA PENONTON ----------
   39 nama, semuanya baru. Disemak baris demi baris terhadap
   ep05\NAMA-TERPAKAI.txt (150 nama EP01-EP04) — sifar pertindihan.

   ---------- YANG PERLU TAUFIK SEMAK ----------
   - Slide 3: aku tulis "tak sampai seminit" sebab clip sendiri kata
     1 minit. Kalau realiti lebih lama untuk orang baru, tukar.
   - Slide 6: aku kata "tiada kewajipan bayar setiap bulan".
     Sahkan ayat ni betul untuk Akaun Emas GAP semasa.
   - Slide 9: aku kata withdraw "tertakluk kepada gram yang mencukupi
     untuk berat yang dipilih" — tanpa sebut berat minimum. Kalau kau
     nak nyatakan berat sebenar, isi di sini.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — akaun terbuka, gram kosong ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Dah buka Akaun Emas GAP tapi gram masih kosong?",
    comments: [
      {n:"Shafiq Roslan", t:"eh ni macam sindir aku je 😅"},
      {n:"Nurul Hidayu", t:"buka tahun lepas, sampai skrg tak isi apa2"},
      {n:"Taufik", t:"Buka akaun ialah langkah pertama, bukan garisan penamat. Gram hanya bertambah bila ada simpanan masuk.", reply:true},
      {n:"Azlan Mahmud", t:"asyik tangguh sbb tunggu duit lebih"},
      {n:"Taufik", t:"Duit lebih jarang datang sendiri. Mula dengan jumlah yang anda pasti mampu bulan ini, walaupun kecil.", reply:true},
      {n:"Faridah Zainal", t:"ok bulan ni aku isi la sikit"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : OBJECTION — RM100 nampak kecil ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "RM100 sebulan boleh jadi apa dalam simpanan emas?",
    comments: [
      {n:"Hafizul Anwar", t:"100 je.. tak sampai satu gram pun kot"},
      {n:"Syazwani Rahim", t:"betul, rasa lambat sgt nak kumpul"},
      {n:"Taufik", t:"RM100 memang tak beli seketul bar. Tapi dalam Akaun Emas GAP anda kumpul gram — ia bertambah setiap kali top up, tak perlu tunggu cukup satu bar.", reply:true},
      {n:"Zulaikha Nordin", t:"jd gram tu boleh tukar emas betul nanti?"},
      {n:"Taufik", t:"Boleh. Bila gram mencukupi, withdraw jadi Goldbar atau Dinar 999 dan ia dipos terus sampai ke rumah.", reply:true},
      {n:"Danial Hakim", t:"ok la, aku start 100 dulu"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : MEKANIK — berapa lama nak top up ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Berapa lama nak top up simpanan emas?",
    comments: [
      {n:"Kamarul Zaman", t:"leceh tak? kena pergi kedai ke"},
      {n:"Nabihah Rosli", t:"ingatkan kena jumpa dealer setiap kali 😅"},
      {n:"Taufik", t:"Tak perlu. Top up dibuat terus dalam app — selalunya tak sampai seminit, bila-bila masa selagi ada internet.", reply:true},
      {n:"Aiman Tarmizi", t:"tengah malam pun boleh ke"},
      {n:"Taufik", t:"Boleh. Harga dikemas kini ikut pasaran dan anda boleh semak sendiri dalam app sebelum tekan.", reply:true},
      {n:"Sarah Adriana", t:"kalau senang macam ni takde alasan la"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : TINGKAH LAKU — gaji habis hujung bulan ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Hujung bulan gaji habis — macam mana nak simpan?",
    comments: [
      {n:"Izham Yusri", t:"gaji masuk je terus lesap 😭"},
      {n:"Nurhidayah Salim", t:"tunggu ada lebih, tp tak pernah ada lebih"},
      {n:"Taufik", t:"Puncanya jarang jumlah gaji. Yang selalu jadi masalah ialah urutan — simpan dahulu, baru belanja yang selebihnya.", reply:true},
      {n:"Fauzan Rashid", t:"berapa % patut simpan"},
      {n:"Taufik", t:"Tak perlu peratus yang besar. Tetapkan satu jumlah yang anda pasti mampu setiap bulan, kemudian kekalkan.", reply:true},
      {n:"Shazwan Adli", t:"aku cuba asingkan hari gaji terus"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : GANJARAN — gram emas pertama ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Rasa apa bila gram emas pertama masuk akaun?",
    comments: [
      {n:"Hasliza Kamal", t:"first time tengok gram naik, terus rasa nak tambah lagi 😄"},
      {n:"Zubir Hamzah", t:"tp dlm app tu nombor je kan, emas betul ke"},
      {n:"Taufik", t:"Gram dalam Akaun Emas GAP mewakili emas fizikal 999, bukan sekadar angka. Bila cukup, ia boleh dikeluarkan sebagai Goldbar atau Dinar.", reply:true},
      {n:"Aminah Solehah", t:"oh ingatkan atas kertas je"},
      {n:"Taufik", t:"Bukan. Itu bezanya — hujung perjalanan ini ada emas yang boleh dipegang.", reply:true},
      {n:"Rusydi Nazmi", t:"ni yang buat rasa nak konsisten ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : PEMULIHAN — terlepas sebulan ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Bulan ni terlepas simpan — dah rosak ke simpanan?",
    comments: [
      {n:"Mimi Suraya", t:"dah skip 2 bulan, rasa nak give up terus"},
      {n:"Haziqah Aleya", t:"sama, lepas terputus susah nak start balik"},
      {n:"Taufik", t:"Tiada kewajipan bayar setiap bulan dalam Akaun Emas GAP. Bulan yang terlepas tak memadamkan gram yang sedia ada.", reply:true},
      {n:"Nizam Salleh", t:"jd gram lama tu kekal je la"},
      {n:"Taufik", t:"Kekal. Sambung bila mampu — yang merosakkan simpanan bukan satu bulan tertinggal, tetapi berhenti terus.", reply:true},
      {n:"Fatin Nadhira", t:"ok bulan depan aku sambung balik"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : JANGKA MASA — 2 tahun ke atas ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Berapa lama patut simpan emas sebelum guna?",
    comments: [
      {n:"Amsyar Hakimi", t:"kalau simpan 6 bulan boleh untung tak"},
      {n:"Taufik", t:"Emas bukan simpanan cepat kaya. Ufuk yang biasa disarankan ialah dua tahun ke atas.", reply:true},
      {n:"Wan Suhana", t:"kenapa kena lama sgt"},
      {n:"Taufik", t:"Harga emas naik turun dalam jangka pendek. Masa yang panjang memberi ruang kepada simpanan melepasi turun naik itu.", reply:true},
      {n:"Radin Iskandar", t:"jd bukan main beli jual la ye"},
      {n:"Taufik", t:"Bukan. Prestasi lalu bukan jaminan masa depan — sebab itu ia disimpan untuk tujuan, bukan untuk untung cepat.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : TUJUAN — berhenti kejar harga ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Bila simpan emas dah jadi tabiat, apa yang berubah?",
    comments: [
      {n:"Kartini Ahmad", t:"aku check harga tiap2 hari, penat"},
      {n:"Zafran Iqbal", t:"naik rasa nak beli, turun rasa nak tunggu lagi 😩"},
      {n:"Taufik", t:"Bila ia jadi tabiat, tumpuan berpindah dari harga harian kepada matlamat. Contohnya, 100 gram yang pertama.", reply:true},
      {n:"Nurin Batrisyia", t:"100g tu jauh gila rasanya"},
      {n:"Taufik", t:"Jauh kalau dikira sekali gus. Dekat kalau dikira sebagai gram yang bertambah setiap bulan.", reply:true},
      {n:"Hairi Zulkifle", t:"ok aku set target sendiri lepas ni"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 9 : MEKANIK — withdraw atau biarkan ---------- */
  {
    id: 9,
    video: "videos/q9.mp4",
    topic: "Gram dah banyak — withdraw jadi emas fizikal atau biarkan?",
    comments: [
      {n:"Puteri Hana", t:"dah kumpul lebih setahun, patut keluarkan ke"},
      {n:"Taufik", t:"Dua-dua betul. Ia bergantung pada tujuan simpanan anda.", reply:true},
      {n:"Amirul Syafiq", t:"beza dia apa"},
      {n:"Taufik", t:"Kalau tujuannya simpanan jangka panjang, biarkan dalam akaun dan terus tambah. Kalau anda mahu emas di tangan, withdraw jadi Goldbar atau Dinar 999 dan ia dipos ke rumah.", reply:true},
      {n:"Rohani Jamil", t:"boleh tukar bila2 masa je ke"},
      {n:"Taufik", t:"Boleh, tertakluk kepada gram yang mencukupi untuk berat yang dipilih.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 10 : CTA — tunggu harga turun ---------- */
  {
    id: 10,
    video: "videos/q10.mp4",
    topic: "Tunggu harga emas turun dulu, baru nak mula?",
    comments: [
      {n:"Tarmizi Sabtu", t:"aku tunggu harga turun ni, blm mula lagi"},
      {n:"Taufik", t:"Itu yang paling kerap berlaku. Menunggu titik terbaik selalunya berakhir dengan tidak bermula langsung.", reply:true},
      {n:"Aqilah Wardina", t:"sama, dah dua tahun tunggu 😅"},
      {n:"Nasir Ridzuan", t:"jd bila masa terbaik nak start"},
      {n:"Taufik", t:"Masa yang anda ada sekarang. Mula dengan RM100, kemudian tambah bila mampu — tiada kewajipan bayar setiap bulan.", reply:true},
      {n:"Marina Khalid", t:"syarikat ni selamat ke, baru dgr"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008 dan kini lebih 2 juta penyimpan, dengan jaminan patuh syariah. Buka akaun percuma, tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Zahid Kamarudin", t:"ok aku daftar sekarang je la"},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
