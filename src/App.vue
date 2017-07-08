<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")
    p {{ fullName }}
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      name: '',
      lastName: ''
    }
  },

  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    }
  },

  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
