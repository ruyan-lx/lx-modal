<template>
  <button @click="openModalFun">函数式弹窗</button>
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
import { h } from 'vue';
import { openModal } from './components/LxModal';

// import {openModal} from 'lx-modal'

function openModalFun() {
  openModal(
    h('div',null,[
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
      h('p',null,'123'),
    ]),
    {
    }
  ).then((data:any)=>{
      console.log('==打开成功==',data);
    })
  }
  
</script>
<style scoped>

</style>
