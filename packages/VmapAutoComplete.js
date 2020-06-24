import MapComponentMixin from './mixins/MapComponentMixin'

export default {
  name: 'VmapAutoComplete',
  mixin: [MapComponentMixin],
  methods: {
    installComponent(map) {
      map.plugin(['AMap.Autocomplete'], function () {
        this.component = new AMap.AutoComplete(this.mapOptions)
      })
    },
    uninstallComponent(map) {},
  },
}


