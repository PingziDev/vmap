<template>
	<demo-block>
		<button @click="showPlugin=!showPlugin">显示缩放</button>
		<vmap>
			<vmap-plugin :key="index"
			             v-bind="plugin"
			             v-for="(plugin,index) in plugins"
			             v-if="showPlugin"></vmap-plugin>
		</vmap>
	</demo-block>
</template>

<script>
  export default {
    name: 'PluginDemo',
    data() {
      return {
        showPlugin: true,
        plugins: [
          {
            name: 'ToolBar',
          },
          {
            name: 'ToolBar',
            position: 'LT',
          },
          {
            name: 'ControlBar',
            position: 'RT',
          },
        ],
      }
    },

  }
</script>

