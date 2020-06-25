module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@vita2333/vmap',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
        style: false,
      },
    ],
  ],
}
