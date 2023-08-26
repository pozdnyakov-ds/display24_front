export default defineNuxtConfig({
  devServer: {
    port: 3001
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Display24 Admin",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      style: [],
      noscript: []
    }
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    locales: [
      { code: 'en', iso: 'en-EN', file: 'locales/en.js' },
      { code: 'ru', iso: 'ru-RU', file: 'locales/ru.js' }
    ]
  },
  imports: {
    dirs: ['stores'],
  },
})
