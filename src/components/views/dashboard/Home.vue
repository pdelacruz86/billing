<template>
  <div class="row">
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div class="dashboard-stat2 ">
                <a href="javascript:;" @click="loadDetail('Total')">
                    <div class="display">
                            <div class="number">
                            <h3 class="font-green-sharp">
                                <span data-counter="counterup" data-value="7800">{{viewModel.AccessionTotal}}</span>
                            </h3>
                            <small>TOTAL</small>
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
                            <small>IMCOMPLETED</small>
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
                <a href="javascript:;" @click="loadDetail('Hospital')">
                    
                    <div class="display">
                        <div class="number">
                            <h3 class="font-purple-soft">
                                <span data-counter="counterup" data-value="276">{{viewModel.HospitalTotal}}</span>
                            </h3>
                            <small>HOSPITAL</small>
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
                    <span class="caption-subject bold uppercase font-dark">Accessions Summary</span>
                    <span class="caption-helper hide">weekly stats...</span>
                </div>
            </div>
            <div class="portlet-body">
                <!-- <div class="row list-separated">
                    <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="font-grey-mint font-sm"> Total </div>
                        <div class="uppercase font-hg font-red-flamingo"> 134
                        </div>
                    </div>
                    
                    <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="font-grey-mint font-sm"> Pending </div>
                        <div class="uppercase font-hg font-purple"> 30
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="font-grey-mint font-sm"> Completed </div>
                        <div class="uppercase font-hg theme-font"> 100
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-6">
                        <div class="font-grey-mint font-sm">Incomplete </div>
                        <div class="uppercase font-hg font-blue-sharp"> 4
                        </div>
                    </div>
                </div>
                <ul class="list-separated list-inline-xs hide">
                    <li>
                        <div class="font-grey-mint font-sm"> Total Sales </div>
                        <div class="uppercase font-hg font-red-flamingo"> 13,760
                            <span class="font-lg font-grey-mint">$</span>
                        </div>
                    </li>
                    <li> </li>
                    <li class="border">
                        <div class="font-grey-mint font-sm"> Revenue </div>
                        <div class="uppercase font-hg theme-font"> 4,760
                            <span class="font-lg font-grey-mint">$</span>
                        </div>
                    </li>
                    <li class="divider"> </li>
                    <li>
                        <div class="font-grey-mint font-sm"> Expenses </div>
                        <div class="uppercase font-hg font-purple"> 11,760
                            <span class="font-lg font-grey-mint">$</span>
                        </div>
                    </li>
                    <li class="divider"> </li>
                    <li>
                        <div class="font-grey-mint font-sm"> Growth </div>
                        <div class="uppercase font-hg font-blue-sharp"> 9,760
                            <span class="font-lg font-grey-mint">$</span>
                        </div>
                    </li>
                </ul> -->
                <div id="chartdiv" style="width: 100%; height: 400px;"></div>
            </div>
        </div>
        </div>
    </div>
      <!-- <div class="col-md-6 col-sm-6">
          <div class="portlet light ">
              <div class="portlet-title">
                  <div class="caption caption-md">
                      <i class="icon-bar-chart font-dark hide"></i>
                      <span class="caption-subject font-green-steel bold uppercase">Accessions</span>
                  </div>
                  <div class="actions">
                    
                  </div>
              </div>
              <div class="portlet-body">
                  <div class="row number-stats margin-bottom-30">
                      <div class="col-md-6 col-sm-6 col-xs-6">
                          <div class="stat-left">
                              <div class="stat-chart">
                                  <div id="sparkline_bar"></div>
                              </div>
                              <div class="stat-number">
                                  <div class="title"> Total </div>
                                  <div class="number"> 500 </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6">
                          <div class="stat-right">
                              <div class="stat-chart">
                                  <div id="sparkline_bar2"></div>
                              </div>
                              <div class="stat-number">
                                  <div class="title"> New </div>
                                  <div class="number"> 20      </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="table-scrollable table-scrollable-borderless">
                      <table class="table table-hover table-light">
                          <thead>
                              <tr class="uppercase">
                                  <th colspan="2"> MEMBER </th>
                                  <th> CASES </th>
                                  <th> CLOSED </th>
                                  <th> RATE </th>
                              </tr>
                          </thead>
                          <tr>
                              <td class="fit">
                                  <img class="user-pic rounded" src="../../../assets/pages/media/users/avatar4.jpg"> </td>
                              <td>
                                  <a href="javascript:;" class="primary-link">Brain</a>
                              </td>
                              <td> 5 </td>
                              <td> 2 </td>
                              <td>
                                  <span class="bold theme-font">80%</span>
                              </td>
                          </tr>
                          <tr>
                              <td class="fit">
                                  <img class="user-pic rounded" src="../../../assets/pages/media/users/avatar5.jpg"> </td>
                              <td>
                                  <a href="javascript:;" class="primary-link">Nick</a>
                              </td>
                              <td> 2 </td>
                              <td> 1 </td>
                              <td>
                                  <span class="bold theme-font">67%</span>
                              </td>
                          </tr>
                          <tr>
                              <td class="fit">
                                  <img class="user-pic rounded" src="../../../assets/pages/media/users/avatar6.jpg"> </td>
                              <td>
                                  <a href="javascript:;" class="primary-link">Tim</a>
                              </td>
                              <td> 7 </td>
                              <td> 1 </td>
                              <td>
                                  <span class="bold theme-font">90%</span>
                              </td>
                          </tr>
                          <tr>
                              <td class="fit">
                                  <img class="user-pic rounded" src="../../../assets/pages/media/users/avatar7.jpg"> </td>
                              <td>
                                  <a href="javascript:;" class="primary-link">Tom</a>
                              </td>
                              <td> 5 </td>
                              <td> 0 </td>
                              <td>
                                  <span class="bold theme-font">100%</span>
                              </td>
                          </tr>
                      </table>
                  </div>
              </div>
          </div>
      </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AmCharts from "amcharts3";
import AmSerial from "amcharts3/amcharts/serial";
import AmPie from "amcharts3/amcharts/pie";

export default {
  mounted() {
    this.loadDetail("Total");
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
        { type: "Margherita", sold: 120 },
        { type: "Funghi", sold: 82 },
        { type: "Capricciosa", sold: 78 },
        { type: "Quattro Stagioni", sold: 71 }
      ]
    });
  },
  computed: {
    ...mapGetters(["accessions"]),
    viewModel() {
      //accession total
      let accessionTotal = 0;

      this.accessions.forEach(element => {
        accessionTotal = accessionTotal + element.Cases.length;
      });

      //pending
      let accessionPending = 0;
      this.accessions.forEach(element => {
        element.Cases.filter(function(item) {
          if (item.BillingType == "Select One") accessionPending++;
        });
      });

      //completed
      let accessionCompleted = this.accessions.filter(function(item) {
        return item.TrigueStatus == "Complete";
      });

      //imcomplete
      let accessionIncomplete = this.accessions.filter(function(item) {
        return item.TrigueStatus == "Incomplete";
      });

      //categorized total
      let accessionCategorized = accessionTotal - accessionPending;
      var data = {
        AccessionTotal: accessionTotal,
        CategorizedTotal: accessionCategorized,
        CompletedTotal: accessionCompleted.length,
        IncompleteTotal: accessionIncomplete.length
      };

      return data;
    }
  },
  data() {
    return {
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
    loadDetail(typename) {
      var chart;
      var legend;
      var selected;

      var types = getTypelist(typename, this.accessions);

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

  let accessionCategorized = accessionTotal - accessionPending;

  switch (typename) {
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
            percent: 2
          },
          {
            type: "Direct",
            percent: 6
          },
          {
            type: "Split",
            percent: 4
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
            percent: 2
          },
          {
            type: "Insurance Type",
            percent: 2
          },
          {
            type: "Hospital Status",
            percent: 3
          }
        ]
      });
      return types;
    case "Completed":
      types.push({
        type: "Insurance",
        percent: 100,
        color: "#b0de09",
        subs: [
          {
            type: "Medicare",
            percent: 36
          },
          {
            type: "Not Medicare",
            percent: 44
          }
        ]
      });
      types.push({
        type: "Direct",
        percent: 200,
        color: "#b0de09"
      });
      types.push({
        type: "Split",
        percent: 50,
        color: "#b0de09"
      });
      return types;
    case "Incompleted":
      types.push({
        type: "Billing Type",
        percent: 20,
        color: "#b0de09"
      });
      types.push({
        type: "Insurance Type",
        percent: 36,
        color: "#b0de09"
      });
      types.push({
        type: "Hospital Type",
        percent: 100,
        color: "#b0de09"
      });
      return types;
    case "Insurance":
      types.push({
        type: "Medicare",
        percent: 20,
        color: "#b0de09"
      });
      types.push({
        type: "Not Medicare",
        percent: 36,
        color: "#b0de09"
      });
      return types;
    case "Hospital":
      types.push({
        type: "Medicare",
        percent: 59,
        color: "#b0de09"
      });
      types.push({
        type: "Not Medicare",
        percent: 67,
        color: "#b0de09"
      });
      return types;
    default:
      return "";
  }
}
</script>

