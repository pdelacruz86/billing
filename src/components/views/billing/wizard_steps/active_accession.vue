<template>
	<div class="row">
		<WizardHeader :selectedAccession="Accession"></WizardHeader>

		<div class="col-md-6">
			<fieldset>
				<legend>Current</legend>
				<div class="panel panel-default">
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
								<td>
									<select v-model="item.BillingType">
										<option>Select One</option>	
										<option>Direct</option>	
										<option>Insurance</option>	
										<option>Split</option>	
										<option>Not Provided</option>	
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</div>		
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

		}
	}
</script>