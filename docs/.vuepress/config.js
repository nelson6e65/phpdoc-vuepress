module.exports = {
  // Directory where will be generated the HTML files by VuePress
  dest: 'dist/phpdoc-vuepress/',

  // Base URL. Useful for GitHub pages.
  base: '/phpdoc-vuepress/',

  // Title of your project
  title: 'PHPDoc-VuePress',

  // Description of your project
  description: 'Template for generating your PHP API documentation in a pretty VuePress format',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }], // Custom favicon
  ],

  // Plugins config
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-58599811-1', // GoogleAnalytics ID (optional. use your own ga)
    },
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' }, // Link to a non-api-documentation section
      { text: 'API (demo)', link: '/demo/' }, // Lint to our API documentation route
    ],

    sidebar: {
      '/guide/': [
        // Normal documentation sidebar
        {
          title: 'Guide',
          collapsable: false,
          children: [
            // Normal pages
            '',
            'getting-started',
            'configuration',
          ],
        },
      ],

      // Your API documentation sidebar
      // Here is where will be generated your files (`docs/demo/` in this case).
      // This is the directory you configured in your `phpdoc.dist.xml` as target
      // directory (or `-t` option of phpdoc)
      '/demo/': [
        {
          title: 'API Demo',
          collapsable: false,
          children: [
            //
            '', // Ref. to the `README.md` file
            'classes', // Ref. to the `classes.md` file
            'interfaces', // Ref. to the `interfaces.md` file
            'traits', // Ref. to the `traits.md` file
            'functions', // Ref. to the `functions.md` file
            'constants', // Ref. to the `constants.md` file
          ],
        },
      ],
      '/': [''],
    },

    // You can ignore the following optional customizations --------------------

    markdown: {
      lineNumbers: false,
      toc: { includeLevel: [1, 2, 3] },
    },

    sidebarDepth: 3,

    lastUpdated: true,

    evergreen: true,

    // Repository configurations
    repo: 'nelson6e65/phpdoc-vuepress',
    docsDir: 'docs',
    editLinks: true,
  },

  // custom webpack configuration
  configureWebpack: {
    resolve: {
      alias: {
        // Aliases
        '@github': '../../.github/assets',
      },
    },
  },
};
