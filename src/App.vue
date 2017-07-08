<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;

      .container
        .columns
          .column
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      searchQuery: ''
    }
  },

  methods: {
    search () {
      console.log(this.searchQuery)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
