<template>
	<div :style="{width,height}" ref="container">
		<slot></slot>
	</div>
</template>
<script>
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
    },
    methods: {
      async _initMap() {
        global.AMap = await this.$amapLoader()
        this.$set(this, 'map', new AMap.Map(this.$refs.container, this.optionsProps))
        this._bindEvents()
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
