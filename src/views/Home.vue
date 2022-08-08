<template>
  <el-container>
    <el-header>
      <el-menu default-active="1" mode="horizontal" :ellipsis="false">
        <span style="margin-top: auto; margin-bottom: auto"> KASO </span>
        <div style="flex-grow: 1" />
        <el-menu-item index="1" activated>Home</el-menu-item>
        <el-button
          style="margin-top: auto; margin-bottom: auto; margin-left: 20px"
          type="primary"
          @click="router.push('/sign-in')"
        >
          Login
        </el-button>
      </el-menu>
    </el-header>
    <el-image style="width: 100%" src="/indoor.jpg"> </el-image>
    <el-image
      style="width: 100%"
      src="/asian-farmer-researching-plant-tobacco-farm_40800-190.jpg"
    >
    </el-image>
    <div style="position: absolute; bottom: -94px; left: 150px">
      <span style="color: white; font-size: 64px">好專業農夫</span>
    </div>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
