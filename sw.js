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
            /*
                    //stream can only be used once so needs to be cloned
                    var fetchRequest = event.request.clone();

                    return fetch(fetchRequest).then(
                      function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                          return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have 2 streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                          .then(function(cache) {
                            cache.put(event.request, responseToCache);
                          });

                        return response;
                      }
                    ); */
        })
    );
});