<template>
  <header class="">
    <p class="header__sitetitle text-4xl font-light">
      <a href="/">{{ $config.BLOG_SITE_TITLE }}</a>
    </p>
    <nav class="absolute">
      <a
        :href="$config.GITHUB_ORGANIZATION_URL"
        target="_blank"
        ref="noopener noreferrer"
        ><i class="pi pi-github text-3xl"></i>
      </a>
    </nav>
  </header>
</template>
<style scoped lang="scss">
header {
  margin: 0;
  padding: 12px 0 0 64px;
  height: 128px;
}
.header__sitetitle {
  color: var(--text-color);
  a {
    color: var(--text-color);
  }
}

nav {
  top: 48px;
  right: 48px;
  a {
    color: var(--text-color);
  }
}
</style>
