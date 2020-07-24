import Loader from '@/control/Loader'
import Vue from 'vue'
import VueRouter from 'vue-router'

import { getRouteName, createPath, createPathParam } from './RotasUtil'

import { RotasAuth_HasClienteSelecionado } from './RotasGuard'

import manager_routes from './manager/_manager_router'

Vue.use(VueRouter)

// const basepath = '../path' //process.env.BASE_URL + 'src/path'

// rotas raiz
const rota_admin = '/admin'
const rota_auth = '/auth'
const rota_private = '/manager'
const rota_public = '/public'
const rota_sales = '/sales'

// sub-rotas
const rota_sub_auth = '/auth'
const rota_sub_bill = '/bill'
const rota_sub_menu = '/menu'
const rota_sub_config = '/config'
const rota_sub_customer = '/customer'
const rota_sub_dashboard = '/dashboard'
const rota_sub_flow = '/flow'
const rota_sub_history = '/history'
const rota_sub_income = '/income'
const rota_sub_management = '/management'
const rota_sub_money = '/money'
const rota_sub_order = '/order'
const rota_sub_params = '/params'
const rota_sub_payment = '/payment'
const rota_sub_private = '/private'
const rota_sub_provider = '/provider'
const rota_sub_sales = '/sales'
const rota_sub_status = '/status'
const rota_sub_users = '/users'

// // telas

const rota_item_abertura = '/opening'
const rota_item_acessos = '/views'
const rota_item_alterar = '/update'
const rota_item_bemvindo = '/start'
const rota_item_bloqueio = '/lock'
const rota_item_caixasdetalhes = '/detail'
const rota_item_caixaslistagem = '/list'
const rota_item_caracteristicas = '/features'
const rota_item_clienteslistagem = '/list'
const rota_item_clientespermissoes = '/allowance'
const rota_item_configuracoes = '/config'
const rota_item_dados = '/data'
const rota_item_dashboard = '/dashboard'
const rota_item_detalhes = '/detail'
const rota_item_emaberto = '/open'
const rota_item_ematraso = '/late'
const rota_item_history = '/history'
const rota_item_listagem = '/list'
const rota_item_login = '/login'
const rota_item_maisvendidos = '/bestsellers'
const rota_item_menosvendidos = '/lesssold'
const rota_item_naopagos = '/unpaid'
const rota_item_novo = '/new'
const rota_item_pagamento = '/payment'
const rota_item_pagos = '/paid'
const rota_item_parametros = '/params'
const rota_item_pedido = '/order'
const rota_item_perfil = '/profile'
const rota_item_permissoes = '/allowance'
const rota_item_porperiodo = '/cycle'
const rota_item_preferencias = '/preferences'
const rota_item_produto = '/commodity'
const rota_item_register = '/register'
const rota_item_restaurante = '/pub'
const rota_item_resumo = '/summary'
const rota_item_status = '/status'
const rota_item_tema = '/theme'
const rota_item_todos = '/all'
const rota_item_vendas = '/sales'

// portugues
// const pt_rota_item_abertura = '/abertura'
// const pt_rota_item_acessos = '/acessos'
// const pt_rota_item_alterar = '/alterar'
// const pt_rota_item_bemvindo = '/bemvindo'
// const pt_rota_item_bloqueio = '/bloqueio'
// const pt_rota_item_caixasdetalhes = '/caixasdetalhes'
// const pt_rota_item_caixaslistagem = '/caixaslistagem'
// const pt_rota_item_caracteristicas = '/caracteristicas'
// const pt_rota_item_clienteslistagem = '/clienteslistagem'
// const pt_rota_item_clientespermissoes = '/clientespermissoes'
// const pt_rota_item_configuracoes = '/configuracoes'
// const pt_rota_item_dados = '/dados'
// const pt_rota_item_dashboard = '/dashboard'
// const pt_rota_item_detalhes = '/detalhes'
// const pt_rota_item_emaberto = '/emaberto'
// const pt_rota_item_ematraso = '/ematraso'
// const pt_rota_item_history = '/history'
// const pt_rota_item_listagem = '/listagem'
// const pt_rota_item_login = '/login'
// const pt_rota_item_maisvendidos = '/maisvendidos'
// const pt_rota_item_menosvendidos = '/menosvendidos'
// const pt_rota_item_naopagos = '/naopagos'
// const pt_rota_item_novo = '/novo'
// const pt_rota_item_pagamento = '/pagamento'
// const pt_rota_item_pagos = '/pagos'
// const pt_rota_item_parametros = '/parametros'
// const pt_rota_item_pedido = '/pedido'
// const pt_rota_item_permissoes = '/permissoes'
// const pt_rota_item_porperiodo = '/porperiodo'
// const pt_rota_item_preferencias = '/preferencias'
// const pt_rota_item_produto = '/produto'
// const pt_rota_item_register = '/register'
// const pt_rota_item_restaurante = '/restaurante'
// const pt_rota_item_resumo = '/resumo'
// const pt_rota_item_status = '/status'
// const pt_rota_item_tema = '/tema'
// const pt_rota_item_todos = '/todos'
// const pt_rota_item_vendas = '/vendas'

const rota_admin_config = rota_admin + rota_sub_config
const rota_admin_config_dashboard = rota_admin_config + rota_item_dashboard
const rota_admin_config_parametros = rota_admin_config + rota_item_parametros
const rota_admin_config_preferencias =
  rota_admin_config + rota_item_preferencias
const rota_admin_config_profile = rota_admin_config + rota_item_perfil
const rota_admin_config_tema = rota_admin_config + rota_item_tema
const rota_admin_customer = rota_admin + rota_sub_customer
const rota_admin_customer_alterar = rota_admin_customer + rota_item_alterar
const rota_admin_customer_bloqueio = rota_admin_customer + rota_item_bloqueio
const rota_admin_customer_detalhes = rota_admin_customer + rota_item_detalhes
const rota_admin_customer_listagem = rota_admin_customer + rota_item_listagem
const rota_admin_customer_novo = rota_admin_customer + rota_item_novo
const rota_admin_customer_permissoes =
  rota_admin_customer + rota_item_permissoes
const rota_admin_dashboard = rota_admin + rota_sub_dashboard
const rota_admin_management = rota_admin + rota_sub_management
const rota_admin_management_acessos = rota_admin_management + rota_item_acessos
const rota_admin_management_clienteslistagem =
  rota_admin_management + rota_item_clienteslistagem
const rota_admin_management_clientespermissoes =
  rota_admin_management + rota_item_clientespermissoes
const rota_admin_management_dados = rota_admin_management + rota_item_dados
const rota_admin_management_dashboard =
  rota_admin_management + rota_item_dashboard
const rota_admin_management_vendas = rota_admin_management + rota_item_vendas
const rota_admin_money = rota_admin + rota_sub_money
const rota_admin_money_bill = rota_admin_money + rota_sub_bill
const rota_admin_money_bill_emaberto =
  rota_admin_money_bill + rota_item_emaberto
const rota_admin_money_bill_ematraso =
  rota_admin_money_bill + rota_item_ematraso
const rota_admin_money_bill_naopagos =
  rota_admin_money_bill + rota_item_naopagos
const rota_admin_money_bill_novo = rota_admin_money_bill + rota_item_novo
const rota_admin_money_bill_pagos = rota_admin_money_bill + rota_item_pagos
const rota_admin_money_bill_resumo = rota_admin_money_bill + rota_item_resumo
const rota_admin_money_bill_todos = rota_admin_money_bill + rota_item_todos
const rota_admin_money_dashboard = rota_admin_money + rota_item_dashboard
const rota_admin_money_flow = rota_admin_money + rota_sub_flow
const rota_admin_money_flow_abertura =
  rota_admin_money_flow + rota_item_abertura
const rota_admin_money_flow_listagem =
  rota_admin_money_flow + rota_item_listagem
const rota_admin_money_flow_resumo = rota_admin_money_flow + rota_item_resumo
const rota_admin_users = rota_admin + rota_sub_users
const rota_admin_users_alterar = rota_admin_users + rota_item_alterar
const rota_admin_users_detalhes = rota_admin_users + rota_item_detalhes
const rota_admin_users_listagem = rota_admin_users + rota_item_listagem
const rota_admin_users_permissoes = rota_admin_users + rota_item_permissoes
const rota_auth_login = rota_auth + rota_item_login
const rota_auth_register = rota_auth + rota_item_register
const rota_private_commodity = rota_private + rota_sub_menu
const rota_private_commodity_alterar =
  rota_private_commodity + rota_item_alterar
const rota_private_commodity_detalhes =
  rota_private_commodity + rota_item_detalhes
const rota_private_commodity_listagem =
  rota_private_commodity + rota_item_listagem
const rota_private_commodity_novo = rota_private_commodity + rota_item_novo
const rota_private_customer = rota_private + rota_sub_customer
const rota_private_customer_alterar = rota_private_customer + rota_item_alterar
const rota_private_customer_detalhes =
  rota_private_customer + rota_item_detalhes
const rota_private_customer_listagem =
  rota_private_customer + rota_item_listagem
const rota_private_customer_novo = rota_private_customer + rota_item_novo
const rota_private_dashboard = rota_private + rota_item_dashboard
const rota_private_income = rota_private + rota_sub_income
const rota_private_income_caixasdetalhes =
  rota_private_income + rota_item_caixasdetalhes
const rota_private_income_caixaslistagem =
  rota_private_income + rota_item_caixaslistagem
const rota_private_income_detalhes = rota_private_income + rota_item_detalhes
const rota_private_income_listagem = rota_private_income + rota_item_listagem
const rota_private_income_resumo = rota_private_income + rota_item_resumo
const rota_private_params = rota_private + rota_item_parametros
const rota_private_params_configuracoes =
  rota_private_params + rota_item_configuracoes
const rota_private_sales = rota_private + rota_sub_sales
const rota_private_sales_maisvendidos =
  rota_private_sales + rota_item_maisvendidos
const rota_private_sales_menosvendidos =
  rota_private_sales + rota_item_menosvendidos
const rota_private_sales_porperiodo = rota_private_sales + rota_item_porperiodo
const rota_private_sales_resumo = rota_private_sales + rota_item_resumo
const rota_public_bemvindo = rota_public + rota_item_bemvindo
const rota_public_caracteristicas = rota_public + rota_item_caracteristicas
const rota_public_produto = rota_public + rota_item_produto
const rota_sales_historico = rota_sales + rota_item_history
const rota_sales_payment = rota_sales + rota_item_pagamento
const rota_sales_pedido = rota_sales + rota_item_pedido
const rota_sales_provider = rota_sales + rota_item_restaurante
const rota_sales_status = rota_sales + rota_item_status

/*
function getComponent(route_name, file_name /*, file_extension = '.jsx' * /) {
  return file_name //+ file_extension
  //  return basepath + route_name.toLowerCase() + '/' + file_name + file_extension
}

function pathHead(route_name, route_path, file_name) {
  //let nome = getComponent(route_path, file_name)

  return {
    path: route_name,
    name: getRouteName(route_path),
    component: file_name
  }
}
*/
// function pathComp(route_node, route_name, file_path, file_name) {
//   return {
//     path: route_node,
//     name: getRouteName(route_name),
//     component: () => import('../path' + file_path + '/' + file_name)
//   }
// }

const set_routes_admin_dashboard = {
  ...createPath(
    1,
    rota_admin_dashboard,
    '',
    'Dashboard',
    'dashboard',
    '_admin_dashboard'
  )
}

const set_routes_admin_customer = {
  ...createPath(
    2,
    rota_admin_customer,
    '',
    'Clientes',
    'place',
    '_admin_customer'
  ),

  redirect: rota_admin_customer_listagem,
  children: [
    createPath(
      1,
      rota_admin_customer,
      rota_item_listagem,
      'Listagem',
      'view_headline',
      'ClientesListagem'
    ),
    // createPath(
    //   2,
    //   rota_admin_customer,
    //   rota_item_alterar,
    //   'Alterar',
    //   'create',
    //   'ClientesAlterar'
    // ),

    {
      path     : ':key' + rota_item_alterar,
      name     : 'admin-customer-edit',
      meta     : { menu: 'Alterar', icon: 'create', order: 2 },
      component: () => import('./admin/customer/ClientesAlterar'),
      params   : true
    },

    createPath(
      3,
      rota_admin_customer,
      rota_item_bloqueio,
      'Bloquear',
      'block',
      'ClientesBloqueio'
    ),
    // createPath(4, rota_admin_customer, rota_item_detalhes, 'Detalhes', 'visibility', 'ClientesDetalhes'),
    createPath(
      5,
      rota_admin_customer,
      rota_item_novo,
      'Novo',
      'plus_one',
      'ClientesNovo'
    ),
    createPath(
      6,
      rota_admin_customer,
      rota_item_permissoes,
      'Permissões',
      'vpn_key',
      'ClientesPermissoes'
    ),

    createPathParam(
      'key',
      rota_admin_customer,
      rota_item_detalhes,
      'Detalhes',
      'visibility',
      'ClientesDetalhes'
    )
    // {
    //   path: ':key' + rota_item_detalhes,
    //   name: getRouteName(rota_admin_customer + '/key' + rota_item_detalhes),
    //   meta: { menu: 'Detalhes', icon: 'visibility', order: 7 },
    //   component: () => import('@/path' + rota_admin_customer + '/' + 'ClientesDetalhes')
    // }
  ]
}

const set_routes_admin_management = {
  ...createPath(
    3,
    rota_admin_management,
    '',
    'Gestão',
    'timeline',
    '_admin_management'
  ),
  redirect   : rota_admin_management_dashboard,
  beforeEnter: RotasAuth_HasClienteSelecionado,
  children   : [
    createPath(
      1,
      rota_admin_management,
      rota_item_dashboard,
      'Dashboard',
      'dashboard',
      'GestaoDashboard'
    ),
    createPath(
      2,
      rota_admin_management,
      rota_item_acessos,
      'Acessos',
      'cloud_done',
      'GestaoAcessos'
    ),
    createPath(
      3,
      rota_admin_management,
      rota_item_clienteslistagem,
      'Listagem',
      'view_headline',
      'GestaoClientesListagem'
    ),
    createPath(
      4,
      rota_admin_management,
      rota_item_clientespermissoes,
      'Permissões',
      'vpn_key',
      'GestaoClientesPermissoes'
    ),
    createPath(
      5,
      rota_admin_management,
      rota_item_dados,
      'Dados',
      'cloud_upload',
      'GestaoDados'
    ),
    createPath(
      6,
      rota_admin_management,
      rota_item_vendas,
      'Vendas',
      'trending_up',
      'GestaoVendas'
    )
  ]
}

const set_routes_admin_money_bill = {
  ...createPath(
    5,
    rota_admin_money_bill,
    '',
    'Cobrança',
    'pregnant_woman',
    '_admin_money_bill'
  ), // work
  redirect: rota_admin_money_bill_resumo,
  children: [
    createPath(
      1,
      rota_admin_money_bill,
      rota_item_resumo,
      'Resumo',
      'monetization_on',
      'TitulosResumo'
    ),
    createPath(
      2,
      rota_admin_money_bill,
      rota_item_novo,
      'Novo',
      'playlist_add',
      'TitulosNovo'
    ),
    createPath(
      3,
      rota_admin_money_bill,
      rota_item_ematraso,
      'Em Atraso',
      'trending_down',
      'TitulosEmAtraso'
    ),
    createPath(
      4,
      rota_admin_money_bill,
      rota_item_emaberto,
      'A Vencer',
      'trending_flat',
      'TitulosEmAberto'
    ),
    createPath(
      5,
      rota_admin_money_bill,
      rota_item_pagos,
      'Já Pagos',
      'trending_up',
      'TitulosPagos'
    ),
    createPath(
      6,
      rota_admin_money_bill,
      rota_item_naopagos,
      'Não Pagos',
      'sync_alt',
      'TitulosNaoPagos'
    ),
    createPath(
      7,
      rota_admin_money_bill,
      rota_item_todos,
      'Todos',
      'all_inclusive',
      'TitulosTodos'
    )
  ]
}

const set_routes_admin_money_flow = {
  // monetization_on
  ...createPath(
    6,
    rota_admin_money_flow,
    '',
    'Fluxo Mensal',
    'update',
    '_admin_money_flow'
  ),
  redirect: rota_admin_money_flow_resumo,
  children: [
    createPath(
      1,
      rota_admin_money_flow,
      rota_item_resumo,
      'Resumo',
      'trending_up',
      'FluxoMensalResumo'
    ),
    createPath(
      2,
      rota_admin_money_flow,
      rota_item_abertura,
      'Abertura',
      'keyboard_tab',
      'FluxoMensalAbertura'
    ),
    createPath(
      3,
      rota_admin_money_flow,
      rota_item_novo,
      'Nova Conta',
      'add',
      'FluxoMensalNovaConta'
    ),
    createPath(
      3,
      rota_admin_money_flow,
      rota_item_listagem,
      'Listagem',
      'view_headline',
      'FluxoMensalListagem'
    ),
    createPath(
      3,
      rota_admin_money_flow,
      rota_item_detalhes,
      'Detalhes',
      'zoom_in',
      'FluxoMensalDetalhes'
    )
  ]
}

const set_routes_admin_money = {
  // monetization_on
  ...createPath(
    4,
    rota_admin_money,
    '',
    'Financeiro',
    'attach_money',
    '_admin_money'
  ),
  redirect: rota_admin_money_dashboard,
  children: [
    createPath(
      1,
      rota_admin_money,
      rota_item_dashboard,
      'Dashboard',
      'pie_chart',
      'FinanceiroDashboard'
    ),
    set_routes_admin_money_bill,
    set_routes_admin_money_flow
  ]
}

const set_routes_admin_users = {
  ...createPath(
    7,
    rota_admin_users,
    '',
    'Usuários',
    'supervisor_account',
    '_admin_users'
  ),
  redirect: rota_admin_users_listagem,
  children: [
    createPath(
      1,
      rota_admin_users,
      rota_item_listagem,
      'Listagem',
      'view_headline',
      'UsuariosListagem'
    ),
    createPath(
      2,
      rota_admin_users,
      rota_item_alterar,
      'Alterar',
      'create',
      'UsuariosAlterar'
    ),
    createPath(
      3,
      rota_admin_users,
      rota_item_detalhes,
      'Detalhes',
      'perm_contact_calendar',
      'UsuariosDetalhes'
    ),
    createPath(
      4,
      rota_admin_users,
      rota_item_permissoes,
      'Permissões',
      'lock_open',
      'UsuariosPermissoes'
    )
  ]
}

const set_routes_admin_config = {
  ...createPath(
    8,
    rota_admin_config,
    '',
    'Configurações',
    'settings',
    '_admin_config'
  ),
  redirect: rota_admin_config_profile,
  children: [
    createPath(
      1,
      rota_admin_config,
      rota_item_perfil,
      'Meus Dados',
      'account_circle',
      'ConfigurarMeusDados'
    ),
    createPath(
      2,
      rota_admin_config,
      rota_item_parametros,
      'Parâmetros',
      'settings',
      'ConfigurarParametros'
    ),
    createPath(
      3,
      rota_admin_config,
      rota_item_preferencias,
      'Preferências',
      'tune',
      'ConfigurarPreferencias'
    ),
    createPath(
      4,
      rota_admin_config,
      rota_item_tema,
      'Tema',
      'brush',
      'ConfigurarTema'
    )
  ]
}

const set_routes_private_commodity = {
  ...createPath(
    8,
    rota_private_commodity,
    '',
    'Cardápio',
    'settings',
    '_private_commodity'
  ),
  redirect: rota_private_commodity_listagem,
  children: [
    createPath(
      1,
      rota_private_commodity,
      rota_item_listagem,
      'Listagem',
      'view_headline',
      'CategoriasListagem'
    ),
    createPath(
      2,
      rota_private_commodity,
      rota_item_novo,
      'Novo',
      'plus_one',
      'ProdutosNovo'
    ),
    createPath(
      3,
      rota_private_commodity,
      rota_item_detalhes,
      'Detalhes',
      'perm_contact_calendar',
      'ProdutosDetalhes'
    ),
    createPath(
      4,
      rota_private_commodity,
      rota_item_alterar,
      'Alterar',
      'create',
      'ProdutosAlterar'
    )
  ]
}

// const set_routes_private_customer,
const set_routes_private_dashboard = {
  ...createPath(
    1,
    rota_private_dashboard,
    '',
    'Dashboard',
    'dashboard',
    '_private_dashboard'
  )
}

// const set_routes_private_income,
// const set_routes_private_params,
// const set_routes_private_sales

const routes = [
  // {
  //   path: rota_auth,
  //   name: getRouteName(rota_auth),
  //   component: Home
  // },

  {
    path     : '/select',
    name     : 'select',
    meta     : { menu: 'Ativo', icon: 'dashboard', order: 0 },
    component: () => import('./select/_select'),
    redirect : '/select/active',
    children : [
      {
        path     : 'active',
        name     : 'select-active',
        component: () => import('./select/AlterarClienteAtivo'),
        meta     : { menu: 'Ativo', icon: 'dashboard', order: 1 }
      }
    ]
  },

  {
    path     : rota_admin,
    name     : getRouteName(rota_admin),
    meta     : { menu: 'ADMIN', icon: 'admin_panel_settings', order: 1 },
    component: () => import('./admin/_admin'),
    redirect : '/admin/dashboard',
    children : [
      set_routes_admin_dashboard,
      set_routes_admin_config,
      set_routes_admin_customer,
      set_routes_admin_management,
      set_routes_admin_money,
      set_routes_admin_users
    ]
  },

  manager_routes,

  // {
  //   path: rota_private,
  //   name: getRouteName(rota_private),
  //   meta: { menu: 'GESTOR', icon: 'account_balance', order: 0 },
  //   component: () => import('./manager/_manager'),
  //   redirect: rota_private + rota_item_dashboard,
  //   children: [
  //     set_routes_private_commodity,
  //     //set_routes_private_customer,
  //     set_routes_private_dashboard
  //     // set_routes_private_income,
  //     // set_routes_private_params,
  //     // set_routes_private_sales
  //   ]
  // },

  // ├───admin
  // │   │   _AdminDashboard
  // │   │
  // │   ├───config
  // │   │       ConfigurarParametros
  // │   │       ConfigurarPreferencias
  // │   │       ConfigurarTema
  // |   │      _ConfigurarDashboard
  // │   │
  // │   ├───customer
  // │   │       ClientesAlterar
  // │   │       ClientesBloqueio
  // │   │       ClientesDetalhes
  // │   │       ClientesNovo
  // │   │       ClientesPermissoes
  // │   │      _ClientesListagem
  // │   │
  // │   ├───management
  // │   │       GestaoAcessos
  // │   │       GestaoClientesListagem
  // │   │       GestaoClientesPermissoes
  // │   │       GestaoDados
  // │   │       GestaoVendas
  // │   │      _GestaoDashboard
  // │   │
  // │   ├───money
  // │   │   │  _FinanceiroDashboard
  // │   │   │
  // │   │   ├───bill
  // │   │   │       TitulosEmAberto
  // │   │   │       TitulosEmAtraso
  // │   │   │       TitulosNaoPagos
  // │   │   │       TitulosNovo
  // │   │   │       TitulosPagos
  // │   │   │       TitulosTodos
  // │   │   │      _TitulosResumo
  // │   │   │
  // │   │   └───flow
  // │   │           FluxoMensalAbertura
  // │   │           FluxoMensalListagem
  // │   │          _FluxoMensalResumo
  // │   │
  // │   └───users
  // │           UsuariosAlterar
  // │           UsuariosDetalhes
  // │           UsuariosPermissoes
  // │          _UsuariosListagem
  // │
  // ├───auth
  // │       AuthLogin
  // │       AuthRegister
  // │
  // ├───private
  // │   │   _PrivateDashboard
  // │   │
  // │   ├───commodity
  // │   │       ProdutosAlterar
  // │   │       ProdutosDetalhes
  // │   │       ProdutosNovo
  // │   │      _ProdutosListagem
  // │   │
  // │   ├───customer
  // │   │       ClientesAlterar
  // │   │       ClientesDetalhes
  // │   │       ClientesNovo
  // │   │      _ClientesListagem
  // │   │
  // │   ├───income
  // │   │       EventosCaixasDetalhes
  // │   │       EventosCaixasListagem
  // │   │       EventosDetalhes
  // │   │       EventosListagem
  // │   │      _FaturamentoResumo
  // │   │
  // │   ├───params
  // │   │       _PrivateConfiguracoes
  // │   │
  // │   └───sales
  // │           VendasMaisVendidos
  // │           VendasMenosVendidos
  // │           VendasPorPeriodo
  // │           VendasResumo
  // │
  // ├───public
  // │       PublicoCaracteristicas
  // │       PublicoProduto
  // │      _PublicoBemVindo
  // │
  // └───sales
  //     ├───history
  //     │       _OnlineHistorico
  //     │
  //     ├───order
  //     │       _OnlinePedido
  //     │
  //     ├───payment
  //     │       _OnlinePagamento
  //     │
  //     ├───provider
  //     │       _OnlineRestaurante
  //     │
  //     └───status

  {
    path     : '*',
    component: Loader
  }
]

const EstruturaRotas = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

EstruturaRotas.beforeEach((to, from, next) => {
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  next()
})

EstruturaRotas.afterEach((to, from) => {
  // console.log(EstruturaRotas.app.$vuetify)

  if (to.matched.some(({ name }) => name === getRouteName(rota_admin))) {
    EstruturaRotas.app.$vuetify.theme.themes.light.alitec = '#8196F3'
  } else if (
    to.matched.some(({ name }) => name === getRouteName(rota_private))
  ) {
    EstruturaRotas.app.$vuetify.theme.themes.light.alitec = '#dCAF50'
  }
  // else {
  //  EstruturaRotas.app.$vuetify.theme.themes.light.alitec = '#005678' //cor original
  // }
})

const getRotaCustomerDetail = key => {
  return getRouteName(rota_admin_customer + rota_item_detalhes) // + '/@' + key
}

const getRotaCustomerList = key => {
  return getRouteName(rota_admin_customer + rota_item_listagem) // + '/@' + key
}

export { getRotaCustomerDetail, getRotaCustomerList }
export default EstruturaRotas
