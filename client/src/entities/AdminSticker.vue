<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/shared/Button.vue';
import CloseIcon from '@/assets/close.vue'
import type { ISticker } from '@/models/ISticker';

import { useStickerStore } from '@/app/stores/stickerStore';

const popupVisible = ref<boolean>(false)
const store = useStickerStore()
const edit = ref({})
const title = ref<string>('')
const info = ref<string>('')
const editBlock = ref<boolean>(false)
const codeBlock = ref<boolean>(true)
const codeLength = ref<number>(8)
const code = ref('')


const props = defineProps<({
    stickers: ISticker,
})>()


const visiblePopupEdit = () => {
    popupVisible.value = true
    codeBlock.value = false
    editBlock.value = true
}

const visiblePopupCode = () => {
    popupVisible.value = true
    editBlock.value = false
    codeBlock.value = true
}

const getUpdateSticker = async () => {
    if (title.value == '') title.value = props.stickers.title
    if (info.value == '') info.value = props.stickers.info
    const response = await store.getUpdateSticker(props.stickers.id, title.value, info.value)
    closeWindow()
}

const getCodeSticker = async () => {
    const response = await store.generateCode(code.value, props.stickers.id)
}

const generateCode = () => {
    code.value = ''
    const numberChars = '0123456789'
    const upperChars = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const lowerChars = 'qwertyuiopasdfghjklzxcvbnm'
    const symbolChars = '!@#$%^&*()_+-?'

    const allChars = numberChars + upperChars + lowerChars + symbolChars


    for (let i = 0; i <= codeLength.value; i++) {
        const randomNumber = ref(Math.floor(Math.random() * allChars.length))

        code.value += allChars[randomNumber.value]
    }


    return code.value
}

const closeWindow = () => {
    popupVisible.value = false
}
</script>

<template>
    <div class="sticker">
        <div class="popup" v-if="popupVisible">
            <div class="popup__body">
                <div class="popup__content">
                    <div class="icon" @click="closeWindow">
                        <CloseIcon class="close-icon"/>
                    </div>
                    <div class="edit-block" v-if="editBlock">
                        <div class="inputs">
                            <input class="input" v-model="title" placeholder="название" style="width: 250px; margin-bottom: 20px;">
                            <textarea class="input" v-model="info" placeholder="описание" style="width: 400px"/>
                        </div>
                        <Button @click="getUpdateSticker" class="btn__inputs">Сохранить</Button>
                    </div>
                    <div class="code-block" v-if="codeBlock">
                        <div class="code">
                            <p>{{ code }}</p>
                        </div>
                        <Button @click="generateCode()">Сгенерировать</Button>
                        <Button @click="getCodeSticker()">Сохранить</Button>
                    </div>
                </div>
            </div>
        </div>        
        <div class="name__block">
            <p class="name">{{ stickers.title }}</p>
            <p>код: {{ stickers.code }}</p>
        </div>
        <div class="info__block">
            <p class="info">{{ stickers.info }}</p>
        </div>
        <div class="btns">
            <Button @click="visiblePopupEdit">Редактировать</Button>
            <Button @click="visiblePopupCode">Код</Button>
            <Button style="background-color: #fff; border: 1px solid #9489F2; color: #9489F2;">Удалить</Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sticker {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    border: 1px solid #9489F2;
    display: flex;
    align-items: center;
    padding: 20px;

    .code-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        height: 200px;

        .code {
            width: 200px;
            height: 30px;
            border: 1px solid #9489F2;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-weight: 600;
                font-size: 14px;
                font-style: normal;
                margin: 0
            }
        }
    }

.btn__inputs {
    float: right;
}

.inputs {
    display: flex;
    flex-direction: column;
}

 .input {
    border: 2px solid #9489F2;
    border-radius: 10px;
    padding-left: 10px;
    outline: none;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
 }

    .popup {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        cursor: default;

        .popup__body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

            .popup__content {
                background-color: #fff;
                width: 550px;
                height: 300px;
                border-radius: 10px;
                -webkit-box-shadow: 0px 0px 14px 5px rgba(46, 34, 80, 0.39);
                -moz-box-shadow: 0px 0px 14px 5px rgba(34, 60, 80, 0.39);
                box-shadow: 0px 0px 14px 5px rgba(79, 81, 150, 0.39);
                padding: 20px 20px 40px;

                .icon {
            width: 20px;
            cursor: pointer;
            float: right;
            position: relative;
            top: -5px
        }

      .close-icon {
        width: 100%;
        color: #9489F2;
        float: right;
      }
            }
        }
    }

    .name__block {
        width: 100px;
        align-items: center;

        .name {
            font-weight: 700;
            font-size: 14px;
            font-style: normal;
            line-height: 24px;
        }
    }

    .info__block {
        width: 450px;
        margin-left: 30px;
    }

    .btns {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        height: 200px;
        justify-content: space-between;
    }
}
</style>