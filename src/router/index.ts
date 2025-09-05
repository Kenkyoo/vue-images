import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import FeedView from '@/views/FeedView.vue'
import PhotoView from '@/views/PhotoView.vue'
import UserView from '@/views/UserView.vue'
import ProfileView from '@/views/ProfileView.vue'
import UploadView from '@/views/UploadView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import MyPhotosView from '@/views/MyPhotosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
    },
    {
      path: '/photos/:id',
      name: 'photos',
      component: PhotoView,
    },
    {
      path: '/users/:username',
      name: 'users',
      component: UserView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/profile/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/profile/myphotos',
      name: 'myphotos',
      component: MyPhotosView,
    },
    {
      path: '/profile/upload',
      name: 'upload',
      component: UploadView,
    },
  ],
})

export default router
