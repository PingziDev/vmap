<template>
  <demo-block>
    <vmap :events="events" height="300px"></vmap>
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

