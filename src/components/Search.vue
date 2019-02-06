<template lang="pug">
  main

    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery",
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-blur="t.preview_url",
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )
        .columns(v-show="tracks.length && !pagination.hasEnd")
          .column.has-text-centered
            button.button(
              @click="loadNextPage()",
              :class="{ 'is-loading': pagination.isLoading }",
              :disabled="pagination.isLoading"
            ) Cargar Mas
</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',

  components: { PmTrack, PmLoader, PmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: '',

      pagination: {
        offset: 0,
        limit: 20,
        hasEnd: false,
        isLoading: false,
        total: 0
      }
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.pagination.total}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    },

    searchQuery () {
      this.pagination.offset = 0
      this.pagination.hasEnd = false
      this.pagination.isLoading = false
    }
  },

  methods: {
    search (shouldConcat = false) {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.pagination.offset += this.pagination.limit
          this.pagination.total += res.tracks.total

          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    loadNextPage () {
      if (!this.searchQuery) { return }

      this.pagination.isLoading = true

      trackService.search(this.searchQuery, this.pagination.offset)
        .then(res => {
          this.pagination.offset += this.pagination.limit
          this.pagination.hasEnd = res.tracks.next === null
          this.tracks = [...this.tracks, ...res.tracks.items]
          this.pagination.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
