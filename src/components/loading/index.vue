<template>
    <div>
        <div v-if="isShow" class="loading">

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isShow = ref<boolean>(false)

const show = () => {
    isShow.value = true
}

const hide = () => {
    isShow.value = false
}

defineExpose({
    show,
    hide,
    isShow
})
</script>

<style scoped>
.loading{
    width: 100px;
    height: 100px;
    background-color: chartreuse;
}
</style>