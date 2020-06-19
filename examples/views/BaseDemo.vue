<template>
  <demo-block>
    <vue-amap></vue-amap>
  </demo-block>
</template>


<script>
  import Vue from 'vue'
  import { VueAmap } from '../../packages'
  import DemoBlock from '@/components/DemoBlock'

  Vue.use(VueAmap)
  export default {
    name: 'BaseDemo',
    components: { DemoBlock },
  }
</script>

