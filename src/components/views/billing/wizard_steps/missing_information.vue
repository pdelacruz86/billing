<template>
<div class="row">
	<!-- <WizardHeader :selectedAccession="Accession"></WizardHeader> -->
	<div class="row" v-if="!showModal">
		<div class="col-md-1">
		</div>
		<div class="col-md-10 portlet box blue right" >
			<div class="portlet-title">
				<div class="caption">
						<i class="fa fa-comments"></i>Missing Information</div>
				<div class="actions">
					<a href="javascript:;" class="btn btn-circle btn-default" @click="openMissingModal">
						<i class="fa fa-plus"></i> Add </a>
				</div>
			</div>
			<div class="portlet-body">
				<table class="table table-striped">
					<thead>
						<th>CaseNumber</th>
						<th>Name</th>
						<th>Notes</th>
						<th></th>
					</thead>
					<tbody >
						<tr v-for="item in Accession.MissingInformation"> 
							<td>{{item.CaseNumber}}</td>
							<td>{{item.Name}}</td>
							<td>{{item.Notes}}</td>
							<td>
								<a href="javascript:;" class="btn btn-outline btn-circle dark btn-sm black" @click="deleteMissingInformation(item)">
								<i class="fa fa-trash-o"></i> Delete </a>
							</td>
						</tr>
					</tbody>
				</table>
					<div class="alert alert-info" v-if="this.Accession.MissingInformation.length == 0">
									<strong>Info!</strong> There is no missing Information 
								</div>
			</div>
		</div>
		<div class="col-md-1">
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-2"></div>
		<div class="col-md-8">
			 <!-- use the modal component, pass in the prop -->
			<modal v-if="showModal" @close="closeModal">
				<!--
				you can use custom content here to overwrite
				default content
			-->
				<div slot="body">
					<div class="intrinsic-container intrinsic-container-16x9">
						<div class="col-md-3">
						</div>
						<div class="col-md-6 portlet light">
							<div class="portlet-body form">
								<div class="form-body">
									<div class="form-group" :class="{'has-error': errors.has('CaseNumber') }">
										<label class="control-label">Select a Case: 
										</label>
											<select name="CaseNumber" v-model="MissingInfo.CaseNumber" v-validate="'required'" 
												:class="{'form-control input-sm': true, 'is-danger': errors.has('CaseNumber') }">
												<option>All</option>	
												<option v-for="item in Accession.Cases">{{item.CaseNumber}}</option>	
											</select>
												<p class="text-danger" v-if="errors.has('CaseNumber')">{{ errors.first('CaseNumber') }}</p>
									</div>
									<div class="form-group" :class="{'has-error': errors.has('Name') }">
										<label class="control-label">Missing Info: 
										</label>
											<select name="Name" v-model="MissingInfo.Name" v-validate="'required'" :class="{'form-control input-sm': true, 'is-danger': errors.has('Name') }">
												<option>Missing requisition</option>	
												<option>Billing not marked</option>	
												<option>Hospital status missing</option>	
												<option>Insurance name missing</option>	
												<option>Insurance policy number missing</option>	
												<option>No patient demographics</option>	
												<option>DOB missing</option>	
												<option>Patient address missing</option>	
												<option>Patient gender missing</option>	
												<option>Other</option>	
											</select>
											<p class="text-danger" v-if="errors.has('Name')">{{ errors.first('Name') }}</p>
									</div>
								<div class="form-group" :class="{'has-error': errors.has('Notes') }">
										<label class="control-label">Notes: 	</label>
								<textarea name="Notes" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('Name') }" v-model="MissingInfo.Notes" rows="3" cols="38" class="form-control" placeholder="notes..."></textarea> 
												<p class="text-danger" v-if="errors.has('Notes')">{{ errors.first('Notes') }}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
					</div>
				</div>
			</div>
			<div slot="footer">
				<div class="form-actions right">
						<button type="button" class="btn default" @click="clearFields">Clear Fields</button>
						<button type="submit" class="btn red" @click="validateBeforeSubmit()">Submit</button>
				</div>
			</div>
		</modal>
		</div>
		<div class="col-md-2"></div>
	</div>
</div>
</template>

<script>
import WizardHeader from "./../patientInfo";
import Modal from "./missingInformationModal.vue";

export default {
  components: {
    WizardHeader,
    Modal
  },
  mounted() {
    debugger;
    if (this.Accession.MissingInformation.length === 0) this.showModal = true;
    else this.showModal = false;
  },
  props: {
    Accession: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      MissingInfo: {
        Name: "",
        CaseNumber: "",
        Notes: ""
      },
      showModal: false
    };
  },
  methods: {
    deleteMissingInformation: function(missinginfo) {
      this.$emit("missing-removed", missinginfo);
    },
    closeModal: function() {
      this.clearFields();
      this.showModal = false;
    },
    clearFields: function() {
      this.MissingInfo.Name = "";
      this.MissingInfo.CaseNumber = "";
      this.MissingInfo.Notes = "";
    },
    openMissingModal: function() {
      this.showModal = true;
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.saveMissing();
          return;
        }
      });
    },
    saveMissing() {
      this.showModal = false;
      this.$emit("missingAdded", this.MissingInfo);
    },
    openCaseContentCentral: function() {
      this.showModal = true;
    }
  }
};
</script>
