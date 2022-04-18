<script lang="ts" setup>
import upperFirst from "lodash.upperFirst";

const { $contentfulClient } = useNuxtApp();
const entries = await $contentfulClient.getEntries({ order: "sys.createdAt" });
const topicEntry = entries.items.shift();

const config = useRuntimeConfig();
useHead({
  title: config.public.TEAM_STATEMENT,
});
</script>
<template>
  <main class="ma-0 py-6 px-6">
    <img
      :src="topicEntry.fields.coverArt.fields.file.url"
      alt="topicEntry.fields.coverArt.fields.title"
      class="w-full border-round"
    />
    <h1 class="text-4xl">
      <a :href="`/article/${topicEntry.fields.slug}`">
        {{ topicEntry.fields.title }}
      </a>
    </h1>
    <div class="border-round surface-200 py-1 px-3 w-min">
      {{ upperFirst(topicEntry.metadata.tags[0].sys.id) }}
    </div>
    <div>at {{ topicEntry.sys.createdAt }}</div>
    <div>
      by y-takebe
      <img
        class="border-circle"
        style="width: 36px; height: 36px"
        src="//longmayyou.run/images/team/yuichi-takebe.jpg"
      />
    </div>
    <div class="grid mt-6">
      <div v-for="entry in entries.items" class="col-6">
        <img
          :src="entry.fields.coverArt.fields.file.url"
          alt="entry.fields.coverArt.fields.title"
          class="w-full border-round"
        />

        <h2>
          <a :href="`/article/${entry.fields.slug}`">
            {{ entry.fields.title }}
          </a>
        </h2>
        <div class="border-round surface-200 py-1 px-3 w-min">
          {{ upperFirst(entry.metadata.tags[0].sys.id) }}
        </div>

        <div>at {{ entry.sys.createdAt }}</div>
        <div>
          by y-takebe
          <img
            class="border-circle"
            style="width: 36px; height: 36px"
            src="//longmayyou.run/images/team/yuichi-takebe.jpg"
          />
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: var(--surface-0);
}
</style>
