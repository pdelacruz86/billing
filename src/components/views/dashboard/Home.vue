<template>
 <!--  <div class="home">
    <chart :type="'pie'" :data="data" :options="options"></chart>
  </div> -->

  <div class="row">
      <div class="col-md-6 col-sm-6">
          <div class="portlet light ">
              <div class="portlet-title">
                  <div class="caption caption-md">
                      <i class="icon-bar-chart font-dark hide"></i>
                      <span class="caption-subject font-green-steel uppercase bold">Cases Summary</span>
                      <span class="caption-helper hide">weekly stats...</span>
                  </div>
                  <div class="actions">
                      <div class="btn-group btn-group-devided" data-toggle="buttons">
                          <label class="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm active">
                              <input type="radio" name="options" class="toggle" id="option1">Today</label>
                          <label class="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" class="toggle" id="option2">Week</label>
                          <label class="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" class="toggle" id="option2">Month</label>
                      </div>
                  </div>
              </div>
              <div class="portlet-body">
                  <div class="row list-separated">
                      <div class="col-md-3 col-sm-3 col-xs-6">
                          <div class="font-grey-mint font-sm"> Total </div>
                          <div class="uppercase font-hg font-red-flamingo"> 134
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-3 col-xs-6">
                          <div class="font-grey-mint font-sm"> Completed </div>
                          <div class="uppercase font-hg theme-font"> 100
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-3 col-xs-6">
                          <div class="font-grey-mint font-sm"> Pending </div>
                          <div class="uppercase font-hg font-purple"> 30
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-3 col-xs-6">
                          <div class="font-grey-mint font-sm">Conditional Reflex </div>
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
                  </ul>
                  <div id="sales_statistics" class="portlet-body-morris-fit morris-chart" style="height: 267px"> </div>
              </div>
          </div>
      </div>
      <div class="col-md-6 col-sm-6">
          <div class="portlet light ">
              <div class="portlet-title">
                  <div class="caption caption-md">
                      <i class="icon-bar-chart font-dark hide"></i>
                      <span class="caption-subject font-green-steel bold uppercase">Patients Activity</span>
                      <span class="caption-helper">weekly stats...</span>
                  </div>
                  <div class="actions">
                      <div class="btn-group btn-group-devided" data-toggle="buttons">
                          <label class="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm active">
                              <input type="radio" name="options" class="toggle" id="option1">Today</label>
                          <label class="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" class="toggle" id="option2">Week</label>
                          <label class="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm">
                              <input type="radio" name="options" class="toggle" id="option2">Month</label>
                      </div>
                  </div>
              </div>
              <div class="portlet-body">
                  <div class="row number-stats margin-bottom-30">
                      <div class="col-md-6 col-sm-6 col-xs-6">
                          <div class="stat-left">
                              <div class="stat-chart">
                                  <!-- do not line break "sparkline_bar" div. sparkline chart has an issue when the container div has line break -->
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
                                  <!-- do not line break "sparkline_bar" div. sparkline chart has an issue when the container div has line break -->
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
      </div>
  </div>
</template>

<script>
import Chart from './Chartjs'

export default {
  components: {
    Chart
  },

  data () {
    return {
      data: {
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling'],
        datasets: [{
          data: [20, 40, 5, 35],
          backgroundColor: [
            '#1fc8db',
            '#fce473',
            '#42afe3',
            '#ed6c63',
            '#97cd76'
          ]
        }]
      },
      options: {
        segmentShowStroke: false
      }
    }
  }
}
</script>

