import { createStore } from 'vuex'
import user from './modules/user'
import dashboard from './modules/dashboard'
import gateway from './modules/gateway'

const store = createStore({
    modules: {
        user: user,
        dashboard: dashboard, 
        gateway: gateway
    }
})

export default store