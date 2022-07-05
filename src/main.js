// create app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

// vue-router
import router from './router'
app.use(router)

// vuex
import store from './store'
app.use(store)

// i18n
import i18n from './i18n'
app.use(i18n)

app.mount('#app')
