---
title: "Using Quantity Queries to write content-aware CSS"
author: "trys"
date: 2015-08-25 14:29:11
description: Quantity Queries are an exciting new concept that can be used to create content-aware styles on your website.
thinks/categories: 
 - web-design
---

The dawn of <abbr title="HyperText Markup Language">HTML5</abbr> and <abbr title="Cascading Style Sheets">CSS3</abbr> provided a wave of new technologies promising to change the way we build web applications. Web developer reactions to most features were similar, an initial buzz of excitement while we pondered the possibilities brought forth by these shiny new techniques followed by a crushing sense of disappointment when we realised just how long it would be before we could start using them.

Some crest-of-the-wave developers renounced any form of support to older browsers and pressed on with the new features. However, many developers did not have the option to blindly assume that all users ran the latest cutting edge browser, if we were to do that, we'd segregate a significant portion of our users. For this reason, it's usually a game of patience when it comes to using new frontend features in the wild.

This is why it's so exciting to discover a feature that is both very useful and can also be used on a live website without large spoonfuls of graceful degradation.

## Enter Quantity Queries

During the brilliant [Responsive Day Out 2015](http://responsiveconf.com/2015/), there was a stand-out talk that brought to light a concept that opened many possibilities for modular, content-aware design. In his talk on '[Solving problems with selectors](http://www.fivesimplesteps.com/products/solving-problems-with-selectors)', [Heydon Pickering](http://heydonworks.com/) demonstrated Quantity Queries.

Quantity Queries are a way of reacting to differing levels of content with pure vanilla, [well supported](http://caniuse.com/#search=nth-last-child) <abbr title="Cascading Style Sheets">CSS</abbr>. They are comprised of the following:

- A shift in the way you think about <abbr title="Cascading Style Sheets">CSS</abbr> selectors
- The `:nth-last-child` selector
- The `:first-child` selector
- The `~ *` selector



### Questioning selectors

To get the most out of Quantity Queries, you have to view the <abbr title="Cascading Style Sheets">CSS</abbr> selector as an <var>IF</var> statement that will ask a question of the markup and only run if all conditions are met. This more logical view of the selector helps with your decision-making when it comes to laying out specific elements.

### The :nth-last-child selector

The `:nth-last-child` selector was added in <abbr title="Cascading Style Sheets">CSS3</abbr> but it hasn't had a great deal of publicity in comparison to its cool-kid siblings `nth-child` and `:first-of-type`. Their benefits are immediately obvious, hence the amount of air-time they received. `:nth-last-child` has a more subtle set of benefits that have taken longer to discover.

This selector will select the element(s) that meet the criteria passed into the brackets of the selector, working from the bottom of the element stack and counting up.

In its simplest form, a single number can be passed into the brackets to ask the question, __'Is this element the nth-last element that I'm working on?'__. The `:nth-last-child(2)` selector will select the penultimate element, the `:nth-last-child(4)` selector will select the fourth-last element. Although this is handy, it's not going to be useful on every project. That is, until it is teamed with a number of other selectors.

### The :first-child selector

We all know and love the `:first-child` selector. It's great for making our opening paragraphs a little larger or hiding borders for the first element in a list. However, this quaint selector becomes a pretty powerful anchor when combined with `:nth-last-child`. Remember, our selectors are <var>IF</var> statements and by using `:first-child` as the first selector (imagine this as the first parameter in an <var>IF</var> statement), we're able to filter out all elements that are not the first element.

Now our humble `:nth-last-child(4)` selector can be combined to create `:first-child:nth-last-child(4)` to create a much more specific selector asking the question __'Is this element the first-child and the fourth-last element that I'm working on?'__. This is getting pretty close to something that could be very useful but it needs one final ingredient to take it to the next level.

### The ~ * selector

This rather bizarre selector uses two less common elements in <abbr title="Cascading Style Sheets">CSS</abbr>: the general sibling combinator and the universal selector. It asks the question __'Does this element come after the current selected element'__, effectively selecting all elements after the current element without traversing up an element level, something not currently possible in <abbr title="Cascading Style Sheets">CSS</abbr> - very cool! Combined with the previous code, we can write the following:

```css
:first-child:nth-last-child(4),
:first-child:nth-last-child(4) ~ * {
	/* Styles here */
}
```

This asks the question __'Is this element the first-child and the fourth-last element that I'm working on OR does this element come after the first-child and the fourth-last element that I'm working on?'.__

We have a <abbr title="Cascading Style Sheets">CSS</abbr> selector that can check if a container holds exactly 4 elements!

> In essence, we have created a content-aware stylesheet rule. That's pretty neat for a simple declarative language like CSS.


#### Added bonus

As the `:nth-last-child` selector works in a similar way to the famous `:nth-child` selector, you can pass more than just a single number into the selector. For example, if you pass in n+5, you are able to test whether the container holds five or more elements and style all of the elements accordingly!

## Why use Quantity Queries?

The reason I got so excited about this concept was because I could immediately see how useful it could be on the websites we develop. Being able to count the number elements in a container used to be a privilege only extended to JavaScript and server-side languages. The former meant waiting till the page had finished loading before counting the elements and the latter only worked on page load and wouldn't react to client-side changes. Using <abbr title="Cascading Style Sheets">CSS</abbr> to count solves both of these issues; *it is both dynamic and instantaneous*.

In a world of Content Management Systems, the challenge to web developers is to ensure that content looks great on every device, regardless of the type and quantity of content that's been provided. Quantity Queries help towards this reactive goal by helping you to tidy up the page if too much or too little content has been added to a container.

## Putting Quantity Queries to work


### Tag list

I used Quantity Queries on a recent build to change the way that tags would display depending on the total number. This subtle enhancement only kicked in if there was five or more tags and it neatened up what would've been a long list. Using the following simple Quantity Query, I was able to swap from a list to a brickwork-like structure with ease:

```css
.tag {
	display: block;
}

.tag:first-child:nth-last-child(n+5),
.tag:first-child:nth-last-child(n+5) ~ * {
	display: inline-block;
}
```

![](images/blog/query.gif "The finished result")

### The Grid System

I put Quantity Queries to use on a template that required a flexible grid system to display a list of projects and news items. My aim to was to ensure that no orphaned elements would be left at the end of the list, regardless of how many items were in the system. Using a more complex set of selectors, I was able to create an effective grid system.

```css
.panel:nth-child(3n),
.panel:nth-child(3n+1):last-child,
.panel:nth-child(6n+1):nth-last-child(4),
.panel:nth-child(6n+1):nth-last-child(4) ~ .panel,
.panel:nth-child(6n+4):nth-last-child(4),
.panel:nth-child(6n+4):nth-last-child(4) ~ .panel {
	width: 25%;
}

.panel:nth-child(6n+1),
.panel:nth-child(6n+6),
.panel:nth-child(6n+2):last-child,
.panel:nth-child(6n+4):nth-last-child(2),
.panel:nth-child(6n+4):nth-last-child(2) ~ .panel {
	width: 50%;
}
```

![](images/blog/grid.gif)

## In closing

Working with Quantity Queries is a lot of fun. They give new possibilities for modular element design and they do a brilliant job of tidying up content extremes making your projects more flexible and future-proof.


