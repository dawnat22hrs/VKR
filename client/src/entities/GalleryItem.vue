<script setup lang="ts">
import type { ISliderItem } from '@/models/ISliderItem';

const props = defineProps<({
    sliderItems: ISliderItem
})>()

</script>

<template>
    <img :src="props.sliderItems.img" alt="img" class="img" /> 
</template>

<style scoped lang="scss">
        .img {
            width: 1000px;
            height: 610px;
        }
</style>