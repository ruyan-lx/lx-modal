<template>
	<div
		class="mac"
		:ref="scope.draggableDOMPointRef"
		:id="scope.draggableDOMPointID"
		draggable="true"
		@dragstart="scope.onDragstart"
		@drop="scope.onDrop"
	>
		<div class="modal-header-right">
			<!-- 关闭 -->
			<div class="modal-header-right-btn">
				<svg class="icon" aria-hidden="true" @click="scope.onClickClose">
					<use xlink:href="#icon-guanbi1"></use>
				</svg>
			</div>
			<!-- 全屏 -->
			<div class="modal-header-right-btn">
				<svg class="icon" aria-hidden="true" @click="scope.onClickToggleFullScreen">
					<use xlink:href="#icon-zuidahua2"></use>
				</svg>
			</div>
			<!-- 最小化 -->
			<div class="modal-header-right-btn">
				<svg class="icon" aria-hidden="true" @click="scope.onClickMin">
					<use xlink:href="#icon-zuixiaohua4-copy"></use>
				</svg>
			</div>
		</div>
		<div class="modal-header-left">
			<span class="modal-header-left-title" v-text="scope.modalTitle"></span>
		</div>
	</div>
</template>
<script setup lang="ts">
defineOptions({
	name: 'HeaderMac',
});
const props = defineProps({
	scope: {
		type: Object,
		default: () => ({}),
	},
});
</script>
<style lang="scss" scoped>
.icon {
	width: 1.3em;
	height: 1.3em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}

// mac风格的弹窗头部
.mac {
	line-height: 2rem;
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
	border-top: 1px solid #e4e7ed;
	border-bottom: 1px solid #e4e7ed;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	cursor: all-scroll;
	background-color: #f7f7f7;
	& > .modal-header-left {
		margin-right: 5px;
		&-title {
			font-weight: bold;
			white-space: nowrap; /*强制内容在一行显示*/
			overflow: hidden; /*超出部分隐藏*/
			text-overflow: ellipsis; /*溢出的部分使用省略号*/
		}
	}
	& > .modal-header-right {
		color: #848484;
		margin-left: 5px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		align-items: center;
		height: inherit;
		& > .modal-header-right-btn {
			cursor: pointer;
			width: 2rem;
			height: inherit;
			text-align: center;
			& > svg:hover {
				transform: scale(0.9);
			}
		}
	}
}
</style>
