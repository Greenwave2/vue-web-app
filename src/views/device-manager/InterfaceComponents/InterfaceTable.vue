<template>
  <div>
    <el-table :data="interfaces" style="width: 100%" max-height="250">
      <el-table-column
        fixed
        prop="interface_id"
        label="Interface ID"
        width="150"
      />
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="protocol" label="Protocol" />
      <el-table-column fixed="right" label="Operations" width="170">
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
            @click.prevent="
              editRow(
                scope.$index,
                scope.row.interface_id,
                scope.row.type,
                scope.row.protocol
              )
            "
          >
            Edit
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="handleDetail(scope.$index)"
          >
            Detail
          </el-button>
          <el-drawer
            v-model="drawer"
            title="Edit Interface"
            :with-header="false"
          >
            <el-form>
              <el-form-item label="Interface ID">
                <el-input
                  v-model="inputId"
                  placeholder="Interface ID"
                ></el-input>
              </el-form-item>
              <el-form-item label="Type">
                <el-select v-model="selectedType" placeholder="Select">
                  <el-option label="wifi" value="wifi" />
                  <el-option label="ble" value="ble" />
                </el-select>
              </el-form-item>
              <el-form-item label="Protocol">
                <el-select v-model="selectedProtocol" placeholder="Select">
                  <el-option label="modbus" value="modbus" />
                  <el-option label="rs485" value="rs485" />
                </el-select>
              </el-form-item>
              <el-button
                type="primary"
                @click.prevent="comfirmEdit(scope.$index)"
              >
                Confirm
              </el-button>
            </el-form>
          </el-drawer>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="onAddItem">
      Add Interface
    </el-button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const interfaces = computed(() => store.getters['gateway/interfaces'])

const drawer = ref(false)
const inputId = ref('')
const selectedType = ref('')
const selectedProtocol = ref('')

const deleteRow = index => {
  console.log('deleteRow', index)
  store.dispatch('gateway/deleteInterface', index)
}

const editRow = (index, id, type, protocol) => {
  console.log('editRow', index)
  inputId.value = id
  selectedType.value = type
  selectedProtocol.value = protocol
  drawer.value = true
}

const comfirmEdit = index => {
  console.log('comfirmEdit', index)
  console.log(inputId.value, selectedType.value, selectedProtocol.value)
  store.dispatch('gateway/editInterface', {
    index,
    id: inputId.value,
    type: selectedType.value,
    protocol: selectedProtocol.value,
  })
  drawer.value = false
}

const handleDetail = index => {
  console.log('handleDetail', index)
}

const onAddItem = () => {
  store.dispatch('gateway/addInterface')
  editRow(interfaces.value.length - 1, '', '', '')
}
</script>
