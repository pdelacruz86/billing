<template>
  <div class="portlet box blue">
    <div class="portlet-title">
      <div class="caption">
        <i class="fa fa-cogs"></i>My Worklist </div>
        <div class="tools">
          <a href="javascript:;" data-toggle="modal" class="icon-plus" data-original-title="" title="" style="color: white"></a>
          <!-- <a href="#portlet-config" data-toggle="modal" class="icon-refresh" data-original-title="" title=""></a> -->
          <a href="javascript:;" class="icon-refresh" data-original-title="" title="" @click="reloadData()" style="color: white" ></a>
        </div>
      </div>
      <div class="portlet-body">
        <div class="table-responsive">
          <vue-good-table
            styleClass="table table-striped table-bordered table-advance table-hover"
            :columns="columns"
            :rows="accessions"
            :paginate="true"
            :lineNumbers="false"
            :globalSearch="true"
            :globalSearchFn="searchFn"
            >
            <template slot="table-row-after" slot-scope="props"> 
              <td>
                 <a href="#" class="btn btn-sm btn-circle btn-default btn-editable"><i class="fa fa-download"></i></a>
              </td>
            </template>
              <template slot="table-row" scope="props">
                <td class="highlight"><div class="success"></div>
                <a @click="onClickFn(props.row, props.index)" href="javascript:;">{{ props.row.AccessionID }}</a></td>
                <td>
                      <a href="javascript:;" @click="onClickFn(props.row, props.index)" v-for="item in props.row.Cases"
                          v-bind:item="item"
                          v-bind:index="item.CaseNumber"
                          v-bind:key="item.CaseID"> {{ item.CaseNumber }}
                      </a>
                </td>
                <td>{{ props.row.PatientInformation.PatientID }}</td>
                <td>{{ props.row.PatientInformation.PatientName }}</td>
                <td>{{ props.row.PatientInformation.Client }}</td>
                <td>{{ props.row.PatientInformation.ClientName }}</td>
                <td>{{ timestamp(props.row.CreatedDate) }}</td>
                <!-- <td>{{ props.row.LISCaseStatus }}</td> -->
                <td>
                  <span v-if="props.row.TrigueStatus=='Pending'" class="label label-sm label-success">Pending</span>
                  <span v-if="props.row.TrigueStatus=='Incomplete'" class="label label-sm label-danger">Incomplete</span>
                  <span v-if="props.row.TrigueStatus=='Complete'" class="label label-sm label-info">Complete</span>
                </td>
              </template>
          <div slot="emptystate">
            No Acessions.
          </div>
          </vue-good-table>
          
       </div>
     </div>
   </div>
 </template>
 <script>
import { mapGetters, mapActions } from "vuex";
var moment = require("moment");

export default {
  components: {},
  mounted() {
    debugger;
    if (this.accessions.length === 0) this.getAllCases();

    this.setSelectedAccession({});
    this.updateTextSearch("");
    this.removeLoading();
  },
  computed: {
    ...mapGetters(["accessions"])
  },
  data() {
    return {
      columns: [
        {
          label: "Accession",
          field: "AccessionID",
          type: "number",
          width: "110px",
          filterable: true,
          placeholder: "Filter"
        },
        {
          label: "Case No",
          field: "CaseNumber",
          width: "210px",
          filterable: true,
          placeholder: "Filter"
        },
        {
          label: "Patient ID",
          field: "PatientID",
          type: "number",
          width: "110px",
          // filterable: true,
          placeholder: "Filter"
        },
        {
          label: "Patient Name",
          field: "PatientName",
          width: "310px",
          // filterable: true,
          placeholder: "Filter"
        },
        {
          label: "Client",
          field: "ClientNumber",
          width: "90px",
          // filterable: true,
          placeholder: "Filter"
        },
        {
          label: "Client Name",
          field: "ClientName",
          width: "310px",
          // filterable: true,
          placeholder: "Filter"
        },
        {
          label: "Created",
          field: "CaseCreatedDate",
          width: "110px",
          // filterable: true,
          placeholder: "Filter"
        },
        // {
        //   label: 'LIS Status',
        //   field: 'LISCaseStatus',
        //   width: '100px',
        //   // filterable: true,
        //   placeholder: 'Filter'
        // },
        {
          label: "Status",
          field: "TriageStatus",
          width: "110px",
          // filterable: true,
          placeholder: "Filter"
        }
      ]
    };
  },
  methods: {
    ...mapActions([
      "getAllCases",
      "setSelectedAccession",
      "updateTextSearch",
      "removeLoading"
    ]),
    onClickFn(row, index) {
      console.log(row, index);
      debugger;
      this.setSelectedAccession(row);
      this.$router.push({ path: "/billing/" + row.AccessionID.toString() });
    },
    reloadData() {
      this.getAllCases();
    },
    timestamp: function(date) {
      return moment.unix(date).format("YYYY-MM-DD HH:mm:ss");
    },
    searchFn(row, col, cellValue, searchTerm) {
      debugger;
      // return row.Cases.map(function(item) {
      //   return item.CaseNumber == searchTerm;
      // });
    }
  }
};
</script>
