<script lang="ts" setup>
import contentful from "contentful";
import upperFirst from "lodash.upperFirst";
import camelCase from "lodash.camelCase";

interface Props {
  categoryId: string;
}
const props = defineProps<Props>();

const config = useRuntimeConfig().private;

const client = contentful.createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});
const entries = await client.getEntries({ order: "sys.createdAt" });
const categoryTitle = upperFirst(camelCase(props.categoryId));
const entryCount = entries.items.length;
useHead({
  title: `${categoryTitle} に関する${entryCount}件の記事`,
});
</script>
<template>
  <main class="ma-0 px-6">
    <h1>{{ categoryTitle }} の記事</h1>
    <p>{{ entryCount }}件の記事があります</p>
    <ul>
      <li v-for="entry in entries.items">
        <NuxtLink :to="`/article/${entry.sys.id}`">
          {{ entry.fields.title }}
        </NuxtLink>
        <p>{{ entry.sys.createdAt }}</p>
      </li>
    </ul>
  </main>
</template>
