import { openModal, ModalInstanceMap, closeAllModal } from './LxModal';
import LxModal from '@/components/LxModal/index.vue';
import LxModalBox from '@/components/LxModalBox/index.vue';
import HeaderWin from '@/components/LxModal/components/HeaderWin/index.vue';
import HeaderMac from '@/components/LxModal/components/HeaderMac/index.vue';
import ModalFooter from '@/components/LxModal/components/Footer/index.vue';
import { Component, type App } from 'vue';
import '@/assets/iconfont.js';

// 按需引入
export { openModal, closeAllModal, ModalInstanceMap, LxModal, LxModalBox, HeaderMac, HeaderWin, ModalFooter };

const components: Component[] = [LxModal, LxModalBox];

// 全量引入
export default {
	install(App: App) {
		components?.forEach((item: any) => {
			App.component(item.name, item);
		});
	},
};
