<template>
  <el-page-header
    @back="router.push('/')"
    content="Sign Up"
    style="background-color: white"
  ></el-page-header>
  <el-card class="middle-input-card box-card">
    <h1 style="margin-top: 100px">Sign Up</h1>
    <el-form :model="form" class="middle-input-form">
      <el-input
        class="middle-input-box"
        placeholder="Email"
        v-model="form.email"
      ></el-input>
      <el-input
        class="middle-input-box"
        placeholder="Password"
        v-model="form.password"
        show-password
      ></el-input>
      <el-input
        class="middle-input-box"
        placeholder="Check Password"
        v-model="form.check_password"
        show-password
      ></el-input>
      <el-button style="margin-bottom: 20px" type="primary" @click="signUp"
        >Register</el-button
      >
    </el-form>
    <el-alert v-if="error" type="error" show-icon>
      {{ error.message }}
    </el-alert>
  </el-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  check_password: '',
})
const error = ref('')

const signUp = async () => {
  await store.dispatch('user/signUp', {
    email: form.email,
    password: form.password,
  })

  router.push('/system')
}
</script>

<style scoped>
.box-card {
  width: 480px;
}
.middle-input-card {
  height: 500px;
  max-width: 600px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  margin-bottom: auto;
  border-radius: 10px;
}

.middle-input-form {
  min-width: 250px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.middle-input-box {
  margin-bottom: 20px;
}
</style>
