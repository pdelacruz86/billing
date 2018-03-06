<template>
	<div class="row">
		<div class="col-md-12">
			<!-- BEGIN SAMPLE TABLE PORTLET-->
			<div class="portlet">
				<div class="portlet-title">
					<div class="caption">
						<i class="fa fa-money"></i>Billing Categorization </div>
					<div class="tools">
						<a href="javascript:;" class="collapse" data-original-title="" title="" v-if="!billingCollapse" @click="billingCollapse = !billingCollapse"> </a>
						<a href="javascript:;" class="expand" data-original-title="" title="" v-if="billingCollapse" @click="billingCollapse = !billingCollapse"> </a>
					</div>
				</div>
				<div class="portlet-body" :style="{'display':  billingCollapse ? 'none' : 'block'}">
					<div class="table-scrollable">
						<table class="table table-striped table-bordered table-advance table-hover">
							<thead>
								<tr>
									<th></th>
									<th><i class="fa fa-money"></i> Billing </th>
									<th class="hidden-xs"><i class="fa fa-save "></i> Saved </th>
									<th><i class="fa fa-h-square"></i> Insurance </th>
									<th class="hidden-xs"> <i class="fa fa-save "></i> Saved </th>
									<th>  <i class="fa fa-hospital-o"></i> Hospital  </th>
									<th class="hidden-xs"> <i class="fa fa-save "></i> Saved </th>
										<!-- <th class="hiden-xs">
											Status
										</th> -->
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in Accession.Cases">
									<td class="highlight">
										<div class="success"></div>
										<a href="javascript:;" @click="goToBilling"> {{item.CaseNumber}} </a>
									</td>
									<td class="hidden-xs"> 
										<div v-if="item.BillingType === 'Select One'">
											Not Selected
										</div>
										<div v-else>
											{{item.BillingType}}
										</div>
									</td>
									<td> 
										<div v-if="item.BillingType === 'Select One'">
										</div>
										<div v-else>
											{{item.BillingTypeSavedDate}}
										</div> 
									</td>
									<td>
										<div v-if="item.InsuranceType === 'Select One'">
											Not Selected
										</div>
										<div v-else>
											{{item.InsuranceType}}
										</div>
									</td>
									<td>
										<div v-if="item.InsuranceType === 'Select One'">
										</div>
										<div v-else>
											{{item.InsuranceTypeSavedDate}}
										</div>
									</td>
									<td>
										<div v-if="item.HospitalStatus === 'Select One'">
											Not Selected
										</div>
										<div v-else>
											{{item.HospitalStatus}}
										</div>
									</td>
									<td>
										<div v-if="item.HospitalStatus === 'Select One'">
											
										</div>
										<div v-else>
											{{item.HospitalStatusSavedDate}}
										</div>
									</td>
									<!-- <td>
										<span class="label label-sm label-info">Complete</span>
									</td> -->
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- END SAMPLE TABLE PORTLET-->
		</div>
<div class="col-md-12">
			<div class="portlet">
			<div class="portlet-title">
				<div class="caption">
					<i class="fa fa-bar-chart-o"></i>Triage Status
				</div>
				<div class="tools">
					<a href="javascript:;" class="collapse" data-original-title="" title="" v-if="!StatusCollapse" @click="StatusCollapse = !StatusCollapse"> </a>
					<a href="javascript:;" class="expand" data-original-title="" title="" v-if="StatusCollapse" @click="StatusCollapse = !StatusCollapse"> </a>
				</div>
			</div>
			<div class="portlet-body" :style="{'display':  StatusCollapse ? 'none' : 'block'}">
				<div class="table-scrollable">
					<table class="table table-striped table-bordered table-advance table-hover">
						<thead>
							<tr>
							<th>Case Number</th>
							<th>Status</th>
							<th>Comment</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in Accession.Cases">
								<td>{{item.CaseNumber}}</td>
								<td>
									<span v-if="item.Status=='Pending'" class="label label-sm label-success">{{item.Status}}</span>
									<span v-if="item.Status=='Incomplete'" class="label label-sm label-danger">{{item.Status}}</span>
									<span v-if="item.Status=='Complete'" class="label label-sm label-info">{{item.Status}}</span>
								</td>
								<td>
									<!-- <input type="text" placeholder="Enter any Comment" class="form-control"> -->
									{{item.Comments}}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		</div>
		<div class="col-md-12">
			<div class="portlet">
			<div class="portlet-title">
				<div class="caption">
					<i class="fa fa-info-circle"></i>Missing Information</div>
				<div class="tools">
					<a href="javascript:;" class="collapse" data-original-title="" title="" v-if="!missingCollapse" @click="missingCollapse = !missingCollapse"> </a>
					<a href="javascript:;" class="expand" data-original-title="" title="" v-if="missingCollapse" @click="missingCollapse = !missingCollapse"> </a>
				</div>
				<div class="actions">
					<a href="javascript:;" class="btn btn-outline btn-circle btn-sm red" @click="goToMissingInformation">
                                                                                <i class="fa fa-edit"></i> Edit </a>
				</div>
			</div>
			<div class="portlet-body" :style="{'display':  missingCollapse ? 'none' : 'block'}">
				<div class="table-scrollable">
					<table class="table table-striped table-bordered table-advance table-hover" v-if="Accession.MissingInformation.length > 0">
						<thead>
							<tr>
							<th>Case</th>
							<th>Information</th>
							<th>Reason</th>
							<th>Saved</th>
							</tr>
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
					<div class="alert alert-info" v-else="">
						<strong>Info!</strong> There is no missing information.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  props: ["Accession", "CurrentDate"],
  data() {
    return {
      billingCollapse: false,
      StatusCollapse: false,
      missingCollapse: false
    };
  },
  methods: {
    goToMissingInformation: function() {
      this.$emit("go-to-missing", 6);
    },
    goToBilling: function() {
      this.$emit("go-to-missing", 6);
    }
  }
};
</script>