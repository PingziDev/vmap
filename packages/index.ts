import VueAmap from './vue-amap'
import Vue, { VueConstructor } from 'vue'
import { AMapLoaderOptions } from '../types'
import AMapLoader from '@amap/amap-jsapi-loader'

const install: any = ((
  Vue1: VueConstructor<Vue>, options: AMapLoaderOptions) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
})

export { VueAmap }

export default {
  install,
}
