import Vue from 'vue'
import * as types from './mutation-types'
const _ = require('lodash')
import VueNotifications from 'vue-notifications'
const moment = require("moment");

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
    //iterate through all accessions
    for (var i = 0; i < state.accessions.length; i++) {
      //if it is the accession
      if (currentAccession.AccessionID === state.accessions[i].AccessionID) {
        Vue.set(state.accessions, i, currentAccession)
      }
    }
  },
  [types.FILTER_DASHBOARD_DATA](state, filter) {
    // state.dashboardData = state.accessions
    ////filter data
    // state.dashboardData = state.accessions.filter((item) => {
    //   const beginDate = moment(filter.start);
    //   const endDate = moment(filter.end);

    //   console.log(beginDate, endDate, moment.unix(item.CreatedDate).isBetween(beginDate, endDate))

    //   if (moment.unix(item.CreatedDate).isBetween(beginDate, endDate)) return item
    // });
  },
  [types.SET_FILTER_DATES](state, data) {
    state.filterDates = data;
  }
}
export default mutation
