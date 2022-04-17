<script lang="ts" setup>
const config = useRuntimeConfig();
useHead({
  titleTemplate: `%s - ${config.BLOG_SITE_TITLE}`,
  htmlAttrs: {
    lang: "ja",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
