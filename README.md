# lx-modal

## 背景

Element Plus 的dialog太丑，而且也不好用，我不服！所以就想自己写一个，也不去封装它的了，自己纯手撸！不依赖其他任何第三方包。

函数式组件，打开弹窗，我只需要一个方法。

## 预览

1. 弹窗头部暂时两种风格，后面再开放插槽自定义；
2. 悬浮球可以对打开的弹窗进行管理；

伪Mac风格：

![image-20240622233224842](./README/image-20240622233224842.png)



Windows风格：

![image-20240622233345390](./README/image-20240622233345390.png)

## 技术栈

- Vue 3 + TypeScript + Vite + javascript + scss 

用vue3进行构建，没有引入其余任何第三方依赖，npm包体积总共35kb（version 0.31.0），只使用弹窗体积会更小；

## 安装

[npm地址](https://www.npmjs.com/package/lx-modal?activeTab=readme)

安装依赖：

```bash
npm i lx-modal
```

引入样式：

```js
// main.ts
import 'lx-modal/style.css';

const app = createApp(App);
app.mount('#app');
```

## 使用

### hello world

```vue
<template>
	<button @click="openModalFun">打开弹窗</button>
	<lx-modal-box v-model="ModalInstanceMap"> </lx-modal-box>
</template>
<script setup lang="ts">
import Helloworld from './components/HelloWorld/index.vue';
// 1、按需引入
import { openModal, ModalInstanceMap, LxModalBox } from 'lx-modal';

function openModalFun() {
    // 2、调用openModal打开弹窗，Helloworld为弹窗内容
	openModal(Helloworld, {
		width: 600,
		height: 400,
		modalTitle: '弹窗标题',
		footerHide: false,
		modalStyle: 'mac',
		submitModalBeforeEvent: () => {
			console.log('==callback==');
			return true;
		},
	}).then((_data: any) => {
		console.log('==打开成功==', data);
	});
}
</script>
```

### 打开弹窗

```ts
import { openModal} from 'lx-modal';
```

openModal：打开的弹窗的函数，返回要给promise，接受两个参数，第一个是弹窗给内容组件，会被渲染到弹窗内；第二个配置对象。打开返回promise；

```ts
// 配置对象的属性如下
defineProps({
    // 能否通过遮罩关闭弹窗
	maskClosable: {
		type: Boolean,
		default: true,
	},
	// 遮罩
	modalMaskDisplay: {
		type: Boolean,
		default: false,
	},
	modalTitle: {
		type: String,
		default: '🐽lx-modal',
	},
	// 是否隐藏底部按钮
	footerHide: {
		type: Boolean,
		default: false,
	},
	width: {
		type: Number,
		default: 500,
	},
	height: {
		type: Number,
		default: 250,
	},
	zIndex: {
		type: String,
		default: '100',
	},
	// 弹窗尺寸可拖动
	resize: {
		type: Boolean,
		default: true,
	},
	// 提交前的狗子函数
	submitModalBeforeEvent: {
		type: Function,
		default: null,
	},
	// 窗口风格
	modalStyle: {
		type: String,
		default: 'windows',
	},
});
```

在实际业务场景中，弹窗内有表单，相应的按钮可能有保存、提交、存草稿、驳回等等相关按钮，所以弹窗默认的两个按钮肯定是不满足需求的，所以在弹窗内部允许自定弹窗底部按钮。

注意下一下层级关系和类名

```vue
<template>
	<div class="modal-diy-content">
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
	</div>
	<div class="modal-diy-footer">
		<button @click="cancelFun">取消</button>
		<button @click="cancelFun">保存</button>
	</div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const Instance = getCurrentInstance();
function cancelFun() {
	Instance?.appContext.config.globalProperties.unmountModal();
}
</script>

<style scoped lang="scss">
.modal-diy-footer {
	padding: 4px;
	text-align: right;
}
</style>
```



### 关闭弹窗

在当前实例全局属性上有个一个关闭弹窗的方法

```ts
const Instance = getCurrentInstance();
Instance?.appContext.config.globalProperties.unmountModal();
```

可以一键关闭所有弹窗：

```ts
import {  closeAllModal } from 'lx-modal';

closeAllModal()
```

### 打开的所有弹窗

```ts
import { ModalInstanceMap} from 'lx-modal';

console.log(ModalInstanceMap.value)
```



### 悬浮球

```vue
<template>
	<lx-modal-box v-model="ModalInstanceMap"> </lx-modal-box>
</template>

<script setup lang="ts"> 
import {  LxModalBox } from 'lx-modal';
</script> 
```



## 看我看我

因为精力有限，但是有时间、有需求驱动就会继续更新，当然也欢迎各位大佬能够给出宝贵意见（最好是提pr嘻嘻）~

![1719074001673](./README/1719074001673.png)

