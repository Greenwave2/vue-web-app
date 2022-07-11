<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="Location" prop="location" />
    <el-table-column label="Gateway" prop="id" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleDetail(scope.row.id)">
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
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.id.toLowerCase().includes(search.value.toLowerCase())
  )
)

const handleDetail = (id) => {
  // if id in current tabs then add it to tabs
  const currentTabs = store.getters['dashboard/tabs']
  if(!currentTabs.find(tab => tab.name === id)) {
    store.dispatch('dashboard/addTab', id)
  }

  router.push({ path: `/system/dashboard/${id}`})
}

const handleEdit = (index, row) => {
  console.log(index, row)
}

const tableData = [
  {
    location: 'ohga',
    id: 'KA000001',
  },
  {
    location: 'ohga',
    id: 'KA000002',
  },
  {
    location: 'ohga',
    id: 'KA000003',
  },
  {
    location: 'ohga',
    id: 'KA000004',
  },
]
</script>
