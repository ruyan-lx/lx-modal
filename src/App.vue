<template>
	<button @click="openModalFun">打开弹窗</button>
	<button @click="closeAllModal">关闭所有弹窗</button>
	<button @click="showOneModal">显示隐藏全部弹窗</button>
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
import { openModal, ModalInstanceMap, closeAllModal } from './components/LxModal';

// import { openModal } from 'lx-modal';

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
			title: '弹窗标题',
			// maskClosable: true,
			// modalMaskDisplay: true,
		}
	).then((data: any) => {
		console.log('==打开成功==', data);
	});
}

function showOneModal() {
	ModalInstanceMap.value.forEach((value, key) => {
		value._instance.exposed.minShowModal();
	});
}
</script>
<style scoped></style>
