import * as types from '../types'

const state = {
  isLoggedIn: false // !!localStorage.getItem('token')
}

const mutations = {
  [types.LOGIN] (state) {
    state.pending = true
  },
  [types.LOGIN_SUCCESS] (state) {
    state.isLoggedIn = true
    state.pending = false
  },
  [types.LOGOUT] (state) {
    state.isLoggedIn = false
  }
}

const actions = {
  login ({ commit }, creds) {
    commit(types.LOGIN) // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        // localStorage.setItem('token', 'JWT')
        commit(types.LOGIN_SUCCESS)
        resolve()
      }, 1000)
    })
  },
  logout ({ commit }) {
    // localStorage.removeItem('token')
    commit(types.LOGOUT)
  }
}

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
