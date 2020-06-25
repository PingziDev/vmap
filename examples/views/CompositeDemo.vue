<template>
	<div>
		<p>结果坐标:{{ position }}</p>
		<p>具体地址:{{ address||'(因为浏览器和api限额等问题,有时可能无法获取具体地址)' }}</p>
		<div class="flex-wrapper">
			<label>地址搜索
				<input id="tipinput" type="text">
			</label>
		</div>
		<vmap :center="position" :resizeEnable="true" @dragend="onDragend">
			<vmap-tool-bar position="RT"></vmap-tool-bar>
			<vmap-geolocation @getCurrentPosition="onGetCurrentPosition" v-bind="locationOptions"></vmap-geolocation>
			<vmap-auto-complete @select="onSelect" input="tipinput"></vmap-auto-complete>
		</vmap>
	</div>
</template>

<script>
  import { Vmap, VmapAutoComplete, VmapGeolocation, VmapToolBar } from '@vita2333/vmap'

  export default {
    name: 'CompositeDemo',
    components: { VmapAutoComplete, VmapGeolocation, VmapToolBar, Vmap },
    data() {
      return {
        position: undefined,
        address: undefined,
        locationOptions: {
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB',
          markerOptions: {
            icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
          },
          needAddress: true,
        },
      }
    },
    methods: {
      onSelect(event) {
        console.log('event======================')
        console.log(event)
        console.log('======================')
        this.position = [event.poi.location.lng, event.poi.location.lat]
        this.address = event.poi.district + event.poi.address + event.poi.name
      },
      onGetCurrentPosition(status, result) {
        if (status === 'complete') {
          console.log('result======================')
          console.log(result)
          console.log('======================')
          this.position = [result.position.lng, result.position.lat]
          this.address = result.formattedAddress
        } else {
          throw new Error('定位失败:' + result)
        }
      },
      onDragend(event) {
        console.log('======================')
        console.log(event) // todo
        console.log('======================')

      },
    },
  }
</script>

