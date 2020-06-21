<template>
	<div ref="container" style="width: 500px;height: 500px;">
	</div>
</template>
<script>
  export default {
    name: 'VueAmapMarker',
    props: [

      // event
      'events',
    ],
    inject: ['amap', 'getMap'],
    mounted() {
      console.log('thisGetMap======================')
      console.log(this.getMap()) // todo
      console.log('======================')

    },
    destroyed() {
    },
    computed: {},
    methods: {},
  }
</script>


<style scoped>

</style>
