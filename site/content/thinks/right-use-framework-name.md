---
title: "When is it right to use [framework name here]?"
author: "trys"
date: 2016-02-17 14:54:49
description: Resisting the urge to jump on the latest framework bandwagon is hard. How do you decide which one is appropriate and when it should be used?
thinks/categories: 
 - tips-and-advice
 - web-design
---

As with almost every question relating to modern web development, it depends.

Ok, so now my cop-out answer's out of the way, here are my thoughts…

In the past, I've steered clear of Javascript frameworks. Sure, I’ve dabbled in a bit of Angular and dipped my toes in the waters of Backbone but I’ve never used one on a client project. They’ve always been sidelined to unlaunched side-projects.

The reason for this is three-fold; 1. frameworks can be a challenge to learn, 2. frameworks often have a considerable file size attached to them, and 3. frameworks force you to work in their way. For most of our projects, reasons two and three are the tipping points. It’s simply not reasonable to include a large Javascript library just to feed the desire to use a modern framework.

Many frameworks impose on you a way of working and if your project doesn’t fit, you have to either shoehorn your code around it or drop the framework entirely. This isn’t surprising given many popular frameworks are written by large organisations to help their own product. The fact that they are available for us mere mortals is a nice byproduct.

The biggest issue however, is the sole reliance on Javascript to serve content. If a framework requires rendering a page with no content just so it can take control, count me out. Although the days of users without Javascript are pretty much over, there's still no reason not to serve content in the first response from the server. If connection speeds are struggling, I’d rather not wait for 1MB of Javascript to download and parse before requesting the actual page content, thank you very much.

## A different approach

Over the Christmas holiday, I decided to learn [React](https://facebook.github.io/react/). As the hottest framework of 2015, it only seemed fair to give it a shot and I was pleasantly surprised how natural it felt. The component encapsulation made perfect sense, the DOM control meant jQuery could be removed from the stack and I was even able to write ES2015 classes! For a moment, I felt like a proper modern developer.

I returned to work in January fully expecting to leave React in the side-project graveyard with all the other frameworks. To my surprise, an opportunity arose in one of the first projects I worked on. We were creating a new single-page site for Agon Systems to promote the [Concept Tag](http://www.concepttag.com/) and it had an interactive calculator feature that needed to be cutting-edge, interactive and didn’t require a non-Javascript fallback.

When deciding on the correct technology for this feature, I figured I had three options: Vanilla JS, jQuery, and React. Given that jQuery was already being used on the project, Vanilla JS seemed like unnecessary work for very little benefit. Conversely, jQuery seemed like the natural (and safest) shoo-in.

However, this felt like the perfect time to introduce React without being fully dependant on it. The framework was only running one sub-section of the site meaning I would be in full control over it, unlike most of my previous framework encounters.

The pro’s of React were that it would handle all DOM updates, it would keep track of state changes and it would validate user inputs. The largest drawback was if my knowledge of React failed me and I would be left to roll back and re-code the feature in jQuery.

I decided to bite the bullet and run with React and it worked out tremendously well. The frontend was fast and interactive and the code was clean, encapsulated and easy to debug/extend. Had I approached this in jQuery, I fear the DOM juggling would’ve ended with an inferior product.

![](images/blog/concept_calculator.jpg "The finished calculator")

## Deciding for yourself

On this project, it felt absolutely right to use React for the calculator. It didn’t feel right to use it for the whole project without learning a large amount of Universal JS.

For many agency projects and budgets, you have to be realistic about what is both achievable and beneficial for the client. I tend to ask myself a few questions before trying a new technology:

- What happens if this feature fails. Will the site/feature become unusable and worthless?
- What happens if your knowledge of the framework fails? Will you be left with an impossible task of re-coding the whole site/feature.
- Is the file size worth it?

For the most part, I'd suggest erring on the side of caution and stick to Vanilla Javascript and jQuery. However, when the project is right and each question is returning a positive answer, take the opportunity to put a new technology into practice.


