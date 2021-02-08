import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: 'login',
      },
      {
        name: 'Login',
        path: 'login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        name: 'Signup',
        path: 'signup',
        component: () => import('@/views/SignupView.vue'),
      },
      {
        name: 'Main',
        path: 'main',
        beforeEnter(to, from, next) {
          store.getters.isLogin ? next() : next('/login');
        },
        component: () => import('@/views/PostListView.vue'),
      },
      {
        name: 'PostAdd',
        path: 'post/add',
        component: () => import('@/views/PostAddView.vue'),
      },
      {
        name: 'PostEdit',
        path: 'post/edit/:id',
        component: () => import('@/views/PostEditView.vue'),
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
