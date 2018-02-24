import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'


const state = {
  worklist_data: [],
  worklist_filter: {
    caseNumber: '',
    accessionID: '',
    billingType: '',
    insuranceType: '',
    hospitalStatus: '',
    firstName: '',
    lastName: '',
    patientID: '',
    TriageStatus: '',
    ClientName: '',
    ClientNumber: ''
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
