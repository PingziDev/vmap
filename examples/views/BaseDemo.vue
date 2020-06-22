<template>
  <demo-block>
    <vue-amap :events="events"></vue-amap>
  </demo-block>
</template>


<script>
  export default {
    name: 'BaseDemo',
    data() {
      return {
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

