export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@vueuse/nuxt'],
  css: ['~/assets/css/variables.css', '~/assets/css/main.css'],
  app: {
    head: {
      title: 'Mobile Dental Surgeon | Mobile OMS for Dallas-Fort Worth Dental Practices',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Dr. Michael Tiplea, DDS, AFAAID brings mobile oral surgery, IV sedation, sterile trays, and implant inventory directly to Dallas-Fort Worth dental offices with zero overhead and a 50/50 production split.'
        },
        { name: 'theme-color', content: '#041627' },
        {
          property: 'og:title',
          content: 'Mobile Dental Surgeon | Mobile OMS for Dallas-Fort Worth Dental Practices'
        },
        {
          property: 'og:description',
          content:
            'Keep patients and production in-house with mobile oral surgery, IV sedation, and same-day revenue sharing for DFW dental practices.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://tiplea-v2.vercel.app/' },
        { property: 'og:image', content: 'https://tiplea-v2.vercel.app/og-image.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Mobile Dental Surgeon | Mobile OMS for Dallas-Fort Worth Dental Practices'
        },
        {
          name: 'twitter:description',
          content:
            'Keep patients and production in-house with mobile oral surgery, IV sedation, and same-day revenue sharing for DFW dental practices.'
        },
        { name: 'twitter:image', content: 'https://tiplea-v2.vercel.app/og-image.svg' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700;800&display=swap'
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://tiplea-v2.vercel.app/' }
      ]
    }
  }
})
