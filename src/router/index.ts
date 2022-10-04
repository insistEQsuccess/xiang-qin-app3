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
    path: '/info1',
    name: 'Info1',
    meta: {
      title: '完善信息'
    },
    component: () => import('@/views/info/info1.vue')
  },
  {
    path: '/info2',
    name: 'Info2',
    meta: {
      title: '您的自身条件'
    },
    component: () => import('@/views/info/info2.vue')
  },
  {
    path: '/info3',
    name: 'Info3',
    meta: {
      title: '您的求偶要求'
    },
    component: () => import('@/views/info/info3.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/login.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
