import Vue from 'vue'
const _ = require('lodash')
import VueNotifications from 'vue-notifications'
const moment = require("moment");
import * as types from '../../mutation-types'

const mutation = {
  [types.SET_CURRENT_STEP](state, newValue) {
    state.currentstep = newValue
  },
}
export default mutation
