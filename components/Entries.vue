<script lang="ts" setup>
import contentful from "contentful";

const config = useRuntimeConfig();

const client = contentful.createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});
const entries = await client.getEntries({ order: "sys.createdAt" });
const topicEntry = entries.items.shift();
// console.log("entries", entries);
// console.log("topicEntry.fields.coverArt", topicEntry.fields.coverArt);
</script>
<template>
  <main>
    <img
      :src="topicEntry.fields.coverArt.fields.file.url"
      alt="topicEntry.fields.coverArt.fields.title"
      class="w-8"
    />
    <h1 class="text-4xl">
      <router-link :to="`/article/${topicEntry.sys.id}`">
        {{ topicEntry.fields.title }}
      </router-link>
    </h1>
    <p>{{ topicEntry.sys.createdAt }}</p>
    <ul>
      <li v-for="entry in entries.items">
        <router-link :to="`/article/${entry.sys.id}`">
          {{ entry.fields.title }}
        </router-link>
        <p>{{ entry.sys.createdAt }}</p>
      </li>
    </ul>
  </main>
</template>
