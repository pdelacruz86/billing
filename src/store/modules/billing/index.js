import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'


const state = {
  caselist: [],
  selectedAccession: {},
  searchText: ''
}

export default
{
  state,
  getters,
  actions,
  mutations
}