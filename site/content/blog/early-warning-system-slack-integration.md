---
title: "Early warning system with Slack integration"
author: "trys"
date: 2016-05-06 14:41:20
excerpt: We created a cheery early warning system for our server with a Slack integration.
blog/categories: 
 - tips-and-advice
---

We host a good number of WordPress sites on our dedicated server and for the most part it's plain sailing. However, there can be the odd time when a dubious individual will try and gain unlawful access to a site. Even though their attempts are thwarted by our policy for strong usernames and passwords, this sort of activity can cause a bit of unnecessary strain on the server.

As all web hosts will tell you, there's always someone trying to see if you've left your username as 'admin' and your password as... you guessed it... 'password'. Most of the time these attempts go unnoticed, but when someone makes a particularly focussed attack, it can become a problem.

To counter that, I wrote a small script to keep an eye on things for us - there's nothing like a good bit of automation!

This script runs in the background and checks to see if any site hosted on our server is being picked on and if so, it'll let us know so we can block the individual causing the problem.

This in itself will make a big difference to our response speed. However, we like to take things a little further at Tomango...

In the office, we use the real-time messaging service '[Slack](https://slack.com/)' to avoid the formality of emails (and increase the output of GIFs in general conversation). This seemed like the perfect time to write a small integration to not only let us know about the urgency of the situation, but to also add a bit of colour and enjoyment to the whole process - hosting can be a bit dull at the best of times!

Here's the message we receive:

![](images/blog/ip.png)

The server POSTs to our channel endpoint with a message outlining which IP needs to be dealt with and who needs to block it. GIFs/emoji almost always ensue after this point.

![](images/blog/ip.gif)

## The Slack Integration Code

Writing a Slack integration is actually pretty straightforward in PHP, a single CURL request with a JSON encoded array will suffice. Below is the snippet that sends the request:

[code type="php" src="slack.txt"]

You can find your WebHook URL by:

1. Clicking on your team name on the top left of Slack
1. Choosing 'Apps &amp; Integrations' from the dropdown menu
1. Clicking on 'Build your own' on the top right of the page
1. Clicking on 'Make a custom integration' under 'Something just for my team'
1. Choosing the 'Incoming WebHooks' option
1. Selecting the channel you wish to post to (we went for #general to make sure everyone sees the notification)
1. Copying the WebHook URL from the page




