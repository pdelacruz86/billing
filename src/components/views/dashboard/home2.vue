<template>
 <!--  <div class="home">
    <chart :type="'pie'" :data="data" :options="options"></chart>
  </div> -->

  <div class="portlet box blue">
    <div class="portlet-title">
      <div class="caption">
        <i class="fa fa-cogs"></i>List of Accessions </div>
        <div class="tools">
          <a href="javascript:;" class="collapse" data-original-title="" title=""> </a>
          <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""> </a>
          <a href="javascript:;" class="reload" data-original-title="" title=""> </a>
          <a href="javascript:;" class="remove" data-original-title="" title=""> </a>
        </div>
      </div>
      <div class="portlet-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th> Case Number</th>
                <th> AccessionID </th>
                <th> Patient Name </th>
                <th> Client </th>
                <th> Case Created Date </th>
                <th> LIS Case Status </th>
                <th> Triage Step </th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="item in CaseList">
                <td>{{item.CaseNumber}}</td>
                <td>{{item.AccessionID}}</td>
                <td> {{item.FullName}} </td>
                <td> {{item.Client}} </td>
                <td> {{item.AccessionDate}} </td>
                <td> {{item.LISCaseStatus}} </td>
                <td> {{item.Status}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

  <script>
    import Chart from './Chartjs'
    import { mapGetters, mapActions } from 'vuex'

    export default {
      components: {
        Chart
      },
      computed: {
        ...mapGetters([
          'Accessions'
          ]),
        CaseList () {
          debugger; 
          var list= [];
          var accessions = this.Accessions;

          for (var i = 0; i < accessions.length; i++) {
            var a = accessions[i]
            for (var j = 0; j < a.Cases.length; j++) {
              var _case = a.Cases[j];

              var finalObject = {
                AccessionID: a.AccessionID,
                CaseNumber: _case.CaseNumber,
                AccesionID: a.AccesionID,
                FullName: a.PatientInformation.FullName,
                Client: a.PatientInformation.Client,
                AccessionDate: a.PatientInformation.AccessionDate,
                Status: _case.Status,
                LISCaseStatus: _case.LISCaseStatus
              }

              list.push(finalObject);
            }
          }
          return list;
        }
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

