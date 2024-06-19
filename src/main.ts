import { createApp } from 'vue';
import App from './App.vue';
// import lxmodal from '../lx-modal/lxmodal.umd.js';
// import lxmodal from "./components/index.ts"; //方式一：本地导入
import LxModal from 'lx-modal'; //方式二：npm导入
import 'lx-modal/style.css';

const app = createApp(App);
// app.use(lxmodal)  //本地注册
// app.use(lxmodal)  //npm注册
// console.log('==LxModal==',LxModal);
// console.log('==vue实例安装的组件：==',app._context.components);

app.use(LxModal); //npm注册
app.mount('#app');
