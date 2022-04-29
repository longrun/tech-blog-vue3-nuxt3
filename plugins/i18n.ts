import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'
import messages from '@/messages'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const i18n = createI18n({
    legacy: false,
    locale: config.public.DEFAULT_LANGUAGE,
    fallbackLocale: 'en',
    globalInjection: true,
    messages,
  })

  nuxtApp.vueApp.use(i18n)
})
