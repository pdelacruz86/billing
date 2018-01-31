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
								<th class="col-xs-3"> Status </th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="item in Accession.Cases">
								<td>{{ item.CaseNumber }}</td>
								<td v-if="item.InsuranceType === 'Medicare'"> 
									<select v-model="item.HospitalStatus">
										<option>Select One</option>	
										<option>Inpatient</option>	
										<option>Outpatient</option>	
										<option>Non-hospital</option>	
										<option>Not Provided</option>	
									</select>
								</td>
								<td v-else="">
									<div v-if="item.BillingType === 'Direct' || item.BillingType === 'Split'">
										{{ item.BillingType }}
									</div>
									<div v-else-if="item.BillingType === 'Not Provided'">
										{{ item.BillingType }}
									</div>
									<div v-else>
										{{item.InsuranceType}}
									</div>
									<!-- {{item.InsuranceType}} -->
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
		}
	}
</script>