import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import ContactView from '@/views/ContactView.vue'
import VenuesView from '@/views/VenuesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    { path: '/', name: 'Landing', component: LandingView },
    { path: '/contacts', name: 'Contact', component: ContactView },
    { path: '/venues', name: 'Venues', component: VenuesView },
  ],
})

export default router
