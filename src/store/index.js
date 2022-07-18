import { createStore } from 'vuex'
import user from './modules/user'
// import dashboard from './modules/dashboard'
import gateway from './modules/gateway'
import routerTab from './modules/routerTab'

const store = createStore({
    modules: {
        user: user,
        // dashboard: dashboard, 
        gateway: gateway,
        routerTab: routerTab,
    }
})

export default store