<script lang="ts" setup>
const config = useRuntimeConfig()
useHead({
  titleTemplate: `%s - ${config.SITE_TITLE}`,
  htmlAttrs: {
    lang: config.public.DEFAUTL_LANGUAGE,
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
