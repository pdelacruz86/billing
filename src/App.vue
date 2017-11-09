<template>
    <div id="app">
        <router-view></router-view>
      </div>
</template>

<script>
  import AppMain from './components/layout/appMain.vue'
  import Navbar from './components/layout/navbar.vue'

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
