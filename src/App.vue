<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
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
