const titulo = 'Integración y gestión avanzada de datos para inteligencia artificial'

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/_variables.sass"`,
      },
    },
  },
  chainWebpack: config => {
    // Mantener la configuración existente del título
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}
