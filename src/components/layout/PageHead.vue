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
        <!-- BEGIN THEME PANEL -->
        <div :class="{'btn-group btn-theme-panel':true,  'open': showFilter}" v-if="name === 'Dashboard'">
            <a href="javascript:;" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false" 
              @click="showFilter = !showFilter">
                <i class="fa fa-filter">Filter</i>
            </a>
            <div class="dropdown-menu pull-right dropdown-custom hold-on-click">
              <div class="row">
                  <div class="col-md-4 col-sm-4 col-xs-12">
                    <vue-rangedate-picker 
                      :initRange="test"
                      format="YYYY-MM-DD"
                        @selected="onDateSelected" righttoleft="true" i18n="EN">
                    </vue-rangedate-picker>
                  </div>
              </div>
            </div>
        </div>
        <!-- END THEME PANEL -->
        <div :class="{'btn-group btn-theme-panel':true,  'open': showFilterWorklist}" 
          v-if="name === 'Worklist'">
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
                                <input type="text" :model="worklist_filter.accessionID" placeholder="AccessionID" style="width:125px!important"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" />
                              </li>
                               <li class="theme-color theme-color-blue-hoki" data-theme="green-seagreen" @click="setWorklistFilter('Pending')">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">All</span>
                              </li>
                              <li class="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">Insurance</span>
                              </li>
                                <li class="theme-color theme-color-purple-plum" data-theme="purple-plum">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">Direct</span>
                              </li>
                                <li class="theme-color theme-color-green-haze" data-theme="purple-plum">
                                  <span class="theme-color-view"></span>
                                  <span class="theme-color-name">Split</span>
                              </li>
                                
                            </ul>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                              <ul class="theme-colors">
                                <li class="theme-color theme-color-yellow-orange">
                                   <input type="text" :model="worklist_filter.caseNumber" placeholder="Case Number" style="width:125px!important"
                                   class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" />
                                </li>
                                  <li class="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
                                      <span class="theme-color-view"></span>
                                      <span class="theme-color-name">Pending</span>
                                  </li>
                                   <li class="theme-color theme-color-green-haze" data-theme="yellow-orange">
                                      <span class="theme-color-view"></span>
                                      <span class="theme-color-name">Categorized</span>
                                  </li>
                                  <li class="theme-color theme-color-blue-steel" data-theme="red-sunglo">
                                      <span class="theme-color-view"></span>
                                      <span class="theme-color-name">Complete</span>
                                  </li>
                                  <li class="theme-color theme-color-red-intense" data-theme="red-intense">
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
                          <li> First Name:
                              <input type="text" :model="worklist_filter.firstName"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                          <li> Last Name:
                           <input type="text" :model="worklist_filter.lastName"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                          <li> Patient ID:
                            <input type="text" :model="worklist_filter.patientID"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                           <li> Client Name:
                               <input type="text" :model="worklist_filter.clientName"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                          <li> Client Number:
                               <input type="text" :model="worklist_filter.clientNumber"
                                class="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" 
                                data-original-title="Change theme style" data-container="body" data-placement="left" />
                          </li>
                           <li> Insurance Type:
                              <select :model="worklist_filter.insuranceType"
                              class="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                                  <option>Medicare </option>
                                  <option>Not Medicare</option>
                              </select>
                          </li>
                           <li> Hospital Status: 
                              <select :model="worklist_filter.hospitalStatus"
                              class="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                                  <option>Inpatient</option>
                                  <option>Outpatient</option>
                                  <option>Non-hospital</option>
                              </select>
                          </li>
                          <li><button data-v-5e837f70="" class="calendar-btn-apply" @click="filterWorklistData">Apply</button></li>
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
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    VueRangedatePicker
  },
  mounted() {},
  computed: {
    ...mapGetters(["worklist_filter"]),
    name() {
      return this.getItem().name;
    },
    details() {
      return this.getItem().description;
    }
  },
  data() {
    return {
      showFilter: false,
      showFilterWorklist: false,
      selectedDate: {
        start: "",
        end: ""
      }
    };
  },
  methods: {
    ...mapActions(["setFilterDates", "filterDashboardData", "filterWorklistData"]),
    onDateSelected: function(daterange) {
      //this.selectedDate = daterange;
      console.log(daterange, daterange.end, daterange.start);

      let payload = {
        end: daterange.end,
        start: daterange.start
      };

      this.setFilterDates(daterange);
      //this.filterDashboardData(payload);
    },
    getItem() {
      let matched = this.$route.matched.filter(item => item.name);
      let item = matched[matched.length - 1];
      return item;
    }
  }
};
</script>
<style scoped>
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

.theme-panel .theme-colors > li.theme-color.active,
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
