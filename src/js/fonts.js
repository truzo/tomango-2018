import './promise';
import FontFaceObserver from 'fontfaceobserver';
(function() {
  if (sessionStorage.foutFontsLoaded) {
    return;
  }

  var fontA = new FontFaceObserver('NeueHaasGrotesk', {
    weight: 400
  });

  var fontB = new FontFaceObserver('NeueHaasGrotesk', {
    weight: 700
  });

  function loadFonts() {
    document.documentElement.className += " fonts-loaded";
    sessionStorage.foutFontsLoaded = true;
  }

  Promise.all([fontA.load(), fontB.load()]).then(loadFonts).catch(loadFonts);
})();
