import { createRouter, createWebHistory } from 'vue-router'
import Options from '@/pages/Options.vue'
import Composition from '@/pages/Composition.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'options', path: '/options', component: Options },
    { name: 'composition', path: '/composition', component: Composition },
  ],
})

export default router
