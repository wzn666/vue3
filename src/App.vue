<script setup lang="ts">
import {
  Ref, ref,
  onMounted, Directive, DirectiveBinding, resolveComponent, getCurrentInstance,
  useAttrs
} from 'vue'


import vueComponent from './components/name.vue'
// import table1 from './components/table.vue'
// import vmodel from './components/vmodel.vue'
// import HasPermission from './globalComponents/hasPermission.vue'
// console.log(HasPermission);

// import type { Directive } from 'vue';
import getChild from './components/getChild.vue';
import lazyLoad from './components/lazyLoad.vue';
// import Card from './globalComponents/card.vue'
const vue1 = ref<InstanceType<typeof vueComponent>>()
onMounted(() => {

  // console.log(vue1.value?.num);

  // vue1.value?.handle()
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
  childView.value = !childView.value
}
let ops = (params: any) => {
  console.log(params, '这是子组件传来的参数');

}

const childView = ref<boolean>(true)
const vHasShow: Directive<HTMLElement> = (el, bind) => {
  console.log(el, bind.value);
  let user = localStorage.getItem('user')
  if (!permission?.includes(user + ':' + bind.value)) {
    el.style.display = 'none'
  }

}
localStorage.setItem('user', 'wzn')
const permission = [
  'wzn:shop:create',
  // 'wzn:shop:delete',
  'wzn:shop:edit'
]

const vMove: Directive<any, string> = (el: HTMLElement, bind: DirectiveBinding) => {
  console.log(el, bind.value);
  let head = el.firstElementChild as HTMLElement
  // function mouseDown(e: MouseEvent) {
  //   let x = e.clientX - el.offsetLeft
  //   let y = e.clientY - el.offsetTop
  //   function mouseMove(e: MouseEvent) {
  //     el.style.left = e.clientX - x + 'px'
  //     el.style.top = e.clientY - y + 'px'
  //   }
  //   document.addEventListener('mousemove', mouseMove)
  //   document.addEventListener('mouseup', () => {
  //     document.removeEventListener('mousemove', mouseMove)
  //   })
  // }
  // head.addEventListener('mousedown', mouseDown)
  // return

  document.addEventListener('mousedown', (e: MouseEvent) => {
    if (e.target !== head) return null
    let num = new AbortController()
    let x = e.clientX - el.offsetLeft
    let y = e.clientY - el.offsetTop
    document.addEventListener('mousemove', (e: MouseEvent) => {
      el.style.left = e.clientX - x + 'px'
      el.style.top = e.clientY - y + 'px'
    }, { signal: num.signal })
    document.addEventListener('mouseup', () => {
      num.abort()
    },
      { once: true }
    )
    // document.addEventListener('mouseout', () => { num.abort() })

  })





}
// console.log(resolveComponent('HasPermission'));
// console.log(getCurrentInstance());
// function l(a: any) {
//   // console.log('00000', a);

// }
</script>

<template>
  <lazyLoad :name="1234" :age="888"></lazyLoad>
  <!-- {{ l($setup) }} -->
  <!-- <vmodel></vmodel> -->
  <!-- <div fallback="没有权限" v-hasPermission.fallback="['123']">
    zrsb
  </div> -->
  <!-- <Card></Card> -->
  <!-- <div class="box" v-move="'move'">
    <div class="header"></div>
    <div class="content">内容</div>
  </div> -->
  <!-- <button class="btn" v-has-show="'shop:create'">创建</button>
  <button class="btn" v-has-show="'shop:delete'">删除</button>
  <button class="btn" v-has-show="'shop:edit'">编辑</button> -->
  <!-- <keep-alive>

    <table1 ref="ref2" v-if="hideComponent" :title="name"></table1>
  </keep-alive>
  <getChild v-model="childView"> </getChild>
  <vueComponent ref="vue1" @children="ops"></vueComponent>

  <div>{{ msg }}
  </div>
  <button class="yy-btn" @click="changes">button</button>
  <button @click="handleOnUnmounted">卸载组件<span class="yy-btn__spans">123</span></button>
  <div class="yy-btn__spans--gg">uuu</div> -->
</template>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 200px;
  background: #ccc;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;

  .header {
    height: 20px;
    width: 100%;
    background-color: black;
  }
}

.btn {
  background: #ccc;
  margin-right: 20px;
}

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
