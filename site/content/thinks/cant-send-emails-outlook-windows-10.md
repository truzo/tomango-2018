---
title: "Can't send emails in Outlook on Windows 10?"
author: "kieran"
date: 2015-12-03 09:24:43
description: Having problems sending email from Outlook since upgrading to Windows 10? Here's how to fix it.
thinks/categories: 
 - tips-and-advice
 - web-design
---

Upgrading to Windows 10 can be irresistible for some people – and I’m not ashamed to say I was one of them. The night the new operating system was available I downloaded it straight onto my personal PC.

![](images/blog/windows-10-desktop.jpg)

With a new super-chic look and a return of the start menu - which caused uproar when it was missing from Windows 8 - what could possibly go wrong with upgrading?

Well quite a lot actually.

It’s always risky upgrading to a new operating system. Although Microsoft will have spent a lot of time perfecting Windows 10, even they can’t iron out all of the inevitable bugs and security flaws.

One of the first problems I encountered was with Outlook emails. After upgrading to Windows 10, any emails I sent in Outlook would simply sit in my Outbox, not going anywhere. I was furiously looking through all the settings to see if anything had changed – nothing. I then headed to the forums to see if anyone else was having the same problem, and sure enough, they were.

The cause of this problem is in the upgrade. In the process of upgrading to Windows 10, the system corrupts some Office files along the way, which is what was stopping me from sending mail. Here's the error message you might find:
[code id="error windows 10" type="markup" src="outlook-windows-10-error.html"]

The fix is a simple one, although it may look rather daunting to the less experienced computer user.

Open Command Prompt as an admin – Right Click on the Start Button and select ‘Command Prompt (Admin)’.

![](images/blog/command-prompt-start-menu.jpg)

Now this is the part that looks a bit unfriendly and technical, but don’t worry, we’re only going to enter one thing in here. Simply type **‘sfc /scannow’** into the window, and then hit enter (note the space in between the two words).

![](images/blog/command-prompt-start.jpg)

The window will now say that it’s scanning. This took around 10 minutes for me, however it may take longer if you have a lot stored on your computer.

![](images/blog/command-prompt-running1.jpg)

Once the scan is complete you'll need to restart your computer. Once you've logged back in again you should be able to open Outlook and send emails again – Voila!


Over time Windows will iron out these little problems so you won’t have to go through this process when you upgrade. There are likely be plenty more bugs on Windows 10, that I haven’t encountered yet, so if that hasn’t solved your problem you might have to go searching the forums like I did.

Here are some links to some great forums on Windows 10;

[Microsoft Forums for Windows 10](http://windows.microsoft.com/en-gb/windows-10/support) - The forum from Windows themselves.

[Ten Forums](http://www.tenforums.com/) - A website forum setup to discuss all things Windows 10.

[Windows 10 Forums](http://www.windows10forums.com/forums/windows-10-support.5/) - Another forum focused on support for Windows 10.

&nbsp;


