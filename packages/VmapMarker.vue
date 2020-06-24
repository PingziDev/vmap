<script>
  import MapMixin from './mixins/MapMixin'
  import MapComponentMixin from './mixins/MapComponentMixin'

  export default {
    name: 'VmapMarker',
    mixins: [MapMixin, MapComponentMixin],
    mounted() {
      this.getMap(map => {
        this.mapComponent = new AMap.Marker(this.optionsProps)
        map.add(this.mapComponent)
      })
    },
    destroyed() {
      this.mapComponent && this.getMap(map => {
        map.remove(this.mapComponent)
      })
    },
    methods: {},

  }
</script>

