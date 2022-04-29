<script lang="ts" setup>
import upperFirst from 'lodash.upperFirst'
import camelCase from 'lodash.camelCase'

interface Props {
  categoryId: string
}
const props = defineProps<Props>()

const config = useRuntimeConfig()

const { data } = await useAsyncData('article', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return $contentfulClient.getEntries({
    content_type: config.private.CONTENTFUL_CONTENT_KEY,
    'metadata.tags.sys.id[all]': props.categoryId,
    order: '-sys.createdAt',
    limit: 10,
  })
})
const items = data.value.items

const categoryTitle = upperFirst(camelCase(props.categoryId))
const entryCount = items.length
useHead({
  title: `${categoryTitle} の記事`,
})
</script>

<template>
  <main class="category-articles m-0 py-6 px-6">
    <h1>{{ $t('category_headline', { category: categoryTitle }) }}</h1>
    <p v-if="entryCount === 0">{{ $t('category_article_empty_state') }}</p>
    <p v-else>{{ $t('category_article_count', { count: entryCount }) }}</p>

    <article v-for="entry in items" :key="entry.sys.id">
      <div class="grid">
        <div class="col-6">
          <img
            :src="entry.fields.coverArt.fields.file.url"
            :alt="entry.fields.coverArt.fields.title"
            class="w-full border-round"
          />
        </div>
        <div class="col-6">
          <h2>
            <NuxtLink :to="`/article/${entry.fields.slug}`">
              {{ entry.fields.title }}
            </NuxtLink>
          </h2>
          <ArticleMeta :created-at="entry.sys.createdAt" category="__hide__" />
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped lang="scss">
.category-articles {
  background-color: var(--surface-0);
}
</style>
