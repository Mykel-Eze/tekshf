// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/rex-icon.png' }
      ],
      title: 'Tekshf',
      titleTemplate: 'Tekshf - %s',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'bg-white',
      },
      meta: [
        { 
          name: 'author', 
          content: 'Tekshf' },
        {
          name: 'description',
          content: 'Your Gateway to AFCON 2025:  Morocco Awaits!',
        },
        {
          name: 'Keywords',
          content: 'Tekshf, Morocco, AFCON 2025, travel, visas, flight bookings, football, accommodation, hotels, tourism, travel agency, travel guide',
        },
        { name: 'theme-color', content: '#0433BF' },
      ],
    },
  },
  css: [
    // 'aos/dist/aos.css',
    'materialize-css/dist/css/materialize.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
  ],
})