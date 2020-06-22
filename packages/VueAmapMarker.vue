<script>
  export default {
    name: 'VueAmapMarker',
    props: [
      // event
      'events',
    ],
    data() {
      return {
        marker: undefined,
      }
    },
    computed: {
      optionsProps() {
        let { events, ...options } = this.$props
        for (const i in options) {
          if (!options[i]) {
            delete options[i]
          }
        }
        return Object.keys(options).length > 0 ? options : undefined
      },
    },
    mounted() {
      this.getMap(map => {
        this.marker = new AMap.Marker(this.optionsProps)
        map.add(this.marker)
      })
    },
    destroyed() {
      this.marker && this.getMap(map => {
        map.remove(this.marker)
      })
    },
    methods: {},
    inject: ['getMap'],
    render(createElement, context) {
      return null
    },
  }
</script>

