import { initializeApp } from 'firebase/app'
import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyCvwHfqX0FHhsz9uqauU54SObeH8dyqk94',
  authDomain: 'xindian-f463a.firebaseapp.com',
  projectId: 'xindian-f463a',
  storageBucket: 'xindian-f463a.appspot.com',
  messagingSenderId: '227141088272',
  appId: '1:227141088272:web:91c3bed3aa609683068695',
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)
const auth = getAuth(app)

const getIdTokenPromise = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe()
      if (user) {
        getIdToken(user).then(
          idToken => {
            resolve(idToken)
          },
          error => {
            resolve(null)
          }
        )
      } else {
        resolve(null)
      }
    })
  })
}

export { app, messaging, auth, getIdTokenPromise }
