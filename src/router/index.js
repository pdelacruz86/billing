import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/dashboard/Home'
import Login from '@/components/views/Login/Login'
import Store from '@/components/views/stores/stores'
import AppMain from '@/components/layout/AppMain'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    {
      path: '/',
      name: 'Home',
      component: AppMain,
      children: [
        {
          path: 'dashboard1',
          alias: '',
          component: Home,
          name: 'Panel Inicio',
          meta: {description: 'Overview of environment'}
        }, {
          path: 'bancas',
          component: Store,
          name: 'Bancas',
          meta: {description: 'Simple and advance table in CoPilot'}
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // work-around to get to the Vuex store (as of Vue 2.0)
  var token = localStorage.getItem('token')
  if (!token && to.name !== 'Login') {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
