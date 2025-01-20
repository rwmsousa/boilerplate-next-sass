# Base 🎨

Welcome to the heart of your style, the "base" folder! This is where essential elements come to life and where your style choices are defined. Get ready to dive into the world of fundamental styles that will make your project shine! ✨

## What are these magical files?

-   **\_breakpoints.scss**: Controls the magic of how your layout adjusts to different screen sizes. 📱💻

-   **\_colors.scss**: Here are the magical potions that define the colors of your project. Choose wisely, oh great Color Wizard! 🌈

-   **\_effects.scss**: Adds tricks and transitions that make your elements dance and shine on the screen. ✨💃

-   **\_fonts.scss**: Invokes the powers of fonts to give your text a unique personality. 🖋️📜

-   **\_helpers.scss**: They are the loyal assistants that help simplify and organize your code. 🧙‍♂️🤝

-   **\_reset.scss**: Cleans up the magical mess of default browser styles to start with a blank canvas. 🧹🔮

-   **\_spacings.scss**: Defines the distances between elements, providing balance to your style kingdom. 📏🧰

-   **\_zindex.scss**: Classifies your elements in layers, ensuring each one has its place on the stage. 🎭🔍

## How to Use These Powers?

Get ready to customize these magical files and leave your mark on the world of styles!

### 🌈 `_colors.scss`

```scss
// Choose the colors that represent the identity of your project
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

### 📱 `_breakpoints.scss`

```scss
// Define breakpoints to make your layout responsive
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
```

### ✨ `_effects.scss`

```scss
// Add transitions and effects to bring your project to life
.card {
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
}
```

### 🖋️ `_fonts.scss`

```scss
// Choose the fonts that best tell the story of your project
$body-font: 'Roboto', sans-serif;
$heading-font: 'Montserrat', sans-serif;
```

### 🧙‍♂️ `_helpers.scss`

```scss
// Use mixins and helper functions to simplify your code
@mixin center-element {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### 🧹 `_reset.scss`

```scss
// Clean up the default browser mess
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 📏 `_spacings.scss`

```scss
// Define spacings to create balance in your layout
$spacing-unit: 16px;
```

### 🎭 `_zindex.scss`

```scss
// Classify your elements in layers
$z-index-header: 1000;
$z-index-modal: 2000;
```

## Activating Your Powers

Now, it's time to summon these magical powers into your project! Add the following snippet to your `main.scss` file:

```scss
// Import the magical spells from the "base" folder
@import 'base/_breakpoints';
@import 'base/_colors';
@import 'base/_effects';
@import 'base/_fonts';
@import 'base/_helpers';
@import 'base/_reset';
@import 'base/_spacings';
@import 'base/_zindex';

// Now, let the magic begin! ✨🚀
```

And voilà! Your project is now equipped with the fundamental powers to create an incredible visual spectacle! 🎉🔥
