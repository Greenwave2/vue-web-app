<template>
  <el-table :data="filterTableData" style="width: 100%" >
    <el-table-column label="Location" prop="location" />
    <el-table-column label="Gateway" prop="gateway_id" />
    <el-table-column label="Status">
      <el-switch
        disabled
        v-model="status"
        class="mb-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        inline-prompt
        :active-icon="Check"
        :inactive-icon="Close"
      />
    </el-table-column>
    <el-table-column label="Interfaces">
      <template #default="scope">
        <el-tag 
        v-for="tag in scope.row.interfaces"
        :key="tag"
        >
          {{ tag.interface.type }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleDetail(scope.row.gateway_id)">
          Detail
        </el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Check, Close } from '@element-plus/icons-vue'

import { getGatewayList } from '@/api/gateway'

const router = useRouter()
const store = useStore()

const status = ref(true)

const search = ref('')
const tableData = ref([])
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.gateway_id.toLowerCase().includes(search.value.toLowerCase())
  )
)

const handleDetail = (id) => {
  const name = 'dashboard/' + id
  // if id in current tabs then add it to tabs
  const currentTabs = store.getters['routerTab/tabs']
  if(!currentTabs.find(tab => tab.name === name)) {
    store.dispatch('routerTab/addTab', name)
  }

  router.push({ path: `/system/${name}`})
}

const handleEdit = (index, row) => {
  console.log(index, row)
}

onBeforeMount(() => {
  const fetchData = async () => {
    const list = await getGatewayList(store.getters['user/idToken'])
    store.dispatch('gateway/setGatewayList', list)

    tableData.value = store.getters['gateway/list']
  }

  fetchData()
})
</script>
