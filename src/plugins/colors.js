// import '@/plugins/alitec.styl'
// import '@mdi/font/css/materialdesignicons.css'
// import Vue from 'vue'
// import 'vuetify/dist/vuetify.min.css'
// import Vuetify from 'vuetify/lib'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

const options = {
  iconfont: 'md',
  theme   : {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        alitec : '#005678', // alitec
        primary: '#005678', // alitec
        success: '#11A748', // '#12BA50',
        error  : '#BD4040', // '#700808',
        info   : '#257FBB',
        accent : '#172E3B',
        warning: '#F77428'
        // ana_lidia: '#d81159'
        // secondary: '#DD5500',
        // alitec: '#2196F3',
        // body: '#abc'
        // // accent: '#82B1FF',
        // // error: '#FF5252',
        // // info: '#2196F3',
        // // success: '#4CAF50',
        // // warning: '#FFC107'
      },
      dark: {
        alitec : '#002e40', // alitec escuro
        primary: '#002e40' // alitec escuro
      }
    },
    dark: false
  },
  lang: {
    locales: { pt },
    current: 'pt'
  }
}

export default new Vuetify(options)
