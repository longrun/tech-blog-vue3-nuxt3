<script lang="ts" setup>
const { data } = await useAsyncData('tags', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return $contentfulClient.getTags()
})

const tags = data.value.items
  .map((tag) => {
    const [title, order_str] = tag.name.split(':')
    const found = order_str.match('^order=([0-9]+)$')
    const order = found ? parseInt(found[1]) : 0
    return {
      id: tag.sys.id,
      title: title,
      order: order,
    }
  })
  .sort((a, b) => a.order - b.order)
</script>

<template>
  <nav class="nav__categories flex flex-wrap py-2 px-4 shadow-1 mb-4">
    <div v-for="tag in tags" :key="tag.id" class="p-2 mr-2 flex-start">
      <a :href="`/category/${tag.id}`">{{ tag.title }}</a>
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
