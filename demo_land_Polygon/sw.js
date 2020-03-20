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
	let		url			= e.request.url;
	console.log( "sw, fetch, url=", url );
	
	var		bOnLine		= navigator.onLine;
	let		bLocalHost	= 0;
	{
		let		aaa			= url.split( "//" );	// ["http:", "localhost:8080/xxx/yyy"]
		let		bbb			= aaa[1].split( "/" );	// ["localhost:8080". "xxx". "yyy"]
		let		ccc			= bbb[0].split( ":" );	// ["localhost", "8080"]
		let		hostname	= ccc[0];				// "localhost" or "xxxx.com", etc
	//	console.log( "aaa=", aaa );
	//	console.log( "bbb=", bbb );
	//	console.log( "ccc=", ccc );
		console.log( "sw, fetch, hostname=", hostname );
		if ( hostname === "localhost" ) {
			bLocalHost	= 1;
		}
	}
	console.log( "sw, fetch, bLocalHost=", bLocalHost, ", bOnLine=", bOnLine );
	
	
	if ( bLocalHost || bOnLine ) {
		// when it is in localhost or online :
		if ( bLocalHost ) {
			// Actually read data from the local file system and store it in the local cache :
			console.log( "sw, fetch, 1, Actually read data from the local file system and store it in the local cache :", url );
		}
		else {
			// Actually download data from the internet and store it in the local cache :
			console.log( "sw, fetch, 1, Actually download data from the internet and store it in the local cache :", url );
		}
		
		/*
		caches.open(cacheStorageKey).then(function(cache) {
			e.respondWith(
				cache.add(url).then(function(response) {
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
				
				fetch(url);
			}).then(function(response) {
				// if success :
				cache2.put(url, response);
				
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
		console.log( "sw, fetch, 2, I want to use cache : ", url );
		
		// when it is offline and not in localhost :
		// Use the data cached previously in the local.
		e.respondWith(
			caches.match(e.request).then(function(response) {
				if (response != null) {
					// if the cache exists correspond to the requested file :
					console.log('sw, Using cache for:', url);
					return response;
				}
				else {
					// if the cache dose NOT exist correspond to the requested file :
					console.log('sw, Actually download via fetch:', url);
					return fetch(url);
				}
			})
		);
	}
})
