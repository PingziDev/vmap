<template>
  <demo-block>
    <vue-amap></vue-amap>
  </demo-block>
</template>


<script>
  import Vue from 'vue'
  // import { VueAmap } from '../../packages'
  import { VueAmap } from '@vita2333/vue-amap2.0'
  import DemoBlock from '@/components/DemoBlock.vue'

  console.log('vueAmap======================')
  console.log(VueAmap) // todo
  console.log('======================')

  Vue.use(VueAmap)
  export default {
    name: 'BaseDemo',
    components: { DemoBlock },
  }
</script>

