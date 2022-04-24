import { defineNuxtPlugin } from '#app'
import VueGTag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(
    VueGTag,
    {
      appName: config.public.GA_APP_NAME,
      pageTrackerScreenviewEnabled: true,
      config: {
        id: config.public.GA_ID,
      },
    },
    router,
  )
})
