<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
<template>
  <p class="text-2xl">{{ config.SITE_TITLE }}</p>
  <Entries />
</template>

<style></style>
