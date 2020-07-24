// import Loader from '@/control/Loader'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/control/store'

import BaseLayout from '@/layouts/BaseLayout'

// import { getRouteName, createPath, createPathParam } from './RotasUtil'

// import { RotasAuth_HasClienteSelecionado } from './RotasGuard'

// import manager_routes from './_manager_router'

Vue.use(VueRouter)

const rotas_admin = [
  {
    path     : '/',
    name     : 'home',
    component: BaseLayout,
  },
  {
    path    : '*',
    redirect: { name: 'home' }
  }
]
    //redirect : { name: 'login-check' },
    // children : [
    //   {
    //     path    : 'logoff',
    //     redirect: { name: 'logoff' }
    //   },
    //   {
    //     path    : 'login',
    //     redirect: { name: 'login' }
    //   },
    //   {
    //     path: 'admin',
    //     name: 'admin',
    //     meta: {
    //       auth : true,
    //       menu : 'ADMIN',
    //       icon : 'admin_panel_settings',
    //       order: 1
    //     },
    //     component: () => import('@/path/admin/_admin'),
    //     redirect : { name: 'admin-dashboard' },
    //     children : [
    //       {
    //         path     : 'dashboard',
    //         name     : 'admin-dashboard',
    //         component: () => import('@/path/admin/dashboard/_admin_dashboard'),
    //         meta     : { menu: 'Dashboard', icon: 'dashboard', order: 1 }
    //       },
    //       {
    //         path     : 'dashboard2',
    //         name     : 'admin-dashboard-2',
    //         component: () =>
    //           import('@/path/admin/dashboard/_admin_dashboard_2'),
    //         meta: { menu: 'Dashboard 2', icon: 'dashboard', order: 2 }
    //       }
    //     ]
    //   },
    //   {
    //     path     : 'auth',
    //     name     : 'auth',
    //     component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/_auth'),
    //     redirect : { name: 'auth-select' },
    //     children : [
    //       {
    //         path     : 'login',
    //         name     : 'login',
    //         // props: true,
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Login')
    //       },
    //       {
    //         path     : 'logoff',
    //         name     : 'logoff',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Logoff')
    //       },
    //       {
    //         path     : 'select',
    //         name     : 'auth-select',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Select')
    //       },
    //       {
    //         path     : 'google',
    //         name     : 'auth-google',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Google')
    //       },
    //       {
    //         path     : 'facebook',
    //         name     : 'auth-facebook',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Facebook')
    //       },
    //       {
    //         path     : 'smartphone',
    //         name     : 'auth-smartphone',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Smartphone')
    //       },
    //       {
    //         path     : 'email',
    //         name     : 'auth-email',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/Email')
    //       },
    //       {
    //         path     : 'signup',
    //         name     : 'auth-signup',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/EmailSignUp')
    //       },
    //       {
    //         path     : 'link',
    //         name     : 'auth-link',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/EmailLink')
    //       },
    //       {
    //         path     : 'password',
    //         name     : 'auth-password',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/EmailPassword')
    //       },
    //       {
    //         path     : 'recover',
    //         name     : 'auth-recover',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/EmailRecover')
    //       },
    //       {
    //         path     : 'signlink',
    //         name     : 'auth-signlink',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/LinkToLogin')
    //       },
    //       {
    //         path     : 'passlink',
    //         name     : 'auth-passlink',
    //         component: () => import(/* webpackChunkName: "auth" */ '@/path/auth/LinkToRecover')
    //       }
    //     ]
    //   },
    //   {
    //     path    : '*',
    //     redirect: { name: 'login' }
    //   }
    // ]



const AdminRouter = new VueRouter({
  mode  : 'history',
  // base: process.env.BASE_URL,
  routes: rotas_admin
})

AdminRouter.beforeEach((to, from, next) => {

  console.log(`>>> navigating to ${to.name} from ${from.name}`)

  if (to.matched.some(route => route.meta.auth)) {
    let authenticated = store.getters['auth/isActive']
    if (!authenticated) {
      next({ name: 'login', params: { redirect: to, from: from } })
    } else {
      next()
    }
  } else {
    next()
  }
})

// MainRouter.beforeEach((to, from, next) => {
//   //if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   //else next()
//   next()
// })

// MainRouter.afterEach(to => {
//   //console.log(EstruturaRotas.app.$vuetify)

//   if (to.matched.some(({ name }) => name === '/admin')) {
//     MainRouter.app.$vuetify.theme.themes.light.alitec = '#8196F3'
//   } else if (to.matched.some(({ name }) => name === '/gestor')) {
//     MainRouter.app.$vuetify.theme.themes.light.alitec = '#dCAF50'
//   }
//   //else {
//   //  EstruturaRotas.app.$vuetify.theme.themes.light.alitec = '#005678' //cor original
//   //}
// })

// const getRotaCustomerDetail = key => {
//   return getRouteName(rota_admin_customer + rota_item_detalhes) // + '/@' + key
// }

// const getRotaCustomerList = key => {
//   return getRouteName(rota_admin_customer + rota_item_listagem) // + '/@' + key
// }

// export { getRotaCustomerDetail, getRotaCustomerList }

export default AdminRouter
