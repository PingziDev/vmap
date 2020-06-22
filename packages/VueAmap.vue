<template>
	<div ref="container" style="width: 500px;height: 500px;">
		<slot></slot>
	</div>
</template>
<script>
  export default {
    name: 'VueAmap',
    props: [
      'events',
    ],
    data() {
      return {
        map: undefined,
      }
    },
    computed: {
      optionsProps() {
        let { events, ...options } = this.$attrs
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
        this.$amapLoader().then(AMap => {
          global.AMap = AMap
          this.$set(this, 'map', new AMap.Map(this.$refs.container, this.optionsProps))
          if (this.events) {
            for (const eventName in this.events) {
              this.map.on(eventName, this.events[eventName])
            }
          }
        })
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
