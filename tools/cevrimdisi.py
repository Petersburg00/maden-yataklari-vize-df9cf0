#!/usr/bin/env python3
"""Çevrimdışı dosya listesini (offline-files.json) ve sw.js sürümünü günceller.
Slayt/ses/kod değişince depo kökünde çalıştır:  python3 tools/cevrimdisi.py"""
import hashlib, json, os, re, subprocess
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
files = subprocess.run(["git", "ls-files"], cwd=root, capture_output=True, text=True).stdout.split()
files = sorted(f for f in files if os.path.exists(os.path.join(root, f)))
media = [f for f in files if f.startswith(("slides/", "audio/"))]
shell = [f for f in files if not f.startswith(("slides/", "audio/", "tools/", ".")) and f not in ("sw.js", "offline-files.json")]
h = hashlib.sha1()
for f in files:
    if f in ("sw.js", "offline-files.json"): continue
    h.update(f.encode()); h.update(open(os.path.join(root, f), "rb").read())
version = h.hexdigest()[:10]
out = {"version": version, "shell": shell + ["offline-files.json"],
       "media": [{"p": f, "s": os.path.getsize(os.path.join(root, f))} for f in media]}
json.dump(out, open(os.path.join(root, "offline-files.json"), "w"), ensure_ascii=False, separators=(",", ":"))
sw = os.path.join(root, "sw.js"); s = open(sw, encoding="utf-8").read()
s = re.sub(r'const VERSION = "[^"]*";', f'const VERSION = "{version}";', s, count=1)
s = re.sub(r'const SHELL = \[[^\]]*\];', "const SHELL = " + json.dumps(["./"] + out["shell"]) + ";", s, count=1)
open(sw, "w", encoding="utf-8").write(s)
print("sürüm", version, "·", len(media), "medya dosyası,", round(sum(m["s"] for m in out["media"]) / 1e6, 1), "MB")
