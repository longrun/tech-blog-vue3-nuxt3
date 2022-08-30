<script lang="ts" setup>
const { data } = await useAsyncData('tags', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getTags()
})

const { $tagParser } = useNuxtApp()
const tags = $tagParser(data.value.items)

const { $assertion } = useNuxtApp()
$assertion.assertTags(tags)
</script>

<template>
  <nav class="nav__categories flex flex-wrap py-2 px-3 shadow-1 mb-4">
    <div v-for="tag in tags" :key="tag.id" class="p-2 mr-2 flex-start" :class="`category-${tag.id}`">
      <a :href="`/category/${tag.id}`">{{ tag.title }}</a>
    </div>
    <div class="mx-auto" />
    <div class="flex align-items-center">
      <a class="ghicon" ref="noopener noreferrer" :href="$config.GITHUB_ORGANIZATION_URL" target="_blank" title="GitHub"
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
