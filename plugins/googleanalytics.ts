import { defineNuxtPlugin } from '#app'
import VueGTag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  if (!config.private.GA_ID) {
    return
  }

  const router = useRouter()

  nuxtApp.vueApp.use(
    VueGTag,
    {
      appName: config.private.GA_APP_NAME,
      pageTrackerScreenviewEnabled: true,
      config: {
        id: config.private.GA_ID,
      },
    },
    router,
  )
})
