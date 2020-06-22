<template>
  <demo-block>
    <button @click="showMarker=!showMarker">toggle marker</button>
    <vue-amap>
      <vue-amap-marker :key="index" v-bind="option" v-for="(option,index) in options"
                       v-if="showMarker"></vue-amap-marker>
    </vue-amap>
  </demo-block>
</template>


<script>
  export default {
    name: 'MarkerDemo',
    components: {},
    beforeCreate() {
      this.$amapLoader().then(AMap => {
        global.AMap = AMap
      })
    },
    data() {
      return {
        showMarker: true,
        options: [],
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
    created() {
      this.$amapLoader().then(AMap => {
        this.options = [
          {},
          {
            position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '北京',
          },
          {
            size: new AMap.Size(40, 50),    // 图标尺寸
            image: '//webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',  // Icon的图像
            imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(40, 50),   // 根据所设置的大小拉伸或压缩图片
          },
          {
            position: new AMap.LngLat(116.405467, 39.907761),
            offset: new AMap.Pixel(-10, -10),
            icon: {
              size: new AMap.Size(40, 50),    // 图标尺寸
              image: '//webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png',  // Icon的图像
              imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(40, 50),   // 根据所设置的大小拉伸或压缩图片
            }, // 添加 Icon 实例
            title: '北京',
            zoom: 13,
          },
          {
            icon: '//a.amap.com/jsapi_demos/static/demo-center/marker/marker-bottom-left.png', // 自定义点标记
            position: [116.418481, 39.90833], // 基点位置
            offset: new AMap.Pixel(0, 0), // 设置点标记偏移量
            anchor: 'bottom-left', // 设置锚点方位
          }]
      })
    },
  }
</script>

