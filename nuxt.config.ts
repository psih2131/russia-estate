// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/style/main.scss'],
  modules: ['nuxt-swiper', 'vue-yandex-maps/nuxt', '@pinia/nuxt'],
  yandexMaps: {
    apikey: '3f39c994-7cf5-46f9-9a95-ead825d2a02c',
  },

})