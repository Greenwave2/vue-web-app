<template>
  <div>
    <h1>{{ route.params.gateway_id }}</h1>
    <div
      class="view"
      v-for="(inter, index) in !DashboardConfig
        ? []
        : DashboardConfig.interfaces"
      :key="index"
    >
      <h4>Interface ID: {{ inter.interface_id }}</h4>
      <div v-for="(sensor, index) in inter.sensors" :key="index">
        <h5>Sensor ID: {{ sensor.sensor_id }}</h5>
        <el-row :gutter="12">
          <el-col
            v-for="(val, index) in sensor.sensor_values"
            :key="index"
            :xs="24"
            :sm="12"
            :md="6"
          >
            <el-card shadow="always">
              <template #header>
                <div class="card-header">
                  <span>{{ val.name }}</span>
                </div>
              </template>
              <p>
                {{
                  !data
                    ? ''
                    : data
                        .find(i => i.interface_id === inter.interface_id)
                        .sensors.find(s => s.sensor_id === sensor.sensor_id)
                        .sensor_values[val.id]
                }}
                {{ val.unit }}
              </p>
              <el-button class="button" type="primary" text>
                history
              </el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import * as mqtt from 'mqtt/dist/mqtt.min.js'

import { getDashboardConfig } from '@/api/dashboard'

const store = useStore()
const route = useRoute()

const DashboardConfig = computed(() => store.getters['dashboard/config'])

onBeforeMount(() => {
  const fetchData = async () => {
    const config = await getDashboardConfig(
      store.getters['user/idToken'],
      route.params.gateway_id
    )
    store.dispatch('dashboard/setDashboardConfig', config)
  }

  fetchData()
})

const data = ref(null)
const opt = {
  port: 8883,
  clientId: 'config_testaaa',
  username: 'techware',
  password: 'temppwd',
}
var client = mqtt.connect('ws://13.66.157.148', opt)

client.on('connect', () => {
  client.subscribe(
    'greenwave/SBC700/' + route.params.gateway_id + '/gatewayData',
    function (err) {
      if (!err) {
        console.log('connected')
      }
    }
  )
})

client.on('message', (topic, message) => {
  console.log(JSON.parse(message.toString()))
  data.value = JSON.parse(message.toString())
})

client.on('error', err => {
  console.log('mqtt error: ', err)
})

onBeforeUnmount(() => {
  client.end()
})
</script>

<style scoped>
.view {
  text-align: left;
}
.button {
  margin-left: 70%;
  margin-right: 0;
}
</style>
