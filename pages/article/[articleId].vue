<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>
<template>
  <Entry :articleId="$route.params.articleId" />
</template>
