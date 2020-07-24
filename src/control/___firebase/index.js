import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey           : process.env.FIREBASE_API_KEY,
  authDomain       : process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL      : process.env.FIREBASE_DATABASE_URL,
  projectId        : process.env.FIREBASE_PROJECT_ID,
  storageBucket    : process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId            : process.env.FIREBASE_APP_ID,
  measurementId    : process.env.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const fb = firebase
const db = firebase.firestore()
const up = firebase.storage()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// auth.useDeviceLanguage()
firebase.auth().languageCode = 'pt-BR'

function getTimestampSlug() {
  const d = new Date()
  const yy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mm = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  const hh = new Intl.DateTimeFormat('en', {
    hour  : '2-digit',
    hour12: false
  }).format(d)
  const nn = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d)
  const ss = new Intl.DateTimeFormat('en', { second: '2-digit' }).format(d)

  const key = [yy, mm, dd, hh, nn, ss].join('-')
  return key
}

function loadDoc(collection, document) {
  return db.collection(collection).doc(document).get()
}

function updateDoc(collection, document, data) {
  return new Promise(function(resolve, reject) {
    // altera a coleção com os dados atuais
    db.collection(collection)
      .doc(document)
      .set(data, { merge: true })
      .then(resolve(data))
      .catch(error => {
        reject(error)
      })
  })
}

function saveDoc(collection, document, data) {
  return updateDoc(collection, document, data)
}

function updateCollection(tabela, doc, sub, valores, usuario, promise) {
  const tab = db.collection(tabela).doc(doc)
  const time_slug = getTimestampSlug()

  console.log(tabela, doc, sub, valores, usuario)

  const up_key = []
  up_key['_' + sub + '-key'] = time_slug
  up_key['_' + sub + '-time'] = timestamp()

  const up_sub = {
    _doc       : time_slug,
    _timestamp : timestamp(),
    _user_name : (usuario ? usuario.nome : null) || 'não informado',
    _user_email: (usuario ? usuario.email : null) || 'não informado'
  }

  console.log(up_key)
  console.log(up_sub)

  // //altera a tabela raiz com a chave atual e quando
  // tab.set({ ...up_key }, { merge: true }).then()

  // //altera a coleção com os dados atuais
  // tab
  //   .collection(sub)
  //   .doc('current')
  //   .set({
  //     ...valores,
  //     ...up_sub
  //   })
  //   .then()

  // //altera a coleção com uma cópia da chave atual para registro
  // tab
  //   .collection(sub)
  //   .doc(time_slug)
  //   .set({
  //     ...valores,
  //     ...up_sub
  //   })
  //   .then()

  return new Promise(function(resolve, reject) {
    // altera a coleção com os dados atuais
    tab
      .collection(sub)
      .doc('current')
      .set({
        ...valores,
        ...up_sub
      })
      .then(
        // altera a coleção com uma cópia da chave atual para registro
        tab
          .collection(sub)
          .doc(time_slug)
          .set({
            ...valores,
            ...up_sub
          })
          .then(
            // altera a tabela raiz com a chave atual e quando
            tab
              .set({ ...up_key }, { merge: true })
              .then(resolve('salvo!'))
              .catch(error => reject(error))
          )
          .catch(error => reject(error))
      )
      .catch(error => reject(error))
  })
}

function loadMain(collection, document) {
  //
  // console.log(collection, document)

  return db.collection(collection).doc(document).get()
}

function Hashtable() {
  // https://stackoverflow.com/questions/1208222/how-to-do-associative-array-hashing-in-javascript
  var obj = {}

  obj._map = new Map()
  obj._indexes = new Map()
  obj._keys = []
  obj._values = []
  obj.put = function(key, value) {
    var newKey = !obj.containsKey(key)
    obj._map.set(key, value)
    if (newKey) {
      obj._indexes.set(key, obj.length)
      obj._keys.push(key)
      obj._values.push(value)
    }
  }
  obj.remove = function(key) {
    if (!obj.containsKey(key)) return
    obj._map.delete(key)
    var index = obj._indexes.get(key)
    obj._indexes.delete(key)
    obj._keys.splice(index, 1)
    obj._values.splice(index, 1)
  }
  obj.indexOfKey = function(key) {
    return obj._indexes.get(key)
  }
  obj.indexOfValue = function(value) {
    return obj._values.indexOf(value) != -1
  }
  obj.get = function(key) {
    return obj._map.get(key)
  }
  obj.entryAt = function(index) {
    var item = {}
    Object.defineProperty(item, 'key', {
      value   : obj.keys[index],
      writable: false
    })
    Object.defineProperty(item, 'value', {
      value   : obj.values[index],
      writable: false
    })
    return item
  }
  obj.clear = function() {
    var length = obj.length
    for (var i = 0; i < length; i++) {
      var key = obj.keys[i]
      obj._map.delete(key)
      obj._indexes.delete(key)
    }
    obj._keys.splice(0, length)
  }
  obj.containsKey = function(key) {
    return obj._map.has(key)
  }
  obj.containsValue = function(value) {
    return obj._values.indexOf(value) != -1
  }
  obj.forEach = function(iterator) {
    for (var i = 0; i < obj.length; i++) iterator(obj.keys[i], obj.values[i], i)
  }
  Object.defineProperty(obj, 'length', {
    get: function() {
      return obj._keys.length
    }
  })

  // Object.defineProperty(obj, 'keys', {
  //   get: function () {
  //     return obj._keys
  //   }
  // })
  obj.keys = obj._keys

  // Object.defineProperty(obj, 'values', {
  //   get: function () {
  //     return obj._values
  //   }
  // })
  obj.values = obj._values

  Object.defineProperty(obj, 'entries', {
    get: function() {
      var entries = new Array(obj.length)
      for (var i = 0; i < entries.length; i++) entries[i] = obj.entryAt(i)
      return entries
    }
  })
  return obj
}

function loadAllDocsWhere(
  collection,
  where_field,
  where_operator,
  where_value
) {
  return new Promise(function(resolve, reject) {
    db.collection(collection)
      .where(where_field, where_operator, where_value)
      .get()
      .then(snapshot => {
        // console.log(snapshot)

        var hash = [] // Hashtable()

        if (!snapshot.empty) {
          snapshot.forEach(doc => {
            hash.push({ ...doc.data(), key: doc.id })
            // console.log(doc.id, '=>', doc.data())
          })
        }

        // console.log(hash)
        resolve(hash)
      })
      .catch(error => reject(error))
  })
}

function loadAllDocsWhereEqual(collection, where_field, where_value) {
  return loadAllDocsWhere(collection, where_field, '==', where_value)
}

function loadSub(collection, document, subcollection) {
  //
  return db
    .collection(collection)
    .doc(document)
    .collection(subcollection)
    .doc('current')
    .get()
}

// console.log(timestamp)
// db.settings({ timestampsInSnapshots: true })

// db.collection('cliente')
// .doc('parque-aimarata')
// .set(cliente)

// const cliente = {
//   nome: 'Parque Aimaratá',
//   datahora: 'ok'
// }
// const doc = 'parque-aimarata'

// let cliRef = db.collection('cliente').doc(doc)
// let setWithOptions = cliRef
//   .set(cliente, { merge: true })

//   .then(() => alert('ok'))

export {
  fb,
  up,
  auth,
  Hashtable,
  timestamp,
  updateCollection,
  saveDoc,
  loadDoc,
  loadMain,
  loadSub,
  loadAllDocsWhere,
  loadAllDocsWhereEqual
}
export default db

// db.collection('cliente')
// .doc(key)
// .onSnapshot(doc => {
//   t.dados_cliente = doc.data()
//   //t.loading = false
//   //console.log('after...', t.current)
//   //t.nome = t.current.nome
// })

/* <script>
//import format from 'date-fns/format'
import db, { timestamp } from '@/control/firebase'

export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    addCliente() {
      this.loading = true

      const cliente = {
        nome: 'Parque Aimaratá',
        datahora: timestamp(),
        'deu-certo': 'uaaaauuuuu'
      }
      const doc = 'parque-aimarata'

      db.collection('cliente')
        .doc(doc)
        .set(cliente, { merge: true })
        .then(() => {
          //alert('ok')
          this.loading = false
        })
    }
  }
}
</script> */
