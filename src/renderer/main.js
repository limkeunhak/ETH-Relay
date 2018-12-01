import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://192.168.219.187:8485';
axios.defaults.baseURL = 'http://49.164.52.128:8485';
// axios.defaults.baseURL = 'http://127.0.0.1:8545';
// console.log(axios.defaults.baseURL);
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
