import { createStore } from 'vuex'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider
} from 'firebase/auth'

import { ElMessage } from 'element-plus'

const store = createStore({
    state () {
        return {
            user: null
        }
    },
    getters: {
        getUser(state) {
            return state.user
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
                console.log("[signUp] user: ", user)
                commit('SET_USER', user)
            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        ElMessage.error('Email already in use')
                    case 'auth/invalid-email':
                        ElMessage.error('Invalid email')
                    case 'auth/weak-password':
                        ElMessage.error('Weak password')
                    default:
                        throw console.error(error.message)
                }
            }
        }, 
        async signIn ({ commit }, { email, password }) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                const user = userCredential.user
                console.log("[signIn] user: ", user)
                commit('SET_USER', user)
            }
            catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        ElMessage.error('User not found')
                    case 'auth/wrong-password':
                        ElMessage.error('Wrong password')
                    default:
                        throw console.error(error.message)
                }
            }
        }, 
        async signOut ({ commit }) {
            try {
                await signOut(auth)
                commit('CLEAR_USER')
            }
            catch (error) {
                throw console.error(error.message)
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