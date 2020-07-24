import { loadDoc } from '@/control/firebase'

export default {
  namespaced: true,
  state     : {
    imagensPadrao: {
      categoria: '',
      produto  : '',
      cliente  : ''
    }
  },
  mutations: {
    SET_IMAGENS_PADRAO(state, imagens) {
      state.imagensPadrao = imagens
    }
  },
  actions: {
    reload({ commit, dispatch }) {
      // dispatch(
      //   'snackbar/show',
      //   { text: 'error.message', color: 'error' },
      //   { root: true }
      // )
      loadDoc('parametros', 'imagens_padrao')
        .then(doc => {
          let dados = doc.data()
          commit('SET_IMAGENS_PADRAO', dados)
        })
        .catch(error => {
          dispatch(
            'snackbar/show',
            { text: error.message, color: 'error' },
            { root: true }
          )
        })
    }
  },
  getters: {
    imagemPadrao_Cliente: state => {
      return state.imagensPadrao.cliente
    }
  },
  modules: {}
}
