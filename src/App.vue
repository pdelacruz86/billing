<template>
    <div id="app">
        <router-view></router-view>
      </div>
</template>

<script>
  import AppMain from './components/layout/AppMain.vue'
  import Navbar from './components/layout/Navbar.vue'

  export default {
    components: {
      Navbar,
      AppMain
    },
    name: 'app'
  }
</script>

<style>


</style>
