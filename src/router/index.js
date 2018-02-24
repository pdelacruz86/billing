import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/dashboard/Home'
import Worklist from '@/components/views/worklist/index'
import Login from '@/components/views/Login/Login'
import CaseList from '@/components/views/case/list'
import CaseDetail from '@/components/views/case/details'
import Billing from '@/components/views/billing/index2'
import Blank from '@/components/views/blank'
import Soon from '@/components/views/soon'
import AppMain from '@/components/layout/AppMain'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: AppMain,
      children: [{
          path: '/',
          component: Home,
          name: 'Dashboard',
          meta: {
            description: 'Worklist'
          }
        }, {
          path: '/worklist',
          component: Worklist,
          name: 'Worklist',
          meta: {
            description: 'Worklist'
          }
        },
        {
          path: '/billing',
          component: Billing,
          name: 'Billing',
          meta: {
            description: 'test'
          },
          children: [{
            path: '/billing/:id',
            component: Billing,
            name: 'Accession',
            meta: {
              title: "Billing",
              description: "details"
            }
          }]
        },
        {
          path: '/blank',
          alias: '',
          component: Blank,
          name: 'Blank',
          meta: {
            description: 'Blank Description'
          }
        },
        {
          path: '/soon',
          alias: '',
          component: Soon,
          name: 'Blank',
          meta: {
            description: 'Blank Description'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/blank'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // work-around to get to the Vuex store (as of Vue 2.0)
  var token = localStorage.getItem('token')
  if (!token && to.name !== 'Login') {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
