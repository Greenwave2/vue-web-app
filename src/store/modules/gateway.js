const state = {
  config: [],
  list: [],
}

const getters = {
  config: state => {
    return state.config
  },
  interfaces: state => {
    if (state.config.length === 0) return []

    // console.log('[getters] interfaces: ', state.config[0].interfaces)
    return state.config[0].interfaces
  },
  type_params: state => index => {
    if (state.config.length === 0) return []

    // console.log('[getters] type_params: ', state.config[0].interfaces[index].type_params)
    return state.config[0].interfaces[index].type_params
  },
  sensors: state => {
    if (state.config.length === 0) return []

    let result = []
    state.config[0].interfaces.forEach(inter => {
      inter.sensors.forEach(sensor => {
        sensor.interface_id = inter.interface_id
        result.push(sensor)
      })
    })

    console.log('[getters] sensors: ', result)
    return result
  },
  list: state => {
    return state.list
  },
}

const mutations = {
  SET_CONFIG(state, config) {
    state.config = config
  },
  SET_LIST(state, list) {
    state.list = list
  },
  // interface part
  ADD_INTERFACE(state) {
    const new_interface = {
      interface_id: '',
      type: '',
      type_params: {},
      protocal: '',
      sensors: [],
    }
    state.config[0].interfaces.push(new_interface)
  },
  DELETE_INTERFACE(state, index) {
    state.config[0].interfaces.splice(index, 1)
  },
  EDIT_INTERFACE(state, payload) {
    const { index, id, type, protocol } = payload
    state.config[0].interfaces[index].interface_id = id
    state.config[0].interfaces[index].type = type
    state.config[0].interfaces[index].protocol = protocol
  },
  ADD_TYPE_PARAM(state, payload) {
    const { index, key, value } = payload
    state.config[0].interfaces[index].type_params[key] = value
  },
  DELETE_TYPE_PARAM(state, payload) {
    const { index, key } = payload
    delete state.config[0].interfaces[index].type_params[key]
  },
  // sensor part
}

const actions = {
  setGatewayConfig({ commit }, config) {
    commit('SET_CONFIG', config)
  },
  setGatewayList({ commit }, list) {
    commit('SET_LIST', list)
  },
  addInterface({ commit }) {
    commit('ADD_INTERFACE')
  },
  deleteInterface({ commit }, index) {
    commit('DELETE_INTERFACE', index)
  },
  editInterface({ commit }, payload) {
    const { index, id, type, protocol } = payload
    console.log('[actions] editInterface: ', index, id, type, protocol)
    commit('EDIT_INTERFACE', payload)
  },
  addTypeParam({ commit }, payload) {
    const { index, key, value } = payload
    console.log('[actions] addTypeParam: ', index, key, value)
    commit('ADD_TYPE_PARAM', payload)
  },
  deleteTypeParam({ commit }, payload) {
    const { index, key } = payload
    console.log('[actions] deleteTypeParam: ', index, key)
    commit('DELETE_TYPE_PARAM', payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
