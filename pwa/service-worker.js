self.addEventListener('install', function(e) {
    if(self.skipWaiting){
        self.skipWaiting();
    }
});

self.addEventListener('activate', function(e) {
    setTimeout( self.clients.claim(), 10000);
    // setTimeout(
    //     e.waitUntil(caches.open("CACHE_NAME_TEST").then(function(e) {
    //     return e.keys().then(function(t) {
    //         return Promise.all(t.map(function(t) {
    //             return e["delete"](t)
    //         }))
    //     })
    // }).then(function() {
    //         console.log('[ServiceWorker] call self.clients.claim');
    //         return self.clients.claim();
    // }))
    // , 10000);
    // console.log('[ServiceWorker] end self.clients.claim');
    // console.log("Test Activate> " + "哈哈哈");
    // console.log("Test Activate> " + new Object());
    // console.log("Test Activate> ", new Object());
    console.log("Test Activate> ", "你好啊啊啊啊啊", new Object());
});

self.addEventListener('fetch', function(e) {
    // console.log('[Service Worker] Fetch', e.request.url);
    // console.log("Test Activate> " + "哈哈哈");
    // console.log("Test Activate> " + new Object());
    // console.log("Test Activate> ", new Object());
    // console.log("Test Activate> ", "你好啊啊啊啊啊");
});
