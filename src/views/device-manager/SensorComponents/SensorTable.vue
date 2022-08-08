<template>
  <div>
    <!-- <span>{{ sensors }}</span> -->
    <el-table :data="sensors" style="width: 100%" max-height="250">
      <el-table-column
        fixed
        prop="interface_id"
        label="Interface ID"
        width="100"
      />
      <el-table-column fixed prop="sensor_id" label="Sensor ID" />
      <el-table-column fixed="right" label="Operations" width="150">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            Remove
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            Detail
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="onAddItem"> Add Sensor </el-button>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { getGatewayConfig } from '@/api/gateway'

const store = useStore()
const route = useRoute()

const sensors = computed(() => store.getters['gateway/sensors'])

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

const deleteRow = index => {}

const onAddItem = () => {}
</script>
