import LxModal from './index.vue';
import { type Component, type App, h, ref } from 'vue';
import { createApp } from 'vue';
import type { I_openModalPropsConfig } from './type.d.ts';

function generateUniqueId(): string {
	return Math.random().toString(36).substr(2, 9); // 使用随机数生成9位36进制字符串
}

// 弹窗实例集合
export let ModalInstanceMap = ref<Map<string | number, any>>(new Map());

// 一键关闭所有弹窗
export function closeAllModal(): void {
	if (ModalInstanceMap.value.size === 0) return;
	ModalInstanceMap.value.forEach((app) => {
		app.config.globalProperties.unmountModal();
	});
}

// 打开弹窗
export function openModal(slot: string | Component, config: I_openModalPropsConfig<any>): Promise<any> {
	return new Promise((resolve) => {
		const uniqueId: string = generateUniqueId();
		const element = document.createElement('div');
		element.id = uniqueId;
		document.body.appendChild(element);

		/* 		
			createApp()创建一个应用实例。
			第一个参数是根组件。
			第二个参数可选，它是要传递给根组件的 props。 
			这里prop可以通过h的第二个参数传递也可以通过createApp的第二个参数传递
		*/
		const app = createApp(h(LxModal, config, [h(slot, config)]), {});

		app.config.globalProperties.modalIndex = ModalInstanceMap.value.size;
		app.config.globalProperties.uniqueId = uniqueId;
		ModalInstanceMap.value.set(uniqueId, app);
		// 将app这个vue实例对象挂载到指定的dom元素上；
		app.mount(element);
		// 每个弹窗实例绑定自己的关闭函数
		app.config.globalProperties.unmountModal = function () {
			document.body.style.overflow = 'auto';
			ModalInstanceMap.value.get(uniqueId).unmount();
			element.remove();
			ModalInstanceMap.value.delete(uniqueId);
		};
		resolve({ uniqueId, element, app });
	});
}

// 注册组件
export default {
	install: (Vue: App) => {
		Vue.component('LxModal' as string, LxModal);
	},
};
