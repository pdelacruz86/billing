<template> 
	<div class="row">
		<div :class="{'portlet-fullscreen': wizardfullscreen, 'portlet light': true}" >
			<div class="portlet-title">
				<div class="caption">
					<i class="fa fa-cogs"></i>Billing Wizard </div>
          <div class="actions">
            <div class="btn-group btn-group" data-toggle="buttons">
              <div v-if="selectedAccession.Cases !== undefined" :class="{'btn-group':true,  'open': toggleContentCentral}" @click="toggleContentCentral = !toggleContentCentral">
                <a  class="btn btn-sm btn-info dropdown-toggle btn-outline btn-sm active" 
                    href="javascript:;" 
                    data-toggle="dropdown" 
                    aria-expanded="true"> Content Central
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu pull-right"  >
                  <li  v-for="item in selectedAccession.Cases">
                      <a href="javascript:;" @click="openCaseContentCentral(item.CaseNumber)">
                            {{item.CaseNumber}} </a>
                  </li>
                </ul>
                
              </div>
              <button v-else type="button" class="btn btn-group btn-info active" style="height: 29.5px;" @click="openCaseContentCentral('')">Content Central</button>
              <button type="button" class="btn btn-group btn-info active" style="height: 29.5px;" @click="newSearch">New Search</button>
            </div>
            <div href="javascript:;" @click="wizardfullscreen = !wizardfullscreen" 
              class="btn btn-circle btn-icon-only btn-default fullscreen"  data-original-title="" title=""> 
            </div>
          </div>
				</div>
				<div class="portlet-body" v-if="!isLocked">
					<div id="pro-wizard">
						<step-navigation :steps="steps" :currentstep="currentstep" @step-change="stepChanged">
						</step-navigation>

						<div v-if="currentstep == 1">
							<StepSearch></StepSearch>
						</div>

						<div v-if="selectedAccession">
							<div v-if="currentstep == 2">
								<StepActiveAccession :Accession="selectedAccession" @select-all-types="selectAllTypes" 
                  @update-saved-date="updateSavedDate"></StepActiveAccession>
							</div>

							<div v-if="currentstep == 3">
								<Insurance :Accession="selectedAccession" @select-all-types="selectAllTypes"  
                  @update-saved-date="updateSavedDate"></Insurance>
							</div>

							<div v-if="currentstep == 4">
								<HospitalStatus :Accession="selectedAccession" @select-all-types="selectAllTypes"  
                  @update-saved-date="updateSavedDate"></HospitalStatus>
							</div>

							<div v-if="currentstep == 5">
								<CheckIn :Accession="selectedAccession" @go-to-missing="stepChanged" @go-to-review="stepChanged"></CheckIn>
							</div>

							<div v-if="currentstep == 6">
								<MissingInfo :Accession="selectedAccession" @missingAdded="missingAdded" @missing-removed="missingRemoved"></MissingInfo>
							</div>

							<div v-if="currentstep == 7">
								<Review :Accession="selectedAccession" :CurrentDate="currentDate" @go-to-missing="stepChanged"></Review>
							</div>
						</div>
            <step-controls v-for="step in steps" 
              ref="stepControls" 
              :step="step"
              :stepcount="steps.length"
              :currentstep="currentstep"
              @step-change="stepChanged">
            </step-controls>
				</div>
			</div>
      <div class="portlet-body" v-else>
        <div id="pro-wizard">
          <div class="alert alert-info">
								<strong>Info!</strong> You cannot open this accession, it is locked by user {{selectedAccession.LockingInformation.UserName}} on {{selectedAccession.LockingInformation.LockDateTime}}.
							</div>
        </div>
      </div>
		</div>
		 <!-- use the modal component, pass in the prop -->
		<modal v-if="showModal" @close="showModal = false">
			<!--
			you can use custom content here to overwrite
			default content
			-->
			<div slot="body">
				<div class="intrinsic-container intrinsic-container-16x9">
					<iframe allowfullscreen src="http://csi-dis-one/ContentCentral/Search/Search.aspx?c=Operations Medical Records&dt=Requisitions&f2&v2=FIG17-006633">
				  </iframe>
			  </div>
			</div>
		</modal>
     <modal-confirmation v-if="showConfirmationModal" @close="showConfirmationModal = false" 
      @submitAccession="submitAccessionConfirmationHandler">
    </modal-confirmation>
	</div>

 
</template>

<script>
var stepsData = require("./wizard_steps/steps.js");
const moment = require("moment");
const _ = require("lodash");

import { mapGetters, mapActions } from "vuex";

//wizard buttons
import StepNavigation from "./wizard_steps/step-navigation";
import StepControls from "./wizard_steps/step-controls";

import StepSearch from "./wizard_steps/search";
import StepActiveAccession from "./wizard_steps/active_accession";
import Insurance from "./wizard_steps/insurance";
import HospitalStatus from "./wizard_steps/hospital_status";
import MissingInfo from "./wizard_steps/missing_information";
import CheckIn from "./wizard_steps/checkin";
import Review from "./wizard_steps/review";

import Modal from "../../utils/modal-template.vue";
import ModalConfirmation from "../../utils/modal-confirmation.vue";

import VueNotifications from "vue-notifications";

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
    Review,
    Modal,
    ModalConfirmation
  },
  created: function() {
    window.addEventListener("keyup", this.keymonitor);
  },
  destroyed: function() {
    debugger;
    this.unlockAccession(this.selectedAccession);
    window.removeEventListener("keyup", this.keymonitor);
    this.setSelectedAccession({});
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      if (to.fullPath === "/new") {
        this.currentstep = 1;
        this.updateTextSearch("");
      }
    }
  },
  mounted() {
    debugger;
    var querystring = this.$router.history.current.query.filter;
    if (querystring !== undefined) {
      if (this.selectedAccession.AccessionID !== undefined) {
        if (!this.selectedAccession.LockingInformation.IsLocked) {
          this.lockAccession(this.selectedAccession);
        }
      }
      this.updateTextSearch(querystring);
      this.setCurrentStep(2);
    } else {
      if (this.selectedAccession.AccessionID !== undefined) {
        if (!this.selectedAccession.LockingInformation.IsLocked)
          this.lockAccession(this.selectedAccession);
        this.updateTextSearch(this.selectedAccession.AccessionID.toString());
        this.setCurrentStep(2);
      } else {
        this.setCurrentStep(1);
        this.updateTextSearch("");
      }
    }
  },
  data() {
    return {
      indicatorclass: true,
      step: 1,
      active: 1,
      firststep: true,
      // selectedAccession : {},
      showModal: false,
      showConfirmationModal: false,
      wizardfullscreen: false,
      toggleContentCentral: false
    };
  },
  computed: {
    ...mapGetters([
      "selectedAccession",
      "accessions",
      "searchText",
      "currentUserName1",
      "steps",
      "currentstep",
      "connectionID"
    ]),
    isLocked() {
      let lockinginfo = this.selectedAccession.LockingInformation;
      if (lockinginfo !== undefined) {
        return lockinginfo.isLocked;
      } else {
        return false;
      }
    },
    currentDate() {
      var date = new Date();

      var finaldate =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();

      return finaldate;
    },
    isNew() {
      return this.$router.history.current.params.id === undefined;
    },
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
    hasSelectOneBilling() {
      var cases = this.selectedAccession.Cases;

      var hasMissing = false;

      //check for insurance
      for (var i = 0; i < cases.length; i++) {
        var currentCase = cases[i];

        if (currentCase.BillingType === "Select One") {
          return true;
        }
      }

      return hasMissing;
    },
    hasSelectOneInsurance() {
      var cases = this.selectedAccession.Cases;

      var hasMissing = false;

      //check for insurance
      for (var i = 0; i < cases.length; i++) {
        var currentCase = cases[i];

        if (
          currentCase.InsuranceType === "Select One" &&
          currentCase.BillingType === "Insurance"
        ) {
          return true;
        }
      }

      return hasMissing;
    },
    hasSelectOneHospitalStatus() {
      var cases = this.selectedAccession.Cases;

      var hasMissing = false;

      //check for insurance
      for (var i = 0; i < cases.length; i++) {
        var currentCase = cases[i];

        if (
          currentCase.HospitalStatus === "Select One" &&
          currentCase.InsuranceType === "Medicare" &&
          currentCase.BillingType === "Insurance"
        ) {
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
      if (this.$children[0]) {
        return this.$children[0].isLastStep;
      }
      return false;
    },
    StepAccession() {
      var tab = this.steps.filter(function(item) {
        return item.key === "step_accession";
      })[0];

      return tab;
    },
    StepInsurance() {
      var tab = this.steps.filter(function(item) {
        return item.key === "step_insurance";
      })[0];

      return tab;
    },
    StepMissing() {
      var tab = this.steps.filter(function(item) {
        return item.key === "step_missing";
      })[0];

      return tab;
    },
    StepCheckIn() {
      var tab = this.steps.filter(function(item) {
        return item.key === "step_checkin";
      })[0];

      return tab;
    },
    StepHospitalStatus() {
      var tab = this.steps.filter(function(item) {
        return item.key === "step_hospital_status";
      })[0];

      return tab;
    }
  },
  methods: {
    ...mapActions([
      "getAllCases",
      "setSelectedAccession",
      "updateTextSearch",
      "updateAccession",
      "unlockAccession",
      "lockAccession",
      "setCurrentStep"
    ]),
    updateSavedDate: function(status, casenumber) {
      debugger;
      let date = new Date();
      let savedDateTime =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();

      switch (status) {
        case "Billing":
          this.selectedAccession.Cases.forEach(function(item, index) {
            if (item.CaseNumber === casenumber) {
              item.BillingTypeSavedDate = savedDateTime;
              return;
            }
          });
          break;
        case "Insurance":
          this.selectedAccession.Cases.forEach(function(item, index) {
            if (item.CaseNumber === casenumber) {
              item.InsuranceTypeSavedDate = savedDateTime;
              return;
            }
          });
          break;
        case "Hospital":
          this.selectedAccession.Cases.forEach(function(item, index) {
            if (item.CaseNumber === casenumber) {
              item.HospitalStatusSavedDate = savedDateTime;
              return;
            }
          });
          break;
        default:
          break;
      }
    },
    keymonitor: function(event) {
      console.log(event.key);
      debugger;
      //when hit enter in missing information dont go next submit the MI
      var missingInformationInstace = this.$children[8];
      if (
        event.key == "Enter" &&
        missingInformationInstace.showModal !== undefined
      ) {
        if (!missingInformationInstace.showModal) {
          this.stepChanged(this.currentstep + 1);
        } else {
          missingInformationInstace.validateBeforeSubmit();
        }
      } else if (
        event.key == "Enter" &&
        this.currentstep === 6 &&
        missingInformationInstace.showModal
      ) {
        missingInformationInstace.validateBeforeSubmit();
      } else if (
        event.key == "Enter" &&
        this.currentstep === 7 &&
        this.showConfirmationModal
      ) {
        this.submitAccessionConfirmationHandler();
      } else {
        if (event.key == "Enter" && this.currentstep === 7) {
          if (this.selectedAccession.TrigueStatus === "Incomplete") {
            this.showConfirmationModal = true;
          } else {
            if (
              event.key == "Enter" &&
              this.selectedAccession.TrigueStatus === "Complete"
            ) {
              this.$router.push({ path: "/worklist" });
            } else {
              if (event.key == "Enter") this.submitAccession();
            }
          }
        } else {
          if (event.key == "Enter") this.stepChanged(this.currentstep + 1);
        }
      }
    },
    submitAccessionConfirmationHandler: function() {
      this.submitAccession();
    },
    submitAccession: function() {
      let date = new Date();
      let savedDateTime =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();

      //get the current accession
      let _accession = this.selectedAccession;

      //get the caselist
      let caselist = _accession.Cases;

      // let savedDateTime = moment().format("YYYY-mm-dd HH:mm:ss");
      //iterate through currentAccession cases
      for (var i = 0; i < caselist.length; i++) {
        var currentCase = caselist[i];

        if (currentCase.BillingType === "Select One") {
          _accession.TrigueStatus = "Pending";
          currentCase.Status = "Pending";
        } else if (currentCase.BillingType === "Not Provided") {
          _accession.TrigueStatus = "Incomplete";
          currentCase.Status = "Incomplete";
          currentCase.UserName = this.currentUserName1;
          continue;
        } else if (
          currentCase.BillingType === "Direct" ||
          currentCase.BillingType === "Split"
        ) {
          _accession.TrigueStatus = "Complete";
          currentCase.Status = "Complete";
          currentCase.UserName = this.currentUserName1;
          continue;
        } else if (currentCase.BillingType === "Insurance") {
          if (currentCase.InsuranceType === "Not Provided") {
            _accession.TrigueStatus = "Incomplete";
            currentCase.Status = "Incomplete";
            currentCase.UserName = this.currentUserName1;
            continue;
          } else if (currentCase.InsuranceType === "Medicare") {
            if (currentCase.HospitalStatus === "Not Provided") {
              _accession.TrigueStatus = "Incomplete";
              currentCase.Status = "Incomplete";
              currentCase.UserName = this.currentUserName1;
              continue;
            } else if (currentCase.HospitalStatus === "Not Provided") {
              _accession.TrigueStatus = "Incomplete";
              currentCase.Status = "Incomplete";
              currentCase.UserName = this.currentUserName1;
              continue;
            } else {
              _accession.TrigueStatus = "Complete";
              currentCase.Status = "Complete";
              currentCase.UserName = this.currentUserName1;
              continue;
            }
          } else {
            _accession.TrigueStatus = "Complete";
            currentCase.Status = "Complete";
            currentCase.UserName = this.currentUserName1;
            continue;
          }
          break;
        }
      }

      console.log(JSON.stringify(_accession));

      this.updateAccession(_accession).then(() => {
        this.setCurrentStep(1);
        this.$router.push({ path: "/worklist" });
      });

      // VueNotifications.success(success);
    },
    missingRemoved: function(missingInfo) {
      var missing = this.selectedAccession.MissingInformation.filter(
        e => e !== missingInfo
      );

      this.selectedAccession.MissingInformation = missing;
    },
    newSearch: function() {
      this.setCurrentStep(1);
      this.updateTextSearch("");
      this.setSelectedAccession({});
      this.showModal = false;
      this.$router.push({ path: "/new" });
    },
    selectAllTypes: function(status, type) {
      switch (status) {
        case "Billing":
          this.selectedAccession.Cases.forEach(function(item, index) {
            item.BillingType = type;
          });

          this.selectAllTypes("Insurance", "Select One");
          break;
        case "Insurance":
          this.selectedAccession.Cases.forEach(function(item, index) {
            if (item.BillingType === "Insurance") {
              item.InsuranceType = type;
            }
          });
          this.selectAllTypes("Hospital", "Select One");
          break;
        case "Hospital":
          this.selectedAccession.Cases.forEach(function(item, index) {
            if (
              item.BillingType === "Insurance" &&
              item.InsuranceType === "Medicare"
            ) {
              item.HospitalStatus = type;
            }
          });
          break;
        default:
          break;
      }
    },
    openCaseContentCentral: function(casenumber) {
      window.open(
        "http://csi-dis-one/ContentCentral/Search/Search.aspx?_fts=" +
          casenumber
      );
    },
    missingAdded: function(info) {
      var date = new Date();

      var finaldate =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();

      if (info.CaseNumber === "All") {
        var cases = this.selectedAccession.Cases;

        for (var i = 0; i < cases.length; i++) {
          var _case = cases[i];

          this.selectedAccession.MissingInformation.push({
            Name: info.Name,
            CaseNumber: _case.CaseNumber,
            Notes: info.Notes,
            CreatedDate: finaldate
          });
        }
      } else {
        this.selectedAccession.MissingInformation.push({
          Name: info.Name,
          CaseNumber: info.CaseNumber,
          Notes: info.Notes,
          CreatedDate: finaldate
        });
      }

      this.selectedAccession.MissingInformation;
    },
    stepChanged: function(step) {
      var selfStep = this.currentstep;
      var isback = false;

      if (selfStep > step) {
        isback = true;
      }
      if (selfStep === 1) {
        var accessions = this.accessions;
        var tinput = this.searchText.trim();

        //identify a case number or accession id
        var isCaseNumber = tinput.indexOf("-") > -1;

        if (isCaseNumber) {
          //get accession id by case number
          for (var i = 0; i < accessions.length; i++) {
            var a = accessions[i];

            var current = a.Cases.filter(function(item) {
              return item.CaseNumber === tinput;
            })[0];

            if (current) {
              tinput = a.AccessionID;
              break;
            }
          }
        } else {
          tinput = parseInt(tinput);
        }

        var accession = accessions.filter(function(item) {
          return item.AccessionID === tinput;
        })[0];

        if (accession) {
          this.setSelectedAccession(accession);
          this.setCurrentStep(step);
        } else {
          var error = {
            title:
              "There is no information for that number-either the case or accession was deleted or you have a typo.",
            message:
              "Try again, but if it happens again check the case number in the LIS",
            type: "error"
          };

          VueNotifications.error(error);
        }
      }

      // step 2
      if (selfStep === 2) {
        if (isback) {
          this.setCurrentStep(step);
        } else {
          if (this.hasSelectOneBilling) {
            var error = {
              title: "Billing type required",
              message: "Please enter a billing type.",
              type: "error"
            };

            VueNotifications.error(error);
          } else {
            //if has insurance
            if (this.hasInsurance) {
              //go next
              this.setCurrentStep(step);
            } else {
              this.setCurrentStep(this.StepCheckIn.id);
            }
          }
          return;
        }
      }

      // step 3
      if (selfStep === 3) {
        if (isback) {
          this.setCurrentStep(step);
        } else {
          if (this.hasSelectOneInsurance) {
            var error = {
              title: "Insurance type required",
              message: "Please enter a insurance type.",
              type: "error"
            };

            VueNotifications.error(error);
          } else {
            //if has insurance
            if (this.hasMedicare) {
              //go next
              this.setCurrentStep(step);
            } else {
              this.setCurrentStep(this.StepCheckIn.id);
            }
          }
          return;
        }
      }

      // step 4 ===== Hospital status ========
      if (selfStep === 4) {
        if (isback) {
          this.setCurrentStep(step);
        } else {
          if (this.hasSelectOneHospitalStatus) {
            var error = {
              title: "Hospital Status type required",
              message: "Please select a hospital status.",
              type: "error"
            };

            VueNotifications.error(error);
          } else {
            this.setCurrentStep(this.StepCheckIn.id);
          }
        }
      }

      //step 5
      if (selfStep === 5) {
        if (isback) {
          if (this.selectedAccession.CheckInMissingInformation === true) {
            //go next
            this.setCurrentStep(this.StepMissing.id);
          } else {
            //check insurance
            if (this.hasMedicare) {
              //go next
              this.setCurrentStep(this.StepHospitalStatus.id);
            } else {
              if (this.hasInsurance) {
                this.setCurrentStep(this.StepInsurance.id);
              } else {
                this.setCurrentStep(this.StepAccession.id);
              }
            }
          }
        } else {
          //if has insurance
          if (this.selectedAccession.CheckInMissingInformation === true) {
            //go next
            this.setCurrentStep(this.currentstep - 1);
          } else {
            //
            // for (var i = 0; i < this.selectedAccession.Cases.length; i++) {
            //   var _case = this.selectedAccession.Cases[i];

            //   if (_case.BillingType === "Select One") {
            //     _case.Status = "Pending";
            //     _case.Comments = "";
            //   } else if (_case.BillingType === "Not Provided") {
            //     _case.Status = "Incomplete";
            //     _case.Comments = "Billing Type not provided.";
            //   } else if (
            //     _case.BillingType === "Direct" ||
            //     _case.BillingType === "Split"
            //   ) {
            //     _case.Status = "Complete";
            //   } else if (_case.BillingType === "Insurance") {
            //     if (_case.InsuranceType === "Not Provided") {
            //       _case.Status = "Incomplete";
            //       _case.Comments = "Insurance not provided.";
            //     } else if (_case.InsuranceType === "Medicare") {
            //       if (_case.HospitalStatus === "Not Provided") {
            //         _case.Status = "Incomplete";
            //         _case.Comments = "Hospital Status not provided.";
            //       } else if (_case.HospitalStatus === "Not Provided") {
            //         _case.Status = "Incomplete";
            //       } else {
            //         _case.Status = "Complete";
            //       }
            //     } else {
            //       _case.Status = "Complete";
            //     }
            //   }
            // }
            this.setCurrentStep(step);
          }
        }
        return;
      }

      // step 6 ===== MISSING INFORMATION ========
      if (selfStep === 6) {
        if (isback) {
          //if has insurance
          if (this.hasMedicare) {
            //go next
            this.setCurrentStep(this.StepHospitalStatus.id);
          } else {
            if (this.hasInsurance) {
              this.setCurrentStep(this.StepInsurance.id);
            } else {
              this.setCurrentStep(this.StepAccession.id);
            }
          }
        } else {
          this.setCurrentStep(step);
        }
      }
      //step 7 -- Last Step
      if (selfStep === 7) {
        if (isback) {
          if (this.selectedAccession.CheckInMissingInformation === true) {
            //go next
            this.setCurrentStep(this.StepMissing.id);
          } else {
            this.setCurrentStep(this.StepCheckIn.id);
          }
        } else {
          if (this.selectedAccession.TrigueStatus === "Incomplete") {
            this.showConfirmationModal = true;
          } else {
            if (this.selectedAccession.TrigueStatus === "Complete") {
              this.$router.push({ path: "/billing/worklist" });
            } else {
              this.submitAccession();
            }
          }
        }
        return;
      }
    }
  }
};
</script>

<style>
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
  border-color: #4183d7;
  color: #4183d7;
}

.step-indicator li.active .caption {
  color: #4183d7;
}

.step-indicator li.complete:after {
  background-color: #87d37c;
}

.step-indicator li.complete .step {
  border-color: #87d37c;
  color: #87d37c;
}

.step-indicator li.complete .caption {
  color: #87d37c;
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
