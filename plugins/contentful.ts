import { defineNuxtPlugin } from "#app";
import contentful from "contentful";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const client = contentful.createClient({
    space: config.private.CONTENTFUL_SPACE_ID,
    accessToken: config.private.CONTENTFUL_ACCESS_TOKEN,
  });

  nuxtApp.provide("contentfulClient", client);
});
