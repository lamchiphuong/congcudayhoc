const CACHE_NAME = 'du-an-cua-to-v1';
const urlsToCache = [
  '.',
  'link.html',  // tên file HTML chính của bạn
  // Thêm các file khác nếu cần, ví dụ CSS external nếu có
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
