<template>
	<div>
		定位信息: {{ position }}
		<vmap :resizeEnable="true">
			<vmap-geolocation @getCurrentPosition="onGetCurrentPosition" v-bind="options"></vmap-geolocation>
		</vmap>
	</div>
</template>

<script>
  export default {
    name: 'LocationDemo',
    data() {
      return {
        position: undefined,
        options: {
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
        },
      }
    },
    methods: {
      onGetCurrentPosition(status, result) {
        console.log('result======================')
        console.log(result)
        console.log('======================')
        this.position = result.position
      },
    },
  }
</script>

