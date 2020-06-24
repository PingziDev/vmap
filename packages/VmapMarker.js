import MapComponentMixin from './mixins/MapComponentMixin'

export default {
  name: 'VmapMarker',
  mixins: [MapComponentMixin],
  methods: {
    installComponent(map) {
      this.mapComponent = new AMap.Marker(this.mapOptions)
      map.add(this.mapComponent)
    },
    uninstallComponent(map) {
      map.remove(this.mapComponent)
    },
  },
}
