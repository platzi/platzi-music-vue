<template>
  <main id="app">
    <section class="section">
      <h1 class="title"> {{ title }}</h1>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: '🎵 Platzi Music'
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
