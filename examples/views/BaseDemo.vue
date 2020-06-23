<template>
  <demo-block>
    <vmap @click="click" @complete="complete" height="300px"></vmap>
    <vmap :center="[lng,lat]" :zoom="zoom" viewMode="3D"></vmap>
    <br>
    <label>
      经度
      <input type="number" v-model="lng">
    </label>
    <label>
      纬度
      <input type="number" v-model="lat">
    </label>
    <label>zoom
      <input type="number" v-model="zoom">
    </label>
  </demo-block>
</template>


<script>
  export default {
    name: 'BaseDemo',
    data() {
      return {
        zoom: 20,
        lng: 116.397428,
        lat: 39.90923,
      }
    },
    methods: {
      click: (data) => {
        console.log('click map===')
        console.log(data)
      },
      complete: () => {
        console.log('complete map=========')
      },
    },
  }
</script>

