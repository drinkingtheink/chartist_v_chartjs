import Vue from 'vue'
import Router from 'vue-router'
import comparisonStage from '@/components/comparisonStage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'comparisonStage',
      component: comparisonStage
    }
  ]
})
