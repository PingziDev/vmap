<template>
	<div>
		<demo-block doc="https://lbs.amap.com/api/jsapi-v2/example/location/browser-location" title="基本用法">
			<vue-amap :geolocationOptions="geolocationOptions1" v-if="geolocationOptions1"></vue-amap>
		</demo-block>
		<demo-block doc="https://lbs.amap.com/api/jsapi-v2/example/location/custom-location-icon" title="自定义定位点">
			<vue-amap :geolocationOptions="geolocationOptions2" v-if="geolocationOptions2"></vue-amap>
		</demo-block>
	</div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { VueAmap } from '../../packages'
  import DemoBlock from '@/components/DemoBlock.vue'
  import { GeolocationOptions } from '../../index'

  Vue.use(VueAmap)
  @Component({
    components: { DemoBlock },
  })
  export default class GetPositionDemo extends Vue {
    geolocationOptions1: GeolocationOptions = {
      enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      timeout: 10000,           // 超过10秒后停止定位，默认：5s
      buttonPosition: 'RB',     // 定位按钮的停靠位置
      zoomToAccuracy: true,    // 定位成功后是否自动调整地图视野到定位点
    }
    geolocationOptions2: GeolocationOptions | null = null

    created () {
      this.$amapLoader().then((AMap) => {
        this.geolocationOptions2 = {
          showButton: true, // 是否显示定位按钮
          buttonPosition: 'LB', // 定位按钮的位置
          /* LT LB RT RB */
          buttonOffset: new AMap.Pixel(10, 20), // 定位按钮距离对应角落的距离
          showMarker: true, // 是否显示定位点
          markerOptions: { // 自定义定位点样式，同Marker的Options
            offset: new AMap.Pixel(-18, -36),
            content: '<img src="https: // a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>',
          },
          showCircle: true, // 是否显示定位精度圈
          circleOptions: { // 定位精度圈的样式
            strokeColor: '#0093FF',
            noSelect: true,
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: '#02B0FF',
            fillOpacity: 0.25,
          },
        }
      })
    }

  }
</script>
