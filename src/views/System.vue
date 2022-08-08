<template>
  <fullscreen class="full-height">
    <el-container class="full-height">
      <el-aside width="200px">
        <AsideBar class="full-height" />
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
  </fullscreen>
</template>

<script setup>
// components
import Header from '../components/Header.vue'
import AsideBar from '../components/AsideBar.vue'
import RouterTabs from '../components/RouterTabs.vue'

import { onBeforeMount } from 'vue'

import { ElNotification } from 'element-plus'

import { messaging } from '@/firebase'
import { onMessage, getToken } from 'firebase/messaging'
import { subscribeGatewayTopics } from '@/api/FCM'

onBeforeMount(() => {
  const fetchToken = async () => {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey:
          'BOrKMy0a7AnYTMBeUZjDjE3cIKgyhYWyByN_MQ6eFbOaOF7z3YTrtTvhgAcKJQqg2abLgpVEpVMo5tYog3OybqI',
      })
      if (currentToken) {
        await subscribeGatewayTopics(currentToken, ['KA0000001'])
      } else {
        console.log('No token available. User is not logged in.')
      }

      onMessage(messaging, payload => {
        console.log('Message received. ', payload)
        ElNotification({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning',
        })
      })
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err)
    }
  }

  fetchToken()
})
</script>

<style>
.full-height {
  height: 100%;
}
</style>
