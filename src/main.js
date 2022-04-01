import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import icon from '@element-plus/icons-vue'
import moment from 'moment'
import screenShort from "vue-web-screen-shot";
import './assets/iconfont/iconfont.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(icon);
app.use(moment);
app.use(screenShort, { enableWebRtc: false });
app.mount('#app');
=======

createApp(App).mount('#app')
>>>>>>> 2d9cb31e5a0df929e64e0d0a3eb94496787c0154
