import Vue from 'vue'
import * as types from './mutation-types'
const _ = require('lodash')
import VueNotifications from 'vue-notifications'
const moment = require("moment");

const mutation = {
  [types.GET_ALL](state, list) {
    state.worklist_data = list;
  },
  [types.SET_FILTERS_WORKLIST](state, filterValue) {
    console.log(filterValue)
    state.worklist_filter = filterValue;
  },
  [types.UPDATE_WORKLIST_DATA](state, currentAccession) {
    //iterate through all accessions
    for (var i = 0; i < state.worklist_data.length; i++) {
      //if it is the accession
      if (currentAccession.AccessionID === state.worklist_data[i].AccessionID) {
        Vue.set(state.worklist_data, i, currentAccession)
      }
    }
  }
}
export default mutation
