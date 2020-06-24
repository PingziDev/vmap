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
          title: '快速上手',
          collapsable: false,
          children: [
            { title: '安装', path: 'install' },
            { title: '地图示例', path: 'map-demo' },
            { title: '标记示例', path: 'marker-demo' },
            { title: '地址搜索示例', path: 'search-demo' },
            { title: '定位示例', path: 'location-demo' },
            { title: '综合示例', path: 'composite-demo' },
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
