---
title: "Building a Progressive Web App"
author: "trys"
date: 2018-04-13 09:00:49
description: How do you provide retail staff around the world with high-quality training for a product that’s growing exponentially?
banner: images/blog/mockup.jpg
image: images/blog/mockup.jpg
bannerLarge: images/blog/mockup.jpg
thinks/categories: 
 - tips-and-advice
 - web-design
---


## How do you provide retail staff around the world with high-quality training for a product that’s growing exponentially?


---

We’ve been working with [Agon Systems](http://www.agon-systems.com/) for a number of years; creating their brand identity, designing and building their website, leading their digital marketing strategy, creating exhibition stands, stationery and presentation boxes, and most recently, building a single-page website for one of their biggest distribution products: [Concept Tag](http://www.concepttag.com/).

![](images/blog/concept-tag.jpg "Concept Tags and a releaser unit")

The Concept Tag is a new type of retail security tag that is revolutionising the industry. Its unique locking mechanism makes it almost impenetrable, and recent extensive trials resulted in losses being reduced by up to 66%.

These impressive statistics have led to a huge uptake in the product from retailers around the globe. To aid their ever-increasing customer base, Agon Systems reached out to us to help them provide a training system that could be used as a tool for retail staff.

## Choosing the right solution

We begin every project with an open mind on how to best deliver a product that serves the client's needs. Only by listening to their requirements and considering all available options can we offer the best solution.

For this project, there were three target users: retail staff, retail installers and retail managers. Staff tend to have a mobile phone with them at all times so on-demand training could be achieved through an app or mobile website. Installers travel to stores around the country, fitting the releaser units to till-spaces. Mobile phone and laptop access would be their main way to watch the training. Managers organise group training sessions for the staff, carrying around a tablet or laptop and delivering the training using a projector.

## Native App

During our initial discussions, the word ‘App’ was floated around as a possible solution. Given the high percentage of smartphone owners in the retail staff demographic, it seemed like a logical option. But upon investigation into the pros and cons, the results were less convincing:

### Pros of a native app


1. Access to information without an internet connection
1. Native gesture controls like ‘swiping’ and access to device hardware if required
1. A branded experience on a user's phone



### Cons of a native app


1. Time-consuming and therefore expensive to develop
1. iPhone, iPad, Android versions need to be created, along with a web version for Windows, Blackberry, other operating systems, tablets, desktops and ‘standard’ mobile phones
1. Slow to update if changes are required
1. App store financial charges
1. Large initial download size for not a lot of information
1. In the UK alone, half of smartphone users install zero apps per month
1. Often synonymous with shady device permissions



## Progressive Web App

We therefore proposed an alternative solution, a ‘*Progressive Web App*’ (PWA). This is a new web platform feature gaining rapid support and acclaim that’s revolutionising the mobile-web landscape (sounds remarkably similar to the effect Concept Tag is having on the retail-security sector!).

A PWA is a website that uses cutting edge (but pretty well supported) technology to allow the site to be available offline. It can also be ‘installed’ on the user's device without going through an app store, giving a blazingly fast and beautifully branded experience with very few downsides.

The pros and cons list looks remarkably different for a PWA:

### Pros of a PWA


1. Access to information without an internet connection
1. Gesture controls like ‘swiping’ and some access to device hardware if required
1. A branded experience on a user's phone
1. Quicker and therefore cheaper to develop
1. One version of the ‘app’ for all devices and computers
1. Immediate updates
1. No app store charges
1. Tiny amounts of data usage
1. No mandatory installation
1. No device permissions required
1. Shareable via URLs



### Cons of a PWA


1. No offline/installation support on IOS (yet!)



## Designing a PWA

As a PWA is in essence a website that can be installed and used offline, we were able to approach the project in the same way we would a ‘normal’ responsive website. But we were also able to use some ‘app-like’ design standards to help those viewing the site on a smaller device feel right at home.

![](images/blog/app-1-home-1024x755.jpg "The opening screen")

![](images/blog/app-2-videos-1024x755.jpg "Browse the training videos")

![](images/blog/app-5-help-1024x755.jpg "Modal window for immediate contact information")

As most of the training content would be provided in a video format, we designed a custom media player to keep the PWA consistently on-brand.

![](images/blog/app-3-video-1024x755.jpg "Bespoke media player")

![](images/blog/app-4-media-1024x755.jpg "Full screen media player")

On larger screens, we were able to shift to a more traditional ‘desktop’ experience with ease. The beauty of a PWA is that this is a single website using responsive design techniques to optimise each device. We don’t have to release separate iPhone, iPad and Android versions.

![](images/blog/MacBook-Pro-mockup-1024x614.jpg "The PWA on a laptop")

## Developing a PWA

Using a Javascript framework to build a website is not uncommon these days. I [ranted about them](/thinks/right-use-framework-name/) on this blog last year. In that piece, I wrote the following:

> The biggest issue however, is the sole reliance on Javascript to serve content. If a framework requires rendering a page with no content just so it can take control, count me out. Although the days of users without Javascript are pretty much over, there’s still no reason not to serve content in the first response from the server. If connection speeds are struggling, I’d rather not wait for 1MB of Javascript to download and parse before requesting the actual page content, thank you very much.

I still wholeheartedly stand by that opinion and was therefore not happy to build this PWA using a client-side only framework.

The solution I went with was a pre-rendered site using VueJS. Vue is a tremendous framework that is akin to a child of React and Angular where only the best features have been kept. It’s also pretty lean. Using a Webpack build system, I was able to prerender all static routes to simple minified .html files.

When a page is served, if the browser has Javascript, Vue takes over and handles super-snappy page changes. If Javascript fails or takes too long to download, it doesn’t matter. *All the page content is available without a reliance on Javascript*. Then the PWA magic can start.

The technology required to turn a website into a PWA is called the Service Worker. It’s effectively a proxy that sits between the browser and the network, catching and caching network requests. In our case, it does the following:

1. The browser requests an asset, ie. an image, JS file or page
1. The service worker checks to see if it has already saved that asset in the cache
1. If it's in the cache, it immediately returns it to the browser, ceasing the need for a network request
1. If it doesn’t have it in the cache:

1. It requests the asset from the network
1. It saves a copy of the response in the cache for next time
1. It returns the response to the browser





On the first visit to the site, the Service Worker requests a couple of additional files including the key pages for the site, the CSS and the JS. From that point onwards, *the network is not required to use the PWA*.

## The Apple-shaped elephant in the room

This is the biggest problem facing PWA adoption. Apple are being a bit stubborn in adding Service Worker support to Safari. They’ve shown some ‘positive signals’ but at the time of writing, they haven’t committed to implementing it. I can appreciate why, they make an inordinate amount of money from app sales and selling PWA’s hasn’t really been explored yet.

But given they are the [9th richest company in the world](https://en.wikipedia.org/wiki/List_of_largest_companies_by_revenue), you’d hope they could be a bit more relaxed about it. Apps aren’t going anywhere fast. Games and deep-device integration will always be initially suited to native apps. It’s a great way of pushing hardware to the limit as native apps are one abstraction closer to the device.

Fortunately, Service Workers have been designed with progressive enhancement in mind. *A PWA will still work like any other website in a browser that doesn’t support Service Workers*.

More critically for this specific PWA, a growing proportion of Agon System’s customers are coming from emerging markets where the use of Android smartphones is almost exclusive due to the eye-watering pricing of Apple products. In these markets, mobile internet is also [very expensive](https://whatdoesmysitecost.com/). Reducing the number of network requests saves the user’s money. And [unlike a native app](https://twitter.com/MaxSanna/status/850045916119789570), minor content changes don’t mean a full app update, just a single page request.

## Launching a PWA

Much like any other website, launching this was as straightforward as pointing a domain to our server, adding an SSL certificate with Let’s Encrypt and uploading the static html files. There is a small Node JS server handling the URL routing for static and dynamic pages.

Google Analytics can still be used for a PWA, even when the user is offline. The pageviews are stored and when the network becomes available again, [sw-offline-google-analytics](https://www.npmjs.com/package/sw-offline-google-analytics) will submit the time-altered events to GA.

---

*Sean Welch, Managing Director of Agon Systems*, said: __“We’re delighted to launch this app as part of our investment in the continued development of service we provide along with the Concept Tag itself."__

__"We’re particularly happy with the ability for the entirety of the app to be downloaded onto Android devices,”__ Sean added. __“It’s something we think will be particularly welcome alongside our expansion into emerging markets, where Android is far more common over iPhones and Internet connections might be weaker.”__

{{< button "https://training.concepttag.com/" >}}Visit the PWA{{</ button >}}


