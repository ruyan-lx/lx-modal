import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import lxmodal from "./components/index.ts"; //方式一：本地导入
// import lxmodal from 'lx-modal'  //方式二：npm导入

const app = createApp(App)
// app.use(lxmodal)  //本地注册
// app.use(lxmodal)  //npm注册
app.mount('#app')

