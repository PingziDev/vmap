<template>
  <demo-block>
    <vue-amap>
      <vue-amap-marker></vue-amap-marker>
    </vue-amap>
  </demo-block>
</template>


<script>
  export default {
    name: 'MarkerDemo',
    components: {},
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

