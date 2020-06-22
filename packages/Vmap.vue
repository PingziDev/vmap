<template>
	<div :style="{width,height}" ref="container">
		<slot></slot>
	</div>
</template>
<script>
  import Vue from 'vue'

  export default {
    name: 'Vmap',
    props: {
      width: {
        type: String,
        default: '500px',
      },
      height: {
        type: String,
        default: '500px',
      },
      events: { type: Object },
    },
    data() {
      return {
        map: undefined,
        unwatchFns: [],
      }
    },
    computed: {
      optionsProps() {
        const { ...options } = this.$attrs
        for (const i in options) {
          if (!options[i]) {
            delete options[i]
          }
        }
        return Object.keys(options).length > 0 ? options : undefined
      },
    },
    mounted() {
      this._initMap()
    },
    destroyed() {
      this.map && this.map.destroy()
      this.unwatchFns.forEach(fn => fn())
      this.unwatchFns = []
    },
    methods: {
      async _initMap() {
        global.AMap = await this.$amapLoader()
        this.$set(this, 'map', new AMap.Map(this.$refs.container, this.optionsProps))
        this._bindEvents()
        this._setPropWatchers()
      },
      _setPropWatchers() {
        Vue.observable(this.$attrs)
        if (this.optionsProps) {
          Object.keys(this.optionsProps).forEach(prop => {
            // todo
            function camelCase(name) {
              return name.slice(0, 1).toUpperCase() + name.slice(1)
            }

            let handleFun = this.map[`set${ camelCase(prop) }`]
            if (handleFun) {
              console.log(prop)
              this.unwatchFns.push(this.$watch(this.$attrs[prop], now => {
                console.log('now======================')
                console.log(now) // todo
                console.log('======================')

                handleFun(now)
              }))
            }
          })
        }
      },
      _bindEvents() {
        if (this.events) {
          for (const eventName in this.events) {
            this.map.on(eventName, this.events[eventName])
          }
        }
      },
      getMap(callback) {
        const checkForMap = () => {
          if (this.map) {
            callback(this.map)
          } else {
            setTimeout(checkForMap, 50)
          }
        }

        checkForMap()
      },
    },
    provide() {
      return {
        getMap: this.getMap,
      }
    },

  }
</script>


<style scoped>

</style>
