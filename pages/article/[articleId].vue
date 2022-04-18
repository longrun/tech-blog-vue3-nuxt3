<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <Article :articleId="$route.params.articleId" />
</template>
