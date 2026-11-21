const C="pf-v1";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(clients.claim())});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||e.request.url.includes("firestore.googleapis")||e.request.url.includes("identitytoolkit"))return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
