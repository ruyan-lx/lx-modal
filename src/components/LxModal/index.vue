<template>
	<transition>
		<div class="modal" v-show="modalShow">
			<div v-show="modalMaskDisplay" class="modal-mask" @click="maskClose"></div>
			<modal-content v-bind="$attrs" @update:modalShow="minShowModal">
				<slot></slot>
			</modal-content>
		</div>
	</transition>
</template>

<script lang="ts">
export default {
	name: 'LxModal',
};
</script>
<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue';
import ModalContent from './components/ModalContent/index.vue';

const props = defineProps({
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
});

const emit = defineEmits(['close']);

const Instance = getCurrentInstance();

function maskClose() {
	if (!props.maskClosable) return;
	// 通过点击mask层关闭Modal
	Instance?.appContext.config.globalProperties.unmountModal();
}

const modalShow = ref(true);

// 最小化与显示弹窗
function minShowModal(value: boolean) {
	modalShow.value = !modalShow.value;
}

defineExpose({
	modalShow,
	minShowModal,
});
</script>

<style scoped lang="scss">
.modal {
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgb(231, 231, 231);
	&-mask {
		width: 100vw;
		height: 100vh;
		position: absolute;
		z-index: 99;
		background-color: rgba($color: #000000, $alpha: 0.4);
	}
}

.v-enter-active,
.v-leave-active {
	transition: all 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
	transform: translateY(20px);
	opacity: 0;
}
</style>
