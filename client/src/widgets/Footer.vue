<script setup lang="ts">

</script>

<template>
    <section class="footer">
        <div class="wrapper">
        <RouterLink to="/"><div class="logo">Лого</div></RouterLink>
        <div class="navigation-menu">
            <nav>
                <RouterLink to="/my-stickers" class="nav__link">Наклейки</RouterLink>
                <RouterLink to="/about-team" class="nav__link">О команде</RouterLink>
                <RouterLink to="/info" class="nav__link">Полезная <br>информация</RouterLink>
            </nav>
        </div>
    </div>
    </section>
</template>

<style scoped lang="scss">
.footer {
    height: 337px;
    background-color: #110D33;

    .wrapper {
        width: 1269px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 118px;

        .navigation-menu {
            display: flex;

            nav {
                display: flex;
                width: 700px;
                justify-content: space-between;

                .nav__link {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 16px;
                    line-height: 24px;
                    color: #fff;
                    text-align: center;
                }
            }
        }
    }
    
}
</style>