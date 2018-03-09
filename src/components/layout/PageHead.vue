<template>
  <div class="page-head">
    <div class="container">
      <!-- BEGIN PAGE TITLE -->
      <div class="page-title">
        <h1>{{ name }}
          <small>{{ details }}</small>
        </h1>
      </div>
      <!-- END PAGE TITLE -->
      <div class="page-toolbar" >
        <div v-on-click-outside="closeEvent" :class="{'btn-group btn-theme-panel':true,  'open': showFilterWorklist}" 
          v-if="name === 'Worklist' || name === 'Dashboard'">
          <a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false" 
            @click="showFilterWorklist = !showFilterWorklist">
              <i class="icon-settings"></i>
          </a>
          <div  class="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
              <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12" style="margin-left:0px">
                      <h3>CASES BY STATUS</h3>
                      
                      <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <ul class="theme-colors">
                              <li class="theme-color theme-color-gray" data-theme="yellow-crusta">
                                <input type="text" v-model="accessions_filter.accessionID" placeholder="AccessionID" style="width:125px!important"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" />
                              </li>
                               <li :class="{'theme-color theme-color-yellow-crusta':true,  'selected': isBillingAllSelected}" @click="loadDetail('Select One')">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">All</span>
                              </li>
                              <li :class="{'theme-color theme-color-yellow-crusta open':true,  'selected': isInsuranceSelected}" @click="loadDetail('Insurance')">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">Insurance</span>
                              </li>
                                <li :class="{'theme-color theme-color-purple-plum':true,  'selected': isDirectSelected}" @click="loadDetail('Direct')">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">Direct</span>
                              </li>
                                <li :class="{'theme-color theme-color-green-haze':true,  'selected': isSplitSelected}" @click="loadDetail('Split')">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">Split</span>
                              </li>
                                
                            </ul>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                              <ul class="theme-colors">
                                <li class="theme-color theme-color-yellow-orange">
                                   <input type="text" v-model="accessions_filter.caseNumber" placeholder="Case Number" style="width:125px!important"
                                   class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" />
                                </li>
                                <li :class="{'theme-color theme-color-yellow-crusta':true,  'selected': isAllSelected}" @click="loadDetail2('Select One')">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">All</span>
                                </li>
                                <li :class="{'theme-color theme-color-yellow-gold':true,  'selected': isPendingSelected}" @click="loadDetail2('Pending')">
                                    <span class="theme-color-view"></span>
                                    <span class="theme-color-name">Pending</span>
                                </li>
                                <li :class="{'theme-color theme-color-blue-steel':true,  'selected': isCompleteSelected}" @click="loadDetail2('Complete')">
                                    <span class="theme-color-view"></span>
                                    <span class="theme-color-name">Complete</span>
                                </li>
                                <li :class="{'theme-color theme-color-red-intense':true,  'selected': isIncompleteSelected}"  @click="loadDetail2('Incomplete')">
                                    <span class="theme-color-view"></span>
                                    <span class="theme-color-name">Incomplete</span>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 seperator" >
                      <h3>GENERAL</h3>
                      
                      <ul class="theme-settings">
                          <li> 
                            <div class="row">
                              <div class="col-md-2">
                                <span>Dates:</span>
                              </div>
                              <div class="col-md-9">
                              <vue-rangedate-picker 
                                  format="YYYY-MM-DD" :initRange="selectedDate"
                                    @selected="onDateSelected" righttoleft="true" i18n="EN">
                                </vue-rangedate-picker>
                              </div>
                            </div>
                          </li>
                          <li> Full Name:
                              <input type="text" v-model="accessions_filter.patientFullName"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                          <li> Patient ID:
                            <input type="text" v-model="accessions_filter.patientID"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                           <li> Client Name:
                               <input type="text" v-model="accessions_filter.clientName"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                          <li> Client Number:
                               <input type="text" v-model="accessions_filter.clientNumber"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                           <li> Insurance Type:
                              <select v-model="accessions_filter.insuranceType"
                              class="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                                  <option>Select One </option>
                                  <option>Medicare </option>
                                  <option>Not Medicare</option>
                              </select>
                          </li>
                           <li> Hospital Status: 
                              <select v-model="accessions_filter.hospitalStatus"
                              class="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                                  <option>Select One </option>
                                  <option>Inpatient</option>
                                  <option>Outpatient</option>
                                  <option>Non-hospital</option>
                              </select>
                          </li>
                          <li v-if="isCompleteSelected">
                            <div class="row">
                            <div class="col-md-6">Completed Date:</div> 
                            <div class="col-md-6">
                              <datepicker placeholder="Select Date" 
                                v-model="accessions_filter.completedDate"
                                @selected="completedDateSelected" 
                                :input-class="'theme-setting theme-setting-style form-control input-sm input-small '" 
                                :wrapper-class="'datepicker-calendar'"></datepicker></div> 
                            </div>
                          </li>
                          <li>
                            <div class="btn-group btn-group-justified">
                                <a href="javascript:;" class="btn btn-default" @click="getAllCases"> Reload Data </a>
                                <a href="javascript:;" class="btn btn-default" @click="clearFields"> Clear Fields </a>
                                <a href="javascript:;" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false" 
                                  @click="showFilterWorklist = !showFilterWorklist"> Close </a>
                            </div>
                          </li>
                          
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require("moment");

import VueRangedatePicker from "vue-rangedate-picker";
import Datepicker from "vuejs-datepicker";
import { mixin as onClickOutside } from "vue-on-click-outside";

import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    VueRangedatePicker,
    Datepicker
  },
  mixins: [onClickOutside],
  created() {
    console.log(
      moment(this.accessions_filter.startDate).toDate(),
      moment()
        .subtract(7, "days")
        .toDate()
    );
    this.selectedDate = {
      start:
        this.accessions_filter.startDate ||
        moment()
          .subtract(7, "days")
          .toDate(),
      end: this.accessions_filter.endDate || new Date()
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["accessions_filter"]),
    name() {
      return this.getItem().name;
    },
    details() {
      return this.getItem().description;
    }
  },
  data() {
    return {
      result1: null,
      result2: null,
      result3: null,
      startDatetime: moment(),
      endDatetime: null,
      showFilter: false,
      showFilterWorklist: false,
      selectedDate: {
        start: moment()
          .subtract(7, "days")
          .toDate(),
        end: new Date()
      },
      worklistFilterModel: {},
      isAllSelected: true,
      isPendingSelected: false,
      isCompleteSelected: false,
      isIncompleteSelected: false,
      isBillingAllSelected: true,
      isInsuranceSelected: false,
      isDirectSelected: false,
      isSplitSelected: false
    };
  },
  methods: {
    ...mapActions([
      "setFilterDates",
      "filterDashboardData",
      "setWorklistFilters",
      "getAllCases"
    ]),
    completedDateSelected() {},
    clearFields() {
      var filtersEmptyCopy = {
        caseNumber: "",
        accessionID: "",
        billingType: "",
        insuranceType: "",
        hospitalStatus: "",
        patientFullName: "",
        patientID: "",
        triageStatus: "",
        clientName: "",
        clientNumber: "",
        startDate: moment()
          .subtract(7, "days")
          .toDate(),
        endDate: new Date(),
        completedDate: ""
      };
      this.isBillingAllSelected = true;
      this.isInsuranceSelected = false;
      this.isDirectSelected = false;
      this.isSplitSelected = false;

      this.isAllSelected = true;
      this.isPendingSelected = false;
      this.isCompleteSelected = false;
      this.isIncompleteSelected = false;

      this.setWorklistFilters(filtersEmptyCopy);
      this.selectedDate = {
        start: moment()
          .subtract(7, "days")
          .toDate(),
        end: new Date()
      };
    },
    loadDetail(billingType) {
      let filters = this.accessions_filter;
      filters.billingType = billingType;
      this.setWorklistFilters(filters);

      switch (billingType) {
        case "Select One":
          this.isBillingAllSelected = true;
          this.isInsuranceSelected = false;
          this.isDirectSelected = false;
          this.isSplitSelected = false;
          break;
        case "Insurance":
          this.isBillingAllSelected = false;
          this.isInsuranceSelected = true;
          this.isDirectSelected = false;
          this.isSplitSelected = false;
          break;
        case "Direct":
          this.isBillingAllSelected = false;
          this.isInsuranceSelected = false;
          this.isDirectSelected = true;
          this.isSplitSelected = false;
          break;
        case "Split":
          this.isBillingAllSelected = false;
          this.isInsuranceSelected = false;
          this.isDirectSelected = false;
          this.isSplitSelected = true;
          break;

        default:
          break;
      }
    },
    loadDetail2(triageStatus) {
      let filters = this.accessions_filter;
      filters.triageStatus = triageStatus;

      console.log(filters);

      switch (triageStatus) {
        case "Select One":
          this.isAllSelected = true;
          this.isPendingSelected = false;
          this.isCompleteSelected = false;
          this.isIncompleteSelected = false;
          filters.completedDate = "";
          break;
        case "Pending":
          this.isAllSelected = false;
          this.isPendingSelected = true;
          this.isCompleteSelected = false;
          this.isIncompleteSelected = false;
          filters.completedDate = "";
          break;
        case "Complete":
          this.isAllSelected = false;
          this.isPendingSelected = false;
          this.isCompleteSelected = true;
          this.isIncompleteSelected = false;
          break;
        case "Incomplete":
          this.isAllSelected = false;
          this.isPendingSelected = false;
          this.isCompleteSelected = false;
          this.isIncompleteSelected = true;
          filters.completedDate = "";
          break;
        default:
          break;
      }
      console.log(filters);

      this.setWorklistFilters(filters);
    },
    onDateSelected(daterange) {
      //this.selectedDate = daterange;
      console.log(daterange, daterange.end, daterange.start);

      let payload = {
        end: daterange.end,
        start: daterange.start
      };

      this.selectedDate = payload;

      this.setFilterDates(daterange);
      //this.filterDashboardData(payload);
    },
    getItem() {
      let matched = this.$route.matched.filter(item => item.name);
      let item = matched[matched.length - 1];
      return item;
    },
    filterData() {
      this.setWorklistFilters(this.worklistFilterModel);
    },
    closeEvent() {
      this.showFilterWorklist = false;
    }
  }
};
</script>
<style scoped>
.datepicker-calendar {
  /* position: absolute; */
  float: right;
  z-index: 100;
  width: 300px;
}

.btn-theme-panel {
  margin-top: 25px;
}

.btn-theme-panel .btn {
  opacity: 0.6;
  filter: alpha(opacity=60);
  padding: 0 6px;
}

.btn-theme-panel .btn > i {
  font-size: 24px;
  color: #acbac6;
}

.btn-theme-panel .btn:hover,
.btn-theme-panel.open .btn {
  opacity: 1;
  filter: alpha(opacity=100);
}

.theme-panel {
  z-index: 1000;
  min-width: 675px;
  padding: 20px 10px;
  font-family: "Open Sans", sans-serif;
}

.theme-panel h3 {
  margin: 8px 0;
  font-size: 15px;
  padding-left: 12px;
}

.theme-panel .seperator {
  border-left: 1px solid #eff2f4;
}

.theme-panel .theme-colors {
  list-style: none;
  padding: 0;
  margin: 0;
}

.theme-panel .theme-colors > li.theme-color {
  padding: 8px 12px;
}

.theme-panel .theme-colors > li.theme-color.selected,
.theme-panel .theme-colors > li.theme-color:hover {
  background: #f5f7f8;
}

.theme-panel .theme-colors > li.theme-color > .theme-color-view {
  float: left;
  margin-top: 0;
  margin-right: 8px;
  display: inline-block;
  border-radius: 10px !important;
  height: 20px;
  width: 20px;
}

.theme-panel .theme-colors > li.theme-color > .theme-color-name {
  display: inline-block;
  color: #777;
  font-size: 14px;
  font-weight: 300;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-default
  .theme-color-view {
  background: #32c5d2;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-red-sunglo
  .theme-color-view {
  background: #e26a6a;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-red-intense
  .theme-color-view {
  background: #e35b5a;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-blue-hoki
  .theme-color-view {
  background: #67809f;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-blue-steel
  .theme-color-view {
  background: #4b77be;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-green-haze
  .theme-color-view {
  background: #44b6ae;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-purple-plum
  .theme-color-view {
  background: #8775a7;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-purple-studio
  .theme-color-view {
  background: #8e44ad;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-yellow-orange
  .theme-color-view {
  background: #f2784b;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-yellow-crusta
  .theme-color-view {
  background: #f3c200;
}

.theme-panel
  .theme-colors
  > li.theme-color.theme-color-yellow-gold
  .theme-color-view {
  background: #e87e04;
}

.theme-panel .theme-settings {
  list-style: none;
  padding: 0;
  margin: 0;
}

.theme-panel .theme-settings > li {
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 300;
  color: #777;
}

.theme-panel .theme-settings > li .form-control {
  color: #777;
  margin-top: -3px;
  float: right;
}

@media (max-width: 767px) {
  .theme-panel {
    left: 20px;
    right: 20px;
    min-width: 285px;
  }

  .theme-panel .seperator {
    border: 0;
  }

  .theme-panel .theme-settings .form-control {
    width: 105px !important;
  }
}
</style>
