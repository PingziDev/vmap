import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAmapLoader from '../packages'

Vue.config.productionTip = false

Vue.use(VueAmapLoader, {
  key: 'd66a654f2506be85a89b2802e329111f', // 首次调用load必须填写key
  version: '2.0',     // JSAPI 版本号
  plugins: ['AMap.Scale'],  // 同步加载的插件列表
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
