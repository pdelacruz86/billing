<template>
  <div class="portlet box blue">
    <div class="portlet-title">
      <div class="caption">
        <i class="fa fa-cogs"></i>List of Accessions </div>
        <div class="tools">
          <a href="javascript:;" class="collapse" data-original-title="" title=""></a>
          <a href="#portlet-config" data-toggle="modal" class="config" data-original-title="" title=""></a>
          <a href="javascript:;" class="reload" data-original-title="" title=""></a>
          <a href="javascript:;" class="remove" data-original-title="" title=""></a>
        </div>
      </div>
      <div class="portlet-body">
        <div class="table-responsive">
          <vue-good-table
            title="Demo Table"
            :columns="columns"
            :rows="caselist"
            :paginate="true"
            :lineNumbers="false" />
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
      debugger;
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
        label: 'Case Number',
        field: 'CaseNumber',
        filterable: true,
      }, {
        label: 'Accession ID',
        field: 'AccessionID',
        filterable: true,
      }, {
        label: 'Patient ID',
        field: 'PatientID',
        filterable: true,
      }, {
        label: 'Patient Name',
        field: 'PatientName',
        filterable: true,
      }, {
        label: 'Client No',
        field: 'ClientNumber',
        filterable: true,
      }, {
        label: 'Client Name',
        field: 'ClientName',
        filterable: true,
      }, {
        label: 'Case Created Date',
        field: 'CaseCreatedDate',
        filterable: true,
      }, {
        label: 'LIS Case Status',
        field: 'LISCaseStatus',
        filterable: true,
      }, {
        label: 'Triage Step',
        field: 'TriageStatus',
        filterable: true,
      }
      ]
    }
  },
   methods: {
      ...mapActions([
        'getAllCases'
      ])
    }
}
</script>

