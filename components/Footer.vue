<template>
  <footer class="text-center py-8">
    <p>{{ $config.TEAM_STATEMENT }}</p>
    <p>
      <a
        :href="$config.TEAM_WEBSITE_URL"
        rel="noopener noreferrer"
        target="_blank"
        >{{ $config.TEAM_NAME }}</a
      >
      &copy;
      {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>
<style scoped>
footer {
  background-color: var(--surface-800);
  color: var(--surface-50);
}
a {
  color: var(--surface-50);
}
a:hover {
  color: opacity(var(--surface-50), 0.8);
}
</style>
