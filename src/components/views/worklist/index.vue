<template>
  <div class="portlet box blue">
    <div class="portlet-title">
      <div class="caption">
        <i class="fa fa-cogs"></i>My Worklist </div>
        <div class="tools">
          <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""></a>
          <a href="javascript:;" class="reload" data-original-title="" title="" @click="reloadData()" ></a>
        </div>
      </div>
      <div class="portlet-body">
        <div class="table-responsive">
          <vue-good-table
            styleClass="table table-bordered table-hover dataTable dtr-inline collapsed"
            :columns="columns"
            :rows="caselist"
            :paginate="true"
            :lineNumbers="false"
            >
            <template slot="table-row-after" slot-scope="props"> 
              <td>
                 <a href="#" class="btn btn-sm btn-circle btn-default btn-editable"><i class="fa fa-download"></i></a>
              </td>
            </template>
              <template slot="table-row" scope="props">
                <td>{{ props.row.AccessionID }}</td>
                <td>
                      <a @click="onClickFn(props.row, props.index)" v-for="item in props.row.Cases"
                          v-bind:item="item"
                          v-bind:index="item.CaseNumber"
                          v-bind:key="item.CaseID"> {{ item.CaseNumber }}
                    </a>
                </td>
                <td>{{ props.row.PatientInformation.PatientID }}</td>
                <td>{{ props.row.PatientInformation.PatientName }}</td>
                <td>{{ props.row.PatientInformation.Client }}</td>
                <td>{{ props.row.PatientInformation.ClientName }}</td>
                <td>{{ props.row.CreatedDate }}</td>
                <td>{{ props.row.LISCaseStatus }}</td>
                <td>
                  <span v-if="props.formattedRow.TriageStatus=='Pending'" class="label label-sm label-success">Pending</span>
                  <span v-if="props.formattedRow.TriageStatus=='Incomplete'" class="label label-sm label-danger">Incomplete</span>
                  <span v-if="props.formattedRow.TriageStatus=='Complete'" class="label label-sm label-info">Complete</span>
                </td>
              </template>
          <div slot="emptystate">
            No Cases
          </div>
          </vue-good-table>
          
       </div>
     </div>
   </div>
 </template>
 <script>
  import { mapGetters, mapActions } from 'vuex'
  var testData  = require('../../../utils/worklistdata.js')

  export default {
    components: {
    },
     mounted () {
      if (this.caselist.length === 0)
        this.getAllCases();
    },
    computed: {
      ...mapGetters([
        'caselist'
        ]),
    },
    data () {
      return {
       columns: [
       {
        label: 'Accession',
        field: 'AccessionID',
        type: 'number',
        width: '110px',
        // filterable: true,
        placeholder: 'Filter'
      },{
        label: 'Case No',
        field: 'CaseNumber',
        width: '210px',
        // filterable: true,
        placeholder: 'Filter'
      },  {
        label: 'Patient ID',
        field: 'PatientID',
        type: 'number',
        width: '110px',
        // filterable: true,
        placeholder: 'Filter'
      }, {
        label: 'Patient Name',
        field: 'PatientName',
        width: '310px',
        // filterable: true,
        placeholder: 'Filter'
      }, {
        label: 'Client',
        field: 'ClientNumber',
        width: '90px',
        // filterable: true,
        placeholder: 'Filter'
      }, {
        label: 'Client Name',
        field: 'ClientName',
        width: '310px',
        // filterable: true,
        placeholder: 'Filter'
      }, {
        label: 'Created',
        field: 'CaseCreatedDate',
        width: '110px',
        // filterable: true,
        placeholder: 'Filter'
      }, {
        label: 'LIS Status',
        field: 'LISCaseStatus',
        width: '100px',
        // filterable: true,
        placeholder: 'Filter'
      }, {
        label: 'Triage Step',
        field: 'TriageStatus',
        width: '110px',
        // filterable: true,
        placeholder: 'Filter'
      }
      ]
    }
  },
   methods: {
      ...mapActions([
        'getAllCases',
        'setSelectedAccession'
      ]),
      onClickFn(row, index) {
        console.log(row, index);
        this.setSelectedAccession(row);
        this.$router.push({ path: '/billing' })
      },
      reloadData() {
        this.getAllCases();
      }
    }
}
</script>
