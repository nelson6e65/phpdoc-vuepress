module.exports = {
  // Output build
  dest: 'dist/phpdoc-vuepress/',
  base: '/phpdoc-vuepress/',

  title: 'phpdoc-vuepress',
  description: 'Template for generating your PHP API documentation in a pretty VuePress format',
  ga: 'UA-58599811-1',

  markdown: {
    lineNumbers: false,
    toc: { includeLevel: [1, 2, 3] },
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' }, // Normal documentation link
      { text: 'Demo', link: '/demo/' }, // Your api documentation link
    ],

    sidebar: {
      '/guide/': [ // Normal documentation
        {
          title: 'Guide',
          collapsable: false,
          children: [ // Normal pages
            '',
            'getting-started',
            'configuration',
          ]
        }
      ],

      // Your API documentation
      // Here is where will be generated your files (`docs/demo/` in this case).
      // (This directory should be ignored by Git)
      '/demo/': [
        {
          title: 'Demo', // Title of your API documentation
          collapsable: false,
          children: [
            '', // Ref. to the `README.md` file
            'classes', // Ref. to the `classes.md` file
            'interfaces', // Ref. to the `interfaces.md` file
            'traits', // Ref. to the `traits.md` file
            'functions', // Ref. to the `functions.md` file
            'constants' // Ref. to the `constants.md` file
          ]
        }
      ],
      '/': [
        ''
      ]
    },
    sidebarDepth: 3,

    lastUpdated: true,

    // Repo
    repo: 'nelson6e65/phpdoc-vuepress',
    docsDir: 'docs',
    editLinks: true
  }
}
