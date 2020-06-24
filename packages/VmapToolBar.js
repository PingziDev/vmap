import MapComponentMixin from './mixins/MapComponentMixin'

export default {
  name: 'VmapToolBar',
  mixins: [MapComponentMixin],
  computed: {},
  methods: {
    installComponent(map) {
      return new Promise(resolve => {
        map.plugin(['AMap.ToolBar'], () => {
          this.mapComponent = new AMap.ToolBar(this.mapOptions)
          map.addControl(this.mapComponent)
          resolve()
        })
      })
    },
    uninstallComponent(map) {
      map.removeControl(this.mapComponent)
    },
  },
}


