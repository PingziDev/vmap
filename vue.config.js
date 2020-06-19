var path = require('path')
module.exports = {
  pages: {
    index: 'examples/main.ts',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './examples'),
      },
    },
  },
}
