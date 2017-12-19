<template>
	<div class="row">
		<!-- <WizardHeader :selectedAccession="Accession"></WizardHeader> -->
		<div class="col-md-1"></div>
		<div class="col-md-10 portlet light">
			<div class="portlet-body">
				<table class="table table-striped" >
					<tbody>
						<tr>
							<td>
								<div class="row">
									<div class="form-group" :class="{'has-error': errors.has('CaseNumber') }">
										<label class="control-label col-md-4 text-right">Select a Case: 
										</label>
										<div class="col-md-8">
											<select name="CaseNumber" v-model="MissingInfo.CaseNumber" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('CaseNumber') }">
												<option>All</option>	
												<option v-for="item in Accession.Cases">{{item.CaseNumber}}</option>	
											</select>
											<p class="text-danger" v-if="errors.has('CaseNumber')">{{ errors.first('CaseNumber') }}</p>
											<span class="help-block"> </span>
										</div>
									</div>
									<div class="form-group" :class="{'has-error': errors.has('Name') }">
										<label class="control-label col-md-4 text-right">Missing Info: 
										</label>
										<div class="col-md-8">
											<select name="Name" v-model="MissingInfo.Name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('Name') }">
												<option>Missing information 1</option>	
												<option>Missing information 2</option>	
												<option>Missing information 3</option>	
												<option>Missing information 4</option>	
												<option>Missing information 5</option>	
												<option>Other</option>	
											</select>
											<p class="text-danger" v-if="errors.has('Name')">{{ errors.first('Name') }}</p>
											<span class="help-block"> </span>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div class="form-group" :class="{'has-error': errors.has('Notes') }">
								<textarea name="Notes" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('Name') }" v-model="MissingInfo.Notes" rows="3" cols="38" class="form-control" placeholder="notes..."></textarea> 
								</div>
							</td>
							<td>
								<input type="button" class="btn btn-success" @click="validateBeforeSubmit()" value="Add">
							</td>
						</tr>
						<tr>
							<td>CaseNumber</td>
							<td>Name</td>
							<td>Notes</td>
						</tr>
						<tr v-for="item in Accession.MissingInformation"> 
							<td>{{item.CaseNumber}}</td>
							<td>{{item.Name}}</td>
							<td>{{item.Notes}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="col-md-"></div>

		</div>
	</div>

</template>

<script>

	import WizardHeader from './../patientInfo'

	export default {
		components: {
			WizardHeader
		},
		props: {
			Accession: {
				type: Object,
				default: () => { }	
			}
		},
		data () {
			return {
				MissingInfo : {
					Name: '',
					CaseNumber: '',
					Notes: ''
				}
			}
		},
		methods: {
			validateBeforeSubmit() {
				this.$validator.validateAll()
				.then((result) => {
					if (result) {
    	          		// eslint-disable-next-line
    	          		this.saveMissing()
    	          		return;
    	          	}
    	          });
			},
			saveMissing () {
				debugger;
				this.$emit('missingAdded', this.MissingInfo)
			}
		}
	}
</script>