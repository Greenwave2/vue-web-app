<template>
<el-page-header @back="router.push('/')" content="Reset Password" style="background-color: white"></el-page-header>
    <el-card class="middle-input-card box-card">
        <h1 style="margin-top: 100px;">Reset Password</h1>
        <div class="middle-input-form">
            <el-input class="middle-input-box" v-model="email"></el-input>
            <el-button @click="sendPasswordResetEmail">Send</el-button>
        </div>
    </el-card>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const email = ref('')

const sendPasswordResetEmail = async () => {
    await store.dispatch('user/sendPasswordResetEmail', { email: email.value})

    router.push('/sign-in')
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