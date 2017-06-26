require(`./themes/app.${__THEME}.styl`)

import Vue from 'vue'
import Quasar from 'quasar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

import 'quasar-extras/fontawesome'
// import { } from 'quasar-extras/animate'

sync(store, router) // sync router with vuex store

Vue.use(VueAxios, axios) // bind axios to this.$http
Vue.use(Quasar)

Vue.config.productionTip = false

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
