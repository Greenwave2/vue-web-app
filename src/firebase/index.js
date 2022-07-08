import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCvwHfqX0FHhsz9uqauU54SObeH8dyqk94',
    authDomain: 'xindian-f463a.firebaseapp.com',
    projectId: 'xindian-f463a',
    storageBucket: 'xindian-f463a.appspot.com',
    messagingSenderId: '227141088272',
    appId: '1:227141088272:web:91c3bed3aa609683068695'
  }

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }

