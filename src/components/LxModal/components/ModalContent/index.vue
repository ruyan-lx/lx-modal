<template>
	<div ref="draggableDOMRef" :id="modalID" class="modal-content">
		<div
			ref="draggableDOMPointRef"
			:id="draggableDOMPointID"
			class="modal-header"
			draggable="true"
			@dragstart="draggableDOMPointDragStartFun"
			@drop="draggableDOMPointDragDropFun"
		>
			<div class="modal-header-left">
				<slot name="header">
					<span class="modal-header-left-title" v-text="title"></span>
				</slot>
			</div>
			<div class="modal-header-right">
				<div class="modal-header-right-btn" @click="$emit('update:modalShow', false)">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-zuixiaohua"></use>
					</svg>
				</div>
				<div class="modal-header-right-btn" @click="toggleFullScreen(draggableDOMRef, resizeDOMRef)">
					<svg v-if="isFullScreen" class="icon" aria-hidden="true">
						<use xlink:href="#icon-zuidahua"></use>
					</svg>
					<svg v-else class="icon" aria-hidden="true">
						<use xlink:href="#icon-zuidahua1"></use>
					</svg>
				</div>
				<div class="modal-header-right-btn" @click="closeModal('close')">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-guanbi"></use>
					</svg>
				</div>
			</div>
		</div>
		<div
			ref="resizeDOMRef"
			class="modal-body scroll-container"
			:class="{ 'modal-diy-body': footerHide }"
			:style="`width: ${width}px; height: ${height}px ;resize: ${resize ? 'auto' : 'none'}`"
		>
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
const draggableDOMPointID = `draggableDOMPoint-${uniqueId.value}`;
// 是否全屏
const isFullScreen = ref(false);
// 全屏之前弹窗的位置信息
let modalLocalInfo: any;

// 最大化最小化
// 当前弹窗内容部分的盒子元素，通过他的resize样式改变盒子大小
function toggleFullScreen(draggableDOM: HTMLElement, resizeDOM: HTMLElement) {
	/*
		requestAnimationFrame(fn) 就当作setTimeout使用就是，他会在下次重绘之前调用fn，并且fn只执行一次；
	*/
	requestAnimationFrame(() => {
		draggableDOM.classList.add('modal-transition'); // 添加类名来间接改变宽高
		// 最大化
		if (!isFullScreen.value) {
			// 最大化时记录弹窗的位置信息
			modalLocalInfo = draggableDOM?.getBoundingClientRect();
			modalLocalInfo.resizeDOMHeight = resizeDOM?.getBoundingClientRect().height;
			document.body.style.overflow = 'hidden';
			draggableDOM!.style.transform = `translate(0px,0px)`;
			draggableDOM!.style.width = '100vw';
			draggableDOM!.style.height = '100vh';
			resizeDOM!.style.width = '100vw';
			resizeDOM!.style.resize = 'none';
			isFullScreen.value = true;
		}
		// 窗口化
		else {
			document.body.style.overflow = 'auto';
			resizeDOM!.style.width = modalLocalInfo.width + 'px';
			resizeDOM!.style.height = modalLocalInfo.resizeDOMHeight + 'px';
			draggableDOM!.style.width = 'inherit';
			draggableDOM!.style.height = 'inherit';
			// 还原弹窗之前的位置
			draggableDOM!.style.transform = `translate(${modalLocalInfo.left}px,${modalLocalInfo.top}px)`;
			resizeDOM!.style.resize = props.resize ? 'auto' : 'none';
			isFullScreen.value = false;
		}
	});
}
// 拖拽需要移动的元素，是整个modal弹窗盒子
const draggableDOMRef = ref();
// 鼠标按住的元素，是弹窗标题部分header盒子元素
const draggableDOMPointRef = ref();
// 弹窗内容部分的元素，通过他改变弹窗大小
const resizeDOMRef = ref();
// 拖拽时触发的第一个事件对象
let dragEvent: any = null;
/*
	去给相关元素绑定拖拽相关的事件
	参数一：拖拽需要移动的元素，是整个modal弹窗盒子
	参数二：鼠标按住的元素，是弹窗标题部分header盒子元素
*/
function initDragModal(draggableDOM: HTMLElement) {
	// 先获取当前弹窗的索引，就是打开的第几个弹窗
	const modalIndex = Instance?.appContext.config.globalProperties.modalIndex;
	// 新打开的弹窗相较于上一个弹窗初始位置的偏移量
	const modalOffset = {
		x: 5 * modalIndex,
		y: 5 * modalIndex,
	};
	// 弹窗初始位置信息
	const draggableDOMLocalInfo = draggableDOM.getBoundingClientRect();
	// 当前文档元素的宽高信息
	const documentLocalInfo = document.documentElement;
	// 将弹窗放于屏幕中间
	draggableDOM!.style.transform = `translate(${documentLocalInfo.clientWidth / 2 - draggableDOMLocalInfo.width / 2 + modalOffset.x}px,${
		documentLocalInfo.clientHeight / 2 - draggableDOMLocalInfo.height / 2 + modalOffset.y
	}px)`;
	// 拖拽进行事件，鼠标拖动不松开就一直触发
	document?.addEventListener('dragover', documentDragoverFun);
}

/*
	拖拽开始事件，鼠标按住header盒子元素
	第一个：拖拽需要移动的元素，是整个modal弹窗盒子
	第二个：事件对象
*/
function draggableDOMPointDragStartFun(event: any) {
	// 判断当前触发事件的元素是不是弹窗标题那个header盒子元素，通过id识别。全屏不让拖动
	if (isFullScreen.value || (event.target!.id !== draggableDOMPointID && !draggableDOMRef)) return;
	// 记录下来header盒子元素触发的事件对象的最初数据
	dragEvent = event;
	// 弹窗盒子透明度
	draggableDOMRef.value.style.opacity = '.92';
	// 拖拽进行事件，鼠标拖动不松开就一直触发
	document?.addEventListener('dragover', documentDragoverFun);
}

// 拖动事件
function documentDragoverFun(event: any) {
	// 判断当前触发事件的元素是不是弹窗标题那个header盒子元素，通过id识别。全屏不让拖动
	if (isFullScreen.value || (event.target!.id !== draggableDOMPointID && !dragEvent) || !draggableDOMRef.value) return;
	// 计算屏幕可以拖动的最大距离，即不让元素可以拖出屏幕
	const _h = window.innerHeight - dragEvent.target.offsetHeight;
	const _w = window.innerWidth - dragEvent.target.offsetWidth;
	draggableDOMRef.value.style.transform = `translate(${Math.min(Math.max(0, event.clientX - dragEvent.offsetX), _w)}px,${Math.min(
		Math.max(0, event.clientY - dragEvent.offsetY),
		_h
	)}px)`;
	// 阻止默认事件
	event.preventDefault();
}

// 拖拽松开事件，拖拽结束
function draggableDOMPointDragDropFun(event: Event) {
	draggableDOMRef.value.style.opacity = '1';
	// 删除监听，防止内存泄露
	document.removeEventListener('dragover', documentDragoverFun);
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
	initDragModal(draggableDOMRef.value);
});
defineExpose({
	uniqueId,
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
