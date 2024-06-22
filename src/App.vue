<template>
	<button @click="openModalFun">打开弹窗</button>
	<button @click="closeAllModal">关闭所有弹窗</button>
	<button @click="showOneModal">显示隐藏全部弹窗</button>
	<div id="content">
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
import { defineComponent, h } from 'vue';
import Helloworld from './components/HelloWorld/index.vue';
import { openModal, ModalInstanceMap, closeAllModal } from './components/LxModal';

// import { openModal, ModalInstanceMap, closeAllModal } from 'lx-modal';
const app = defineComponent({
	render() {
		return h('div', {}, '1231231321');
	},
});
function openModalFun() {
	openModal(app, {
		width: 600,
		height: 400,
		title: '弹窗标题',
		// maskClosable: true,
		// modalMaskDisplay: true,
		footerHide: true,
		modalStyle: 'mac',
		submitModalBeforeEvent: () => {
			console.log('==11111claabak==');
			return true;
		},
	}).then((data: any) => {
		console.log('==打开成功==', data);
	});
}

function showOneModal() {
	ModalInstanceMap.value.forEach((value: { _instance: { exposed: { minShowModal: () => void } } }, _key: any) => {
		value._instance.exposed.minShowModal();
	});
}
</script>
<style scoped></style>
