<template> 
	<div class="row">
		<div class="portlet light">
			<div class="portlet-body">
				<div id="pro-wizard">
					<step-navigation :steps="steps" :currentstep="currentstep">
					</step-navigation>

					<div v-if="currentstep == 1">
						<StepSearch></StepSearch>
					</div>
					
					<div v-if="selectedAccession">
						<div v-if="currentstep == 2">
							<StepActiveAccession :Accession="selectedAccession"></StepActiveAccession>
						</div>

						<div v-if="currentstep == 3">
							<Insurance :Accession="selectedAccession"></Insurance>
						</div>

						<div v-if="currentstep == 4">
							<HospitalStatus :Accession="selectedAccession"></HospitalStatus>
						</div>

						<div v-if="currentstep == 5">
							<MissingInfo :Accession="selectedAccession" @missingAdded="missingAdded"></MissingInfo>
						</div>

						<div v-if="currentstep == 6">
							<CheckIn :Accession="selectedAccession"></CheckIn>
						</div>

						<div v-if="currentstep == 7">
							<Review :Accession="selectedAccession"></Review>
						</div>
					</div>

					<step-controls v-for="step in steps"
					:step="step"
					:stepcount="steps.length"
					:currentstep="currentstep"
					@step-change="stepChanged">
				</step-controls>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	var testData  = require('../../../utils/testData.js')
	var stepsData  = require('./wizard_steps/steps.js')

	//wizard buttons
	import StepNavigation from './wizard_steps/step-navigation'
	import StepControls from './wizard_steps/step-controls'

	import StepSearch from './wizard_steps/search'
	import StepActiveAccession from './wizard_steps/active_accession'
	import Insurance from './wizard_steps/insurance'
	import Medicare from './wizard_steps/medicare'
	import HospitalStatus from './wizard_steps/hospital_status'
	import MissingInfo from './wizard_steps/missing_information'
	import CheckIn from './wizard_steps/checkin'
	import Review from './wizard_steps/review'

	import VueNotifications from 'vue-notifications'

	export default {
		components: {
			StepNavigation,
			StepControls,
			StepSearch,
			StepActiveAccession,
			Insurance,
			HospitalStatus,	
			MissingInfo,
			CheckIn,
			Review
		},
		mounted () {
			debugger;
			this.Accessions = testData.getData();
			this.steps = stepsData.steps();
		},
		data () {
			return {
				currentstep : 1,
				indicatorclass: true,
				step: 1,
				active: 1,
				firststep: true,
				nextStep:"",
				lastStep: "",
				laststep: false,
				steps : [],
				selectedAccession : {},
				Accessions : {}
			}
		},
		computed: {

			hasInsurance() {
				var cases = this.selectedAccession.Cases;

				var hasInsurance = false;

				//check for insurance
				for (var i = 0; i < cases.length; i++) {
					var currentCase = cases[i];

					if (currentCase.BillingType === "Insurance") {
						return true;
					}
				}

				return hasInsurance;
			},
			hasMissing() {
				var cases = this.selectedAccession.Cases;

				var hasMissing = false;

				//check for insurance
				for (var i = 0; i < cases.length; i++) {
					var currentCase = cases[i];

					if (currentCase.BillingType === "Missing" || currentCase.InsuranceType === "Missing" || currentCase.HospitalStatus === "Missing") {
						return true;
					}
				}
				
				return hasMissing;
			},
			hasDirect() {
				var cases = this.selectedAccession.Cases;

				var _hasDirect = false;

				//check for insurance
				for (var i = 0; i < cases.length; i++) {
					var currentCase = cases[i];

					if (currentCase.BillingType === "Direct") {
						return true;
					}
				}
				
				return _hasDirect;
			},
			hasSplit() {
				var cases = this.selectedAccession.Cases;

				var hasSplit = false;

				//check for insurance
				for (var i = 0; i < cases.length; i++) {
					var currentCase = cases[i];

					if (currentCase.BillingType === "Split") {
						return true;
					}
				}
				
				return hasSplit;
			},
			hasMedicare() {
				var cases = this.selectedAccession.Cases;
				var hasMedicare = false;

				if (this.hasInsurance) {
					//check for insurance
					for (var i = 0; i < cases.length; i++) {
						var currentCase = cases[i];

						if (currentCase.InsuranceType === "Medicare") {
							return true;
						}
					}
				}

				return hasMedicare;
			},
			isLastStep() {
				debugger;
				if (this.$children[0]) {

					return this.$children[0].isLastStep
				}
				return false
			},
			StepAccession() {
				var tab = this.steps.filter(function(item) {
					return item.key === 'step_accession';
				})[0];

				return tab;
			},
			StepInsurance() {
				var tab = this.steps.filter(function(item) {
					return item.key === 'step_insurance';
				})[0];

				return tab;
			},
			StepMissing() {
				var tab = this.steps.filter(function(item) {
					return item.key === 'step_missing';
				})[0];
				
				return tab;
			},
			StepCheckIn() {
				var tab = this.steps.filter(function(item) {
					return item.key === 'step_checkin';
				})[0];
				
				return tab;
			},
			StepHospitalStatus() {
				var tab = this.steps.filter(function(item) {
					return item.key === 'step_hospital_status';
				})[0];
				
				return tab;
			}

		},
		methods: {
			missingAdded: function ( info ) {
				debugger;	
				var date = new Date();

				var finaldate = date.toLocaleDateString() + " " + date.getHours()  + ":" + date.getMinutes() + ":" + date.getSeconds()

				if (info.CaseNumber === 'All') {
					var cases = this.selectedAccession.Cases;

					for (var i = 0; i < cases.length; i++) {
						var _case = cases[i];

						this.selectedAccession.MissingInformation.push({
							Name : info.Name,
							CaseNumber: _case.CaseNumber,
							Notes: info.Notes,
							CreatedDate: finaldate
						})

					}
				}else {
					this.selectedAccession.MissingInformation.push({
							Name : info.Name,
							CaseNumber: info.CaseNumber,
							Notes: info.Notes,
							CreatedDate: finaldate
						})
				}

				this.selectedAccession.MissingInformation
			},
			stepChanged: function(step) {
				var selfStep =  this.currentstep;
				var isback = false;

				if ( selfStep > step ) {
					isback = true;
				}

				if ( selfStep === 1 ) {
					var accessions = this.Accessions;
					var tinput = this.$store.state.login.searchText

					//identify a case number or accession id
					var isCaseNumber = (tinput.indexOf('-') > -1)

					if (isCaseNumber) {
						//get accession id by case number
						for (var i = 0; i < accessions.length; i++) {
							var a = accessions[i];

							var current = a.Cases.filter(function(item) {
								return item.CaseNumber === tinput;
							})[0];

							if (current) {
								tinput = a.AccessionID;						
							}
						}

					} else {
						tinput = parseInt(tinput)
					}

					var accession = accessions.filter(function(item) {
						return item.AccessionID === tinput;
					})[0];

					if (accession) {
						this.selectedAccession = accession;

						this.currentstep = step
					}
					else {
						var error = {
							title: 'There is no information for that number-either the case or accession was deleted or you have a typo.',
							message: 'Try again, but if it happends again check the case number in the LIS',
							type: 'error' 
						}

						VueNotifications.error(error)
					}
					
				}

				// step 2
				if ( selfStep === 2 ) {

					if( isback ) {
						this.currentstep = step
					}
					else {

						//if has insurance
						if (this.hasInsurance) {
							//go next
							this.currentstep = step;
						}
						else {
							//check for missin information
							if (this.hasMissing) {
								this.currentstep = this.StepMissing.id;
							}
							else {
								this.currentstep = this.StepCheckIn.id;
							}
						}
						return;
					}
				}
				// step 3
				if ( selfStep === 3 ) {
					if ( isback ) {
						this.currentstep = step;
					}
					else {
						//if has insurance
						if (this.hasMedicare) {
						//go next
						this.currentstep = step;
					}
					else {
						//check for missin information
						if (this.hasMissing) {
							this.currentstep = this.StepMissing.id;
						}
						else {
							this.currentstep = this.StepCheckIn.id;
						}
					}
					return;
				}
				
			}

			// step 4 ===== Hospital status ========
			if ( selfStep === 4 ) {
				if (isback) {
					this.currentstep = step
				}
				else {
					if ( this.hasMissing ) {
						this.currentstep = step
					}
					else {
						this.currentstep = this.StepCheckIn.id;
					}
				}
			}

			// step 5 ===== MISSING INFORMATION ========
			if ( selfStep === 5 ) {
				if (isback) {
					//if has insurance
					if ( this.hasMedicare ) {
						//go next
						this.currentstep = this.StepHospitalStatus.id;
					}
					else {
						if ( this.hasInsurance ) {
							this.currentstep = this.StepInsurance.id
						}
						else {
							this.currentstep = this.StepAccession.id
						}
					}
				}
				else {
					this.currentstep = step
				}
			}

			//step 6
			if ( selfStep === 6 ) {
				if ( isback ) {
					if (this.selectedAccession.checkInMissingInformation === 'true') {
						//go next
						this.currentstep = this.StepMissing.id;
					}
					else {
						//check insurance
						if ( this.hasMedicare ) {
							//go next
							this.currentstep = this.StepHospitalStatus.id;
						}
						else {
							if (this.hasInsurance) {
								this.currentstep = this.StepInsurance.id
							}
							else {
								this.currentstep = this.StepAccession.id
							}
						}
					}
				}
				else {
					//if has insurance
					if (this.selectedAccession.checkInMissingInformation === 'true') {
						//go next
						this.currentstep = this.currentstep - 1;
					}
					else {
						//

						for (var i = 0; i < this.selectedAccession.Cases.length; i++) {
							 var _case = this.selectedAccession.Cases[i];

							 if (_case.BillingType === "Select One") {
							 	_case.Status = 'Pending'
							 	_case.Comments = ''
							 }
							 else
							 if  (_case.BillingType === "Missing") {
							 	_case.Status = 'Missing'
							 }
							 else if (_case.BillingType === "Direct" || _case.BillingType === "Split" ) {
							 	_case.Status = 'Complete'
							 }
							 else if (_case.BillingType === "Insurance") {
							 	 if (_case.InsuranceType === "Select One") {
							 		_case.Status = 'Incomplete'
							 		_case.Comments = 'Insurance status is missing'
								 }
								 else
								 if  (_case.InsuranceType === "Missing") {
								 	_case.Status = 'Missing'
								 }
								 else
							 	 if  (_case.InsuranceType === "Medicare") {
								 	if(_case.HospitalStatus === "Select One") {
							 			_case.Status = 'Incomplete'
							 			_case.Comments = 'Hospital status is missing'
								 	} 
								 	else if(_case.HospitalStatus === "Missing") {
							 			_case.Status = 'Missing'

								 	}else {
								 		_case.Status = "Complete";
								 	}

								 }else {
								 	_case.Status = "Complete"
								 }
							 }
						}

						this.currentstep = step;
					}
				}

				return;
			}

			//step 7 -- Last Step
			if ( selfStep === 7 ) {
				this.currentstep = step;
				return;
			}
		}
	}
}
</script>

<style>
fieldset {
    border: 1px solid #ddd !important;
    margin: 0;
    xmin-width: 0;
    padding: 10px;
    position: relative;
    border-radius: 4px;
    background-color: #f5f5f5;
    padding-left: 10px!important;
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}

fieldset {
    padding: .35em .625em .75em;
    margin: 0 2px;
    border: 1px solid silver;
}
	legend {
    font-size: 14px !important;
    font-weight: bold;
    margin-bottom: 0px;
    width: 35%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 5px 5px 10px;
    background-color: #ffffff;
}

legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    font-size: 21px;
    line-height: inherit;
    color: #333;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
}

legend {
    padding: 0;
    border: 0;
}
	.step-wrapper {
		padding: 20px 0;
		display: none;
	}

	.step-wrapper.active {
		display: block;
	}

	.step-indicator {
		border-collapse: separate;
		display: table;
		margin-left: 0px;
		position: relative;
		table-layout: fixed;
		text-align: center;
		vertical-align: middle;
		padding-left: 0;
		padding-top: 20px;
	}

	.step-indicator li {
		display: table-cell;
		position: relative;
		float: none;
		padding: 0;
		width: 1%;
	}

	.step-indicator li:after {
		background-color: #ccc;
		content: "";
		display: block;
		height: 1px;
		position: absolute;
		width: 100%;
		top: 32px;
	}

	.step-indicator li:after {
		left: 50%;
	}

	.step-indicator li:last-child:after {
		display: none;
	}

	.step-indicator li.active .step {
		border-color: #4183D7;
		color: #4183D7;
	}

	.step-indicator li.active .caption {
		color: #4183D7;
	}

	.step-indicator li.complete:after {
		background-color: #87D37C;
	}

	.step-indicator li.complete .step {
		border-color: #87D37C;
		color: #87D37C;
	}

	.step-indicator li.complete .caption {
		color: #87D37C;
	}

	.step-indicator .step {
		background-color: #fff;
		border-radius: 50%;
		border: 1px solid #ccc;
		color: #ccc;
		font-size: 24px;
		height: 64px;
		line-height: 64px;
		margin: 0 auto;
		position: relative;
		width: 64px;
		z-index: 1;
	}

	.step-indicator .step:hover {
		cursor: pointer;
	}

	.step-indicator .caption {
		color: #ccc;
		padding: 11px 16px;
	}

</style>
