<template lang="pug">
  main#app
    pm-header
    pm-search
    pm-footer
</template>

<script>
  import PmHeader from './components/layout/Header.vue'
  import PmFooter from './components/layout/Footer.vue'
  import PmSearch from './components/search/Search.vue'

  export default {
    name: 'app',

    components: { PmHeader, PmFooter, PmSearch }
  }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
