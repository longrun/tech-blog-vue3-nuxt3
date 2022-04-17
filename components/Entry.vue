<script lang="ts" setup>
import contentful from "contentful";

interface Props {
  articleId: string;
}
const props = defineProps<Props>();

const config = useRuntimeConfig().private;
const client = contentful.createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});

const entry = await client.getEntry(props.articleId);
const entryHTML = useNuxtApp().$mdit.render(entry.fields.articleBody);

useHead({
  title: entry.fields.title,
});
</script>
<template>
  <main class="mt-2 px-6">
    <img
      :src="entry.fields.coverArt.fields.file.url"
      alt="entry.fields.coverArt.fields.title"
      class="w-8"
    />
    <h1 class="text-4xl">
      {{ entry.fields.title }}
    </h1>
    <p>{{ entry.sys.createdAt }}</p>

    <ShareTo />

    <div v-html="entryHTML"></div>

    <ShareTo />
  </main>

  <section>
    <h2>次に読もう</h2>
  </section>
</template>
