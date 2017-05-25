import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/demo/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
