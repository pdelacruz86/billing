import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'


const state = {
  accessions: [],
  accessionsFilter: {
    billingType: '',
    firstName: '',
    lastName: '',
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
