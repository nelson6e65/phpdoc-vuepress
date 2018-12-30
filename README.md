# phpDocumentor VuePress template

[![GitHub release](https://img.shields.io/github/tag/nelson6e65/phpdoc-vuepress.svg)](https://github.com/nelson6e65/phpdoc-vuepress/tags)
[![Latest Version](https://img.shields.io/packagist/v/nelson6e65/phpdoc-vuepress.svg?label=stable)](https://packagist.org/packages/nelson6e65/phpdoc-vuepress)
[![Latest unstable Version](https://img.shields.io/packagist/vpre/nelson6e65/phpdoc-vuepress.svg?label=unstable)](https://packagist.org/packages/nelson6e65/phpdoc-vuepress#dev-master)

[![License](https://img.shields.io/github/license/nelson6e65/phpdoc-vuepress.svg)](LICENSE)


[phpDocumentor template](http://www.phpdoc.org/docs/latest/getting-started/changing-the-look-and-feel.html) that generates [VuePress](https://vuepress.vuejs.org) documentation of your API.

The main use-case for this template is to generate simple and nice looking API documentation pages to be integrated in a VuePress project.

> Only tested in the default theme of VuePress.

> **Special note:** This template is based on Markdown template created by [@cvuorinen](https://github.com/cvuorinen) in [cvuorinen/phpdoc-markdown-public](https://github.com/cvuorinen/phpdoc-markdown-public).


## Demo

Check a demo of documentation generated with this template in https://nelson6e65.github.io/php_nml/api/.

> See also the sources in [nelson6e65/php_nml](https://github.com/nelson6e65/php_nml) repo for configuration examples.


## Installation

Install with composer:

```bash
composer require --dev nelson6e65/phpdoc-vuepress
```


> At the moment, this package has not PHP dependencies for usage,

> You may need to set the composer option [minimum-stability](https://getcomposer.org/doc/04-schema.md#minimum-stability) to 'dev' in order to be able to install pre-releases.

## Usage

> Is highly recommended to use a global installation of `phpdoc`, vua composer global (`composer global require --dev phpdocumentor/phpdocumentor`) or the `.phar` file.

Run phpDocumentor and set template as `vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress`.

**Example using command-line arguments:**

```bash
phpdoc --directory=src/ --target=docs/api/ --template="vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress" --title="My Project Documentation"
```

More information about the available arguments can be found at [running phpDocumentor](http://www.phpdoc.org/docs/latest/guides/running-phpdocumentor.html).

**Example using configuration file:**

Add a file called `phpdoc.xml` with the following content to the root of your project and invoke the `phpdoc` command without arguments. Modify the configuration to suit your project.

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<phpdoc>
    <title>My Project Documentation</title>
    <parser>
      <target>output/doc</target>
      <visibility>public,protected</visibility>
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

**Default visibility**
By default, all members are parsed. If you want to ignore the private members, you should config the `visibility` option of `phpdoc`:

```xml
  <parser>
    <!-- Only Public and Protected members are parsed -->
    <visibility>public,protected</visibility>
  </parser>
```

```xml
  <parser>
    <!-- Only Public members are parsed -->
    <visibility>public</visibility>
  </parser>
```

```xml
  <parser>
    <!-- Only private members are parsed -->
    <visibility>private</visibility>
  </parser>
```

More information about [configuring phpDocumentor](http://www.phpdoc.org/docs/latest/references/configuration.html).

### Configure routes in VuePress

**Example for your `.vuepress/config.js` file:**

```js
module.exports = {  
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }, // Navbar link to API
    ],

    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          // ... other pages
        ]
      },      
      { // Sidebar Links to API
        title: 'API',
        collapsable: false,
        children: [
          '/api/', // README.ms
          '/api/classes', // classes.md
          '/api/interfaces', // interfaces.md
          '/api/traits', // traits.md
          '/api/functions', // functions.md
          '/api/constants', // constants.md
        ]
      }
    ],

    docsDir: 'docs'
  }
}
```

> Read mor about recommended directory structure at https://vuepress.vuejs.org/guide/directory-structure.html

**Recommendation:** You can add the API route to your `.gitignore` file, since this files are auto-generated with the `phpdoc` tool.
