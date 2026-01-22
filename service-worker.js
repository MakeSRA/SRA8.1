self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sra81').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/rules.json'
      ])
    )
  );
});
