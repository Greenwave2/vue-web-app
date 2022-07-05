<template>
    <el-page-header @back="router.push('/')" content="Login" style="background-color: white"></el-page-header>
    <el-card class="middle-input-card box-card">
    <h1 style="margin-top: 100px;">Login</h1>
    <el-form :model="form" class="middle-input-form">
        <el-input class="middle-input-box" placeholder="Email" v-model="form.email"></el-input>
        <el-input class="middle-input-box" placeholder="Password" v-model="form.password" show-password></el-input>
        <div style="height: 25px"><el-link style="float: right" @click="router.push('/forget-password')">Forget password</el-link></div>
        <el-button style="margin-bottom: 20px;" type="primary" @click="signIn">Login</el-button>
    </el-form>
    <el-alert v-if="error" type="error" show-icon> {{error.message}} </el-alert>
    <span>Need an account? Click here to <el-link type="primary" @click="router.push('/sign-up')">Sign UP</el-link></span><br>
    <el-button @click="signInWithGoogle"> Google </el-button>
    <el-button @click="signInWithGoogle"> Facebook </el-button>
    <el-button @click="signInWithGoogle"> Apple </el-button>
    </el-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const form = reactive({
    email: '',
    password: ''
})
const error = ref('')

const signIn = async () => {
    await store.dispatch('signIn', {
        email: form.email,
        password: form.password
    })

    router.push('/system')
}

const signInWithGoogle = async () => {
    await store.dispatch('signInWithGoogle')

    router.push('/system')
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