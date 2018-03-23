<template>
  <div class="table-responsive" style="">
    <div class="portlet light ">
      <div class="portlet-title">
          <div class="caption caption-md">
              <i class="icon-bar-chart font-dark hide"></i>
              <span class="caption-subject font-green-steel bold uppercase">Accession Activity</span>
          </div>
          <div class="actions">
             
          </div>
           <div class="actions">
             Sort By:
             	<select class="btn btn-default" style="height:29px" v-model="accessions_sorting.sortBy">
                <option value="AccessionID">Accession</option>	
                <option value="PatientID">Patient ID</option>	
                <option value="PatientName">Patient Name</option>	
                <option value="ClientNumber">Client No</option>	
                <option value="ClientName">Client Name</option>	
                <option value="CreatedDate">Created Date</option>	
                <option value="TrigueStatus">Trigue Status</option>	
              </select>
              <select class="btn btn-default" style="height:29px" v-model="accessions_sorting.sortDirection">
                <option value="desc">Desc</option>	
                <option value="asc">Asc</option>	
              </select>
               <div class="btn-group btn-group" data-toggle="buttons">
					      <button type="button" class="btn btn-info active" @click="openNewWindowContentCentral">Content Central</button>
                <button type="button" class="btn btn-info active" @click="newSearch">New Search</button>
              </div>
            
          </div>
      </div>
      <div class="portlet-body">
          <vue-good-table
            styleClass="table table-striped table-bordered table-advance table-hover"
            :columns="columns"
            :rows="accessions_ordered_by"
            :paginate="true"
            :lineNumbers="false">
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
                <td>
                  <span v-if="props.row.TrigueStatus=='Pending'" class="label bg-yellow-gold bg-font-yellow-gold">Pending</span>
                  <span v-if="props.row.TrigueStatus=='Incomplete'" class="label label-danger">Incomplete</span>
                  <span v-if="props.row.TrigueStatus=='Complete'" class="label label-sm label-info">Complete</span>
                </td>
              </template>
          <div slot="emptystate">
            No Accessions.
          </div>
        </vue-good-table>
      </div>
    </div>
    
     <!-- use the modal component, pass in the prop -->
		<modal v-if="showModal" @close="showModal = false">
			<!--
			you can use custom content here to overwrite
			default content
			-->
			<div slot="body">
				<div class="intrinsic-container intrinsic-container-16x9">
					<iframe allowfullscreen src="http://csi-dis-one/ContentCentral/Search/Search.aspx?c=Operations Medical Records&dt=Requisitions&f2&v2=FIG17-006633">
				  </iframe>
			  </div>
			</div>
		</modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
var moment = require("moment");
import Modal from "../../utils/modal-template.vue";
import _ from "lodash";
export default {
  components: { Modal },
  mounted() {
    if (this.accessions.length === 0) this.getAllCases();
    this.setSelectedAccession({});
    this.updateTextSearch("");
    this.removeLoading();
  },
  computed: {
    ...mapGetters(["accessions", "accessions_sorting", "accessions_filter"]),
    accessions_ordered_by() {
      let sortBy = this.accessions_sorting.sortBy;
      let data = _.orderBy(
        this.accessions,
        function(item) {
          switch (sortBy) {
            case "AccessionID":
              return item.AccessionID;
              break;
            case "PatientID":
              return item.PatientInformation.PatientID;
              break;
            case "PatientName":
              return item.PatientInformation.PatientName;
              break;
            case "ClientNumber":
              return item.PatientInformation.Client;
              break;
            case "ClientName":
              return item.PatientInformation.ClientName;
              break;
            case "CreatedDate":
              return item.CreatedDate;
              break;
            case "TrigueStatus":
              return item.TrigueStatus;
              break;
            default:
              return;
          }
        },
        this.accessions_sorting.sortDirection
      );
      if (this.accessions_filter.triageStatus === "Complete") {
        var self = this;
        if (self.accessions_filter.completedDate !== "") {
          data = data.filter(element => {
            return (
              moment.unix(element.CompletedDate).format("YYYYMMDD") ===
              moment(self.accessions_filter.completedDate).format("YYYYMMDD")
            );
          });
        }
      }

      return data;
    }
  },
  data() {
    return {
      showModal: false,
      columns: [
        {
          label: "Accession",
          field: "AccessionID",
          width: "70px",
          sortable: false
        },
        {
          label: "Case No",
          field: "CaseNumber",
          width: "135px",
          sortable: false
        },
        {
          label: "Patient",
          field: "PatientID",
          width: "70px",
          sortable: false
        },
        {
          label: "Patient Name",
          field: "PatientName",
          width: "210px",
          sortable: false
        },
        {
          label: "Client",
          field: "Client",
          width: "50px",
          sortable: false
        },
        {
          label: "Client Name",
          field: "ClientName",
          width: "310px",
          sortable: false
        },
        {
          label: "Created",
          field: "CaseCreatedDate",
          width: "180px",
          sortable: false
        },
        {
          label: "Status",
          field: "TriageStatus",
          width: "70px",
          sortable: false
        }
      ]
    };
  },
  watch: {
    accessions: function(val) {
      // this.getAllCasesWorklist();
    },
    accessions_sorting: function(val) {
      console.log(val);
      this.accessions_ordered_by();
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
    openNewWindowContentCentral(row, index) {
      window.open(
        "http://csi-dis-one/ContentCentral/Search/Search.aspx?c=Operations Medical Records&dt=Requisitions&f2"
      );
    },
    onClickFn(row, index) {
      this.setSelectedAccession(row);
      this.$router.push({
        path: "/details/" + row.AccessionID.toString()
      });
    },
    reloadData() {
      this.getAllCases();
    },
    timestamp: function(date) {
      return moment.unix(date).format("YYYY-MM-DD HH:mm:ss");
    },
    newSearch: function() {
      this.$router.push({ path: "/new" });
    },
    searchFn(row, col, cellValue, searchTerm) {}
  }
};
</script>
