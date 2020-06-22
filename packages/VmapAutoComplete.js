export default {
  name: 'VmapAutoComplete',
  props: [],
  data() {
    return {
      component: undefined,
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
      AMap.plugin(['AMap.AutoComplete'], () => {
        this.component = new AMap.AutoComplete(this.optionsProps)
        console.log('thisComponent======================')
        console.log(this.component) // todo
        console.log('======================')

      })
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


