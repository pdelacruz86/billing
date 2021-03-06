import Vue from 'vue'
import * as types from '../mutation-types'
import loadingUrl from '../../assets/global/img/ajax-loading.gif'
import VueNotifications from 'vue-notifications'
const moment = require("moment");

const initialState = {
  connection_id: '',
  accessions: [],
  accessions_by_date: [],
  selectedAccession: {},
  accessions_filter: {
    caseNumber: "",
    accessionID: "",
    billingType: "",
    insuranceType: "",
    hospitalStatus: "",
    patientFullName: "",
    patientID: "",
    triageStatus: "",
    clientName: "",
    clientNumber: "",
    startDate: moment()
      .subtract(7, "days")
      .toDate(),
    endDate: new Date(),
    completedDate: ""
  },
  accessions_sorting: {
    sortBy: 'Accesssion',
    sortDirection: 'Desc'
  },
  showBlockUI: false,
  loadingImage: loadingUrl,
  loadingMessage: 'loading...',
  searchText: ''
}

const state = Object.assign({}, initialState)

const mutations = {
  [types.GET_ALL](state, list) {
    state.accessions = list;
    state.accessions_by_date = state.accessions.filter(accession => {
      let accessionFilter = state.accessions_filter
      let beginDate = moment(accessionFilter.startDate);
      let endDate = moment(accessionFilter.endDate);

      if (accessionFilter !== undefined) {
        if (beginDate.format("YYYYMMDD HH:mm") === endDate.format("YYYYMMDD HH:mm")) {
          let begin_time = `${beginDate.format('YYYY-MM-DD')}T00:00:00.000Z`
          let end_time = `${endDate.format('YYYY-MM-DD')}T23:59:00.000Z`

          if (moment.unix(accession.CreatedDate).isBetween(begin_time, end_time)) return accession
        } else {
          if (moment.unix(accession.CreatedDate).isBetween(beginDate, endDate)) return accession
        }
      }
    })
  },
  [types.SET_SELECTED_ACCESSION](state, selectedAccession) {
    debugger;
    console.log(state.connection_id, selectedAccession, selectedAccession === {})
    if (selectedAccession === {}) {

    }
    selectedAccession.ConectionID = state.connection_id
    state.selectedAccession = selectedAccession
  },
  [types.UPDATE_TEXT_SEARCH](state, text) {
    state.searchText = text;
  },
  [types.UPDATE_ACCESSION](state, currentAccession) {
    //iterate through all accessions
    for (var i = 0; i < state.accessions.length; i++) {
      //if it is the accession
      if (currentAccession.AccessionID === state.accessions[i].AccessionID) {
        Vue.set(state.accessions, i, currentAccession)
        break;
      }
    }

    state.accessions_by_date = state.accessions.filter(accession => {
      let accessionFilter = state.accessions_filter
      let beginDate = moment(accessionFilter.startDate);
      let endDate = moment(accessionFilter.endDate);

      if (accessionFilter !== undefined) {
        if (beginDate.format("YYYYMMDD HH:mm") === endDate.format("YYYYMMDD HH:mm")) {
          let begin_time = `${beginDate.format('YYYY-MM-DD')}T00:00:00.000Z`
          let end_time = `${endDate.format('YYYY-MM-DD')}T23:59:00.000Z`
          console.log(begin_time, '::::', end_time)

          if (moment.unix(accession.CreatedDate).isBetween(begin_time, end_time)) return accession
        } else {
          if (moment.unix(accession.CreatedDate).isBetween(beginDate, endDate)) return accession
        }
      }
    })
  },
  [types.SET_FILTERS_WORKLIST](state, filterValue) {
    state.accessions_filter = filterValue;
  },
  [types.SET_FILTER_DATES](state, data) {
    state.accessions_filter.startDate = data.start;
    state.accessions_filter.endDate = data.end;

    state.accessions_by_date = state.accessions.filter(accession => {
      let accessionFilter = state.accessions_filter
      let beginDate = moment(accessionFilter.startDate);
      let endDate = moment(accessionFilter.endDate);

      if (accessionFilter !== undefined) {
        if (beginDate.format("YYYYMMDD HH:mm") === endDate.format("YYYYMMDD HH:mm")) {
          let begin_time = `${beginDate.format('YYYY-MM-DD')}T00:00:00.000Z`
          let end_time = `${endDate.format('YYYY-MM-DD')}T23:59:00.000Z`

          if (moment.unix(accession.CreatedDate).isBetween(begin_time, end_time)) return accession
        } else {
          if (moment.unix(accession.CreatedDate).isBetween(beginDate, endDate)) return accession
        }
      }
    })
  },
  [types.LOADED_SUCCESS](state) {
    state.showBlockUI = false
  },
  [types.LOADING_START](state, message) {
    state.loadingMessage = message
    state.showBlockUI = true
  },
  [types.NOTIFY_ERRORS](state, data) {
    if (data.type == 'error')
      VueNotifications.error(data)

    if (data.type == 'success')
      VueNotifications.success(data)

    if (data.type == 'warn')
      VueNotifications.warn(data)

    if (data.type == 'info')
      VueNotifications.info(data)

    state.showBlockUI = false
  },
  [types.RESET_STATE](state) {
    for (let prop in state) {
      state[prop] = initialState[prop]
    }
  },
  [types.SET_CONNECTION_ID](state, connID) {
    state.connection_id = connID
  },
  [types.UPDATE_ACCESSION_LOCKING](state, currentAccession) {
    debugger;
    //validate if it is the accession i am working actually 
    if (state.selectedAccession.AccessionID !== currentAccession.AccessionID) {
      //iterate through all accessions
      for (var i = 0; i < state.accessions.length; i++) {
        //if it is the accession
        if (currentAccession.AccessionID === state.accessions[i].AccessionID) {
          Vue.set(state.accessions, i, currentAccession)
          break;
        }
      }

      state.accessions_by_date = state.accessions.filter(accession => {
        let accessionFilter = state.accessions_filter
        let beginDate = moment(accessionFilter.startDate);
        let endDate = moment(accessionFilter.endDate);

        if (accessionFilter !== undefined) {
          if (beginDate.format("YYYYMMDD HH:mm") === endDate.format("YYYYMMDD HH:mm")) {
            let begin_time = `${beginDate.format('YYYY-MM-DD')}T00:00:00.000Z`
            let end_time = `${endDate.format('YYYY-MM-DD')}T23:59:00.000Z`
            console.log(begin_time, '::::', end_time)

            if (moment.unix(accession.CreatedDate).isBetween(begin_time, end_time)) return accession
          } else {
            if (moment.unix(accession.CreatedDate).isBetween(beginDate, endDate)) return accession
          }
        }
      })
    }
  },
  [types.SYNC_UPDATE_ACCESSION_FROM_SERVER](state, currentAccession) {
    if (state.selectedAccession.AccessionID !== currentAccession.AccessionID) {

      //iterate through all accessions
      for (var i = 0; i < state.accessions.length; i++) {
        //if it is the accession
        if (currentAccession.AccessionID === state.accessions[i].AccessionID) {
          Vue.set(state.accessions, i, currentAccession)
          break;
        }
      }

      state.accessions_by_date = state.accessions.filter(accession => {
        let accessionFilter = state.accessions_filter
        let beginDate = moment(accessionFilter.startDate);
        let endDate = moment(accessionFilter.endDate);

        if (accessionFilter !== undefined) {
          if (beginDate.format("YYYYMMDD HH:mm") === endDate.format("YYYYMMDD HH:mm")) {
            let begin_time = `${beginDate.format('YYYY-MM-DD')}T00:00:00.000Z`
            let end_time = `${endDate.format('YYYY-MM-DD')}T23:59:00.000Z`
            console.log(begin_time, '::::', end_time)

            if (moment.unix(accession.CreatedDate).isBetween(begin_time, end_time)) return accession
          } else {
            if (moment.unix(accession.CreatedDate).isBetween(beginDate, endDate)) return accession
          }
        }
      })
    }
  },

}

export default {
  state,
  mutations,
}
