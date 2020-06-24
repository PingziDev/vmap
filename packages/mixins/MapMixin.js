export default {
  data() {
    return {
      mapComponent: undefined,
    }
  },
  computed: {
    optionsProps() {
      const { width, height, events, ...options } = this.$attrs
      for (const i in options) {
        if (!options[i]) {
          delete options[i]
        }
      }
      return Object.keys(options).length > 0 ? options : undefined
    },
  },
  methods: {
    /**
     * 作为$attrs传入的参数会被$watch()跟踪,发生改变时默认会调用this.map.setXXX()方法处理,如果参数的setter不符合这种格式,需要在Vue中定义setXXX()方法
     * 例如:
     * <vmap :zoom="zoom"/>
     * 当zoom变化时,默认
     * ```vmap
     * this.map.setZoom(val)
     * ```
     * 自定义
     * ```vmap
     * methods:{
     *   setZoom(val){
     *     return this.map.changeZoom(val)
     *   }
     * }
     * ```
     */
    setPropWatchers() {
      if (this.optionsProps) {
        Object.keys(this.optionsProps).forEach(prop => {
          function _camelCase(name) {
            return name.slice(0, 1).toUpperCase() + name.slice(1)
          }

          let handleFn
          if (this[`set${ prop }`]) {
            handleFn = this[`set${ prop }`]
          } else {
            handleFn = this.mapComponent[`set${ _camelCase(prop) }`]
          }
          if (handleFn) {
            const unwatchFn = this.$watch(() => {
              return this.$attrs[prop]
            }, (now) => {
              handleFn.call(this.mapComponent, now) // 指定this为map
            })
            this.$once('hook:destroy', () => {
              unwatchFn()
            })
          } else {
            throw new Error('no handle function for ' + prop)
          }
        })
      }
    },
  },
}
