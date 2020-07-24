import store from '@/control/store'

const RotasAuth_HasClienteSelecionado = (to, from, next) => {
  if (!store.getters['status/hasClienteAtivo']) {
    next({ name: 'select-active', query: { redirect: to.name } })
  } else {
    next()
  }
}

const RotasAuth_GoToRedirect = (context) => {
  context.$router.push({ name: context.$route.query.redirect })
}

export { RotasAuth_HasClienteSelecionado, RotasAuth_GoToRedirect }
