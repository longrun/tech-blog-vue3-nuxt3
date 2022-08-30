import { defineNuxtPlugin } from '#app'

const assertion = {
  assertEntries: (items) => {
    if (!items) {
      const errorMessage = 'Failed getEntries. Does no exists items.'
      console.error(errorMessage)
      console.error(items)
      throw Error(errorMessage)
    }
    if (items.length === 0) {
      const errorMessage = 'Failed getEntries. Items are empty.'
      console.error(errorMessage)
      console.error(items)
      throw Error(errorMessage)
    }
    if (!('sys' in items[0])) {
      const errorMessage = "Failed getEntries. Items have not 'sys'."
      console.error(errorMessage)
      console.error(items)
      throw Error(errorMessage)
    }
    if (!('fields' in items[0])) {
      const errorMessage = "Failed getEntries. Items have not 'fields'."
      console.error(errorMessage)
      console.error(items)
      throw Error(errorMessage)
    }
  },

  assertTags: (tags) => {
    if (!tags) {
      const errorMessage = 'Failed getTags. Does no exists tags.'
      console.error(errorMessage)
      console.error(tags)
      throw Error(errorMessage)
    }
    if (tags.length === 0) {
      const errorMessage = 'Failed getTags. Tags are empty.'
      console.error(errorMessage)
      console.error(tags)
      throw Error(errorMessage)
    }
    if (!('id' in tags[0])) {
      const errorMessage = "Failed getTags. Tags have not 'id'."
      console.error(errorMessage)
      console.error(tags)
      throw Error(errorMessage)
    }
    if (!('title' in tags[0])) {
      const errorMessage = "Failed getTags. Tags have not 'title'."
      console.error(errorMessage)
      console.error(tags)
      throw Error(errorMessage)
    }
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('assertion', assertion)
})
