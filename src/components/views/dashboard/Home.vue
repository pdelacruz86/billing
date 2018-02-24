<template>
  <div class="row">
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Pending')">
                    <div class="display">
                            <div class="number">
                            <h3 class="font-yellow-gold">
                                <span data-counter="counterup" data-value="7800">{{viewModel.PendingTotal}}</span>
                            </h3>
                            <small>PENDING</small>
                        </div>
                    
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span v-bind:style="{ width: (100 - pendingCasesPercent) + '%' }"  
                              class="progress-bar progress-bar-success yellow-gold">
                                <span class="sr-only">{{(100 - pendingCasesPercent)}}% progress</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> progress </div>
                            <div class="status-number"> {{100 - pendingCasesPercent}}% </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Categorized')">
                
                    <div class="display">
                        <div class="number">
                            <h3 class="font-green-sharp">
                                <span data-counter="counterup" data-value="1349">{{viewModel.CategorizedTotal}}</span>
                            </h3>
                            <small>CATEGORIZED</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span v-bind:style="{ width:  pendingCasesPercent + '%' }" class="progress-bar progress-bar-success green-sharp">
                                <span class="sr-only">{{pendingCasesPercent}}% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> progress </div>
                            <div class="status-number"> {{pendingCasesPercent}}% </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
         <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Insurance')">
                
                    <div class="display">
                        <div class="number">
                            <h3 class="font-yellow-lemon">
                                <span data-counter="counterup" data-value="276">{{viewModel.InsuranceTotal}}</span>
                            </h3>
                            <small>INSURANCE</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span v-bind:style="{ width:  insuranceCasesPercent + '%' }" 
                              class="progress-bar progress-bar-success yellow-lemon">
                                <span class="sr-only">{{insuranceCasesPercent}}% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> percent </div>
                            <div class="status-number"> {{insuranceCasesPercent}}% </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
         <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('DirectSplit')">
                    
                    <div class="display">
                        <div class="number">
                            <h3 class="font-purple-soft">
                                <span data-counter="counterup" data-value="276">{{viewModel.DirectSplit}}</span>
                            </h3>
                            <small>Direct/Split</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span :style="{width: directSplitCasesPercent + '%'}" class="progress-bar progress-bar-success purple-soft">
                                <span class="sr-only"> {{directSplitCasesPercent}}% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> percent </div>
                            <div class="status-number"> {{directSplitCasesPercent}}% </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
                <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Completed')">
                
                    <div class="display">
                        <div class="number">
                            <h3 class="font-blue-sharp">
                                <span data-counter="counterup" data-value="567">{{viewModel.CompletedTotal}}</span>
                            </h3>
                            <small>COMPLETED</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span :style="{width: completedCasesPercent + '%'}" class="progress-bar progress-bar-success blue-sharp">
                                <span class="sr-only">{{completedCasesPercent}}% grow</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> percent </div>
                            <div class="status-number"> {{completedCasesPercent}}% </div>
                        </div>
                    </div>
                </a>   
            </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Incompleted')">
                    
                    <div class="display">
                        <div class="number">
                            <h3 class="font-red-haze">
                                <span data-counter="counterup" data-value="276">{{viewModel.IncompleteTotal}}</span>
                            </h3>
                            <small>INCOMPLETED</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span :style="{width: incompletedCasesPercent + '%'}" class="progress-bar progress-bar-success red-haze">
                                <span class="sr-only">{{incompletedCasesPercent}}% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> percent </div>
                            <div class="status-number"> {{incompletedCasesPercent}}%  </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-xs-12 col-sm-12">
            <div :class="{'portlet-fullscreen': barChartfullscreen, 'portlet light': true}">
              <div class="portlet-title">
                  <div class="caption">
                        <span class="caption-subject bold uppercase font-dark">{{chartType}} Cases</span>
                    </div>
                 <div class="actions">
                    <a @click="barChartfullscreen = !barChartfullscreen" class="btn btn-circle btn-icon-only btn-default fullscreen" href="#" data-original-title="" title=""> </a>
                </div>
              </div>
              <div class="portlet-body">
                  <div id="mainchartdiv" :style="{width: '100%', height: barChartfullscreen ? '600px' : '400px' }" style="width: 100%; height: 300px;"></div>
              </div>
            </div>
        </div>
        <div class="col-lg-6 col-xs-12 col-sm-12">
            <div :class="{'portlet-fullscreen': summaryChartfullscreen, 'portlet light': true}">
            <div class="portlet-title">
                <div class="caption caption-md">
                    <i class="icon-bar-chart font-dark hide"></i>
                    <span class="caption-subject bold uppercase font-dark">Summary</span>
                    <span class="caption-helper "> stats...</span>
                </div>
                  <div class="actions">
                    <a @click="summaryChartfullscreen = !summaryChartfullscreen" class="btn btn-circle btn-icon-only btn-default fullscreen" href="#" data-original-title="" title=""> </a>
                </div>
            </div>
            <div class="portlet-body">
                <div id="chartdiv" style="width: 100%; height: 400px;"></div>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
          <div :class="{'portlet-fullscreen': mapChartfullscreen, 'portlet light': true}">
              <div class="portlet-title">
                  <div class="caption">
                      <span class="caption-subject bold uppercase font-dark">Country Stats</span>
                      <span class="caption-helper">cases by states...</span>
                  </div>
                  <div class="actions">
                      <a @click="mapChartfullscreen = !mapChartfullscreen" class="btn btn-circle btn-icon-only btn-default fullscreen" href="#"> </a>
                  </div>
              </div>
              <div class="portlet-body">
                  <div id="dashboard_amchart_2"  style="width: 100%; height: 500px;"></div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AmCharts from "amcharts3";
import AmSerial from "amcharts3/amcharts/serial";
import AmPie from "amcharts3/amcharts/pie";
import AmMap from "ammap3/ammap/ammap.js";
import usaLow from "ammap3/ammap/maps/js/usaLow.js";
import export_min from "ammap3/ammap/plugins/export/export.min.js";
import themelight from "ammap3/ammap/themes/light.js";
export default {
  mounted() {
    // this.accessions = this.accessions;
    this.removeLoading();
    this.loadDetail("Pending");
    this.loadSummary();
    this.loadMaps("Pending");
    document.getElementsByClassName("input-date").value =
      "01 Feb 2018 - 28 Feb 2018";
  },
  computed: {
    ...mapGetters([
      "dashboardData",
      "accessions",
      "pendingCasesPercent",
      "insuranceCasesPercent",
      "directSplitCasesPercent",
      "completedCasesPercent",
      "incompletedCasesPercent"
    ]),
    viewModel() {
      //accession total
      let accessionTotal = 0;

      this.dashboardData.forEach(element => {
        accessionTotal = accessionTotal + element.Cases.length;
      });

      //pending
      let accessionPending = 0;
      let accessionComplete = 0;
      let accessionIncomplete = 0;

      this.dashboardData.forEach(element => {
        element.Cases.filter(function(item) {
          if (item.Status === "Pending") accessionPending++;
          if (item.Status === "Complete") accessionComplete++;
          if (item.Status === "Incomplete") accessionIncomplete++;
        });
      });

      //insurance
      let InsuranceCount = 0;

      this.dashboardData.forEach(element => {
        element.Cases.filter(function(item) {
          if (
            item.BillingType === "Insurance" &&
            (item.InsuranceType !== "Not Provided" &&
              item.HospitalStatus !== "Not Provided")
          ) {
            InsuranceCount++;
          }
        });
      });

      //direct split
      let DirectSplitCount = 0;

      this.dashboardData.forEach(element => {
        element.Cases.filter(function(item) {
          if (item.BillingType === "Direct" || item.BillingType === "Split")
            DirectSplitCount++;
        });
      });

      //categorized total
      let accessionCategorized = accessionTotal - accessionPending;
      var data = {
        AccessionTotal: accessionTotal,
        CategorizedTotal: accessionCategorized,
        CompletedTotal: accessionComplete,
        IncompleteTotal: accessionIncomplete,
        InsuranceTotal: InsuranceCount,
        DirectSplit: DirectSplitCount,
        PendingTotal: accessionPending
      };

      return data;
    }
  },
  watch: {
    dashboardData: function(val) {
      debugger;
      this.loadDetail("Pending");
      this.loadSummary();
      loadMaps("Pending");
    }
  },
  data() {
    return {
      //   dashboardData: [],
      chartType: "",
      barChartfullscreen: false,
      summaryChartfullscreen: false,
      mapChartfullscreen: false,
      options: {
        segmentShowStroke: false
      }
    };
  },
  methods: {
    ...mapActions(["removeLoading"]),
    loadSummary() {
      var types = [];
      let accessionTotal = 0;

      this.dashboardData.forEach(element => {
        accessionTotal = accessionTotal + element.Cases.length;
      });

      //pending
      let accessionPending = 0;
      let accessionComplete = 0;
      let accessionIncomplete = 0;

      this.dashboardData.forEach(element => {
        element.Cases.filter(function(item) {
          if (item.Status === "Pending") accessionPending++;
          if (item.Status === "Complete") accessionComplete++;
          if (item.Status === "Incomplete") accessionIncomplete++;
        });
      });

      window.AmCharts.makeChart("chartdiv", {
        type: "serial",
        categoryField: "type",
        chartCursor: {},
        theme: "light",
        graphs: [
          {
            type: "column",
            title: "",
            valueField: "sold",
            fillAlphas: 0.8
          }
        ],

        dataProvider: [
          { type: "Pending", sold: accessionPending, color: "#4422ae" },
          { type: "Complete", sold: accessionComplete, color: "#44b3ae" },
          { type: "Incomplete", sold: accessionIncomplete, color: "#44b6ae" }
        ]
      });
    },
    loadDetail(typename) {
      this.loadSummary();
      var chart;
      var legend;
      var selected;

      this.chartType = typename;

      var types = getTypelist(typename, this.dashboardData);

      window.AmCharts.makeChart("mainchartdiv", {
        type: "pie",
        theme: "light",

        dataProvider: generateChartData(types, selected),
        labelText: "[[title]]: [[value]]",
        balloonText: "[[title]]: [[value]]",
        titleField: "type",
        valueField: "percent",
        outlineColor: "#FFFFFF",
        outlineAlpha: 0.8,
        outlineThickness: 2,
        colorField: "color",
        pulledField: "pulled",
        titles: [
          {
            text: "Click a slice to see the details"
          }
        ],
        listeners: [
          {
            event: "clickSlice",
            method: function(event) {
              var chart = event.chart;
              if (event.dataItem.dataContext.id != undefined) {
                selected = event.dataItem.dataContext.id;
              } else {
                selected = undefined;
              }
              chart.dataProvider = generateChartData(types, selected);
              chart.validateData();
            }
          }
        ],
        export: {
          enabled: true
        }
      });
    },
    loadMaps(typeName) {
      var map = window.AmCharts.makeChart("dashboard_amchart_2", {
        type: "map",
        theme: "light",
        colorSteps: 10,

        dataProvider: {
          map: "usaLow",
          areas: [
            {
              id: "US-AL",
              value: 4447100
            },
            {
              id: "US-AK",
              value: 626932
            },
            {
              id: "US-AZ",
              value: 5130632
            },
            {
              id: "US-AR",
              value: 2673400
            },
            {
              id: "US-CA",
              value: 33871648
            },
            {
              id: "US-CO",
              value: 4301261
            },
            {
              id: "US-CT",
              value: 3405565
            },
            {
              id: "US-DE",
              value: 783600
            },
            {
              id: "US-FL",
              value: 15982378
            },
            {
              id: "US-GA",
              value: 8186453
            },
            {
              id: "US-HI",
              value: 1211537
            },
            {
              id: "US-ID",
              value: 1293953
            },
            {
              id: "US-IL",
              value: 12419293
            },
            {
              id: "US-IN",
              value: 6080485
            },
            {
              id: "US-IA",
              value: 2926324
            },
            {
              id: "US-KS",
              value: 2688418
            },
            {
              id: "US-KY",
              value: 4041769
            },
            {
              id: "US-LA",
              value: 4468976
            },
            {
              id: "US-ME",
              value: 1274923
            },
            {
              id: "US-MD",
              value: 5296486
            },
            {
              id: "US-MA",
              value: 6349097
            },
            {
              id: "US-MI",
              value: 9938444
            },
            {
              id: "US-MN",
              value: 4919479
            },
            {
              id: "US-MS",
              value: 2844658
            },
            {
              id: "US-MO",
              value: 5595211
            },
            {
              id: "US-MT",
              value: 902195
            },
            {
              id: "US-NE",
              value: 1711263
            },
            {
              id: "US-NV",
              value: 1998257
            },
            {
              id: "US-NH",
              value: 1235786
            },
            {
              id: "US-NJ",
              value: 8414350
            },
            {
              id: "US-NM",
              value: 1819046
            },
            {
              id: "US-NY",
              value: 18976457
            },
            {
              id: "US-NC",
              value: 8049313
            },
            {
              id: "US-ND",
              value: 642200
            },
            {
              id: "US-OH",
              value: 11353140
            },
            {
              id: "US-OK",
              value: 3450654
            },
            {
              id: "US-OR",
              value: 3421399
            },
            {
              id: "US-PA",
              value: 12281054
            },
            {
              id: "US-RI",
              value: 1048319
            },
            {
              id: "US-SC",
              value: 4012012
            },
            {
              id: "US-SD",
              value: 754844
            },
            {
              id: "US-TN",
              value: 5689283
            },
            {
              id: "US-TX",
              value: 20851820
            },
            {
              id: "US-UT",
              value: 2233169
            },
            {
              id: "US-VT",
              value: 608827
            },
            {
              id: "US-VA",
              value: 7078515
            },
            {
              id: "US-WA",
              value: 5894121
            },
            {
              id: "US-WV",
              value: 1808344
            },
            {
              id: "US-WI",
              value: 5363675
            },
            {
              id: "US-WY",
              value: 493782
            }
          ]
        },

        areasSettings: {
          autoZoom: true
        },

        valueLegend: {
          right: 10,
          minValue: "little",
          maxValue: "a lot!"
        },

        export: {
          enabled: true
        }
      });
    }
  }
};

function generateChartData(types, selected) {
  var chartData = [];
  for (var i = 0; i < types.length; i++) {
    if (i == selected) {
      for (var x = 0; x < types[i].subs.length; x++) {
        chartData.push({
          type: types[i].subs[x].type,
          percent: types[i].subs[x].percent,
          color: types[i].color,
          pulled: true
        });
      }
    } else {
      chartData.push({
        type: types[i].type,
        percent: types[i].percent,
        color: types[i].color,
        id: i
      });
    }
  }
  console.log(chartData);
  return chartData;
}

function getTypelist(typename, accessionList) {
  var types = [];
  let accessionTotal = 0;

  accessionList.forEach(element => {
    accessionTotal = accessionTotal + element.Cases.length;
  });

  //pending
  let accessionPending = 0;
  let accessionComplete = 0;
  let accessionIncomplete = 0;

  accessionList.forEach(element => {
    element.Cases.filter(function(item) {
      if (item.Status === "Pending") accessionPending++;
      if (item.Status === "Complete") accessionComplete++;
      if (item.Status === "Incomplete") accessionIncomplete++;
    });
  });

  //complete cases details
  let casesInsurance = 0;
  let casesDirect = 0;
  let casesSplit = 0;

  accessionList.forEach(element => {
    element.Cases.filter(function(item) {
      if (item.Status === "Complete") {
        if (item.BillingType === "Insurance") casesInsurance++;
        if (item.BillingType === "Direct") casesDirect++;
        if (item.BillingType === "Split") casesSplit++;
      }
    });
  });

  //incomplete cases details
  let incompleteBillingType = 0;
  let incompleteInsuranceType = 0;
  let incompleteHospitalStatus = 0;

  accessionList.forEach(element => {
    element.Cases.filter(function(item) {
      if (item.Status === "Incomplete") {
        if (item.BillingType === "Not Provided") incompleteBillingType++;
        if (item.InsuranceType === "Not Provided") incompleteInsuranceType++;
        if (item.HospitalStatus === "Not Provided") incompleteHospitalStatus++;
      }
    });
  });

  //direct / split
  let directCount = 0;
  let splitCount = 0;

  accessionList.forEach(element => {
    element.Cases.filter(function(item) {
      if (item.BillingType === "Direct") directCount++;
      if (item.BillingType === "Split") splitCount++;
    });
  });

  //insurance
  let InsuranceMedicare = 0;
  let InsuranceNotMedicare = 0;

  accessionList.forEach(element => {
    element.Cases.filter(function(item) {
      if (item.BillingType === "Insurance") {
        if (item.InsuranceType === "Medicare") InsuranceMedicare++;
        if (item.InsuranceType === "Not Medicare") InsuranceNotMedicare++;
      }
    });
  });

  //hospital status
  let HospitalStatusInpatient = 0;
  let HospitalStatusOutpatient = 0;
  let HospitalStatusNonHospital = 0;

  accessionList.forEach(element => {
    element.Cases.filter(function(item) {
      if (item.InsuranceType === "Medicare") {
        if (item.HospitalStatus === "Inpatient") HospitalStatusInpatient++;
        if (item.HospitalStatus === "Outpatient") HospitalStatusOutpatient++;
        if (item.HospitalStatus === "Non-hospital") HospitalStatusNonHospital++;
      }
    });
  });

  let accessionCategorized = accessionTotal - accessionPending;

  switch (typename) {
    case "Pending":
      types.push({
        type: "Pending",
        percent: accessionPending,
        color: "#E87E04"
      });
      return types;
    case "Categorized":
      types.push({
        type: "Completed",
        percent: accessionComplete,
        color: "#578EBE",
        subs: [
          {
            type: "Insurance",
            percent: casesInsurance
          },
          {
            type: "Direct",
            percent: casesDirect
          },
          {
            type: "Split",
            percent: casesSplit
          }
        ]
      });
      types.push({
        type: "Incompleted",
        percent: accessionIncomplete,
        color: "#D91E18",
        subs: [
          {
            type: "Billing type",
            percent: incompleteBillingType
          },
          {
            type: "Insurance Type",
            percent: incompleteInsuranceType
          },
          {
            type: "Hospital Status",
            percent: incompleteHospitalStatus
          }
        ]
      });
      return types;
    case "Completed":
      types.push({
        type: "Insurance",
        percent: casesInsurance,
        color: "#F7CA18",
        subs: [
          {
            type: "Medicare",
            percent: InsuranceMedicare
          },
          {
            type: "Not Medicare",
            percent: InsuranceNotMedicare
          }
        ]
      });
      types.push({
        type: "Direct",
        percent: casesDirect,
        color: "#8877a9"
      });
      types.push({
        type: "Split",
        percent: casesSplit,
        color: "#44b6ae"
      });
      return types;
    case "Incompleted":
      types.push({
        type: "Billing Type",
        percent: incompleteBillingType,
        color: "#f36a5a"
      });
      types.push({
        type: "Insurance Type",
        percent: incompleteInsuranceType,
        color: "#f36a5a"
      });
      types.push({
        type: "Hospital Status",
        percent: incompleteHospitalStatus,
        color: "#f36a5a"
      });
      return types;
    case "Insurance":
      types.push({
        type: "Medicare",
        percent: InsuranceMedicare,
        color: "#F7CA18",
        subs: [
          {
            type: "Inpatient",
            percent: HospitalStatusInpatient,
            color: "#b0de09"
          },
          {
            type: "Outpatient",
            percent: HospitalStatusOutpatient,
            color: "#b0de09"
          },
          {
            type: "Non-hospital",
            percent: HospitalStatusNonHospital,
            color: "#b0de09"
          }
        ]
      });
      types.push({
        type: "Not Medicare",
        percent: InsuranceNotMedicare,
        color: "#44b6ae"
      });
      return types;
    case "DirectSplit":
      types.push({
        type: "Direct",
        percent: directCount,
        color: "#8877a9"
      });
      types.push({
        type: "Split",
        percent: splitCount,
        color: "#44b6ae"
      });
      return types;
    default:
      return "";
  }
}
</script>

<style>
.amcharts-export-canvas {
  position: absolute;
  display: none;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
}

.amcharts-export-canvas.active {
  display: block;
}

.amcharts-export-menu {
  position: absolute;
  z-index: 2;
  opacity: 0.5;
  color: #000;
}

.amcharts-main-div:hover .amcharts-export-menu,
.amcharts-stock-div:hover .amcharts-export-menu,
.amcharts-export-menu.active {
  opacity: 1;
}

.amcharts-export-menu-top-left > ul > li > ul:after {
  content: "";
  position: absolute;
  top: 13px;
  right: 100%;
  z-index: 1000;
  border-top: 7px solid transparent;
  border-left: 7px solid transparent;
  border-right: 7px solid #fff;
  border-bottom: 7px solid transparent;
}

.amcharts-export-menu-top-left > ul > li > ul > li:first-child > a:after {
  content: "";
  position: absolute;
  top: 12px;
  right: 100%;
  z-index: 1001;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid #e2e2e2;
  border-bottom: 8px solid transparent;
}

.amcharts-export-menu-top-right > ul > li > ul:after {
  content: "";
  position: absolute;
  top: 13px;
  left: 100%;
  z-index: 1000;
  border-top: 7px solid transparent;
  border-left: 7px solid #fff;
  border-right: 7px solid transparent;
  border-bottom: 7px solid transparent;
}

.amcharts-export-menu-top-right > ul > li > ul > li:first-child > a:after {
  content: "";
  position: absolute;
  top: 12px;
  left: 100%;
  z-index: 1001;
  border-top: 8px solid transparent;
  border-left: 8px solid #e2e2e2;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.amcharts-export-menu-bottom-left > ul > li > ul:after {
  content: "";
  position: absolute;
  bottom: 13px;
  right: 100%;
  z-index: 1000;
  border-top: 7px solid transparent;
  border-left: 7px solid transparent;
  border-right: 7px solid #fff;
  border-bottom: 7px solid transparent;
}

.amcharts-export-menu-bottom-left > ul > li > ul > li:last-child > a:after {
  content: "";
  position: absolute;
  bottom: 12px;
  right: 100%;
  z-index: 1001;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid #e2e2e2;
  border-bottom: 8px solid transparent;
}

.amcharts-export-menu-bottom-right > ul > li > ul:after {
  content: "";
  position: absolute;
  bottom: 13px;
  left: 100%;
  z-index: 1000;
  border-top: 7px solid transparent;
  border-left: 7px solid #fff;
  border-right: 7px solid transparent;
  border-bottom: 7px solid transparent;
}

.amcharts-export-menu-bottom-right > ul > li > ul > li:last-child > a:after {
  content: "";
  position: absolute;
  bottom: 12px;
  left: 100%;
  z-index: 1001;
  border-top: 8px solid transparent;
  border-left: 8px solid #e2e2e2;
  border-right: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.amcharts-export-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.amcharts-export-menu li {
  position: relative;
  display: block;
  z-index: 1;
}

.amcharts-export-menu li > ul {
  position: absolute;
  display: none;
  border: 1px solid #e2e2e2;
  margin-top: -1px;
  background: #fff;
}

.amcharts-export-menu li > a {
  position: relative;
  display: block;
  color: #000;
  text-decoration: none;
  padding: 12px 12px;
  z-index: 2;
  white-space: nowrap;
  border-bottom: 1px solid #f2f2f2;
}

.amcharts-export-menu li:last-child > a {
  border-bottom: none;
}

.amcharts-export-menu li > a > img {
  border: none;
}

.amcharts-export-menu-top-left {
  top: 0;
  left: 0;
}

.amcharts-export-menu-bottom-left {
  bottom: 0;
  left: 0;
}

.amcharts-export-menu-top-right {
  top: 0;
  right: 0;
}

.amcharts-export-menu-bottom-right {
  bottom: 0;
  right: 0;
}

.amcharts-export-menu li:hover > ul,
.amcharts-export-menu li.active > ul {
  display: block;
}

.amcharts-export-menu li:hover > a,
.amcharts-export-menu li.active > a {
  color: #fff;
  background-color: #636363;
}

.amcharts-export-menu-top-left li:hover > ul,
.amcharts-export-menu-top-left li.active > ul {
  left: 100%;
  top: 0;
}

.amcharts-export-menu-bottom-left li:hover > ul,
.amcharts-export-menu-bottom-left li.active > ul {
  left: 100%;
  bottom: 0;
}

.amcharts-export-menu-top-right li:hover > ul,
.amcharts-export-menu-top-right li.active > ul {
  top: 0;
  right: 100%;
}

.amcharts-export-menu-bottom-right li:hover > ul,
.amcharts-export-menu-bottom-right li.active > ul {
  bottom: 0;
  right: 100%;
}

.amcharts-export-menu .export-main > a,
.amcharts-export-menu .export-drawing > a,
.amcharts-export-menu .export-delayed-capturing > a {
  display: block;
  overflow: hidden;
  text-indent: -13333337px;
  width: 36px;
  height: 36px;
  padding: 0;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2211px%22%20height%3D%2214px%22%3E%3Cpath%20d%3D%22M3%2C0%20L8%2C0%20L8%2C5%20L11%2C5%20L5.5%2C10%20L0%2C5%20L3%2C5%20L03%2C0%22%20fill%3D%22%23888%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20fill%3D%22%23888%22%20width%3D%2211%22%20height%3D%222%22%2F%3E%3C%2Fsvg%3E");
  background-color: #fff;
  background-position: center;
  -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 18px;
  margin: 8px 8px 0 10px;
}

.amcharts-export-menu .export-drawing > a {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20width%3D%2216px%22%20height%3D%2217px%22%3E%3Crect%20x%3D%220%22%20y%3D%2216%22%20fill%3D%22%23888%22%20width%3D%2214%22%20height%3D%221%22%2F%3E%3Cpath%20transform%3D%22translate(-12%2C-10)%22%20fill%3D%22%23888%22%20d%3D%22M17.098%2C20.305c-0.142%2C0.146%2C0.101%2C0.04%2C0.137%2C0.004c0.027-0.028%2C0.204-0.09%2C0.484-0.09c0.338%2C0%2C0.626%2C0.092%2C0.787%2C0.255%20c0.473%2C0.472%2C0.424%2C0.932%2C0.393%2C1.078l-2.521%2C1.055l-1.577-1.577l1.054-2.52c0.039-0.009%2C0.105-0.018%2C0.188-0.018%20c0.219%2C0%2C0.555%2C0.069%2C0.893%2C0.407c0.378%2C0.378%2C0.246%2C1.188%2C0.166%2C1.271C17.062%2C20.207%2C17.062%2C20.269%2C17.098%2C20.305z%20M26.984%2C14.472c-0.008-0.674-0.61-1.257-1.31-1.933c-0.134-0.129-0.679-0.673-0.809-0.808c-0.679-0.702-1.266-1.31-1.943-1.31%20c-0.37%2C0-0.734%2C0.207-1.114%2C0.587l-6.852%2C6.847c-0.012%2C0.016-2.877%2C7.354-2.877%2C7.354c-0.012%2C0.032%2C0%2C0.063%2C0.022%2C0.091%20c0.021%2C0.021%2C0.044%2C0.029%2C0.067%2C0.029c0.01%2C0%2C0.018-0.003%2C0.028-0.007c0%2C0%2C7.357-2.864%2C7.369-2.877l6.854-6.847%20C26.803%2C15.216%2C26.988%2C14.848%2C26.984%2C14.472z%22%2F%3E%3C%2Fsvg%3E");
}

.amcharts-export-menu .export-main:hover,
.amcharts-export-menu .export-drawing:hover,
.amcharts-export-menu .export-main.active,
.amcharts-export-menu .export-drawing.active {
  padding-bottom: 100px;
}

.amcharts-export-menu.amcharts-export-menu-bottom-left .export-main:hover,
.amcharts-export-menu.amcharts-export-menu-bottom-left .export-drawing:hover,
.amcharts-export-menu.amcharts-export-menu-bottom-right .export-main:hover,
.amcharts-export-menu.amcharts-export-menu-bottom-right .export-drawing:hover,
.amcharts-export-menu.amcharts-export-menu-bottom-left .export-main.active,
.amcharts-export-menu.amcharts-export-menu-bottom-left .export-drawing.active,
.amcharts-export-menu.amcharts-export-menu-bottom-right .export-main.active,
.amcharts-export-menu.amcharts-export-menu-bottom-right .export-drawing.active {
  padding-bottom: 0;
  padding-top: 100px;
}

.amcharts-export-menu .export-main:hover > a,
.amcharts-export-menu .export-main.active > a {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2211px%22%20height%3D%2214px%22%3E%3Cpath%20d%3D%22M3%2C0%20L8%2C0%20L8%2C5%20L11%2C5%20L5.5%2C10%20L0%2C5%20L3%2C5%20L03%2C0%22%20fill%3D%22%23fff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20fill%3D%22%23fff%22%20width%3D%2211%22%20height%3D%222%22%2F%3E%3C%2Fsvg%3E");
}

.amcharts-export-menu .export-drawing:hover > a,
.amcharts-export-menu .export-drawing.active > a {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20width%3D%2216px%22%20height%3D%2217px%22%3E%3Crect%20x%3D%220%22%20y%3D%2216%22%20fill%3D%22%23FFF%22%20width%3D%2214%22%20height%3D%221%22%2F%3E%3Cpath%20transform%3D%22translate(-12%2C-10)%22%20fill%3D%22%23FFF%22%20d%3D%22M17.098%2C20.305c-0.142%2C0.146%2C0.101%2C0.04%2C0.137%2C0.004c0.027-0.028%2C0.204-0.09%2C0.484-0.09c0.338%2C0%2C0.626%2C0.092%2C0.787%2C0.255%20c0.473%2C0.472%2C0.424%2C0.932%2C0.393%2C1.078l-2.521%2C1.055l-1.577-1.577l1.054-2.52c0.039-0.009%2C0.105-0.018%2C0.188-0.018%20c0.219%2C0%2C0.555%2C0.069%2C0.893%2C0.407c0.378%2C0.378%2C0.246%2C1.188%2C0.166%2C1.271C17.062%2C20.207%2C17.062%2C20.269%2C17.098%2C20.305z%20M26.984%2C14.472c-0.008-0.674-0.61-1.257-1.31-1.933c-0.134-0.129-0.679-0.673-0.809-0.808c-0.679-0.702-1.266-1.31-1.943-1.31%20c-0.37%2C0-0.734%2C0.207-1.114%2C0.587l-6.852%2C6.847c-0.012%2C0.016-2.877%2C7.354-2.877%2C7.354c-0.012%2C0.032%2C0%2C0.063%2C0.022%2C0.091%20c0.021%2C0.021%2C0.044%2C0.029%2C0.067%2C0.029c0.01%2C0%2C0.018-0.003%2C0.028-0.007c0%2C0%2C7.357-2.864%2C7.369-2.877l6.854-6.847%20C26.803%2C15.216%2C26.988%2C14.848%2C26.984%2C14.472z%22%2F%3E%3C%2Fsvg%3E");
}

.amcharts-export-menu .export-close > a,
.amcharts-export-menu .export-close:hover > a,
.amcharts-export-menu .export-close.active > a {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAACXBIWXMAAAsTAAALEwEAmpwYAABBsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo4M2Q5NDllYS1lMjE3LTQ3Y2QtYTU1Ni04MTQ3NmRjNWEwYWQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZhMTQ5MTc1LTNiODItMTE3OC05ZjZmLWY0MWMwNTYyYzQxYTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpkZGFhNTJkMi1mZDRiLTRkMmMtODEzOC01ZTEzNmQ4NGFjMDE8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6MDdhZmI1Y2UtYzQ1OS00YzQxLWJkMjItMTllMDJlMGE5YzVjPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOjA3YWZiNWNlLWM0NTktNGM0MS1iZDIyLTE5ZTAyZTBhOWM1Yzwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjgzZDk0OWVhLWUyMTctNDdjZC1hNTU2LTgxNDc2ZGM1YTBhZDwvc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YmY3ZmRlNGYtZDk2MS00Njk4LWI0ZjAtMDJlYjEwOWE4OTA4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTA1LTE1VDEzOjE3OjQ5KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAyMSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBpbWFnZS9wbmcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcDwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MDdhZmI1Y2UtYzQ1OS00YzQxLWJkMjItMTllMDJlMGE5YzVjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTA1LTE1VDEzOjE3OjQ5KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAyMSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmRkYWE1MmQyLWZkNGItNGQyYy04MTM4LTVlMTM2ZDg0YWMwMTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0wNS0xNVQxMzoyMToyMSswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMjEgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNS0wNS0xNVQxMzoxMzoxNyswMjowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE1LTA1LTE1VDEzOjIxOjIxKzAyOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNS0wNS0xNVQxMzoyMToyMSswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPlg8L3Bob3Rvc2hvcDpMYXllck5hbWU+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJUZXh0Plg8L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOlRleHRMYXllcnM+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+HyMp+AAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAA3UlEQVR42rSSXZECQQyEPygMrIVFAidhkQASQEIjYVsCSOAksBJAAlhAwvKSWcJBUQVVl6fM5Ke7k4z6vudTG/OFTQAktcAs/ja2TyVBUgVsgQq42F5PItYBCn8PTFNjAYvw5wM92x3gCNSSFCh1araLvAdNBi53VgMtgCuweRqE7RyogAPQxHsdcQBGf0cuaZ80APzaXn468urtniQ1CaXoayStct5AL4QfgToKfoBzIF2BadGVkVZRkIU7UdQDkqRZoDwJl3ROzea2u4LUvtpHOavkty9H/m9XfhsA0l9VuzQDWrIAAAAASUVORK5CYII=);
}

.amcharts-export-menu .export-drawing-color {
  background: #000;
  width: 35px;
}

.amcharts-export-menu .export-drawing-color > a {
  display: block;
  overflow: hidden;
  text-indent: -13333337px;
}

.amcharts-export-menu .export-drawing-color-red {
  background: #f00;
}

.amcharts-export-menu .export-drawing-color-green {
  background: #0f0;
}

.amcharts-export-menu .export-drawing-color-blue {
  background: #00f;
}

.amcharts-export-menu .export-drawing-color-white {
  background: #fff;
}

.amcharts-export-fallback {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
}

.amcharts-export-fallback textarea {
  border: none;
  outline: none;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.amcharts-export-fallback-message {
  position: absolute;
  z-index: 1;
  padding: 20px;
  width: 100%;
  background-color: #fff;
}

.amcharts-export-menu .export-delayed-capturing > a {
  text-indent: 0px;
  line-height: 36px;
  vertical-align: middle;
  text-align: center;
  background-image: none;
}

.amcharts-export-menu,
.amcharts-export-canvas .canvas-container {
  -webkit-transition: opacity 0.5s ease-out;
  -moz-transition: opacity 0.5s ease-out;
  -ms-transition: opacity 0.5s ease-out;
  -o-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
}

.amcharts-export-canvas.dropbox .canvas-container {
  opacity: 0.5;
}

.amcharts-export-menu .export-drawing-shape a {
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
}

.amcharts-export-menu li img {
  height: 20px;
}

.amcharts-export-menu .export-drawing-width a {
  text-align: center;
}

.amcharts-export-menu .export-drawing-width span {
  display: block;
  margin: 0 auto;
}

.amcharts-export-menu .export-drawing-width span > span {
  display: block;
  background: #000;
  border-radius: 100%;
}

.amcharts-export-menu .export-drawing-shape a:hover img,
.amcharts-export-menu .export-drawing-shape.active a img {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
</style>
