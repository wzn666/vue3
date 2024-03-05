<template>
    <div>
        <input type="text" v-model="firstName">
    </div>
    <div>
        <input type="text" v-model="lastName">
    </div>
    <div>
        {{ name }}
        {{ name1 }}
    </div>
    <button @click="changes">changes</button>
    <button @click="toF">给父组件传值</button>
</template>

<script setup lang="ts">
import { ref, computed, defineExpose } from 'vue'

let firstName = ref('张')
let lastName = ref('三')

let name = computed({
    get() {
        return firstName.value + lastName.value
    },
    set(newValue) {
        console.log(newValue);
        firstName.value = newValue
        lastName.value = newValue
        return newValue
    }
})

let name1 = computed(() => { return firstName.value + lastName.value })
let changes = () => {
    name.value = '张三'
}
const emit = defineEmits<{
    (e: 'children', value: any): void
}>()
let toF = () => {
    emit('children', '李四')
}

defineExpose(
    {
        num: 123,
        handle: () => {
            alert('这是暴露给父组件的方法');
        }
    }
)
</script>

<style scoped></style>