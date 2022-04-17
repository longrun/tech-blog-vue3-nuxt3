<script lang="ts" setup>
import upperFirst from "lodash.upperFirst";

const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({ order: "sys.createdAt" });
const topicEntry = entries.items.shift();
const categoryTitle = upperFirst(topicEntry.metadata.tags[0].sys.id);

const config = useRuntimeConfig();
useHead({
  title: config.public.TEAM_STATEMENT,
});
</script>
<template>
  <main class="ma-0 px-6">
    <img
      :src="topicEntry.fields.coverArt.fields.file.url"
      alt="topicEntry.fields.coverArt.fields.title"
      class="w-full"
    />
    <h1 class="text-4xl">
      <a :href="`/article/${topicEntry.fields.slug}`">
        {{ topicEntry.fields.title }}
      </a>
    </h1>
    <div class="border-round surface-200 py-1 px-3 w-min">
      {{ categoryTitle }}
    </div>
    <p>at {{ topicEntry.sys.createdAt }}</p>
    <p>by {{ topicEntry.sys.publishedBy }}</p>
    <ul>
      <li v-for="entry in entries.items">
        <a :href="`/article/${entry.sys.id}`">
          {{ entry.fields.title }}
        </a>
        <p>{{ entry.sys.createdAt }}</p>
        <p>{{ entry.sys.createdBy }}</p>
      </li>
    </ul>
  </main>
</template>
<style scoped>
main {
  background-color: var(--surface-0);
}
</style>
