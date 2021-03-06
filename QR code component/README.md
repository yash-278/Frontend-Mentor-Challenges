# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![Desktop](./completed/desktop.png)
![Mobile](./completed/mobile.png)

### Links

- Solution URL: [Github Repo](https://github.com/yash-278/Frontend-Mentor-Challenges/tree/main/QR%20code%20component)
- Live Site URL: [Demo](https://yash-278.github.io/Frontend-Mentor-Challenges/QR%20code%20component/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Mobile-first workflow

### What I learned

Centering an element with transform property in CSS.

Example:

```html
<div class="card">...</div>
```

```css
.card {
  max-width: 300px;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
}
```

This makes it so that the `.card` is shifted down to `top: 50%` of the page & `transform: translateY(-50%)` centers the element vertically by pushing half of the element above, essentially centering the element.

This trick can be used for horizontal centering too, but it's more useful for vertical center.

### Useful resources

- [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/) - This helped me for generating box shadow easily. I really liked the way it visually shows the shadows and is really handy than making box shadows by ourselves.

## Author

- Website - [Yash Kadam](https://www.yashkadam.cf)
- Frontend Mentor - [@yash-278](https://www.frontendmentor.io/profile/yash-278)
