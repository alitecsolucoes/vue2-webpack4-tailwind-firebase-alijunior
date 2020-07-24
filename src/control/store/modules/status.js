export default {
  namespaced: true,
  state     : {
    cliente: {
      slug: '',
      nome: ''
    },
    cardapio: ''
  },
  mutations: {
    SET_CLIENTE(state, cliente) {
      state.cliente = cliente
    }
  },
  actions: {
    setCliente({ commit }, cliente) {
      commit('SET_CLIENTE', cliente)
    }
  },
  getters: {
    clienteAtivo(state) {
      return state.cliente
    },
    hasClienteAtivo(state) {
      return state.cliente.nome.length > 0
    }
  },
  modules: {}
}
