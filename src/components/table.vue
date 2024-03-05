<template>
    <div>
        {{ title }}
        <table border="1" width="600px" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>总价</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{ item.name }}</td>
                    <td>{{ item.num }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.num * item.price }}</td>
                    <td><button @click="data.splice(data.indexOf(item), 1)">删除</button></td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
const props = defineProps<{
    title: string
}>()
console.log(props.title);
defineExpose(
    {
        num: 123,
        handle: () => {
            alert('这是暴露给父组件的方法');
        }
    }
)
console.log('setUp');
console.log('111');

onBeforeMount(() => {
    console.log('组件挂载之前');
})
onMounted(() => {
    console.log('组件挂载');
})
onBeforeUpdate(() => {
    console.log('组件数据更新之前');
})
onUpdated(() => {
    console.log('组件数据更新');
})
onBeforeUnmount(() => {
    console.log('组件卸载之前');
})
onUnmounted(() => {
    console.log('组件卸载完毕');
})
let name = ref('张三')
interface Date {
    name: string,
    num: number,
    price: number,
}
let data = reactive<Date[]>([
    {
        name: '张三',
        num: 1,
        price: 100,
    },
    {
        name: '李四',
        num: 3,
        price: 190,
    },
    {
        name: '王五',
        num: 9,
        price: 20,
    },
])
watchEffect(() => {
    console.log(data);
})
</script>

<style scoped></style>