import colors from 'vuetify/es5/util/colors'
import en from './lang/en-US.js'
import es from './lang/es-ES.js'

export default {
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fonts.css'],

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
        // en: {
        //   navitationMenu: {
        //     home: 'home',
        //     aboutUs: 'about us',
        //     services: 'services',
        //     coverage: 'coverage',
        //     contactUs: 'contact us',
        //     contactUsQuote: 'Quote',
        //     contactUsCarrier: 'Omni Carriers',
        //   },
        //   home: {
        //     title: 'Logistics services in México and United States',
        //     titleSubText: 'We help you make it possible',
        //     servicesSection: {
        //       title:
        //         'We want to be part of your supply and distribution chain!',
        //       storage: 'Storage',
        //       ltransport: 'Land Transport',
        //       taDistributiont: 'Transport & Distributiont',
        //       iae: 'Import & Export',
        //       view: 'view service',
        //     },
        //     reasonswhy: {
        //       title: 'Reasons why we are your best option!',
        //       textOne:
        //         'Solutions up to scale: We offer experience and flexibility to satisfy any type of project',
        //       textTwo:
        //         'Track & Trace: Constant monitoring of merchandise visualizing load’s location at all times',
        //       textThree:
        //         'Competitive rates: Maintaining quality in our services every time',
        //       textFour:
        //         'Guaranteed safety: Making sure our strategic partners comply with our necesary permits in order to be part of our operation and guarantee the safety of your load',
        //     },
        //   },
        // },
        // es: {
        //   navitationMenu: {
        //     home: 'Inicio',
        //     aboutUs: 'Sobre',
        //     services: 'Servicios',
        //     coverage: 'Covertura',
        //     contactUs: 'Contactanos',
        //     contactUsQuote: 'Cuota',
        //     contactUsCarrier: 'Omni Carrier',
        //   },
        //   home: {
        //     title: 'Servicios Logísticos en México & Estados  Unidos',
        //     titleSubText: 'Te ayudamos a hacerlo posible',
        //     servicesSection: {
        //       title:
        //         '¡Queremos ser parte de tu cadena de distribución y suministro!',
        //       storage: 'Almacenaje',
        //       ltransport: 'Transporte Terrestre',
        //       taDistributiont: 'Transporte & Distribución',
        //       iae: 'Importación & Exportación',
        //       view: 'ver servicio',
        //     },
        //     reasonswhy: {
        //       title: 'Razones por las cuales somos tu mejor opción!',
        //       textOne:
        //         'Soluciones a la medida: Contamos con experiencia y flexibilidad para satisfacer cualquier tipo de proyecto.',
        //       textTwo:
        //         'Trazabilidad: Monitoreamos constantemente su mercancía para que usted sepa en todo momento dónde se encuentra su carga.',
        //       textThree:
        //         'Tarifas competitivas: Manteniendo en todo momento la calidad de nuestros servicios.',
        //       textFour:
        //         'Seguridad garantizada: Asegurándonos que nuestros aliados estratégicos cumplan con los permisos necesarios para poder ser parte de nuestra operación y garantizar la seguridad de su carga. ',
        //     },
        //   },
        // },
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
    debug: {
      enabled: true,
      sendHitTask: true,
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-217218723-1',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/sass/index.scss'],
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
  build: {},
}
