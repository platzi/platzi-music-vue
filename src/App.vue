<template lang="pug">
  #app
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="false") {{ 'algo mas' }}
    p(v-else) {{ 'lo ultimo' }}

    ul
      li(v-for="i in items") {{ i }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!',

      showValue: false,
      value: 'Algo',

      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
