<template>
	<div class="lx-modal-box">
		<div v-show="!isShowBox" id="box1" class="lx-modal-box-min" @dblclick="isShowBox = true">
			<span v-text="data!.size"></span>
		</div>
		<div v-show="isShowBox" id="box2" class="lx-modal-box-max">
			<div class="header-box">
				<div class="allclose-div" @click="closeAllModal">关闭所有</div>
				<div class="close-div" @click="isShowBox = false">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-guanbi"></use>
					</svg>
				</div>
			</div>
			<ul v-if="data!.size > 0">
				<li v-for="[key, value] in data" :key="key">
					<div @click="modalShowFun(key, value)">
						{{ value._instance.attrs.modalTitle }}
					</div>
					<div @click="modalCloseFun(key, value)">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-guanbi1"></use>
						</svg>
					</div>
				</li>
			</ul>
			<div v-else class="lx-modal-box-max-nodata">你没有未关闭的弹窗~</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'LxModalBox',
};
</script>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { closeAllModal } from '../index';
import { Drag } from '../../utils/useDragHook';

// 弹窗列表
const data = defineModel('modelValue', { type: Map, default: new Map() });
// 是否打开盒子
const isShowBox: any = defineModel('showbox', { type: Boolean, default: false });

function modalShowFun(_key: any, value: { _instance: { exposed: { minShowModal: () => void } } }) {
	value._instance.exposed.minShowModal();
}

function modalCloseFun(_key: any, value: { config: { globalProperties: { unmountModal: () => void } } }) {
	value.config.globalProperties.unmountModal();
}

defineExpose({});

onMounted(() => {
	new Drag({ el: '#box1', adsorb: true });
});
</script>

<style scoped lang="scss">
.lx-modal-box {
	.lx-modal-box-min {
		position: fixed;
		background-color: #f7f7f7;
		width: 50px;
		height: 50px;
		box-shadow: 0 0 5px 3px #e3e3e3;
		border-radius: 12px;
		cursor: pointer;
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		z-index: 0;
		& > span {
			position: absolute;
			top: 50%;
			left: 50%;
			text-align: center;
			transform: translate(-50%, -50%);
			color: #b2b2b2;
			user-select: none;
		}
	}
	.lx-modal-box-max {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		background-color: #f7f7f7;
		min-width: 20rem;
		height: 20rem;
		overflow: auto;
		box-shadow: 0 0 5px 3px #e3e3e3;
		border-radius: 12px;
		z-index: 0;
		.header-box {
			color: #b2b2b2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 4px;
			.allclose-div {
				padding-left: 6px;
				cursor: pointer;
			}
			.close-div {
				padding-right: 6px;
				cursor: pointer;
			}
		}
		ul {
			list-style: none; //去掉标签默认的左边符号
			padding: 0px;
			margin: 0px;
			li {
				list-style-type: none; //去掉标签默认的左边符号
				padding: 5px 10px;
				line-height: 28px;
				border-bottom: 1px solid #c2c2c2;
				font-size: 0.8rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				& > div {
					cursor: pointer;
				}
				&:hover {
					background-color: rgb(211, 211, 211);
				}
			}
		}
		&-nodata {
			text-align: center;
			line-height: 14rem;
		}
	}
}
.icon {
	width: 1.3em;
	height: 1.3em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
