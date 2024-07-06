import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'home/news',
        component: () => import('@/views/NewsPage.vue')
      },
      {
        path: 'shop',
        component: () => import('@/views/ShopPage.vue')
      },
      {
        path: 'job',
        component: () => import('@/views/JobPage.vue')
      },
      {
        path: 'currency',
        component: () => import('@/views/CurrencyPage.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/AccountPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
