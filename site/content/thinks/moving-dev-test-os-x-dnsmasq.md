---
title: "Moving from .dev to .test - OSX dnsmasq"
author: "trys"
date: 2017-12-14 14:20:56
description: How to move from .dev to .test on OSX
thinks/categories: 
 - tips-and-advice
 - web-design
---

It finally happened. After buying the `.dev` TLD a couple of years ago, Google have finally started doing something with it. The first step has arrived in Chrome 63, which hit my browser at 13:36 on the 14th December. All `http://` requests are automatically redirected to `https://`. This change has broken the local development setup on my Mac.

Although a valiant step in the direction of local SSL development, I'm not clued up enough with self-signed certificates to implement that, especially not a week before breaking up for Christmas. Anyway, you're here for a solution...

## .dev to .test

I have the `.dev` tld routed to my `/Users/trysmudford/Sites` directory so `anything.dev` points to `/Users/trysmudford/Sites/anything` - it's very handy. So I need to swap to a new TLD and `.test` seems to do the trick. Here's how I did it (OSX 10.12, native apache setup, dnsmasq provided by homebrew).

1. Open Finder
1. Click 'Go' in the top menu bar
1. Click 'Go to folder'
1. Type in: `/usr/local/etc/`
1. Hit 'Go'
1. Open `dnsmasq.conf` in your favourite text editor
1. Copy the line: `address=/.dev/127.0.0.1`
1. Change new line to: `address=/.test/127.0.0.1`
1. Save this file
1. Go to your terminal and type the following to restart dnsmasq (type in your password when promted):
	1. `sudo launchctl stop homebrew.mxcl.dnsmasq`
	1. `sudo launchctl start homebrew.mxcl.dnsmasq`
1. Back to Finder
1. 'Go', then 'Go to folder'
	1. Type in: `/etc/resolver/`
1. Copy the file named: `dev`
1. Rename the new file to `test`


You may need to restart Apache with `sudo apachectl restart`. Disclaimer, this worked for me - I can't guarantee it'll work for you.

Hope this helps!


