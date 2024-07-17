import { createRouter, createWebHistory } from 'vue-router'
import detail from '../views/detailubersicht.vue'
import gereat from '../views/gereateubersicht.vue'
import NotFound from '../components/error/error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'detail',
      component: detail
    },
    {
      path: '/gereateubersicht/:id',
      name: 'gereat',
      component: gereat
    },
    {
      path: '/:pathMatch(.*)*',  // Tüm eşleşmeyen yolları yakalar
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router


// localhost:3000/gereateubersicht
// [ { id: 1 }, ...]
