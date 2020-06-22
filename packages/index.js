import VueAmap from './VueAmap.vue'
import VueAmapComponent from './VueAmapMarker.vue'
import AMapLoader from '@amap/amap-jsapi-loader'

const components = [VueAmapComponent, VueAmap]
const install = ((
  Vue1, options) => {
  Vue1.$amapLoader = () => AMapLoader.load(options)
  components.forEach((component) => Vue1.component(component.name, component))
})

export default {
  install,
}
