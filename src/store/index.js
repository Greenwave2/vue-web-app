import { createStore } from 'vuex'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider
} from 'firebase/auth'

const store = createStore({
    state () {
        return {
            user: null
        }
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        }, 
        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {
        async signUp ({ commit }, { email, password }) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const user = userCredential.user
                commit('SET_USER', user)
            } catch (error) {
                console.error(error)
            }
        }, 
        async signIn ({ commit }, { email, password }) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                const user = userCredential.user
                commit('SET_USER', user)
            }
            catch (error) {
                console.error(error)
            }
        }, 
        async signOut ({ commit }) {
            try {
                await signOut(auth)
                commit('CLEAR_USER')
            }
            catch (error) {
                console.error(error)
            }
        },
        async signInWithGoogle ({ commit }) {
            try {
                const provider = new GoogleAuthProvider()
                const result = await signInWithPopup(auth, provider)
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                commit('SET_USER', user)
            }
            catch (error) {
                console.error(error)
            }
        }
    }
})

export default store