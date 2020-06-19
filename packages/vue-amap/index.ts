import VueAmap from './Index.vue'
import Vue, { PluginObject, VueConstructor } from 'vue'
import { Map } from '../../types'

(VueAmap as unknown as PluginObject<typeof Vue>).install = (
  Vue1) => {
  Vue1.component(VueAmap.name, VueAmap)
}

interface VueAmapType {
  getMap (): Map

  getCurrentPosition (): void
}

export default VueAmap as unknown as PluginObject<Vue> & VueConstructor<Vue> & VueAmapType
