<template>
		<div class="row">
			<WizardHeader :selectedAccession="Accession"></WizardHeader>
			<div class="col-md-6">
				<div class="portlet box blue">
					<div class="portlet-title">
						<div class="caption">
									<i class="fa fa-hospital-o"></i>
									<span > Current</span>
							</div>
							<div class="actions" v-if="Accession.TrigueStatus !== 'Complete' && Accession.Cases.length > 1">
									<div :class="{'btn-group':true,  'open': toggleSelectAll}" @click="toggleSelectAll = !toggleSelectAll">
											<a class="btn btn-sm btn-info dropdown-toggle btn-outline btn-circle btn-sm active" href="javascript:;" data-toggle="dropdown" aria-expanded="true"> Select All
													<i class="fa fa-angle-down"></i>
											</a>
											<ul class="dropdown-menu pull-right">
													<li>
															<a href="javascript:;" @click="selectAllTypes('Inpatient')">
																	Inpatient </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Outpatient')">
																	Outpatient </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Non-hospital')">
																Non-hospital </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Not Provided')"> Not Provided</a>
													</li>
											</ul>
									</div>
							</div>
					</div>
					<div class="portlet-body white">
						<table class="table table-striped" >
							<thead>
								<tr>
									<th >Case Number</th>
									<th > Status </th>
								</tr>
							</thead>

							<tbody>
								<tr v-for="item in Accession.Cases">
									<td>{{ item.CaseNumber }}</td>
									<td v-if="item.InsuranceType === 'Medicare'  && item.Status !== 'Complete'"> 
										<select v-model="item.HospitalStatus">
											<option>Select One</option>	
											<option>Inpatient</option>	
											<option>Outpatient</option>	
											<option>Non-hospital</option>	
											<option>Not Provided</option>	
										</select>
									</td>
									<td v-else>
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
										<td>
									 <a href="javascript:;" @click="openCaseContentCentral(item.CaseNumber)">
                         <i class="fa fa-file-pdf-o"></i></a>
								</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="portlet box blue">
						<div class="portlet-title">
								<div class="caption">
										<i class="fa fa-backward"></i>
										<span > Previous</span>
								</div>
						</div>
						<div class="portlet-body">
						<div class="alert alert-info">
							<strong>Info!</strong> There is no previous accession.
						</div>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
import WizardHeader from "./../patientInfo";

export default {
  components: {
    WizardHeader
  },
  props: {
    Accession: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      toggleSelectAll: false
    };
  },
  methods: {
    selectAllTypes: function(type) {
      debugger;
      this.$emit("select-all-types", "Hospital", type);
    },
    openCaseContentCentral: function(casenumber) {
      window.open(
        "http://csi-dis-one/ContentCentral/Search/Search.aspx?_fts=" +
          casenumber
      );
    }
  }
};
</script>