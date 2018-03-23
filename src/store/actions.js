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

export const syncAccessionFromServer = ({
  commit
}, accession) => {
  commit(types.SYNC_UPDATE_ACCESSION_FROM_SERVER, accession)
};

export const syncAccessionLockingFromServer = ({
  commit
}, accession) => {
  commit(types.UPDATE_ACCESSION_LOCKING, accession)
}

export const setSelectedAccession = ({
  commit
}, selectedAccession) => {
  commit(types.SET_SELECTED_ACCESSION, selectedAccession)
};

export const setCurrentStep = ({
  commit
}, stepValue) => {
  commit(types.SET_CURRENT_STEP, stepValue)
};

export const updateTextSearch = ({
  commit
}, text) => {
  commit(types.UPDATE_TEXT_SEARCH, text)
};

export const resetState = ({
  commit
}) => {
  commit(types.RESET_STATE)
}

export const lockAccession = ({
  commit
}, accession) => {
  debugger;
  api.lockAccession(accession).then(function () {
    console.log('accession locked')
  })
}


export const unlockAccession = ({
  commit
}, accession) => {
  api.unlockAccession(accession).then(function () {
    console.log('accession unlocked')
  })
}

export const setConnectionID = ({
  commit
}, connectionid) => {
  commit(types.SET_CONNECTION_ID, connectionid);
}
