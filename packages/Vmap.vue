<template>
	<div :style="{width,height}" ref="container">
		<slot></slot>
	</div>
</template>
<script>
  import MapMixin from './mixins/MapMixin'

  export default {
    name: 'Vmap',
    mixins: [MapMixin],
    props: {
      width: {
        type: String,
        default: '500px',
      },
      height: {
        type: String,
        default: '500px',
      },
      events: { type: Object },
    },
    mounted() {
      this.installMap()
      this.$once('hook:destroy', () => {
        this.uninstallMap()
      })
    },
    methods: {
      async installMap() {
        global.AMap = await this.$amapLoader()
        this.$set(this, 'mapComponent', new AMap.Map(this.$refs.container, this.mapOptions))
        this.bindEvents()
        this.setPropWatchers()
      },
      uninstallMap() {
        this.mapComponent.destroy()
      },
      getMap(callback) {
        const _checkForMap = () => {
          if (this.mapComponent) {
            callback(this.mapComponent)
          } else {
            setTimeout(_checkForMap, 50)
          }
        }
        _checkForMap()
      },
      // handlers
      setResizeEnable(val) {
        this.mapComponent.setStatus({ resizeEnable: val })
      },
      setDragEnable(val) {
        this.mapComponent.setStatus({ dragEnable: val })
      },
      setKeyboardEnable(val) {
        this.mapComponent.setStatus({ keyboardEnable: val })
      },
      setDoubleClickZoom(val) {
        this.mapComponent.setStatus({ doubleClickZoom: val })
      },
      setZoomEnable(val) {
        this.mapComponent.setStatus({ zoomEnable: val })
      },
      setRotateEnable(val) {
        this.mapComponent.setStatus({ rotateEnable: val })
      },
      setScrollWheel(val) {
        this.mapComponent.setStatus({ scrollWheel: val })
      },
    },
    provide() {
      return {
        getMap: this.getMap,
      }
    },
  }
</script>
