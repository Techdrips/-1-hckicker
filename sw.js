self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('junk-clicker-cache').then(function(cache) {
      return cache.addAll([
        '/-1-hckicker/',
        '/-1-hckicker/index.html',
        '/-1-hckicker/manifest.json',
        '/-1-hckicker/icon-192x192.png',
        '/-1-hckicker/icon-512x512.png',
        '/-1-hckicker/styles.css', // if you have styles
        '/-1-hckicker/app.js' // if you have external JS
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
