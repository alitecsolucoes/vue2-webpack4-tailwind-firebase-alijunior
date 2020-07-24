import Vue from 'vue'
import App from '@/App.vue'
import store from '@/control/store'
import AdminRouter from '@/control/router'
import '@/assets/css/init.css'
import '@/assets/css/tail.css'

Vue.config.productionTip = false
//Vue.config.devtools = true

new Vue({
  router: AdminRouter,
  store,
  render: h => h(App)
}).$mount('#alitec')
