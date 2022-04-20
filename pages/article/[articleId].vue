<script lang="ts" setup>
definePageMeta({
  layout: 'with-sidebar',
})
</script>

<template>
  <Article :article-id="$route.params.articleId" />
</template>
