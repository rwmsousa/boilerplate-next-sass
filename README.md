# Boilerplate Sass

This project uses [Sass](https://sass-guidelin.es/), a CSS preprocessor that allows the use of variables, nesting, mixins, inheritance, and other interesting features that make writing CSS more powerful and flexible.

The project follows the 7-1 architecture of Sass, which is a structure to organize Sass files into seven folders and one main file. This structure helps keep the code organized and makes project maintenance easier.

After installation, you will have the option to view various components in your browser and see how the architecture is used in a frontend application with ReactJS and NextJS.

## Project Objective

Provides an architecture option with Sass and practical application in NextJS for community developers. See the [Demo](https://boilerplate-next-sass.vercel.app/).

## Features
- Established [NextJS](https://nextjs.org/) architecture
- Established 7-1 [Sass](https://sass-guidelin.es/) architecture
- Component examples
- Examples of global styling of tags and components with Sass
- [Eslint](https://eslint.org/) configuration
- [Prettier](https://prettier.io/) configuration
- [Jest](https://jestjs.io/) and Coverage configuration
- [Husky](https://typicode.github.io/husky/) configuration
- [Commitlint](https://commitlint.js.org/#/) configuration
- Pre-commit pipeline with Prettier and Eslint
- Commit-msg pipeline with Commitlint
- Pre-push pipeline with build and unit tests
- CI/CD with workflow on [Github Actions](https://github.com/features/actions) with linter check, prettier check, and unit tests
- Automated versioning [semantic-release](https://semantic-release.gitbook.io/) - to be developed

## Prerequisites

-   Node.js
-   npm
-   Docker

## Installation

Clone the repository to your local machine and install the dependencies:

```bash
git clone git@github.com:rwmsousa/boilerplate-next-sass.git
cd boilerplate-next-sass
npm install
```

## Build

To build the project, run the following command:

```bash
make build
```

## Run

```bash
make run
```

Access: http://localhost:3000

## Documentation

For more information on the different aspects of the project, see the following READMEs:

[Abstracts](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/abstracts/README.md)

[Base](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/base/README.md)

[Components](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/components/README.md)

[Layout](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/layout/README.md)

[Pages](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/pages/README.md)

[Themes](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/themes/README.md)

[Vendors](https://github.com/rwmsousa/boilerplate-next-sass/blob/master/stylesheets/vendors/README.md)

## Contribution

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Contributions are always welcome! If you have an improvement or correction, feel free to fork the repository and submit a pull request. If you have any questions or suggestions, you can open an issue.

## License

Copyright (c) 2023 - [Ricardo Sousa](https://github.com/rwmsousa)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
