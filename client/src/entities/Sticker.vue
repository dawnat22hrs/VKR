<script setup lang="ts">
import { ref } from 'vue';
import type { ISticker } from '@/models/ISticker';
import CloseIcon from '@/assets/close.vue';
import { useStickerStore } from '@/app/stores/stickerStore';
import Button from '@/shared/Button.vue';

const visiblePopupSticker = ref<boolean>(false)
const checkboxActive = ref(true)
const codeUser = ref<string>('')
const statusCode = ref<string>('')

const store = useStickerStore()

const props = defineProps<({
    stickers: ISticker
})>()

const checkCode = async () => {
    if (codeUser.value == props.stickers.code){
         checkboxActive.value = false
    } else statusCode.value = 'Неверный код'
    const response = await store.stickerFlag(true, props.stickers.id)
}

const viewSticker =  () => {
    visiblePopupSticker.value = true
}

const closeWindow = () => {
    visiblePopupSticker.value = false
}
</script>

<template>
    <div class="sticker" >
        <div class="stickerPopup" v-if="visiblePopupSticker">
            <div class="stickerPopup__body">
                <div class="stickerPopup__content">
                    <div class="header">
                        <div class="checkbox__block">
                            <div class="checkbox-checked" v-if="stickers.isDone"></div>
                            <div class="checkbox-unchecked" v-else></div>
                        </div>
                        <div class="input-code" v-if="checkboxActive">
                            <input placeholder="Введите код" v-model="codeUser"/>
                            <Button @click="checkCode">Проверить</Button>
                        </div>
                    </div>
                    <div class="icon" @click="closeWindow">
                        <CloseIcon class="close-icon"/>
                    </div>
                    <p style="color: red">{{ statusCode }}</p>
                    <div class="title__block">
                        <h3 class="title">{{ stickers.title }}</h3>
                    </div>
                    <div class="desc__block desc__block_size">
                        <p class="desc_size">{{ stickers.info }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticker" @click="viewSticker">
        <div class="checkbox__block">
            <div class="checkbox-checked" v-if="stickers.isDone"></div>
            <div class="checkbox-unchecked" v-else></div>
        </div>
        <div class="title__block">
            <h3 class="title">{{ stickers.title }}</h3>
        </div>
        <div class="desc__block">
            <p class="desc">{{ stickers.info }}</p>
        </div>
    </div>
    </div>
</template>

<style scoped lang="scss">

.sticker {
    display: flex;
    width: 330px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.checkbox-unchecked{
    width: 44px;
    height: 44px;
    background: #D9D9D9;
    border-radius: 50%;
}

.checkbox-checked {
    width: 44px;
    height: 44px;
    background-color: #9489F2;
    background-image: url("../assets/Union.png");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
}

.header {
    display: flex;
    align-items: center;

    .input-code {
        margin-left: 30px;
        display: flex;
        align-items: center;

        input {
            border: 2px solid #9489F2;
            outline: none;
            border-radius: 10px;
            height: 40px;
            padding-left: 10px;
            font-weight: 800;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
        }

        Button {
            height: 40px;
            margin-left: 40px;
        }
    }

}
.title__block {
    width: fit-content;
    padding: 42px 0 22px;
    height: 28px;

    .title {
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 28px;
        color: #000000;
        text-align: center;
        margin: 0;
    }
}

.desc__block {
    width: 330px;
    margin-top: 20px;

    .desc {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        color: #52525B;
        margin: 0;
}
}

.desc__block_size {
    width: 500px;
    margin-top: 20px;

    .desc_size {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 26px;
        //text-align: center;
        color: #52525B;
        margin: 0;
    }
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
                width: 550px;
                height: fit-content;
                border-radius: 10px;
                -webkit-box-shadow: 0px 0px 14px 5px rgba(46, 34, 80, 0.39);
                -moz-box-shadow: 0px 0px 14px 5px rgba(34, 60, 80, 0.39);
                box-shadow: 0px 0px 14px 5px rgba(79, 81, 150, 0.39);
                padding: 20px 20px 40px;
            }
        }
    }
</style>