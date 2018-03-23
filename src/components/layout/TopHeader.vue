<template>
	<div class="top-menu">
		<ul class="nav navbar-nav pull-right" v-on-click-outside="closeEvent">
			<!-- BEGIN NOTIFICATION DROPDOWN -->
			<li :class="taskClass" id="header_notification_bar" >
				<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" 
				data-close-others="true" @click="showTastMenu = !showTastMenu; showUserMenu = false">
					<i class="icon-bell"></i>
					<span class="badge badge-default">{{pendingCasesCount}}</span>
				</a>
				<ul class="dropdown-menu">
					<li class="external">
						<h3>You have
							<strong>{{pendingCasesCount}} pending</strong> tasks
						</h3>
						<router-link :to="{ path: '/worklist' }">
							view all
						</router-link>
					</li>
				</ul>
			</li>
			<!-- END NOTIFICATION DROPDOWN -->
			<li class="droddown dropdown-separator">
				<span class="separator"></span>
			</li>
			<!-- BEGIN USER LOGIN DROPDOWN -->
			<li :class="userClass">
				<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" 
					data-close-others="true" @click="showUserMenu = !showUserMenu; showTastMenu = false">
					<img alt="" class="img-circle" src="../../assets/layouts/layout3/img/avatar_new.png" />
					<span class="username username-hide-mobile">{{currentUserName}}</span>
				</a>
				<ul class="dropdown-menu dropdown-menu-default">
					<li>
						<router-link :to="{ path: '/soon' }">
							<i class="icon-user"></i> 
							My Profile 
						</router-link>
					</li>
					<li>
						<router-link :to="{ path: '/soon' }">
							<i class="icon-calendar"></i> 
							My Calendar 
						</router-link>
					</li>
					<li class="divider"> </li>
					<li>
						<a href="javascript:;" @click="logout()">
							<i class="icon-key"></i> Log Out 
						</a>
					</li>
				</ul>
			</li>
			<!-- END USER LOGIN DROPDOWN -->
			<!-- BEGIN QUICK SIDEBAR TOGGLER -->
			<li class="dropdown dropdown-extended quick-sidebar-toggler">
				<span class="sr-only">Toggle Quick Sidebar</span>
				<i class="icon-logout" @click="logout()"></i>
			</li>
			<!-- END QUICK SIDEBAR TOGGLER -->
		</ul>
	</div>
</template>

<script>
import { mixin as onClickOutside } from "vue-on-click-outside";
import { mapGetters } from "vuex";

export default {
  mixins: [onClickOutside],
  mounted() {},
  data() {
    return {
      showTastMenu: false,
      showUserMenu: false
    };
  },
  computed: {
    ...mapGetters(["accessions", "currentUserName"]),
    pendingCasesCount() {
      //pending
      let accessionPending = 0;
      for (const element of this.accessions || []) {
        element.Cases.filter(function(item) {
          if (item.Status === "Pending") accessionPending++;
        });
      }

      return accessionPending;
    },
    taskClass() {
      if (this.showTastMenu) {
        return "dropdown dropdown-extended dropdown-notification dropdown-dark open";
      } else {
        return "dropdown dropdown-extended dropdown-notification dropdown-dark";
      }
    },
    userClass() {
      if (this.showUserMenu) {
        return "dropdown dropdown-user dropdown-dark open";
      } else {
        return "dropdown dropdown-user dropdown-dark";
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    toggleTaskMenu() {
      this.showTastMenu = this.showTastMenu == true ? false : true;

      if (this.showUserMenu) {
        this.showUserMenu = false;
      }
    },
    toggleUserMenu() {
      this.showUserMenu = this.showUserMenu == true ? false : true;
      if (this.showTastMenu) {
        this.showTastMenu = false;
      }
    },
    closeEvent() {
      this.showTastMenu = this.showUserMenu = false;
    }
    //  documentClick(e){
    //      let el = this.$refs.dropdownMenu
    //      let target = e.target
    //      // if ( el !== target) && !el.contains(target)) {
    //        this.showTastMenu=false
    //      // }
    //    // }
    //  },
    //  created () {
    //    document.addEventListener('click', this.documentClick)
    //  },
    //  destroyed () {
    //  // important to clean up!!
    //  document.removeEventListener('click', this.documentClick)
    // }
  }
};
</script>
