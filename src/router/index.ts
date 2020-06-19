import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const demos: RouteConfig[] = [
  {
    path: '/BaseDemo',
    name: 'BaseDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/BaseDemo.vue'),
    meta: { title: '基本用法' },
  },
  {
    path: '/InitialDemo',
    name: 'InitialDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/InitialDemo.vue'),
    meta: { title: '自定义初始化数据' },
  },
  {
    path: '/GetPositionDemo',
    name: 'GetPositionDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/GetPositionDemo.vue'),
    meta: { title: '定位' },
  },
  {
    path: '/MapControlDemo.vue',
    name: 'MapControlDemo.vue',
    component: () => import(/* webpackChunkName: "demo" */ '../views/MapControlDemo.vue'),
    meta: { title: '地图控件' },
  },
]

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  ...demos,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
