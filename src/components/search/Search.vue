<template lang="pug">
  section.section
    .container
      nav.nav.has-shadow
       .container
          a.is-reset(@click.prevent="reset") X
          input.input.is-large(type="text" placeholder="Busca una cancion", v-model="searchQuery")
          button.button.is-info.is-large(@click="search") Buscar
      .container
        p(v-show="searchQuery")
          small {{ queryMessage }}
      .container
        .columns(v-show="tracks.length")
          .column(v-for="r in tracks") {{ r }}
</template>

<script>
export default {

  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    queryMessage () {
      return `Buscando resultados para: ${this.searchQuery}`
    }
  },

  methods: {
    search () {
      this.tracks = [1, 2, 3]
    },

    reset () {
      this.searchQuery = ''
      this.tracks = []
    }
  }
}
</script>

<style lang="css">
</style>
