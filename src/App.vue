<template lang="pug">
  main#app
    section.section
      h1.title  {{ title }}
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: '🎵 Platzi Music'
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
