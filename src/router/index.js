import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/login',
      },
      {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        name: 'Signup',
        path: '/signup',
        component: () => import('@/views/SignupView.vue'),
      },
      {
        name: 'Main',
        path: '/main',
        component: () => import('@/views/PostListView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
