import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["primeflex/primeflex.min.css", "primeflex/themes/saga-blue.css"],
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
    titleTemplate: "%s | LongRun Engineering",
    htmlAttrs: {
      lang: "ja",
    },
  },
});
