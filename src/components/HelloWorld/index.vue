<template>
	<div class="modal-diy-content">
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

<script lang="ts">
export default {
	name: 'HelloWorld',
};
</script>
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
