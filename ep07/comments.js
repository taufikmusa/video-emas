/* ============================================================
   COMMENT ENGINE — random-delay drip untuk satu slide
   ============================================================

   Diambil dari versi live shopping, tapi dua beza penting:

   1. Setiap slide ada instance sendiri. Timer mula bila slide masuk
      viewport, berhenti bila dia keluar, dan feed dikosongkan semula.
      Tiada satu timer global yang jalan sepanjang masa.

   2. Label. Ini BUKAN chat langsung. Setiap feed dilabel
      "Komen pilihan dari pelanggan" dan jawapan dealer ditanda
      "Jawapan dealer" — bukan "AUTO REPLY" yang bunyi macam
      sistem sedang jawab orang secara masa nyata.

   Teks komen ada dalam slides-data.js, bukan di sini.
   ============================================================ */

const CMT_MIN_DELAY = 2000;   // jarak minimum antara komen (ms)
const CMT_MAX_DELAY = 5200;   // jarak maksimum — clip panjang jangan terlalu sepi
const CMT_JITTER    = 1200;   // rawak tambahan 0..1200ms
const CMT_FIRST     = 500;    // lengah komen pertama selepas slide aktif
const CMT_MAX_ROWS  = 3;      // berapa baris kekal nampak

function initials(name){
  return name.split(' ').filter(Boolean).map(w => w[0]).slice(0,2).join('').toUpperCase();
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}

function CommentFeed(container, pool){
  this.el    = container;
  this.pool  = pool || [];
  this.i     = 0;
  this.timer = null;
  this.gap   = CMT_MIN_DELAY;
}

/* Sebarkan pool merentas panjang clip.
   Clip 10 saat dengan 6 komen perlu jarak yang berbeza dari clip 50 saat
   dengan 12 komen. Kalau jarak tetap, clip panjang akan habiskan semua
   komen dalam 20 saat pertama kemudian mengulang — dan pengulangan itu
   yang paling cepat mendedahkan bahawa komen bukan masa nyata. */
CommentFeed.prototype.pace = function(seconds){
  if(!seconds || !isFinite(seconds) || !this.pool.length){
    this.gap = CMT_MIN_DELAY;
    return;
  }
  const g = (seconds * 1000) / (this.pool.length + 1);
  this.gap = Math.max(CMT_MIN_DELAY, Math.min(CMT_MAX_DELAY, g));
};

CommentFeed.prototype._row = function(item){
  const row = document.createElement('div');
  row.className = 'c-row' + (item.reply ? ' reply' : '');
  const av   = item.reply ? '🪙' : initials(item.n);
  const tag  = item.reply ? '<span class="c-tag">Jawapan dealer</span>' : '';
  const name = item.reply ? '' : '<span class="c-name">' + escapeHtml(item.n) + '</span>';
  row.innerHTML = '<div class="c-av">' + av + '</div>' +
                  '<div class="c-body">' + tag + name + escapeHtml(item.t) + '</div>';
  return row;
};

CommentFeed.prototype._tick = function(){
  if(!this.pool.length) return;
  this.el.appendChild(this._row(this.pool[this.i % this.pool.length]));
  this.i++;
  while(this.el.children.length > CMT_MAX_ROWS){
    this.el.removeChild(this.el.firstChild);
  }
  this.timer = setTimeout(this._tick.bind(this), this.gap + Math.random() * CMT_JITTER);
};

CommentFeed.prototype.start = function(seconds){
  if(seconds !== undefined) this.pace(seconds);
  if(this.timer) return;
  this.timer = setTimeout(this._tick.bind(this), CMT_FIRST);
};

CommentFeed.prototype.stop = function(){
  clearTimeout(this.timer);
  this.timer = null;
};

/* Slide keluar viewport: henti timer, kosongkan feed, mula semula
   dari komen pertama bila dia masuk balik. */
CommentFeed.prototype.reset = function(){
  this.stop();
  this.i = 0;
  this.el.innerHTML = '';
};
