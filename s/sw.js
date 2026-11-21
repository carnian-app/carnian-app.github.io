// Sentio Ergo Sum: lets the page be added to the home screen.
// It keeps nothing: every request goes straight to the network, no letter is ever cached.
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request));});
