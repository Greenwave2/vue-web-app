<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <el-container>
        <el-header>
            <el-affix>
                <el-button type="primary" @click="router.push('/sign-in')"> Login </el-button>
            </el-affix>
        </el-header>
        <el-main>
            Welcome
        </el-main>
    </el-container>
</template>