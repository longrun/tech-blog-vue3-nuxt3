import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'
import messages from '@/messages'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const i18n = createI18n({
    // locale: config.public.DEFAULT_LANGUAGE,
    locale: 'ja',
    fallbackLocale: config.public.DEFAULT_LANGUAGE,
    messages,
  })

  nuxtApp.vueApp.use(i18n)
})
