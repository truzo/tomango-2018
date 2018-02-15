(function() {
  function hasHtml5Validation() {
    return typeof document.createElement('input').checkValidity === 'function';
  }

  if (hasHtml5Validation()) {
    const form = document.querySelector('form[netlify]');
    if (!form) return;
    form.addEventListener('submit', function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        this.classList.add('invalid');
      } else {
        this.classList.remove('invalid');
      }
    });

    [].forEach.call(document.querySelectorAll('[required]'), el => {
      el.addEventListener('blur', function() {
        this.parentNode.classList.add('selected');
      });
    });
  }
})();
