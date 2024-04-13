<template>
    <slot v-if="props.permission.includes('123')"></slot>
    <slot v-else name="fallback"></slot>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const globalPremission = ref(['123'])
const props = defineProps<{
    permission: Array<string>,
    fallback: String,

}>()


</script>

<style lang="scss" scoped></style>