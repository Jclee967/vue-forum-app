import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ForumView from '@/views/ForumView.vue'
import ThreadView from '@/views/ThreadView.vue'
import ThreadCreateView from '@/views/ThreadCreateView.vue'
import ThreadEditView from '@/views/ThreadEditView.vue'
import CategoryView from '@/views/CategoryView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { useStore } from 'vuex'
import { findById } from '../helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'profile',
      component: ProfileView,
      meta: { toTop: true, smoothScroll: true } //always scroll to top
    },
    ,
    {
      path: '/me/edit',
      name: 'profileEdit',
      component: ProfileView,
      props: { edit: true }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'forum',
      component: ForumView,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'thread',
      component: ThreadView,
      props: true,
      beforeEnter: (to) => {
        const threadExists = findById(useStore().state.threads, to.params.id)
        // next() is no necessary
        if (!threadExists)
          return {
            name: 'NotFound',
            params: {
              pathMatch: to.path.substring(1).split('/')
            },
            // preserve queries
            query: to.query,
            hash: to.hash
          }
      }
    },
    {
      path: '/forum/:forumId/thread/create',
      name: 'threadCreate',
      component: ThreadCreateView,
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'threadEdit',
      component: ThreadEditView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ],
  scrollBehavior(to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})

export default router
