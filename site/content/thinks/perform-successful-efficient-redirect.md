---
title: "How to perform a successful and efficient redirect"
author: "elliot"
date: 2014-04-17 14:09:45
description: Whether you've simply renamed a page or moved your entire website, it's impossible to deny the importance of a redirect.
thinks/categories: 
 - tips-and-advice
 - web-design
---

Whether you've simply renamed a page or moved your entire website, it's impossible to deny the importance of a redirect. By setting up a redirect you provide a massive benefit for your users as they will be taken to the new address instantaneously without having to lift a finger. On top of that is the transfer of search engine rankings, which is paramount if you intend to keep a strong presence in search results.

## What not to do

Before getting into how to redirect and transfer page rankings, it's worth pointing out the less efficient way of indicating that a page or site is now at a new address. What I'm referring to is updating the content of the old page with a link to where the new page can be found, for example: “Click here to go to my new website”.

While there will be users who click through to the new address, adding a link involves another decision on the user’s behalf and is essentially wasting their time. If the user were to be automatically taken to the new address then there wouldn't even need to be that decision. Not only this, but a search engine will not detect this as a link to the new page, therefore the page ranking won't be transferred.

## Single page

So moving on to how to avoid these outcomes! The most organised way to set up redirects is within the htaccess file which can usually be found in the root directory of your site. This file is checked every time the server receives a request and therefore is a very useful and important document. If you were looking to redirect just a single page, the following line would need to be added to the htaccess file.

```apacheconf
Redirect 301 /oldpage.html http://example.com/newpage.html
```

This simply means any request for ‘oldpage.html’ will redirected to ‘newpage.html’. The ‘301’ part is the code for ‘moved permanently’ which is how search engines will know to transfer the page ranking from the old page to the new. It's important to note that you won’t see the ranking transfer immediately as the search engine crawlers will need some time to check the site again, however the redirect itself will take effect immediately.

## Whole site

The solution above is absolutely perfect when dealing with a single page scenario, however if you plan to redirect an entire site you’ll need something more comprehensive. While it may seem like a good idea at the time, the last thing you want to do is set up a ‘Redirect 301’ (as above) for every single page on your site. Not only is it time consuming and prone to cause errors, it's also inefficient as it makes the htaccess file larger. Redirecting all visits to a whole domain is very straightforward.

```apacheconf
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule ^(.*)$ http://newsite.com/$1 [R=301,L]
</IfModule>
```

Adding the above to the old site’s htaccess file will take any request and redirect it to the same place on the new site. This is a perfect solution if you have changed your domain but kept the page structure in place.

## To conclude

Without redirects you run the risk of missing out on traffic and leaving users without the content they came to your site for. The methods I've talked about in this post are not the only options you have, but they are certainly a good start.


