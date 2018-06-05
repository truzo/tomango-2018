---
title: Building Paul the Octopus
date: 2016-06-08T16:06:25.000Z
description: >-
  I’ll be covering how I went about building a micro social-network/game, what
  worked well and what pitfalls I fell into.
image: ''
thinks/categories:
  - web-design
author: trys
---
As you will no doubt have seen, Euro 2016 is almost upon us and football fever is beginning to take over conversations - certainly in our office anyway! If you’re a keen reader of this blog, you may have also seen that we launched [Paul the Octopus](https://paultheoctop.us), our predictions game built for this very event.

Tom has already announced the launch and explained the key features, so if you’re looking for rules, tips or information about the mystic mollusc, check out [his article](/thinks/paul-the-octopus-euro-2016/).

I’ll be covering how I went about building a micro social-network/game, what worked well and what pitfalls I fell into.

## Architecture

For most of our websites, PHP is our go-to language - specifically the WordPress flavour. We love how easy it is to use for clients and how scalable it is for us. But from previous experience, that didn’t feel like the correct fit.

The biggest issue with WordPress is the set database structure and the wp_postmeta table is the biggest culprit. For example, a prediction entity is made up of five elements:

* Prediction ID
* Fixture ID
* User ID
* Score for team 1
* Score for team 2

Sadly, with the wp_postmeta structure, this would have to be at least five separate rows and querying the data back would be a real pain. You really want to have a table with the five elements above as columns and then a single row for each entity. This way, querying data is far more straightforward and clean. This meant WordPress was out of the question.

For the World Cup in 2014, I built the first incarnation of Paul the Octopus on a simple PHP/MySQL MVC framework and it worked out pretty well. It was quick and reliable throughout the championship but it was a bit of a pain to scale. As we added features on the run-up to the tournament, it felt quite brittle and I ended up with more duplicate code than I was comfortable with.

![](/images/blog/paul-v1-1024x711.png)

This time around, I decided to approach the system differently. By developing a separate Node/MongoDB API, I could build in all the data validation logic on the server and not be concerned about how the frontend handled it.

Infact, for the majority of the development, there was no frontend to the site, I used [Postman](https://www.getpostman.com) to send data to and from the hypothetical system, testing and iterating on the results it returned.

When the API was complete, I was then able to start on a really lightweight PHP skeleton framework with a small CURL module that could be used to GET, POST and PUT data to the API. This scaled up very quickly as I was very much at home with PHP.

By having a separate backend and frontend, I was able to get data from various sections of the site without having to resort to duplicate database interactions, I could make a couple of single-line calls to the API and it would deliver me all the data required. I was also able to be more liberal in my frontend validation, safe in the knowledge that the API would pick up any issues.

Although I really enjoyed building with an API backend, it did take a little while to get used to the asynchronous nature of Node. I’ve dabbled with it in the past but this was the first full system I had built with it. To begin with there was quite a lot of Promise nesting but after finding the useful [async](https://github.com/caolan/async), I was able to harness the speed of parallel Node processing to its full effect.

My initial plan was to build the entire system in Node with a React-powered frontend. Sadly, time constraints meant building an isomorphic application wasn’t possible and I wasn’t happy building a JS-only web app. Something for the 2018 World Cup perhaps...

## Deployment and expansion

I approached the deployment of the live site with much trepidation, not only was the site running on Node/MongoDB; two languages I’ve never hosted with, I wanted the site to run with an SSL certificate which tends to bring its own set of issues. Thankfully, I needn’t have been so concerned. After spinning up a Webfaction server and following their installation guides, I was up and running in under one hour. Installing the SSL certificate was just as simple, 4 minutes after requesting activation - it was secured!

From our internal testing, it was decided that we should add the option for user leagues - the first test of the scalability of the app. Expanding the API with a userLeagues table was straightforward enough - MongoDB is very relaxed when it comes to database schema changes. Once tested, I build four views: Listing, League table, Creation and a thank you page. Within an evening it was ready to be tested internally - not bad going!

\--

I’ve really enjoyed building [Paul the Octopus](https://www.paultheoctop.us/), it’s been a real challenge learning a new language, a new database, a new hosting setup, and a new way of accessing data through a headless API.

There’s still time to join in if you haven’t already, it’s going to be a lot of fun watching the Euro’s with the added competitive edge of a predictions challenge. So what are you waiting for? [Sign up now!](https://www.paultheoctop.us/)
