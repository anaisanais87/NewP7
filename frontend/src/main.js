import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import Axios from 'axios'
import router from './Routes'

Vue.use(Router)

Vue.prototype.$http = Axios

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
