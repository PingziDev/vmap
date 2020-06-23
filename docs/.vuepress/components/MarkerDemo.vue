<template>
	<demo-block>
		<button @click="showMarker=!showMarker">显示标记</button>
		<vmap>
			<vmap-marker :key="index"
			             v-bind="marker"
			             v-for="(marker,index) in markers"
			             v-if="showMarker"></vmap-marker>
		</vmap>
	</demo-block>
</template>


<script>
  export default {
    name: 'MarkerDemo',
    components: {},
    data() {
      return {
        showMarker: true,
        markers: [
          {
            position: [116.397428, 39.90923],
            icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
            anchor: 'bottom-center',
          },
          {
            position: [116.6, 39.90923],
            icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png',
          },
        ],
      }
    },

  }
</script>

