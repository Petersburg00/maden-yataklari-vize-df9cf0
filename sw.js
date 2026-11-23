// Çevrimdışı izleme için service worker. VERSION ve SHELL tools/cevrimdisi.py ile güncellenir.
const VERSION = "9e38c367eb";
const SHELL = ["./", "apple-touch-icon.png", "calis-data.js", "calis.html", "data.js", "figs.js", "icon-192.png", "icon-512.png", "index.html", "manifest.webmanifest", "sinav-data.js", "sinav.html", "offline-files.json"];
const SHELL_CACHE = "maden-shell-" + VERSION;
const MEDIA_CACHE = "maden-media"; // slayt + ses: kullanıcı "Çevrimdışı indir"e basınca dolar

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL_CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith("maden-shell-") && k !== SHELL_CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (/\/(slides|audio)\//.test(url.pathname)) e.respondWith(media(req));
  else e.respondWith(shell(req));
});

async function media(req){
  const c = await caches.open(MEDIA_CACHE);
  const hit = await c.match(req.url, { ignoreSearch: true });
  if (hit) return ranged(req, hit);
  const r = await fetch(req);
  if (r.status === 200 && !req.headers.get("range")) c.put(req.url, r.clone()).catch(()=>{});
  return r;
}
// iPhone Safari ses dosyalarını parça parça (Range) ister; önbellekten 206 yanıtı üret
async function ranged(req, r){
  const range = req.headers.get("range");
  if (!range) return r;
  const buf = await r.arrayBuffer(), n = buf.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  let a = 0, b = n - 1;
  if (m) {
    if (m[1] === "" && m[2] !== "") a = Math.max(0, n - Number(m[2]));
    else { a = Number(m[1] || 0); if (m[2] !== "") b = Math.min(Number(m[2]), n - 1); }
  }
  if (a >= n) return new Response(null, { status: 416, headers: { "Content-Range": "bytes */" + n } });
  return new Response(buf.slice(a, b + 1), { status: 206, headers: {
    "Content-Type": r.headers.get("Content-Type") || "audio/mpeg",
    "Content-Range": "bytes " + a + "-" + b + "/" + n,
    "Content-Length": String(b - a + 1), "Accept-Ranges": "bytes" } });
}
// sayfa/kod: önce ağ (güncel kalsın), ağ yoksa veya 4 sn'de cevap gelmezse önbellek
async function shell(req){
  const c = await caches.open(SHELL_CACHE);
  const cached = () => c.match(req, { ignoreSearch: true })
    .then(r => r || (req.mode === "navigate" ? c.match("index.html") : undefined));
  const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()).catch(()=>{}); return r; });
  const timeout = new Promise(res => setTimeout(res, 4000));
  try {
    const r = await Promise.race([net, timeout.then(cached)]);
    if (r) return r;
    return await net;
  } catch (e) {
    const r = await cached();
    if (r) return r;
    throw e;
  }
}
