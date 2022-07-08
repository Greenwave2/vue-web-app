<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="2"
        text-color="#fff"
        @open="handleSelect"
        @close="handleSelect"
    >
        <el-menu-item index="logo">LOGO</el-menu-item>
        <el-menu-item index="dashboard">
            <el-icon><DataBoard /></el-icon>
            <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="device-manager">
            <el-icon><icon-menu /></el-icon>
            <span>Device Manager</span>
        </el-menu-item>
        <el-menu-item index="setting">
            <el-icon><setting /></el-icon>
            <span>Setting</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import {
  DataBoard,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleSelect = (key, keyPath) => {
  console.log("/system/" + key)

  router.push("/system/" + key + "/table")
}
</script>
