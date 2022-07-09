<template>
    {{ route.params.gateway_id }}
    
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>