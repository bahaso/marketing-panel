import Vue from 'vue'
import Router from 'vue-router'
import Summary from '@/pages/statistics/Summary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary
    }
  ]
})
