<template>
  <demo-block>
    <vue-amap></vue-amap>
    <!--    <vue-amap>-->
    <!--      <vue-amap-marker></vue-amap-marker>-->
    <!--    </vue-amap>-->
    <!--    <vue-amap :events="events" :zoom="20"></vue-amap>-->
  </demo-block>
</template>


<script>
  // import { VueAmap } from '@vita2333/vue-amap2.0'
  import DemoBlock from '@/components/DemoBlock.vue'

  export default {
    name: 'BaseDemo',
    components: { DemoBlock },
    data() {
      return {
        events: {
          click: (data) => {
            console.log('click map===')
            console.log(data)
          },
          complete: () => {
            console.log('complete')
          }
          ,
        },
      }
    },
  }
</script>

