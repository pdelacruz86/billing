<template>
	<div>
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<p>Scan or enter Accession ID or Case Number</p>
				<input type="text" id="inputSearchAccession" class="form-control" v-model="searchText" @input="updateTextSearch" >
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		mounted() {
			document.getElementById('inputSearchAccession').value = this.$store.state.login.searchText
		},
		computed: mapState([
		  // map this.count to store.state.count
		  'searchText'
		]),
		methods: {
		  updateTextSearch (e) {
		    this.$store.commit('updateTextSearch', e.target.value)
		  }
		}
	}
</script>