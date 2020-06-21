import VueAmap from './VueAmap.vue'
import VueAmapComponent from './VueAmapMarker.vue'
import Vue, { VueConstructor } from 'vue'
import { AMapLoaderOptions } from '../types'
import AMapLoader from '@amap/amap-jsapi-loader'

const components = [VueAmapComponent, VueAmap]
const install: any = ((
  Vue1: VueConstructor<Vue>, options: AMapLoaderOptions) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
  components.forEach((component) => Vue1.component(component.name, component))
})

export default {
  install,
}
