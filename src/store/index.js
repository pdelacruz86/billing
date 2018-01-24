import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import billing from './modules/billing'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    billing
  }
})

export default store

