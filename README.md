# phpDocumentor VuePress template
[![Travis Build Status](https://img.shields.io/travis/nelson6e65/phpdoc-vuepress/master.svg?logo=travis)](https://travis-ci.org/nelson6e65/phpdoc-vuepress)
![PHP Versions](https://img.shields.io/travis/php-v/nelson6e65/phpdoc-vuepress.svg)

[![GitHub release](https://img.shields.io/github/tag/nelson6e65/phpdoc-vuepress.svg)](https://github.com/nelson6e65/phpdoc-vuepress/tags)
[![Latest Version](https://img.shields.io/packagist/v/nelson6e65/phpdoc-vuepress.svg?label=stable)](https://packagist.org/packages/nelson6e65/phpdoc-vuepress)
[![Latest unstable Version](https://img.shields.io/packagist/vpre/nelson6e65/phpdoc-vuepress.svg?label=unstable)](https://packagist.org/packages/nelson6e65/phpdoc-vuepress#dev-master)

[![License](https://img.shields.io/github/license/nelson6e65/phpdoc-vuepress.svg)](LICENSE)
[![Documentation](http://img.shields.io/badge/📜-Documentation-lightgrey.svg)](http://nelson6e65.github.io/phpdoc-vuepress)


Template for generating your PHP API documentation in a pretty VuePress format.

This package provides a **phpDocumentor** template to generates the API documentation of your code to be integrated in a nice looking [VuePress](https://vuepress.vuejs.org) project.

> Only tested with the default theme of VuePress.

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

> A real project API generated using this template: [nelson6e65.github.io/php_nml/api/](https://nelson6e65.github.io/php_nml/api/).


## Requirements

- PHP >= 5.6
- Node.js >= 8
- [phpDocumentor](https://www.phpdoc.org/). This template is designed for **phpDocumentor2** (is also compatible with upcoming **phpDocumentor3** for PHP 7.1+ project). You can install it with composer as global requirement:  `composer global require phpdocumentor/phpdocumentor`.
- [Yarn](https://yarnpkg.com) (or npm). To build the entire documentation with `vuepress`.
- [VuePress](https://v0.vuepress.vuejs.org/). `v0.x`, but may be compatible with upcoming `v1.0.0`.


## Installation

Install with composer:

```bash
composer require --dev nelson6e65/phpdoc-vuepress
```

> You may need to set the composer option [minimum-stability](https://getcomposer.org/doc/04-schema.md#minimum-stability) to 'dev' in order to be able to install pre-releases.


## Usage

Run phpDocumentor and set template as `vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress`:


```bash
phpdoc -d="src/" -t="docs/api/" --template="vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress"
```

> More information about the available arguments can be found at [running phpDocumentor](http://www.phpdoc.org/docs/latest/guides/running-phpdocumentor.html).


## Setup

### Configuring phpdoc

Add a file called `phpdoc.xml` with the following content to the root of your project and invoke the `phpdoc` command without arguments. Modify the configuration to suit your project.

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<phpdoc>
    <parser>
        <visibility>public,protected</visibility>
        <target>build/api-cache</target>
    </parser>

    <transformer>
        <target>docs/api</target>
    </transformer>

    <transformations>
        <template name="vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress" />
    </transformations>

    <files>
        <directory>src</directory>
    </files>
</phpdoc>
```

More information about [configuring phpDocumentor](http://www.phpdoc.org/docs/latest/references/configuration.html).

> Yo can use [`phpdoc.dist.xml`](phpdoc.dist.xml) of this repo as a guide.


### Configure routes in VuePress

Create a **`docs/.vuepress/config.js`** file like this:

```js
module.exports = {
  dest: 'dist/phpdoc-vuepress',
  base: '/phpdoc-vuepress/',

  markdown: {
    lineNumbers: false,
  },

  themeConfig: {        
    nav: [          
      { text: 'API', link: '/api/' },
    ],

    sidebar: {          
      '/api/': [ // `docs/api/` directory
        {
          title: 'API',
          collapsable: false,
          children: [
            '',
            'classes',
            'interfaces',
            'traits',
            'functions',
            'constants'
          ]
        }
      ],
      '/': [
        ''
      ]
    },
    sidebarDepth: 3,

    docsDir: 'docs',    
  }
}
```

> Read mor about recommended directory structure at https://vuepress.vuejs.org/guide/directory-structure.html

> You can use [`docs/.vuepress/config.js`](docs/.vuepress/config.js) used in this repo as an example.


## Further reading

Check the documentation for more information [https://nelson6e65.github.io/phpdoc-vuepress/](https://nelson6e65.github.io/phpdoc-vuepress/).


## License

[![License](https://img.shields.io/github/license/nelson6e65/phpdoc-vuepress.svg)](LICENSE)

Copyright (c) 2018-2019 Nelson Martell

Read the [`LICENSE` file](LICENSE) for details.

> **Note:** This template is based on Markdown template created by [@cvuorinen](https://github.com/cvuorinen): [cvuorinen/phpdoc-markdown-public](https://github.com/cvuorinen/phpdoc-markdown-public).
