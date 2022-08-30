import { defineNuxtPlugin } from '#app'

const assertion = {
  assertEntries: (items) => {
    // Assertion
    if (!items) {
      const errorMessage = 'Failed getEntries. Does no exists items.'
      console.error(errorMessage)
      console.error(items)
      throw Error(errorMessage)
    }
    if (items.length === 0) {
      const errorMessage = 'Failed getEntries. Items is empty.'
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
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('assertion', assertion)
})
