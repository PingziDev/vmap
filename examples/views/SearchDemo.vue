<template>
	<div>
		<div class="flex-wrapper">
			<label>地址搜索
				<input id="tipinput" type="text" v-model="searchText">
			</label>
		</div>
		<vmap :center="[lng,lat]" :resizeEnable="true">
			<vmap-auto-complete input="tipinput"></vmap-auto-complete>
		</vmap>
	</div>
</template>

<script>

  export default {
    name: 'SearchDemo',
    data() {
      return {
        searchText: '',
        lng: '',
        lat: '',
      }
    },

  }
</script>

