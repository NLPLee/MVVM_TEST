import { createApp } from 'vue'
import App from '@/App.vue'
import { IonicVue } from '@ionic/vue'
import store, { key } from "@/store"
import router from "@/router"

import '@ionic/vue/css/ionic.bundle.css'
import '@/style.css'

const app = createApp(App)
    app.use(store, key)
    app.use(IonicVue)
    app.use(router)
    app.mount("#app")
