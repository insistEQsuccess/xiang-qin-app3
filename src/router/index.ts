import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail/detail.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/list/list.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/info/info.vue')
  },
  {
    path: '/info1',
    name: 'Info1',
    component: () => import('@/views/info/info1.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
