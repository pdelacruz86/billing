<template>
	<transition name="modal">
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<p>Scan or enter Accession ID or Case Number</p>
				<input type="text" id="inputSearchAccession" class="form-control" @input="updateText" >
			</div>
			<div class="col-md-4"></div>
		</div>
	</transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    document.getElementById("inputSearchAccession").value = this.searchText;
  },
  computed: {
    ...mapGetters(["searchText"])
  },
  methods: {
    ...mapActions(["updateTextSearch"]),
    updateText(e) {
      debugger;
      this.updateTextSearch(e.target.value);
    }
  },
  watch: {
    searchText: function(val) {
      document.getElementById("inputSearchAccession").value = val;
    }
  }
};
</script>