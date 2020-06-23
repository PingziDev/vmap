<template>
  <vmap @click="click" @complete="complete" height="300px"></vmap>
</template>

<script>
  export default {
    name: 'BaseDemo',
    data() {
      return {
        zoom: 10,
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

