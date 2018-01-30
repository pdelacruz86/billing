<template>
	<div class="row">
		<div class="col-md-1"></div>
		<div class="col-md-10">
			<table class="table  table-striped">
				<tbody>
					<tr>
						<td> <span class="primary-link">Patient: </span> </td>
						<td>
							<span class="bold">{{this.selectedAccession.PatientInformation.PatientName}}</span>
						</td>
						<td><span class="primary-link">DOB:</span> </td>
						<td><span class="bold">{{this.selectedAccession.PatientInformation.DateOfBirth}}</span></td>
						<td><span class="primary-link">Gender:</span> </td>
						<td>	<span class="bold">{{this.selectedAccession.PatientInformation.Gender}}</span> 
						</td>
						<td><span class="primary-link">Client:</span> </td>
						<td>	<span class="bold">{{this.selectedAccession.PatientInformation.ClientName}}</span> 
						</td>
					</tr>
					<tr>
						<td><span class="primary-link">Accession ID:</span> </td>
						<td><span class="bold">{{this.selectedAccession.AccessionID}}</span> </td>
						<td>
							<span class="primary-link">Patient ID:</span> 
						</td>
						<td>
							<span class="bold">{{this.selectedAccession.PatientInformation.PatientID}}</span> 
						</td>

						<td><span class="primary-link">Accession Date :</span> </td>
						<td><span class="bold">{{this.selectedAccession.CreatedDate}}</span> </td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col-md-1"></div>

	</div>


</template>

<script>
	export default {
		props: ['selectedAccession'],
		data () {
			return {
				
			}
		}
	}
</script>