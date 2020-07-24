import Vue from 'vue'
import Vuex from 'vuex'
import snackbarModule from './modules/snackbar'
import statusModule from './modules/status'
//import configModule from './modules/config'
//import clienteModule from './modules/cliente'
//import datalinkModule from './modules/datalink'
//import authModule from './modules/auth'

// import videosModule from './videos'
// import usersModule from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer_visible: localStorage.getItem('alitec_menu_visivel') == '1',
    loading       : true,
    snackText     : '',
    authUsuario   : {
      nome   : 'Ana Moraes', // 'Júnior Áli',
      email  : 'anamoraes123201@gmail.com',
      fotoURL:
        // 'https://lh3.googleusercontent.com/a-/AOh14GidjGMq3nI7PJNn3QMgGr5ANljcr8WwbyZ7Yo_QSQ',
        'https://lh3.googleusercontent.com/a-/AOh14GhWEycSCaJVlv-EfBxtKgOkumA_4FqxazvG-GUOUko=s70-p-k-rw-no',
      numAvisos      : 2,
      numCompromissos: 3
    }
  },
  mutations: {
    changeDrawerVisible(state, value) {
      state.drawer_visible = value
      localStorage.setItem('alitec_menu_visivel', value ? '1' : '0')
    },
    setSnackbar(state, value) {
      state.snackText = value
    },
    setLoading(state, value) {
      state.loading = value
    }
  },
  actions: {
    toogleDrawerVisible(store) {
      store.commit('changeDrawerVisible', !store.state.drawer_visible)
    },
    resetSnackbar(store) {
      store.commit('setSnackbar', '')
    },
    loaded(store) {
      store.commit('setLoading', false)
      console.log('loading complete')
    }
  },
  getters: {
    //loading: state => state.loading
    // hasClienteSelecionado(state, getters, rootState, rootGetters) {
    //   return rootGetters.
    // }
  },
  modules: {
    //auth    : authModule,
    snackbar: snackbarModule,
    status  : statusModule,
    //config  : configModule,
    //cliente : clienteModule,
    //datalink: datalinkModule

    // tags: tagsModule,
    // videos: videosModule,
    // users: usersModule
  }
})
