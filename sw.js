const CACHE_NAME = 'love-story-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://www.dropbox.com/scl/fi/7mnalgn76wm071d7yvhpw/_-_-_-_-_-_-_-_-_-MP3_160K.mp3?rlkey=7ncojpsucma54d4ylrcf3117f&st=kf6e0fno&dl=1'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});