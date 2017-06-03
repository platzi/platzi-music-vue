<template lang="pug">
  section.section
    .container
      nav.nav.has-shadow
       .container
          input.input.is-large(type="text" placeholder="Busca una cancion", v-model="searchQuery")
      .container
        p(v-show="searchQuery")
          small {{ queryMessage }}
</template>

<script>
export default {

  data () {
    return {
      searchQuery: ''
    }
  },

  computed: {
    queryMessage () {
      return `Buscando resultados para: ${this.searchQuery}`
    }
  }
}
</script>

<style lang="css">
</style>
