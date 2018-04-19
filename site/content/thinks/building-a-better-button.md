---
title: "Building a better button"
author: "trys"
date: 2017-10-09 08:28:33
description: Why you shouldn't use images in place of text.
image: images/blog/old-button.jpg
thinks/categories: 
 - web-design
---

A personalised card manufacturer (with a 'pork-related' name) have recently rebranded with a swanky new site. The brand is a huge step forward and there's some really nice parts to the online shop.

As part of the fun new brand direction, they've created some 'hyper-illustrated' buttons, a style which is pretty popular at the moment. Unfortunately, these buttons were *created with images*.

![](images/blog/old-button.jpg)

__Not the end of the world__ I hear you cry, __sometimes the design requires an image!__

I accept there are definitely times when an image is required to fulfil the design requirements - we've all done it! But there are also 'better' ways of implementing said images. This image was not only low resolution and pixelated on retina monitors, it wasn't accessible - the alt attribute was set as 'theme 1' and there was no supplementary copy to go with the link.

This points to a wider issue: using images in place of content. There are some pretty big drawbacks:

- It doesn't scale
- It's not accessible
- It can't be indexed
- It can't be animated (easily)
- It requires an extra HTTP request per image
- It's a pain to create each time

## The solution

I wanted to see how possible it would be to make a CSS equivalent of this image. After 15 minutes of work in Codepen, I'd come up with the following:

<p class="codepen" data-height="400" data-theme-id="1323" data-slug-hash="EwQPKw" data-default-tab="css,result" data-user="trys" data-embed-version="2" data-pen-title="Moonpig - how to do buttons">See the Pen [Moonpig - how to do buttons](https://codepen.io/trys/pen/EwQPKw/) by Trys Mudford ([@trys](https://codepen.io/trys)) on [CodePen](https://codepen.io).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This works pretty nicely, it scales well, it responds to hover and active interactions, the colours can be changed and the content can be updated without disturbing the designer for the original image.

## Sharing the code

It's pretty normal for an agency to dissect and discuss a rebrand/redesign of a large company, it keeps us sharp and gives us an idea of current trends. We're also keen not to [jump on the brandwagon](/thinks/jumping-brandwagon-important-understand-brief-new-brand/) and dismiss someone's work without knowing the brief. For that reason, we rarely express our opinions publicly. However, in this instance, the accessibility impact of these buttons seemed to justify tipping them off to the problem. Hopefully a more accessible solution will be deployed in the near future.

{{< tweet 916290097477246976 >}}


