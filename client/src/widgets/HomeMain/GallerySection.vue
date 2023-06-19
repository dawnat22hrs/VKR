<script setup lang="ts">
import Gallery from '../Gallery.vue';
</script>

<template>
    <section class="gallery-section">
        <div class="title__block">
            <h2 class="title">Здесь ты всегда можешь посмотреть фотоотчеты</h2>
        </div>
        <div class="gallery">
            <Gallery />
        </div>
    </section>
</template>

<style scoped lang="scss">
.gallery-section {
    height: 836px;

    .title__block {
        margin: 51px auto 57px;

        .title{
            font-style: normal;
            font-weight: 800;
            font-size: 40px;
            line-height: 36px;
            text-align: center;
            color: #000000;
        }
    }
}

</style>