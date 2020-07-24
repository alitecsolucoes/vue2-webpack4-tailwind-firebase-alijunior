import store from '@/control/store'

import { RotasAuth_HasClienteSelecionado } from '../../control/router/RotasGuard'

const base_rota_manager = '/manager'

export default {
  path       : base_rota_manager,
  name       : 'manager',
  meta       : { menu: 'GESTOR', icon: 'account_balance', order: 0 },
  component  : () => import('./_manager'),
  redirect   : base_rota_manager + '/dashboard',
  beforeEnter: RotasAuth_HasClienteSelecionado,
  //   beforeEnter(to, from, next) {
  //     console.log(store)

  //     if (!store.getters['status/hasClienteAtivo']) {
  //       next({ name: 'select-active', query: { redirect: to.name } })
  //     } else {
  //       next()
  //     }
  //     // if (from.name != '/manager/dashboard') {
  //     //   next('/manager/dashboard')
  //     // } else {
  //     //   next()
  //     // }
  //     //if (1==1) {
  //     //} && store.getters.hasClienteAtivo) {
  //     //next()
  //     //} else {
  //     //}
  //   },
  children: [
    {
      path     : 'dashboard',
      name     : 'manager-dashboard',
      meta     : { menu: 'Dashboards', icon: 'dashboard', order: 1 },
      component: () => import('./dashboard/_private_dashboard')
    },
    {
      path     : 'select',
      name     : 'manager-select',
      meta     : { menu: 'Ativo', icon: 'dashboard', order: 2 },
      component: () => import('./dashboard/AlterarClienteAtivo')
    }
  ]
}
