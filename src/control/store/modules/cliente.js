import Vue from 'vue'
import { loadAllDocsWhereEqual } from '@/control/firebase'

export default {
  namespaced: true,
  state     : {
    clientes: []
  },
  mutations: {
    SET_CLIENTES(state, cli) {
      // console.log(cli)

      Vue.set(state, 'clientes', cli)
      // state.clientes = cli
    }
  },
  actions: {
    reload({ commit, dispatch }) {
      loadAllDocsWhereEqual('cliente', 'ativo', true)
        .then(cli => {
          // console.log(cli)

          commit('SET_CLIENTES', cli)
        })
        .catch(error => {
          // commit('SET_CLIENTES', [])
          dispatch(
            'snackbar/show',
            { text: error.message, color: 'error' },
            { root: true }
          )
        })
    }
  },
  getters: {
    ativos: state => {
      // ativos({ state, dispatch }) {
      // if (!state.clientes) {
      //   dispatch('reload').then(cli => {
      //     return cli
      //   })
      // }
      return state.clientes
    }
  },
  modules: {}
}
