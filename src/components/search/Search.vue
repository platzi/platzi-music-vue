<template lang="pug">
  section.section
    .container
      nav.nav.has-shadow
       .container
          input.input.is-large(type="text" placeholder="Busca una cancion")
          p
            small {{ searchQuery }}
</template>

<script>
export default {

  data () {
    return {
      searchQuery: ''
    }
  }
}
</script>

<style lang="css">
</style>
