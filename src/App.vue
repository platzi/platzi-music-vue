<template lang="pug">
  #app
    input(v-model="name")
    p {{ name }}

    a(:href="url") Link
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',

      url: 'https://platzi.com'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
