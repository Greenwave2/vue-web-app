<template>
    <h1> Profile </h1>
    <h2> uid: {{ user.uid }} </h2>
    <h2> email: {{ user.email }}</h2>
    <h2> displayName: {{ user.displayName }}</h2>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = computed(() => store.getters['user/getUser'])
</script>