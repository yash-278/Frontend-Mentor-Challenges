# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Desktop](./completed%20designs/desktop.png)
![Mobile](./completed%20designs/mobile.png)

### Links

- Solution URL: [Github Repo](https://your-solution-url.com)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- SCSS/Sass

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="imgContainer">
  <img class="etherImg" src="./images/image-equilibrium.jpg" alt="mainImg" />
  <div class="overlay">
    <img class="viewIcon" src="./images/icon-view.svg" alt="viewIcon" />
  </div>
</div>
```

```css
.overlay {
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(178, 100%, 50%, 0.5);
  border-radius: 10px;
  transition: ease-in-out;
  transition-duration: 200ms;
  .viewIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
```

This allows the overlay div to be as the same size of the Image & we can set the `opacity: 1` on hover to make it visible.

### Useful resources

- [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/) - This helped me for generating box shadow easily. I really liked the way it visually shows the shadows and is really handy than making box shadows by ourselves.

## Author

- Website - [Yash Kadam](https://www.yashkadam.cf)
- Frontend Mentor - [@yash-278](https://www.frontendmentor.io/profile/yash-278)
- Github - [@yash-278](https://github.com/yash-278)
