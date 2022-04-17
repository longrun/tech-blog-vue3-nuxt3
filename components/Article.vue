<script lang="ts" setup>
interface Props {
  articleId: string;
}
const props = defineProps<Props>();

const config = useRuntimeConfig();

const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({
  content_type: config.private.CONTENTFUL_CONTENT_KEY,
  "fields.slug[in]": props.articleId,
});
const entry = entries.items.shift();
const entryHTML = useNuxtApp().$mdit.render(entry.fields.articleBody);

useHead({
  title: entry.fields.title,
});
</script>
<template>
  <div>
    <main class="mt-2 px-6">
      <img
        :src="entry.fields.coverArt.fields.file.url"
        alt="entry.fields.coverArt.fields.title"
        class="w-full"
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
  </div>
</template>
