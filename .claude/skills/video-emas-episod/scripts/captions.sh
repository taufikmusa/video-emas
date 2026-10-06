#!/usr/bin/env bash
# Baca caption yang ditanam dalam video. Tiada speech-to-text dalam sandbox,
# jadi caption atas skrin ialah sumber skrip.
#   captions.sh overview <repo>/epNN <out.png>
#       8 frame setiap clip disusun satu baris satu clip -> cari tinggi caption.
#   captions.sh strip <video> <out.png> [y=870] [h=130] [ss=0]
#       jalur caption setiap 0.5s. Clip panjang (>55s) terpotong di hujung tile:
#       ulang dengan ss=48 untuk bahagian akhir.
set -euo pipefail
mode="${1:?mode}"; shift
if [ "$mode" = overview ]; then
  EP="$1"; OUT="$2"; T="$(mktemp -d)"; args=(); n=0
  for f in $(ls "$EP"/videos/q*.mp4 | sort -V); do
    n=$((n+1)); d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
    ffmpeg -loglevel error -y -i "$f" -vf "fps=8/$d,scale=120:-1,tile=8x1" -frames:v 1 "$T/$n.png"
    args+=(-i "$T/$n.png")
  done
  if [ "$n" -gt 1 ]; then ffmpeg -loglevel error -y "${args[@]}" -filter_complex vstack=inputs=$n "$OUT"; else cp "$T/1.png" "$OUT"; fi
  rm -rf "$T"
else
  VID="$1"; OUT="$2"; Y="${3:-870}"; H="${4:-130}"; SS="${5:-0}"
  ffmpeg -loglevel error -y -ss "$SS" -i "$VID" \
    -vf "fps=2,crop=720:$H:0:$Y,scale=360:$((H/2)),mpdecimate=hi=64*40:lo=64*20:frac=0.5,tile=3x40:padding=2:color=white" \
    -fps_mode vfr -frames:v 1 "$OUT"
fi
echo "ok $OUT"
