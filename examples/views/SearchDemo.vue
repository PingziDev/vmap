<template>
	<div>
		<div class="flex-wrapper">
			<label>地址搜索
				<input id="tipinput" type="text" v-model="searchText">
			</label>
		</div>
		<vmap :center="center" :resizeEnable="true">
			<vmap-auto-complete @select="onSelect" input="tipinput"></vmap-auto-complete>
		</vmap>
	</div>
</template>

<script>

  export default {
    name: 'SearchDemo',
    data() {
      return {
        searchText: '',
        center: undefined,
      }
    },
    methods: {
      onSelect(event) {
        console.log('event======================')
        console.log(event)

      },
    },
  }
</script>

