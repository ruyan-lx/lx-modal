<template>
	<div class="modal-footer">
		<button class="modal-button" @click="scope.onClickCancel">取消</button>
		<button class="modal-button modal-button-primary" @click="scope.onClickSubmit">提交</button>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'Footer',
});
const props = defineProps({
	scope: {
		type: Object,
		default: () => ({}),
	},
});

defineExpose({
	onClickCancel: props.scope.onClickCancel,
	onClickSubmit: props.scope.onClickSubmit,
});
</script>

<style lang="scss" scoped>
.modal-footer {
	padding: 4px;
	border-top: 1px solid #e4e7ed;
	text-align: right;
	.modal-button {
		padding: 4px;
		margin: 0 4px;
		border: 1px solid #dcdfe6;
		outline: none;
		display: inline-block;
		border-radius: 4px;
		cursor: pointer;
		background-color: #fff;
		transition: 0.1s;
		width: 4rem;
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
}
</style>
