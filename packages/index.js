import AMapLoader from '@amap/amap-jsapi-loader'
import { version } from './../package.json'

const install = ((
  Vue1, options) => {
  Vue1.prototype.$amapLoader = () => AMapLoader.load(options)
})

export default {
  version,
  install,
}
