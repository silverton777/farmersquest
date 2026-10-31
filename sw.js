// Farmers Quest service worker: stores every file on the device so the game runs offline.
const CACHE = 'farmersquest-v27';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
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
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(e.request, { ignoreSearch: true }) || (e.request.mode === 'navigate' ? await c.match('./index.html') : null);
    if (hit) return hit;
    try { const r = await fetch(e.request); if (r.ok && new URL(e.request.url).origin === location.origin) c.put(e.request, r.clone()); return r; } catch (err) { return hit || Response.error(); }
  })());
});
