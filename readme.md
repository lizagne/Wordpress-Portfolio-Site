#Converting my Static Bootstrap site into a Wordpress Theme with a Udemy Tutorial

After making my static site with Bootstrap, which is on a previous repo, the steps to take to convert it to a Wordpress Theme are:

1. Download latest Wordpress Files
2. Download Underscores theme from Underscores.me - this is a basic skeleton of a theme.
3. Put the Underscores theme files into the themes section of the Wordpress Files. (These Wordpress files have already been connected to my domain with 1&1.
4. In the admin area of my Wordpress change the Theme to the Underscores. 
5. Then start modularising the sections of Index.html in the static site, to the php pages in Wordpress. You do this by deleting certain default sections and then putting in my HTML! 
6. Also updating the relative paths to assets to the <php ?> part...this is similar to: <?php bloginfo('template_directory'); ?>/ infront of assets file path.













=== Bootstrap to Wordpress ===

Contributors: automattic
Tags: custom-background, custom-logo, custom-menu, featured-images, threaded-comments, translation-ready

Requires at least: 4.0
Tested up to: 4.8
Stable tag: 1.0.0
License: GNU General Public License v2 or later
License URI: LICENSE

A starter theme called Bootstrap to Wordpress.

== Description ==

A Custom Wordpress theme using Bootstrap

== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload Theme and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

== Frequently Asked Questions ==

= Does this theme support any plugins? =

Bootstrap to Wordpress includes support for Infinite Scroll in Jetpack.

== Changelog ==

= 1.0 - May 12 2015 =
* Initial release

== Credits ==

* Based on Underscores https://underscores.me/, (C) 2012-2017 Automattic, Inc., [GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html)
* normalize.css https://necolas.github.io/normalize.css/, (C) 2012-2016 Nicolas Gallagher and Jonathan Neal, [MIT](https://opensource.org/licenses/MIT)
