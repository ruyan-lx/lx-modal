<template>
        <div :id="modalID" class="modal-content">
        <div :id="draggableDOMID" class="modal-header" draggable="true">
            <div class="modal-header-left">
                <slot name="header"><span class="modal-header-left-title">{{ title }}</span></slot>
            </div>
            <div class="modal-header-right" >
                <div class="modal-header-right-btn" @click="$emit('update:modalShow',false)">
                    <svg class="icon" aria-hidden="true">
                         <use xlink:href="#icon-zuixiaohua"></use>
                    </svg>
                </div>
                <div class="modal-header-right-btn" @click="toggleFullScreen">
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
        <div :id="resizeDOMID" class="modal-body" :style:any="{  width: `${width}px`, height: `${height}px` ,resize: resize }">
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

<script setup lang="ts">
    import { getCurrentInstance, onMounted,  ref } from "vue";


    const props =  defineProps({
            id:{
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: "🐽lx-modal",
            },
            // 是否隐藏底部按钮
            footerHide:  {
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
            // 能否通过遮罩关闭弹窗
            maskClosable: {
                type: Boolean,
                default: true,
            },
            // 遮罩
            ModalMaskDisplay:{
                type: Boolean,
                default: false
            },
            // 弹窗尺寸可拖动
            resize:{
                type: String,
                default: 'auto'
            },
            // 提交前的狗子函数
            submitModalBeforeEvent:{
                type: Function,
                default: null
            }
        })
        defineEmits(["update:modalShow"]) 


        const Instance = getCurrentInstance();

        const uniqueId = ref(Instance?.appContext.config.globalProperties.uniqueId)

    
        const modalID = `draggableDOM-${uniqueId.value}`
        const draggableDOMID = `draggableDOMPoint-${uniqueId.value}`
        const resizeDOMID = `resizeDOM-${uniqueId.value}`
        const isFullScreen = ref(false)
        function toggleFullScreen() {
            let draggableDOM = document.getElementById(modalID);
            const resizeDOM = document.getElementById(resizeDOMID);
            if(!isFullScreen.value){
                document.body.style.overflow = 'hidden';
                draggableDOM!.style.transform = `translate(0px,0px)`;
                // draggableDOM!.style.width =  '100vw'
                draggableDOM!.style.height = '100vh'
                requestAnimationFrame(()=>{
                    resizeDOM!.style.width = '100vw'
                    resizeDOM!.style.resize = 'none';
                })
                isFullScreen.value = true
            }else{
                requestAnimationFrame(() => {
                    document.body.style.overflow = 'auto';
                    resizeDOM!.style.width = props.width+'px'
                    resizeDOM!.style.height = props.height+'px'
                    draggableDOM!.style.width ='inherit'
                    draggableDOM!.style.height = 'inherit'
                    draggableDOM!.style.transform = `translate(${document.documentElement.clientWidth/2-draggableDOM!.offsetWidth/2}px,${document.documentElement.clientHeight/2-draggableDOM!.offsetHeight/2}px)`;
                });
                isFullScreen.value = false
            }
        }

        function closeModal(type: string) {
            Instance?.appContext.config.globalProperties.unmountModal()
            console.log('==type==',type);
            
        };

        // 提交前的狗子，不是函数则直接关闭，是函数：限制性狗子函数，再返回false就不处理，返回其他值则关闭；
        async function submitModal() {
            if(typeof props.submitModalBeforeEvent !== 'function') return closeModal('submit')
            await new Promise<boolean>(()=>{
                const bool = props.submitModalBeforeEvent()
                if(bool) return closeModal('submit')
            })
        };


    
        onMounted(() => {
            dragModal()
        })

        function dragModal(){
            let dragEvent:any = null;
            const draggableDOM = document.getElementById(modalID);
            let draggableDOMPoint = document.getElementById(draggableDOMID);
            const modalIndex = Instance?.appContext.config.globalProperties.modalIndex
            // 新打开的弹窗相较于上一个弹窗初始位置的偏移量
            const modalOffset = {
                x: 5*modalIndex,
                y: 5*modalIndex,
            }
            // 将弹窗放于屏幕中间
            draggableDOM!.style.transform = `translate(${(document.documentElement.clientWidth/2-draggableDOM!.offsetWidth/2)+modalOffset.x}px,${(document.documentElement.clientHeight/2-draggableDOM!.offsetHeight/2)+modalOffset.y}px)`;

            draggableDOMPoint?.addEventListener("dragstart", (event:any) => {
                if(event.target!.id !== draggableDOMID && !draggableDOM) return
                dragEvent = event;
                draggableDOM!.style.opacity = '.7'
            });

            document?.addEventListener("dragover", (event:any) => {
                if(event.target!.id !== draggableDOMID && !dragEvent) return;
                const _h = window.innerHeight - dragEvent.target.offsetHeight;
                const _w = window.innerWidth - dragEvent.target.offsetWidth;
                draggableDOM!.style.transform = `translate(${ Math.min(Math.max(0,event.clientX - dragEvent.offsetX),_w)}px,${Math.min(Math.max(0,event.clientY -dragEvent.offsetY),_h)}px)`;
                event.preventDefault()
            });

            draggableDOM?.addEventListener("drop", () => {
                dragEvent = null
                draggableDOMPoint = null
                draggableDOM!.style.opacity = '1'
            }); 
        }

        defineExpose({
            uniqueId
        })
</script>

<style lang="scss" scoped>

    .modal-content {
        position: absolute;
        background-color: #fff;
        border-radius: 8px;
        z-index: 100;
        font-size: 14px;
        box-shadow: 0px 0px 5px #b1b1b1;
        transform: translate(0px, 0px);;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
    }
    .modal-header {
        height: 24px;
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
        border-top: 1px solid #e4e7ed;
        border-bottom: 1px solid #e4e7ed;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: baseline;
        cursor: pointer;
        &-left{
            margin-left: 5px;
            &-title{
                font-weight: bold;
                white-space: nowrap; /*强制内容在一行显示*/
                overflow: hidden;/*超出部分隐藏*/
                text-overflow: ellipsis;/*溢出的部分使用省略号*/
            }
        }
        &-right{
            color: #848484;
            margin-right: 5px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            align-items: center;
            height: inherit;
            &-btn{
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