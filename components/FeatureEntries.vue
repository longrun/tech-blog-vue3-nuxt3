<script lang="ts" setup>
const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({ order: "sys.createdAt" });
const topicEntry = entries.items.shift();

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
      <a :href="`/article/${topicEntry.sys.id}`">
        {{ topicEntry.fields.title }}
      </a>
    </h1>
    <p>{{ topicEntry.sys.createdAt }}</p>
    <ul>
      <li v-for="entry in entries.items">
        <a :href="`/article/${entry.sys.id}`">
          {{ entry.fields.title }}
        </a>
        <p>{{ entry.sys.createdAt }}</p>
      </li>
    </ul>
  </main>
</template>
<style scoped>
main {
  background-color: var(--surface-0);
}
</style>
