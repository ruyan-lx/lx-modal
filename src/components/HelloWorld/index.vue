<template>
	<div class="modal-diy-content">
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1 v-text="propsData.msg"></h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
		<h1>HelloWorld</h1>
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

defineOptions({
	name: 'HelloWorld',
});

defineProps({
	propsData: {
		type: Object,
		default: () => ({}),
	},
});
const Instance = getCurrentInstance();
function cancelFun() {
	Instance?.appContext.config.globalProperties.unmountModal();
}

defineExpose({
	hhh: 'hhhhhhhhhhhhhh',
});
</script>

<style scoped lang="scss">
.modal-diy-footer {
	padding: 4px;
	text-align: right;
}
.modal-body.scroll-container.modal-diy-body {
	.modal-diy-footer {
		height: 50px;
	}
	.modal-diy-content {
		margin-bottom: 100px;
	}
}
</style>
