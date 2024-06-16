<template>
  <HelloWorld msg="Vite + Vue" />
  <button @click="createModal">创建弹窗</button>
  <button @click="ModalShow = true">打开弹窗</button>
  <button @click="unmountedModal">销毁弹窗</button>
  <!-- <lx-modal ref="lxModalRef" v-model="ModalShow" :width="600" :height="400">
    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/> 1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/> 1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/> 1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/> 1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/> 1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/> 1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>    1113<br/>
    1233<br/>
    1233<br/>
    1233<br/>
    123<br/>
  </lx-modal> -->
  <!-- <lx-modal v-model="ModalShow"  >
    <template #header>标题</template>
    hello
  </lx-modal> -->
  <div>
    <p></p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  </div>
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import LxModal from './components/LxModal/index.vue'
import { ref } from "vue";
import { createApp } from 'vue'

const ModalShow = ref(true)

const lxModalRef = ref()
function unmountedModal(){
  lxModalRef.value.$unmount()
  console.log('unmountedModal')
}

function createModal(){
  const element = document.createElement('div');
  document.body.appendChild(element);
  const app = createApp(LxModal)
  console.log('==app==',app);
  app.mount(element);
}
</script>
<style scoped>

</style>
