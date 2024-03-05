<template>
    <div class="card">
        <header>
            <div>标题</div>
            <div>副标题</div>
        </header>
        <section>这是内容</section>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card {
    border: 1px solid #ccc;
    width: 300px;
    height: 180px;
    padding: 10px;
    header{
        display: flex;
        justify-content: space-between;
        height: 40px;
    }
    section{
        height: 140px;
        width: 100%;
    }
}
</style>