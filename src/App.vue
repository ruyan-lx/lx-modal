<template>
	<button @click="openModalFun">打开弹窗</button>
	<button @click="closeAllModal">关闭所有弹窗</button>
	<button @click="showOneModal">显示隐藏全部弹窗</button>
	<lx-modal-box v-model="ModalInstanceMap"> </lx-modal-box>
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
// import HeaderWin from './components/LxModal/components/HeaderWin/index.vue';
import HeaderMac from './components/LxModal/components/HeaderMac/index.vue';
import ModalFooter from './components/LxModal/components/Footer/index.vue';
import { openModal, ModalInstanceMap, closeAllModal, LxModalBox } from './components/index.ts';
// import { openModal, ModalInstanceMap, closeAllModal, LxModalBox } from 'lx-modal';

// 现在用h\render\defineComponent\creatApp用的飞起
const app = defineComponent({
	render() {
		return h(Helloworld, null);
	},
});
function openModalFun() {
	openModal(app, {
		propsData: {
			msg: 'hhhhhhhhhhhhh',
		},
		width: 600,
		height: 400,
		modalTitle: '弹窗标题',
		maskClosable: true,
		modalMaskDisplay: true,
		footerHide: true,
		submitModalBeforeEvent: () => {
			console.log('==11111claabak before==');
			return true;
		},
		submitModalAfterEvent: () => {
			console.log('==11111claabak after==');
		},
		// modalHeaderComponent: HeaderMac,
		// modalFooterComponent: ModalFooter,
		// isDiyFooter: true,
	}).then((_data: any) => {
		// console.log('==打开成功==', data);
		console.log('==ModalInstanceMap==', ModalInstanceMap.value);
	});
}

function showOneModal() {
	ModalInstanceMap.value.forEach((value: { _instance: { exposed: { minShowModal: () => void } } }, _key: any) => {
		value._instance.exposed.minShowModal();
	});
}
</script>
<style scoped></style>
