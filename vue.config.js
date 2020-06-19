var path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-amap2.0/'
    : '',
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
