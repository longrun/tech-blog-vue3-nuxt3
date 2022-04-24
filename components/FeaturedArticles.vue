<script lang="ts" setup>
const { $contentfulClient } = useNuxtApp()
const entries = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  limit: 10,
})
const topicEntry = entries.items.shift()

const config = useRuntimeConfig()
useHead({
  title: config.public.TEAM_STATEMENT,
})
</script>

<template>
  <main class="featured-articles m-0 p-4">
    <article>
      <img
        :src="topicEntry.fields.coverArt.fields.file.url"
        alt="topicEntry.fields.coverArt.fields.title"
        class="w-full border-round"
      />

      <h1 class="text-4xl">
        <NuxtLink :to="`/article/${topicEntry.fields.slug}`">
          {{ topicEntry.fields.title }}
        </NuxtLink>
      </h1>
      <ArticleMeta :created-at="topicEntry.sys.createdAt" :category="topicEntry.metadata.tags[0].sys.id" />
    </article>

    <div class="grid">
      <article v-for="entry in entries.items" :key="entry.sys.id" class="col-12 md:col-6 mt-5">
        <img
          :src="entry.fields.coverArt.fields.file.url"
          alt="entry.fields.coverArt.fields.title"
          class="w-full border-round"
          loading="lazy"
        />
        <h2>
          <NuxtLink :to="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </NuxtLink>
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
