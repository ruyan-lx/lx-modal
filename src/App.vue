<template>
	<button @click="openModalFun">打开弹窗</button>
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
	</div>
</template>
<script setup lang="ts">
import { h } from 'vue';
// import { openModal } from '../lx-modal/lxmodal.umd.js';
import { openModal } from './components/LxModal';

// import {openModal} from 'lx-modal'

function openModalFun() {
	openModal(
		h('div', null, [
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
			h('p', null, '我是组件内容，123123232132。。。。。。。。。。。。。。。。。'),
		]),
		{
			width: 600,
			height: 400,
		}
	).then((data: any) => {
		console.log('==打开成功==', data);
	});
}
</script>
<style scoped></style>
