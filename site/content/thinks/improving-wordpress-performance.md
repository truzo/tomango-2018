---
title: "How to significantly improve the performance of your WordPress site"
seo_title: "24 ways you can improve WordPress site speed performance | Tomango"
author: "trys"
date: 2018-04-04 08:32:55
description: Read how we enhanced the performance of our website using an array of back-end and front-end techniques.
thinks/categories: 
 - tips-and-advice
 - web-design
---

As I've mentioned before, website speed is incredibly important. Search engines are beginning to penalise slow websites, but more importantly, users are voting with their feet when it comes to slow websites. Check out this [awesome infographic](https://blog.kissmetrics.com/loading-time/?wide=1) from KISSmetrics on how loading times affect your bottom line, it's quite an eye-opener.

When it came to building our new website, performance was at the front of my mind. It wasn't that performance was an issue for our previous site, rather due to changing technologies and a design involving a heavier emphasis on images and graphical content I knew that prioritising performance would be key.

This is going to be a technically-heavy article that will give you some practical, easy to apply examples for increasing WordPress performance.

## Ranking &amp; control

Before making any performance changes, getting a benchmark time in place is crucial. There's no point making numerous changes without knowing the original time to beat. I use the following services to benchmark performance:

- [Firefox](https://www.mozilla.org/en-US/firefox/developer/) (Developer edition) in-built network tab – This is great for quick A/B checking as well as more in depth analysis.
- [Pingdom](http://tools.pingdom.com/fpt/) – This service runs a number of performance tests on the website before giving you suggestions on how to improve the load time.
- [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) – Google's performance tester is very handy. Although it doesn't give the same level of detail that Pingdom and Firefox network tools do, it provides a great checklist of useful tweaks you can make to hit the 100/100 target they set.


The other key to performance updates is exercising control. Like any experiment, be it scientific or not, to gather any useful data from your updates, you need to maintain a control. Don't make ten different tweaks before testing them, work through a list of updates systematically, testing them as you go. You're far more likely to see sizeable performance gains if you fully understand each update. Equally, some of the updates require pretty fundamental changes to your site code – if you upload the changes and hit a major problem, Ctrl-z'ing back through multiple changes will not be fun.

Finally, try not to copy-paste snippets from the internet without testing and tweaking them. To get the largest gains, you'll want your changes to work specifically for you, not for the person who wrote the code originally.

## Back-end

The first main area where you can see large performance gains is on the server. This is everything that happens before your browser receives a single byte of data. These sorts of changes affect files that are foundational to your site, so remember: Backup, Backup, Backup. Both database and files, make sure you have deployable backups to hand.

### The WordPress theme

One of the most popular qualities of WordPress is how modifiable it is. Whether it's themes, widgets or plugins, all can be installed at the click of a button. No effort required and you've a great looking site – what's wrong with that..?

You might strike it lucky, a well-chosen list of plugins and a solid but lean theme could get you a great site. However, I have seen the absolute opposite far too many times. Hundreds of plugins, themes that throw dozens of unnecessary scripts and stylesheets onto each page, and let's not even mention the widgets.

The reason so many people love this facet of WordPress is the same reason that frustrates me. By using a theme that has been developed so that anyone can use it for any set of requirements, it has to be bulked out with so many elements and cover-all features and they all make a difference to site performance.

If you get the theme choice wrong, none of the tips below can help you, really. You'll spend more time fighting against an aggressively written theme than actually seeing performance gains.

A bespoke theme will not have this problem, you can pick and choose elements and features that meet your requirements then tweak them to work specifically for you. We write all of our own themes in-house; this gives us the best control for both visual elements and site performance. I would strongly recommend writing your own theme if you are able.

So in summary, write your own theme. Don't know how to do that? We build [bespoke WordPress websites](/creates/web/development/) – [contact us](/contact/) to see how we can help you.

### Plugins

Used well, plugins can help you abstract your site into a quick and maintainable system. Used poorly, plugins can be a drain on your website, bloating out and grinding it to a halt.

Much like themes, plugins are often far too tempting to install, too easy to forget about and too confusing to debug. Using a choice few plugins will make a big difference to your site speed. The publicly installable plugins used on this site are:

- [Advanced Custom Fields](http://www.advancedcustomfields.com)
- [Gravity Forms](http://www.gravityforms.com/)
- [WordPress SEO](https://wordpress.org/plugins/wordpress-seo/)
- [Disable Comments](https://wordpress.org/plugins/disable-comments/)
- [oAuth Twitter Feed for Developers](https://wordpress.org/plugins/oauth-twitter-feed-for-developers/)


They all have specific roles and they make my life as a developer far easier. This is how plugins should work: they should be lean, reliable and not cause you headaches. By keeping this list of plugins to a minimum, you are able to spend time getting to know how they work, how they can help you best and, importantly, how they can speed up your site.

Which leads me on to my favourite WordPress plugin:

### Advanced Custom Fields

This is a great plugin. Seriously, if you're still adding your own meta boxes and post meta fields or fiddling around with WordPress custom fields, check out this plugin. Although not perfect, ACF makes huge strides into making WordPress a respectable CMS, dragging it away from the __Oh, it's just a blogging platform__ connotations__.__

The best bit about ACF is the back-end UI – it's a joy to add content using ACF and that's what makes it so good. The API is pretty good too, the main downside to it comes from developer laziness.

#### Improving the API

ACF provides numerous handy [API functions](http://www.advancedcustomfields.com/resources/#functions) that will make your life easier, but it has its limits, especially when it comes to loops. It is tempting to use the *has_sub_field()* and *get_sub_field()* functions to work with the sub-fields in repeaters. You will, however, see a sizeable performance boost if you simply grab the field using *get_field()* and then work with it like any other PHP array.

I have found the best way to use ACF is to let it deal with all of the data entry and saving, let it serve me the raw data on the front-end, and I'll deal with passing that data around and making it work on the page.

#### Local JSON field groups

[Included in v5](http://www.advancedcustomfields.com/resources/local-json/), the addition of local JSON field groups gives you the option to significantly cut down on the number of database queries on every page load. ACF is inefficient when it comes to saving data in the options table and this is what causes unnecessary database queries. By following these simple steps, you can cut that right back:

- Back up your database (as always).
- Create a folder named 'acf-json' in your theme.
- Go through each existing field group in the admin area, load up the edit page and click 'Update'.
- Each group save will create a JSON file in the newly created acf-json folder. Ensure that the number of files matches the number of existing field groups.
- Save all of the JSON files locally (you'll need them again in a minute).
- Delete the JSON files from the server (make sure you've still got the backup versions locally).
- Delete all the field groups from the site (trash them and then empty the trash).
- Re-upload the JSON files to the 'acf-json' folder.


Check out the [JSON documentation](http://www.advancedcustomfields.com/resources/local-json/) on the ACF website to get a better understanding of how it works and how it can speed up your site load time.

#### Autoloading option fields

By default, ACF saves data in the options table with the 'autoload' column set to 'no'. This means that all data grabbed from the options table is served uncached, rather than using WordPress's great caching API. Although not the neatest fix, jump into your database management software, backup the database and for every option being served via ACF on every page load (whether that be company telephone number or registered address) swap the autoload value from 'no' to 'yes'. This will cut down by two queries per field on every page load!

### Queries

Inefficient database queries can be a source of website speed issues. I won't go into the detail of MySQL optimisation, we're using WordPress so we'll use what we have to hand.

To begin with, install a plugin called '[Debug queries](https://wordpress.org/plugins/debug-queries/)' (it's only temporary, don't worry!). This will list out every database query made when you load it on the front-end. To start with, head to the home page (make sure you're logged in as an administrator) and scroll past the footer; you should see a list of queries. Each query will give you useful information for debugging, including: the query itself, how long it took and where it was triggered from.

If you use ACF and don't use the local JSON system as listed above, you'll see a large number of *acf-field* hits on this page. If you're using non-autoloaded data served from the options table, you'll see each field listed here. Follow the instructions above to cut this right back.

Other queries might be from static content being served from the database on every page load. Other queries are generated from menus and widgets. You can't cut out the number of queries entirely, but you can minimise the number by being diligent and working through each one, weighing up whether you need it to be served via the database and removing it if necessary.

I decided to hard-code the telephone number and email address on our site. Still stored in one place within the theme, it's easy enough for me to update if we ever decide to change our contact details but it doesn't have an impact on the load time for every page. It's a difficult balancing act between ease-of-updating and performance, but for our use it felt better to hard-code the contact details.

### Cache &amp; Gzip

Harnessing cache is crucial to website speeds. If a user doesn't have to download a file or your server doesn't need to perform an action to generate the page, it's going to help speed up the site.

#### Gzip

Gzip is a server-side service that compresses the data being sent to the browser. The browser then uncompresses the file before serving it. This cuts down the amount of data being transferred massively and goes a long way to speeding up your site. The drawback is that the server and the browser need to work a little bit harder to compress/uncompress the content but it's definitely worth it when jQuery is served at 32KB instead of 93KB!

#### Browser caching

By specifying expiry dates in our .htaccess file, we can tell the browser to store the file locally for a defined amount of time. This means that static files such as CSS and JavaScript are not downloaded on every page load.

The following snippet tells browsers to cache CSS and JavaScript for a month:

```
ExpiresByType text/css        "access plus 1 month"
ExpiresByType text/javascript "access plus 1 month"
```

## Front-end

Load time can be significantly reduced by optimising the front-end of your website. These changes are generally less fundamental and are often slightly easier to implement than their back-end counterparts.

### HTTP requests

The number of assets your site requires correlates to the speed of the load. This is why reducing the number of HTTP requests is important. By combining files and cutting out unnecessary bloat, you can make some serious gains in performance.

To begin with, try concatenating as many local JavaScript libraries as possible. I say local because when it comes to external libraries like jQuery, using a CDN (content delivery network) version is more efficient.

#### CDN tangent

By serving common files from servers that are closest to your user, CDNs are able to react much quicker than your own server. JavaScript libraries like jQuery and common fonts from Google Web Fonts are better served from CDNs as they are so commonly used by sites around the world. Chances are, the user's computer already has a cached version of jQuery ready to go; by requesting a local version on your own server, you're actually increasing the number of files the user has to download before they can view your web page.

#### Back to HTTP requests

Once you've concatenated your JavaScript, do the same for CSS files. If you're feeling really keen, create a single image combining every required image to run your site, for example: company logo, social icons, navigation arrows. By serving a single file rather than multiple tiny files, you can cut down on the number of HTTP requests and allow the single image to be served from cache.

### SVG

Check out our article on [using SVG to speed up your website](/thinks/how-to-speed-up-your-website-using-svg/) to get top tips on serving images efficiently.

### Icon fonts

Icon fonts can be great for serving simple graphical elements to the user without using images. Just like a normal font, icon fonts convert a letter code into a glyph. For most fonts, that glyph represents the original letter, for icon fonts it just so happens that the glyph represents something entirely different. In my case, I use icon fonts for social icons, navigation arrows and a couple of UI elements. These would all be images, or at a minimum one larger image if I didn't use icon fonts.

For a long time I turned to [FontAwesome](http://fortawesome.github.io/Font-Awesome/) for my icon fonts. Then I discovered the awesomeness (that's a word – right?) that is [Fontello](http://fontello.com/). By only choosing the exact icons that I needed, I was able to create the perfect font for this site. I only needed 8–10 icons for this site so loading in all 519 icons from FontAwesome was completely over the top. By choosing the 10 FontAwesome icons within Fontello, I was able to decrease the size of the font file from 313KB to *just 6KB!* Pretty nifty, huh?

The one downside is that the file isn't being served by a CDN, but I'm happy that the performance boost from a tiny file more than makes up for that.

### Web fonts

The use of web typography has soared in recent times. Font services like [Typekit](http://typekit.com/) and [Google Web Fonts](https://www.google.com/fonts) have made it easy for us to harness the power and beauty of fonts that were previously unavailable online. They have also made it easy to dramatically increase the size of our web pages.

Our site uses three fonts from Google Web Fonts but, crucially, the design requires 13 different weights. That's a pretty chunky request there and without handling it properly, it could start to cause us some speed issues. Google have teamed up with Typekit to create the [WebFont Loader](https://github.com/typekit/webfontloader) a great library to asynchronously load in web fonts. By using an aync request, when the browser starts loading the fonts, instead of waiting for the font to be downloaded it simply carries on rendering the remainder of the page. Once the fonts are ready, the browser will render them in.

#### Using the WebFont Loader

```ja
WebFontConfig = {
    google: {
        families: [
            'Open+Sans:300,400:latin',
            'Roboto+Slab:300:latin',
            'Roboto:400,500:latin'
        ]
    }
};

(function() {
    var wf = document.createElement('script');
    wf.src = 'http://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
```

#### Subsetting

By simply adding *:latin* to the end of the font request, you can slim down the font request to just the characters you require. To get really picky, add a text parameter to the Google object in the WebFontConfig object, specifying each character.

### Image compression

The balance between quality images and performance is a difficult one. On the one side, we want to display our images in the best possible quality; on the other side, we don't want users to leave the site because the super high-quality image is taking an age to load.

For compression, I ran all images through [TinyJPG](http://tinyjpg.com/) before uploading them. Although this wasn't an automated option, it did give me the control to edit the image compression to suit.

We're also using a handy plugin written by [Alex](https://southan.me/) that stops WordPress creating an image for every single registered [image_size](http://codex.wordpress.org/Function_Reference/add_image_size) and only creates the image when it is requested. This way, we can register a number of image sizes without being worried about the server space ramping up.

Choosing an appropriate method for displaying responsive images is not easy, all have their advantages and disadvantages. I opted for a pretty straightforward JavaScript implementation that loads in a larger image if the user's screen is large enough to warrant it. By default, everybody gets a smaller (but usable) image served via the image src attribute, no JavaScript required.

### Critical CSS

By tailoring this [great snippet from Jeremy Keith](https://adactio.com/journal/8504), we're able to separate load-critical CSS and nice-to-have CSS and load them at different points, one inline within the header and the other asynchronously. Using cookies, this only affects the first load for a user once the main CSS file has been loaded, it gets cached and we don't need to worry about inlining the critical CSS. There's also a rather handy cache buster built in:

```php
<?php $v = '20150314';
if ( ! empty( $_COOKIE[ 'csscached' ] ) &amp;&amp; $_COOKIE[ 'csscached' ] === $v ) :?>

    <link rel="stylesheet" href="/wp-content/themes/tomango/style.<?php echo $v;?>.css" media="all" />

<?php else:?>

    <style>
        <?php include( 'assets/css/critical.css' );?>
    </style>
    <script>
        // loadCSS - @see https://github.com/filamentgroup/loadCSS
        loadCSS( '/wp-content/themes/tomango/style.<?php echo $v;?>.css' );
        document.cookie = 'csscached=<?php echo $v;?>;expires="Wed, 20 Jan 2040 10:20:10 GMT";path=/';
    </script>
    <noscript>
        <link rel="stylesheet" href="/wp-content/themes/tomango/style.<?php echo $v;?>.css" media="all" />
    </noscript>

<?php endif;?>
```

Teamed up with this .htaccess rewrite, we can version control our assets without query strings – just ensure that this goes above the initial WordPress Rewrite rules:

```
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)\.([0-9]*)\.(js|css)$ $1.$3 [L]
```

### Grunt &amp; automation

Many front-end updates can be automated using task runners such as [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/). Automation significantly speeds up front-end development and takes away the boring tasks such as the concatenation and minification of files.

I've opted for Grunt on this project and I'm using the following extensions:

- [jshint](https://github.com/gruntjs/grunt-contrib-jshint) – JavaScript linting
- [concat](https://github.com/gruntjs/grunt-contrib-concat) – for concatenating JavaScript and CSS files
- [uglify](https://github.com/gruntjs/grunt-contrib-uglify) – JavaScript compression
- [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) – CSS minification
- [criticalcss](https://github.com/filamentgroup/grunt-criticalcss) – calculating the load-critical CSS
- [browserSync](https://github.com/BrowserSync/grunt-browser-sync) – live reloading and screen syncing
- [watch](https://github.com/gruntjs/grunt-contrib-watch) – live grunt reloading

## In summary

Pushing for performance can be hard work. You can spend hours on one section to find that it makes an almost intangible improvement and spend seconds on another that'll make a large gain. Persistence does pay off.


