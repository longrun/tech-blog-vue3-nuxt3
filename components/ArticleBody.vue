<script lang="ts" setup>
import Prism from 'prismjs'

/**
 * Define props
 */
interface Props {
  articleId: string
}
const props = defineProps<Props>()

// ----------------------------------------------------------------------------
const config = useRuntimeConfig()

const { data } = await useAsyncData('article', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return $contentfulClient.getEntries({
    content_type: config.private.CONTENTFUL_CONTENT_KEY,
    'fields.slug[in]': props.articleId,
    limit: 1,
  })
})
const entry = data.value.items[0]
const articleBody = entry.fields.articleBody
const entryHTML = useNuxtApp().$mdit.render(articleBody) || articleBody

useHead({
  title: entry.fields.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: articleBody.substring(0, 100).replace(/\r?\n/g, '').replace(/#/g, '') + '...',
    },
  ],
})

onMounted(() => {
  if (process.server) {
    Prism.highlightAll()
  }
})
</script>

<template>
  <div>
    <img
      :src="entry.fields.coverArt.fields.file.url"
      :alt="entry.fields.coverArt.fields.title"
      class="w-screen md:w-full border-round"
    />
    <main class="article__main m-0 p-4">
      <header>
        <h1 class="text-4xl">
          {{ entry.fields.title }}
        </h1>
        <ArticleMeta :created-at="entry.sys.createdAt" :category="entry.metadata.tags[0].sys.id" />
      </header>
      <aside>
        <ShareTo />
      </aside>
      <section>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <article class="article__body" v-html="entryHTML"></article>
      </section>
      <aside>
        <ShareTo />
      </aside>
    </main>

    <!-- TODO -->
    <section class="hidden">
      <h2>{{ $t('read_next') }}</h2>
    </section>
  </div>
</template>

<style lang="scss">
.article__main {
  background-color: var(--surface-0);

  header {
    margin-bottom: 3rem;
  }
}

.article__body {
  h2 {
    margin: 1.5rem 0;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: var(--bluegray-100);
    font-size: 1.75rem;
  }

  img {
    max-width: 100%;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);
  }

  blockquote {
    border-left: 5px solid #ddd;
    padding: 0.5em;
  }

  pre {
    white-space: pre;
    overflow: scroll;
    display: block;
    width: calc(100% - 64px);

    code {
      width: calc(100% - 64px);
    }
  }
}
</style>
