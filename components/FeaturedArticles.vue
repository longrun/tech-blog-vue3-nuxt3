<script lang="ts" setup>
const { data } = await useAsyncData('entries', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return $contentfulClient.getEntries({
    order: '-sys.createdAt',
    limit: 10,
  })
})
const items = data.value.items

const config = useRuntimeConfig()
useHead({
  title: config.public.TEAM_STATEMENT,
  meta: [
    { hid: 'description', name: 'description', content: config.public.SITE_TOP_DESCRIPTION },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: config.public.SITE_TITLE },
    { hid: 'og:description', property: 'og:description', content: config.public.SITE_TOP_DESCRIPTION },
    { hid: 'og:url', property: 'og:url', content: `${config.public.HOST}` },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `${config.public.HOST}${config.public.TEAM_LOGO_BLACK}`,
    },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <main class="featured-articles m-0 p-4">
    <div class="grid">
      <article
        v-for="(entry, i) in items"
        :key="entry.sys.id"
        :class="['col-12', i > 0 ? 'md:col-6' : undefined]"
        class="mb-5"
      >
        <a class="img" :href="`/article/${entry.fields.slug}`">
          <img
            :src="entry.fields.coverArt.fields.file.url"
            :alt="entry.fields.coverArt.fields.title"
            class="max-w-full border-round"
            :loading="i > 0 ? 'lazy' : undefined"
          />
        </a>
        <h1 v-if="i === 0" class="text-4xl">
          <a :href="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </a>
        </h1>
        <h2 v-else>
          <a :href="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </a>
        </h2>
        <ArticleMeta :created-at="entry.sys.createdAt" :category="entry.metadata.tags[0].sys.id" />
      </article>
    </div>
  </main>
</template>

<style scoped lang="scss">
.featured-articles {
  background-color: var(--surface-0);
}
</style>
