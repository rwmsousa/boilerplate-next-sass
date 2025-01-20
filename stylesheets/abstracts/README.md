# Abstracts 📚

Welcome to the "abstracts" folder! This is where the core of your styles is defined, including variables, mixins, and functions. Get ready to dive into the foundational styles that will make your project shine! ✨

## What are these magical files?

-   **\_variables.scss**: Defines the variables that will be used throughout your project. 🎨

-   **\_mixins.scss**: Contains reusable pieces of code to avoid repetition. 🔄

-   **\_functions.scss**: Defines functions to perform calculations and return values. 🧮

## How to Use These Powers?

Customize these magical files to leave your mark on the world of styles!

### 🎨 `_variables.scss`

```scss
// Define the variables that represent the identity of your project
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

### 🔄 `_mixins.scss`

```scss
// Use mixins to simplify your code
@mixin center-element {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### 🧮 `_functions.scss`

```scss
// Define functions to perform calculations
@function calculate-rem($size) {
    $rem-size: $size / 16px;
    @return #{$rem-size}rem;
}
```

## Activating Your Powers

Now, it's time to summon these magical powers into your project! Add the following snippet to your `main.scss` file:

```scss
// Import the magical spells from the "abstracts" folder
@import 'abstracts/_variables';
@import 'abstracts/_mixins';
@import 'abstracts/_functions';

// Now, let the magic begin! ✨🚀
```

And voilà! Your project is now equipped with the fundamental powers to create an incredible visual spectacle! 🎉🔥
