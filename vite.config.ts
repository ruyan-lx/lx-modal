import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				// 这里可以设置全局变量等 SCSS 配置
				additionalData: '@import "@/assets/scss/globalVar.scss";',
			},
		},
	},
	build: {
		outDir: 'lx-modal', //输出文件名称
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: 'src/components/index.ts',
			name: 'lxmodal',
			fileName: 'lxmodal',
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'vue',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
