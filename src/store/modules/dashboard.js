const state = {
    tabs: [
        {
            title: 'Table',
            name: 'table',
            closable: false,
        }, 
        {
            title: 'KA00001',
            name: 'KA00001',
            closable: true,
        }
    ], 
}

const getters = {
    tabs: (state) => {
        return state.tabs
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