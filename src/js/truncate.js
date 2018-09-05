(function truncate() {
  var truncator = document.querySelector('.truncate');
  if (!truncator) return;
  var parent = truncator.parentNode;
  parent.classList.add('truncator');

  var button = '<button type="button">read more</button></span>';
  var end = parent.innerHTML.indexOf(button);

  parent.innerHTML = parent.innerHTML.slice(0, end + button.length) + '<span class="extra-truncation">' + parent.innerHTML.slice(end + button.length, parent.innerHTML.length) + '</span>';

  function addTruncation(event) {
    parent.classList.remove('truncator');
    parent.querySelector('.truncate').remove();
    parent.removeEventListener('click', addTruncation);
  }

  parent.addEventListener('click', addTruncation);
})();
