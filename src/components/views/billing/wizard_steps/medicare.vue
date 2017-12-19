<template>
	<div>
		<h4>Insurance</h4>
		<div class="row">
			<!-- <wizard-header></wizard-header> -->
			<div class="col-md-6">
				<fieldset>
					<legend>Current</legend>
					<table class="table table-striped" >
						<thead>
							<tr>
								<th class="col-xs-3">Case Number</th>
								<th class="col-xs-3"> Billing type</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="item in Accession.Cases">
								<td>{{item.CaseNumber}}</td>
								<td v-if="item.Insurance === 'Medicare'"> 
									<select v-model="item.Insurance">
										<option>Select One</option>	
										<option>Inpatient</option>	
										<option>Outpatient</option>	
										<option>Non-hospital</option>	
										<option>Missing</option>	
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

				</fieldset>
			</div>

		</div>
	</div>
</template>
<script>

	import WizardHeader from './../patientInfo'

	export default {
		props: {
			Accession: {
				type: Object,
				default: () => { }	
			}
		}
	}
</script>