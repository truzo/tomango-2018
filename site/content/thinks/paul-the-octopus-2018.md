---
title: Building Paul the Octopus 2018
date: 2018-06-02T12:00:00.000Z
description: How we built this year's World Cup prediction game with Nuxt & Netlify
image: images/blog/paul-the-octopus.jpg
banner: images/blog/paul-the-octopus-banner.jpg
thinks/categories:
  - web-design
author: trys
---

2018 marks the third incarnation of [Paul the Octopus](https://paultheoctop.us), our World Cup predictions game created in homage to the [mystic mollusc](https://en.wikipedia.org/wiki/Paul_the_Octopus).

It's a fun little tournament that we run every other year, as both an internal and a wider-reaching contest.

The rules are pretty simple: predict the score for each game. A correct score nets you 3 points, a correct result gets 1 point. There are also a few challenges along the way to earn some bonus points.

{{< button "https://paultheoctop.us" >}}Visit the site{{</ button >}}

Right, now the business is taken care of, let's get technical.

## Nuxt

The frontend of this site is built in [Nuxt](https://nuxtjs.org/), a server-side rendering framework for Vue. It's one of the most impressive frameworks I've worked in. All the great parts of Vue: mutable data, scoped components and state management, with all the benefits of server-side rendering: SEO, non-JS support and quick page loads.

Nuxt handles all the routing and data fetching in a really neat fashion. It also plays really nicely with Vuex, so globally shared data is a breeze to work with.

An example of this is the data source for teams. Most, but not all routes need access to that information. So instead of fetching teams from the API at the page-level, we request them from the store:

```js
async asyncData({ store }) {
  const teams = await store.dispatch('getTeams')
  return {
    teams
  }
},
```

And in the store action, we check the state for teams before the request, preventing unnecessary future requests on other pages:

```js
async getTeams ({ state, commit }) {
  if (state.teams.length) return state.teams
  const { data } = await axios.get('/teams')
  commit('addTeams', data)
  return data
}
```

## API

The data is served from a Node.js/Postgres [API](https://api.paultheoctop.us/fixtures/) with public read routes. The only downside of this project is that I have to update the score information at the end of each game. It's been difficult to rely on other public API's at previous tournaments.

## Build-time API

Usually, Nuxt sites are hosted on a Node server. But given my recent fascination with static site generators, I decided to build this project using Nuxt's generate command. This works by pre-rendering all the pages and saving them as `.html` files at build time. Not only does this reduce the hosting costs, but it seriously helps the site performance.

However, the biggest challenge was getting Nuxt to play ball (pardon the pun) with data fetching on the static site. For a standard `nuxt generate` build, the data is captured at build time, but only for initial page loads. If you load another page, then visit the first page, it re-requests the data from the live API. This wasn't static enough for my liking.

Taking Charlie Hield's [Nuxt static](https://github.com/stursby/nuxt-static) project as a starting point, I was able to cache the data properly at build time. It works as follows:

### Local development
You request data the live API as 'normal'.

### At build time
When you run the generate command and `axios` fetches the data, it saves the response in `/dist/data/{{ api_path }}.json` before returning it to the page. So a call to the `/teams` endpoint turns into a JSON file saved in `/dist/data/teams.json`.

### On the live site
When the page/store asks for `/fixtures`, an axios interceptor rewrites that to `/dist/data/fixtures.json`.

The up-side is another performance win. The pages no longer rely on a database. The only downside is a minute delay on data updates while the build script fetches the new data, but it's a small price to pay.

## Payloads

Requesting data for every dynamic route can be a bit slow, especially when there's a good number of them. For the individual fixtures, I opted to create a build-time endpoint that would grab all the fixtures in one go, cutting down the HTTP requests from 60+ to one. The payload data is then available in the [context](https://nuxtjs.org/api/context/) for each page component.

In `nuxt.config.js`, the `generate.routes` method gathers all the data and passes it to each page.

```js
generate: {
  async routes () {
    ...
    const { data } = axios.get('https://api.paultheoctop.us/build')
    data.forEach(fixture => routes.push({
      route: `/fixtures/${fixture.id}`,
      payload: fixture
    }))
    ...
  }
}
```

```js
async asyncData({ params, store, payload }, callback) {
  const fixture = payload || await store.dispatch('getFixture')
  return { fixture }
})
```

## Netlify Identity

Finally, authentication. No one likes building auth systems. I've gone into detail on a previous [blog post](https://www.trysmudford.com/blog/experiments-with-netlify-identity/) so I won't dwell on it all that long.

A particularly handy, but not overly documented feature was the webhook notifications. At every user validation & signup event, Netlify `POST` a webhook to my API where I can either respond with a 400 response code and message, or a 200 success code. This gives me the chance to link the Netlify user ID with the user in my database or reject the user signup.

Netlify Identity makes authentication; dare I say it, fun to work with! It slots into Vuex really well and is perfect for a static/hybrid site like this.

## Conclusion

This was a big side project to take on, but it was well worth it. Pushing Nuxt generate to the limits and using Netlify Identity in the wild was a real treat.

And if you're into football:

{{< button "https://paultheoctop.us" >}}Visit paultheoctop.us{{</ button >}}
