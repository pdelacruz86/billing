import Vue from 'vue'
import * as types from './mutation-types'
const _ = require('lodash')
import VueNotifications from 'vue-notifications'
const moment = require("moment");

const mutation = {
  [types.GET_ALL](state, list) {
    state.accessions = list;
  },
  [types.SET_FILTERS_WORKLIST](state, filterValue) {
  	state.worklist_filter = filterValue;
  }
}
export default mutation
