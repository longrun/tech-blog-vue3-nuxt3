<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
<template>
  <p>{{ config.SITE_TITLE }}</p>
  <Entries />
</template>
