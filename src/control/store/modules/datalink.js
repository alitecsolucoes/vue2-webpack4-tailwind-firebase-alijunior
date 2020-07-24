import { loadDoc, saveDoc } from '@/control/firebase'

export default {
  namespaced: true,
  state     : {
    upkey: '',
    dados: {}
  },
  mutations: {
    SET_DADOS(state, { key, dados }) {
      // Vue.set(state.dados, key, dados )
      state.dados[key] = dados
      state.upkey = key
    }
  },
  actions: {
    loadData({ commit, dispatch }, { documento }) {
      // 'cliente/alitec/dados/cadastro' ou até '/cliente/alitec/dados/cadastro/'
      let path = documento.split('/').filter(e => e)
      // '[cliente,alitec,dados,cadastro]'
      let key = path.join('-')
      // cliente-alitec-dados-cadastro
      let col = path.slice(0, -1).join('/')
      // 'cliente/alitec/dados'
      let doc = path.pop()
      // 'cadastro'

      return loadDoc(col, doc)
        .then(doc => {
          let dados = doc.data()
          commit('SET_DADOS', { key, dados })
          return dados
        })
        .catch(error => {
          dispatch(
            'snackbar/show',
            { text: error.message, color: 'error' },
            { root: true }
          )
        })
    },
    saveData({ commit, dispatch }, { documento, dados }) {
      // 'cliente/alitec/dados/cadastro' ou até '/cliente/alitec/dados/cadastro/'
      let path = documento.split('/').filter(e => e)
      // '[cliente,alitec,dados,cadastro]'
      let key = path.join('-')
      // cliente-alitec-dados-cadastro
      let col = path.slice(0, -1).join('/')
      // 'cliente/alitec/dados'
      let doc = path.pop()
      // 'cadastro'

      return saveDoc(col, doc, dados)
        .then(data => {
          commit('SET_DADOS', { key, data })
          return data
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
    read: state => doc => {
      // 'cliente/alitec/dados/cadastro' ou até '/cliente/alitec/dados/cadastro/'
      let path = doc.split('/').filter(e => e)
      // '[cliente,alitec,dados,cadastro]'
      // let col = path.slice(0, -1).join('/')
      // 'cliente/alitec/dados'
      // let doc = path.pop()
      // 'cadastro'
      let key = path.join('-')
      // cliente-alitec-dados-cadastro
      return state.dados[key] || {}
    }
  },
  modules: {}
}
