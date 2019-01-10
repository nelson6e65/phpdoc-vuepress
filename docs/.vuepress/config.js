module.exports = {
  // Output build
  dest: 'dist/phpdoc-vuepress/',
  base: '/phpdoc-vuepress/',

  title: 'phpdoc-vuepress',
  description: 'VuePress template for phpDocumentor',
  ga: 'UA-58599811-1',

  markdown: {
    lineNumbers: false,
    toc: { includeLevel: [1, 2, 3] },
  },

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Demo', link: '/demo/' },
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'configuration',
          ]
        }
      ],
      '/demo/': [
        {
          title: 'Demo',
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

    lastUpdated: true,

    // Repo
    repo: 'nelson6e65/phpdoc-vuepress',
    docsDir: 'docs',
    editLinks: true
  }
}
