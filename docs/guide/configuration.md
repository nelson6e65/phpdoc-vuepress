# Configuration

## Configuring phpDocumentor

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

> Yo can use [`phpdoc.dist.xml`](https://github.com/nelson6e65/phpdoc-vuepress/blob/master/phpdoc.dist.xml) of this repo as a guide.


## Configuring VuePress

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

> Read mor about recommended directory structure at [https://vuepress.vuejs.org/guide/directory-structure.html](https://vuepress.vuejs.org/guide/directory-structure.html)

> You can use [`docs/.vuepress/config.js`](https://github.com/nelson6e65/phpdoc-vuepress/blob/master/docs/.vuepress/config.js) used in this repo as an example.
