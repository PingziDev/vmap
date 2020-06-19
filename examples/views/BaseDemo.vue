<template>
  <demo-block>
    <vue-amap></vue-amap>
  </demo-block>
</template>


<script>
  // import { VueAmap } from '../../packages'
  import { VueAmap } from '@vita2333/vue-amap2.0'
  import DemoBlock from '@/components/DemoBlock.vue'

  export default {
    name: 'BaseDemo',
    components: { DemoBlock, VueAmap },
  }
</script>

