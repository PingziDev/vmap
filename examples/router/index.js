import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const demos = [
  {
    path: '/',
    name: 'BaseDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/BaseDemo'),
    meta: { title: '基本用法' },
  },
  {
    path: '/MarkerDemo',
    name: 'MarkerDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/MarkerDemo'),
    meta: { title: '地图标记' },
  },
  {
    path: '/PluginDemo',
    name: 'PluginDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/PluginDemo'),
    meta: { title: '缩放按钮' },
  },
  {
    path: '/SearchDemo',
    name: 'SearchDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/SearchDemo'),
    meta: { title: '地址搜索' },
  },
  {
    path: '/LocationDemo',
    name: 'LocationDemo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/LocationDemo'),
    meta: { title: '定位' },
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: demos,
});

export default router;
