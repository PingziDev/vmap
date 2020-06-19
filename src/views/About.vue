<template>
  <div class="home">
    <p>基本用法</p>
    <vue-amap></vue-amap>
    <p>自定义初始化数据</p>
    <vue-amap :config="config" ref="amap"
              v-if="config"></vue-amap>
    <p>定位</p>
    <vue-amap :geolocationOptions="geolocationOptions"></vue-amap>
    <p>控制缩放</p>
    <vue-amap @complete="onComplete" ref="amap1"></vue-amap>
    <div v-if="map1">
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { VueAmap } from '../../packages'

Vue.use(VueAmap)
@Component
export default class Home extends Vue {
  config: any = null
  map1: any = null
  geolocationOptions = {
    enableHighAccuracy: true,// 是否使用高精度定位，默认:true
    timeout: 10000,          // 超过10秒后停止定位，默认：5s
    buttonPosition: 'RB',    // 定位按钮的停靠位置
    // buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    zoomToAccuracy: true,   // 定位成功后是否自动调整地图视野到定位点
  }
  @Prop({ type: String, default: '300px' }) private width!: string
  @Prop({ type: String, default: '300px' }) private height!: string

  created () {
    this.$amapLoader().then((AMap) => {
      this.config = {
        zoom: 11,  // 设置地图显示的缩放级别
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
    this.map1 = map
  }

  zoomIn () {
    const map = (this.$refs.amap1 as any).getMap()
    const room = map.getZoom()
    map.setZoom(room + 1)
  }

  zoomOut () {
    const room = this.map1.getZoom()
    this.map1.setZoom(room - 1)
  }

}
</script>

