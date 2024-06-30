<template>
	<div
		class="windows"
		:ref="scope.draggableDOMPointRef"
		:id="scope.draggableDOMPointID"
		draggable="true"
		@dragstart="scope.onDragstart"
		@drop="scope.onDrop"
	>
		<div class="modal-header-left">
			<span class="modal-header-left-title" v-text="scope.modalTitle"></span>
		</div>
		<div class="modal-header-right">
			<!-- 最小化 -->
			<div class="modal-header-right-btn" @click="scope.onClickMin">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-zuixiaohua"></use>
				</svg>
			</div>
			<!-- 窗口化 -->
			<div class="modal-header-right-btn" @click="scope.onClickToggleFullScreen">
				<svg v-if="scope.isFullScreen" class="icon" aria-hidden="true">
					<use xlink:href="#icon-zuidahua"></use>
				</svg>
				<svg v-else class="icon" aria-hidden="true">
					<use xlink:href="#icon-zuidahua1"></use>
				</svg>
			</div>
			<!-- 关闭 -->
			<div class="modal-header-right-btn" @click="scope.onClickClose">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-guanbi"></use>
				</svg>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
defineOptions({
	name: 'HeaderWin',
});
defineProps({
	scope: {
		type: Object,
		default: () => ({
			draggableDOMPointRef: '',
			isFullScreen: false,
			modalTitle: '',
			draggableDOMPointID: '',
			onDragstart: () => {},
			onDrop: () => {},
			onClickMin: () => {},
			onClickToggleFullScreen: () => {},
			onClickClose: () => {},
		}),
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
// windows风格的弹窗头部
.windows {
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
		margin-left: 5px;
		&-title {
			font-weight: bold;
			white-space: nowrap; /*强制内容在一行显示*/
			overflow: hidden; /*超出部分隐藏*/
			text-overflow: ellipsis; /*溢出的部分使用省略号*/
		}
	}
	& > .modal-header-right {
		color: #848484;
		margin-right: 5px;
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
			border-left: 1px solid #e4e7ed;
			text-align: center;
		}
	}
}
</style>
