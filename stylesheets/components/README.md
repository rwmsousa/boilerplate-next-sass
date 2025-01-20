# Components 🧩

Welcome to the "components" folder! This is where the building blocks of your project come to life. Get ready to create reusable and customizable components that will make your project stand out! 🚀

## What are these magical files?

-   **\_button.scss**: Defines the styles for buttons, making them interactive and visually appealing. 🔘

-   **\_cards.scss**: Contains styles for card components, perfect for displaying content in a structured way. 🃏

-   **\_carousel.scss**: Adds styles for carousel components, allowing you to create sliding content sections. 🎠

-   **\_cover.scss**: Defines styles for cover sections, ideal for creating impactful hero sections. 🖼️

-   **\_dropdown.scss**: Contains styles for dropdown menus, making them functional and stylish. 📂

-   **\_form.scss**: Defines styles for form elements, ensuring they are user-friendly and accessible. 📝

-   **\_section.scss**: Adds styles for section components, providing structure and layout to your pages. 📐

## How to Use These Powers?

Customize these magical files to create unique and reusable components for your project!

### 🔘 `_button.scss`

```scss
// Define the styles for buttons
.button {
    display: inline-block;
    padding: 0.625rem 1.25rem; // 10px 20px
    font-size: 1rem; // 16px
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 0.0625rem solid transparent; // 1px
    border-radius: 0.25rem; // 4px
    transition: all 0.3s ease;
}
```

### 🃏 `_cards.scss`

```scss
// Define the styles for card components
.card {
    padding: 1.25rem; // 20px
    background-color: $color-body;
    border-radius: 0.25rem; // 4px
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); // 2px 4px
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); // 4px 8px
    }
}
```

### 🎠 `_carousel.scss`

```scss
// Define the styles for carousel components
.carousel {
    display: flex;
    overflow: hidden;
    position: relative;
}
```

### 🖼️ `_cover.scss`

```scss
// Define the styles for cover sections
.cover {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
}
```

### 📂 `_dropdown.scss`

```scss
// Define the styles for dropdown menus
.dropdown {
    position: relative;
    display: inline-block;
}
```

### 📝 `_form.scss`

```scss
// Define the styles for form elements
.form {
    display: flex;
    flex-direction: column;
}
```

### 📐 `_section.scss`

```scss
// Define the styles for section components
.section {
    padding: 2rem 0;
    background-color: $color-background;
}
```

## Activating Your Powers

Now, it's time to summon these magical powers into your project! Add the following snippet to your `main.scss` file:

```scss
// Import the magical spells from the "components" folder
@import 'components/_buttons';
@import 'components/_cards';
@import 'components/_carousel';
@import 'components/_cover';
@import 'components/_dropdown';
@import 'components/_form';
@import 'components/_section';

// Now, let the magic begin! ✨🚀
```

And voilà! Your project is now equipped with the fundamental powers to create an incredible visual spectacle! 🎉🔥
