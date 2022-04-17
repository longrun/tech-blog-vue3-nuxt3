<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
<template>
  <header>
    <p class="text-2xl">{{ config.SITE_TITLE }}</p>
  </header>
</template>
