<template>
    <div @click.stop="getTree(item, $event)" v-for="item in data" :key="item.name">
        <input type="checkbox" v-model="item.check"> <span>{{ item.name }}</span>
        <tree v-if="item?.children?.length" :data="item?.children"></tree>
    </div>
</template>

<script setup lang="ts" >
interface Tree {
    name: string,
    check: boolean,
    children?: Tree[]
}
defineProps<{
    data?: Tree[]
}>()
let getTree = (item: Tree, e: Event) => {
    console.log(item, e);

}
</script>

<style lang="scss" scoped></style>