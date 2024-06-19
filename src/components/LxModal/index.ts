import LxModal from './index.vue';
import { type Component, type App, h, ref } from 'vue';
import { createApp } from 'vue';

function generateUniqueId(): string {
	return Math.random().toString(36).substr(2, 9); // 使用随机数生成9位36进制字符串
}

export let ModalInstanceMap = ref(new Map());

export function openModal(slot: string | Component, config: { [k: string]: any }): Promise<any> {
	return new Promise((resolve) => {
		const uniqueId: string = generateUniqueId();
		const element = document.createElement('div');
		element.id = uniqueId;
		document.body.appendChild(element);
		const app = createApp(h(LxModal, config, [h(slot, config)]));
		app.config.globalProperties.modalIndex = ModalInstanceMap.value.size;
		app.config.globalProperties.uniqueId = uniqueId;
		ModalInstanceMap.value.set(uniqueId, app);
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
