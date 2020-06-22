<template>
  <demo-block>
    <vmap :events="events" height="300px"></vmap>
    <vmap :cencer="[lng,lat]" viewMode="3D" zoom="10"></vmap>
    <br>
    <label>
      经度
      <input type="text" v-model.number="lng">
    </label>
    <label>
      纬度
      <input type="text" v-model.number="lat">
    </label>
  </demo-block>
</template>


<script>
  export default {
    name: 'BaseDemo',
    data() {
      return {
        lng: 116.397428,
        lat: 39.90923,
        events: {
          click: (data) => {
            console.log('click map===')
            console.log(data)
          },
          complete: () => {
            console.log('complete map=========')
          }
          ,
        },
      }
    },
  }
</script>

