---
title: "Oversharing in SASS"
author: "trys"
date: 2016-11-23 14:13:22
excerpt: Exploring the dangers of unintentionally oversharing variables in SASS
blog/categories: 
 - web-design
---

SASS is one of the most popular CSS extensions in use today. It offers a [huge palette of tools](http://sass-lang.com/guide) for authoring scalable stylesheets including support for nesting, selector inheritance, file inclusions and scoped variables.

It's given developers a glimpse into what writing bleeding-edge CSS could look like in a few years, safe in the knowledge that all the code will work in browsers today. And for that reason, as all SASS is processed down into CSS before the browser parses it, in many respects there isn’t anything special about it.

Once processed, the nesting's swapped out for chained selectors, the inherited selectors are merged together, the included files are brought into one cascading, globally scoped file and the variables are calculated and hard-coded in the final bundle.

This processing step adds a stage of disconnection from the source SASS and the final CSS file. It can kid you into thinking you’re writing lean and effective CSS when in fact...

> I don’t believe SASS will help you write better CSS.

What it can do is help you write maintainable and scalable code that whole teams can author together. And with variables, it can also help reduce repetition, discrepancies and human-error around the codebase.

## SASS Variables

Variables in SASS are much like variables in other programming languages. In their most basic form, they simply store information. Once assigned, they can be used multiple times through the codebase instead of hard-coding values.

A pretty standard use-case would be storing brand colours for a website. If the primary colour is a red with the hex code: <code class="language-scss">#E94E4E</code>, there would be some benefit to storing this value once as <code class="language-scss">$brand-primary</code> (or something to that effect), then referencing the variable name throughout the rest of the SASS.

This greatly reduces the chances of human-error creeping in and causing hex codes to be slightly different across different files. It’s also a lot easier to remember than a hex code.

The temptation at this point is to role this out to all areas of the SASS, making variable references to as many values as possible because after all, it makes the code more scalable and “programy” right..?

![](images/blog/1dgp45.jpg)

...well, not quite.

Using variables for the sake of *making CSS more like a programming language* will leave you with poorer CSS that's more difficult to scale.

They say if you have a large enough data-set, you can create any conclusion. The same applies when picking candidates for SASS variables. Just because two elements have a font-size of 17px, it doesn't necessarily mean that's a good reason to combine the two into a variable.

If extrapolated to all references to 17px, issues arise when you encounter a viewport size that could do with a font-size of 20px on one of the components. Do you alter the original variable and in turn affect every instance of that variable, or do you overwrite it on the individual component(s) for every viewport adjustment?

Assignment of variables should be considered in the light of the whole CSS architecture and website lifespan. They'll be embedded into the backbone of the project and other developers will assume that they're dependable, reliable and logical, although not necessarily constant - they are called variables for a reason. For this reason, a variable cannot be simply lifted out of a project if it isn’t working out.

## Naming your variables

It’s easy to overlook a variable name given that the information it holds is the primary reason for its use. However, I would argue that the name is as crucial to the dependability of the variable.

A variable like <code class="language-scss">$brand-primary</code> gives no indication of the colour, but it does suggest that it will be the main colour required for the brand. If the brand changes, so will this variable.

<code class="language-scss">$brand-red</code> could well hold the same hex code as <code class="language-scss">$brand-primary</code>, but the name doesn’t actually tell you that. It just says that you’re going to get a red from the brand palette.

Both have very real use-cases, and *as long as their names are interpreted as above*, they can be very dependable.

A potentially poorer variable name would be <code class="language-scss">$grey</code>. It doesn’t say whether it’s part of the brand palette, just that it represents the colour grey. Problems can occur when a developer uses that variable for three separate areas of the website, for example: a call to action background, the colour of a horizontal rule and the border surrounding an input.

By default, these elements aren't linked in any way - they're totally independant and serve different purposes. However, when we used <code class="language-scss">$grey</code> as a variable on each element, we create a link between them. It’s not unreasonable to think that in 6 months time, a different developer could come along with the task of changing the background colour of the call to action from a light grey to dark grey. They could see the variable <code class="language-scss">$grey</code>, trace it back to where it's assigned, make the change there and in turn unintentionally affect all linked elements.

This is the problem with oversharing variables in SASS; it can increase the chance of unintentional mistakes if left unchecked.

## Pick a name, any name

A good name is so crucial to defining the meaning and reliability of a variable.

> There are two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.

It’s super easy to use the first name that pops into your head as sadly, naming things well is pretty difficult. Taking time to think about the long-term implications of the variable can save you time and misunderstanding in the long run. *Shortsighted SASS variable names are the new z-index: 9999*.

It’s surprisingly common to see colours defined like this:

- <code class="language-scss">$grey: #666;</code>
- <code class="language-scss">$grey-light: #EEE;</code>
- <code class="language-scss">$grey-dark: #333;</code>
- <code class="language-scss">$grey-darkest: #111</code>
- <code class="language-scss">$grey-darker: #000</code>


Another common candidate for shortsighted variable names is media query definitions. It’ll often start something like this:

- <code class="language-scss">$mq-mobile: 480px;</code>
- <code class="language-scss">$mq-tablet: 768px;
</code>
- <code class="language-scss">$mq-desktop: 1024px;</code>


But very quickly, it becomes apparent that the above won’t cut it, so names like <code class="language-scss">$mq-phablet</code> and <code class="language-scss">$mq-large-desktop</code> start to creep in.

Once you get to <code class="language-scss">$mq-phablet-and-a-bitlet</code> you realise that *specifying media query variable names is ultimately futile* and trying to shoehorn a component to work with a preset breakpoint ends up with a compromised end-product.

## The future of CSS

[Vanilla CSS variables](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care) are just around the corner and although the examples listed above are problematic, the SASS still gets processed down to hard-coded CSS. When native CSS variables come into play, these decisions will have live effects on websites and it’s going to be crucial that we as developers take variable naming and usage seriously.


