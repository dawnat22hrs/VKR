<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="panel">
            <nav>
                <RouterLink to="/admin/directors" class="nav-link">Директоры</RouterLink>
                <RouterLink to="/admin/VVR" class="nav-link">Зам. директора</RouterLink>
                <RouterLink to="/admin/institutes" class="nav-link">Институты</RouterLink>
                <RouterLink to="/admin/chairmans" class="nav-link">Председатели</RouterLink>
            </nav>
    </div>
</template>

<style scoped lang="scss">
.panel {
        width: 800px;
        height: 100px;
        background-color: #9489F2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin: 40px 0 40px;

        nav {
            display: flex;
            width: 100%;
            justify-content: space-around;
        }

        .nav-link {
            color: #fff;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>