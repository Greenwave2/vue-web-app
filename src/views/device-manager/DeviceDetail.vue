<template>
    <h1>{{ route.params.gateway_id }}</h1>
    <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
            <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
            >
            Remove
            </el-button>
        </template>
        </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 100%" @click="onAddItem"
        >Add Item</el-button
    >
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import dayjs from 'dayjs'

import { getGatewayConfig } from '@/api/gateway'

const store = useStore()
const route = useRoute()

const gatewayConfig = computed(() => store.getters['gateway/config'])

onBeforeMount(() => {
    const fetchData = async () => {
        const config = await getGatewayConfig(store.getters['user/idToken'], route.params.gateway_id)
        store.dispatch('gateway/setGatewayConfig', config)
    }

    fetchData()
})

const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

const deleteRow = (index) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
</script>