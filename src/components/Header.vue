<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="flex-grow" />
    <el-sub-menu index="lang">
      <template #title>Languages</template>
      <el-menu-item index="english">English</el-menu-item>
      <el-menu-item index="chinese">Chinese</el-menu-item>
      <el-menu-item index="japanese">Japanese</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="user">
      <template #title><el-icon><Avatar /></el-icon></template>
      <el-menu-item index="profile">Profile</el-menu-item>
      <el-menu-item index="signOut">Sign Out</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { Avatar } from '@element-plus/icons-vue'

import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const signOut = () => {
    store.dispatch('user/signOut')
    router.push('/')
}

const activeIndex = ref('user')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)

  if (key === 'signOut') {
    signOut()
  } else if (key === 'profile') {
    router.push('/system/profile')
  } else if (key === 'lang') {
  }
  
  activeIndex.value = key
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
