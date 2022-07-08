<template>
    <el-container>
        <el-aside width="200px">
            <AsideBar />
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
// components
import Header from '../components/Header.vue'
import AsideBar from '../components/AsideBar.vue'
</script>