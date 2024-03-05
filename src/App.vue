<script setup lang="ts">
import { Ref, ref, onMounted } from 'vue'
import vueComponent from './components/name.vue'
import table1 from './components/table.vue'
import getChild from './components/getChild.vue';
const vue1 = ref<InstanceType<typeof vueComponent>>()
onMounted(() => {

  console.log(vue1.value?.num);

  vue1.value?.handle()
})

let name: string = '张三'
let msg = ref('hallow world')
let timer: any
let hideComponent = ref<boolean>(true)

const changes = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    msg.value = 'ooi'
    console.log(msg);
  }, 500);
  // const vueRef = ref<InstanceType<typeof vue1> | null>(null)

  const vueRef = ref() as Ref<InstanceType<typeof getChild> | null>
  if (vueRef.value) {
    console.log(vueRef.value);

  }


  // vueRef.value?.handle()
}
const handleOnUnmounted = () => {
  hideComponent.value = !hideComponent.value
}
let ops = (params: any) => {
  console.log(params, '这是子组件传来的参数');

}
</script>

<template>
  <getChild ref="child"> </getChild>
  <table1 ref="ref2" v-if="hideComponent" :title="name"></table1>
  <vueComponent ref="vue1" @children="ops"></vueComponent>
  <div>{{ msg }}
  </div>
  <button class="yy-btn" @click="changes">button</button>
  <button @click="handleOnUnmounted">卸载组件<span class="yy-btn__spans">123</span></button>
  <div class="yy-btn__spans--gg">uuu</div>
</template>

<style lang="scss" scoped>
@include b(btn) {
  color: red;

  @include e(spans) {
    color: blue;

    @include m(gg) {
      color: green;
    }
  }

}
</style>
