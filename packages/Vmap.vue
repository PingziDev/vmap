<template>
	<div :style="{width,height}" ref="container">
		<slot></slot>
	</div>
</template>
<script>
  export default {
    name: 'Vmap',
    inheritAttrs: false, // $attrs不显示在dom上
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
      /**
       * Map options
       */
      center: {},
      zoom: {},
      rotation: {},
      pitch: {},
      viewMode: {},
      features: {},
      layers: {},
      zooms: {},
      dragEnable: {},
      zoomEnable: {},
      jogEnable: {},
      pitchEnable: {},
      rotateEnable: {},
      animateEnable: {},
      keyboardEnable: {},
      doubleClickZoom: {},
      scrollWheel: {},
      touchZoom: {},
      touchZoomCenter: {},
      showLabel: {},
      defaultCursor: {},
      isHotspot: {},
      mapStyle: {},
      wallColor: {},
      roofColor: {},
      showBuildingBlock: {},
      showIndoorMap: {},
      skyColor: {},
      mask: {},
    },
    data() {
      return {
        map: undefined,
        attrs: {},
      }
    },
    computed: {
      optionsProps() {
        const { width, height, events, ...options } = this.$props
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
    methods: {
      async _initMap() {
        global.AMap = await this.$amapLoader()
        this.$set(this, 'map', new AMap.Map(this.$refs.container, this.optionsProps))
        this._bindEvents()
        this._setPropWatchers()
        this.$once('hook:destroy', () => {
          this.map.destroy()
        })
      },
      _bindEvents() {
        if (Object.keys(this.$listeners).length > 0) {
          for (const eventName in this.$listeners) {
            this.map.on(eventName, this.$listeners[eventName])
          }
        }
      },
      _setPropWatchers() {
        if (this.optionsProps) {
          Object.keys(this.optionsProps).forEach(prop => {
            function camelCase(name) {
              return name.slice(0, 1).toUpperCase() + name.slice(1)
            }

            let handleFun = this.map[`set${ camelCase(prop) }`]
            if (handleFun) {
              const unwatchFn = this.$watch(prop, now => {
                handleFun(now)
              })
              this.$once('hook:destroy', () => {
                unwatchFn()
              })
            }
          })
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
