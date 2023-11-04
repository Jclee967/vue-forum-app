import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ThreadView from '@/views/ThreadView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/thread/:id',
      name: 'threadView',
      component: ThreadView,
      props: true,
      beforeEnter:(to) =>
      {
        const threadExists = sourceData.threads.find(thread=> thread.id === to.params.id)
        // next() is no necessary
        if (!threadExists)
        return {
          name: 'NotFound',
          params: {
            pathMatch : to.path.substring(1).split("/")
          },
          // preserve queries
          query: to.query,
          hash: to.hash
        }
      }
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: NotFoundView 
    }
  ]
})

export default router
