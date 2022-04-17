import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: [
    "primeflex/primeflex.min.css",
    "primeflex/themes/saga-blue.css",
    "assets/scss/reboot.scss",
  ],
  runtimeConfig: {
    private: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
    public: {
      GITHUB_ORGANIZATION_URL: "https://github.com/longrun",
      BLOG_SITE_TITLE: "LongRun Engineering",
      TEAM_NAME: "LongRun Inc.",
      TEAM_WEBSITE_URL: "https://longmayyou.run",
      TEAM_STATEMENT: "ランナーが諦めなくていい世界をつくる",
    },
  },
  head: {
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    charset: "utf-8",
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        href: "/apple-touch-icon.png",
      },
    ],
  },
});
