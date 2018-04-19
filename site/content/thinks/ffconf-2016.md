---
title: "#ffconf 2016"
author: "trys"
date: 2016-11-14 11:35:39
description: A write-up of the excellent #ffconf 2016.
banner: images/blog/TRM_0156.jpg
bannerLarge: images/blog/TRM_0156.jpg
thinks/categories: 
 - web-design
---

[#ffconf](https://2016.ffconf.org/) is an annual JavaScript and frontend development conference held in Brighton. In its eighth incarnation, this year’s event was set out as a one day conference run twice. I headed down on the first day ready to be inspired and challenged.

![](images/blog/TRM_0130-1024x684.jpg)

The venue was The Duke of York’s in Brighton (Britain’s oldest working cinema) and the whole event was organised brilliantly. The seating was supremely comfortable, free tea, coffee, pastries and ice creams were provided and the diverse range of talks made for a really great conference.

---

## Session 1 - Next Level CSS

![](images/blog/TRM_0146-1024x684.jpg)

[Rachel Andrew](https://twitter.com/rachelandrew) kicked things off with a great run-through of what we can expect from CSS in the future, and specifically the changes coming with CSS Modules. There were so many great takeaways from this talk, including the following highlights:

1. The [FR fraction unit](https://css-tricks.com/almanac/properties/g/grid-rows-columns/#article-header-id-1) looks pretty neat when combined with CSS Grid.
1. As does the [minmax() function](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) - this can be used to great effect when working with CMS-driven content areas. Traditionally one would have to specify fixed values for complex height-matching layouts, then use JavaScript to update when the screen size changes. This function will move all of that into native CSS.
1. `grid-auto-fill: dense;` provides size-aware masonry layouts in native CSS.
1. There are some accessibility pitfalls when it comes to using Grid and we must take these seriously.
1. By mid-2017, Grid will be available in 60-70% of browsers overnight. We can start using it today with [@supports feature queries](https://developer.mozilla.org/en/docs/Web/CSS/@supports).
1. `display: contents;` moves child elements up to their parent’s level. This could be very useful for creating heavily optimised layouts on different viewports. We’ll be able to put wrappers around some elements, then hide the box-model around them, effectively removing the wrapper from the layout and lifting all child elements up a level.
1. CSS shapes can use the alpha-channel to mask out an area for content to flow around - perfect for CMS-driven content.
1. `initial-letter` and `writing-mode` look great for creating print-like layouts, not previously possible on the web.
1. `position: sticky;` will replace JavaScript sticky headers.


I’m really excited to see what we can create with CSS Grid in the next few years - it's got the potential to radically change the way we design our broadly rectangular web. The slides from this talk are available [here](http://www.slideshare.net/rachelandrew/nextlevel-css).

---


## Session 2 - Progressive Web

![](images/blog/TRM_0150-1024x684.jpg)

[Ada Rose Edwards](https://twitter.com/Lady_Ada_King) then gave a tremendously inspirational talk on one of the key new parts of the web; ‘Progressive Web Apps’.

With all the buzz surrounding shiny new JavaScript frameworks, it’s easy to forget the heart of the web and what makes it great. With progressive web apps, we can use the best parts of the web to bring our sites back on level-pegging with native apps.

Here are some of the highlights:

1. Browsers are often referred to as *user-agents* for good reason. They belong to the user and can be customised to a user's individual preference. We shouldn’t overwrite that. Setting ‘user-scalable=no’ is a perfect example of what not to do.
1. Part of progressive enhancement is accepting that some features won’t work for every user. As long as the core content always arrives, context doesn’t have be fully present. *You don’t have to serve the same site for everyone*.
1. We should build for the past and progressively enhance for the future. The [Space Jam](http://www.warnerbros.com/archive/spacejam/movie/jam.htm) website still works today.
1. When you take over rendering, you risk breaking accessibility.
1. If we silo our content for specific devices and parts of the planet, we break the web.
1. Developers make the web slow. Browsers stream content by default. about://blank is the fastest page on the web.
1. The mobile web got a bad reputation. PWA’s can fix that. Native apps give away all permissions from the get go; we can gain trust by being progressive with this.
1. When we build a PWA, *the network becomes an enhancement*.
1. Consider adding browser features back in for standalone apps. URLs, back buttons and history disappear when launched from the home screen.
1. *Think webby, feel native.*



---


## Session 3 - Technologic

![](images/blog/TRM_0160-1024x684.jpg)

Using Daft Punk’s ‘Technologic’ as a framework, [Léonie Watson](https://twitter.com/LeonieWatson) broke down web accessibility into applicable chunks that we can implement right-away. She also delved into the Accessibility tree; a subset of the DOM, explaining how our websites are interpreted by the browser and assistive technology.

Here are the highlights:

1. A11y (Accessibility) is both highly logical and regularly illogical.
1. In the A11y tree, all elements house a role, name and state, all of which determine how screen readers interpret them.
1. When using neutral semantic elements (div and span) for visual effect, test that the content still makes sense without them.
1. When adding role attributes, you must recreate all the browser functions for that disguised element.
1. Aria-current can be used on breadcrumbs and navigation to suggest the selected page/section.
1. Aria-controls (not implemented everywhere yet) adds a shortcut link between elements.
1. The [Tenon API](https://tenon.io/) is a great way to test your website against A11y recommendations.
1. The easiest test is to unplug your keyboard and see how your website fares.
1. *It doesn’t have to be perfect, just a little better than yesterday.*


The slides from Léonie’s talk are available [here](http://ljwatson.github.io/decks/2016/ffconf/index.html#cover).

---


## Session 4 - All things continuous

![](images/blog/TRM_0163-1024x684.jpg)

[Andrew Martin](https://twitter.com/sublimino) then gave us a breakdown of the options available for our devops workflows. Although some of the items seemed more suited to larger organisations, teams and projects, there was some great advice for the sorts of projects we build at Tomango.

1. Release and test often. Amazon ships a change to their servers every 11.6 seconds.
1. Try and remove human interaction from your process. Humans make mistakes.
1. Establish a continuous integration -&gt; testing -&gt; delivery -&gt; deployment process and review it regularly.
1. The pull request process can be a poor choice for a close team, consider pair/mob programming as an alternative.
1. Unit test all the things!
1. Using a product like [Docker](https://www.docker.com/) brings production pain forward. Once nailed at the start of the project, you can be happy that your code will work on a live server.
1. *Heisenbugs*. Don’t fix with a commit until you fully understand the real problem.


The slides from Andrew’s talk are available [here](https://www.binarysludge.com/2016/11/11/talk-all-things-continuous-at-ffconf/).

---


## Session 5 - Power of Emoji

![](images/blog/TRM_0170-1024x684.jpg)

After a tasty lunch of ‘Hipster chicken’, we took a deep-dive into the history of Emoji with [Mariko Kosaka](https://twitter.com/kosamari). It was a truly fascinating talk with great anecdotes on the history of the mobile pictograms we take for granted. Mariko’s passion for communication through Emoji was incredible and hearing about the small forward-thinking team that devised the original set was very inspiring.

1. Although many believe the emoji was created in 1999 by DoCoMo, the ‘J-Phone’ actually shipped an emoticon set as early as 1997.
1. Pager sales in Japan *directly correlated* with the option for a ‘heart’ emoticon!
1. Shigetaka Kurita took inspiration from weather forecast iconography when creating Emoji. He also loved snowboarding so he created two car icons: one for driving in the city and one for going up into the hills!
1. As images and text are sent using two separate sockets, the use of a font was the perfect solution for speedy emoji.
1. Pictograms were first used in the 1964 Japanese Olympic Games to help foreign visitors navigate the Olympic village.
1. Google suggested using Unicode to standardise the sprawling number of emoji implementations.
1. The lesser-known `<ruby>` and `<rt>` elements can be used to add text to emoji.



---


## Session 6 - Dev Tools

![](images/blog/TRM_0173-1024x684.jpg)

There is so much to DevTools.

Even when you think you’ve got a grip on the headline features, there are so many under-the-hood options that can seriously optimise your web development workflow. [Umar Hansa](https://twitter.com/umaar) ran through over 100 slides of incredible tips in this talk - there were so many mind blowing moments, it's been difficult to pick out the best:

1. Using the .cls button on the CSS panel adds a new class. Simple enough you may think. However, it also scans your code and autocompletes in real time - pretty neat.
1. The animation panel lets you record, edit, change speed and *generally nail your animations* in a GUI editor. The cubic bezier and shadow editors provide a similarly awesome experience.
1. The FPS meter is a great non-codey way to see how janky your site is.
1. Line-level recording helps you see exactly which lines of JavaScript are taking up time. CSS code coverage works in the same way, but outlines which lines of your stylesheet are actually used on a page!
1. Console.time and performance.mark will help you debug slow code and time asynchronous requests.
1. Cmd-shift-P works like your IDE, it gives access to DevTools settings without taking your hands off the keyboard.
1. Request blocking is the perfect way to see how your site works without assets.
1. Canary is implementing a native OS level terminal within the browser!
1. It can also run native Node.JS debugging and editing (without server restarts!) within DevTools.
1. Live Sass does real-time transpilation in the browser. We’re getting to a point where an IDE and build tool may not be necessary to build a website!



---


## Session 7 - Modularity

![](images/blog/TRM_0177-1024x684.jpg)

[Ashley Williams](http://twitter.com/ag_dubs) then led a philosophical talk on modularity, challenging our preconceptions and assumptions around a subject that’s regularly accepted as the perfect solution. With incredible space-turtle references and deep quotes from some of history’s greatest minds, this was a talk not to miss - check out the brilliant slides [here](https://ashleygwilliams.github.io/ffconf-2016/#1).

1. Why do we modularise code? For testing, reuse and separation of concerns. How do we decide where to split code? Nobody seems to know.
1. __The programmer is in the unique position... They have to be able to think in terms of conceptual hierarchies that are much deeper than a single mind ever needed to face before... the automatic computer confronts us with a radically new intellectual challenge that has no precedent in our history.__ - Edsgar Dijkstra.
1. Reuse simple code. *There is no ‘true’ programmer.* Did we forget how to program when we stopped writing in C -&gt; Assembly -&gt; Binary -&gt; Electricity?
1. Your application should just be application code.
1. __The more I modularize my code, the bigger it gets. __&#x1f615; - Nolan Lawson.
1. Not everything we assume about modularity is correct. Modularity in production is actually slower. __One horse-sized JavaScript duck is faster than a hundred duck-sized JavaScript horses__ - Nolan Lawson.
1. Modularity should be used to break down hard things and make the code more ‘disposable’.
1. __A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a simple system.__ - John Gall.



---


## Session 8 - Art.JS

![](images/blog/TRM_0179-1024x684.jpg)

The final session of the day was simply incredible.

[Mathieu Henri](https://twitter.com/p01) started by explaining how he approaches creative coding before live-coding a breathtaking interpretation of Conway’s ‘Game of Life’ complete with visual brilliance and a dynamic, algorithmic soundtrack. *If a video of this talk becomes available, watch it.*

1. It helps to have the following for creative coding: a creative mindset, an appreciation of standards (and a knowledge of how to abuse them), and a visual understanding of maths. You don’t have to be a mathematical genius.
1. Using a restrained approach of one primitive and one formula will actually help your project.
1. Libraries and frameworks are not required. Understanding standards and browser idiosyncrasies is far more useful.
1. Fractions can provide ‘better numbers’ than decimals. Your maths doesn’t have to be perfect, use ‘close-enough’ values for speed.
1. Don’t use ‘HSL’ rotations, browsers are slow to render them. Instead, write a short RGB function that does the same thing.
1. Use the Audio API engine as your render loop. Not only will it help you add audio later, it’ll ensure your audio and video are synced.



## Thanks!

A huge thanks to Remy, Julie and the #ffconf team for organising such a brilliant conference. It was inspiring and challenging throughout.

![](images/blog/TRM_0145-1024x684.jpg)


