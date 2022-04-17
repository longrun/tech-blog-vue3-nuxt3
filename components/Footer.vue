<template>
  <footer class="text-center py-8">
    <p>{{ $config.TEAM_STATEMENT }}</p>
    <p>
      &copy;
      <a
        :href="$config.TEAM_WEBSITE_URL"
        rel="noopener noreferrer"
        target="_blank"
        >{{ $config.TEAM_NAME }}</a
      >
    </p>
  </footer>
</template>
<style scoped>
footer {
  background-color: var(--surface-800);
  color: var(--surface-50);
}
a:link,
a:visited,
a:hover {
  color: var(--surface-50);
}
</style>
