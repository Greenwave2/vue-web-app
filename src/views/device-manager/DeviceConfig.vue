<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Gateway Config"><InterfaceTable /></el-tab-pane>
    <el-tab-pane label="Interface Config">
      <el-row>
        <el-col :span="12"> <InterfaceConfig /></el-col>
        <el-col :span="12"> <SensorTable /></el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="Sensor Config">
      <el-row>
        <el-col :span="12"><SensorConfig /></el-col>
        <el-col :span="12"><SensorValues /></el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import InterfaceTable from './InterfaceComponents/InterfaceTable.vue'
import InterfaceConfig from './SensorComponents/InterfaceConfig.vue'
import SensorTable from './SensorComponents/SensorTable.vue'
import SensorConfig from './ValueComponents/SensorConfig.vue'
import SensorValues from './ValueComponents/SensorValueTable.vue'

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { getGatewayConfig } from '@/api/gateway'

const store = useStore()
const route = useRoute()

onBeforeMount(() => {
  const fetchData = async () => {
    const config = await getGatewayConfig(
      store.getters['user/idToken'],
      route.params.gateway_id
    )
    store.dispatch('gateway/setGatewayConfig', config)
  }

  fetchData()
})
</script>
