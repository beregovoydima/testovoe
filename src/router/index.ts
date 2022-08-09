import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import UserPage from '@/views/UserPage.vue';
import CreateUserPage from '@/views/CreateUserPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserPage,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateUserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
