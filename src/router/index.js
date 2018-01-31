import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/dashboard/Home'
import Worklist from '@/components/views/worklist/index'
import Login from '@/components/views/Login/Login'
import CaseList from '@/components/views/case/list'
import CaseDetail from '@/components/views/case/details'
import Billing from '@/components/views/billing/index2'
import Blank from '@/components/views/billing/blank'
import AppMain from '@/components/layout/AppMain'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/', name: 'Home', component: AppMain,
      children: [
        { path: 'dashboard1', alias: '', component: Home, name: 'Dashboard', meta: {description: 'Overview of environment'} },
        { path: 'worklist', alias: '', component: Worklist, name: 'Worklist', meta: {description: 'worklist'} },
        { path: 'blank', alias: '', component: Blank, name: 'Blank', meta: {description: 'Blank Description'} }
      ]
    },
    { path: '/billing', component: AppMain, name: 'billing', meta: {description: 'test'},
      children: [
        { path: 'home', alias: '', component: Billing, name: 'Billing', meta: {description: 'Overview of environment'} },
        { path: '/billing/:id', component: Billing, name: 'Billing', meta: {title: "Billing", description: "details"}},
      ]  
    },
    { path: '/cases', component: AppMain, name: 'Cases', meta: {description: 'test'},
      children: [
        { path: '/list/', component: CaseList, name: 'List', meta: {title: "Case Details", description: "details"}},
        { path: '/cases/:id', component: CaseDetail, name: 'Details', meta: {title: "Case Details", description: "details"}},
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
