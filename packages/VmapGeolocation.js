import MapComponentMixin from './mixins/MapComponentMixin'

export default {
  name: 'VmapGeolocation',
  mixins: [MapComponentMixin],
  computed: {},
  methods: {
    installComponent(map) {
      return new Promise(resolve => {
        map.plugin(['AMap.Geolocation'], () => {
          this.mapComponent = new AMap.Geolocation(this.mapOptions)
          map.addControl(this.mapComponent)
          this.getCurrentPosition()
          resolve()
        })
      })
    },
    uninstallComponent(map) {
      map.removeControl(this.mapComponent)
    },
    // map methods
    // todo 简化写法
    getCurrentPosition() {
      this.mapComponent.getCurrentPosition((status, result) => {
        this.$emit('getCurrentPosition', status, result)
      })
    },
    getCityInfo() {
      this.mapComponent.getCityInfo((status, result) => {
        this.$emit('getCityInfo', status, result)
      })
    },
  },
}


