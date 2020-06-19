<template>
<div>
  <demo-block doc="https://lbs.amap.com/api/jsapi-v2/example/mapbar/toolbar-litestyle" title="简易缩放按钮
">
    <vue-amap @complete="onComplete1" ref="amap1"></vue-amap>
  </demo-block>
</div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  // import { VueAmap } from '../../packages'
  import { VueAmap, Map, AMap } from '@vita2333/vue-amap2.0'
  import DemoBlock from '@/components/DemoBlock.vue'

  @Component({
    components: { DemoBlock, VueAmap },
  })
  export default class MapControlDemo extends Vue {
    onComplete1 (map: Map, amap: AMap) {
      map.plugin(['AMap.ToolBar'], () => {
        // 加载工具条
        const tool = new amap.ToolBar()
        map.addControl(tool)
      })
    }
  }
</script>

