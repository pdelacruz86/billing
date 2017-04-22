import api from '../../api'
import * as types from '../types'

const state = {
  isLoggedIn: !!localStorage.getItem('token')
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
    console.log(creds)
    api.localLogin(creds).then(response => {
      debugger
      if (response.statusText !== 'OK') {
        return
      }
      const token = response.data.token
      localStorage.setItem('token', token)
      commit(types.LOGIN_SUCCESS)
    },
    response => {
    })
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     localStorage.setItem('token', 'JWT')
    //     commit(types.LOGIN_SUCCESS)
    //     resolve()
    //   }, 1000)
    // })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
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
