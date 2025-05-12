// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/tekshf-icon.png' }
      ],
      title: 'Tekshf',
      // titleTemplate: 'Tekshf - %s',
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
    'aos/dist/aos.css',
    'materialize-css/dist/css/materialize.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})