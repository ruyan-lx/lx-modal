<template>
  <button @click="openModalFun">函数式弹窗</button>
  <HelloWorld msg="Vite + Vue" />
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
// import {openModal} from './components/LxModal/index'
import {openModal} from 'lx-modal'

function openModalFun() {
  openModal(
    123,
    {
      showMask: true
    }
  ).then((data)=>{
      console.log('==打开成功==',data);
    })
  }
  
</script>
<style scoped>

</style>
