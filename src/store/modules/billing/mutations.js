import Vue from 'vue'
import * as types from './mutation-types'
var _ = require('lodash')
import VueNotifications from 'vue-notifications'

const mutation = {
  [types.GET_ALL](state, list) {
    state.accessions = list;

  },
  [types.SET_SELECTED_ACCESSION](state, selectedAccession) {
    state.selectedAccession = selectedAccession
  },
  [types.UPDATE_TEXT_SEARCH](state, text) {
    state.searchText = text;
  },
  [types.UPDATE_ACCESSION](state, currentAccession) {
    var date = new Date();
    var finaldate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    debugger;
    //iterate through all accessions
    for (var i = 0; i < state.accessions.length; i++) {

      //if it is the accession
      if (currentAccession.AccessionID === state.accessions[i].AccessionID) {
        state.accessions[i] = currentAccession;

        //get the current accession
        var _accession = state.accessions[i];
        //get the caselist
        var caselist = _accession.Cases;

        //iterate through currentAccession cases
        for (var i = 0; i < caselist.length; i++) {
          var currentCase = caselist[i];

          if (currentCase.BillingType === "Select One") {
            _accession.TrigueStatus = "Pending";
          } else if (currentCase.BillingType === "Not Provided") {
            _accession.TrigueStatus = "Incomplete";
            break;
          } else if (
            currentCase.BillingType === "Direct" ||
            currentCase.BillingType === "Split"
          ) {
            _accession.TrigueStatus = "Complete";
          } else if (currentCase.BillingType === "Insurance") {
            if (currentCase.InsuranceType === "Not Provided") {
              _accession.TrigueTrigueStatus = "Incomplete";
              break;
            } else if (currentCase.InsuranceType === "Not Provided") {
              _accession.TrigueStatus = "Incomplete";
              break;
            } else if (currentCase.InsuranceType === "Medicare") {
              if (currentCase.HospitalStatus === "Not Provided") {
                _accession.TrigueStatus = "Incomplete";
                break;
              } else if (currentCase.HospitalTrigueStatus === "Not Provided") {
                _accession.TrigueStatus = "Incomplete";
                break;
              } else {
                _accession.TrigueStatus = "Complete";
              }
            } else {
              _accession.TrigueStatus = "Complete";
            }
          }
        }

        break;
      }
    }
  }
}
export default mutation
