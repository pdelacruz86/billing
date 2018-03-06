import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
  import ('@/components/views/dashboard/Home')
const Worklist = () =>
  import ('@/components/views/worklist/index')
const Login = () =>
  import ('@/components/views/Login/Login')
const CaseList = () =>
  import ('@/components/views/case/list')
const CaseDetail = () =>
  import ('@/components/views/case/details')
const Billing = () =>
  import ('@/components/views/billing/index2')
const Blank = () =>
  import ('@/components/views/blank')
const Soon = () =>
  import ('@/components/views/soon')
const AppMain = () =>
  import ('@/components/layout/AppMain')

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/billing',
      name: '',
      component: AppMain,
      children: [{
        path: '/billing',
        component: Home,
        name: 'Dashboard',
        meta: {
          description: 'Worklist'
        }
      }, {
        path: '/billing/worklist',
        component: Worklist,
        name: 'Worklist',
        meta: {
          description: 'Worklist'
        }
      }, {
        path: '/billing/new',
        component: Billing,
        name: 'Billing',
        meta: {
          description: 'test'
        }
      }, {
        path: '/billing/details/:id',
        component: Billing,
        name: 'Accession',
        meta: {
          title: "Billing",
          description: "details"
        }
      }, {
        path: '/billing/search',
        component: Billing,
        name: 'Accession',
        meta: {
          title: "Billing",
          description: "details"
        }
      }, {
        path: '/billing/blank',
        alias: '',
        component: Blank,
        name: 'Blank',
        meta: {
          description: 'Blank Description'
        }
      }, {
        path: '/billing/soon',
        alias: '',
        component: Soon,
        name: 'Blank',
        meta: {
          description: 'Blank Description'
        }
      }]
    },
    {
      path: '*',
      redirect: '/billing/'
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
