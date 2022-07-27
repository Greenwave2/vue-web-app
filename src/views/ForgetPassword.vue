<template>
    <el-input v-model="email"></el-input>
    <el-button @click="sendPasswordResetEmail">Send</el-button>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const store = useStore()
const email = ref('')

const sendPasswordResetEmail = async () => {
    await store.dispatch('user/sendPasswordResetEmail', { email: email.value})

    router.push('/sign-in')
}
</script>