var path = require('path')
module.exports = {
  publicPath: '',
  configureWebpack: {
    entry: {
      app: './examples/main.ts',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './examples'),
      },
    },
  },
}
