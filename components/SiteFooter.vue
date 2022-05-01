<script lang="ts" setup>
import { version } from '../package.json'

// You should put on the file in `~/public/` if path start with '/'.
const teamLogo = useRuntimeConfig().public.TEAM_LOGO_IMAGE_ON_FOOTER
</script>

<template>
  <footer class="sitefooter text-center pt-6 pb-2">
    <img :src="teamLogo" style="width: 120px" class="mb-3" />
    <div>{{ $config.TEAM_STATEMENT }}</div>
    <div class="my-3">
      &copy;
      {{ new Date().getFullYear() }}
      <a :href="$config.TEAM_WEBSITE_URL" target="_blank">{{ $config.TEAM_NAME }}</a>
    </div>
    <div class="version text-sm text-500 text-right mr-2">
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
    color: var(--surface-500);
  }
}
</style>
