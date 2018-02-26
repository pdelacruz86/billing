<template>
  <div class="table-responsive" style="">
    <vue-good-table
      styleClass="table table-striped table-bordered table-advance table-hover"
      :columns="columns"
      :rows="worklist_data_filtered"
      :paginate="true"
      :lineNumbers="false">
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
   
 </template>
 <script>
import { mapGetters, mapActions } from "vuex";
var moment = require("moment");

export default {
  components: {},
  mounted() {
    if (this.worklist_data_filtered.length === 0) this.getAllCases();
    this.setSelectedAccession({});
    this.updateTextSearch("");
    this.removeLoading();
  },
  computed: {
    ...mapGetters(["worklist_data_filtered", "accessions"])
  },
  data() {
    return {
      columns: [
        {
          label: "Accession",
          field: "AccessionID",
          type: "number",
          width: "70px"
        },
        {
          label: "Case No",
          field: "CaseNumber",
          width: "135px"
        },
        {
          label: "Patient",
          field: "PatientID",
          width: "70px"
        },
        {
          label: "Patient Name",
          field: "PatientName",
          width: "210px"
        },
        {
          label: "Client",
          field: "Client",
          width: "50px"
        },
        {
          label: "Client Name",
          field: "ClientName",
          width: "310px"
        },
        {
          label: "Created",
          field: "CaseCreatedDate",
          width: "180px"
        },
        {
          label: "Status",
          field: "TriageStatus",
          width: "70px"
        }
      ]
    };
  },
  watch: {
    accessions: function(val) {
      debugger;
      // this.getAllCasesWorklist();
    }
  },
  methods: {
    ...mapActions([
      "getAllCases",
      "setSelectedAccession",
      "updateTextSearch",
      "removeLoading",
      "getAllCasesWorklist"
    ]),
    onClickFn(row, index) {
      this.setSelectedAccession(row);
      this.$router.push({ path: "/billing/" + row.AccessionID.toString() });
    },
    reloadData() {
      this.getAllCases();
    },
    timestamp: function(date) {
      return moment.unix(date).format("YYYY-MM-DD HH:mm:ss");
    },
    searchFn(row, col, cellValue, searchTerm) {}
  }
};
</script>
