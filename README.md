
6/18/18

# STOMP Snowboards e-commerce site

My first real attempt at a designing / programming a e-commerce site from scratch. This git represents the site in it's MOST alpha state, and is missing a lot of functionality and features. I worked on this site during my intermission week at Turing, and will be putting it on hold until the next intermission week. Hopefully by then I'll have a slew of new ideas for it's design, purpose, and getting a lot of it's logic down. Maybe even some backend.

## Todo

Hooboy, there are lots of things that need addressing.

#### Nav-bar
- Countdown non-sticky navigation bar needs it's remove() function to work again.
- Maybe make it bigger, bolder, easier to notice
- Add function to make it hide after the user scrolls passed a certain point
- Sticky nav isn't actually sticky anymore. Consider moving it to the bottom of the first slide and then stick to top after scrolling passed a certain point.
- The bottom border on the nav isn't touching the bottom of the container, nor is it touching the bottom of the words. Figure out what you're trying to do with this and make it look better
- The STOMP logo on the left is ugly and boring. 
- The STOMP logo on the left should appear there after scrolling passed a the main container. 

#### Hero Landing
- The giant, plain-text font landing text here is ugly. I'm no longer a fan of it, though I don't know what to replace it with.
- The background image needs to be optimized, and it needs to represent STOMP in some way. Maybe change the background image to a carousel or a collection of images that fade in and out. One (or more, preferably more) of those images in the carousel need to have pictures of people wearing STOMP products. 
- The button should look better when it's on a different background.

#### First Divider
- The entire site (outside of the main landing container) should have more margin on the left and right. About the size of the social grid container
- Trim down on the spacing between the cards in the divider
- add grid columns to the size options so they're evenly sized/spaced and any hover effects trigger properly
- add functionality that deletes cards on click
- add functionality that adding to cart adds the items to your cart
- add functionality that clicking add to cart increases the counter by 1
- add functionality that clicking remove from cart removes the item from your cart
- add functionality that clicking remove from cart decreases the counter by 1
- add functionality that clicking hide overlay only raises the overlay, and disables the add to cart button
- add functionaltiy that changes the add to cart button to an "already added" button
- add functionality that requires the user to select a size before adding to cart
- fix sizing hover effects
- add another row ( or two ) of products that are overflow hidden and populate the area of a remove()'d card
- add ability to flip over the card and read a small blurb about it.

#### Summer Sale Hero Landing
- Fix this entire thing. It's too big, it's not cropped right, the text is in an <li> which prevents it from looking like all the other h2's on the page, etc. This part's a mess. It could be also be a carousel
- Infact, THIS is where we should have a rotating image carousel, not the landing image.
- ... right?;
  
#### 2018 Sneak Peek
- idk what to do with this. Get rid of it? it's unnecessary

#### Social Grid
- I love this

#### Footer 
- add dummy page landing for each link
- add button to mailing list and search for store inputs
- add (dummy) functionality for both
