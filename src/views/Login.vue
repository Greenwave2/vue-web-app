<template>
    <el-page-header @back="goBack" content="Login" style="background-color: white"></el-page-header>
    <el-card class="middle-input-card box-card">
    <h1 style="margin-top: 100px;">Login</h1>
    <el-form :model="form" class="middle-input-form">
        <el-input class="middle-input-box" placeholder="Email" v-model="form.email"></el-input>
        <el-input class="middle-input-box" placeholder="Password" v-model="form.password" show-password></el-input>
        <div style="height: 25px"><el-link style="float: right" @click="router.replace({name: 'resetpassword'})">Forget password</el-link></div>
        <el-button style="margin-bottom: 20px;" type="primary" @click="signIn">Login</el-button>
    </el-form>
    <el-alert v-if="error" type="error" show-icon> {{error.message}} </el-alert>
    <span>Need an account? Click here to <el-link type="primary" @click="router.replace({name: 'register'})">Sign UP</el-link></span><br>
    <el-button @click="signInWithGoogle"> Google </el-button>
    <el-button @click="signInWithGoogle"> Facebook </el-button>
    <el-button @click="signInWithGoogle"> Apple </el-button>
    </el-card>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    console.log('go back')
    window.location.href = '/'
}

const auth = getAuth()
const form = reactive({
    email: '',
    password: ''
})
// const email = ref('')
// const password = ref('')
const error = ref('')
const signIn = () => { // we also renamed this method
    signInWithEmailAndPassword(auth, email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
    console.log('Successfully logged in!');
    router.replace({name: 'dashboard-table'}) // redirect to the feed
    })
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken
    // The signed-in user info.
    var user = result.user
    // ...
    router.replace({name: 'dashboard-table'})
    }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // The email of the user's account used.
    var email = error.email
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential
    // ...
    })
}
</script>

<style scoped>
.box-card {
  width: 480px;
}
.middle-input-card{
    height: 500px;
    max-width: 600px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    margin-bottom: auto;
    border-radius: 10px;
  }

.middle-input-form{
  min-width: 250px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.middle-input-box{
  margin-bottom: 20px;
}
</style>