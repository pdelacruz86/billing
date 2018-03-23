<template>
	<div class="row">
		<WizardHeader :selectedAccession="selectedAccession"></WizardHeader>
		<div class="col-md-6">
			<div class="portlet box blue">
					<div class="portlet-title">
							<div class="caption">
									<i class="fa fa-file-o"></i>
									<span class="caption"> Current</span>
							</div>
							<div class="actions" v-if="selectedAccession.TrigueStatus !== 'Complete' && selectedAccession.Cases.length > 1">
									<div :class="{'btn-group':true,  'open': toggleSelectAll}" @click="selectedAccession.TrigueStatus !== 'Complete' ? toggleSelectAll = !toggleSelectAll : toggleSelectAll = false">
											<a class="btn btn-sm btn-info dropdown-toggle btn-outline btn-circle btn-sm active" href="javascript:;" data-toggle="dropdown" aria-expanded="true"> Select All
													<i class="fa fa-angle-down"></i>
											</a>
											<ul class="dropdown-menu pull-right">
													<li>
															<a href="javascript:;" @click="selectAllTypes('Direct')">
																	 Direct </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Insurance')">
																	 Insurance </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Split')">
																Split </a>
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
								<th>Case Number</th>
								<th> Billing type</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="item in selectedAccession.Cases">
								<td>{{item.CaseNumber}}</td>
								<td v-if="item.Status !== 'Complete'" @change="updateSaveTime(item.CaseNumber)"> 
										<select v-model="item.BillingType">
											<option>Select One</option>	
											<option>Direct</option>	
											<option>Insurance</option>	
											<option>Split</option>	
											<option>Not Provided</option>	
										</select>
									</td>
									<td v-else="">
										{{item.BillingType}}
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
									<span class="caption"> Previous</span>
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["selectedAccession"])
  },
  data() {
    return {
      toggleSelectAll: false
    };
  },
  methods: {
    selectAllTypes: function(type) {
      this.$emit("select-all-types", "Billing", type);
    },
    updateSaveTime(casenumber) {
      this.$emit("update-saved-date", "Billing", casenumber);
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