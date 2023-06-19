<script setup lang="ts">
import { ref } from "vue"
import { RouterView, RouterLink } from 'vue-router'
import router from "./router/index";
import Header from '@/widgets/Header.vue';
import Footer from '@/widgets/Footer.vue';
import Button from '@/shared/Button.vue';
import CloseIcon from '@/assets/close.vue'

import { useUserStore } from "@/app/stores/counter"

//state
const popupVisible = ref<boolean>(false)
const formData = ref({
  nickname: '',
  password: ''
})
const store = useUserStore()
const error = ref('')
const isAuth = ref(false)
const isAdmin = ref<boolean>(false)

//methods
const loginPopup = (visible: boolean) => {
  popupVisible.value = visible
}

const closeLoginPopup = () => {
  popupVisible.value = false

}

const user = ref(store.users)


//apiConnect
const handleApp = async () => {
  try {
    const response = await store.setLogin(formData.value.nickname, formData.value.password)
    if (user.value.length > 0) isAuth.value = true
    if (user.value[0].role == 'ADMIN') isAdmin.value = true
    closeLoginPopup()

  } 
  catch (e: any) {
    error.value = e.response.data.message
  }

}

/*router.beforeEach((to, from, next) => {
  if (user.value[0].role == 'ADMIN') {
    isAdmin.value = true
  }
  const adminAuth = to.matched.some(admin => admin.meta.auth)

  if (adminAuth && !isAdmin.value){
    next('/registration')
  } else {
    next()
  }
})*/

const logout = () => {
  user.value.length = 0
  isAuth.value = false
  isAdmin.value = false
  localStorage.clear()
}
</script>

<template>
  <div class="popup" v-if="popupVisible">
    <div class="popup__body">
      <div class="popup__content">
        <div class="icon" @click="closeLoginPopup">
          <CloseIcon class="close-icon"/>
        </div>
        <form class="form" v-on:submit.prevent="handleApp">
          <div class="inputs">
            <input placeholder="Имя пользователя" type="text" v-model="formData.nickname"/>
            <input placeholder="Пароль" type="password" v-model="formData.password"/>
          </div>
          <div class="error">
            {{ error }}
          </div>
          <Button class="btn">войти</Button>
        </form>
        <div class="question">
          <p>Нет аккаунта?</p>
          <RouterLink 
            to="/registration" 
            @click="closeLoginPopup" 
            style="margin-left: 5px;"
          >Зарегестрироваться</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <Header 
    @logout="logout"
    @login-popup="loginPopup"
    :isAuth="isAuth"
    :isAdmin="isAdmin"
  />
  <RouterView />
  <Footer />

</template>

<style scoped lang="scss">
.popup {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;


  .popup__body {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .popup__content{
      background-color: #fff;
      width: 330px;
      height: 300px;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 14px 5px rgba(34, 60, 80, 0.39);
      -moz-box-shadow: 0px 0px 14px 5px rgba(34, 60, 80, 0.39);
      box-shadow: 0px 0px 14px 5px rgba(34, 60, 80, 0.39);
      padding: 20px 20px 40px;

      .error {
        height: 10px;
      }

      .icon {
        width: 100%;
        margin-bottom: 30px;
        cursor: pointer;
      }

      .close-icon {
        width: 20px;
        color: #9489F2;
        float: right;
      }

      .form {
        display: flex;
        flex-direction: column;
      }

      .inputs {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .btn {
        font-weight: 800;
        width: 100px;

        margin-top: 30px;
      }

      .question {
        margin-top: 5px;
        display: flex;
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
}
</style>
