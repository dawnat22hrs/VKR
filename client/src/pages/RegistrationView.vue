<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/shared/Button.vue';

import { useUserStore } from '@/app/stores/counter';

const  formData = ref({
    nickname: '',
    name: '',
    surename: '',
    email: '',
    group: '',
    phone: '',
    password: ''
})

const store = useUserStore()

//methods
const handleApp = async () => {
  const response = await store.setRegistration(formData.value.nickname, formData.value.email, formData.value.password, formData.value.name, formData.value.surename, formData.value.group, formData.value.phone)
}

</script>

<template>
    <section class="registr-section">
        <form class="form" v-on:submit.prevent>
          <div class="inputs">
            <input placeholder="Логин" type="text" v-model="formData.nickname"/>
            <input placeholder="Имя" type="text" v-model="formData.name"/>
            <input placeholder="Фамилия" type="text" v-model="formData.surename"/>
            <input placeholder="Адрес электронной почты" type="text" v-model="formData.email"/>
            <input placeholder="Номер группы" type="text" v-model="formData.group"/>
            <input placeholder="Номер телефона" type="text" v-model="formData.phone"/>
            <input placeholder="Пароль" type="password" v-model="formData.password"/>
            <Button>выбрать институт</Button>
          </div>
          <RouterLink to="/"><Button class="btn" @click="handleApp">зарегестрироваться</Button></RouterLink>
        </form>
    </section>
</template>

<style scoped lang="scss">
.registr-section {
    width: 100vw;
    height: 100vh;

    .form {
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 40px auto;
      }

      .inputs {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .btn {
        font-weight: 800;
        width: 200px;

        margin-top: 40px;
      }

      .form input {
        border-bottom: 1px solid #9489F2;
        outline: none;
        height: 40px;
        padding-left: 10px;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
      }
}
</style>