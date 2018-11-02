---
title: "PWA for Lewes Bonfire – organising pandemonium"
author: "liam"
date: 2018-11-02 9:00:00
description: With our studio being located on the outskirts of the town of Lewes, here at Tomango we are well-versed in the annual pandemonium of the world-famous Lewes Bonfire celebrations.
banner: images/blog/Lewes-Bonfire-Banner.png
image: images/blog/Lewes-Bonfire-Banner.png
thinks/categories: 
 - Web design
---

With our studio being located on the outskirts of the town of Lewes, here at Tomango we are well-versed in the annual pandemonium of the world-famous Lewes Bonfire celebrations.

If you don’t know…on the 5th of November, tens of thousands of people travel from all over the world. They brave the cold weather, potential travel troubles, and crushing crowds to get a glimpse of something totally unique;
something that needs to be seen to be truly appreciated!

Each year, Bonfire societies from all over East and West Sussex gather to march through the winding streets of the town. The procession of people, dressed in colourful costumes, holding flaming torches aloft and throwing
pyrotechnics about like they’re giving out Halloween candy, is a truly spectacular sight to behold. The night then ends with a series of bonfires dotted around the town, each topped off with fantastic fireworks displays that
collectively paint the night sky above Lewes.

![](images/blog/Lewes-Bonfire-Procession.jpg)

However - for people attending for the first time, or those that aren’t armed with a bit of local knowledge, the organised chaos of the entire evening can be rather daunting!

There isn’t currently one main central repository for event information for Lewes Bonfire; across the bonfire society and Lewes Bonfire Council websites, travel information on Southern Rail and Brighton & Hove Buses websites, road
closure information on the Lewes District Council website, and safety and logistical information from Sussex Police - as well as various social media channels for all the above and more - there’s a lot to take in if you’re an
out-of-towner hoping for a successful evening!

Therefore, as an **exercise in speculative design and development**, we thought we would see if we could create something to make all this a bit easier...

...and this is what we came up with.

<iframe style="transform: scale(0.8) "width="100%" height="940" src="//invis.io/P8OTP11YHV7" frameborder="0" allowfullscreen></iframe>

If you're viewing this on mobile [view the PWA prototype here](https://invis.io/4WOSQSY3Z5D#/327107403_Mobile).

## Starting point

As a starting point I gathered as much information as I could about the event, travel options and useful advice from the relevant sources noted above. 

Early on in the initial research phase, it became clear that a simple solution for this event would be to produce a Progressive Web App, or PWA.

A PWA is a website that uses cutting edge (but pretty well supported) technology to allow the site to be available offline. It can also be ‘installed’ on the user’s device without going through an app store, giving a blazingly fast
and beautifully branded experience with very few downsides.

PWAs are updated in real time, require little data or bandwidth, can be shared via URLs, and require one version for all devices. Basically, perfect for an event like this.

For more information on the technical aspect of PWAs, read our [previous blog post](thinks/building-progressive-web-app/) about one we created for [Agon Systems](http://agon-systems.com).

![](images/blog/Lewes-Bonfire-plan.png)

## Planning 

Once the decision was made to consider using a PWA, we then started planning the [User Journey](https://www.tomango.co.uk/thinks/what-is-user-journey/).

This also allowed me to think about what data the user would need within the app. Using a pen and paper, I mapped out scenarios and possible journeys for the the end user to follow, based on any potential information needs
surrounding the event.

We concluded that information in the PWA needed to be concise and to-the-point. It’s important that a user isn’t spending ages scrolling through lots of text to find what they need to know.

Lewes Bonfire can be a dangerous event to attend, so the less time they spend looking at a screen and more time concentrating on their surroundings, the better.

Once I felt confident with the User Journeys, I then mocked up some flow charts and wireframes using [Whimsical](https://whimsical.co/).

![](images/blog/Lewes-Bonfire-Flowchart.png)

Wireframes are a visual blueprint for us to create the framework of a website or PWA. It allows us to arrange elements and form the best design for the intended purpose of the website/PWA.

With these flowcharts finalised I could then start thinking about the design.

[Check out the full flowchart here.](https://whimsical.co/5HP52YUHW11Y1PinbNfm9W#7YNFXnKbYh6ZQSyyo87As)

![](images/blog/Lewes-Bonfire-wireframes.png)

## Design process

With the wireframes and flowcharts I was able to tackle the overall design of the Lewes Bonfire PWA.

Having been to Lewes Bonfire many times as a kid, I already had some ideas in mind for the overall style I wanted to go for. 

It would consist of three colours; the bright red light of flares, the yellow flames of the huge bonfires, and the black of the night sky.

![](images/blog/Lewes-Bonfire-colours.png)

For the typeface, I settled on [Graphik](https://commercialtype.com/catalog/graphik/graphik) – a clear and easy to read sans-serif font that’s one of my favourites – and three weights.

Being such an impressive visual spectacle, I was keen to get some excellent images of the event to use in the PWA. I spent some time looking for them and eventually found some really good images on Flickr by photographer [James
Lenney](https://www.flickr.com/photos/100974792@N07/albums/72157688997958144).

With some selected images I then started playing with blend modes in [Sketch](https://youtu.be/5EatUkHez0U) to develop an image style.

First, I used the red colour from my palette and applied a multiply blend mode which created a red tone over the image. 

I then tweaked the brightness of the effect to make it slightly darker to allow text to be more visible when on top of the images. See before and after below.

![](images/blog/Lewes-Bonfire-Before-After.png)

## UI and UX design

With the styles, typeface and images chosen, the design of the pages and subpages began.

We wanted to provide an easy-to-understand information bank including a timetable of events, travel and safety details, locations, and anything else an attendee might need.

One of the biggest issues identified was helping people understand where they were in the town in relation to what was going on; people who might have been to the town before, for example, could find it difficult to navigate due to
the complete transformation that takes place throughout Lewes. That, and having tens of thousands of people to get through!

Therefore, integrating Google Maps seemed like an absolute necessity.

The **‘where to watch’** page best displays this functionality. Tapping on one of the options opens up Google Maps directing them to the location of their choice, as well as showing distances and walking time information. 

![](images/blog/Lewes-Bonfire-Google-maps.gif)

As well as adding the location of each of the major bonfires, we thought it would be useful to also introduce locations along the procession route.

One anecdotal problem we had heard from friends who had previously attended Lewes Bonfire was that many take the same route; they get off the train, walk up to the main procession route...and all get stuck, as that’s what everyone
else has done before them.

By adding the location of places of interest and what we collectively considered decent places to watch the procession, this should ideally ease some of this congestion by showing people how they can get from A to B without fighting
through the main crowds.

For the other pages of the PWA I wanted to keep the user within the app, especially for the **‘getting there’** page.

Travel is a particular issue for visitors to Lewes Bonfire. Trains are cancelled, bus routes diverted and roads closed. For those not prepared, it can be an absolute nightmare!

I designed the pages to contain all the information the user needed, rather than take them to outside websites (making the general point of using the PWA redundant).

![](images/blog/Lewes-Bonfire-content-blocks.png)

This approach is best displayed in the ‘Trains’ section.

Train departure times are always easy to find, but arrival times are rarely displayed, so I designed the content block for train times to have a departure time and arrival time, keeping all relevant information to the event in one
place. It even shows the calling points along the route.

Finally, the **‘what to see’** page. This is possibly the most important page for someone new to this event. 

This area contains all the relevant information regarding what happens during Lewes Bonfire. Information includes the procession timings, highlights the different societies and their colours costumes, and links through to a rough
timetable of events.

The event as a whole is a vibrant mess of colours, costumes, noises, history, parody and more. Helping tourists make at least some sense of it seemed like a good idea!

**Please note that this is an exercise in speculative design - we have no official affiliation with Lewes Bonfire, and information within the prototype PWA is not completely
accurate.**

## Software used

This project uses the same software and tools we use at Tomango for every client web project:

* User flows: [Whimsical](https://whimsical.co/)
* Design: [Sketch](https://youtu.be/5EatUkHez0U)
* Prototype: [InVision](https://deploy-preview-50--tomango.netlify.com/thinks/why-we-use-invision/)

If you are interested in finding out more about how Tomango can help you with your web design project, or have any comments, questions or feedback regarding the Bonfire PWA, [get  in touch](/contact).
