"use strict";var precacheConfig=[["/game_On/index.html","711f6609dc7436a3b5b696feef46c8e5"],["/game_On/static/css/main.8298e717.css","43eb8f6af307f1efa09ff68cc1939366"],["/game_On/static/js/main.5e878045.js","d4ebaff8b712c83a51331abca8d82f5a"],["/game_On/static/media/brick_black.9fde76f1.png","9fde76f1485add611b9d5786e059a42b"],["/game_On/static/media/brick_blue_full.2e9128db.png","2e9128dbadd1c45f7e675d073154a6db"],["/game_On/static/media/brick_green_full.08bd92d2.png","08bd92d256f13f5c11e85dee257bb0f8"],["/game_On/static/media/brick_pink_full.a5a155bd.png","a5a155bda9ff1485c0a6db0f186391af"],["/game_On/static/media/brick_yellow_full.fad48d36.png","fad48d366f5560b338b8f724fdf5e25a"],["/game_On/static/media/calvocoressi.8079e9c7.png","8079e9c79c5ade48111864a443be54c1"],["/game_On/static/media/game.1792f1e7.png","1792f1e77313149a752cd67b43bd7d8a"],["/game_On/static/media/heart_red.afec8787.png","afec8787040b478c966400298226ed4f"],["/game_On/static/media/js.e6d48d6a.png","e6d48d6a91cda2262a5be9e5f50a6d76"],["/game_On/static/media/mail.c79d8da6.png","c79d8da6dbf4cf4e8473e77e2c64f75e"],["/game_On/static/media/mcbride.9b6d46e5.png","9b6d46e50c65035bc583c2e2dca5a41c"],["/game_On/static/media/mg.89cc277c.png","89cc277cb229525a88f0eb3d72cc62f0"],["/game_On/static/media/mg2.84b8a172.png","84b8a17206d24c7d6a8e16f1fb97d946"],["/game_On/static/media/mobile.2609c629.png","2609c62907be024b719685047d229d50"],["/game_On/static/media/rte.e830c479.png","e830c479b96bdb45bb5df28f27f40ba0"],["/game_On/static/media/spm.e42adc9e.png","e42adc9ec6dd08a316fe8d1ddc937449"],["/game_On/static/media/wall.b7debfac.png","b7debfacf66f98c973646dfc86dbdc00"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/game_On/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});