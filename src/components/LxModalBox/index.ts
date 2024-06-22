import LxModalBox from './index.vue';
import { type App } from 'vue';

// 注册组件
export default {
	install: (Vue: App) => {
		Vue.component('LxModalBox' as string, LxModalBox);
	},
};
