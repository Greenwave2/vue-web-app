<template>
    <el-container class="full-height">
        <el-aside width="200px">
            <AsideBar class="full-height"/>
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <RouterTabs />
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
// components
import Header from '../components/Header.vue'
import AsideBar from '../components/AsideBar.vue'
import RouterTabs from '../components/RouterTabs.vue'
</script>

<style>
.full-height {
    height: 100%;
}
</style>