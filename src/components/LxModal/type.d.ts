import { Component } from 'vue';

export interface I_openModalPropsConfig<T> {
	// 能否通过遮罩关闭弹窗
	maskClosable?: boolean;
	// 遮罩
	modalMaskDisplay?: boolean;
	modalHeaderComponent?: Component;
	modalFooterComponent?: Component;
	modalTitle?: string;
	// 是否使用自定义的业务footer
	isDiyFooter?: boolean;
	width?: number;
	height?: number;
	zIndex?: string;
	// 弹窗尺寸可拖动
	resize?: boolean;
	// 提交前的狗子函数
	submitModalBeforeEvent?: () => boolean | void;
	// 提交后的狗子函数
	submitModalAfterEvent?: () => boolean | void;
	// 业务数据
	propsData?: T;
}
