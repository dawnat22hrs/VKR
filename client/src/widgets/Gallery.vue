<script setup lang="ts">
import { ref } from 'vue';
import type { ISliderItem } from '@/models/ISliderItem';
import GalleryItem from '@/entities/GalleryItem.vue';

//state
const indexSlide = ref<number>(0)

//data
const sliderItems = ref<ISliderItem[]>([
    {
        id: 1,
        name: 'name',
        img: "https://img3.akspic.ru/crops/8/2/5/9/3/139528/139528-muzyka-rokkoncert-predstavlenie-disk_zhokej-sobytie-3840x2160.jpg",
    },
    {
        id: 2,
        name: 'name',
        img: "https://img2.akspic.ru/crops/3/3/7/1/4/141733/141733-gorodskoj_rajon-svet-estetika-muzyka-gorodok-3840x2160.jpg",
    },
    {
        id: 3,
        name: 'name',
        img: "https://img2.akspic.ru/previews/8/5/1/5/3/135158/135158-proizvoditelnost-microsoft_poverhnost-koncert-predstavlenie-rokkoncert-550x310.jpg",
    },
    {
        id: 4,
        name: 'name',
        img: "https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-3840x2160.jpg",
    },
    {
        id: 5,
        name: 'name',
        img: "https://oir.mobi/uploads/posts/2021-03/1616588307_3-p-vecherinka-fon-3.jpg",
    },

])

//methods
const prewSlide = () => {
    if(indexSlide.value == 0) {
        indexSlide.value = sliderItems.value.length - 1
    } else indexSlide.value--
}

const nextSlide = () => {
    if(indexSlide.value >= sliderItems.value.length - 1) {
        indexSlide.value = 0
    } else indexSlide.value++
}
</script>

<template>
    <div class="wrapper">
        <div class="carusel" :style="{marginLeft: '-' + (100 * indexSlide) + '%'}">
            <GalleryItem 
                :sliderItems="item"
                v-for="item in sliderItems"
                :key="item.id"
            />
        </div>
        <div class="btn__block">
            <div 
                @click="prewSlide" 
                class="prew__btn btn"
            ></div>
            <div 
                @click="nextSlide"
                class="next__btn btn"
            ></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
        max-width: 1000px;
        overflow: hidden;
        margin: 0 auto;
        position: relative;

        .carusel {
            display: flex;
            transition: all ease .5s;
        }

        .btn__block {
            display: flex;
            align-items: center;
            width: 1000px;
            justify-content: space-between;
            margin: 0 auto;
            position: relative;
            top: -350px;
        }

        .btn {
            background: url('../assets/GalleryBtn.png') no-repeat;
            width: 80px;
            height: 82px;
            cursor: pointer;
        }

        .prew__btn {
            rotate: 180deg;
        }
    }
</style>