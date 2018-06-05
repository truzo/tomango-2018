(function(key, maxWidth) {
  if (localStorage.getItem(key)) return;

  var cookieBar = document.createElement('aside');
  cookieBar.innerHTML = '<div style="max-width: ' + maxWidth + 'px; margin: 0 auto;">We use cookies. Read <a href="/privacy/" style="color: inherit; text-decoration: underline; margin-right: 10px;">our policy</a> <button style="background: none; border: none; box-shadow: none; font: inherit; color: inherit; padding: 0; cursor: pointer;" type="button">Close</button></div>';
  cookieBar.style.cssText = 'color: #FFF; background: #000; font-size: 15px; z-index: 100; padding: 5px 20px; box-sizing: border-box; position: fixed; width: 100%; right: 0; bottom: 0;';
  cookieBar.querySelector('button').addEventListener('click', function() {
    localStorage.setItem(key, 1);
    cookieBar.parentNode.removeChild(cookieBar);
  });
  document.body.appendChild(cookieBar);
})('seen_the_cookie_bar', 1332);
