<template>
    <div v-if="modelValue">
        <h3>{{ modelValue }}</h3>
        <button @click="close">开关</button>
        <Card></Card>
        <tree :data="data"></tree>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Card from '../globalComponents/card.vue';
import tree from '../globalComponents/tree.vue';
interface Tree {
    name: string,
    check: boolean,
    children?: [Tree]
}
let data = reactive<Tree[]>([
    {
        name: '1',
        check: true,
        children: [{
            name: '1-1',
            check: false,
        }]
    },
    {
        name: '2',
        check: false,
        children: [
            {
                name: '2-1',
                check: true
            }
        ]
    }
])
defineExpose(
    data,
)
defineProps<{
    modelValue: boolean
}>()

let emit = defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
}
</script>

<style scoped></style>