import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PasteCreateView from '../views/PasteCreateView.vue'
import PasteShowView from '../views/PasteShowView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/paste',
    name: 'paste',
    component: PasteCreateView
  },
  {
    path: '/paste/:id',
    name: 'paste-view',
    component: PasteShowView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
