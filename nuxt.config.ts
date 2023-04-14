// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: [ '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    pinia: {
      autoImports: [
          // Automatically imports `defineStore`
          'defineStore', // This will import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // This will import { defineStore as definePiniaStore } from 'pinia'
      ],
  },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
