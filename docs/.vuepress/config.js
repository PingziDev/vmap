const pkg = require('../../package.json')

module.exports = {
  title: 'Vmap',
  description: pkg.description,
  base: '/vmap/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: {
      '/introduction/': [
        {
          title: '起步',
          collapsable: false,
          children: [
            { title: '安装', path: 'install' },
            { title: '快速上手', path: 'quick-start' },
          ],
        },
      ],
    },
    sidebarDepth: 1,
  },
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',
  ],
}
