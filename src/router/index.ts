import { createWebHistory, createRouter } from 'vue-router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
// import { useAuthenticationStore } from '@/stores/authentication.ts'
// import { api } from '@/services/axios'
// import { storeToRefs } from 'pinia'

// const authenticationCheck = async () => {
//   const { isAuthenticated } = storeToRefs(useAuthenticationStore())
  
//   if (isAuthenticated.value === null) {
//     try {
//       const response = await api.get('/is-authenticated')
//       isAuthenticated.value = response.data.isAuthenticated

//       return response.data.isAuthenticated

//     } catch (error) {
//       isAuthenticated.value = false
//       return false
//     }
//   }

//   return isAuthenticated.value
// }

const routes = [
//   {
//     path: '/',
//     component: () => import('@/pages/Guest.vue'),
//     name: 'Guest Page',
//   },
  {
    // path: '/dashboard',
    path: '/',
    component: () => import('@/pages/Dashboard.vue'),
    name: 'Dashboard Page',
    // meta: { requiresAuth: true }
  },
//   {
//     path: '/login',
//     component: () => import('@/pages/Login.vue'),
//     name: 'Login Page',
//   },
//   { 
//     path: '/signup', 
//     component: () => import('@/pages/Signup.vue'),
//     name: 'Signup Page',
//   },
//   {
//     path: '/settings',
//     component: () => import('@/pages/Settings.vue'),
//     name: 'Settings Page',
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/profile',
//     component: () => import('@/pages/Profile.vue'),
//     name: 'Profile Page',
//     meta: { requiresAuth: true }
//   },
  {
    path: '/transactions',
    component: () => import('@/pages/Transactions.vue'),
    name: 'Transactions Page',
    // meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue'),
    name: 'Not Found Page',
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Global navigation guard
// router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     const isAuthenticated = await authenticationCheck()
//     if (!isAuthenticated) {
//       next({ name: 'Login Page' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router