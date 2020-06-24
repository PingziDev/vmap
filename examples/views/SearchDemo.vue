<template>
	<div>
		<div class="flex-wrapper">
			<label>地址搜索
				<input id="tipinput" type="text">
			</label>
		</div>
		<vmap :center="center" :resizeEnable="true" zoom="20">
			<vmap-auto-complete @select="onSelect" input="tipinput"></vmap-auto-complete>
		</vmap>
	</div>
</template>

<script>
  export default {
    name: 'SearchDemo',
    data() {
      return {
        center: undefined,
      }
    },
    methods: {
      onSelect(event) {
        console.log('event======================')
        console.log(event)
        this.center = [event.poi.location.lng, event.poi.location.lat]
      },
    },
  }
</script>

