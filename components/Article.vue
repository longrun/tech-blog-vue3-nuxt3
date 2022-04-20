<script lang="ts" setup>
import Prism from 'prismjs'

interface Props {
  articleId: string
}
const props = defineProps<Props>()

const config = useRuntimeConfig()

const { $contentfulClient } = useNuxtApp()
const entries = await $contentfulClient.getEntries({
  content_type: config.private.CONTENTFUL_CONTENT_KEY,
  'fields.slug[in]': props.articleId,
  limit: 1,
})
const entry = entries.items.shift()
const entryHTML = useNuxtApp().$mdit.render(entry.fields.articleBody)

useHead({
  title: entry.fields.title,
})

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <div>
    <main class="article__main m-0 py-6 px-6">
      <header>
        <img
          :src="entry.fields.coverArt.fields.file.url"
          alt="entry.fields.coverArt.fields.title"
          class="w-full border-round"
        />
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

    <section class="hidden">
      <h2>次に読もう</h2>
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
  }

  blockquote {
    border-left: 5px solid #ddd;
    padding: 0.5em;
    margin-left: 1em;
    margin-right: 0;
  }
}
</style>
