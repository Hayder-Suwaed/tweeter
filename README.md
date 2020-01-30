# Tweeter Project

Tweeter is a simple, single-page Twitter clone designed to demonstrate CSS and SASS styling, AJAX requests, form validation, and ux/ui. 

## Dependencies

- Express
- Node 5.10.x or above
- Autosize
- Body Parser
- Chance
- md5

## Getting Started
- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node index.js` command.



## Features

### Fully Responsive ###

A fully responsive design wth breakpoints at 450px, 768px, 1024px and 1400px.

Navbar is fixed in desktop view and scrolls with page in mobile view to preserve screen real estate.

!["Fully Responsive Design"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/responsive-page.png?raw=true)

### Animated SVGs andd interactve elements

Animated elements show user how to interact with the page. Some remain hidden until needed.


!["Jump-To-Top"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/toggle-to-top.png?raw=true)

Tweet elements have box-shadow effect on hover, and interactive buttons show coloured hover effects.

!["Bouncing-arrow"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/bounce-toggle.png?raw=true)

### Drop-down Element

New tweet box is hidden by default to add focus to tweet content and is accessible with a quick button click.

!["Tweet"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/tweet.png?raw=true)

### Asynchronous Interaction

Tweet asynchronously submit and load in to feed using AJAX.

!["Asynchronous interaction"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/responsive-page.png?raw=true)

### Error handling

Dynamic counter tracks user input and turned red to warn user they have exceed tweet limit. Submission attempts are marked by an inpage error screen which disappears after a timeout.

Textarea automatically expands with text.

!["Character counter"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/character-counter.png?raw=true)
!["Error messages"](https://github.com/Hayder-Suwaed/tweeter/blob/master/public/images/error-message.png?raw=true)