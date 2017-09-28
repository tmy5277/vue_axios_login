// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueMaterial from 'vue-material'
import axios from './config/http.js'
import store from './config/store.js'

Vue.config.productionTip = false;
Vue.use(vueMaterial);
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App }
})
