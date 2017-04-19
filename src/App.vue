<template>
  <div id="app">
    <div class="page-wrapper">
    <app-header v-if="isLogged"></app-header>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'

  export default {
    computed: {
      isLogged () {
        return this.$store.getters.isLoggedIn
      }
    },
    components: {appHeader: Header},
    name: 'app'
  }
</script>

<style>


</style>
