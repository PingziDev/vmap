<template>
  <demo-block>
    <vue-amap @complete="onComplete" ref="amap"></vue-amap>
    <div v-if="map">
      <button @click="zoomIn">放大</button>
      <button @click="zoomOut">缩小</button>
    </div>
  </demo-block>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { VueAmap } from '../../packages'
  import DemoBlock from '@/components/DemoBlock.vue'

  Vue.use(VueAmap)
  @Component({
    components: { DemoBlock },
  })
  export default class MapControlDemo extends Vue {
    map: any = null

    onComplete (map: any) {
      this.map = map
    }

    zoomIn () {
      const map = (this.$refs.amap as any).getMap()
      const room = map.getZoom()
      map.setZoom(room + 1)
    }

    zoomOut () {
      const room = this.map.getZoom()
      this.map.setZoom(room - 1)
    }

  }
</script>

