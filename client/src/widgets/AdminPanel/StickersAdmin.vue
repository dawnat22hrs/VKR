<script setup lang="ts">
import AdminSticker from '@/entities/AdminSticker.vue';
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
    <div class="sticker-panel" v-for="sticker in stickers">
        <AdminSticker :stickers="sticker"/>
    </div>
</template>

<style scoped lang="scss">
.sticker-panel {
    width: 800px;
    height: fit-content;
    margin-bottom: 20px;
}
</style>