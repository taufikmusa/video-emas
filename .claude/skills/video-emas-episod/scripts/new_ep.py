#!/usr/bin/env python3
"""Bina epNN/index.html dan tambah kad EP pada main page.

Guna (dari root repo):
  python3 new_ep.py <repo> <N> --title "..." --desc "..." --mins 6 \
      --tags "Disiplin,Mula kecil" --soalan "Soalan 1|Soalan 2|..." [--date YYYY-MM-DD]

- index.html EP disalin dari EP sebelumnya; hanya blok OG, URL dan EP_NUM
  ditukar. Rupa player datang dari assets/, jadi semua EP kekal seragam.
- Bilangan video dikira dari epNN/videos/q*.mp4.
- Kad "akan datang" (NEXT_EP) naik ke N+1.
- Selamat diulang: kalau EP N dah ada dalam EPISODES, entri lama diganti.
"""
import argparse, datetime, glob, json, os, re, sys

ap = argparse.ArgumentParser()
ap.add_argument('repo'); ap.add_argument('n', type=int)
ap.add_argument('--title', required=True); ap.add_argument('--desc', required=True)
ap.add_argument('--mins', type=int, required=True)
ap.add_argument('--tags', required=True); ap.add_argument('--soalan', required=True)
ap.add_argument('--date', default=datetime.date.today().isoformat())
a = ap.parse_args()

R = a.repo; n = f"{a.n:02d}"; prev = f"{a.n-1:02d}"
ep_dir = os.path.join(R, f"ep{n}")
vids = sorted(glob.glob(os.path.join(ep_dir, 'videos', 'q*.mp4')))
if not vids: sys.exit(f"tiada video q*.mp4 dalam {ep_dir}/videos — jalankan encode.sh dulu")
count = len(vids)

desc_og = f"{count} soalan pendek tentang simpan emas fizikal Public Gold. Swipe, tengok, faham dalam {a.mins} minit."
esc = lambda s: s.replace('&', '&amp;').replace('"', '&quot;')

s = open(os.path.join(R, f"ep{prev}", 'index.html')).read()
s = re.sub(r'<title>[^<]*</title>', f'<title>{esc(a.title)} — Siri Soal Jawab EP{n}</title>', s)
for k in ['name="description"', 'property="og:description"', 'name="twitter:description"']:
    s = re.sub(r'(' + re.escape(k) + r' content=")[^"]*', lambda m: m.group(1) + esc(desc_og), s)
for k in ['property="og:title"', 'name="twitter:title"']:
    s = re.sub(r'(' + re.escape(k) + r' content=")[^"]*', lambda m: m.group(1) + esc(a.title), s)
s = re.sub(r'(property="og:image:alt" content=")[^"]*', lambda m: m.group(1) + f'Siri Soal Jawab EP{n} — {esc(a.title)}', s)
s = s.replace(f'video.taufik.fyi/ep{prev}/', f'video.taufik.fyi/ep{n}/')
s = re.sub(r'const EP_NUM = \d+;', f'const EP_NUM = {a.n};', s)
assert f'ep{n}/og.jpg' in s and f'EP_NUM = {a.n};' in s
open(os.path.join(ep_dir, 'index.html'), 'w').write(s)

# ---- main page ----
p = os.path.join(R, 'index.html'); m = open(p).read()
J = lambda v: json.dumps(v, ensure_ascii=False)
tags = [t.strip() for t in a.tags.split(',') if t.strip()]
soalan = [q.strip() for q in a.soalan.split('|') if q.strip()]
entry = (
    "  {\n"
    f"    ep: {a.n},\n"
    f"    title: {J(a.title)},\n"
    f"    desc: {J(a.desc)},\n"
    f"    url: \"ep{n}/\",\n"
    f"    videos: {count}, mins: {a.mins}, date: \"{a.date}\",\n"
    f"    tags: {J(tags)},\n"
    "    soalan: [\n" + ",\n".join(f"      {J(q)}" for q in soalan) + "\n    ]\n"
    "  }"
)
start = m.index('const EPISODES = [')
end = m.index('\n];', start)
body = m[start:end]
existing = re.search(r'\n  \{\n    ep: ' + str(a.n) + r',.*?\n  \}', body, re.S)
if existing:
    body = body[:existing.start()] + '\n' + entry + body[existing.end():]
else:
    body = body.rstrip() + ',\n' + entry
m = m[:start] + body + m[end:]
m = re.sub(r'(const NEXT_EP = \{\n  ep: )\d+,', lambda x: x.group(1) + f'{a.n+1},', m)
open(p, 'w').write(m)
print(f"ep{n}/index.html siap · {count} video · {a.mins} minit · kad main page {'diganti' if existing else 'ditambah'} · NEXT_EP = {a.n+1}")
