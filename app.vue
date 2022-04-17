<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  titleTemplate: `%s - ${config.BLOG_SITE_TITLE}`,
  charset: "utf-8",
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/apple-touch-icon.png",
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style type="scss">
html {
  font-family: var(--font-family);
}
body {
  margin: 0;
  padding: 24px;
  background-color: var(--surface-ground);
}
</style>
