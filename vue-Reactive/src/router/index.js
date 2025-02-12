import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import settingsView from '../views/settingsView.vue'
import timerview from '../views/timerView.vue'
import dashboardView from '../views/dashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: settingsView,
    },
    {
      path: '/timer',
      name: 'timer',
      component: timerview,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboardView,
    },
  ],
})

export default router
