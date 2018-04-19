---
title: "503 valid RCPT command must precede DATA error message in Outlook and how to fix it"
author: "mark"
date: 2012-04-19 15:34:36
description: How to fix this irritating email error message.
thinks/categories: 
 - tips-and-advice
---

This extremely irritating email error message seems to have been plaguing several of our clients recently, so I thought it was worth writing this post to provide some solutions to the problem.

I don't usually write technical posts, but this particular problem has cropped up a number of times and I thought it was worth putting something on our blog to help out anyone else who might be tearing their hair out to try and get it resolved.

## 503 valid RCPT command must precede DATA

This error message occurs when the server is expecting to receive mail before sending. This usually results from server authentication priorities (for example, you attempt to send mail before your "spam filter" has finished its receiving process.)  Basically, the server needs to do things in a certain order and gets its knickers in a twist.

## Solutions to the 503 error

There are several solutions to this problem, listed below in order of likely culprits.  Try each one in turn and then test.  If it doesn't work, go on to the next one and try that, and so on:

- *Server authentication* - setup your outgoing mail to use outgoing server authentication (this means when you send email you  log in with your email address and password). In Outlook, go to Tools &gt; Account Settings, select the email account then go to More settings &gt; Outgoing server and check the "__My outgoing server requires authentication__" box.  It will default to use the same username/password combo as for your incoming mail, which is correct.
- *Sender matching* - make sure you're sending from the same email address that the recipient sees your email coming in as (ie. don't make the "from" field differ from the email address used in your outgoing mail settings).
- *Apostrophes* - this one is really weird.  Remove any apostrophes (single quotes) or other non-alphabetic characters from your email account name(s).  This is the name that appears in the From field when your email reaches the recipient and can be changed in Tools &gt; Account Settings, then when in the account, More Settings &gt; General.  So don't use something like "Mark's email".
- *SMTP port* - use port *26* (instead of the default 25) for outgoing mail.  This can be found under More Settings &gt; Advanced.
- *Full mailbox* - make sure the mailbox of the affected account is not full or has met/exceeded its quota. You can uncheck the following option to make sure a copy of all your emails is not being left on the server (note that since the email will be downloaded to your PC after this setting change, you won't be able to access your emails from another location if you do this). In Outlook, browse to Tools &gt; Account Setting &gt; More settings &gt; Advanced &gt; uncheck "__leave a copy of this message on the server__."
- *Outlook PST files* - sometimes the 503 error will occur if you have a corrupt outlook PST (mail archive) file. Try repairing the file (you might want to call your IT bod before you attempt this yourself).
- *VPN* - if your system is trying to connect via a VPN network while you're sending email, you may get this error. Try disconnecting the VPN before sending/ receiving mail (again, you might want to talk to the IT department first).


Hopefully one of these will sort the problem out for you.  This list of suggestions has been taken from this excellent article entitled "[How To Fix "503 Valid RCPT Command Must Precede DATA" Error](http://www.werockyourweb.com/503-valid-rcpt-command-must-precede-data)" on the [We Rock Your Web](http://www.werockyourweb.com/) website.  If you want to find out more about the problem and what causes it, have a read of the article.


