import Vue from 'vue'
import * as types from './mutation-types'
var _ = require('lodash')
  import VueNotifications from 'vue-notifications'
  
const mutation =  {
  [types.GET_ALL] (state, list) {
      state.caselist = list;
  },
  [types.SET_SELECTED_ACCESSION] (state, selectedAccession) {
    state.selectedAccession  = selectedAccession
  },
  [types.UPDATE_TEXT_SEARCH] (state, text) {
    debugger;

    state.searchText = text;
  }
}
export default mutation