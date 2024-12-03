import '@/style/app.min.css'
import '@/style/icons.min.css'
import '@/style/bootstrap.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')