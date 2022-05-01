<script lang="ts" setup>
import upperFirst from 'lodash.upperFirst'
import camelCase from 'lodash.camelCase'

/**
 * Define props
 */

interface Props {
  // author: string;
  // avatarSize: string;
  // avatarImageURL: string;
  createdAt: string
  category: string
}
const props = defineProps<Props>()

// ----------------------------------------------------------------------------
// TODO dynamic set up
/*
const author = props.author || "y-takebe";
const avatarSize = props.avatarSize || "36px";
const avatarImageURL =
  props.avatarImageURL || "//longmayyou.run/images/team/yuichi-takebe.jpg";
*/
const author = 'y-takebe'
const avatarSize = '36px'
const avatarImageURL = '//longmayyou.run/images/team/yuichi-takebe.jpg'

const categoryTitle = props.category && props.category !== '__hide__' ? upperFirst(camelCase(props.category)) : null
const createdAt = useLocaleDate(new Date(props.createdAt))
</script>

<template>
  <aside class="card">
    <div class="flex align-content-center card-container" :style="`height:${avatarSize}`">
      <img
        class="border-circle"
        :style="`width: ${avatarSize}; height: ${avatarSize};`"
        :src="avatarImageURL"
        :alt="`${author}'s avatar`"
      />
      <div class="align-items-center ml-2 pt-1 text-600">
        <span class="text-sm">{{ author }}</span>
        <span class="text-400"> &bull; </span>
        <time class="text-sm" datetime="props.createdAt">{{ createdAt }}</time>

        <label
          v-if="categoryTitle"
          class="bg-primary-gradieht border-round-md text-sm font-normal text-white py-1 px-2 w-min ml-2"
        >
          {{ categoryTitle }}
        </label>
      </div>
    </div>
  </aside>
</template>
