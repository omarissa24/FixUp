"use strict";var precacheConfig=[["/index.html","c5a2ca10d738288b2bd50d65f4e9c093"],["/static/css/main.8aa52ef7.css","46ba0063a41f0bb1b899dc4a92ee8e7e"],["/static/js/main.c9533e06.js","364164745e4017bfdfcaee27b9624048"],["/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["/static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["/static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["/static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["/static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["/static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["/static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["/static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["/static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["/static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});