/* ============================================================
   EP06 — SIRI SOAL JAWAB: LITERASI EMAS
   Faham peranannya dahulu, baru kumpul
   ============================================================

   EP01 asas (inflasi, harga, 999 vs 916, cara mula)
   EP02 mekanik urus niaga (zakat, harga, waris, buy back, kos upah)
   EP03 sebab & tujuan (bekalan terhad, kecairan, keluarga, tradisi)
   EP04 disiplin (tunai kecemasan dulu, simpanan terkorek, peniaga)
   EP05 tabiat selepas akaun dibuka (gram masih 0, konsisten, withdraw)
   EP06 -> KEFAHAMAN. Soalan orang yang dah tahu cara beli tetapi belum
           faham kenapa harga jual berbeza dari harga beli, kenapa bar
           kecil lebih mahal per gram, apa beza digital dan fizikal,
           berapa banyak patut disimpan, dan apa sebenarnya peranan
           emas dalam simpanan. Nada EP ni menerangkan, bukan mendesak.

   10 slide, setiap clip 10 saat, video avatar AI.
   Disclaimer index.html = versi "Video content AI".

   ---------- PLAYLIST ----------
   Slide | Fail | Source     | Isi clip
     1   | q1   | Video-01   | Jual balik lebih rendah — macam money changer
     2   | q2   | Video-03   | Duit untuk belanja, emas untuk simpan
     3   | q3   | Video-02   | Kos per gram: 1g vs bar besar
     4   | q4   | Video-06   | Harga macam ombak — kawal apa yang boleh
     5   | q5   | Video-08   | Tak berkarat, tak reput — bertahan ribuan tahun
     6   | q6   | Video-04   | Emas digital vs emas fizikal
     7   | q7   | Video-07   | Simpan emas di Akaun Emas GAP — tiada caj simpanan
     8   | q8   | Video-09   | Sejarah krisis — emas kekal diterima
     9   | q9   | Video-05   | Berapa banyak patut simpan — mula 10 peratus
    10   | q10  | Video-10   | Bukan emas jadikan kaya, tapi ilmu (CTA)

   Susunan BUKAN ikut nombor fail. Tiga sebab:

   1. Video-01 (spread) jadi hook sebab ia soalan paling tak selesa
      dalam senarai ni. Dealer yang jawab terus-terang di saat pertama
      membeli kepercayaan untuk sembilan slide seterusnya.
   2. Dua clip kos — Video-02 (kos per gram) dan Video-07 (caj simpanan)
      — dijarakkan ke slide 3 dan 7. Bersebelahan ia bunyi macam senarai
      harga; berjarak ia bunyi macam kelas.
   3. Video-05 (berapa peratus) dinaikkan ke slide 9, tepat sebelum CTA,
      sebab ia satu-satunya clip yang beri nombor boleh terus dibuat.

   ---------- NAMA PENONTON ----------
   40 nama, semuanya baru. Disemak baris demi baris terhadap
   ep06\NAMA-TERPAKAI.txt (189 nama EP01-EP05) — sifar pertindihan.

   ---------- YANG PERLU TAUFIK SEMAK ----------
   - Slide 1: aku terangkan spread sebagai perkara biasa pasaran fizikal
     tanpa sebut sebarang peratus. Jangan tambah nombor kalau tak pasti.
   - Slide 7: clip kata simpanan percuma dan tiada caj simpanan, jadi
     aku ikut ayat itu. Untuk withdraw dan penghantaran aku sengaja
     TAK sebut angka — cuma kata dealer boleh semak terma terkini.
     Kalau kau nak nyatakan kos sebenar, isi di sini.
   - Slide 9: "ramai mula sekitar 10 peratus" ikut clip, dan aku tambah
     bahawa peratus betul bergantung keadaan masing-masing supaya ia
     tak berbunyi nasihat kewangan.
   - Slide 6 ialah slide paling penting dalam EP ni. Clip kata "emas
     digital hanya nombor" — kalau tak dijelaskan, orang boleh sangka
     gram GAP pun sekadar nombor. Aku jawab terus: gram GAP mewakili
     emas fizikal 999 dan boleh di-withdraw. Semak ayat tu betul-betul.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : HOOK — kenapa harga jual lebih rendah ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Kenapa harga jual balik lebih rendah daripada harga beli?",
    comments: [
      {n:"Adib Haikal", t:"ni yg buat aku ragu2 nak mula"},
      {n:"Nadzirah Fauzi", t:"beli semalam, hari ni jual dah kurang 😕"},
      {n:"Taufik", t:"Setiap barang fizikal ada harga beli dan harga jual yang berbeza — sama seperti money changer. Ia bukan kos tersembunyi, itu cara pasaran fizikal berfungsi.", reply:true},
      {n:"Syukri Mahadi", t:"jd bila baru berbaloi?"},
      {n:"Taufik", t:"Emas disimpan, bukan diniagakan harian. Jarak antara dua harga itu jadi kurang bermakna bila tempoh simpanan panjang — dua tahun ke atas.", reply:true},
      {n:"Elina Roslan", t:"ohh patutlah semua cakap simpan lama"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : PERANAN — duit belanja, emas simpan ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Kenapa simpan emas dan bukan simpan tunai sahaja?",
    comments: [
      {n:"Bakri Sulaiman", t:"duit dalam bank pun simpanan juga kan"},
      {n:"Taufik", t:"Dua-dua ada peranan. Tunai untuk belanja dan kecemasan; emas untuk menjaga nilai simpanan jangka panjang.", reply:true},
      {n:"Nurfarahin Zaki", t:"maksudnya duit hilang nilai la?"},
      {n:"Taufik", t:"Kuasa belinya menyusut apabila kos hidup naik. Emas tak menjanjikan untung, tetapi sejarah panjangnya menjaga nilai.", reply:true},
      {n:"Hakim Ridzwan", t:"so bukan pilih satu, dua2 ada tempat"},
      {n:"Taufik", t:"Betul. Simpanan tunai tetap kena ada dahulu — emas datang selepas itu.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : MEKANIK — kos per gram ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Kenapa emas 1 gram nampak mahal berbanding bar besar?",
    comments: [
      {n:"Melati Junaidi", t:"pelik, 1g lagi mahal per gram dr yg besar"},
      {n:"Zulfikar Nasrun", t:"kenapa tak beli besar terus je"},
      {n:"Taufik", t:"Kos menghasilkan setiap keping hampir sama. Bila kos itu dibahagi kepada berat yang lebih besar, kos per gram jadi lebih rendah.", reply:true},
      {n:"Sofia Mahadzir", t:"tp aku takde duit nak beli besar sekali gus"},
      {n:"Taufik", t:"Sebab itu ada Akaun Emas GAP — kumpul gram dahulu ikut kemampuan, kemudian withdraw dalam berat yang anda pilih.", reply:true},
      {n:"Ariffin Sahak", t:"ok makesense, kumpul dulu baru tukar"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : PSIKOLOGI — harga turun naik ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Harga emas turun naik — patut risau tak?",
    comments: [
      {n:"Wardina Kamarul", t:"tengok harga turun, terus rasa nak stop"},
      {n:"Hisyam Zabidi", t:"naik pulak rasa dah terlambat 😩"},
      {n:"Taufik", t:"Harga bergerak setiap hari dan itu di luar kawalan sesiapa. Yang boleh dikawal ialah berapa konsisten gram anda bertambah.", reply:true},
      {n:"Zarith Sofea", t:"jd tak payah dok tengok chart la"},
      {n:"Taufik", t:"Semak bila perlu, tapi jangan jadikan ia syarat untuk menyimpan. Simpanan yang bergantung pada mood harga jarang bertahan lama.", reply:true},
      {n:"Nasrul Hadi", t:"betul jugak.. aku berhenti sbb tu dulu"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : SIFAT — tak berkarat, tak reput ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Kenapa emas boleh bertahan ribuan tahun?",
    comments: [
      {n:"Aisyatul Husna", t:"emas ni tak berkarat betul ke"},
      {n:"Taufik", t:"Ya. Emas tak berkarat, tak reput dan tak luntur — sebab itu emas dari zaman purba masih wujud sampai hari ini.", reply:true},
      {n:"Redzuan Manap", t:"patutlah orang dulu2 simpan emas"},
      {n:"Hanani Zulhelmi", t:"kalau simpan lama kualiti tak jatuh la ye"},
      {n:"Taufik", t:"Tidak. Goldbar 999 yang disimpan hari ini kekal 999 pada bila-bila masa nanti.", reply:true},
      {n:"Faiz Ridhuan", t:"ni yang aku suka pasal emas"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 6 : EDUKASI — digital vs fizikal ---------- */
  {
    id: 6,
    video: "videos/q6.mp4",
    topic: "Emas digital dengan emas fizikal — apa bezanya?",
    comments: [
      {n:"Sarimah Baharudin", t:"ramai tanya ni, digital tu emas betul ke"},
      {n:"Amirah Zafirah", t:"gram dalam akaun GAP tu digital ke fizikal?"},
      {n:"Taufik", t:"Gram dalam Akaun Emas GAP mewakili emas fizikal 999, dan boleh dikeluarkan sebagai Goldbar atau Dinar bila beratnya mencukupi.", reply:true},
      {n:"Khalid Ismadi", t:"oh jd bukan sekadar nombor la"},
      {n:"Taufik", t:"Bukan. Di situ bezanya — ada emas sebenar di hujung simpanan, dan ia dipos terus ke rumah bila anda withdraw.", reply:true},
      {n:"Norsyahida Rauf", t:"legaa, ingatkan sama je semua"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 7 : OBJECTION — kos simpanan ---------- */
  {
    id: 7,
    video: "videos/q7.mp4",
    topic: "Simpan emas dalam Akaun Emas GAP ada caj tak?",
    comments: [
      {n:"Luqman Hariz", t:"mesti ada hidden charge kan 😅"},
      {n:"Zulaika Hasni", t:"takut gram termakan dgn yuran nanti"},
      {n:"Taufik", t:"Tiada caj simpanan untuk gram dalam Akaun Emas GAP. Gram yang dikumpul kekal seperti yang disimpan.", reply:true},
      {n:"Rahmat Sulong", t:"buka akaun tu ada bayaran tak"},
      {n:"Taufik", t:"Buka akaun percuma. Untuk terma terkini berkaitan withdraw dan penghantaran, dealer boleh semak dan terangkan sebelum anda buat.", reply:true},
      {n:"Nurliana Adib", t:"ok senang hati sikit"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 8 : SEJARAH — krisis ---------- */
  {
    id: 8,
    video: "videos/q8.mp4",
    topic: "Masa krisis dulu, emas jadi macam mana?",
    comments: [
      {n:"Shamsul Kamil", t:"masa krisis semua benda jatuh kan"},
      {n:"Adlina Farhah", t:"duit pun jadi tak berapa nilai kan"},
      {n:"Taufik", t:"Dalam banyak krisis lalu, emas kekal diterima sebagai nilai walaupun aset lain merudum. Itu sejarah — bukan jaminan masa depan.", reply:true},
      {n:"Tengku Zahin", t:"jd emas ni macam insurans la"},
      {n:"Taufik", t:"Lebih tepat, ia penampan. Ia tak menghalang krisis, tetapi ia sebahagian simpanan yang tak bergantung pada satu pihak sahaja.", reply:true},
      {n:"Rosidah Mokhtar", t:"patutlah orang tua dulu simpan emas"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 9 : TUJUAN — berapa banyak ---------- */
  {
    id: 9,
    video: "videos/q9.mp4",
    topic: "Berapa banyak simpanan patut jadi emas?",
    comments: [
      {n:"Iskandar Rafiee", t:"kena tukar semua simpanan jadi emas ke"},
      {n:"Taufik", t:"Tidak. Emas satu alat, bukan keseluruhan simpanan. Tunai kecemasan tetap kena ada dahulu.", reply:true},
      {n:"Nurul Wafiy", t:"jd berapa % yang sesuai"},
      {n:"Taufik", t:"Ramai mula sekitar 10 peratus, kemudian laraskan. Peratus yang betul bergantung pada tanggungan dan matlamat anda sendiri.", reply:true},
      {n:"Zaim Hakimi", t:"ok, aku start kecil dulu la"},
      {n:"Suhana Ariff", t:"10% pun dah jauh lebih baik dr takde langsung 😄"},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 10 : CTA — ilmu dulu ---------- */
  {
    id: 10,
    video: "videos/q10.mp4",
    topic: "Simpan emas boleh jadi kaya ke?",
    comments: [
      {n:"Mohd Syazwan", t:"jujur, aku ingat simpan emas boleh cepat kaya"},
      {n:"Taufik", t:"Bukan. Emas tak menjadikan sesiapa kaya — ia menjaga nilai apa yang sudah anda simpan. Perlahan, tapi tak hilang.", reply:true},
      {n:"Nabil Ghufran", t:"kalau macam tu kenapa nak simpan"},
      {n:"Hidayatul Aqma", t:"sama, aku baru nak faham benda ni"},
      {n:"Taufik", t:"Sebab simpanan yang tak dijaga akan susut sendiri walaupun jumlahnya nampak sama. Bila anda faham peranannya, mengumpul gram jadi lebih mudah.", reply:true},
      {n:"Rizman Sallehin", t:"syarikat ni dah lama ke"},
      {n:"Taufik", t:"Public Gold ditubuhkan sejak 2008 dan kini lebih 2 juta penyimpan, dengan jaminan patuh syariah. Buka Akaun Emas GAP percuma, tak sampai 5 minit dengan bantuan dealer.", reply:true},
      {n:"Fadzillah Rosdi", t:"ok aku daftar malam ni"},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
