"use strict";var precacheConfig=[["/taptap/index.html","695eaf8723f519b419b2dc930e9626bf"],["/taptap/static/css/main.0779da0d.css","6aee78ab6427da5562efac85e712549c"],["/taptap/static/js/main.65402355.js","cb53239fa760372aa5f8d2652f54628a"],["/taptap/static/media/FredokaOne-Regular.5165c0fa.ttf","5165c0facbfede7afe6c9ef3fd635f11"],["/taptap/static/media/arrow-down.a9d3bf21.svg","a9d3bf218cde10e81171a3b6380ef3bc"],["/taptap/static/media/arrow_right.3e11119e.svg","3e11119ec55466e68d939354302801fa"],["/taptap/static/media/autor_img.d7d7d80b.jpg","d7d7d80b6c07bf612335bd8ff1f4475e"],["/taptap/static/media/banner.5ec97dee.jpg","5ec97deed101695fd612878ef61ab5de"],["/taptap/static/media/big_img.5c8a17cd.jpg","5c8a17cd8c0de91c277f47de1ccc70cf"],["/taptap/static/media/clock.93d42a42.jpg","93d42a42d76c2fc323e715f5a1c054ab"],["/taptap/static/media/clock.a8efc5b4.svg","a8efc5b4edfa298ab970043bd667f70d"],["/taptap/static/media/facebook.2badf142.svg","2badf142804f31994e88703f454f584b"],["/taptap/static/media/location-white.5465359f.svg","5465359ff2620ac6f55e151a6ea57970"],["/taptap/static/media/location.aa0b46eb.svg","aa0b46ebfbba0c2e5f27f76a8cb05bd3"],["/taptap/static/media/logo.20c79684.svg","20c796846943ec8e4c0795b0dcb025a6"],["/taptap/static/media/mail.e01ffc40.svg","e01ffc40fc8495eebd33640c85ca5787"],["/taptap/static/media/share.a4d12ac2.svg","a4d12ac23828b47725251cb596e9dd3b"],["/taptap/static/media/speech-bubbles.1de5718d.svg","1de5718d84dd2aee3ee37a2ce1606f73"],["/taptap/static/media/star.16a5a708.svg","16a5a70832a044084f373b906ee79009"],["/taptap/static/media/tour_guide.3fa66671.jpg","3fa66671fbf0397fa70b8a83473fd23f"],["/taptap/static/media/unstar.1ce8d561.svg","1ce8d56127a4f9a6e030d39cd97ad160"],["/taptap/static/media/yerevan.4c657f11.jpg","4c657f113770b060e8755c1865323b2f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/taptap/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});