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
    _setPropWatchers() {
      if (this.optionsProps) {
        Object.keys(this.optionsProps).forEach(prop => {
          function camelCase(name) {
            return name.slice(0, 1).toUpperCase() + name.slice(1)
          }

          let handleFn = this.mapComponent[`set${ camelCase(prop) }`]

          if (handleFn) {
            const unwatchFn = this.$watch(`$attrs.${ prop }`, (now) => {
              handleFn.call(this.mapComponent, now) // 指定this为map
            })
            this.$once('hook:destroy', () => {
              unwatchFn()
            })
          }
        })
      }
    },
  },
}
