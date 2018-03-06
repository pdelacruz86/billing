import * as types from './mutation-types'
import api from '../api/billing.js'

export const getAllCases = ({
  commit
}) => {
  commit(types.LOADING_START, 'Loading Cases...');

  api.getAll().then(function (response) {
    if (response.data.Status == "Error") {
      var error = {
        title: 'Loading pending cases Failed',
        message: 'Please contact support',
        type: 'error'
      }

      commit(types.NOTIFY_ERRORS, error)
    } else {
      commit(types.GET_ALL, response.data.Data)
      commit(types.LOADED_SUCCESS)
    }
  });
}

export const setWorklistFilters = ({
  commit,
  state
}, filterValue) => {
  debugger;
  // commit(types.GET_ALL, rootState.accessions)
  commit(types.SET_FILTERS_WORKLIST, filterValue)
  commit(types.LOADED_SUCCESS)
}

export const setFilterDates = ({
  commit
}, dates) => {
  commit(types.SET_FILTER_DATES, dates)
}


export const setLoading = ({
  commit
}, loaded, message) => {
  if (loaded) {
    commit(types.LOADING_START, message) // show spinner
  } else {
    commit(types.LOADED_SUCCESS) // hide spinner
  }
}

export const removeLoading = ({
  commit
}) => {
  commit(types.LOADED_SUCCESS) // hide spinner
}

export const updateAccession = ({
  commit
}, accession) => {
  commit(types.LOADING_START, 'Saving current Accession...');

  api.create(accession).then(function (response) {
    if (response.data.Status == "Error") {
      var error = {
        title: 'error saving',
        message: 'Please contact support',
        type: 'error'
      }

      commit(types.NOTIFY_ERRORS, error)
    } else {
      commit(types.UPDATE_ACCESSION, accession)
      commit(types.LOADED_SUCCESS)
    }
  });
}

export const setSelectedAccession = ({
  commit
}, selectedAccession) => {
  commit(types.SET_SELECTED_ACCESSION, selectedAccession)
};

export const updateTextSearch = ({
  commit
}, text) => {
  commit(types.UPDATE_TEXT_SEARCH, text)
};
