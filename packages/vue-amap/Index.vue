<template>
	<div :style="{width,height}" ref="container"></div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { AMap, GeolocationOptions, Map, MapOptions } from '../../index'

  @Component
  export default class VueAmap extends Vue {
    map!: Map
    amap!: AMap
    @Prop({ type: String, default: '500px' }) readonly width!: string
    @Prop({ type: String, default: '500px' }) readonly height!: string
    @Prop({ type: Object }) readonly config!: MapOptions
    @Prop({ type: Object }) readonly geolocationOptions!: GeolocationOptions

    mounted () {
      this.$amapLoader().then((amap) => {
        this.amap = amap
        this._initMap()
      })
    }

    _initMap () {
      // @see https://lbs.amap.com/api/javascript-api/reference/overlay#MarkerOptions
      const { amap, geolocationOptions } = this
      this.map = new amap.Map(this.$refs.container, this.config)
      geolocationOptions && this.getCurrentPosition()

      this.map.on('complete', () => {
        this.$emit('complete', this.map)
      })
    }

    getMap () {
      if (!this.map) {
        throw new Error('地图未完成加载')
      }
      return this.map
    }

    getCurrentPosition () {
      const { map, amap, geolocationOptions } = this
      amap.plugin('AMap.Geolocation', () => {
        const geolocation = new amap.Geolocation(geolocationOptions)

        map.addControl(geolocation)

        geolocation.getCurrentPosition((status: string, result: any) => {
          if (status === 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        })

        function onComplete (data: any) {
          // data是具体的定位信息
          console.log('data======================')
          console.log(data) // todo
          console.log('======================')

        }

        function onError (data: any) {
          // 定位出错
          throw data
        }
      })
    }

    destroyed () {
      this.map && this.map.destroy()
    }

  }
</script>


<style scoped>

</style>
