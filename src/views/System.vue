<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main>
            <h1> System </h1>
            <h2> {{ user }} </h2>
            <el-affix>
                <el-button type="primary" @click="signOut"> Sign Out </el-button>
            </el-affix>
        </el-main>
    </el-container>
</template>

<script setup>
// components
import Header from '../components/Header.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const signOut = () => {
    store.dispatch('signOut')

    router.push('/')
}

const user = computed(() => store.getters.getUser)
</script>