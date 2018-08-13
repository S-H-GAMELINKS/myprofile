const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/myprofile/'
  }
} : {}

module.exports = {
  routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: 'myprofile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ],
    script: [{ src: './js/404-redirect-ghpages.js' }]
  },
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    vendor: ['vue-animejs'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    './plugins/element-ui',
    './plugins/vue-animejs'
  ],
  css: [
    './element-ui/lib/theme-chalk/index.css'
  ]
}

