<script lang="ts">
definePageMeta({
  layout: 'with-sidebar',
})
</script>

<template>
  <CategoryArticles :category-id="$route.params.categoryId" />
</template>
