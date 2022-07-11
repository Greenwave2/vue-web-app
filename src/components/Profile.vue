<template>
    <h1> Profile </h1>
    <h2> Username: {{ userInfo.username }}</h2>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const idToken = computed(() => store.getters['user/idToken'])
console.log(idToken)

const userInfo = reactive({
    email: "", 
    language: "", 
    status: "", 
    type: "", 
    username: "", 
})

onBeforeMount(() => {
    const getUserInformation = () => {
        console.log(import.meta.env.VITE_API_URL)
        // const url = import.meta.env.VITE_API_URL + '/api/getUserInformation'
        const url = 'http://13.66.157.148:8080/api/getUserInformation'
        axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + idToken.value
            }
        }).then(response => {
            userInfo.username = response.data.userInfo.username
            userInfo.email = response.data.userInfo.email
            userInfo.language = response.data.userInfo.language
            userInfo.status = response.data.userInfo.status
            userInfo.type = response.data.userInfo.type
            
            console.log(userInfo)
        }).catch(error => {
            console.log(error)
        })
    }

    getUserInformation()
})
</script>