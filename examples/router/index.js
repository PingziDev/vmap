import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const demos = [
  {
    path: '/',
    name: 'BaseDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/BaseDemo.vue'),
    meta: { title: '基本用法' },
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: demos,
});

export default router;
