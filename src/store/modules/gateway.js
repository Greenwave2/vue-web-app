const state = {
    config: null, 
    list: []
}

const getters = {
    config: (state) => {
        return state.config
    }, 
    list: (state) => {
        return state.list
    }
}

const mutations = {
    SET_CONFIG (state, config) {
        state.config = config
    }, 
    SET_LIST (state, list) {
        state.list = list
    }
}

const actions = {
    setGatewayConfig ({ commit }, config) {
        commit('SET_CONFIG', config)
    }, 
    setGatewayList ({ commit }, list) {
        commit('SET_LIST', list)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}