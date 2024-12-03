import '@/style/app.min.css'
import '@/style/icons.min.css'
import '@/style/bootstrap.min.css'

import GlobalLoader from '@/widget/GlobalLoader.vue'; // Import the loader component


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



const app = createApp(App)

// Optionally register GlobalLoader globally
app.component('GlobalLoader', GlobalLoader);
app.use(createPinia())
app.use(router)

app.mount('#app')