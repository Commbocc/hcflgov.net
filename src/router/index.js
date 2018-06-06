import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let redirectUrl = 'https://hillsboroughcounty.org'

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '*',
    beforeEnter: (to, from, next) => {
      window.location.replace(redirectUrl + to.fullPath)
    }
  }]
})
