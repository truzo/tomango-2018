---
title: "PWA for Lewes Bonfire – organising pandemonium"
author: "liam"
date: 2018-10-31 8:55:00
description: At Tomango we make it a daily ritual to check industry-related websites to stay up-to-date with the latest trends, technology and design.
banner: images/blog/Lewes-Bonfire-Banner.png
image: images/blog/Lewes-Bonfire-Banner.png
thinks/categories: 
 - Web design
---

With our studio being located on the outskirts of the town of Lewes, here at Tomango we are well-versed in the annual pandemonium of the world-famous Lewes Bonfire celebrations.

If you don’t know...on the 5th of November, tens of thousands of people travel from all over the world. They brave the cold weather, potential travel troubles, and crushing crowds to get a glimpse of something totally unique;
something that needs to be seen to be truly appreciated!

Each year, Bonfire societies from all over East and West Sussex gather to march through the winding streets of the town. The procession of people, dressed in colourful costumes, holding flaming torches aloft and throwing
pyrotechnics about like they’re giving out Halloween candy, is a truly spectacular sight to behold. The night then ends with a series of bonfires dotted around the town, each topped off with fantastic fireworks displays that
collectively paint the night sky above Lewes.

![](images/blog/Lewes-Bonfire-Martyrs.jpg)

However - for people attending for the first time, or those that aren’t armed with a bit of local knowledge, the organised chaos of the entire evening can be rather daunting!

Therefore, as an exercise in speculative design and development, we thought we would see if we could come up with a solution.

## Research

As a starting point I gathered as much information as I could about the event, travel options and useful advice from relevant sources. There isn’t much out there for this event, other than past events and historical news articles or
some great images of the famous bonfire effigies.

After my initial research I then started to realise that a simple solution for this event would be a PWA (Progressive Web App), a PWA would allow the user to access information without an internet connection, and have no app store
charges to download. As all the user would have to do is visit the URL and then follow the prompt to add the PWA to their device’s screen.

For more information on PWAs we wrote a post about [building a PWA for Agon Systems](thinks/building-progressive-web-app/).

## Planning 

Once the decision was made to think about a PWA I then started planning the [User Journey](https://www.tomango.co.uk/thinks/what-is-user-journey/) this led me to the good old fashioned pen and paper, mapping out scenarios and possible journeys for the user to follow. This also allowed me to
think about what data the user would need within the PWA, because I want everything to be within this but also not overload the user with extra data or information, it needs to be clear and concise

[Image]

Once I felt confident with the User Journeys, I then mocked up some flow charts using the very cool tool [Whimsical](https://whimsical.co/) which allows you to quickly develop and create flowcharts. With these flowcharts finalised I
could then start thinking about the design.

![](images/blog/Lewes-Bonfire-Flowchart.png)

[Check out the full flowchart here.](https://whimsical.co/5HP52YUHW11Y1PinbNfm9W#7YNFXnKbYh6ZQSyyo87As)

Whimsical is my new favourite tool, not only for these handy flowcharts but also for the wireframe sketches you can do within the tool. Wireframes are a visual blueprint for us to create the framework of a website or PWA, it allows
us to arrange elements and form the best design for the intended purpose of the website/PWA.

![](images/blog/Lewes-Bonfire-wireframes.png)

[Check out the wireframes here.](https://whimsical.co/MX5vCAoQrW936CqRCcCAtA#2Ux7TurymMNiYmEtsV9R)

## Design process

With the wireframes and flowcharts I was able to start the design of the PWA, I already had a vision in my mind for styles and images I wanted to use. As a kid going to Lewes on bonfire night three colours stuck with me, the bright
red light of flares, the yellow flames of the huge bonfires and the black of the night sky.

![](images/blog/Lewes-Bonfire-colours.png)

I settled on a clear and easy to read sans-serif typeface [Graphik](https://commercialtype.com/catalog/graphik/graphik), it’s one of my personal favourites too. Keeping it simple, and following good design practice I choose 3 weights
of this font – light, regular and medium.

I then spent some time looking for good images of Lewes bonfire and found some really good images on flickr and one particular account by [James Lenney](https://www.flickr.com/photos/100974792@N07/albums/72157688997958144).

With some selected images I then started playing with blend modes in [Sketch](https://youtu.be/5EatUkHez0U) to develop an image style, I used the red colour from my palette and applied a multiply blend mode which created a red tone
over the image. I then tweaked the brightness of the effect to make it slightly darker to allow text to be more visible when on top of the images. See before and after below.

![](images/blog/Lewes-Bonfire-Before-After.png)

## UI Design

Once I had the styles locked down and then started the design based on the wireframes I had produced. I created the home page, or menu page first. From there I designed the sub pages, which included designing button styles, content
blocks, drop down menus, content tables and icons. With all these items designed I was able to create the remaining pages of the PWA.

![](images/blog/Lewes-Bonfire-symbols.png)

I could talk about the design in greater detail, but I think it’s more important to talk about the UX (User Experience) as that is where this PWA would really make a difference to this event.

## UX

From the start of this project I had the user in mind, I kept thinking about what would someone completely new to this event need, and what would someone local to Lewes need. There was one simple solution in my mind – integrating
Google maps, showing locations of places on interest. The ‘Where to watch’ page best displays this functionality, tapping on one of the options opens up Google maps taking them directly to the location of their choice, showing
distances and walking time information.

![](images/blog/Lewes-Bonfire-Google-maps.gif)

For the other pages of the PWA I wanted to keep the user within the app, especially for the travel or ‘Getting there’ page. So I designed the pages to contain all the information the user needed, this is best displayed in the
‘Trains’ section. Train departure times are always easy to find, but arrival times are rarely displayed, so I designed the content block for train times to have a departure time and arrival time, keeping all relevant information to
the event in one place, even listing the calling points along the route.

After thinking about the functionality of the where to watch, and getting there pages I moved on to the what to see page. This is possibly the most important page for someone new to this event. It contains all relevant information
as to what happens during bonfire night, the procession, the societies and what to look out for. For example the procession page links through to a timetable, giving the user a rough idea of what happens at certain times.

![](images/blog/Lewes-Bonfire-content-blocks.png)

I’ve applied all these functions throughout the PWA to all pages, please take a look at the preview of the PWA below, please note this is not accurate to the event, this is purely a speculative project focusing on UI/UX design.

## The PWA

Here it is, time to play!

<iframe width="442" height="935" src="//invis.io/P8OTP11YHV7" frameborder="0" allowfullscreen></iframe>

## Software used

To make this speculative design project I have used all the tools we have here at Tomango to create clients websites or PWAs, the wireframes and flowcharts are made using [Whimsical](https://whimsical.co/), the design has been
created in [Sketch](https://youtu.be/5EatUkHez0U) and the prototype using [InVision](thinks/why-we-use-invision/). I hope this gives you an insight into how we work, why we do user journeys and why we put so much thought into
creating amazing websites for clients.
