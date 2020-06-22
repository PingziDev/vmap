import Vmap from './Vmap'
import VmapMarker from './VmapMarker'
import VmapPlugin from './VmapPlugin'
import AMapLoader from '@amap/amap-jsapi-loader'

const components = [Vmap, VmapMarker, VmapPlugin]
const install = ((
  Vue1, options) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
  components.forEach((component) => Vue1.component(component.name, component))
})

export default {
  install,
}
