<template>
    <div>
        <!-- <img class="img" :id="'ima' + index" v-lazy="item" v-for="(item, index) in arr" :key="index" :src="item" alt=""
            srcset=""> -->
        <img id="img" src="../assets/images/5.jpg" alt="" srcset="">
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, Directive, useAttrs } from 'vue'
import useBase64 from '../hooks/lifeFun'
useBase64({
    el: '#img'
}).then(res => {
    console.log(res.baseUrl);

})
let attr = useAttrs()
console.log(attr);
let images: Record<string, { default: string }> = import.meta.glob('../assets/images/*.*', { eager: true })
let arr = Object.values(images).map(v => v.default)

const vLazy: Directive<HTMLImageElement> = async (el, binding) => {
    // console.log(el);
    const def = await import('../assets/vue.svg')
    el.src = def.default
    // console.log(binding);
    const obser = new IntersectionObserver((entry) => {
        // console.log(entry[0].intersectionRatio, binding.value);
        if (entry[0].intersectionRatio > 0) {
            setTimeout(() => {
                el.src = binding.value
                obser.unobserve(el)
            }, 1000);

        } else {
            setTimeout(() => {
                el.src = def.default
            }, 1000)
        }
        // 
    })
    obser.observe(el)

}
// console.log(arr);

// console.log(images);

</script>

<style scoped>
img {
    width: 375px;
    height: 667px
}
</style>