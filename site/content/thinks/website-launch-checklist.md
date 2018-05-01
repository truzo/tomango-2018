---
title: "Website launch checklist"
author: "trys"
date: 2013-10-29 12:22:39
description: The prospect of making a new website live can be daunting but if you’re prepared, there’s nothing to be worried about. Here are our top tips.
thinks/categories: 
 - tips-and-advice
 - web-design
---

The prospect of making a new website live can be a bit of a daunting task, especially if you’re replacing your current site. Keeping downtime to a minimum is of paramount importance and a smooth transition between the old and new website is crucial. However, if you’ve done your homework and prepared for the go-live process with a website launch checklist, there’s nothing to be worried about. Here are our top tips:

## Cross-browser testing

Although this will be completed at the latter stages of the development process, cross browser testing needs to be retested prior to going live. The last thing you want is to launch a site and get an influx of comments saying your website is looking funky on a certain browser.

We test a website in all popular browsers on Windows, Mac and a variety of mobile phones and tablets including, iPhones, iPads, Android devices and Windows mobiles. As the website has been tested during development there is usually very little that has changed but we find it’s far better to be safe than sorry. Ask your web developer if they’ve check your website in all browsers before going live.

## Check your TTLs

TTLs are a timestamp within a domain name that dictate how long a DNS record is stored by an ISP. The shorter the TTL, the more frequently the DNS records are forgotten by an ISP. When the domain is queried after the TTL has expired, the ISP picks up the latest version of the DNS meaning you’ll always get the most up-to-date record.

When getting ready to go-live with a website you’ll want to set the TTL on the root (*) and www record to be 300. This means when you update the domain and make the website live, it will take a maximum of 5 minutes (300 seconds) to refresh world-wide. It also gives you a backup should there be a problem on the new server and you can always move the domain back to the old server with only 5 minutes of downtime.

TTL’s must be set at least 24 hours in advance of going live and are generally stored for one week before being reset back to 86400 (24 hours). This is vital if your new website is being hosted on a different server to your current site so make sure your web developer has prepared your domain for the big day.

## Amove textum latinum (Remove all Latin text)

It sounds silly but it’s very easy to make a website live and forget about a small amount of test content lurking on a page deep within the site. If you’re using a CMS it’s easy to run a quick search on a few common Latin words to see if anything appears. If you’re website is static, search the files using Windows explorer or Finder to see if any test content appears.

Equally, it's worth checking that no test images slip through to the live website. Within a CMS, you can usually check all website images on one page making it very simple to catch any pesky test images.

## Google Analytics

When your website goes live, you’re going to want to know who visits it. Google Analytics accounts are free and easy to use and give you really detailed analytics of your website and how it’s performing.

## Redirection

If you’re replacing a website, you’ll want to make sure every ounce of traffic from search engines is taken to the correct page on the new website. Set up page redirects from the page on the old site to the corresponding page on the new website to keep your visitors happy. This can be achieved in the .htaccess file like so:

```apacheconf
Redirect 301 /oldpage.html http://example.com/newpage.html
```

If redirects aren’t made, page links currently indexed on Google could quite easily end up pointing to an error page losing you vital traffic. It’s also worth checking that an appropriate 404 page has been created to help users that find a page that hasn’t been redirected. Check with your web designer that they’ve set up redirection of old pages before going live.

## Backup

Before flicking the switch to the new website, make sure you have a working copy of the old site and database saved. Not only could it save your bacon if the go-live process doesn’t go smoothly, it could store some vital information that you may need months after the new website is live.

## Other useful checkpoints


- *Favicon:* A website without a favicon looks unfinished – make sure there’s one ready to go when the site is made live.
- *Code Validation:* Like cross-browser testing this should be completed when the development of the site is completed but it’s worth double-checking before the website is live – it could save you some downtime and embarrassment.
- *Sitemap:* Not necessarily a sitemap to help users get around your website, but an XML sitemap to help search engines crawl through your website.



## Don’t jump the gun

When you refresh the domain and see your sparkly new website go-live, the understandable reaction is to tell the world about it! Feel free to do that – but don’t shout about it too early, there are a couple of other checks you’ll want to make first:

- Check both the *www* and *non www* version of the domain. For example, we would check that Tomango.co.uk and www.tomango.co.uk both went to the live site.
- Use a global propagation tool such as [whatsmydns.net](http://whatsmydns.net/) to check your website is resolving to the right IP all around the world. Wait for the site to propagate around the world; if it’s fluctuating a lot, your users could see a mix of both the new and old site in one bizarre amalgamation!
- Check that all links and images work on the new domain, if you’ve been using a staging domain you’ll want to make sure that the links and images point to the new domain.
- Does your site have ecommerce or online payments? Make a test order on the new domain and check that you get redirected back to the live domain without any hiccups.
- Get a friend on a different network to check the website over. It’s reasonably unlikely but if an ISP has aggressively cached the website, you may find that the old site hangs around a bit. Checking on several networks will confirm this for you.



## All set?

If you’re happy that your website is in ship-shape condition and working as you’d expect it to, tell the world!

## Final thoughts

These are just some of the most important points on our website launch checklist. Ask your web developer whether they’ve got a go-live checklist and whether your website is meeting all the criteria prior to going live.


