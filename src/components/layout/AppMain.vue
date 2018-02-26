<template>
	<div class="page-wrapper" >
		<navbar></navbar>
		<div class="page-wrapper-row full-height">
			<div class="page-wrapper-middle">
				<div class="page-container">
					<div class="page-content-wrapper">
						<page-head></page-head>
						<div class="page-content">
							<div class="container">
							 <Levelbar></Levelbar>
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
import Levelbar from "./Levelbar";
import PageHead from "./PageHead";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Levelbar,
    PageHead,
    Navbar
  },
  created() {
    document.body.className = "page-container-bg-solid";
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to.fullPath === "/blank") {
        document.body.className = "page-404-full-page";
      } else {
        document.body.className = "page-container-bg-solid";
      }
    }
  }
};
</script>

<style>
.page-404-full-page {
  overflow-x: hidden;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fafafa !important;
}
</style>
