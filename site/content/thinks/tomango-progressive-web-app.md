---
title: "Tomango site relaunch: Building our JAMstack site"
author: "trys"
date: 2018-05-03 09:26:00
description: "Our new site runs quickly, anywhere in the world, regardless of internet connectivity."
thinks/categories: 
 - web-design
---

On the 1st May 2018, we launched the latest Tomango website. To represent our change in business approach and new brand, the site was designed to be confident, clear and quick. Confidence meant stripping away the fluff, leaving only the clearest message possible.

This ethos was applied to the brand, copy and site design — so it was only natural for it to extend to the development, and this focus lead to great performance.

I'm going to dive into some of the technical decisions made building this site in this post.

---

## Hugo

Hugo is our static site generator (SSG) of choice. It's **really quick**. After using it on a number of client projects, it became clear that our new site _had_ to be built with Hugo.

The big benefit of an SSG, is how it moves all the heavy lifting to the build time.

For example in WordPress, all the category pages are created at runtime, generating a lot of database queries. In Hugo, the paginated category pages are created at build time - so all the computational complexity is done once, and doesn't impact the user at all.

Similarly, instead of running a live, or even a heavily cached Instagram feed that checked for new photos on page load, we used IFTTT to flip the feature to work performantly. I've [written about it](https://www.trysmudford.com/blog/making-the-static-dynamic-instagram-importer/) in detail on my blog but in essence: IFTTT sends a webhook to a Netlify Cloud Function every time a photo is uploaded. The function scrapes the photo and commits it to our GitHub repo which triggers a Hugo build on Netlify, deploying the site immediately!

Shortcodes allow copy editors to continue using WordPress-esque features, Markdown keeps our developers happy, and our users don't have any of the database overheads. It's win-win!

## Keeping assets to a minimum

The design for this site was certainly conducive to performance. [Mike](/is/mike-vine/) had prioritised content readability, so once the typesetting had been completed the rest of the design flowed very easily. By using the cascade and inheritance, the CSS ended up being pretty lean, weighing in at **5.8 KB**.

JavaScript usage was kept to an absolute minimum, handling four tasks:

- Font loading
- Menu interaction
- Form validation
- Event tracking

The total: **2.8 KB**.

## Brand

It was only a simple thing that saved one HTTP request, but by kerning the font in CSS, the logo could be text, not an image or SVG.

## Fonts

When it comes to web fonts, [Zach Leatherman](https://www.zachleat.com/web/) is the don. His [comprehensive guide to font loading strategies](https://www.zachleat.com/web/comprehensive-webfonts/) informed most of the decisions for web fonts on this site.

As a great starting point, there is only one web font with two weights in the design. The fonts are preloaded, letting the browser know to load them as soon as possible:

```html
<link rel="preload" href="webfonts/neuehaasgrotesk.woff2" as="font" type="font/woff2" crossorigin>
```

Then, the page is loaded with the system font Helvetica to ensure a quick render.

The `FontFaceObserver` API tracks when fonts are ready to use, to keep flashes of invisible text to a minimum. Note, the `sessionStorage` check at the start. Once the fonts have been loaded into the cache, we don't need to use the `FontFaceObserver` each load.

```js
import FontFaceObserver from 'fontfaceobserver';
(function() {
  if (sessionStorage.foutFontsLoaded) {
    return;
  }

  var fontA = new FontFaceObserver('NeueHaasGrotesk', {
    weight: 400
  });

  var fontB = new FontFaceObserver('NeueHaasGrotesk', {
    weight: 700
  });

  function loadFonts() {
    document.documentElement.className += " fonts-loaded";
    sessionStorage.foutFontsLoaded = true;
  }

  Promise.all([fontA.load(), fontB.load()]).then(loadFonts).catch(loadFonts);
})();
```

Next up, the CSS loads the fonts with the classic `@font-face` method. It only applies the new font when the class `.fonts-loaded` has been applied.

```html
<style>
  @font-face {
    font-family: NeueHaasGrotesk;
    src: url('webfonts/34C79D_0_0.woff2') format('woff2'),
         url('webfonts/34C79D_0_0.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: NeueHaasGrotesk;
    src: url('webfonts/34C79D_1_0.woff2') format('woff2'),
         url('webfonts/34C79D_1_0.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Helvetica', sans-serif;
  }
  .fonts-loaded body {
    font-family: 'NeueHaasGrotesk', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
<script>
  if(sessionStorage.foutFontsLoaded) document.documentElement.className += " fonts-loaded";
</script>
```

There are still gains to be made with subsetting and variable fonts, both of which will be experimented with in coming months.

## SVG & Custom properties

The new brand included a pattern to be used on the header of each page. SVG was the perfect candidate for tackling this. The pattern was split into two sections: repeating lines & an overlay. The repeating lines were consistent on each page whereas the overlay could change from page to page. CSS custom properties helped keep the code as lean as possible, I've [written about this](https://www.trysmudford.com/blog/using-css-custom-properties/) in detail on my blog.

## Netlify CMS

From past WordPress experience, too much emphasis is put on making everything editable, to the detriment of page speed and code cleanliness. To that end, we opted to only make the blog 'CMS-able'.

[NetlifyCMS](https://www.netlifycms.org/) is an open source CMS that plays nicely with Hugo. Instead of installing a monolithic framework and database, it lives as a single-page React app in the `static` directory. You create a config file outlining which content is editable and where images should be stored.

Other than the config file, the only 'custom' code required was a checkbox component for categories. It's [available here](https://github.com/trys/tomango-2018/blob/master/src/js/cms/fields/checkbox.js), should you wish to peruse.

## Progressive Web App

Service Workers have been gaining popularity for several years, and they've recently landed in Safari & Edge. Thanks to their progressively enhanced nature, they've been available to many users for quite a while.

With a service worker, you take control of network requests going to and from the browser, and have access to the browser cache. These two items combined allow websites to work offline!

[Our service worker](/sw.js) does some initial route caching on first load, to ensure you have the key pages available from the get-go. Then it caches each page as you navigate the website. If your network connectivity drops, you'll still be able to browse the key pages and all previously viewed articles.

We're using a network-first, cache-fallback approach. It does mean flaky connections won't be as quick as a cache-first setup, but it does make cache invalidation much more straightforward. Teamed with Netlify's [great caching technology](https://www.trysmudford.com/blog/performance-wins-with-hugo-and-netlify/), it's a great solution.

Huge thanks to [Jeremy Keith](https://adactio.com/) and [Ethan Marcotte](https://ethanmarcotte.com/) for their service worker inspiration.

## Related content

The design had a requirement for related projects on any page. In WordPress, I'd tend to set up a 'relationship' field in ACF. In Hugo, it took a little more work. The 'front matter' (page meta data) needed to identify which projects were related, and by using the page slug, it worked like this:

```markdown
related:
- concept-tag
- hop
```

In the template, it checks for the related front matter field, loops through each one, and outputs the HTML. Again, this heavy lifting is done a build time, not runtime, so our users don't pay the performance price.

```html
{{ if .Params.related }}
  <div class="related">
    {{ range $index, $element := .Params.related }}
      {{ with $.Site.GetPage "page" "created" (printf "%s.md" $element) }}
        <a href="{{ .URL }}">
          <h3>{{ .Title }}</h3>
          <img src="{{ .Params.image }}" alt="{{ .Title }}">
        </a>
      {{ end }}
    {{ end }}
  </div>
{{ end }}
```

## Structured data

Improving our structured data was one of the minor goals of this project. Building that into Hugo can get a little cumbersome but creating variables worked out really nicely, especially for handling Netlify's [deploy preview URLs](https://github.com/netlify/victor-hugo/pull/74). The full header code can be [seen here](https://github.com/trys/tomango-2018/blob/master/site/layouts/_default/baseof.html).

```go
{{ $url := getenv (cond (eq "production" (getenv "CONTEXT")) "URL" "DEPLOY_PRIME_URL" ) | default (cond (eq "//localhost:1313/" (printf "%s" $.Site.BaseURL)) "//localhost:1313" $.Site.BaseURL) }}
{{ $title := .Params.seo_title | default (printf "%s | %s" .Title .Site.Title) }}
{{ $desc := .Params.seo_description | default .Params.Description | default (printf "%s | %s | Strategy | Brand | Web | Digital Marketing" .Title .Site.Title) }}
{{ $image := printf "%s%s" $url (.Params.image | default "images/og.jpg" | relURL) }}
```

![](images/blog/structured-data.jpg)

## Images

On the whole, we manually resized and optimised images where needed. But for the blog, it's not fair to assume a copy editor will have photoshop installed. That's where Cloudinary steps in. They have a hugely generous free tier that includes external image requests.

Using the following URL, Cloudinary serves a 600px wide image scraped from the website. No server-side resizing required!

```go
https://res.cloudinary.com/[account]/image/fetch/w_600/[url]{{ .Params.image }}
```

## Netlify

Finally, the biggest piece of the puzzle, hosting with Netlify. I think most of my colleagues are sick of hearing me wax lyrical about them, but I can't get over how good their service is. I've never come across a company like it.

We've moved from a single dedicated server in Surrey, to a global content delivery network with Git integration, server-side builds, cloud functions, instant cache invalidation, brilliant support and a great admin system.

> Our site now runs quickly, anywhere in the world, regardless of internet connectivity.

It's incredible, I can't get over how much of a difference this has made to the websites we create.

## The Code

Now there's no database running our website, and no FTP in sight, we can finally rely on Git. We've even made the [repository public](https://github.com/trys/tomango-2018) if you fancy a look.

Our intention is to keep working on the site, personally I'm keen to keep finding performance gains!
