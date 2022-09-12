import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules:["@pinia/nuxt",'@nuxtjs/supabase'],
    css: ['@/assets/css/style.css'],
    build: {
      postcss: {
        postcssOptions: require('./postcss.config.js'),
      },
    }
  })