<script lang="ts" setup>
import upperFirst from "lodash.upperFirst";
import camelCase from "lodash.camelCase";

interface Props {
  categoryId: string;
}
const props = defineProps<Props>();

const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({ order: "sys.createdAt" });
const categoryTitle = upperFirst(camelCase(props.categoryId));
const entryCount = entries.items.length;
useHead({
  title: `${categoryTitle} の記事`,
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
