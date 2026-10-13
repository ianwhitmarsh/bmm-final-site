"""Download every Framer-hosted image the site uses, save a compressed WebP
copy under /img, and point the pages and scripts at the local copy.

Meta tags (og:image) and the favicon keep their absolute Framer URLs, since
those are read by other sites. Query strings such as ?width=1080&height=1350
are kept because assets/script.js reads them to crop the slideshow images.
"""
import io, pathlib, re, sys, urllib.request
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parents[2]
IMG = ROOT / "img"
IMG.mkdir(exist_ok=True)
PAT = re.compile(r'(?<!content=")(?<!href=")https://framerusercontent\.com/images/([A-Za-z0-9]+)\.(png|jpe?g|webp)')
MAX_W = 1600

files = [p for p in ROOT.rglob("*") if p.suffix in (".html", ".js") and ".github" not in p.parts]
ids = {}
for f in files:
    for m in PAT.finditer(f.read_text(encoding="utf8")):
        ids[m.group(1)] = m.group(2)

done = {}
for i, (key, ext) in enumerate(sorted(ids.items())):
    out = IMG / (key + ".webp")
    url = "https://framerusercontent.com/images/%s.%s" % (key, ext)
    try:
        raw = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=60).read()
        im = Image.open(io.BytesIO(raw))
        im.load()
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.getbands() or im.mode == "P" else "RGB")
        if im.width > MAX_W:
            im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
        im.save(out, "WEBP", quality=74, method=6)
        done[key] = True
        print("%3d %s.%s %dKB -> %dKB" % (i, key, ext, len(raw) // 1024, out.stat().st_size // 1024))
    except Exception as e:  # leave that image on Framer if anything goes wrong
        print("SKIP", key, e)

def swap(m):
    return "/img/%s.webp" % m.group(1) if m.group(1) in done else m.group(0)

for f in files:
    s = f.read_text(encoding="utf8")
    t = PAT.sub(swap, s)
    # the old on-the-fly resize parameter means nothing for local files
    t = re.sub(r'(/img/[A-Za-z0-9]+\.webp\?[^"\'\s)]*?)&scale-down-to=\d+', r"\1", t)
    t = re.sub(r'(/img/[A-Za-z0-9]+\.webp)\?scale-down-to=\d+&?', r"\1?", t)
    t = t.replace(".webp?\"", ".webp\"").replace(".webp?'", ".webp'")
    if t != s:
        f.write_text(t, encoding="utf8")
        print("updated", f.relative_to(ROOT))
print(len(done), "of", len(ids), "images converted")
