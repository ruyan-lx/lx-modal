import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			include: ['src/**/*.{ts,vue}'],
			outDir: 'dist/types',
			insertTypesEntry: true, // 生成 index.d.ts 文件
		}),
	],
	build: {
		outDir: 'dist', //输出文件名称
		lib: {
			entry: path.resolve(__dirname, './src/components/index.ts'), //指定组件编译入口文件,
			name: 'lxmodal',
			fileName: (format) => `lxmodal.${format}.js`,
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
