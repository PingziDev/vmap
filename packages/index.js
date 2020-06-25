import AMapLoader from '@amap/amap-jsapi-loader'
import { version } from './../package.json'
import Vmap from './Vmap'
import VmapMarker from './VmapMarker'
import VmapGeolocation from './VmapGeolocation'
import VmapAutoComplete from './VmapAutoComplete'
import VmapToolBar from './VmapToolBar'

export {
  Vmap,
  VmapMarker,
  VmapGeolocation,
  VmapAutoComplete,
  VmapToolBar,
}

const install = ((
  Vue, options) => {
  Vue.prototype.$amapLoader = () => AMapLoader.load(options)
})

export default {
  version,
  install,
}
