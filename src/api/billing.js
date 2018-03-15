import myAPI from './resources'
import config from '../config'
import axios from 'axios'

export default {
  getAll: function () {
    return myAPI.get(config.api_root + config.api_root_path + '/cases')
      .then(function (response) {
        return response
      })
  },
  create: function (accession) {
    debugger;
    return myAPI.post(config.api_root + config.api_root_path + '/cases', accession)
      .then(function (response) {
        return response
      })
  }
}
