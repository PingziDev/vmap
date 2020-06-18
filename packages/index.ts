import VueAmap from './vue-amap'
import Vue, { PluginObject, VueConstructor } from 'vue'
import { AmapConfig } from '../index'
import AMapLoader from '@amap/amap-jsapi-loader'

(VueAmap as unknown as PluginObject<typeof Vue>).install = (
  Vue1) => {
  Vue1.component(VueAmap.name, VueAmap)
}
const install: any = ((Vue1: VueConstructor<Vue>, options: AmapConfig) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
})

export { VueAmap }

export default {
  install,
}
