import { auth } from '@/control/firebase'

export default {
  namespaced: true,
  state     : {
    user: {
      active: false
    },
    redirect: null,
    method  : {
      link      : false,
      password  : false,
      smartphone: false,
      facebook  : false,
      google    : false,
      email     : ''
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      console.log(user)
    },
    SET_REDIRECT(state, to) {
      state.redirect = to
    },
    SET_METHOD(state, method) {
      Object.assign(state.method, method)
      state.method.email = (method ? method.email : null) || ''
    }
  },
  actions: {
    method({ commit }, method) {
      commit('SET_METHOD', method)
    },
    redirect({ commit }, to) {
      commit('SET_REDIRECT', to)
      console.log(to)
    },
    login_Auth({ commit }, user) {
      // var displayName = user.displayName
      // var email = user.email
      // var emailVerified = user.emailVerified
      // var photoURL = user.photoURL
      // var isAnonymous = user.isAnonymous
      // var uid = user.uid
      // var providerData = user.providerData
      // {displayName,email,emailVerified,photoURL,isAnonymous,uid,providerData} = user

      const us = {
        active       : true,
        displayName  : 'ALITEC Soluções',
        email        : 'alitecsolucoes@gmail.com',
        emailVerified: true,
        isAnonymous  : false,
        phoneNumber  : null,
        photoURL     :
          'https://lh3.googleusercontent.com/a-/AOh14Ghilq41VaXjfpMMj6y0CL6DsDcdU0Z0FTywro1S',
        providerData: [
          // length: 1,
          {
            displayName: 'ALITEC Soluções',
            email      : 'alitecsolucoes@gmail.com',
            phoneNumber: null,
            photoURL   :
              'https://lh3.googleusercontent.com/a-/AOh14Ghilq41VaXjfpMMj6y0CL6DsDcdU0Z0FTywro1S',
            providerId: 'google.com',
            uid       : '117804847342683584030'
          }
        ],
        refreshToken:
          'AE0u-NfzCR5Zwc1SPzkhdig24ryNBd35upCH5c1tA12HccuRE8bTLdkPQxHjYyydSUMYvOMu8PXuRku2Qu3rwXsQhS7JMMTetfYT-NRQa6rpHA1gHc8ANk5-fwM0VXvfDbkFc3zPyCHOtIfDdICLe2VfusM-STrh0omp_eCZSFG4I03tujB_OqpkT0dqPqOp7Zg28_fdIInfZbdIJ-2Q4KQegw85kZjYhH2RzK-kjFqZJucDgwlso7sDl7cUjE93sfxAEcypL8yIgFI8rNP8vGOLcBoau8UCQie4YgLMkA2pSuXvMLQIA245KqwNXfIwNeP7IaVBOpW1DZgaEkbBe9f35Ggm1BHOOUGln93SWSQ6rFn0ABQYIR56BgQIFuj6Z8FDqreIQZOYKKTfobBL1xHNOk9CBmh3gOVabgLQZnKo-pouHGGwYuw',
        uid: 'GhC5PIrqbecsjHzEn7TH09BIdWh2'
      }

      user.active = true
      commit('SET_USER', user)
    },
    login_Google({ commit }, { user, credential }) {
      const cred = {
        accessToken:
          'ya29.a0AfH6SMBKgm_4TSadCgeOsHeic5mbmBsmIsSj9THbsdKytjat3SnwaP5VU4A66VJ-mnAZRzQWDxmAens7WW70LZ_wRpUhrnNPUNs9659w78gv8_2lYKv4Qo1sWQ139Agvkk6MY1oosjYKPkdABwRkhMFjKIFd6lV2x9RkQQ',
        idToken:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0MWEzNTcwYjhlM2FlMWI3MmNhYWJjYWE3YjhkMmRiMjA2NWQ3YzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzU2MjI0MDU3ODQ5LWsyc25yODMzYTlvc3ZiMmNxcWk2ZHM1OGtvcXM3Z2drLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzU2MjI0MDU3ODQ5LWsyc25yODMzYTlvc3ZiMmNxcWk2ZHM1OGtvcXM3Z2drLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3ODA0ODQ3MzQyNjgzNTg0MDMwIiwiZW1haWwiOiJhbGl0ZWNzb2x1Y29lc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJtRDBpWlVYRGpFZUhFSFVIcUl4SmciLCJpYXQiOjE1OTM4MTg1NDksImV4cCI6MTU5MzgyMjE0OX0.Un1xADftZDErZIzNNvBMbHP0Z0eanwUwyrOpdPDTqVSRajQGD-uuY6ahXHFzj87Eml8T3qNWAbFANxCz2EOu9A3JHddLcVE2bxWESeYVk06ZnTxOk6CB-17W0RPKP8gt-q9z7AX9yUPai-bXpWge5rkmnF1cJ74_t6vEII1n9-xvM8zIuiVyZ576On3DDNBq-4r131y1AR-1NV2yFlqNNjd-htBihio7g9vZxQAcPCK-xQmXzo2CCpOdAM5GXlX3iL_sdvdMO4KS3muBKOlunFpOILVuqwUKmM5SsS5Z7ua4ekA5vfSlT4vWYEM-6Vx2fC-Gm_CsM21qtNWwbcleMQ',
        providerId  : 'google.com',
        signInMethod: 'google.com'
      }
      user.active = true
      commit('SET_USER', user)
    },
    login_Facebook({ commit }, { user, credential }) {
      const us = {
        // accessToken:
        //   'EAAKMKu73ASABABvQ9wlZBrbwVsRcdZCZBrbrjpMIZArsZBkhZCsCZBTp2ZBK5Ew3CEVnd1ZAsHbNaZCS9FKIvuGIeHKAc9Oz2KZCt4pZCefcieBHxSZA5YDxHyhWNPOhWiV2HHbSHOM2ZAmpHswSGwtTTeIEZAZBzoZAZCmCeJ6LIPAGkwZBE1c5gZDZD',
        // providerId: 'facebook.com',
        // signInMethod: 'facebook.com',
        active       : true,
        displayName  : 'Júnior Áli',
        email        : 'alijunior@gmail.com',
        emailVerified: false,
        isAnonymous  : false,
        phoneNumber  : null,
        photoURL     : 'https://graph.facebook.com/3087749337948912/picture',
        providerId   : 'facebook.com',
        uid          : '3087749337948912',
        uid2         : 'kc8bZcC8dqduknry5psh6FZnFcy1',
        refreshToken :
          'AE0u-Nfr-Zby_MR9x7G1tK9cl19VaSFYAR5w0pSZuzH7m1JlguSMFiTLRneB0JydQ2Du99o1XZxRJszn7eNwQr3kO73YNDckwbVA-tanXyE1oN0k0CPNc8cZTUk-YVTpIGMfIYbBii0H8SzhvmmQKdruu7esPtj_26Gr9LwC4Cp0F3totWDDkVGs9q7vbdBYTaIPwKFnvnM9C8FfwbxsDzUIHF85lY_1LQ_4fgCxQUeP0NhCu1VotfF6uUZy5BbqN7MBziiKsryXTJZ0sd0wuVyoP5ki0c6mN5j-lgv7EL-ZCJbrdviBeZsgGMBB7glR1IiSjVuOcyHfu4Osa84s2_MwDvBIZCMPIi8mIIrRtb28XzXnrLi7E1s'
      }
      const cred = {
        accessToken:
          'ya29.a0AfH6SMBKgm_4TSadCgeOsHeic5mbmBsmIsSj9THbsdKytjat3SnwaP5VU4A66VJ-mnAZRzQWDxmAens7WW70LZ_wRpUhrnNPUNs9659w78gv8_2lYKv4Qo1sWQ139Agvkk6MY1oosjYKPkdABwRkhMFjKIFd6lV2x9RkQQ',
        idToken:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0MWEzNTcwYjhlM2FlMWI3MmNhYWJjYWE3YjhkMmRiMjA2NWQ3YzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzU2MjI0MDU3ODQ5LWsyc25yODMzYTlvc3ZiMmNxcWk2ZHM1OGtvcXM3Z2drLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzU2MjI0MDU3ODQ5LWsyc25yODMzYTlvc3ZiMmNxcWk2ZHM1OGtvcXM3Z2drLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3ODA0ODQ3MzQyNjgzNTg0MDMwIiwiZW1haWwiOiJhbGl0ZWNzb2x1Y29lc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJtRDBpWlVYRGpFZUhFSFVIcUl4SmciLCJpYXQiOjE1OTM4MTg1NDksImV4cCI6MTU5MzgyMjE0OX0.Un1xADftZDErZIzNNvBMbHP0Z0eanwUwyrOpdPDTqVSRajQGD-uuY6ahXHFzj87Eml8T3qNWAbFANxCz2EOu9A3JHddLcVE2bxWESeYVk06ZnTxOk6CB-17W0RPKP8gt-q9z7AX9yUPai-bXpWge5rkmnF1cJ74_t6vEII1n9-xvM8zIuiVyZ576On3DDNBq-4r131y1AR-1NV2yFlqNNjd-htBihio7g9vZxQAcPCK-xQmXzo2CCpOdAM5GXlX3iL_sdvdMO4KS3muBKOlunFpOILVuqwUKmM5SsS5Z7ua4ekA5vfSlT4vWYEM-6Vx2fC-Gm_CsM21qtNWwbcleMQ',
        providerId  : 'google.com',
        signInMethod: 'google.com'
      }
      user.active = true
      commit('SET_USER', user)
    },
    logoff({ commit }, payload) {
      const user = { active: false }

      commit('SET_USER', user)
      console.log('auth/logoff')
      const router = payload ? payload.router : null
      const to = payload ? payload.to : null
      return auth.signOut().then(() => {
        if (router) {
          if (to) {
            router.push(to)
          }
        }
      })
    }
  },
  getters: {
    user: state => {
      return state.user.active ? state.user : { active: false }
    },
    isActive: state => {
      return state.user.active
    },
    redirect: state => {
      return state.redirect
    },
    method: state => {
      return state.method
    }
  },
  modules: {}
}
