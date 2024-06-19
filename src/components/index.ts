import { openModal, ModalInstanceMap, closeAllModal } from './LxModal';
import LxModal from '@/components/LxModal/index.vue';
import { type App } from 'vue';

// 按需引入
export { openModal, closeAllModal, ModalInstanceMap, LxModal };

const components: any = [LxModal];

// 全量引入
export default {
	install(App: App) {
		components?.forEach((item: any) => {
			App.component(item.name, item);
		});
	},
};
