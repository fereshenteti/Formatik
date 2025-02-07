import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './styles/main.scss'
import router from './router';

const app = createApp(App)

app.use(router)
    .use(createBootstrap())
    .use(i18n)
    .mount('#app')
