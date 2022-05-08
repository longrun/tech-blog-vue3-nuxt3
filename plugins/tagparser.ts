import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const tagParser = (tagItems) => {
    return tagItems
      .map((tag) => {
        const [title, order_str] = tag.name.split(':')
        const found = order_str.match('^order=([0-9]+)$')
        const order = found ? parseInt(found[1]) : 0
        return {
          id: tag.sys.id,
          title: title,
          order: order,
        }
      })
      .sort((a, b) => a.order - b.order)
  }

  nuxtApp.provide('tagParser', tagParser)
})
