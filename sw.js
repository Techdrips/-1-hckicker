const CACHE_NAME = "junk-clicker-cache-v1";
const urlsToCache = [
    "/-1-hckicker/",
    "/-1-hckicker/index.html",
    "/-1-hckicker/styles.css",
    "/-1-hckicker/app.js",
    "/-1-hckicker/dorito.png",
    "/-1-hckicker/burger.png",
    "/-1-hckicker/pizza.png",
    "/-1-hckicker/fries.png",
    "/-1-hckicker/icon-192x192.png",
    "/-1-hckicker/icon-512x512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
