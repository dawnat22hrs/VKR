<script setup lang="ts">
import Button from '@/shared/Button.vue';
</script>

<template>
    <section class="directors-section">
        <div class="container">
            <div class="director__block">
                <div class="photo__block">
                    <img src="https://f-ippst.udsu.ru/files/ippst.png" style="height: 150px" alt="">
                    <p class="institute">ИППСТ</p>
                </div>
                <div class="info__block">
                    <p class="name">Институт педагогики, психологии и социальных технологий</p>
                    <p class="info">Очень интересная информация про ИППСТ! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, magni. Non quo sunt, adipisci impedit, neque quisquam exercitationem a inventore autem rem accusantium cum libero dolor provident minima nulla quaerat!</p>
                </div>
                <div class="btns">
                    <Button>Редактировать</Button>
                    <Button style="background-color: #fff; border: 1px solid #9489F2; color: #9489F2;">Удалить</Button>
                </div>
            </div>
            <div class="director__block">
                <div class="photo__block">
                    <img src="https://f-iiyl.udsu.ru/files/iiyl.png"  style="height: 150px" alt="">
                    <p class="institute">ИЯЛ</p>
                </div>
                <div class="info__block">
                    <p class="name">Институт языка и литературы</p>
                    <p class="info">Очень интересная информация про ИЯЛ! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, magni. Non quo sunt, adipisci impedit, neque quisquam exercitationem a inventore autem rem accusantium cum libero dolor provident minima nulla quaerat!</p>
                </div>
                <div class="btns">
                    <Button>Редактировать</Button>
                    <Button style="background-color: #fff; border: 1px solid #9489F2; color: #9489F2;">Удалить</Button>
                </div>
            </div>
            <div class="director__block">
                <div class="photo__block">
                    <img src="https://f-iis.udsu.ru/cache/Image/2446@boss-002447-%D0%92%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%BD%D1%83%D1%82%D0%BE%D0%B2%D0%A1%D0%98.jpg" alt="">
                    <p class="institute">ИИиС</p>
                </div>
                <div class="info__block">
                    <p class="name">Вострокнутов Сергей Иванович</p>
                    <p class="info">Очень интересная информация от Сергея Ивановича! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, magni. Non quo sunt, adipisci impedit, neque quisquam exercitationem a inventore autem rem accusantium cum libero dolor provident minima nulla quaerat!</p>
                </div>
                <div class="btns">
                    <Button>Редактировать</Button>
                    <Button style="background-color: #fff; border: 1px solid #9489F2; color: #9489F2;">Удалить</Button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.directors-section {
    height: fit-content;

    .container {
        width: 900px;
        margin: 40px auto;
    }

    .director__block{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        border: 1px solid #9489F2;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .photo__block {
            width: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                width: 100%;
                border-radius: 50%;
            }

            .institute {
                font-weight: 700;
            }
        }

        .info__block {
            width: 400px;
            margin-left: 20px;

            .name{
                font-weight: 700;
            }
        }

        .btns {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        height: 120px;
        justify-content: space-between;
    }
    }
}
</style>