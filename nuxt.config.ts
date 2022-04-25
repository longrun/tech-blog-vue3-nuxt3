import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // if you want to use server-side rendering (SSR)
  ssr: true,
  // target: 'server',
  // if you want to use static HTML generation (SSG)
  target: 'static',
  typescript: {
    shim: false,
  },
  css: [
    'primeflex/primeflex.min.css',
    'primeflex/themes/saga-blue.css',
    'primeicons/primeicons.css',
    'prism-themes/themes/prism-vsc-dark-plus.min.css',
    'assets/scss/custom-utilities.scss',
    'assets/scss/team-theme.scss',
    'assets/scss/reboot.scss',
  ],
  plugins: ['prismjs/prism'],
  runtimeConfig: {
    private: {
      CONTENTFUL_CONTENT_KEY: process.env.CONTENTFUL_CONTENT_KEY,
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
    public: {
      DEFAUTL_LANGUAGE: 'ja',
      APP_NAME: 'tech-blog-vue3-nuxt3',
      APP_URL: 'https://github.com/longrun/tech-blog-vue3-nuxt3',
      SITE_TITLE: 'LongRun Engineering',
      TEAM_NAME: 'LongRun Inc.',
      TEAM_WEBSITE_URL: 'https://longmayyou.run',
      TEAM_STATEMENT: 'ランナーが諦めなくていい世界をつくる',
      GITHUB_ORGANIZATION_URL: 'https://github.com/longrun',
      GA_APP_NAME: 'LongRun Blog',
      GA_ID: process.env.GA_ID,
    },
  },
  head: {
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
  },
})
