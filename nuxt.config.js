module.exports = {
  /*
  ** Headers of the page
  */

  env: {
    strapiBaseUri: process.env.API_URL || "https://strapi.constructorespositivos.com/graphql",
    baseURL: "https://strapi.constructorespositivos.com",
    strapiJwt: process.env.STRAPI_JWT || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0ODM0ODU0LCJleHAiOjE2Mjc0MjY4NTR9.f92_JmR40Xq4VIBFJGpvEk9i4mK8874zgFYZ3uUu2gM",
  },
  head: {
    title: 'Constructores Positivos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Constructores Positivos,Encuentra la casa de tus sueños en el barrio de tus sueños' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  // script: [
  //   {
  //     src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrRGbF6Wb7-oT0Qt6rMYfTPXsL_rBClWI&libraries=places',
  //     client: true
  //   }
  // ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    transpile: ['vee-validate', /^vue2-google-maps($|\/)/],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    '@nuxtjs/apollo',
    'bootstrap-vue/nuxt',
    '@nuxtjs/fontawesome',
    '@nuxtjs/markdownit',
    'nuxt-vue-select',
    'vue-scrollto/nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/google-analytics',
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyDrRGbF6Wb7-oT0Qt6rMYfTPXsL_rBClWI",
        libraries: ['places']
      }
    ],

    // ['nuxt-google-maps-module', {
    //   /* module options */
    //   key: 'AIzaSyDrRGbF6Wb7-oT0Qt6rMYfTPXsL_rBClWI', // Default
    // }],
  ],
  'gtm': {
    id: 'GTM-T8MR3TL',
    pageTracking: true,
  },
  googleAnalytics: {
    id: 'UA-187905867-3'
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader',],
      },
    ],
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "https://strapi.constructorespositivos.com/graphql"
      }
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  css: ['@/assets/scss/custom.scss'],
  plugins: [
    { src: "~/plugins/vue2-google-maps", ssr: true },
    { src: "~/plugins/vue-browser-geolocation", ssr: true },
    { src: "~/plugins/maps.client" },
    { src: "~/plugins/hotjar", ssr: false },
    { src: "~/plugins/axios-errors", ssr: false },
    ],
  fontawesome: {
    imports: [

      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ],
  },
  components: true

}

