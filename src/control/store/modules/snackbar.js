export default {
  namespaced: true,
  state     : {
    snackbars: []
  },
  mutations: {
    SET_SNACKBAR(state, snackbar) {
      state.snackbars = state.snackbars
        .filter(s => s.showing)
        .concat(snackbar)
      console.log(state.snackbars)
    },
    DEL_SNACKBAR(state, snackbar) {
      state.snackbars = state.snackbars
        .filter(s => s !== snackbar)
       
      console.log(state.snackbars)
    }

  },
  actions: {
    show({ commit }, snackbar) {
      snackbar.showing = true
      snackbar.color = snackbar.color || 'success'
      commit('SET_SNACKBAR', snackbar)
    },
    hide({ commit }, snackbar) {
      commit('DEL_SNACKBAR', snackbar)
    },
  },
  getters: {},
  modules: {}
}
