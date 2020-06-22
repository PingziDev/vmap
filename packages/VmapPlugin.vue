<script>
  export default {
    name: 'VmapPlugin',
    props: [
      'name',
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
        let { ...options } = this.$attrs
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
        AMap.plugin([`AMap.${ this.name }`], () => {
          this.marker = new AMap[this.name](this.optionsProps)
          map.addControl(this.marker)
        })
      })
    },
    destroyed() {
      this.marker && this.getMap(map => {
        map.removeControl(this.marker)
      })
    },
    methods: {},
    inject: ['getMap'],
    render(createElement, context) {
      return null
    },
  }


</script>
