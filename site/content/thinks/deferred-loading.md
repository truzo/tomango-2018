---
title: "How to speed up your website - Deferred loading"
author: "trys"
date: 2014-01-16 13:39:25
description: No one likes a slow website. Here's how you can speed up your site by deferring the loading of scripts.
thinks/categories: 
 - tips-and-advice
 - web-design
---

I think it’s fair to say that everyone hates a slow website. As internet speeds have increased over time, so has the amount of dynamic content being loaded into the browser and sadly that takes time to download. Furthermore, mobile usage is constantly increasing and catering for the slow speeds of mobile internet should be high on our agendas as developers.

A slow website can even harm your search position; in 2010 Google started using page load time as a factor in their rankings. Anything above 3 seconds and you could see an affect in search position.

What can be done about this you ask? As with most internet optimisations, there are a plethora of ways to speed up your website and there’s always room for improvement. To paraphrase a certain Mr da Vinci “The quest for a faster website is never finished, only abandoned!” So, let’s get stuck in:

One very simple improvement you can make is to load all the JavaScript at the bottom of the document just before the `</body>` tag. For a static website, just drag your script elements down the page. Within WordPress, this can be done using the [wp_enqueue_script](http://codex.wordpress.org/Function_Reference/wp_enqueue_script) function and setting the *$in_footer* value. For example:

```php
<?php
wp_deregister_script( 'jquery' );
wp_register_script( 'jquery', 'js/jquery.min.js', false, null, true);
wp_enqueue_script( 'jquery' );
?>
```

Another great improvement you can make is to defer the loading of certain JavaScript files. Considering the nature of JavaScript is to provide dynamics and interaction for the user once the page has loaded, you can often defer the loading of many JavaScript files and jQuery plugins and grab a performance benefit from it. Your chief aim when optimising a site is to get content loaded on your users screen as quickly as possible. If there isn’t a nice animation on the click event of a button right from the very instant the page loads, is that such a problem? Not really.

Deferring JavaScript is very simple, just place the following code snippet at the bottom of your page, update 'deferred.js' to the JavaScript file you wish to load in and you’re ready to go.

```javascript
function deferLoad() {
  var element = document.createElement("script");
  element.src = "deferred.js";
  document.body.appendChild(element);
}
window.onload = deferLoad;
```

This will wait for the window to load and then create a script element linking to your JavaScript file. By running this code and calling in your scripts at the bottom of the document, you're reducing load time for the user and search engines.


