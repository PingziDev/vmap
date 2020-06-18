import VueAmap from './Index.vue'
import Vue, { PluginObject, VueConstructor } from 'vue'

(VueAmap as unknown as PluginObject<typeof Vue>).install = (
  Vue1) => {
  Vue1.component(VueAmap.name, VueAmap)
}

export default VueAmap as unknown as PluginObject<Vue> & VueConstructor<Vue>
