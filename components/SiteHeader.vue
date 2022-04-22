<template>
  <header class="siteheader flex align-content-center">
    <p class="header__sitetitle flex align-items-center justify-content-center ml-2 font-light text-4xl">
      <a href="/">LongRun Engineering</a>
    </p>

    <div class="mx-auto" />
    <nav class="flex align-items-center justify-content-center">
      <div class="flex align-items-end justify-content-end">
        <a ref="noopener noreferrer" :href="$config.GITHUB_ORGANIZATION_URL" target="_blank"
          ><i class="pi pi-github text-3xl"></i>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.siteheader {
  margin: 0;
  padding: 0 64px;
  height: 140px;

  .header__sitetitle {
    color: var(--text-color);

    a {
      color: var(--text-color);
    }
  }

  nav {
    a {
      color: var(--text-color);
    }
    a:hover {
      transform: rotate(-15deg);
    }
  }
}
</style>
