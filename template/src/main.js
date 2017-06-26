require(`./themes/app.${__THEME}.styl`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

sync(store, router) // vuex-router-sync

Vue.config.productionTip = false
Vue.use(Quasar)

import 'quasar-extras/fontawesome'
// import { } from 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
