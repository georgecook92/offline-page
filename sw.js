var CACHE_NAME = 'v1';
var urlsToCache = [
    '/',
    '/anotherPage',
    '/public/index.html',
    '/public/page.html',
    '/public/images/spaceCat.jpeg',
    '/public/images/spaceDog.jpg'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log("Cache has been opened");
            return cache.addAll(urlsToCache);
        })

    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {

            if (response) {
                console.log("Return response from cache");
                return response;
            }
            
        })
    );
});
