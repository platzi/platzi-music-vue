<template lang="pug">
  main#app
    pm-header
    pm-container
    pm-footer
</template>

<script>
  import PmHeader from './components/layout/Header.vue'
  import PmFooter from './components/layout/Footer.vue'
  import PmContainer from './components/layout/Container.vue'

  export default {
    name: 'app',

    components: { PmHeader, PmFooter, PmContainer },

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
