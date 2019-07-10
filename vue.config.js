const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProd ? '/mysigmail/' : '/',
  outputDir: 'docs',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
