// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

require('./assets/global/plugins/font-awesome/css/font-awesome.min.css')
require('./assets/global/plugins/simple-line-icons/simple-line-icons.min.css')
require('./assets/global/plugins/bootstrap/css/bootstrap.min.css')
require('./assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css')
require('./assets/layouts/layout3/css/layout.min.css')
require('./assets/layouts/layout3/css/themes/default.min.css')
require('./assets/layouts/layout3/css/custom.min.css')
require('./assets/global/css/components-rounded.css')

import VueNotifications from 'vue-notifications' //https://github.com/se-panfilov/vue-notifications
import miniToastr from 'mini-toastr'

import {Tabs, Tab} from 'vue-tabs-component';
import BlockUI from 'vue-blockui'
import VeeValidate from 'vee-validate';
import VueGoodTable from 'vue-good-table';

// If using mini-toastr, provide additional configuration
const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({types: toastTypes})

// Here we setup messages output to `mini-toastr`
function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, 7000, cb)
}

// Binding for methods .success(), .error() and etc. You can specify and map your own methods here.
// Required to pipe our output to UI library (mini-toastr in example here)
// All not-specified events (types) would be piped to output in console.
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.use(VueNotifications, options)// VueNotifications have auto install but if we want to specify options we've got to do it manually.
Vue.use(VeeValidate);
Vue.use(BlockUI)
// Vue.use(VueFormWizard)
Vue.use(VueGoodTable);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

