<template>
    <el-tabs
        v-model="editableTabsValue"
        tab-position="top"
        style="height: 90%"
        @tab-remove="removeTab"
        @tab-click="clickTab"
    >
        <el-tab-pane
            v-for="item in editableTabs"
            :key="item.path"
            :label="item.title"
            :name="item.path"
            :closable="item.closable"
        >
        </el-tab-pane>
        <router-view></router-view>
        <div style="margin-top: 20px">
            <el-button size="small" @click="addTab(editableTabsValue)">
            add tab
            </el-button>
        </div>
    </el-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: 'Table',
        path: 'table', 
        closable: false,
    },
    {
        title: 'KA000001',
        path: 'KA000001',
        closable: true
    }, 
])

const addTab = (targetName) => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
    closable: true
  })
  editableTabsValue.value = newTabName
}

const removeTab = (targetName) => {
    console.log(targetName)
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
            activeName = nextTab.name
            }
        }
        })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}

const router = useRouter()
const clickTab = (pane, ev) => {
    console.log(pane.props.name)
    const dashboardPath = '/system/dashboard/' + pane.props.name
    router.push(dashboardPath)
}
</script>