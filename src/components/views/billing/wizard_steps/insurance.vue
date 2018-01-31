<template>
	<div>
		<div class="row">
			<WizardHeader :selectedAccession="Accession"></WizardHeader>
			<div class="col-md-6">
				<fieldset>
					<legend>Current</legend>
					<table class="table table-striped" >
						<thead>
							<tr>
								<th class="col-xs-3">Case Number</th>
								<th class="col-xs-3"> Insurance Type </th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="item in Accession.Cases">
								<td>{{item.CaseNumber}}</td>
								<td v-if="item.BillingType === 'Insurance'"> 
									<select v-model="item.InsuranceType" @change="selectEvt">
										<option>Select One</option>	
										<option>Medicare</option>	
										<option>Not Medicare</option>	
										<option>Not Provided</option>	
									</select>
								</td>
								<td v-else="">
									{{item.BillingType}}
								</td>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</div>
			<div class="col-md-6">
				<fieldset>
					<legend>Previous</legend>
					<div class="alert alert-info">
						<strong>Info!</strong> There is not previous accession.
					</div>
				</fieldset>
			</div>

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
		methods: {
			selectEvt () {
				this.Accession.HospitalStatus = 'Select One';
				
			}
		}
	}
</script>