[![Card](./.github/assets/card.svg)](https://nelson6e65.github.io/phpdoc-vuepress)

# PHPDoc-VuePress

[![Travis Build Status](https://img.shields.io/travis/nelson6e65/phpdoc-vuepress/master.svg?logo=travis)](https://travis-ci.org/nelson6e65/phpdoc-vuepress)
![PHP Versions](https://img.shields.io/travis/php-v/nelson6e65/phpdoc-vuepress.svg)

[![GitHub release](https://img.shields.io/github/tag/nelson6e65/phpdoc-vuepress.svg)](https://github.com/nelson6e65/phpdoc-vuepress/tags)
[![Latest Version](https://img.shields.io/packagist/v/nelson6e65/phpdoc-vuepress.svg?label=stable)](https://packagist.org/packages/nelson6e65/phpdoc-vuepress)
[![Latest unstable Version](https://img.shields.io/packagist/vpre/nelson6e65/phpdoc-vuepress.svg?label=unstable)](https://packagist.org/packages/nelson6e65/phpdoc-vuepress#dev-master)

[![License](https://img.shields.io/github/license/nelson6e65/phpdoc-vuepress.svg)](LICENSE)
[![Documentation](http://img.shields.io/badge/📜-Documentation-lightgrey.svg)](https://nelson6e65.github.io/phpdoc-vuepress)
[![Wakatime](https://wakatime.com/badge/github/nelson6e65/phpdoc-vuepress.svg)](https://wakatime.com/badge/github/nelson6e65/phpdoc-vuepress)

Template for generating your PHP API documentation in a pretty VuePress format.

This package provides a **phpDocumentor 2** template to generate the API documentation of your code to be integrated in a nice looking [VuePress](https://vuepress.vuejs.org) project.

> **WIP**: 🚧🏗 Compatibility with phpDocumentor 3 in progress.

## Features

This template will generate six VuePress `*.md` files with the DocBlock documentation in your target directory:

- `README.md`: Entry point of your API Documentation. Contains, at the moment, an introduction and references to blocks used in the site.
- `classes.md`: Contains all classes, sorted by namespace.
- `interfaces.md`: Contains all interfaces, sorted by namespace.
- `traits.md`: Contains all traits, sorted by namespace.
- `constants.md`: Contains all global constants, sorted by namespace.
- `functions.md`: Contains all global functions, sorted by namespace.

## Demo

Check a demo of documentation generated with this template in http://nelson6e65.github.io/phpdoc-vuepress/demo/

Explore sources of [nelson6e65/phpdoc-vuepress](https://github.com/nelson6e65/phpdoc-vuepress) to use configuration files as guide.

> A real project API generated using this template: [nelson6e65/php_nml](https://php-nml.netlify.app/api/).

## Requirements

- PHP >= 5.6 < 8.0
- Node.js >= 8 < 18
- [phpDocumentor](https://www.phpdoc.org/) 2.
- [Yarn](https://yarnpkg.com) (or npm)
- [VuePress](https://vuepress.vuejs.org/).

> This template is designed for [phpDocumentor 2](https://www.phpdoc.org/) and [VuePress 1](https://v0.vuepress.vuejs.org/).
> Read more about dependencies in the [Documentation](https://nelson6e65.github.io/phpdoc-vuepress/guide/getting-started.html).

> Note: phpDocumentor 2 is able to generate documentation of code written on maybe any version of PHP < 8, but should be run on PHP 7.2. You can configure a CI like Travis CI, Netlify of Github Actions to generate the documentation on PHP 7.2 for your code if not using it on your local environment. Compatibility with phpDocumentor 3 is in progress 🚧 to support new features it offers.

## Installation

Install `nelson6e65/phpdoc-vuepress` with composer:

```bash
composer require --dev nelson6e65/phpdoc-vuepress
```

> **Note for pre-releases:** You may need to set the composer option [minimum-stability](https://getcomposer.org/doc/04-schema.md#minimum-stability) to 'dev' or 'beta' in order to be able to install pre-releases.

## Usage

Run phpDocumentor and set template as `vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress`:

```bash
phpdoc -d="src/" -t="docs/api/" --template="vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress"
```

> More information about the available arguments can be found at [running phpDocumentor](http://www.phpdoc.org/docs/latest/guides/running-phpdocumentor.html).

## Configuration

See the [Configuration section in the documentation](https://nelson6e65.github.io/phpdoc-vuepress/guide/configuration.html) for setup examples.

## Further reading

Check the documentation for more information [https://nelson6e65.github.io/phpdoc-vuepress/](https://nelson6e65.github.io/phpdoc-vuepress/).

## License

[![License](https://img.shields.io/github/license/nelson6e65/phpdoc-vuepress.svg)](LICENSE)

Copyright (c) 2018-2023 Nelson Martell

Read the [`LICENSE` file](LICENSE) for details.

> **Note:** This template is based on Markdown template created by [@cvuorinen](https://github.com/cvuorinen): [cvuorinen/phpdoc-markdown-public](https://github.com/cvuorinen/phpdoc-markdown-public).
