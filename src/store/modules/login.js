// import api from '../../api'
import * as types from '../types'
import router from '../../router'

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
    commit(types.LOGIN)

    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTA1ODkzNzY2MjF9.MqHRSfGklBn610d2JNRedcwm251UQZDO79axeq2w6Fc')

    router.push('/')
    // show spinner
    // api.localLogin(creds).then(response => {
    //   if (response.statusText !== 'OK') {
    //     return
    //   }
    //   const token = response.data.token
    //   localStorage.setItem('token', token)
    //   commit(types.LOGIN_SUCCESS)
    //   console.log(response)
    //   router.push('/')
    // },
    // response => {
    // })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
    commit(types.LOGOUT)
    router.push('/login')
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
