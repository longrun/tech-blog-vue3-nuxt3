<script lang="ts" setup>
import upperFirst from "lodash.upperFirst";
import camelCase from "lodash.camelCase";

interface Props {
  categoryId: string;
}
const props = defineProps<Props>();

const config = useRuntimeConfig();

const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({
  content_type: config.private.CONTENTFUL_CONTENT_KEY,
  "metadata.tags.sys.id[all]": props.categoryId,
  order: "sys.createdAt",
  limit: 10,
});

const categoryTitle = upperFirst(camelCase(props.categoryId));
const entryCount = entries.items.length;
useHead({
  title: `${categoryTitle} の記事`,
});
</script>

<template>
  <main class="mt-5 mx-0 px-6">
    <h1>{{ categoryTitle }} の記事</h1>
    <p v-if="entryCount > 0">{{ entryCount }}件の記事があります。</p>
    <p v-else>...はまだありません。</p>
    <div class="grid">
      <div v-for="entry in entries.items" class="col-6">
        <h2>
          <a href="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </a>
        </h2>
        <ArticleMeta
          :created-at="entry.sys.createdAt"
          :category="entry.metadata.tags[0].sys.id"
        />
      </div>
    </div>
  </main>
</template>
