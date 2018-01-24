import Vue from 'vue'
import * as types from './mutation-types'
var _ = require('lodash')
  import VueNotifications from 'vue-notifications'
  
const mutation =  {
  [types.GET_ALL] (state, list) {
      state.caselist = list;
  }
}
export default mutation