const CACHE_NAME = 'meal-planner-cache-v1';
const OFFLINE_URL = '/index.html';

self.addEventListener('install', (event) => {
  // Pre-cache the basic offline page
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        OFFLINE_URL,
        '/favicon.svg',
        '/manifest.json',
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      }).catch(() => null);
      // Return cached response if available, otherwise wait for network
      return cached || network;
    })
  );
});
