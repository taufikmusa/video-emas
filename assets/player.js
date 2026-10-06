/* Enjin player swipe — dikongsi semua EP. Kandungan slide ada dalam
   slides-data.js dalam folder EP masing-masing. */
/* Kandungan slide ada dalam slides-data.js — edit fail tu, bukan sini. */

const feedEl  = document.getElementById('feed');
const barsEl  = document.getElementById('bars');
const countEl = document.getElementById('count');
const ctaFloat= document.getElementById('ctaFloat');
const pinnedEl= document.getElementById('pinned');

/* ---------- LINK: tukar di sini sahaja ----------
   CTA_URL dipakai oleh butang Daftar pada setiap slide DAN butang besar
   pada slide akhir. PIN_URL dipakai oleh kad pinned bawah kiri.
   `cta_url` dalam slides-data.js jadi override pilihan — kalau kosong,
   CTA_URL yang digunakan. Biar satu tempat sahaja jadi rujukan supaya
   tukar link tak bermakna edit tiga fail data. */
const CTA_URL   = 'https://publicgold.com.my/index.php?route=account/register&intro_pgcode=PG00359605&is_dealer=1';
const PIN_URL   = 'https://simpanemasfizikal.com/';
const EBOOK_URL = 'https://pg2u.my/app/ebook/taufikmusa';

/* Ikon buku untuk pautan E-Book dalam rail kanan. Inline SVG, bukan emoji —
   emoji buku dipaparkan berbeza pada setiap platform dan kadang berwarna,
   jadi ia tak sepadan dengan ikon lain dalam rail. */
const BOOK_SVG = '<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 5.5C10.4 4.5 8.4 4 6.5 4c-1.3 0-2.6.2-3.8.6-.4.1-.7.5-.7.9v12.1c0 .6.6 1.1 1.2.9 1-.3 2.1-.5 3.3-.5 1.9 0 3.9.5 5.5 1.5 1.6-1 3.6-1.5 5.5-1.5 1.2 0 2.3.2 3.3.5.6.2 1.2-.3 1.2-.9V5.5c0-.4-.3-.8-.7-.9C20.1 4.2 18.8 4 17.5 4c-1.9 0-3.9.5-5.5 1.5zm-1 12.1c-1.4-.7-3-1.1-4.5-1.1-.9 0-1.8.1-2.5.3V6.2c.8-.2 1.7-.2 2.5-.2 1.7 0 3.4.4 4.5 1.2zm2 0V7.2c1.1-.8 2.8-1.2 4.5-1.2.8 0 1.7 0 2.5.2v10.6c-.7-.2-1.6-.3-2.5-.3-1.5 0-3.1.4-4.5 1.1z"/></svg>';

pinnedEl.href = PIN_URL;

const WA_URL = 'https://api.whatsapp.com/send/?phone=60132740711&text=Salam%2C+boleh+bantu+saya+simpan+emas+di+Public+Gold&type=phone_number&app_absent=0';

/* Label bawah chip topik. Ia MESTI sepadan dengan disclaimer.
   Disclaimer kata komen ialah rekaan, jadi label tak boleh kata ia
   datang dari pelanggan — kalau tidak, page bercakap dua benda
   bertentangan pada skrin yang sama. */
const CMT_LABEL = 'Komen contoh';

/* Nombor dalam header buka WhatsApp, bukan panggilan. Orang yang
   sedang scroll dalam senyap lebih cenderung menaip daripada menelefon. */
document.getElementById('hostTel').href = WA_URL;
const WA_SVG = '<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/></svg>';

const N = SLIDES.length;
const slideEls = [];
const videos   = [];
const engines  = [];
let active = -1;
let userUnmuted = false;
let userPaused = false;

/* ---------- bina DOM dari data ---------- */
SLIDES.forEach((s, i) => {
  const isLast = (i === N - 1);

  const sec = document.createElement('section');
  sec.className = 'slide' + (isLast ? ' final' : '');
  sec.dataset.i = i;

  const vid = document.createElement('video');
  vid.muted = true; vid.playsInline = true;   /* tiada loop — habis main, slide bertukar */
  vid.setAttribute('playsinline',''); vid.setAttribute('webkit-playsinline','');
  vid.preload = 'none';
  vid.dataset.src = s.video;

  const body = document.createElement('div');
  body.className = 's-body';
  body.innerHTML =
    '<div class="topic">' + s.topic + '</div>' +
    '<div class="cmt-label">' + CMT_LABEL + '</div>' +
    '<div class="cmts"></div>';

  const rail = document.createElement('div');
  rail.className = 'rail';
  rail.innerHTML =
    '<a href="' + EBOOK_URL + '" target="_blank" rel="noopener" aria-label="E-Book emas percuma">' +
      '<div class="icon">' + BOOK_SVG + '</div><span>EBook</span></a>' +
    '<button type="button" data-mute="1" aria-label="Hidupkan bunyi">' +
      '<div class="icon mute-ic">🔇</div><span>Bunyi</span></button>' +
    '<a href="' + WA_URL + '" target="_blank" rel="noopener" aria-label="WhatsApp Taufik">' +
      '<div class="icon wa">' + WA_SVG + '</div><span>WhatsApp</span></a>' +
    '<button type="button" data-share="1"><div class="icon">↗</div><span>Kongsi</span></button>';

  sec.appendChild(vid);
  sec.insertAdjacentHTML('beforeend', '<div class="scrim-top"></div><div class="scrim-bottom"></div>');
  sec.appendChild(body);
  sec.appendChild(rail);

  if(isLast){
    const block = document.createElement('div');
    block.className = 'cta-block';
    block.innerHTML =
      '<div class="cta-head">' +
        '<img class="cta-icon" src="../assets/site-icon.png" alt="" width="38" height="38">' +
        '<div><div class="cta-title">Akaun Emas GAP Public Gold</div>' +
        '<div class="cta-sub">Buka akaun percuma · Mula dari RM100 · Tiada komitmen bulanan</div></div>' +
      '</div>' +
      '<a class="cta-big" href="' + (s.cta_url || CTA_URL) + '" target="_blank" rel="noopener">' + s.cta_label + '</a>' +
      '<div class="cta-note">Taufik Musa · Dealer Public Gold · +60132740711</div>';
    sec.appendChild(block);
  }

  feedEl.appendChild(sec);
  slideEls.push(sec);
  videos.push(vid);
  engines.push(new CommentFeed(body.querySelector('.cmts'), s.comments));

  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.innerHTML = '<div class="fill"></div>';
  barsEl.appendChild(bar);

  /* Durasi hanya diketahui selepas metadata masuk — laraskan jarak komen
     bila ia sampai, kalau tidak clip panjang bermula dengan jarak default
     yang terlalu rapat. */
  vid.addEventListener('loadedmetadata', () => engines[i].pace(vid.duration));

  /* Progress bar bergerak ikut masa video slide ini. */
  vid.addEventListener('timeupdate', () => {
    if(i !== active || !vid.duration) return;
    barsEl.children[i].querySelector('.fill').style.width =
      (vid.currentTime / vid.duration * 100) + '%';
  });

  /* Habis main = tukar slide sendiri. Guna scroll, bukan setActive terus,
     supaya scroll-snap dan IntersectionObserver kekal jadi satu-satunya
     sumber kebenaran — kalau tidak, posisi scroll dan slide aktif boleh
     jadi tak sepadan bila orang swipe sambil video habis.
     Slide terakhir ulang sendiri: itu titik conversion, jangan buang orang
     keluar dari situ. */
  vid.addEventListener('ended', () => {
    if(i !== active) return;
    if(i < N - 1){
      goToSlide(i + 1);
    } else {
      try { vid.currentTime = 0; } catch(e){}
      const p = vid.play(); if(p && p.catch) p.catch(()=>{});
    }
  });
});

/* ---------- lazy src: hanya slide semasa ± 1 ---------- */
function ensureSrc(i){
  const v = videos[i];
  if(!v || v.getAttribute('src')) return;
  v.setAttribute('src', v.dataset.src);
  v.load();
}
function dropSrc(i){
  const v = videos[i];
  if(!v || !v.getAttribute('src')) return;
  v.pause();
  v.removeAttribute('src');
  v.load();
}

/* ---------- gerak ke slide lain ---------- */
function goToSlide(i){
  feedEl.scrollTo({ top: feedEl.clientHeight * i, behavior: 'smooth' });
}

/* ---------- tukar slide aktif ---------- */
function setActive(i){
  if(i === active) return;

  if(active > -1){
    const prev = videos[active];
    prev.pause();
    try { prev.currentTime = 0; } catch(e){}
    engines[active].reset();
  }

  active = i;

  for(let k = 0; k < N; k++){
    if(Math.abs(k - i) <= 1) ensureSrc(k); else dropSrc(k);
  }

  /* Tukar slide = mula semula dalam keadaan main. Kalau jeda dibawa
     merentas slide, orang yang swipe akan jumpa skrin beku dan sangka
     page rosak. */
  userPaused = false;
  hidePlayPause();

  const v = videos[i];
  v.muted = !userUnmuted;
  try { v.currentTime = 0; } catch(e){}
  const p = v.play();
  if(p && p.catch) p.catch(()=>{});

  engines[i].start(v.duration);   /* sebarkan komen ikut panjang clip */

  [...barsEl.children].forEach((b, n) => {
    b.classList.toggle('seen', n < i);
    b.classList.toggle('now',  n === i);
    b.querySelector('.fill').style.width = n < i ? '100%' : '0%';
  });
  countEl.textContent = (i + 1) + '/' + N;

  const isLast = (i === N - 1);
  document.body.classList.toggle('on-final', isLast);
  ctaFloat.classList.toggle('hide', isLast);
  pinnedEl.classList.toggle('hide', isLast);
  ctaFloat.textContent = SLIDES[i].cta_label || 'Daftar';
  ctaFloat.href = SLIDES[i].cta_url || CTA_URL;
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting && e.intersectionRatio >= 0.6){
      setActive(Number(e.target.dataset.i));
    }
  });
}, { root: feedEl, threshold: [0, 0.6, 1] });

slideEls.forEach(el => io.observe(el));

/* ---------- bunyi ---------- */
function toggleMute(){
  userUnmuted = !userUnmuted;
  videos.forEach(v => v.muted = !userUnmuted);
  document.querySelectorAll('.mute-ic').forEach(el => el.textContent = userUnmuted ? '🔊' : '🔇');
  document.querySelectorAll('[data-mute]').forEach(el =>
    el.setAttribute('aria-label', userUnmuted ? 'Senyapkan bunyi' : 'Hidupkan bunyi'));
  if(userUnmuted && videos[active]){
    const p = videos[active].play(); if(p && p.catch) p.catch(()=>{});
  }
  syncSoundCue();
}

/* iOS kadang tolak autoplay sampai ada sentuhan pertama */
document.addEventListener('touchstart', () => {
  if(!userPaused && videos[active] && videos[active].paused){
    const p = videos[active].play(); if(p && p.catch) p.catch(()=>{});
  }
}, { once:true, passive:true });

/* ---------- tap untuk jeda / main ----------
   Cabaran di sini ialah membezakan TAP daripada SCROLL. Scroll bermula
   dengan pointerdown juga, jadi kalau kita dengar 'click' sahaja, setiap
   swipe yang berakhir atas video akan tersalah dikira sebagai tap.
   Penyelesaiannya: rekod kedudukan dan masa semasa pointerdown, dan
   hanya kira sebagai tap kalau jari hampir tak bergerak dan lepas cepat. */
const TAP_MOVE = 12;    // px — lebih dari ni dikira scroll
const TAP_TIME = 400;   // ms — lebih lama dikira tekan-lama, bukan tap
const ppEl   = document.getElementById('playPause');
const ppIcon = document.getElementById('ppIcon');
const ICON_PLAY  = 'M8 5v14l11-7z';
const ICON_PAUSE = 'M6 5h4v14H6zM14 5h4v14h-4z';

let ppTimer;
function showPlayPause(paused){
  ppIcon.setAttribute('d', paused ? ICON_PLAY : ICON_PAUSE);
  ppEl.classList.add('show');
  clearTimeout(ppTimer);
  /* Bila dijeda, ikon kekal supaya orang nampak page tak rosak.
     Bila disambung, ia lesap sendiri — tak perlu kekal. */
  if(!paused) ppTimer = setTimeout(() => ppEl.classList.remove('show'), 600);
}
function hidePlayPause(){ clearTimeout(ppTimer); ppEl.classList.remove('show'); }

function togglePlay(){
  const v = videos[active];
  if(!v) return;
  if(v.paused){
    userPaused = false;
    const p = v.play(); if(p && p.catch) p.catch(()=>{});
    engines[active].start();
    showPlayPause(false);
  } else {
    userPaused = true;
    v.pause();
    engines[active].stop();   /* komen beku sekali — kalau tidak ia terus
                                 menaip sendiri atas video yang dah berhenti */
    showPlayPause(true);
  }
}

/* Elemen yang ada kerja sendiri tak boleh mencetuskan jeda. */
const NO_TAP = 'a, button, .pinned, .cta-block, .cta-float, .disc, .chrome';
let tapX = 0, tapY = 0, tapT = 0, tapOK = false;

feedEl.addEventListener('pointerdown', (e) => {
  tapOK = !e.target.closest(NO_TAP);
  tapX = e.clientX; tapY = e.clientY; tapT = e.timeStamp;
}, { passive:true });

feedEl.addEventListener('pointerup', (e) => {
  if(!tapOK) return;
  if(Math.abs(e.clientX - tapX) > TAP_MOVE) return;
  if(Math.abs(e.clientY - tapY) > TAP_MOVE) return;
  if(e.timeStamp - tapT > TAP_TIME) return;
  togglePlay();
}, { passive:true });

/* ---------- kongsi ---------- */
feedEl.addEventListener('click', (e) => {
  if(e.target.closest('[data-share]')) { shareSite(); return; }
  if(e.target.closest('[data-mute]'))  { toggleMute(); }
});
async function shareSite(){
  const url = location.href.split('#')[0];
  const data = {
    title: 'Simpan Emas GAP — Siri Soal Jawab',
    text: 'Siri soal jawab simpan emas fizikal dari RM100.',
    url: url
  };
  try{
    if(navigator.share){ await navigator.share(data); return; }
  }catch(err){
    if(err && err.name === 'AbortError') return;
  }
  try{
    await navigator.clipboard.writeText(url);
    flash('Link disalin ✓');
  }catch(err){
    flash(url);
  }
}
let flashEl, flashTimer;
function flash(msg){
  if(!flashEl){
    flashEl = document.createElement('div');
    flashEl.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);' +
      'bottom:calc(74px + env(safe-area-inset-bottom));z-index:30;background:rgba(0,0,0,.88);' +
      'border:1px solid var(--gold);color:var(--gold);font-size:11.5px;font-weight:600;' +
      'padding:8px 14px;border-radius:20px;max-width:86vw;text-align:center;word-break:break-all;';
    document.body.appendChild(flashEl);
  }
  flashEl.textContent = msg;
  flashEl.style.display = 'block';
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => { flashEl.style.display = 'none'; }, 2600);
}

/* ---------- disclaimer ---------- */
const disc      = document.getElementById('disc');
const discClose = document.getElementById('discClose');
let autoHideTimer;

function openDisc(){
  clearTimeout(autoHideTimer);
  disc.classList.remove('auto');
  disc.classList.add('show');
}
function closeDisc(){
  disc.classList.remove('show');
  setTimeout(() => disc.classList.remove('auto'), 500);
}
discClose.addEventListener('click', closeDisc);
disc.addEventListener('click', (e) => { if(e.target === disc) closeDisc(); });
document.getElementById('infoBtn').addEventListener('click', openDisc);

/* auto-fade pada slide pertama sahaja — tak menghalang swipe */
function autoDisclaimer(){
  disc.classList.add('auto','show');
  autoHideTimer = setTimeout(() => {
    disc.classList.remove('show');
    setTimeout(() => disc.classList.remove('auto'), 500);
  }, 2800);
}

/* ---------- butang buka suara di tengah ----------
   Sumber kebenaran tetap `userUnmuted`. Butang ini cuma cermin keadaan
   itu, jadi menyenyapkan semula dari rail kanan akan memunculkannya
   balik tanpa kod tambahan. Ia disembunyikan semasa disclaimer terbuka
   supaya dua benda tak bertindih di tengah skrin. */
const soundCue = document.getElementById('soundCue');

function syncSoundCue(){
  const sembunyi = userUnmuted || disc.classList.contains('show');
  soundCue.classList.toggle('show', !sembunyi);
}

soundCue.addEventListener('click', (e) => {
  e.stopPropagation();
  if(!userUnmuted) toggleMute();
});

/* Perhati kelas pada disclaimer, bukan tampal setiap fungsi buka tutup.
   Satu cangkuk, jadi tiada laluan yang terlepas. */
new MutationObserver(syncSoundCue).observe(disc, { attributes:true, attributeFilter:['class'] });
syncSoundCue();

/* ---------- emoji reaksi terapung ----------
   Hiasan semata untuk buat skrin terasa hidup semasa video main.
   Ia berhenti sendiri bila video dijeda, bila disclaimer terbuka,
   atau bila tab tak dilihat. */
const REACTS = ['\u2764\uFE0F','\uD83D\uDC4D','\uD83D\uDE0D','\uD83D\uDD25','\uD83D\uDE0A','\uD83D\uDE4C'];
const reactLayer = document.getElementById('reacts');

function spawnReact(){
  const s = document.createElement('span');
  s.className = 'react';
  s.textContent = REACTS[Math.floor(Math.random() * REACTS.length)];
  const dur = Math.round(2200 + Math.random() * 900);
  s.style.setProperty('--dx',  Math.round(Math.random() * 44 - 22) + 'px');
  s.style.setProperty('--rot', Math.round(Math.random() * 30 - 15) + 'deg');
  s.style.animationDuration = dur + 'ms';
  s.style.left     = Math.round(6 + Math.random() * 18) + 'px';
  s.style.fontSize = Math.round(16 + Math.random() * 8) + 'px';
  reactLayer.appendChild(s);
  setTimeout(() => s.remove(), dur + 120);
}

setInterval(() => {
  const v = videos[active];
  if(!v || v.paused || userPaused) return;
  if(document.hidden) return;
  if(disc.classList.contains('show')) return;
  if(document.body.classList.contains('on-final')) return;
  spawnReact();
}, 850);

/* ---------- butang Home ----------
   Disuntik dari sini, bukan ditulis dalam setiap index.html EP, supaya
   EP lama dan baru semua dapat butang yang sama dari satu fail.
   Link relatif "../" sentiasa tuju ke main page walau EP mana dibuka. */
(function(){
  const right = document.querySelector('.top-right');
  if(!right) return;
  const a = document.createElement('a');
  a.className = 'homebtn';
  a.href = '../';
  a.setAttribute('aria-label', 'Balik ke senarai episod');
  a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 11.5h3V21h5.5v-6h3v6H19v-9.5h3z"/></svg>Home';
  right.insertBefore(a, right.firstChild);
})();

/* ---------- mula ---------- */
feedEl.scrollTop = 0;
setActive(0);
autoDisclaimer();

/* ---------- tanda EP ini dah ditonton ----------
   Semua EP sekarang satu domain dengan main page, jadi localStorage
   dikongsi. Main page boleh papar "✓ Ditonton" walaupun orang buka EP
   terus dari link WhatsApp, bukan dari kad. */
if(typeof EP_NUM === 'number'){
  try {
    const s = JSON.parse(localStorage.getItem('fyi_seen') || '[]');
    if(!s.includes(EP_NUM)){ s.push(EP_NUM); localStorage.setItem('fyi_seen', JSON.stringify(s)); }
  } catch(e){}
}
