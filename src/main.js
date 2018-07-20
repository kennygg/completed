// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import './assets/bootstrap/js/bootstrap.min.js'
import './assets/bootstrap/css/bootstrap.min.css'
import sideheader from './components/SideHeader.vue'
import sidebar from './components/Sidebar.vue'
import contentbar from './components/Contentbar.vue'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.component('sideheader',sideheader)
Vue.component('sidebar',sidebar)
Vue.component('contentbar',contentbar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>', 
})
