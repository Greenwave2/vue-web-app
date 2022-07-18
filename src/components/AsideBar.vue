<template>
    <el-menu
        :default-active="activeIndex"
        active-text-color="#409eff"
        background-color="#304156"
        text-color="#bfcbd9"
        @select="handleSelect"
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

import { ref, watch, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const activeIndex = ref('')

onBeforeMount(() => {
    activeIndex.value = route.path.split('/')[2]
})

watch(() => route.path,() => {
    // console.log("AsideBar.vue [watch] route change:  ", route.path.split('/')[2])
    activeIndex.value = route.path.split('/')[2]
})

const router = useRouter()
const handleSelect = (key, keyPath) => {
//   console.log("AsideBar.vue [handleSelect] to: " + "/system/" + key)
  router.push("/system/" + key)
}
</script>
