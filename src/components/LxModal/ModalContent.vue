<template>
	<div :id="modalID" class="modal-content">
		<div :id="draggableDOMID" class="modal-header" draggable="true" style="height: auto">
			<div class="modal-header-left">
				<slot name="header">
					<span class="modal-header-left-title">{{ title }}</span>
				</slot>
			</div>
			<div class="modal-header-right">
				<div class="modal-header-right-btn" @click="$emit('update:modalShow', false)">㇐</div>
				<div class="modal-header-right-btn" @click="toggleFullScreen">▢</div>
				<div class="modal-header-right-btn" @click="closeModal('close')">⨉</div>
			</div>
		</div>
		<div :id="resizeDOMID" class="modal-body" :style="`width: ${width}px; height: ${height}px ;resize: ${resize ? 'auto' : 'none'}`">
			<slot></slot>
		</div>
		<slot name="footer">
			<div class="modal-footer" v-if="!footerHide">
				<button class="modal-button" @click="closeModal('cancel')">取消</button>
				<button class="modal-button modal-button-primary" @click="submitModal">提交</button>
			</div>
		</slot>
	</div>
</template>
<script lang="ts">
export default {
	name: 'ModalContent',
};
</script>
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue';

const props = defineProps({
	title: {
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
});
defineEmits(['update:modalShow']);

// 当前组件实例对象
const Instance = getCurrentInstance();

const uniqueId = ref(Instance?.appContext.config.globalProperties.uniqueId);

// 当前弹窗元素的id
const modalID = `draggableDOM-${uniqueId.value}`;
// 鼠标能拖动的元素的id，是弹窗标题部分header盒子元素
const draggableDOMID = `draggableDOMPoint-${uniqueId.value}`;
// 弹窗内容部分的元素的id，通过他改变弹窗大小
const resizeDOMID = `resizeDOM-${uniqueId.value}`;
// 是否全屏
const isFullScreen = ref(false);

// 最大化最小化
function toggleFullScreen() {
	/* 
		requestAnimationFrame(fn) 就当作setTimeout使用就是，他会在下次重绘之前调用fn，并且fn只执行一次；
	*/
	requestAnimationFrame(() => {
		// 获取当前弹窗元素
		let draggableDOM = document.getElementById(modalID);
		// 当前弹窗内容部分的盒子元素，通过他的resize样式改变盒子大小
		const resizeDOM = document.getElementById(resizeDOMID);
		if (!isFullScreen.value) {
			document.body.style.overflow = 'hidden';
			draggableDOM!.style.transform = `translate(0px,0px)`;
			draggableDOM!.style.width = '100vw';
			draggableDOM!.style.height = '100vh';
			resizeDOM!.style.width = '100vw';
			resizeDOM!.style.resize = 'none';
			isFullScreen.value = true;
		} else {
			document.body.style.overflow = 'auto';
			resizeDOM!.style.width = props.width + 'px';
			resizeDOM!.style.height = props.height + 'px';
			draggableDOM!.style.width = 'inherit';
			draggableDOM!.style.height = 'inherit';
			draggableDOM!.style.transform = `translate(${document.documentElement.clientWidth / 2 - draggableDOM!.offsetWidth / 2}px,${
				document.documentElement.clientHeight / 2 - draggableDOM!.offsetHeight / 2
			}px)`;
			resizeDOM!.style.resize = props.resize ? 'auto' : 'none';
			isFullScreen.value = false;
		}
	});
}

// 去给相关元素绑定拖拽相关的事件
function dragModal() {
	// 拖拽时触发的第一个事件对象
	let dragEvent: any = null;
	// 鼠标按住的元素，是弹窗标题部分header盒子元素
	const draggableDOM = document.getElementById(modalID);
	// 拖拽需要移动的元素，是整个modal弹窗盒子
	let draggableDOMPoint = document.getElementById(draggableDOMID);
	// 先获取当前弹窗的索引，就是打开的第几个弹窗
	const modalIndex = Instance?.appContext.config.globalProperties.modalIndex;
	// 新打开的弹窗相较于上一个弹窗初始位置的偏移量
	const modalOffset = {
		x: 5 * modalIndex,
		y: 5 * modalIndex,
	};
	// 将弹窗放于屏幕中间
	draggableDOM!.style.transform = `translate(${document.documentElement.clientWidth / 2 - draggableDOM!.offsetWidth / 2 + modalOffset.x}px,${
		document.documentElement.clientHeight / 2 - draggableDOM!.offsetHeight / 2 + modalOffset.y
	}px)`;

	// 拖拽开始事件
	draggableDOMPoint?.addEventListener('dragstart', (event: any) => {
		// 判断当前触发事件的元素是不是弹窗标题那个header盒子元素，通过id识别
		if (event.target!.id !== draggableDOMID && !draggableDOM) return;
		// 全屏不让拖动
		if (isFullScreen.value) return;
		// 记录下来header盒子元素触发的事件对象的最初数据
		dragEvent = event;
		// 弹窗盒子透明度
		draggableDOM!.style.opacity = '.92';
	});

	// 拖拽进行事件，鼠标拖动不松开就一直触发
	document?.addEventListener('dragover', (event: any) => {
		// 判断当前触发事件的元素是不是弹窗标题那个header盒子元素，通过id识别。
		if (event.target!.id !== draggableDOMID && !dragEvent) return;
		// 计算屏幕可以拖动的最大距离，即不让元素可以拖出屏幕
		const _h = window.innerHeight - dragEvent.target.offsetHeight;
		const _w = window.innerWidth - dragEvent.target.offsetWidth;
		draggableDOM!.style.transform = `translate(${Math.min(Math.max(0, event.clientX - dragEvent.offsetX), _w)}px,${Math.min(
			Math.max(0, event.clientY - dragEvent.offsetY),
			_h
		)}px)`;
		// 阻止默认事件
		event.preventDefault();
	});

	// 拖拽松开事件，拖拽结束
	draggableDOM?.addEventListener('drop', () => {
		draggableDOM!.style.opacity = '1';
	});
}

// 关闭弹窗
function closeModal(type: string) {
	switch (type) {
		case 'cancel':
		case 'close':
		case 'submit':
			{
				Instance?.appContext.config.globalProperties.unmountModal();
			}
			break;
		default:
			break;
	}
}

// 提交前的狗子，不是函数则直接关闭，是函数就先执行狗子函数，传进来的狗子函数返回false就不关闭弹窗了，返回true和其他值则关闭弹窗；
async function submitModal() {
	if (typeof props.submitModalBeforeEvent !== 'function') return closeModal('submit');
	await new Promise<boolean>(() => {
		const bool = props.submitModalBeforeEvent();
		if (bool) return closeModal('submit');
	});
}

onMounted(() => {
	dragModal();
});
defineExpose({
	uniqueId,
});
</script>

<style lang="scss" scoped>
.modal-content {
	position: absolute;
	background-color: #fff;
	border-radius: 8px;
	z-index: 100;
	font-size: 14px;
	box-shadow: 0px 0px 5px #b1b1b1;
	transform: translate(0px, 0px);
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: stretch;
}
.modal-header {
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
	border-top: 1px solid #e4e7ed;
	border-bottom: 1px solid #e4e7ed;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: baseline;
	cursor: all-scroll;
	&-left {
		margin-left: 5px;
		&-title {
			font-weight: bold;
			white-space: nowrap; /*强制内容在一行显示*/
			overflow: hidden; /*超出部分隐藏*/
			text-overflow: ellipsis; /*溢出的部分使用省略号*/
		}
	}
	&-right {
		color: #848484;
		margin-right: 5px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		align-items: center;
		height: inherit;
		&-btn {
			cursor: pointer;
			width: 24px;
			height: inherit;
			border-left: 1px solid #e4e7ed;
			text-align: center;
		}
	}
}

.modal-footer {
	height: 24px;
	padding: 4px;
	border-top: 1px solid #e4e7ed;
	text-align: right;
}
.modal-body {
	user-select: text;
	overflow: auto;
	min-width: 200px;
	min-height: 100px;
	flex-grow: 1;
}

.modal-button {
	padding: 4px;
	line-height: 1em;
	border: 1px solid #dcdfe6;
	outline: none;
	display: inline-block;
	border-radius: 4px;
	cursor: pointer;
	background-color: #fff;
	transition: 0.1s;
	width: 4rem;
	height: 1.4rem;
	&:hover {
		color: #409eff;
		border-color: #c6e2ff;
		background-color: #ecf5ff;
	}
	& + & {
		margin-left: 10px;
	}
	&-primary {
		background-color: #2d8cf0;
		border-color: #2d8cf0;
		color: white;
		&:hover {
			background: #66b1ff;
			border-color: #66b1ff;
			color: #fff;
		}
	}
}
</style>
