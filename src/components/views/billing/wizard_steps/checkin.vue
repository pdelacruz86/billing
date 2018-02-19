<template>
	<div>
		<div class="row">
			<div class="col-md-3"></div>
			<div class="col-md-5">
					<div class="note note-danger">
						<h4 class="block">Need to note any missing information?</h4>
						<div class="row"> 
						<div class="col-md-3"></div>
						<div class="col-md-6"> 
							
						<div class="btn-group" data-toggle="buttons">
							<label v-bind:class="{active : isActive(), 'btn default' : true}">
								<input type="radio" v-model="Accession.CheckInMissingInformation" value="false" name="radiogroup"  @click="goBack()"> 
								<i class="fa fa-close"></i> No </label>
							<label v-bind:class="{active : isActive() , 'btn red' : true}">
								<input type="radio" v-model="Accession.CheckInMissingInformation" value="true" name="radiogroup" @click="goNext()"> 
								<i class="fa fa-check"></i> Yes </label>
						</div> 
						</div> 
						<div class="col-md-3"></div>
						
						</div> 
					</p>
				</div>
				<!-- <div class="col-md-offset-3">
				<input type="radio" v-model="Accession.checkInMissingInformation" value="true" name="radiogroup"> Yes
				<input type="radio" v-model="Accession.checkInMissingInformation" value="false" name="radiogroup"> No
				</div> -->
				<!-- <button class="btn btn-primary" @click="goNext()">Yes</button>
				<button class="btn btn-primary" @click="goBack()">No</button> -->

			
			</div>
			<div class="col-md-3"></div>
		</div>
		<h3></h3>
		
	</div>
</template>

<script>
export default {
  props: ["Accession"],
  mounted() {},
  computed: {},
  methods: {
    isActive() {
      return this.Accession.CheckInMissingInformation === null
        ? false
        : this.Accession.CheckInMissingInformation;
    },
    goNext() {
      this.$emit("go-to-missing", 6);
    },
    goBack() {
      this.$emit("go-to-review", 7);
    }
  }
};
</script>

