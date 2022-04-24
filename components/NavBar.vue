<script lang="ts" setup>
// TODO change to dynamic set up https://github.com/longrun/tech-blog-vue3-nuxt3/issues/4
const navLinks = [
  { tagid: 'development', title: 'Development' },
  { tagid: 'operation', title: 'Operation' },
  { tagid: 'cafebreak', title: 'CafeBreak☕️' },
  { tagid: 'culture', title: 'Culture🦄' },
]
</script>

<template>
  <nav class="nav__categories flex flex-wrap py-2 px-4">
    <div v-for="navLink in navLinks" :key="navLink.tagid" class="p-2 mr-2 flex-start">
      <a :href="`/category/${navLink.tagid}`">{{ navLink.title }}</a>
    </div>
    <div class="mx-auto" />
    <div class="flex align-items-center">
      <a class="ghicon" ref="noopener noreferrer" :href="$config.GITHUB_ORGANIZATION_URL" target="_blank"
        ><i class="pi pi-github text-2xl" />
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav__categories {
  font-size: 1.2rem;

  a {
    color: var(--text-color);
  }

  a:hover {
    color: var(--text-color);
  }

  a.ghicon:hover {
    transform: rotate(-15deg);
  }
}
</style>
