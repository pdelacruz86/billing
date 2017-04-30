<template>
  <div class="page-wrapper">
    <navbar></navbar>
    <div class="page-wrapper-row full-height">
      <div class="page-wrapper-middle">
          <!-- BEGIN CONTAINER -->
        <div class="page-container">
            <!-- BEGIN CONTENT -->
          <div class="page-content-wrapper">
            <page-head></page-head>
            <div class="page-content">
              <div class="container">
               <Levelbar></Levelbar>
               <!-- BEGIN PAGE CONTENT INNER -->
               <div class="page-content-inner">
                <div class="mt-content-body">
                  <transition
                  mode="out-in"
                  enter-active-class="fadeIn"
                  leave-active-class="fadeOut"
                  appear>
                  <router-view class="animated"></router-view>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div> 
</template>

<script>
  import Levelbar from './Levelbar'
  import PageHead from './PageHead'
  import Navbar from './Navbar.vue'

  export default {
    components: {
      Levelbar,
      PageHead,
      Navbar
    },
    created () {
      document.body.className = 'page-container-bg-solid'
    }
  }
</script>

<style>

</style>
