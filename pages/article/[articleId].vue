<script setup lang="ts">
definePageMeta({
  layout: 'with-sidebar',
})
</script>

<template>
  <ArticleBody :article-id="$route.params.articleId" />
</template>
