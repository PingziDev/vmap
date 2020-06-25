<template>
	<div>
		<div class="flex-wrapper">
		</div>
		<vmap>
			<vmap-marker :key="index" v-bind="marker" v-for="(marker,index) in markers"/>
		</vmap>
	</div>
</template>

<script>
  import { Vmap, VmapMarker } from '@vita2333/vmap'

  export default {
    name: 'MarkerDemo',
    components: { VmapMarker, Vmap },
    data() {
      return {
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

