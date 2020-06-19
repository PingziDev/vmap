<template>
  <demo-block>
    <vue-amap :mapOptions="mapOptions" ref="amap"
              v-if="mapOptions"></vue-amap>
  </demo-block>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { VueAmap } from '../../packages'
  import DemoBlock from '@/components/DemoBlock.vue'
  import { MapOptions } from '../../types'

  Vue.use(VueAmap)
  @Component({
    components: { DemoBlock },
  })
  export default class InitialDemo extends Vue {
    mapOptions: MapOptions | null = null

    created () {
      this.$amapLoader().then((AMap) => {
        this.mapOptions = {
          zoom: 11,  // 设置地图显示的缩放级别
          center: [116.397428, 39.90923], // 设置地图中心点坐标
          layers: [new AMap.TileLayer.Satellite()],  // 设置图层,可设置成包含一个或多个图层的数组
          mapStyle: 'amap://styles/whitesmoke',  // 设置地图的显示样式
          viewMode: '2D',  // 设置地图模式
        }
      })
    }
  }
</script>

