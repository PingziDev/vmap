import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAmapLoader from '@vita2333/vmap'
// import VueAmapLoader from '../packages'
import { AMapConfig } from './amap.config.js'

Vue.config.productionTip = false
Vue.use(VueAmapLoader, AMapConfig)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
