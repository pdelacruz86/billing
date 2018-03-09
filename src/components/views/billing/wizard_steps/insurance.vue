<template>
		<div class="row">
			<WizardHeader :selectedAccession="Accession"></WizardHeader>
			<div class="col-md-6">
					<div class="portlet box blue">
					<div class="portlet-title">
							<div class="caption">
									<i class="fa fa-h-square"></i>
									<span> Current</span>
							</div>
							<div class="actions" v-if="Accession.TrigueStatus !== 'Complete' && Accession.Cases.length > 1">
									<div :class="{'btn-group':true,  'open': toggleSelectAll}" @click="Accession.TrigueStatus !== 'Complete' ? toggleSelectAll = !toggleSelectAll : toggleSelectAll = false">
											<a class="btn btn-sm btn-info dropdown-toggle btn-outline btn-circle btn-sm active" href="javascript:;" data-toggle="dropdown" aria-expanded="true"> Select All
													<i class="fa fa-angle-down"></i>
											</a>
											<ul class="dropdown-menu pull-right ">
													<li>
															<a href="javascript:;" @click="selectAllTypes('Medicare')">
																	 Medicare </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Not Medicare')">
																	 Not Medicare </a>
													</li>
													<li class="divider"> </li>
													<li>
															<a href="javascript:;" @click="selectAllTypes('Not Provided')">
																Not Provided </a>
													</li>
											</ul>
									</div>
							</div>
					</div>
					<div class="portlet-body white ">
					<table class="table table-striped">
						<thead>
							<tr>
								<th >Case Number</th>
								<th > Insurance Type </th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="item in Accession.Cases">
								<td>{{item.CaseNumber}}</td>
								<td v-if="item.BillingType === 'Insurance' && item.Status !== 'Complete'"> 
									<select v-model="item.InsuranceType" @change="selectEvt" >
										<option>Select One</option>	
										<option>Medicare</option>	
										<option>Not Medicare</option>	
										<option>Not Provided</option>	
									</select>
								</td>
								<td v-else>
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
      this.$emit("select-all-types", "Insurance", type);
    },
    selectEvt: function() {},
    openCaseContentCentral: function(casenumber) {
      window.open(
        "http://csi-dis-one/ContentCentral/Search/Search.aspx?_fts=" +
          casenumber
      );
    }
  }
};
</script>