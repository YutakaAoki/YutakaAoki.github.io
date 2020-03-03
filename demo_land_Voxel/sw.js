// Ver 1.0.1, 2019/11/21

console.log('sw.js is coming. Ver 1.0.1, 19/11/21');
var cacheStorageKey = 'nwstk-pwa-191121-2';

var cacheList = [
//    './',
//    "./index.html",
	"./main.css",
	
	"./icon-72.png",
	"./icon-192.png",
	"./icon-256.png",
	"./icon-512.png",
	
	"./main.wasm",
	"./hogo.js",
	"./start.js"
];

self.addEventListener('install', function(e) {
	console.log('sw, install event!');
	e.waitUntil(
		caches.open(cacheStorageKey).then(function(cache) {
			console.log('sw, call cache.addAll(), Adding to Cache:', cacheList);
			return cache.addAll(cacheList);
		}).then(function() {
			console.log('sw, call self.skipWaiting()');
			return self.skipWaiting();
		})
	)
});

self.addEventListener('activate', function(e) {
	console.log('sw, Activate event is coming.');
	e.waitUntil(
		Promise.all(
			caches.keys().then(cacheNames => {
				console.log( "swYA, activate(), cacheNames=" + cacheNames );
				var         aaa         = cacheNames.map(name => {
					console.log( "swYA, activate(), name=" + name );
					if (name !== cacheStorageKey) {
						return caches.delete(name);;
					}
				})
				console.log( "swYA, activate(), aaa=" + aaa );
				
				return    aaa;
			})
		).then(() => {
			console.log('sw, Clients claims.');
			return self.clients.claim();
		})
	)
})

self.addEventListener('fetch', function(e) {
	console.log('sw, 2019/12/05, Fetch event:', e.request.url);
	
	var bOnLine = navigator.onLine;
	console.log('sw, Fetch event, bOnLine = ', bOnLine);
	
	
	if ( bOnLine ) {
		// when it is online :
		// Actually download data from the internet and store it in the local cache :
		console.log( 'sw, Actually download data from the internet and store it in the local cache :',
					 e.request.url );
		
		/*
		caches.open(cacheStorageKey).then(function(cache) {
			e.respondWith(
				cache.add(e.request.url).then(function(response) {
					return	response
				})
			);
		})
		*/
		
		var		cache2;
		
		// var		response;
		
		/*
		e.respondWith(
			caches.open(cacheStorageKey).then(function(cache) {
				cache2	= cache;
				
				fetch(e.request.url);
			}).then(function(response) {
				// if success :
				cache2.put(e.request.url, response);
				
				return	response;
			})
		);
		*/
		
		e.respondWith(
			caches.open(cacheStorageKey).then(function(cache) {
				return fetch(e.request).then(function(response) {
					cache.put(e.request, response.clone());
					return response;
				});
			})
		);
	}
	else {
		// when it is not online :
		// Use the data cached previously in the local.
		e.respondWith(
			caches.match(e.request).then(function(response) {
				if (response != null) {
					// if the cache exists correspond to the requested file :
					console.log('sw, Using cache for:', e.request.url);
					return response;
				}
				else {
					// if the cache dose NOT exist correspond to the requested file :
					console.log('sw, Actually download via fetch:', e.request.url);
					return fetch(e.request.url);
				}
			})
		);
	}
})
