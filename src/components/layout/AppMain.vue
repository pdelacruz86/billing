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
import { hubConnection } from "signalr-no-jquery";

import { mapActions } from "vuex";

export default {
  components: {
    Levelbar,
    PageHead,
    Navbar
  },
  mounted() {
    const connection = hubConnection("http://localhost:43331");
    const hubProxy = connection.createHubProxy("AccessionCases");

    var self1 = this;
    // set up event listeners i.e. for incoming "message" event
    hubProxy.on("update_accession", function(accesssion) {
      console.log(accesssion);
      self1.syncAccessionFromServer(accesssion);
    });

    console.log(hubProxy);

    // connect
    connection
      .start({ jsonp: true })
      .done(function() {
        console.log("Now connected, connection ID=" + connection.id);
      })
      .fail(function() {
        console.log("Could not connect");
      });

    document.body.className = "page-container-bg-solid";
  },
  data() {
    return {
      connection: null,
      forecasts: null,
      lastUpdated: ""
    };
  },
  methods: {
    ...mapActions(["syncAccessionFromServer"])
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
