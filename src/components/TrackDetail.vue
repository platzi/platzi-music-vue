<template lang="pug">
  pm-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'

export default {
  components: { PmTrack },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        console.log(res)
      })
  }
}
</script>
