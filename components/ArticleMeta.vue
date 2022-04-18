<script lang="ts" setup>
import upperFirst from "lodash.upperFirst";
import camelCase from "lodash.camelCase";

interface Props {
  author: string;
  avatarSize: string;
  avatarImageURL: string;
  createdAt: string;
  category: string;
}
const props = defineProps<Props>();

// TODO dynamic set up
const author = props.author || "y-takebe";
const avatarSize = props.avatarSize || "36px";
const avatarImageURL =
  props.avatarImageURL || "//longmayyou.run/images/team/yuichi-takebe.jpg";
const categoryTitle = upperFirst(camelCase(props.category));
const createdAt = useLocaleDate(new Date(props.createdAt));
</script>

<template>
  <div class="card">
    <div
      class="flex align-content-center card-container"
      :style="`height:${avatarSize}`"
    >
      <img
        class="border-circle"
        :style="`width: ${avatarSize}; height: ${avatarSize};`"
        :src="avatarImageURL"
      />
      <div class="align-items-center ml-2 pt-1 text-600">
        <span>{{ author }}</span>
        <span class="text-400"> &bull; </span>
        <time datetime="props.createdAt">{{ createdAt }}</time>

        <span class="border-round surface-200 py-1 px-2 w-min ml-2">
          {{ categoryTitle }}
        </span>
      </div>
    </div>
  </div>
</template>
