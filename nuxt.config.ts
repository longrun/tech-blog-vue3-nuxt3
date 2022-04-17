import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["primeflex/primeflex.min.css", "primeflex/themes/saga-blue.css"],
  publicRuntimeConfig: {
    GITHUB_ORGANIZATION_URL: "https://github.com/longrun",
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
});
