import myAPI from './resources'
import config from '../config'
import axios from 'axios'

export default {
  getAll: function () {
    return myAPI.get(config.api_root + config.api_root_path + '/cases', {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
      .then(function (response) {
        return response
      })
  },
  create: function (accession) {
    debugger;
    return myAPI.post(config.api_root + config.api_root_path + '/cases', accession, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
      .then(function (response) {
        return response
      })
  },
  lockAccession: function (accession) {
    return myAPI.post(config.api_root + config.api_root_path + '/cases/LockAccession', accession, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
  },
  unlockAccession: function (accession) {
    return myAPI.post(config.api_root + config.api_root_path + '/cases/UnlockAccession', accession, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
  }
}
