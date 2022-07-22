// create app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// vue-router
import router from './router'
app.use(router)

// vuex
import store from './store'
app.use(store)

// i18n
import i18n from './i18n'
app.use(i18n)

// axios
import axios from 'axios'
//app.config.globalProperties.$axios=axios
//app.use(axios)
app.provide('$axios', axios);


app.mount('#app')
