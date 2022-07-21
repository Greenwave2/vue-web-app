<template>
  <el-tag
    v-for="tab in tabs"
    :key="tab.name"
    class="mx-1"
    :closable="tab.name === 'dashboard/table' || tab.name === 'device-manager/table' ? false : true"
    :disable-transitions="false"
    @close="removeTab(tab.name)"
    :effect="activeTab === tab.name ? 'dark' : 'light'"
    @click="clickTab(tab.name)"
  >
    {{ tab.title }}
  </el-tag>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

// get all tabs and the activated tab
const tabs = computed(() => store.getters['routerTab/tabs'])
const activeTab = computed(() => store.getters['routerTab/activeTab'])

const removeTab = (name) => {
    store.dispatch('routerTab/removeTab', name)
}

// change route when click tab
const clickTab = (name) => {
  console.log(name)
  const dashboardPath = '/system/' + name
  console.log(dashboardPath)
  router.push(dashboardPath)
}

onBeforeMount(() => {
    // add active tab if it is not in tabs
    console.log(activeTab.value)
    if(!tabs.value.find(tab => tab.name === activeTab.value)) {
        store.dispatch('routerTab/addTab', activeTab.value)
    }
})
</script>
