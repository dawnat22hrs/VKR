<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../shared/Button.vue';
import close from "@/assets/close.vue"

const visiblePopupSticker = ref<boolean>(false)
</script>

<template>
        <section class="hero_section">
          <div class="stickerPopup" v-if="visiblePopupSticker">
            <div class="stickerPopup__body">
                <div class="stickerPopup__content">
                  <div class="icon">
                        <close class="close-icon"/>
                    </div>
                    <p>Этот проект позволит тебе познакомиться с внеучебной жизнью нашего вуза, активно в нее влиться, полюбить ее и даже получить "приятности" за свой энтузиазм. Хотим тебе сразу показать, что жизнь в Университете - это не только учеба, бесконечные пары и сессия.</p>
                    <p>Проект "Первокурсник" - это совакупность крутых и, что самое важное, полезных для тебя мероприятий. Принимая в них участие, Ты получишь штампы. Собрав 8 штампов у тебя будет возможность попасть на закрытую вечеринку для самых активных первкурсников. Ну, а собрав все штампы, ты станешь "Лучшим Первокурсником", который получит не только билет, но и суперкрутые призы! Как ставить штамп? Смотри названиие и описание мероприятия и ты все поймешь, а подробную информацию смотри в группе Управления в VK (ссылка в самом низу сайта)!</p>
                    <p>И если у тебя все еще остануться вопросы, ты можешь смело задавать их менеджерам проекта, с которыми познакомишься 1 сентября!</p>
                </div>
            </div>
        </div>
            <div class="title_block">
                <h1 class="title"> ПРОЕКТ “ПЕРВОКУРСНИК 2.0”</h1>
            </div>
            <div class="button_block">
                <Button class="button">Хочу наклейку</Button>
                <Button class="button button_color">О проекте</Button>
            </div>
        </section>
</template>

<style scoped lang="scss">
.hero_section {
  height: 969px;
  background: url(../../assets/backgroundMain.png) no-repeat;
    background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title_block {
    width: 749px;
    height: 132px;
    padding-top: 280px;

    .title {
        font-style: normal;
        font-weight: 800;
        font-size: 58px;
        line-height: 66px;
        text-align: center;
        color: #18181B;
        margin: 0;
    }
  }

  .icon {
            width: 20px;
            cursor: pointer;
            float: right;
            margin-top: 30px;
        }

      .close-icon {
        width: 100%;
        color: #9489F2;
        float: right;
      }

  .stickerPopup {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        cursor: default;


        .icon {
            width: 20px;
            cursor: pointer;
            float: right;
            position: relative;
            top: -40px
        }

      .close-icon {
        width: 100%;
        color: #9489F2;
        float: right;
      }

        .stickerPopup__body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

            .stickerPopup__content {
                background-color: #fff;
                width: 400px;
                height: fit-content;
                border-radius: 10px;
                -webkit-box-shadow: 0px 0px 14px 5px rgba(46, 34, 80, 0.39);
                -moz-box-shadow: 0px 0px 14px 5px rgba(34, 60, 80, 0.39);
                box-shadow: 0px 0px 14px 5px rgba(79, 81, 150, 0.39);
                padding: 20px 20px 40px;
            }
        }}

  .button_block {
    display: flex;
    width: 323px;
    justify-content: space-between;
    position: relative;
    top: 200px;

    .button {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
        width: 151px;
    }

    .button_color {
        color: #000;
        background: #fff;
        border: 1px solid #9489F2;       
    }
  }
}

</style>