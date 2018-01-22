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
							<a >
								<img src="../../assets/global/logo-default.png" alt="logo" class="logo-default" @click="goHome()">
							</a>
						</div>
						<!-- END LOGO -->
						<!-- BEGIN RESPONSIVE MENU TOGGLER -->
						<a href="javascript:;" class="menu-toggler" @click="menutoggler"></a>
						<!-- END RESPONSIVE MENU TOGGLER -->
						<!-- BEGIN TOP NAVIGATION MENU -->
						<app-top-header></app-top-header>
						<!-- END TOP NAVIGATION MENU -->

					</div>
				</div>
				<!-- END HEADER TOP -->
				<!-- BEGIN HEADER MENU -->
				<div class="page-header-menu" v-show="true">
					<div class="container">
          <form class="search-form" action="http://localhost:8080/#/billing" method="GET">
              <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" name="query" id="inputSearch">
                  <span class="input-group-btn">
                      <a href="javascript:;" class="btn submit">
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
								<li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                  <router-link :to="{ path: 'home' }">
                    Dashboard
                    <span class="arrow"></span>
                  </router-link>
                </li>
                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                  <router-link :to="{ path: 'worklist' }">
                    Worklist
                    <span class="arrow"></span>
                  </router-link>
                </li>
                 <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown ">
                <a href="javascript:;"> Actions
                   <span class="arrow"></span>
                 </a>
                 <ul class="dropdown-menu pull-left">
                   <li aria-haspopup="true" class=" ">
                    <a href="layout_mega_menu_light.html" class="nav-link  "> Request Additional Testing </a>
                  </li>
                  <li aria-haspopup="true" class=" ">
                    <a href="layout_top_bar_light.html" class="nav-link  "> Manage Case Notations </a>
                  </li>
                   <li aria-haspopup="true" class=" ">
                    <a href="layout_top_bar_light.html" class="nav-link  "> EMerge </a>
                  </li>
                    <li aria-haspopup="true" class=" ">
                    <a href="layout_top_bar_light.html" class="nav-link  "> Create Feedback </a>
                  </li>
                </ul>
              </li>
                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                  <router-link :to="{ name: 'List' }">
                    Case List
                    <span class="arrow"></span>
                  </router-link>
                </li>

                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown ">
                <a href="javascript:;"> Reports
                   <span class="arrow"></span>
                 </a>
                 <ul class="dropdown-menu pull-left">
                   <li aria-haspopup="true" class=" ">
                    <a href="layout_mega_menu_light.html" class="nav-link  "> Report 1 </a>
                  </li>
                  <li aria-haspopup="true" class=" ">
                    <a href="layout_top_bar_light.html" class="nav-link  "> Report 2 </a>
                  </li>
                </ul>
              </li>

          <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown ">
                <router-link :to="{ name: 'Billing' }">
                   Billing
                    <span class="arrow"></span>
                  </router-link>
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
  import TopHeader from './TopHeader.vue'

  export default {
    components: { appTopHeader: TopHeader },
    methods: {
        menutoggler: () => {
          debugger;
          var current = document.getElementsByClassName("page-header-menu")[0].style.display;

          if (current === undefined){
            document.getElementsByClassName("page-header-menu")[0].style.display = "block";
          }
          else
          if(current === "block") {
            document.getElementsByClassName("page-header-menu")[0].style.display = "none";
          }
          else
          if(current === "none") {
            document.getElementsByClassName("page-header-menu")[0].style.display = "block";
          }

          return true;
        },
        goHome: () => {
          //this.$router.push({ name: 'home'});
        }
    }
  }
</script>

<style>

</style>

