(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  loadScript('assets/pages.js')
    .then(function () {
      return loadScript('assets/site.js');
    })
    .catch(function () {
      var app = document.getElementById('app');
      if (app) {
        app.innerHTML = '<main class="page-section"><div class="max-w-4xl mx-auto dashboard-card"><h1 class="font-heading text-3xl text-[var(--navy)]">ES Kabirizi</h1><p class="mt-4 text-slate-600">The website scripts could not load. Please check the file paths.</p></div></main>';
      }
    });
})();
