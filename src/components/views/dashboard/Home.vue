<template>
  <div class="row">
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Pending')">
                    <div class="display">
                            <div class="number">
                            <h3 class="font-green-sharp">
                                <span data-counter="counterup" data-value="7800">{{viewModel.PendingTotal}}</span>
                            </h3>
                            <small>PENDING</small>
                        </div>
                    
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span style="width: 76%;" class="progress-bar progress-bar-success green-sharp">
                                <span class="sr-only">76% progress</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> progress </div>
                            <div class="status-number"> 76% </div>
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
                            <h3 class="font-purple-soft">
                                <span data-counter="counterup" data-value="1349">{{viewModel.CategorizedTotal}}</span>
                            </h3>
                            <small>CATEGORIZED</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span style="width: 85%;" class="progress-bar progress-bar-success purple-soft">
                                <span class="sr-only">85% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> change </div>
                            <div class="status-number"> 85% </div>
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
                            <h3 class="font-purple-soft">
                                <span data-counter="counterup" data-value="276">{{viewModel.InsuranceTotal}}</span>
                            </h3>
                            <small>INSURANCE</small>
                        </div>
                    </div>
                    <div class="progress-info">
                        <div class="progress">
                            <span style="width: 57%;" class="progress-bar progress-bar-success purple-soft">
                                <span class="sr-only">56% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> change </div>
                            <div class="status-number"> 57% </div>
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
                            <span style="width: 57%;" class="progress-bar progress-bar-success purple-soft">
                                <span class="sr-only">56% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> change </div>
                            <div class="status-number"> 57% </div>
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
                            <span style="width: 45%;" class="progress-bar progress-bar-success blue-sharp">
                                <span class="sr-only">45% grow</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> grow </div>
                            <div class="status-number"> 45% </div>
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
                            <span style="width: 57%;" class="progress-bar progress-bar-success red-haze">
                                <span class="sr-only">56% change</span>
                            </span>
                        </div>
                        <div class="status">
                            <div class="status-title"> change </div>
                            <div class="status-number"> 57% </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-xs-12 col-sm-12">
            <div class="portlet light ">
              <div class="portlet-title">
                  <div class="caption">
                        <span class="caption-subject bold uppercase font-dark">Revenue</span>
                        <span class="caption-helper">distance stats...</span>
                    </div>
                 <div class="actions">
                    <a class="btn btn-circle btn-icon-only btn-default" href="#">
                        <i class="icon-cloud-upload"></i>
                    </a>
                    <a class="btn btn-circle btn-icon-only btn-default" href="#">
                        <i class="icon-wrench"></i>
                    </a>
                    <a class="btn btn-circle btn-icon-only btn-default" href="#">
                        <i class="icon-trash"></i>
                    </a>
                    <a class="btn btn-circle btn-icon-only btn-default fullscreen" href="#" data-original-title="" title=""> </a>
                </div>
              </div>
              <div class="portlet-body">
                  <div id="mainchartdiv"  style="width: 100%; height: 300px;"></div>
              </div>
            </div>
        </div>
        <div class="col-lg-6 col-xs-12 col-sm-12">
            <div class="portlet light ">
            <div class="portlet-title">
                <div class="caption caption-md">
                    <i class="icon-bar-chart font-dark hide"></i>
                    <span class="caption-subject bold uppercase font-dark">Cases Summary</span>
                    <span class="caption-helper hide">weekly stats...</span>
                </div>
            </div>
            <div class="portlet-body">
                <div id="chartdiv" style="width: 100%; height: 400px;"></div>
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

export default {
  mounted() {
    // this.accessions = this.accessions;
    debugger;
    this.removeLoading();
    this.loadDetail("Pending");
    this.loadSummary();
    document.getElementsByClassName("input-date").value =
      "01 Feb 2018 - 28 Feb 2018";
  },
  computed: {
    ...mapGetters(["dashboardData", "accessions"]),
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
    }
  },
  data() {
    return {
      //   dashboardData: [],
      data: {
        labels: ["Sleeping", "Designing", "Coding", "Cycling"],
        datasets: [
          {
            data: [20, 40, 5, 35],
            backgroundColor: [
              "#1fc8db",
              "#fce473",
              "#42afe3",
              "#ed6c63",
              "#97cd76"
            ]
          }
        ]
      },
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
        graphs: [
          {
            type: "column",
            title: "Pizza types",
            valueField: "sold",
            fillAlphas: 0.8
          }
        ],

        dataProvider: [
          { type: "Pending", sold: accessionPending },
          { type: "Complete", sold: accessionComplete },
          { type: "Incomplete", sold: accessionIncomplete }
        ]
      });
    },
    loadDetail(typename) {
      this.loadSummary();
      var chart;
      var legend;
      var selected;

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
  debugger;
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

  debugger;

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
        color: "#ff9e01"
      });
      return types;
    case "Total":
      types.push({
        type: "Pending",
        percent: accessionPending,
        color: "#ff9e01"
      });

      types.push({
        type: "Categorized",
        percent: accessionCategorized,
        color: "#b0de09",
        subs: [
          {
            type: "Complete",
            percent: accessionComplete
          },
          {
            type: "Incomplete",
            percent: accessionIncomplete
          }
        ]
      });
      return types;
    case "Categorized":
      types.push({
        type: "Completed",
        percent: accessionComplete,
        color: "#b0de09",
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
        color: "#b0de09",
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
        color: "#b0de09",
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
        color: "#b0de09"
      });
      types.push({
        type: "Split",
        percent: casesSplit,
        color: "#b0de09"
      });
      return types;
    case "Incompleted":
      types.push({
        type: "Billing Type",
        percent: incompleteBillingType,
        color: "#b0de09"
      });
      types.push({
        type: "Insurance Type",
        percent: incompleteInsuranceType,
        color: "#b0de09"
      });
      types.push({
        type: "Hospital Status",
        percent: incompleteHospitalStatus,
        color: "#b0de09"
      });
      return types;
    case "Insurance":
      types.push({
        type: "Medicare",
        percent: InsuranceMedicare,
        color: "#b0de09",
        subs: [
          {
            type: "Inpatient",
            percent: HospitalStatusInpatient
          },
          {
            type: "Outpatient",
            percent: HospitalStatusOutpatient
          },
          {
            type: "Non-hospital",
            percent: HospitalStatusNonHospital
          }
        ]
      });
      types.push({
        type: "Not Medicare",
        percent: InsuranceNotMedicare,
        color: "#b0de09"
      });
      return types;
    case "DirectSplit":
      types.push({
        type: "Direct",
        percent: directCount,
        color: "#b0de09"
      });
      types.push({
        type: "Split",
        percent: splitCount,
        color: "#b0de09"
      });
      return types;
    default:
      return "";
  }
}
</script>

