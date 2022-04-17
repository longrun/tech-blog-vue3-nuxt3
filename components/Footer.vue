<template>
  <footer>
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
