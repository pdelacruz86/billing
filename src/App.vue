<template>
    <div id="app">

			<BlockUI :message="loadingMessage" :url="loadingImage" v-if="showBlockUI"></BlockUI>
			
			<router-view class="animated"></router-view>
								
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  ready() {
    this.setLoading(false, "loading...");
  },
  methods: {
    ...mapActions(["setLoading"])
  },
  computed: {
    ...mapGetters(["showBlockUI", "loadingImage", "loadingMessage"])
  },
  name: "app"
};
</script>

<style>

</style>
