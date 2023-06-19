<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from '@/shared/Button.vue'

//state
const popupVisible = ref<boolean>(true)

defineEmits(['loginPopup', 'logout'])
const props = defineProps({
    isAuth: Boolean,
    isAdmin: Boolean
})
</script>

<template>
<header>
    <div class="wrapper">
        <RouterLink to="/"><div class="logo">Лого</div></RouterLink>
        <div class="navigation-menu">
            <div class="admin">
                <RouterLink to="/admin" class="nav__link" v-if="props.isAdmin">Панель <br>администратора</RouterLink>
            </div>
            <nav>
                <RouterLink to="/my-stickers" class="nav__link" v-if="props.isAuth">Мои <br>наклейки</RouterLink>
                <RouterLink to="/upcoming-events" class="nav__link">Предстоящие<br> мероприятия</RouterLink>
                <RouterLink to="/past-events" class="nav__link">Предстоящие <br>мероприятия</RouterLink>
                <RouterLink to="/institute" class="nav__link" v-if="props.isAuth">Мой <br>институт</RouterLink>
                <RouterLink to="/about-team" class="nav__link">О команде <br>проекта</RouterLink>
                <RouterLink to="/info" class="nav__link">Полезная <br>информация</RouterLink>
            </nav>
            <Button
                @click="$emit('logout')"
                v-if="props.isAuth"
                style="font-weight: 800; margin-left: 76px;"
            >выйти</Button>
            <Button 
                v-else
                @click="$emit('loginPopup', popupVisible)"
                style="font-weight: 800; margin-left: 76px;" 
            >войти</Button>
        </div>
    </div>
</header>
</template>

<style scoped lang="scss">
header {
    width: 1269px;
    margin: 0 auto;
    padding-top: 27px;
    background: transparent;

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .admin {
            display: flex;
            justify-content: center;
            margin-right: 40px;
        }

        .navigation-menu {
            display: flex;

            nav {
                display: flex;
                width: 700px;
                justify-content: space-between;

                
            }
        }

        .nav__link {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 16px;
                    line-height: 24px;
                    color: #000000;
                    text-align: center;
                }
    }
}
</style>