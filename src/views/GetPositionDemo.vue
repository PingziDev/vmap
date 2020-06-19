<template>
  <demo-block>
    <vue-amap :geolocationOptions="geolocationOptions"></vue-amap>
  </demo-block>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { VueAmap } from '../../packages'
  import DemoBlock from '@/components/DemoBlock.vue'

  Vue.use(VueAmap)
  @Component({
    components: { DemoBlock },
  })
  export default class GetPositionDemo extends Vue {
    geolocationOptions = {
      enableHighAccuracy: true,// 是否使用高精度定位，默认:true
      timeout: 10000,          // 超过10秒后停止定位，默认：5s
      buttonPosition: 'RB',    // 定位按钮的停靠位置
      // buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true,   // 定位成功后是否自动调整地图视野到定位点
    }

  }
</script>

