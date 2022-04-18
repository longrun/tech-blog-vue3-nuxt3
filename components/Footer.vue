<script lang="ts" setup>
import { version } from "../package.json";
</script>

<template>
  <footer class="text-center py-8">
    <div>{{ $config.TEAM_STATEMENT }}</div>
    <div class="my-3">
      <a
        :href="$config.TEAM_WEBSITE_URL"
        rel="noopener noreferrer"
        target="_blank"
        >{{ $config.TEAM_NAME }}</a
      >
      &copy;
      {{ new Date().getFullYear() }}
    </div>
    <div class="version text-sm text-500">
      <a href="{{$config.APP_URL}}" target="_blank">{{ $config.APP_NAME }}</a>
      - v{{ version }}
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
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
