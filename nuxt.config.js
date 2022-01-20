import colors from 'vuetify/es5/util/colors'
import en from './lang/en-US.js'
import es from './lang/es-ES.js'

module.exports = {
  mode: 'universal',
  // srcDir: 'src',
  buildDir: 'functions/.nuxt',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      titleTemplate: '%s - omni-web',
      ...i18nHead.title,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta,
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fonts.css', '@mdi/font/css/materialdesignicons.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vuelidate' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/recaptcha',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/api/index.js',
    },
  ],

  recaptcha: {
    language: 'en',
    version: 2,
    siteKey: '6Le1KBAeAAAAAOo4UoCiV00dKuP-0fNnT8H10_aD',
    size: 'normal',
  },

  i18n: {
    // SEO
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    baseUrl: 'https://my-nuxt-app.com',
    seo: true,
    parsePages: true,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    rootRedirect: {
      statusCode: 301,
      path: 'home',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'es',
        iso: 'es-ES',
      },
    ],
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        es,
      },
    },
  },

  sitemap: {
    hostname: 'http://localhost:3000',
    i18n: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Google api: https://google-analytics.nuxtjs.org
  googleAnalytics: {
    id: 'UA-217218723-1',
    disabled: true,
    autoTracking: {
      screenview: true,
    },
    // debug: {
    //   enabled: false,
    //   sendHitTask: false,
    // },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-217218723-1',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
}
