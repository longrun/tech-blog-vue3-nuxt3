<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({
  titleTemplate: `%s - ${config.SITE_TITLE}`,
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: http://ogp.me/ns#',
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
  <NuxtLayout />
</template>
