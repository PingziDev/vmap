<template>
	<div class="demo-block">
		<p class="demo-block--title">{{ $route.meta.title }}</p>
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: 'DemoBlock',
  }
</script>

<style scoped>
	.demo-block {
		padding: 20px;
	}
	.demo-block--title {
		font-size: 16px;
		font-weight: bold;
	}
</style>
