import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import login from './modules/login'
import billing from './modules/billing'
// import worklist from './modules/worklist'
import appGlobal from './modules/app-global.js'

//components
import createLogger from '../utils/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    login,
    app: appGlobal,
    wizard: billing
  },
  mutations: {

  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})

export default store
