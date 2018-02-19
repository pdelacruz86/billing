import api from '../../../api/billing.js'
import * as types from './mutation-types'
import * as globalTypes from '../../types'
import router from '../../../router'
var _ = require('lodash')

export const getAllCases = ({
  commit
}) => {
  commit(globalTypes.LOADING_START, 'Loading Cases...');
  debugger;

  api.getAll().then(function (response) {
    if (response.data.Status == "Error") {
      var error = {
        title: 'Loading pending cases Failed',
        message: 'Please contact support',
        type: 'error'
      }

      commit(globalTypes.NOTIFY_ERRORS, error)
    } else {
      commit(types.GET_ALL, response.data.Data)
      commit(globalTypes.LOADED_SUCCESS)
    }
  });
}

export const updateAccession = ({
  commit
}, accession) => {
  // commit(globalTypes.LOADING_START, 'Saving current Accession...');
  // debugger;

  // api.getAll().then(function (response) {
  //   if (response.data.Status == "Error") {
  //     var error = {
  //       title: 'Loading pending cases Failed',
  //       message: 'Please contact support',
  //       type: 'error'
  //     }

  //     commit(globalTypes.NOTIFY_ERRORS, error)
  //   } else {
  commit(types.UPDATE_ACCESSION, accession)
  //     commit(globalTypes.LOADED_SUCCESS)
  //   }
  // });


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
