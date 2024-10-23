export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
          },
          colors: {
            'primary-background': '#FFFFFF0A',
            'primary-border': '#FFFFFF14'
          }
        }
      }
    }
  },
  googleFonts: {
    families: {
      Montserrat: true
    }
  }
})
