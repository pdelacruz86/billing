import api from '../../api'
import * as types from '../mutation-types'
import router from '../../router'

const state = {
  username: localStorage.token === undefined ? '' : localStorage.token.match("[^:]*")[0].split(' ')[1],
  isLoggedIn: !!localStorage.getItem('token')
}

const mutations = {
  [types.LOGIN](state) {
    state.pending = true
  },
  [types.LOGIN_SUCCESS](state, username) {
    console.log(username)

    state.isLoggedIn = true
    state.pending = false
    state.username = username
  },
  [types.LOGOUT](state) {
    state.isLoggedIn = false

  }
}

const actions = {
  login({
    commit
  }, creds) {
    commit(types.LOGIN)
    commit(types.LOADING_START, 'Validating crendentials...');
    // show spinner
    api.localLogin(creds)
      .then(response => {
          if (response.data.Status === 'Error') {
            var error = {
              title: 'Error',
              message: 'Incorrect username or password',
              type: 'error'
            }

            commit(types.NOTIFY_ERRORS, error)
            return;
          }

          const token = response.data.token
          localStorage.setItem('token', token)
          commit(types.LOGIN_SUCCESS, creds.username)
          commit(types.LOADED_SUCCESS)
          console.log(response)
          router.push('/billing')
        },
        response => {})
  },
  logout({
    commit
  }) {
    localStorage.removeItem('token')
    commit(types.LOGOUT)
    router.push('/login')
  }
}

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  Accessions: state => {
    return state.AllAccessions;
  },
  currentUserName: state => state.username
}

export default {
  state,
  mutations,
  actions,
  getters
}
