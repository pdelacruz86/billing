<template>
	<div class="page-wrapper-row">
		<div class="page-wrapper-top">
			<!-- BEGIN HEADER -->
			<div class="page-header">
				<!-- BEGIN HEADER TOP -->
				<div class="page-header-top">
					<div class="container">
						<!-- BEGIN LOGO -->
						<div class="page-logo">
							<!-- <a >
								<img src="../../assets/global/logo-default.png" alt="logo" class="logo-default" @click="goHome()">
							</a> -->
              	<router-link :to="{ path: '/billing' }">
							<img src="../../assets/global/logo-default.png" alt="logo" class="logo-default" @click="goHome()">
						</router-link>
						</div>
						<!-- END LOGO -->
						<!-- BEGIN RESPONSIVE MENU TOGGLER -->
						<a href="javascript:;" class="menu-toggler" @click="mobileMenuIsOpen = !mobileMenuIsOpen"></a>
						<!-- END RESPONSIVE MENU TOGGLER -->
						<!-- BEGIN TOP NAVIGATION MENU -->
						<app-top-header></app-top-header>
						<!-- END TOP NAVIGATION MENU -->

					</div>
				</div>
				<!-- END HEADER TOP -->
				<!-- BEGIN HEADER MENU -->
				<div class="page-header-menu" :style="{display: this.mobileMenuIsOpen ? 'block!important' : 'none!important'}">
					<div class="container">
          <form class="search-form" v-on:submit.prevent="onSubmit">
              <div class="input-group">
                  <input type="text" v-model="searchInputText" 
                  class="form-control" placeholder="Search" name="query" id="inputSearch" 
                  v-on:keyup.enter="onSubmit()">
                  <span class="input-group-btn">
                      <a href="javascript:;" class="btn submit" @click="onSubmit">
                          <i class="icon-magnifier"></i>
                      </a>
                  </span>
              </div>
          </form>
						<!-- BEGIN MEGA MENU -->
						<!-- DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background -->
						<!-- DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover -->
						<div class="hor-menu">
							<ul class="nav navbar-nav">
								<li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown" >
                  <router-link :to="{ path: '/billing' }">
                    Dashboard
                    <span class="arrow"></span>
                  </router-link>
                </li>
                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown"  >
                  <router-link :to="{ path: '/billing/worklist' }">
                    Worklist
                    <span class="arrow"></span>
                  </router-link>
                </li>
                <li aria-haspopup="true" :class="{'menu-dropdown':true, 'classic-menu-dropdown':true, opened: actionMenuIsOpen}">
                <a href="javascript:;" @click="actionMenuIsOpen = !actionMenuIsOpen"> Actions
                   <span class="arrow"></span>
                 </a>
                 <ul class="dropdown-menu pull-left">
                   <li aria-haspopup="true" class="" >
                    <router-link :to="{ path: '/billing/new' }">
                      Process Bill
                        <span class="arrow"></span>
                      </router-link>
                  </li>
                   <li aria-haspopup="true" class=" ">
                     <router-link :to="{ path: '/billing/soon' }">
                      Process Bill in Batch
                        <span class="arrow"></span>
                      </router-link>
                  </li>
                    <li aria-haspopup="true" class=" ">
                    <router-link :to="{ path: '/billing/soon' }">
                      Create Feedback
                        <span class="arrow"></span>
                      </router-link>
                  </li>
                </ul>
              </li>
              <li aria-haspopup="true" :class="{'menu-dropdown':true, 'classic-menu-dropdown':true, opened: reportMenuIsOpen}">
                <a @click="reportMenuIsOpen = !reportMenuIsOpen" href="javascript:;"> Reports
                   <span class="arrow"></span>
                 </a>
                 <ul class="dropdown-menu pull-left">
                   <li aria-haspopup="true" class=" ">
                    <router-link :to="{ path: '/billing/soon' }">
                      Pending / Completed
                        <span class="arrow"></span>
                      </router-link>
                  </li>
                  <li aria-haspopup="true" class=" ">
                    <router-link :to="{ path: '/billing/soon' }">
                       Missing Information
                        <span class="arrow"></span>
                      </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- END MEGA MENU -->
        </div>
      </div>
      <!-- END HEADER MENU -->
    </div>
    <!-- END HEADER -->
  </div>
</div>
</template>

<script>
import TopHeader from "./TopHeader.vue";

export default {
  components: { appTopHeader: TopHeader },
  mounted() {
    // var current = document.getElementsByClassName("page-header-menu")[0].style
    //   .display;
    // if (current === undefined) {
    //   this.mobileMenuIsOpen = true;
    // } else if (current === "block") {
    //   this.mobileMenuIsOpen = false;
    // } else if (current === "none") {
    //   this.mobileMenuIsOpen = true;
    // }
  },
  data() {
    return {
      mobileMenuIsOpen: true,
      actionMenuIsOpen: false,
      reportMenuIsOpen: false,
      searchInputText: ""
    };
  },
  methods: {
    goHome: () => {
      this.$router.push({ path: "/billing" });
    },
    onSubmit: function() {
      debugger;
      this.$router.push({
        path: "/billing/search?filter=" + this.searchInputText
      });
    }
  },
  computed: {}
};
</script>

<style>
.page-header .page-header-top .page-logo .logo-default {
  margin: 19.5px 0 0 !important;
}
</style>

