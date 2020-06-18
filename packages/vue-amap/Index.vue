<template>
	<div :style="{width,height}" ref="container"></div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { AMap, Map } from '../../index'

  @Component
  export default class VueAmap extends Vue {
    map!: Map
    amap!: AMap
    @Prop({ type: String, default: '500px' }) private width!: string
    @Prop({ type: String, default: '500px' }) private height!: string
    @Prop({ type: [Object] }) private config!: object

    mounted () {
      this.$amapLoader().then((amap) => {
        this.amap = amap
        this._initMap()
      })
    }

    _initMap () {
      // @see https://lbs.amap.com/api/javascript-api/reference/overlay#MarkerOptions
      const { amap } = this
      this.map = new amap.Map(this.$refs.container)
      this.map.on('complete', () => {
        this.$emit('complete', this.map)
      })
      // this.getCurrentPosition()
    }

    public getMap () {
      if (!this.map) {
        throw new Error('地图未完成加载')
      }
      return this.map
    }

    // public getCurrentPosition () {
    //   const { map, AMap } = this
    //   AMap.plugin('AMap.Geolocation', function () {
    //     const geolocation = new AMap.Geolocation()
    //
    //     map.addControl(geolocation)
    //
    //     geolocation.getCurrentPosition(function (status, result) {
    //       if (status == 'complete') {
    //         onComplete(result)
    //       } else {
    //         onError(result)
    //       }
    //     })
    //
    //     function onComplete (data) {
    //       // data是具体的定位信息
    //
    //     }
    //
    //     function onError (data) {
    //       // 定位出错
    //       throw data
    //     }
    //   })
    // }

    destroyed () {
      this.map && this.map.destroy()
    }

  }
</script>


<style scoped>

</style>
