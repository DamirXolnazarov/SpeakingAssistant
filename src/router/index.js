import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/part1',
      name: 'part1',
      component: () => import('../views/Part1.vue')
    },
    {
      path: '/part2',
      name: 'part2',
      component: () => import('../views/Part2.vue')
    },
    {
      path: '/part3',
      name: 'part3',
      component: () => import('../views/Part3.vue')
    },
  ]
})

export default router
