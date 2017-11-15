<template>
	<div class="top-menu">
		<ul class="nav navbar-nav pull-right">
			<!-- BEGIN NOTIFICATION DROPDOWN -->
			<li :class="taskClass" id="header_notification_bar" >
				<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" @click="toggleTaskMenu">
					<i class="icon-bell"></i>
					<span class="badge badge-default">7</span>
				</a>
				<ul class="dropdown-menu">
					<li class="external">
						<h3>You have
							<strong>12 pending</strong> tasks
						</h3>
						<a href="app_todo.html">view all</a>
					</li>
					<li>
						<ul class="dropdown-menu-list scroller" style="height: 250px;" data-handle-color="#637283">
							<li>
								<a href="javascript:;">
									<span class="time">just now</span>
									<span class="details">
										<span class="label label-sm label-icon label-success">
											<i class="fa fa-plus"></i>
										</span> New user registered. 
									</span>
								</a>
							</li>
							<li>
								<a href="javascript:;">
									<span class="time">5 days</span>
									<span class="details">
										<span class="label label-sm label-icon label-info">
											<i class="fa fa-bullhorn"></i>
										</span> System Error.
									</span>
								</a>
							</li>
							<li>
								<a href="javascript:;">
									<span class="time">9 days</span>
									<span class="details">
										<span class="label label-sm label-icon label-danger">
											<i class="fa fa-bolt"></i>
										</span> Storage server failed. 
									</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<!-- END NOTIFICATION DROPDOWN -->
			<li class="droddown dropdown-separator">
				<span class="separator"></span>
			</li>
			<!-- BEGIN USER LOGIN DROPDOWN -->
			<li :class="userClass">
				<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" @click="toggleUserMenu">
					<img alt="" class="img-circle" src="../../assets/layouts/layout3/img/avatar9.jpg" />
					<span class="username username-hide-mobile">Nick</span>
				</a>
				<ul class="dropdown-menu dropdown-menu-default">
					<li>
						<a href="page_user_profile_1.html">
							<i class="icon-user"></i> My Profile 
						</a>
					</li>
					<li>
						<a href="app_calendar.html">
							<i class="icon-calendar"></i> My Calendar 
						</a>
					</li>
					<li>
						<a href="app_inbox.html">
							<i class="icon-envelope-open"></i> My Inbox
							<span class="badge badge-danger"> 3 </span>
						</a>
					</li>
					<li>
						<a href="app_todo_2.html">
							<i class="icon-rocket"></i> My Tasks
							<span class="badge badge-success"> 7 </span>
						</a>
					</li>
					<li class="divider"> </li>
					<li>
						<a href="page_user_lock_1.html">
							<i class="icon-lock"></i> Lock Screen 
						</a>
					</li>
					<li>
						<a href="page_user_login_1.html">
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
	export default {
		data () {
			return {
				showTastMenu : true,
				showUserMenu : true
			}
		},
		computed : {
			taskClass () {
				if (this.showTastMenu) {
					return "dropdown dropdown-extended dropdown-notification dropdown-dark"
				}
				else {
					return "dropdown dropdown-extended dropdown-notification dropdown-dark open"
				}
			},
			userClass () {
				if (this.showUserMenu) {
					return "dropdown dropdown-user dropdown-dark"
				}
				else {
					return "dropdown dropdown-user dropdown-dark open"
				}
			}
			
		},
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toggleTaskMenu() {
    	this.showTastMenu = (this.showTastMenu == true) ? false : true
    	
    	if(this.showUserMenu){
    		this.showUserMenu = false
    	}
    },
    toggleUserMenu() {
    	this.showUserMenu = (this.showUserMenu == true) ? false : true
    	if(this.showTastMenu){
    		this.showTastMenu = false
    	}
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
}
</script>
