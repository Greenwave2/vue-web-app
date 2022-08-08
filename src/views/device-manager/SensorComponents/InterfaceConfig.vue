<template>
  <el-form :model="type_params">
    <el-form-item>
      <span style="margin-botton: 10px">Type Parameters: </span>
    </el-form-item>
    <el-form-item
      v-for="(i, key, index) in type_params"
      :key="index"
      :label="key"
    >
      <el-input style="width: 60%" v-model="type_params[key]" />
      <el-button type="danger" style="width: 80px" @click="deleteParam(key)">
        Remove
      </el-button>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="paramNameInput"></el-input>
      </el-col>
      <el-col :span="10">
        <el-input v-model="paramValueInput"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" style="width: 100%" @click="onAddParam">
          Add Parameter
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const type_params = computed(() => store.getters['gateway/type_params'](0))

const paramNameInput = ref('')
const paramValueInput = ref('')

const deleteParam = key => {
  store.dispatch('gateway/deleteTypeParam', { index: 0, key })
}

const onAddParam = () => {
  store.dispatch('gateway/addTypeParam', {
    index: 0,
    key: paramNameInput.value,
    value: paramValueInput.value,
  })
}
</script>
