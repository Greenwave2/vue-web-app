const state = {
    config: null
}

const getters = {
    config: (state) => {
        return state.config
    }
}

const mutations = {
    SET_CONFIG (state, config) {
        state.config = config
    }
}

const actions = {
    setGatewayConfig ({ commit }, config) {
        commit('SET_CONFIG', config)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}