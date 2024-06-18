(function(i,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i.lxmodal={},i.vue))})(this,function(i,e){"use strict";const x={class:"modal-header-left"},$={class:"modal-header-left-title"},k={class:"modal-header-right"},C={key:0,class:"modal-footer"},S={name:"ModalContent"},B=e.defineComponent({...S,props:{id:{type:Number,default:0},title:{type:String,default:"🐽lx-modal"},footerHide:{type:Boolean,default:!1},width:{type:Number,default:500},height:{type:Number,default:250},zIndex:{type:String,default:"100"},maskClosable:{type:Boolean,default:!0},ModalMaskDisplay:{type:Boolean,default:!1},resize:{type:String,default:"auto"},submitModalBeforeEvent:{type:Function,default:null}},emits:["update:modalShow"],setup(l,{expose:r}){const s=l,n=e.getCurrentInstance(),a=e.ref(n==null?void 0:n.appContext.config.globalProperties.uniqueId),d=`draggableDOM-${a.value}`,u=`draggableDOMPoint-${a.value}`,c=`resizeDOM-${a.value}`,h=e.ref(!1);function P(){requestAnimationFrame(()=>{let t=document.getElementById(d);const o=document.getElementById(c);h.value?(document.body.style.overflow="auto",o.style.width=s.width+"px",o.style.height=s.height+"px",t.style.width="inherit",t.style.height="inherit",t.style.transform=`translate(${document.documentElement.clientWidth/2-t.offsetWidth/2}px,${document.documentElement.clientHeight/2-t.offsetHeight/2}px)`,o.style.resize=s.resize,h.value=!1):(document.body.style.overflow="hidden",t.style.transform="translate(0px,0px)",t.style.width="100vw",t.style.height="100vh",o.style.width="100vw",o.style.resize="none",h.value=!0)})}function g(t){switch(t){case"cancel":case"close":case"submit":n==null||n.appContext.config.globalProperties.unmountModal();break}}async function H(){if(typeof s.submitModalBeforeEvent!="function")return g("submit");await new Promise(()=>{if(s.submitModalBeforeEvent())return g("submit")})}e.onMounted(()=>{O()});function O(){let t=null;const o=document.getElementById(d);let m=document.getElementById(u);const w=n==null?void 0:n.appContext.config.globalProperties.modalIndex,E={x:5*w,y:5*w};o.style.transform=`translate(${document.documentElement.clientWidth/2-o.offsetWidth/2+E.x}px,${document.documentElement.clientHeight/2-o.offsetHeight/2+E.y}px)`,m==null||m.addEventListener("dragstart",f=>{f.target.id!==u&&!o||(t=f,o.style.opacity=".92")}),document==null||document.addEventListener("dragover",f=>{if(f.target.id!==u&&!t)return;const q=window.innerHeight-t.target.offsetHeight,W=window.innerWidth-t.target.offsetWidth;o.style.transform=`translate(${Math.min(Math.max(0,f.clientX-t.offsetX),W)}px,${Math.min(Math.max(0,f.clientY-t.offsetY),q)}px)`,f.preventDefault()}),o==null||o.addEventListener("drop",()=>{t=null,m=null,o.style.opacity="1"})}return r({uniqueId:a}),(t,o)=>(e.openBlock(),e.createElementBlock("div",{id:d,class:"modal-content"},[e.createElementVNode("div",{id:u,class:"modal-header",draggable:"true",style:{height:"auto"}},[e.createElementVNode("div",x,[e.renderSlot(t.$slots,"header",{},()=>[e.createElementVNode("span",$,e.toDisplayString(l.title),1)],!0)]),e.createElementVNode("div",k,[e.createElementVNode("div",{class:"modal-header-right-btn",onClick:o[0]||(o[0]=m=>t.$emit("update:modalShow",!1))}," ㇐ "),e.createElementVNode("div",{class:"modal-header-right-btn",onClick:P}," ▢ "),e.createElementVNode("div",{class:"modal-header-right-btn",onClick:o[1]||(o[1]=m=>g("close"))}," ⨉ ")])]),e.createElementVNode("div",{id:c,class:"modal-body",style:e.normalizeStyle(`width: ${l.width}px; height: ${l.height}px ;resize: ${l.resize}`)},[e.renderSlot(t.$slots,"default",{},void 0,!0)],4),e.renderSlot(t.$slots,"footer",{},()=>[l.footerHide?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",C,[e.createElementVNode("button",{class:"modal-button",onClick:o[2]||(o[2]=m=>g("cancel"))},"取消"),e.createElementVNode("button",{class:"modal-button modal-button-primary",onClick:H},"提交")]))],!0)]))}}),M=(l,r)=>{const s=l.__vccOpts||l;for(const[n,a]of r)s[n]=a;return s},_=M(B,[["__scopeId","data-v-f3e5f95f"]]),I={class:"modal"},N={name:"LxModal"},D=e.defineComponent({...N,props:{maskClosable:{type:Boolean,default:!0},ModalMaskDisplay:{type:Boolean,default:!1}},emits:["close"],setup(l,{emit:r}){const s=l,n=e.getCurrentInstance();function a(){s.maskClosable&&(n==null||n.appContext.config.globalProperties.unmountModal())}const d=e.ref(!0);function u(c){d.value=c}return(c,h)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",I,[e.withDirectives(e.createElementVNode("div",{class:"modal-mask",onClick:a},null,512),[[e.vShow,l.ModalMaskDisplay]]),e.createVNode(_,e.mergeProps(c.$attrs,{"onUpdate:modalShow":u}),{default:e.withCtx(()=>[e.renderSlot(c.$slots,"default",{},void 0,!0)]),_:3},16)],512)),[[e.vShow,d.value]])}}),y=M(D,[["__scopeId","data-v-d68f852d"]]);function V(){return Math.random().toString(36).substr(2,9)}let p=e.ref(new Map);function v(l,r){return new Promise(s=>{const n=V(),a=document.createElement("div");a.id=n,document.body.appendChild(a);const d=e.createApp(e.h(y,r,[e.h(l,r)]));d.config.globalProperties.modalIndex=p.value.size,d.config.globalProperties.uniqueId=n,p.value.set(n,d),d.mount(a),d.config.globalProperties.unmountModal=function(){document.body.style.overflow="auto",p.value.get(n).unmount(),a.remove(),p.value.delete(n)},s({uniqueId:n,element:a,app:d})})}const b=[y],z={install(l){b==null||b.forEach(r=>{l.component(r.name,r)})}};i.LxModal=y,i.ModalInstanceMap=p,i.default=z,i.openModal=v,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
