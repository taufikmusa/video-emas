#!/usr/bin/env bash
# Rename + encode semula semua video dalam epNN/videos jadi q1.mp4..qN.mp4
# dengan faststart. Fail upload biasanya tiada faststart (moov di hujung)
# dan bitrate ~2.2Mbps; iPhone tak mula main selagi fail tak habis download.
# Guna: encode.sh <repo>/epNN
set -euo pipefail
EP="${1:?guna: encode.sh <repo>/epNN}"
V="$EP/videos"
TMP="$(mktemp -d)"
# susun ikut nombor dalam nama fail (1.mp4, q2.mp4, 10.mp4 ...)
mapfile -t FILES < <(ls "$V"/*.mp4 | awk -F/ '{f=$NF; n=f; gsub(/[^0-9]/,"",n); print n"\t"$0}' | sort -n | cut -f2)
i=0
for f in "${FILES[@]}"; do
  i=$((i+1))
  ffmpeg -loglevel error -y -i "$f" -c:v libx264 -preset slow -crf 25 -maxrate 1400k -bufsize 2800k \
    -pix_fmt yuv420p -profile:v high -c:a aac -b:a 96k -movflags +faststart "$TMP/q$i.mp4"
done
rm -f "$V"/*.mp4 "$V"/README.md "$V"/.gitkeep
mv "$TMP"/q*.mp4 "$V"/
rmdir "$TMP"
echo "== $i video =="
for f in $(ls "$V"/q*.mp4 | sort -V); do
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
  m=$(ffprobe -v trace "$f" 2>&1 | grep -o "type:'moov'\|type:'mdat'" | head -1)
  printf "%s  %5.1fs  %6dKB  %s\n" "$(basename "$f")" "$d" $(( $(stat -c%s "$f") / 1024 )) "$m"
done
