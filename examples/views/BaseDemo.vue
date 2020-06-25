<template>
	<div>
		<div class="flex-wrapper">
			<label>经度<input type="number" v-model="lng"></label>
			<label>纬度<input type="number" v-model="lat"></label>
			<label>缩放<input type="number" v-model="zoom"></label>
		</div>
		<vmap :center="[lng,lat]" :zoom="zoom" @click="click" @complete="complete" height="300px" width="300px"></vmap>
	</div>
</template>


<script>
  import { Vmap } from '@vita2333/vmap'

  export default {
    name: 'BaseDemo',
    components: { Vmap },
    data() {
      return {
        zoom: 10,
        lng: 116.397428,
        lat: 39.90923,
      }
    },
    methods: {
      complete: () => {
        console.log('地图加载完成')
      },
      click: (data) => {
        alert('点击地图')
      },
    },
  }
</script>

