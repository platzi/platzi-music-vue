<template lang="pug">
  main#app
    pm-header
    pm-footer
</template>

<script>
  import PmHeader from './components/layout/Header.vue'
  import PmFooter from './components/layout/Footer.vue'

  export default {
    name: 'app',

    components: { PmHeader, PmFooter }
  }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
