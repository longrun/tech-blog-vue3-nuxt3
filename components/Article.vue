<script lang="ts" setup>
import upperFirst from "lodash.upperFirst";
import Prism from "prismjs";

interface Props {
  articleId: string;
}
const props = defineProps<Props>();

const config = useRuntimeConfig();

const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({
  content_type: config.private.CONTENTFUL_CONTENT_KEY,
  "fields.slug[in]": props.articleId,
  limit: 1,
});
const entry = entries.items.shift();
const entryHTML = useNuxtApp().$mdit.render(entry.fields.articleBody);

useHead({
  title: entry.fields.title,
});

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <div>
    <main class="m-0 py-6 px-6">
      <img
        :src="entry.fields.coverArt.fields.file.url"
        alt="entry.fields.coverArt.fields.title"
        class="w-full border-round"
      />
      <h1 class="text-4xl">
        {{ entry.fields.title }}
      </h1>

      <ArticleMeta
        :created-at="entry.sys.createdAt"
        :category="entry.metadata.tags[0].sys.id"
      />

      <ShareTo />

      <div class="article-body" v-html="entryHTML"></div>

      <ShareTo />
    </main>

    <section class="hidden">
      <h2>次に読もう</h2>
    </section>
  </div>
</template>

<style scoped lang="scss">
main {
  background-color: var(--surface-0);
}

.article-body {
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
