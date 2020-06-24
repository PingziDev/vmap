import MapMixin from './mixins/MapMixin'
import MapComponentMixin from './mixins/MapComponentMixin'

export default {
  name: 'VmapMarker',
  mixins: [MapMixin, MapComponentMixin],
  methods: {
    installComponent(map) {
      this.mapComponent = new AMap.Marker(this.optionsProps)
      map.add(this.mapComponent)
    },
    uninstallComponent(map) {
      map.remove(this.mapComponent)
    },
  },
}
