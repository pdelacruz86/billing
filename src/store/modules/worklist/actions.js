import api from '../../../api/billing.js'
import * as types from './mutation-types'
import * as globalTypes from '../../types'
import router from '../../../router'
var _ = require('lodash')

export const getAllCasesWorklist = ({
  commit,
  rootState
}) => {
  commit(globalTypes.LOADING_START, 'Loading Cases...');
  commit(types.GET_ALL, rootState.accessions)
  console.log(rootState.accessions)
  commit(globalTypes.LOADED_SUCCESS)
}

export const setWorklistFilters = ({
  commit,
  rootState
}, filterValue) => {
  // commit(types.GET_ALL, rootState.accessions)
  commit(types.SET_FILTERS_WORKLIST, filterValue)
  commit(globalTypes.LOADED_SUCCESS)
}

// export const updateWorklistData = ({
//   commit
// }, accession) = {
//   commit(worklistTypes.UPDATE_WORKLIST_DATA, accession)
// }
