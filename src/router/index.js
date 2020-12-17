import Vue from 'vue'
import Router from 'vue-router'
import bofore from '@/components/bofore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bofore',
      name: 'bofore',
      component: bofore
    }
  ]
})
