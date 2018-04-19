---
title: "How to speed up your website - SVG"
author: "trys"
date: 2015-03-02 09:41:45
description: By using SVG instead of bitmaps, you can make an improvement on your website load time AND image quality.
thinks/categories: 
 - tips-and-advice
 - web-design
---

Continuing in the 'How to speed up your website' series, I'm going to outline the benefits of using SVG to display images. SVG stands for *Scalable Vector Graphics* and they're used to display vector-based images via code.

## Images via code? What is this black magic?

Generally created by design programs like Illustrator and Sketch, SVGs are light-weight XML files that a web browser can parse and render an image from. Although they've been around since the late nineties, they've really come into their own in the last couple of years - partly due to increased browser support but mostly due to the rise in responsive design.

The main reason why SVG is so helpful is down to the first word in the abbreviation: *Scalable*.

Since the [dawn of responsive design](http://alistapart.com/article/responsive-web-design), the need for device-appropriate images has become a must. Devices like the iPhone 6+ run a 400dpi 1080p display on a screen not much larger than your average wallet and the latest iMac uses a screen with a higher resolution than many cinema screens. This has a huge impact on the image sizes required for a website to ensure they look great on all devices.

Whereas previously you could get away with displaying a company logo at around 200px x 80px, that's simply not adequate for modern retina screens.

There are two solutions to solve this problem:

### Use a larger bitmap image

The problem with this option is two-fold.

Firstly, you'll increase the load time of your page when you increase the image size. Given that the aim of this task is to *speed up* your website, that's not particularly helpful.

The other problem is future-proofing. Who knows which direction the web will take in the next few years? By using a bitmap, you're going to hit the same problem when the next 'big phone' comes out, and the next, and the next, and the ne...you get the idea.

### Use SVG

As an SVG image doesn't have a fixed resolution, you can make it as large or as small as you like and will always look great. Better still, you don't need to provide the browser with a large version specifically for high resolution screens, just serve one file and the browser will render it crisply and cleanly to all devices.

## How to implement SVG

There are a couple of steps you'll need to take to use SVG on your website. The first thing to know is that SVG's not appropriate for replacing photographs - you won't end up with a performance increase as the size of the file required to display the image will be huge. So, the first step is to locate a vector version of your image. If you have an EPS version of the graphic in question, you can simply open that up in Illustrator or Sketch and export it to SVG.

This file can then be used just like any other image. For example:

#### HTML

```html
<img src="logo.svg" />
```

#### CSS

```css
.logo {
    background: url( logo.svg );
}
```

## Optimising your SVG file

Unfortunately, like most computer-generated code, the SVG markup isn't always that lean. To compress the code, try using this handy [SVG editor](http://petercollingridge.appspot.com/svg-editor) (thanks to Peter Collingridge). This system will strip out all of the unnecessary bulk that the design programs include in the markup.

The final step is optional but will make a positive impact on your site loading time. By encoding your image, you can embed it directly into your CSS or HTML and cut down on one HTTP request per image. The fewer connections the browser needs to make to the server, the quicker your site will load. As an extra bonus, your image will be cached within the CSS file helping to give an extra performance boost. DoPiaza have created a great data [URI generator](http://dopiaza.org/tools/datauri/index.php) that can be used to inline your SVG files.


