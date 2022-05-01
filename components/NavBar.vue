<script lang="ts" setup>
const { data } = await useAsyncData('tags', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return $contentfulClient.getTags()
})
const tags = data.value.items
</script>

<template>
  <nav class="nav__categories flex flex-wrap py-2 px-4">
    <div v-for="tag in tags" :key="tag.sys.id" class="p-2 mr-2 flex-start">
      <a :href="`/category/${tag.sys.id}`">{{ tag.name }}</a>
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
