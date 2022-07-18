import { useRoute } from 'vue-router'

const state = {
    tabs: [
        {
            title: 'Dashdoard Table',
            name: 'dashboard/table',
            closable: false,
        }, 
        {
            title: 'Device Table',
            name: 'device-manager/table',
            closable: false,
        }, 
    ], 
    activeTab: 'dashboard/table',
}

const getters = {
    tabs: (state) => {
        return state.tabs
    }, 
    activeTab: (state) => {
        const route = useRoute()
        return route.path.split('/')[2] + '/' + route.path.split('/')[3]
    }
}

const mutations = {
    SET_TABS (state, tabs) {
        state.tabs = tabs
    }
}

const actions = {
    addTab ({ commit }, newTabName) {
        const newTabs = [...state.tabs, {
            title: newTabName,
            name: newTabName,
            closable: true
        }]

        commit('SET_TABS', newTabs)
    }, 
    removeTab ({ commit }, tabName) {
        const newTabs = state.tabs.filter(tab => tab.name !== tabName)

        commit('SET_TABS', newTabs)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}