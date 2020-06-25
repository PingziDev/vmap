export default {
  inheritAttrs: false,
  data() {
    return {
      mapComponent: undefined,
    }
  },
  computed: {
    mapOptions() {
      const { width, height, events, ...options } = this.$attrs
      for (const i in options) {
        if (options[i] === undefined) {
          delete options[i]
        }
      }
      return Object.keys(options).length > 0 ? options : undefined
    },
  },
  methods: {
    bindEvents() {
      if (Object.keys(this.$listeners).length > 0) {
        for (const eventName in this.$listeners) {
          this.mapComponent.on(eventName, this.$listeners[eventName])
        }
      }
    },
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
      if (this.mapOptions) {
        Object.keys(this.mapOptions).forEach(prop => {
          function _upperFirst(name) {
            return name.slice(0, 1).toUpperCase() + name.slice(1)
          }

          const defaultSetter = `set${ _upperFirst(prop) }`
          let setterFn
          if (this[defaultSetter]) {
            setterFn = this[defaultSetter]
          } else {
            setterFn = this.mapComponent[defaultSetter]
          }
          if (setterFn) {
            const unwatchFn = this.$watch(() => {
              return this.$attrs[prop]
            }, (now) => {
              setterFn.call(this.mapComponent, now) // 指定this为map
            })
            this.$once('hook:destroy', () => {
              unwatchFn()
            })
          }
          // else {
          //   throw new Error('no handle function for ' + prop)
          // }
        })
      }
    },
  },
}
