// import api from '../../api'
import * as types from '../types'
import loadingUrl from '../../assets/global/img/ajax-loading.gif'
import VueNotifications from 'vue-notifications'

const state = {
  showBlockUI: false,
  loadingImage: loadingUrl,
  loadingMessage: 'loading...'
}

const mutations = {
  [types.LOADED_SUCCESS] (state) {
    state.showBlockUI= false
  },
  [types.LOADING_START] (state, message) {
    state.loadingMessage = message
    state.showBlockUI = true
  },
  [types.NOTIFY_ERRORS] (state, data) {
    if(data.type == 'error')
      VueNotifications.error(data)

    if(data.type == 'success')
      VueNotifications.success(data)

    if(data.type == 'warn')
      VueNotifications.warn(data)

    if(data.type == 'info')
      VueNotifications.info(data)

    state.showBlockUI= false
  }
}

const actions = {
  setLoading ({ commit}, loaded, message) {
    if (loaded) {
      commit(types.LOADING_START, message) // show spinner
    }
    else{
      commit(types.LOADED_SUCCESS) // show spinner
    }
  }
}

const getters = {
  showBlockUI: state => {
    return state.showBlockUI
  },
  loadingImage: state => {
    return state.loadingImage
  },
  loadingMessage: state => {
    return state.loadingMessage
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}