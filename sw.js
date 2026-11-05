// Farmers Quest service worker: stores every file on the device so the game runs offline.
// The game page itself is always fetched fresh when there's a connection (so a new upload shows up on the next
// open), and the saved copy is used when offline or when the network is too slow to answer within a few seconds.
const CACHE = 'farmersquest-v50';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
const PAGE_WAIT_MS = 4000;
async function tell(msg) { const cs = await self.clients.matchAll({ includeUncontrolled: true }); for (const c of cs) c.postMessage(msg); }
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    let done = 0;
    for (const f of FILES) {
      try { const r = await fetch(f, { cache: 'reload' }); if (r.ok) await c.put(f, r); } catch (err) { /* retry next visit */ }
      done++; await tell({ type: 'progress', done, total: FILES.length });
    }
    await tell({ type: 'ready' });
    self.skipWaiting();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
function isPage(req) {
  if (req.mode === 'navigate') return true;
  const u = new URL(req.url);
  return u.origin === location.origin && (u.pathname.endsWith('/') || u.pathname.endsWith('/index.html'));
}
async function freshPage(req) {
  const c = await caches.open(CACHE);
  const saved = (await c.match('./index.html')) || (await c.match('./'));
  const net = fetch(req.url.split('?')[0], { cache: 'no-store' }).then((r) => {
    if (r.ok) { c.put('./index.html', r.clone()); c.put('./', r.clone()); }
    return r;
  });
  if (!saved) return net.catch(() => Response.error());
  // network first, but never leave the player staring at a blank screen on a weak farm signal
  const timeout = new Promise((res) => setTimeout(() => res(null), PAGE_WAIT_MS));
  try { const r = await Promise.race([net, timeout]); if (r && r.ok) return r; } catch (err) { /* offline */ }
  return saved;
}
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (isPage(e.request)) { e.respondWith(freshPage(e.request)); return; }
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(e.request, { ignoreSearch: true });
    if (hit) return hit;
    try { const r = await fetch(e.request); if (r.ok && new URL(e.request.url).origin === location.origin) c.put(e.request, r.clone()); return r; } catch (err) { return Response.error(); }
  })());
});
