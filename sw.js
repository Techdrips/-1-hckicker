const CACHE_NAME = "junk-clicker-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/app.js",
    "/images/dorito.png",
    "/images/burger.png",
    "/images/pizza.png",
    "/images/fries.png",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
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
