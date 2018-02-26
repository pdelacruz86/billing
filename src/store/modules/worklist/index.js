import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'


const state = {
  worklist_data: [],
  worklist_data_filtered: [],
  worklist_filter: {
    caseNumber: "",
    accessionID: "",
    billingType: "",
    insuranceType: "",
    hospitalStatus: "",
    patientFullName: "",
    patientID: "",
    triageStatus: "",
    clientName: "",
    clientNumber: ""
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
