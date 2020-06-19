<template>
	<div class="demo-block">
		<p class="demo-block--title">{{ title }} <a :href="doc" target="_blank" v-if="doc">(文档)</a></p>
		<slot></slot>
	</div>
</template>

<script>
  export default {
    name: 'DemoBlock',
    props: ['title', 'doc'],
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
