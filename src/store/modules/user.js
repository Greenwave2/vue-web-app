import { auth } from '../../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    FacebookAuthProvider
} from 'firebase/auth'

import { ElMessage } from 'element-plus'

const state = {
    user: null
}

const getters = {
    user: (state) => {
        return state.user
    }
}

const mutations = {
    SET_USER (state, user) {
        state.user = user
    }, 
    CLEAR_USER (state) {
        state.user = null
    }
}

const actions ={
    async setUser ({ commit }, user) {
        commit('SET_USER', user)
    }, 
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
    }, 
    async signInWithFacebook ({ commit }) {
        try {
            const provider = new FacebookAuthProvider()
            const result = await signInWithPopup(auth, provider)
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
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

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}