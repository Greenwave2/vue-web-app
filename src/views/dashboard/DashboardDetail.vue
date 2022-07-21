<template>
    <h1>{{ route.params.gateway_id }}</h1>
    <div class="view" v-for="(inter, index) in DashboardConfig.interfaces" :key="index">
        <h4> Interface ID: {{ inter.interface_id }} </h4>
        <div v-for="(sensor, index) in inter.sensors" :key="index">
            <h5> Sensor ID: {{ sensor.sensor_id }} </h5>
            <el-row :gutter="12">
                <el-col v-for="(val, index) in sensor.sensor_values" :key="index" :xs="24" :sm="12" :md="6">
                    <el-card shadow="always"> 
                        <template #header>
                            <div class="card-header">
                                <span>{{ val.name }}</span>
                            </div>
                        </template>
                        <p> 12.12 {{ val.unit }} </p>
                        <el-button class="button" type="primary" text> history </el-button>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { getDashboardConfig } from '@/api/dashboard'

const store = useStore()
const route = useRoute()

const DashboardConfig = computed(() => store.getters['dashboard/config'])

onBeforeMount(() => {
    const fetchData = async () => {
        const config = await getDashboardConfig(store.getters['user/idToken'], route.params.gateway_id)
        store.dispatch('dashboard/setDashboardConfig', config)
    }

    fetchData()
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