<template>
	<div class="row">
		<div class="col-md-offset-5">
			<h4>Saved Information</h4> 
		</div>

		<div class="panel panel-body">
			<fieldset>
				<legend>Billing Categorization</legend>

				<table class="table">
					<thead>
						<th></th>
						<th>Billing</th>
						<th>Saved</th>
						<th>Insurance</th>
						<th>Saved</th>
						<th>Hospital</th>
						<th>Saved</th>
					</thead>
					<tbody>
						<tr v-for="item in Accession.Cases">
							<td>{{item.CaseNumber}}</td>
							<td>
								<div v-if="item.BillingType === 'Select One'">
									Not Selected
								</div>
								<div v-else="">
									{{item.BillingType}}
								</div>
							</td>
							<td>
								<div v-if="item.BillingType === 'Select One'">
									
								</div>
								<div v-else="">
									{{CurrentDate}}
								</div>
							</td>
							<td>
								<div v-if="item.InsuranceType === 'Select One'">
									Not Selected
								</div>
								<div v-else="">
									{{item.InsuranceType}}
								</div>
							</td>
							<td>
								<div v-if="item.InsuranceType === 'Select One'">
									
								</div>
								<div v-else="">
									{{CurrentDate}}
								</div>
							</td>
							<td>
								<div v-if="item.HospitalStatus === 'Select One'">
									Not Selected
								</div>
								<div v-else="">
									{{item.HospitalStatus}}
								</div>
							</td>
							<td>
								<div v-if="item.HospitalStatus === 'Select One'">
									
								</div>
								<div v-else="">
									{{CurrentDate}}
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</fieldset>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="panel panel-body">
					<fieldset>
						<legend>Triague Status</legend>

						<table class="table">
							<thead>
								<th></th>
								<th>Status</th>
								<th>Comment</th>
							</thead>
							<tbody>
								<tr v-for="item in Accession.Cases">
									<td>{{item.CaseNumber}}</td>
									<td>
										{{item.Status}}
									</td>
									<td>
										<!-- <input type="text" placeholder="Enter any Comment" class="form-control"> -->
										{{item.Comments}}
									</td>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</div>
			</div>
			<div class="col-md-6">
				<div class="panel panel-body">
					<fieldset>
						<legend>Missing Information</legend>

						<table class="table">
							<thead>
								<th>Case</th>
								<th>Information</th>
								<th>Reason</th>
								<th>Saved</th>
							</thead>
							<tbody>
								<tr v-for="item in Accession.MissingInformation">
									<td> {{item.CaseNumber}} </td>
									<td> {{item.Name}} </td>
									<td> {{item.Notes}} </td>
									<td> {{item.CreatedDate}} </td>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</div>
			</div>
		</div>
		

		

	</div>


</template>

<script>
	export default {
		props: ['Accession'],
		computed: {
			CurrentDate() {
				var date = new Date();

				var finaldate = date.toLocaleDateString() + " " + date.getHours()  + ":" + date.getMinutes() + ":" + date.getSeconds()

				return finaldate
			},

		}
	}
</script>