<template>
	<demo-block>
		<div class="flex-wrapper">
			<label>关键字
				<input id="tipinput" type="text" v-model="searchText">
			</label>
		</div>
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

