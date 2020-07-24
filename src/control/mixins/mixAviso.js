import store from '@/control/store'

export default {
  // created: function () {},
  methods: {
    Info: function(mensagem) {
      const snackbar = {
        text : mensagem,
        color: 'light-blue lighten-4',
        icon : 'feedback',
        dark : true
      }
      store.dispatch('snackbar/show', snackbar)
    },
    Erro: function(mensagem) {
      const snackbar = {
        text : mensagem,
        color: 'red accent-1',
        icon : 'error'
      }
      store.dispatch('snackbar/show', snackbar)
    },
    log: function(message, ...optionalParams) {
      console.log(message, ...optionalParams)
    },
    Show: function(local, mensagem, tipo = 'erro') {
      switch (tipo) {
        case 'info':
          this.Info(mensagem)
          break
        case 'erro':
          this.Erro(mensagem)
          break

        default:
          this.Erro(mensagem)
          break
      }
    },
    logCatch: function(context = {}, path = '', error = {}) {
      const msg =
        (error.code ? error.code + ': ' : '') +
        (error.message ? error.message + ' ' : '') +
        '-> ' +
        path +
        context.$route ? '[' + context.$route.name + ']' : ''

      this.Erro(msg)
    },
    Save: function(mensagem) {
      const snackbar = {
        text : mensagem,
        color: 'green lighten-4',
        icon : 'library_add_check'
      }
      store.dispatch('snackbar/show', snackbar)
    },
    Add: function(mensagem) {
      const snackbar = {
        text : mensagem,
        color: 'lime lighten-4',
        icon : 'library_add'
      }
      store.dispatch('snackbar/show', snackbar)
    }, // broken_image
    Del: function(mensagem) {
      const snackbar = {
        text : mensagem,
        color: 'red accent-1',
        icon : 'error'
      }
      store.dispatch('snackbar/show', snackbar)
    }
  }
}
