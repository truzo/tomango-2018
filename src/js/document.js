var documents = document.querySelectorAll('[href*=".docx"]');
if (documents.length > 0) {
  [].forEach.call(documents, function(el) {
    el.addEventListener('click', function(event) {
      ga('send', 'event', 'download', 'click', event.target.href);
    });
  });
}
