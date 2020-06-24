import MapComponentMixin from './mixins/MapComponentMixin'

export default {
  name: 'VmapAutoComplete',
  mixins: [MapComponentMixin],
  methods: {
    installComponent(map) {
      return new Promise(resolve => {
        map.plugin(['AMap.AutoComplete'], () => {
          this.mapComponent = new AMap.AutoComplete(this.mapOptions)
          resolve()
        })
      })
    },
    uninstallComponent(map) {},
  },
}


