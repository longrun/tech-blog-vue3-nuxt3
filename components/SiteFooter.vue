<script lang="ts" setup>
import { version } from '../package.json'
</script>

<template>
  <footer class="sitefooter text-center pt-6 pb-2">
    <!-- You should put on the file in `~/public/` if path start with '/' -->
    <img :src="$config.TEAM_LOGO_IMAGE_ON_FOOTER" style="width: 120px" :alt="$config.TEAM_NAME" class="mb-3" />
    <div>{{ $config.TEAM_STATEMENT }}</div>
    <div class="my-3">
      &copy;
      {{ new Date().getFullYear() }}
      <a :href="$config.TEAM_WEBSITE_URL" target="_blank">{{ $config.TEAM_NAME }}</a>
    </div>
    <div class="version text-sm text-300 text-right mr-4">
      <a :href="$config.APP_URL" target="_blank">{{ $config.APP_NAME }}</a>
      - v{{ version }}
    </div>
  </footer>
</template>

<style scoped lang="scss">
.sitefooter {
  background-color: var(--surface-800);
  color: var(--surface-50);

  a {
    color: var(--surface-50);
  }
  a:hover {
    color: opacity(0.8);
  }

  .version,
  .version a {
    color: var(--surface-300);
  }
}
</style>
