<template lang="pug">
  section.section
    .container
      nav.nav.has-shadow
       .container.search-bar
          input.input.is-large(type="text" placeholder="Busca una cancion", v-model="searchQuery")
          a.button.is-info.is-large(@click.prevent="search") Buscar
          a.button.is.is-danger.is-large(@click.prevent="reset") &times;
      .container
        p(v-show="searchQuery")
          small {{ queryMessage }}
      .container
        .columns(v-show="tracks.length")
          .column(v-for="r in tracks") {{ `Track #${r}` }}
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
      if (!this.searchQuery) { return }
      this.tracks = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
    },

    reset () {
      this.searchQuery = ''
      this.tracks = []
    }
  }
}
</script>

<style lang="scss">
  .search-bar {
    a.is-danger {
      margin-left: 4px;
    }
  }
</style>
