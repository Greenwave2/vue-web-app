<template>
    {{ gatewayConfig }}
    {{ route.params.gateway_id }}
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { getGatewayConfig } from '@/api/gateway'

const store = useStore()
const route = useRoute()

const gatewayConfig = computed(() => store.getters['gateway/config'])

onBeforeMount(() => {
    const fetchData = async () => {
        const config = await getGatewayConfig(store.getters['user/idToken'], route.params.gateway_id)
        store.dispatch('gateway/setGatewayConfig', config)
    }

    fetchData()
})
</script>