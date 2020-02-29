import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import login from '@/components/login'
import fenye from '@/components/fenye'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/fenye',
      name: 'fenye',
      component: fenye
    }
  ]
})
