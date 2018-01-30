<template>
    <div id="app">
       <BlockUI :message="loadingMessage" :url="loadingImage" v-if="showBlockUI"></BlockUI>
        <!-- <vue-progress-bar></vue-progress-bar> -->
        <router-view></router-view>
      </div>
</template>

<script>
  import AppMain from './components/layout/appMain.vue'
  import Navbar from './components/layout/navbar.vue'
import { mapActions, mapGetters } from 'vuex';

  import miniToastr from 'mini-toastr'

  export default {
      ready () {
      miniToastr.init();
      this.setLoading(false, "loading...")
    },
    components: {
      Navbar,
      AppMain
    },
     methods: {
    ...mapActions([
      'setLoading'
    ])},
     computed: {
      ...mapGetters([
        'showBlockUI',
        'loadingImage',
        'loadingMessage'
      ])
    },
    name: 'app'
  }
</script>

<style>


</style>
