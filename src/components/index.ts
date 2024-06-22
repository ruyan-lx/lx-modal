import { openModal, ModalInstanceMap, closeAllModal } from './LxModal';
import LxModal from '@/components/LxModal/index.vue';
import LxModalBox from '@/components/LxModalBox/index.vue';
import { type App } from 'vue';

// 按需引入
export { openModal, closeAllModal, ModalInstanceMap, LxModal, LxModalBox };

const components: any = [LxModal, LxModalBox];

// 全量引入
export default {
	install(App: App) {
		components?.forEach((item: any) => {
			App.component(item.name, item);
		});
	},
};
