import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/searchresults',
      name: 'searchresults',
      component: () => import('../views/SearchResultView.vue'),
    },
    {
      path: '/chefprofile/:id',
      name: 'chefprofile',
      component: () => import('../views/ChefProfileView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/grocerycompare',
      name: 'grocerycompare',
      component: () => import('../views/GroceryCompareView.vue'),
    },
  ],
})

export default router
