<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img()

    .card-content
      .media
        .media-left
          figure.image.is-48x48
        .media-content
          p.title.is-6
            strong
          p.subtitle.is-6

        .content
          small
          nav.level
            .level-left
              a.level-item
                span.icon.is-small ▶️
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  }
}
</script>

<style lang="css">
</style>
