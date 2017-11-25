<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}

      .content
        nav.level
          .level-left
            button.level-item.button.is-primary
              span.icon.is-small(@click="selectTrack") ▶️
            button.level-item.button.is-warning
              span.icon.is-small(@click="goToTrack(track.id)") 🌎
            small {{ track.duration_ms | ms-to-mm }}
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
  mixins: [trackMixin],

  props: {
    track: { type: Object, required: true }
  },

  methods: {
    goToTrack (id) {
      if (!this.track.preview_url) { return }

      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style scoped>
  .card {
      border: 1px solid #dfe0e0;
      box-shadow: 0 1px 2px rgba(0,0,0,.1);
      background: #fff;
      border-radius: .25rem;
      margin-bottom: 2rem;
  }
</style>
