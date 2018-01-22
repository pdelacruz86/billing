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

         <vue-good-table
         title="Demo Table"
         :columns="columns"
         :rows="CaseList"
         :paginate="true"
         :lineNumbers="true"/>
       </div>
     </div>
   </div>
 </template>

 <script>
  import { mapGetters, mapActions } from 'vuex'
  var testData  = require('../../../utils/worklistdata.js')

  export default {
    components: {
      Chart
    },
    computed: {
      ...mapGetters([
        'Accessions'
        ]),
      CaseList () {
        var list = testData.getData();
        return list;
      }
    },
    data () {
      return {
       columns: [
       {
        label: 'Case Number',
        field: 'CaseNumber',
        filterable: true,
      },
      {
        label: 'Accession ID',
        field: 'AccessionID',
        type: 'number',
        html: false,
        filterable: true,
      },
      {
        label: 'Case Created Date',
        field: 'CaseCreatedDate',
      },
      {
        label: 'Patient Name',
        field: 'PatientName',
        html: false,
      }
      ]
    }
  }
}
</script>

