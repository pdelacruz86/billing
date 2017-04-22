import config from '../config'

import axios from 'axios'

export default axios.create({
  baseURL: config.api_root,
  timeout: 5000,
  headers: {
    'x-access-token': localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
})

