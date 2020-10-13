import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
// import Routes from './Routes'
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

// Vue.config.productionTip = false

// Vue.use(Router)

// const router = new Router({
//   routes: Routes,
//   mode: 'history'
// })

// new Vue({
//   render: h => h(App),
//   router: router
// }).$mount('#app')
