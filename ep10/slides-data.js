/* ============================================================
   SLIDES DATA EP10 — Gaji, dapur atau niaga, simpanan tetap jalan
   ============================================================

   Satu objek = satu slide. Format sama macam EP lain:
     {n:"Nama", t:"Teks"}               = komen penonton
     {n:"Taufik", t:"...", reply:true}  = jawapan dealer (kotak emas)

   Setiap clip ~30 saat: 7 komen, slide CTA 9.
   ============================================================ */

const SLIDES = [

  /* ---------- 1 : Gaji pertama Oren, tinggal RM10 ---------- */
  {
    id: 1,
    video: "videos/q1.mp4",
    topic: "Gaji pertama masuk, kenapa tinggal RM10 je?",
    comments: [
      {n:"Iman Haikal", t:"telefon baru gaji pertama 😅 aku dulu sebiji macam oren"},
      {n:"Nurul Hana", t:"gaji pertama memang rasa kaya seminggu je"},
      {n:"Taufik", t:"Gaji pertama paling sesuai untuk mula tabiat. Bila simpan dari awal, belanja ikut baki terasa biasa.", reply:true},
      {n:"Akmal Hisyam", t:"baru kerja gaji kecil, simpan berapa yang ok"},
      {n:"Taufik", t:"Mula dengan jumlah yang tak terasa berat. Ramai mula RM100 sebulan dalam Akaun Emas GAP, tambah bila gaji naik.", reply:true},
      {n:"Syafiqah Rahim", t:"ibu ajar simpan setiap bulan, terharu pulak 🥹"},
      {n:"Taufik", t:"Asingkan dulu bila gaji masuk, baru belanja. Baki simpanan tak lagi kosong hujung bulan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 2 : Suri rumah, baki belanja dapur ---------- */
  {
    id: 2,
    video: "videos/q2.mp4",
    topic: "Suri rumah tiada gaji, boleh ke menyimpan?",
    comments: [
      {n:"Rosnani Hamid", t:"ni aku la, kumpul baki duit dapur dalam uncang 🤭"},
      {n:"Faizal Azmi", t:"abang tu sporting, sokong isteri menyimpan"},
      {n:"Taufik", t:"Baki belanja dapur nampak kecil, tapi bila dikumpul konsisten ia jadi tabung kecemasan keluarga.", reply:true},
      {n:"Aisyah Humaira", t:"suri rumah boleh buka akaun emas ke tanpa slip gaji"},
      {n:"Taufik", t:"Boleh. Buka Akaun Emas GAP tak perlukan slip gaji. Beli dari RM100 bila ada lebihan.", reply:true},
      {n:"Mazlina Che Ros", t:"syiling dalam uncang tu baik tukar jadi gram"},
      {n:"Taufik", t:"Betul. Syiling dalam uncang senang terguna. Bila jadi gram emas, ia lebih susah dikorek untuk benda kecil.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 3 : Rider, tayar pancit, duit trip habis ---------- */
  {
    id: 3,
    video: "videos/q3.mp4",
    topic: "Rider, duit trip habis bila motor rosak?",
    comments: [
      {n:"Zul Hairi", t:"tayar pancit tengah hujan, duit trip siang terus lesap 😩"},
      {n:"Amirah Natasya", t:"suami aku rider, memang macam ni hari hari"},
      {n:"Taufik", t:"Pendapatan rider naik turun. Sebab tu asingkan sedikit untung setiap hari, supaya waktu sesak tak terus terjejas.", reply:true},
      {n:"Kamarul Zaman", t:"aku catat untung tiap hari, baru nampak bocor kat mana"},
      {n:"Taufik", t:"Catat dulu, baru boleh asingkan. Tunai untuk servis motor dan kecemasan, lebihan simpan jadi emas.", reply:true},
      {n:"Hafiz Daniel", t:"pendapatan tak tetap boleh ke simpan emas"},
      {n:"Taufik", t:"Boleh. Tiada kewajipan bulanan, jadi minggu banyak order simpan lebih, minggu perlahan rehat dulu.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 4 : Anak sulung tanggung keluarga ---------- */
  {
    id: 4,
    video: "videos/q4.mp4",
    topic: "Anak sulung tanggung keluarga, diri sendiri bila?",
    comments: [
      {n:"Nadhirah Salleh", t:"duit belanja adik, tambang bas ibu... sebak 😢 anak sulung je faham"},
      {n:"Ikhwan Rosli", t:"tinggal cukup cukup untuk diri sendiri, betul sangat"},
      {n:"Taufik", t:"Bantu keluarga itu berkat. Tapi bahagian untuk diri sendiri pun perlu ada, supaya hari tua tak terbeban.", reply:true},
      {n:"Fatin Amani", t:"rasa bersalah nak simpan bila keluarga perlukan"},
      {n:"Taufik", t:"Tak perlu rasa bersalah. Simpan sedikit untuk diri sendiri buat anda kuat untuk terus bantu mereka nanti.", reply:true},
      {n:"Azrul Nizam", t:"asingkan RM100 jadi emas, boleh la start"},
      {n:"Taufik", t:"Itu permulaan yang baik. Satu bahagian kecil, setiap kali ada lebihan, lama-lama jadi benteng kewangan.", reply:true},
    ],
    cta_label: "Daftar"
  },

  /* ---------- 5 : CTA — peniaga, campur duit niaga ---------- */
  {
    id: 5,
    video: "videos/q5.mp4",
    topic: "Jualan laku, kenapa untung bersih tak nampak?",
    comments: [
      {n:"Kak Yati Kuih", t:"duit niaga dengan duit dapur campur, pening kepala 😵"},
      {n:"Taufik", t:"Itu kesilapan paling biasa peniaga kecil. Asingkan akaun niaga dan peribadi, baru untung sebenar nampak.", reply:true},
      {n:"Hairul Anwar", t:"modal barang dulu, baru kira untung. noted"},
      {n:"Taufik", t:"Betul. Bila untung bersih dah jelas, simpan sebahagian supaya tak habis berputar dalam modal.", reply:true},
      {n:"Shahida Mokhtar", t:"untung niaga boleh simpan emas ke"},
      {n:"Taufik", t:"Boleh. Ramai peniaga simpan sebahagian untung dalam Akaun Emas GAP, beli dari RM100.", reply:true},
      {n:"Rasyid Bakar", t:"buka akaun ni kena datang kedai ke"},
      {n:"Taufik", t:"Tak perlu. Buka akaun percuma, tak sampai 5 minit dengan bantuan dealer. Emas disimpan oleh Public Gold.", reply:true},
      {n:"Mak Cik Siti Nasi Lemak", t:"ok esok aku asingkan tabung untung 💪"},
    ],
    cta_label: "Buka Akaun Emas GAP"
  },

];
