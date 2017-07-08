<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
