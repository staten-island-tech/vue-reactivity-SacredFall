import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useStore } from './store'

const app = createApp(App)

app.use(router)
app.provide('store', useStore())
app.mount('#app')
