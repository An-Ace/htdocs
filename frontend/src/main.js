import { createApp } from 'vue'
import App from './App.vue'
import Vue3Toastify from 'vue3-toastify'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
const routes = [
  { path: '/', component: Home }
  // { path: '/categories', component: CategoryPanel },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
createApp(App).use(router).use(Vue3Toastify).mount('#app')
