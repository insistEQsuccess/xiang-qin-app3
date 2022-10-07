import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'List',
    meta: {
      cache: false,
      title: '详情'
    },
    component: () => import('@/views/list/list.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      cache: false,
      title: '详情'
    },
    component: () => import('@/views/detail/detail.vue')
  },
  {
    path: '/info1',
    name: 'Info1',
    meta: {
      cache: true,
      title: '完善信息'
    },
    component: () => import('@/views/info/info1.vue')
  },
  {
    path: '/info2',
    name: 'Info2',
    meta: {
      cache: false,
      title: '您的自身条件'
    },
    component: () => import('@/views/info/info2.vue')
  },
  {
    path: '/info3',
    name: 'Info3',
    meta: {
      cache: false,
      title: '您的求偶要求'
    },
    component: () => import('@/views/info/info3.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      cache: false,
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

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  if (to.meta.cache) {
    store.commit('setCacheView', to.name)
  }
  return true
})

export default router
