import  './app/main.scss'
import  './app/normalize.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

app.use(vuetify)
app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
