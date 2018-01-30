import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import billing from './modules/billing'
import appGlobal from './modules/app-global.js'

//components
import createLogger from '../utils/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    billing,
    appGlobal
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger(), createPersistedState()]
    : [createPersistedState()]
})

export default store

