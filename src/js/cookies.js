(function(key, maxWidth, padding, bg, color) {
  if (localStorage.getItem(key)) return;

  var cookieBar = document.createElement('aside');
  var size = window.innerWidth > 600 ? '15' : '12';
  cookieBar.innerHTML = '<div style="max-width: ' + maxWidth + 'px; margin: 0 auto; position: relative;"><p style="width: calc(100% - 40px); max-width: 1025px; margin: 0; font-size: ' + size + 'px; line-height: 1.375;">By browsing this site, you are agreeing to our use of cookies. <a href="/privacy/" style="color: inherit; text-decoration: underline; margin-right: 10px;">Our Privacy Policy.</a></p><button style="background: none; border: none; box-shadow: none; padding: 0; cursor: pointer; position: absolute; right: 0; top: 0;" aria-label="Close cookie message" type="button"><svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><g stroke="' + color + '" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l14.04 14.04M.5 14.5L14.54.46"/></g></svg></button></div>';
  cookieBar.style.cssText = 'color: ' + color + '; background: ' + bg + '; z-index: 100; padding: 15px ' + padding + 'px; box-sizing: border-box; position: fixed; width: 100%; right: 0; bottom: 0;';
  cookieBar.querySelector('button').addEventListener('click', function() {
    localStorage.setItem(key, 1);
    cookieBar.parentNode.removeChild(cookieBar);
  });
  document.body.appendChild(cookieBar);
})('seen_the_cookie_bar', 1332, 20, 'rgba(0, 0, 0, 0.8)', '#FFF');
