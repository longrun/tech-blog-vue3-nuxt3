<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
</script>
<template>
  <CategoryEntries :categoryId="$route.params.categoryId" />
</template>
