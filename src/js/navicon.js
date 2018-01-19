document.querySelector('.navicon').addEventListener('click', function(event) {
  document.body.classList.toggle('nav-open');
  event.preventDefault();
});
