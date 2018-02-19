<template>
	<div class="row">
		<div class="col-md-12" style="padding-left:25px;padding-right:25px">
			<table class="table  table-striped">
				<tbody>
					<tr>
						<td><span class="primary-link">Accession ID:</span> </td>
						<td><span>{{this.selectedAccession.AccessionID}}</span> </td>
						<td><span class="primary-link">Gender:</span> </td>
						<td>	<span>{{this.selectedAccession.PatientInformation.Gender}}</span> 
						</td>
						<td><span class="primary-link">Accession Date :</span> </td>
						<td><span>{{timestamp(this.selectedAccession.CreatedDate)}}</span> </td>
						
						<td><span class="primary-link">DOB:</span> </td>
						<td><span>{{dob_timestamp(this.selectedAccession.PatientInformation.DateOfBirth)}}</span></td>
						
					</tr>
				</tbody>
			</table>
			<table class="table  table-striped">
				<tbody>
					<tr>
							<td> <span class="primary-link">Patient: </span> </td>
						<td>
							<span>{{this.selectedAccession.PatientInformation.PatientName}}</span>
						</td>
						<td>
							<span class="primary-link">Patient ID:</span> 
						</td>
						<td>
							<span>{{this.selectedAccession.PatientInformation.PatientID}}</span> 
						</td>
					
						<td><span class="primary-link">Client:</span> </td>
						<td>	<span>{{this.selectedAccession.PatientInformation.ClientName}}</span> 
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>


</template>

<script>
var moment = require("moment");

export default {
  props: ["selectedAccession"],
  data() {
    return {};
  },
  methods: {
    dob_timestamp: function(date) {
      return moment.unix(date).format("YYYY-MM-DD");
    },
    timestamp: function(date) {
      return moment.unix(date).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>