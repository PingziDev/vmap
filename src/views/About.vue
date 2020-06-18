<template>
  <div class="home">
    <p>基本用法</p>
    <vue-amap></vue-amap>
    <p>自定义初始化数据</p>
    <vue-amap :config="config" ref="amap"
              v-if="config"></vue-amap>
    <p>定位,控制缩放</p>
    <vue-amap @complete="onComplete" ref="amap"></vue-amap>
    <div v-if="map">
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>
      <button @click="getCurrentPosition">定位</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { VueAmap } from '../../packages'

Vue.use(VueAmap)
@Component({
  components: { VueAmap },
})
export default class Home extends Vue {
  config: any = null
  map: any = null
  @Prop({ type: String, default: '300px' }) private width!: string
  @Prop({ type: String, default: '300px' }) private height!: string

  created () {
    this.$amapLoader().then((AMap) => {
      this.config = {
        zoom: 10,  // 设置地图显示的缩放级别
        center: [116.397428, 39.90923], // 设置地图中心点坐标
        layers: [new AMap.TileLayer.Satellite()],  // 设置图层,可设置成包含一个或多个图层的数组
        mapStyle: 'amap://styles/whitesmoke',  // 设置地图的显示样式
        viewMode: '2D',  // 设置地图模式
      }
    })
  }

  /**
   * @see https://lbs.amap.com/api/jsapi-v2/documentation
   */
  onComplete (map: any) {
    this.map = map
  }

  zoomIn () {
    const room = this.map.getZoom()
    this.map.setZoom(room + 1)
  }

  zoomOut () {
    const room = this.map.getZoom()
    this.map.setZoom(room - 1)
  }

  getCurrentPosition () {
    ; (this.$refs.amap as any).getCurrentPosition()
  }
}
</script>

