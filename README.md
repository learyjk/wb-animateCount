# Animate Count

## What is it?

A lightweight javascript animation to count numbers up or down with a few customizeable options for no-coders.

![demo animation](/assets/animateCount.gif)

## Demo

https://wb-countup.webflow.io/

## Installation

1. Add the script below before your `</body>` tag.

2. Add the following attribute to a text block: `wb-data="aniamte-count"`

![setup screen 1](/assets/setup-screen1.webp)
![setup screen 2](/assets/setup-screen2.webp)

3. Customize it!

`duration` - Set animation duration in ms i.e. 5000 for 5 seconds. Default is 2000ms
`reverse` - Set to `'true'` is you want your animation to count down instead of up.
`count-down-to` - Set number count down should end on. Default is 0.
`ease` - Set the easing, options are below:

## Easings

Visualize at https://easings.net/

`linear`
`easeInQuad`
`easeOutQuad`
`easeInOutQuad`
`easeInCubic`
`easeOutCubic`
`easeInOutCubic`
`easeInQuart`
`easeOutQuart`
`easeInOutQuart`
`easeInQuint`
`easeOutQuint`
`easeInOutQuint`
