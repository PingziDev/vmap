<script>
  export default {
    name: 'VueAmapMarker',
    props: [
      // event
      'events',
    ],
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
        const marker = new AMap.Marker(this.optionsProps)
        map.add(marker)
      })
    },
    destroyed() {
    },
    methods: {},
    inject: ['getMap'],
    render(createElement, context) {
      return null
    },
  }
</script>

