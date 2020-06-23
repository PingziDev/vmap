<template>
	<demo-block>
		<button @click="showPlugin=!showPlugin">显示缩放</button>
		<input id="tipinput" type="text" v-model="searchText">
		<vmap :resizeEnable="true">
			<vmap-auto-complete input="tipinput"></vmap-auto-complete>
		</vmap>
	</demo-block>
</template>

<script>

  export default {
    name: 'SearchDemo',
    data() {
      return {
        searchText: '',
      }
    },

  }
</script>

