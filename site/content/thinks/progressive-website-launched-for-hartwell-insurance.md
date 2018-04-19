---
title: "Progressive Website launched for Hartwell Insurance"
author: "trys"
date: 2018-01-29 09:37:47
description: We’re proud to announce the launch of a rapid new website for Hartwell Insurance.
image: images/blog/hartwell.jpg
thinks/categories: 
 - web-design
---

We're proud to announce the launch of a rapid new website for [Hartwell Insurance](https://www.hartwell-insurance.com/).

The site was built with global performance as a first-priority feature. To that end, the site is built in Hugo, a static-site generator that does away with databases and the performance hit that comes from them.

By making the site static, we were able to distribute the hosting to multiple CDN servers with Netlify. This means users connect to the closest server to their location, not to a single datacenter.

Finally, the site utilises service workers to work offline and on flaky connections, qualifying it to become an installable Progressive Web App/Site.

I've gone into a lot more technical detail [on my own blog](http://www.trysmudford.com/perfomance-wins-with-hugo-and-netlify/) if you're interested in how we built the site.

{{< button "https://www.hartwell-insurance.com/" >}}Visit Hartwell Insurance{{</ button >}}


