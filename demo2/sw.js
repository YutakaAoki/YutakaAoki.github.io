// Ver 1.0.1, 2019/11/21

console.log('sw.js is coming. Ver 1.0.1, 19/11/21')
var cacheStorageKey = 'nwstk-pwa-B2'

var cacheList = [
//  './',
//  "./index.html",
  "./main.css",
  "./icon.png",
  
  "./test.wasm",
  "./hogo.js",
  "./start.js"
]

self.addEventListener('install', function(e) {
  console.log('sw, install event!')
  e.waitUntil(
    caches.open(cacheStorageKey).then(function(cache) {
      console.log('sw, call cache.addAll(), Adding to Cache:', cacheList)
      return cache.addAll(cacheList)
    }).then(function() {
      console.log('sw, call self.skipWaiting()')
      return self.skipWaiting()
    })
  )
})

self.addEventListener('activate', function(e) {
  console.log('sw, Activate event')
  e.waitUntil(
    Promise.all(
      caches.keys().then(cacheNames => {
        return cacheNames.map(name => {
          if (name !== cacheStorageKey) {
            return caches.delete(name)
          }
        })
      })
    ).then(() => {
      console.log('sw, Clients claims.')
      return self.clients.claim()
    })
  )
})

self.addEventListener('fetch', function(e) {
  console.log('sw, Fetch event:', e.request.url)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response != null) {
        console.log('sw, Using cache for:', e.request.url)
        return response
      }
      console.log('sw, Actually download via fetch:', e.request.url)
      return fetch(e.request.url)
    })
  )
})
