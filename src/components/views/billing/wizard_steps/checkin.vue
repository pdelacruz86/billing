<template>
	<div>
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<h5>Need to note any missing information?</h5>
					<!-- <div class="col-md-offset-3">
				<input type="radio" v-model="Accession.checkInMissingInformation" value="true" name="radiogroup"> Yes
				<input type="radio" v-model="Accession.checkInMissingInformation" value="false" name="radiogroup"> No
				</div> -->
				<button class="btn btn-primary">Yes</button>
				<button class="btn btn-primary">No</button>
			</div>
			<div class="col-md-4"></div>
		</div>
		<h3></h3>
		
	</div>
</template>

<script>
	export default {
		props: ['Accession']
	}
</script>

