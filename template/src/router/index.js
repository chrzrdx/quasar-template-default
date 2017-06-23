import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => System.import(`@/${component}.vue`)
}

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: load('Hello') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
