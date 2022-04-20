<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({
  titleTemplate: `%s - ${config.BLOG_SITE_TITLE}`,
  htmlAttrs: {
    lang: 'ja',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/apple-touch-icon.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
