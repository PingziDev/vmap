<template>
	<demo-block>
		<button @click="showMarker=!showMarker">toggle marker</button>
		<vue-amap>
			<vue-amap-marker :key="index"
			                 v-bind="option"
			                 v-for="(option,index) in options"
			                 v-if="showMarker"></vue-amap-marker>
		</vue-amap>
	</demo-block>
</template>


<script>
  export default {
    name: 'MarkerDemo',
    components: {},
    data() {
      return {
        showMarker: true,
        options: [],
        events: {
          click: (data) => {
            console.log('click map===')
            console.log(data)
          },
          complete: () => {
            console.log('complete')
          }
          ,
        },
      }
    },
    beforeCreate() {
      this.$amapLoader().then(AMap => {
        global.AMap = AMap
      })
    },
    created() {
      this.$amapLoader().then(AMap => {
        this.options = [
          {},
          {
            position: new AMap.LngLat(116.397428, 39.90923),
            icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
            anchor: 'bottom-center',
          },
        ]
      })
    },
  }
</script>

