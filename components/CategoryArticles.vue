<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

/**
 * Define props
 */
interface Props {
  categoryId: string
}
const props = defineProps<Props>()

// ----------------------------------------------------------------------------
// Get articles
const config = useRuntimeConfig()
const { data } = await useAsyncData('article', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  const entries = await $contentfulClient.getEntries({
    content_type: config.private.CONTENTFUL_CONTENT_KEY,
    'metadata.tags.sys.id[all]': props.categoryId,
    order: '-sys.createdAt',
    limit: 10,
  })
  const tags = await $contentfulClient.getTags()
  return { entries: entries, tags: tags }
})
const entries = data.value.entries.items

// Get category title
const { $tagParser } = useNuxtApp()
const parsedTags = $tagParser(data.value.tags.items)
const categoryTitle = parsedTags.find((item) => item.id === props.categoryId).title
const entryCount = entries.length

// Setup meta tags
const { t } = useI18n()
const categoryHeadline = t('category_headline', { category: categoryTitle })
const uri = useRoute().path

useHead({
  title: categoryHeadline,
  meta: [
    { hid: 'description', name: 'description', content: categoryHeadline },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: categoryHeadline },
    { hid: 'og:description', property: 'og:description', content: categoryHeadline },
    { hid: 'og:url', property: 'og:url', content: `${config.public.HOST}${uri}` },
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
  <main class="category-articles p-3">
    <h1>{{ $t('category_headline', { category: categoryTitle }) }}</h1>
    <p v-if="entryCount === 0">{{ $t('category_article_empty_state') }}</p>
    <p v-else>{{ $t('category_article_count', { count: entryCount }) }}</p>

    <article v-for="entry in entries" :key="entry.sys.id">
      <div class="grid">
        <div class="col-6">
          <a class="img" :href="`/article/${entry.fields.slug}`">
            <img
              :src="`${entry.fields.coverArt.fields.file.url}?w=426&q=95&fit=thumb`"
              :alt="entry.fields.coverArt.fields.title"
              class="w-full border-round"
            />
          </a>
        </div>
        <div class="col-6">
          <h2 class="text-xl mt-0">
            <a :href="`/article/${entry.fields.slug}`">
              {{ entry.fields.title }}
            </a>
          </h2>
          <ArticleMeta :created-at="entry.sys.createdAt" category="__hide__" avatarSize="32px" />
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
