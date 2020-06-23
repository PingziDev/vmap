<template>
  <div>
    | {{ headers.join(' | ') }} |
    | ------------- | ------------- | ------------- |
    <template v-for="column in columns">
      | {{ column.join(' | ') }} |
    </template>
  </div>
</template>

<script>
export default {
  name: 'DemoTable',
  props: ['headers', 'columns'],
  computed: {},
}
</script>

<style lang="less">
</style>
