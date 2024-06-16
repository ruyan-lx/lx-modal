<template>
        <div class="modal" v-show="modelValue" :style="{ zIndex: zIndex }">
            <div v-if="ModalMaskDisplay" class="modal-mask" @click="maskClose"></div>
            <div  :id="`draggableDOM-${uniqueId}`" class="modal-content">
                <div id="draggableDOMPoint" class="modal-header" draggable="true">
                    <div class="modal-header-left">
                        <slot name="header"><span class="modal-header-left-title">{{ title }}</span></slot>
                    </div>
                    <div class="modal-header-right" >
                        <div class="modal-header-right-btn" @click="$emit('update:modelValue', false)">—</div>
                        <div class="modal-header-right-btn" @click="toggleFullScreen">k</div>
                        <div class="modal-header-right-btn" @click="closeModal('close')">X</div>
                    </div>
                </div>
                <div id="resizeDOM" class="modal-body" :style="{  width: width + 'px', height: height + 'px' ,resize: resize }">
                    <slot></slot>
                </div>
                <slot name="footer">
                    <div class="modal-footer" v-if="!footerHide">
                        <button class="modal-button" @click="closeModal('cancel')">取消</button>
                        <button class="modal-button modal-button-primary" @click="sure">确定</button>
                    </div>
                </slot>
            </div>
        </div>
</template>
<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, reactive, ref } from "vue";
    const props =  defineProps({
        modelValue: Boolean,
        id:{
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: "🐽lx-modal",
        },
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
            type: Number,
            default: 1000,
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
        }
    })

    
    function generateUniqueId() {
        return Math.random().toString(36).substr(2, 9); // 使用随机数生成9位36进制字符串
    }
    
    const uniqueId = ref(generateUniqueId())
    const modalID = `draggableDOM-${uniqueId.value}`

    const isFullScreen = ref(false)
    function toggleFullScreen() {
        let windowHeight = document.documentElement.clientHeight+'px';
        let draggableDOM = document.getElementById(modalID);
        const draggableElement = document.getElementById('resizeDOM');
        if(!isFullScreen.value){
            document.body.style.overflow = 'hidden';
            draggableDOM!.style.transform = `translate(0px,0px)`;
            draggableDOM!.style.width =  '100vw'
            draggableDOM!.style.height = '100vh'
            draggableElement!.style.width = '100vw'
            draggableElement!.style.height = Number(windowHeight.replace("px", "")) - 32-24+'px';
            isFullScreen.value = true
        }else{
            document.body.style.overflow = 'auto';
            draggableElement!.style.width = props.width+'px'
            draggableElement!.style.height = props.height+'px'
            draggableDOM!.style.width ='inherit'
            draggableDOM!.style.height = 'inherit'
            draggableDOM!.style.transform = `translate(${document.documentElement.clientWidth/2-draggableDOM!.offsetWidth/2}px,${document.documentElement.clientHeight/2-draggableDOM!.offsetHeight/2}px)`;
            isFullScreen.value = false
        }

        // draggableDOM.requestFullscreen()

        
    }

    defineEmits(["ok", "close", "update:modelValue"]) // 方便TS推断
    const closeModal = (type: string) => {
        // 关闭Modal 并触发自定义事件‘close-有参数方便区分点击右上方的关闭按钮还是点击底部的取消’
    };
    const maskClose = () => {
            // 通过点击mask层关闭Modal
            
    };
    const sure = () => {
        // 点击确定按钮关闭Modal并添加自定义事件‘ok’
    };


    
onMounted(() => {
    console.log('==onMonted==',);
    
    dragModal()
    // modalWHDrag()
})
onUnmounted((()=>{
    console.log('==onUnmounted==',);
}))

function dragModal(){
    let dragEvent:any = null;
    let draggableDOM = document.getElementById(modalID);
    let draggableDOMPoint = document.getElementById("draggableDOMPoint");

    // 将弹窗放于屏幕中间
    draggableDOM!.style.transform = `translate(${document.documentElement.clientWidth/2-draggableDOM!.offsetWidth/2}px,${document.documentElement.clientHeight/2-draggableDOM!.offsetHeight/2}px)`;

    draggableDOMPoint?.addEventListener("dragstart", (event:any) => {
        if(event.target!.id !== "draggableDOMPoint" && !draggableDOM) return
        dragEvent = event;
        draggableDOM!.style.opacity = '.7'
        draggableDOM!.style.zIndex = '1001'
    });

    document?.addEventListener("dragover", (event:any) => {
        if(!dragEvent && event.target!.id !== "draggableDOMPoint") return;
        let _h = window.innerHeight - dragEvent.target.offsetHeight;
        let _w = window.innerWidth - dragEvent.target.offsetWidth;
        draggableDOM!.style.transform = `translate(${ Math.min(Math.max(0,event.clientX - dragEvent.offsetX),_w)}px,${Math.min(Math.max(0,event.clientY -dragEvent.offsetY),_h)}px)`;
        event.preventDefault()
    });

    draggableDOM?.addEventListener("drop", () => {
        dragEvent = null
        draggableDOMPoint = null
        draggableDOM!.style.opacity = '1'
    }); 
}


// function modalWHDrag(){
//         const draggableElement = document.getElementById('resizeDOM');
//         // 初始化拖动状态
//         let isDragging = false;
//         let startX:number, startY:number;
//         let startWidth:number, startHeight:number;
//         let minWidth = 100; // 最小宽度
//         let minHeight = 100; // 最小高度

//         // 鼠标按下事件
//         draggableElement?.addEventListener('mousedown', function(event) {
//             // 计算鼠标相对于元素边界的位置
//             var rect = draggableElement.getBoundingClientRect();
//             var offsetX = event.clientX - rect.left;
//             var offsetY = event.clientY - rect.top;

//             // 判断鼠标是否在元素边界内
//             if (offsetX >= 0 && offsetX <= draggableElement.offsetWidth &&
//                 offsetY >= 0 && offsetY <= draggableElement.offsetHeight) {
//                 isDragging = true;
//                 startX = event.clientX;
//                 startY = event.clientY;
//                 startWidth = draggableElement.offsetWidth;
//                 startHeight = draggableElement.offsetHeight;
//             }
//         });

//         // 鼠标移动事件
//         document.addEventListener('mousemove', function(event) {
//             if (isDragging) {
//                 var deltaX = event.clientX - startX;
//                 var deltaY = event.clientY - startY;

//                 var newWidth = startWidth + deltaX;
//                 var newHeight = startHeight + deltaY;

//                 // 应用最小宽度和最小高度限制
//                 newWidth = Math.max(newWidth, minWidth);
//                 newHeight = Math.max(newHeight, minHeight);

//                 // 更新拖动元素的宽高
//                 draggableElement!.style.width = newWidth + 'px';
//                 draggableElement!.style.height = newHeight + 'px';
//             }
//         });

//         // 鼠标释放事件
//         document.addEventListener('mouseup', function(event) {
//             isDragging = false;
//         });
// }
 
 defineExpose({
    uniqueId
 })
</script>

<style lang="scss">
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
    &-content {
        position: absolute;
        background-color: #fff;
        border-radius: 8px;
        z-index: 100;
        font-size: 14px;
        box-shadow: 0px 0px 5px #b1b1b1;
    }
    &-header {
        height: 24px;
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
        border-top: 1px solid #e4e7ed;
        border-bottom: 1px solid #e4e7ed;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
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
 
    &-footer {
        height: 24px;
        padding: 4px;
        border-top: 1px solid #e4e7ed;
        text-align: right;
    }
    &-body {
        user-select: text;
        overflow: auto;
        min-width: 200px;
        min-height: 100px;
    }

    &-button {
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
}
</style>
 