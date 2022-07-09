<template>
    <el-tabs
        class="dashboard-tabs"
        type="card"
        v-model="activeTab"
        tab-position="top"
        style="height: 90%"
        @tab-remove="removeTab"
        @tab-click="clickTab"
    >
        <el-tab-pane
            v-for="item in tabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :closable="item.closable"
        >
        </el-tab-pane>
        <router-view></router-view>
        <div style="margin-top: 20px">
            <el-button size="small" @click="addTab('KA000001')">
            add tab
            </el-button>
            <el-button size="small" @click="pp">
                test
            </el-button>
        </div>
    </el-tabs>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const router = useRouter()

// get all tabs and the activated tab
const tabs = computed(() => store.getters['dashboard/tabs'])
const activeTab = ref(route.path.split('/')[3])

const addTab = (name) => {
    store.dispatch('dashboard/addTab', name)
}

const removeTab = (name) => {
    store.dispatch('dashboard/removeTab', name)
}

// change route when click tab
const clickTab = (pane, ev) => {
    console.log(pane.props.name)
    const dashboardPath = '/system/dashboard/' + pane.props.name
    router.push(dashboardPath)
}

// use to test variable in vuex
const pp = () => {
    console.log(tabs)
}
</script>

<style>
/* 讓 Table 不要黏在 tabs 下面 */
.dashboard-tabs > .el-tabs__content {
  padding: 16px;
}
</style>