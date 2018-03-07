(function () {
  [].forEach.call(document.querySelectorAll('.content img[title]'), el => {
    const caption = document.createElement('span')
    caption.innerText = el.getAttribute('title')
    caption.classList.add('caption')
    el.parentNode.insertBefore(caption, el.nextSibling)
  })
})()
