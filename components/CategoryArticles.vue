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
  order: "-sys.createdAt",
  limit: 10,
});

const categoryTitle = upperFirst(camelCase(props.categoryId));
const entryCount = entries.items.length;
useHead({
  title: `${categoryTitle} の記事`,
});
</script>

<template>
  <main class="m-0 py-6 px-6">
    <h1>{{ categoryTitle }} の記事</h1>
    <p v-if="entryCount > 0">{{ entryCount }}件の記事があります。</p>
    <p v-else>...はまだありません。</p>

    <article v-for="entry in entries.items">
      <div class="grid">
        <div class="col-6">
          <img
            :src="entry.fields.coverArt.fields.file.url"
            alt="entry.fields.coverArt.fields.title"
            class="w-full border-round"
          />
        </div>
        <div class="col-6">
          <h2>
            <NuxtLink :to="`/article/${entry.fields.slug}`">
              {{ entry.fields.title }}
            </NuxtLink>
          </h2>
          <ArticleMeta :created-at="entry.sys.createdAt" />
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: var(--surface-0);
}
</style>
