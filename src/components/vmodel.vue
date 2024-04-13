<template>
    <div>
        <input label="zrsb" type="checkbox" v-model="firstName">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let bool = ref(false)
function delay(signal?: AbortSignal) {
    return new Promise((res, rej) => {
        if (signal) {
            signal.addEventListener('abort', rej)
        }
        setTimeout(() => {

            console.log(signal?.reason);
            if (signal && signal.aborted) return
            res('222')
            console.log(111);
        }, 1000);
    })
}
let a = new AbortController()
delay(a.signal).then(res => {
    console.log(res);
})
a.abort('reason')


let firstName = ref('1')
</script>

<style scoped></style>