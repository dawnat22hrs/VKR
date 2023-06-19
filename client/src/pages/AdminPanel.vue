<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavigationAdmin from '@/widgets/AdminPanel/NavigationAdmin.vue';
</script>

<template>
    <section class="section">
        <NavigationAdmin />
        <RouterView></RouterView>
    </section>
</template>

<style scoped lang="scss">
.section {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>