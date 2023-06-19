<script setup lang="ts">
import Sticker from '../../entities/Sticker.vue';
import type { ISticker } from '../../models/ISticker'
import { ref } from 'vue';
import { useStickerStore } from '@/app/stores/stickerStore';
import { onMounted } from 'vue';

const store = useStickerStore()
const stickers = ref<ISticker[]>([])

onMounted( async () => {
    const response = await store.getAllSticker()
    stickers.value = response[0]
    stickers.value = stickers.value.sort((a, b) => a.id > b.id ? 1 : -1)
})
</script>
<template>
    <section class="store">
            <div class="title__blcok">
                <h2 class="title">МОИ НАКЛЕЙКИ</h2>
            </div>
            <div class="sticker-store">
                <div v-for="sticker in stickers">
                    <Sticker 
                    :stickers="sticker" 
                    />
                </div>
            </div>
        </section>
</template>

<style scoped lang="scss">
.store {
    height: fit-content;
    margin-top: 40px;
    margin-bottom: 40px;

    .title {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 36px;
        text-align: center;
        color: #000000;
    }

    .sticker-store {
        width: 1193px;
        margin: 59px auto 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 100px;
    }
}
</style>