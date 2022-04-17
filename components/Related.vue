<script lang="ts" setup>
const config = useRuntimeConfig();
</script>
<template>
  <ul>
    <li>
      <a
        :href="config.GITHUB_ORGANIZATION_URL"
        target="_blank"
        ref="noopener noreferrer"
        >GitHub</a
      >
    </li>
    <li>RSS / Atom Feed</li>
  </ul>
</template>
