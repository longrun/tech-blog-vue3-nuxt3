<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>
<template>
  <CategoryArticles :categoryId="$route.params.categoryId" />
</template>
