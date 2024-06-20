(function(i,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i.lxmodal={},i.vue))})(this,function(i,e){"use strict";const y=n=>(e.pushScopeId("data-v-7529da5a"),n=n(),e.popScopeId(),n),k={class:"modal-header-left"},C={class:"modal-header-left-title"},B={class:"modal-header-right"},$=[y(()=>e.createElementVNode("svg",{class:"icon","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-zuixiaohua"})],-1))],S={key:0,class:"icon","aria-hidden":"true"},N=[y(()=>e.createElementVNode("use",{"xlink:href":"#icon-zuidahua"},null,-1))],I={key:1,class:"icon","aria-hidden":"true"},V=[y(()=>e.createElementVNode("use",{"xlink:href":"#icon-zuidahua1"},null,-1))],z=[y(()=>e.createElementVNode("svg",{class:"icon","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-guanbi"})],-1))],D={key:0,class:"modal-footer"},P={name:"ModalContent"},v=e.defineComponent({...P,props:{title:{type:String,default:"🐽lx-modal"},footerHide:{type:Boolean,default:!1},width:{type:Number,default:500},height:{type:Number,default:250},zIndex:{type:String,default:"100"},resize:{type:Boolean,default:!0},submitModalBeforeEvent:{type:Function,default:null}},emits:["update:modalShow"],setup(n,{expose:s}){const c=n,l=e.getCurrentInstance(),a=e.ref(l==null?void 0:l.appContext.config.globalProperties.uniqueId),d=`draggableDOM-${a.value}`,u=`draggableDOMPoint-${a.value}`,g=`resizeDOM-${a.value}`,r=e.ref(!1);let f;function W(){requestAnimationFrame(()=>{let o=document.getElementById(d);const t=document.getElementById(g);r.value?(document.body.style.overflow="auto",t.style.width=f.width+"px",t.style.height=f.resizeDOMHeight+"px",o.style.width="inherit",o.style.height="inherit",o.style.transform=`translate(${f.left}px,${f.top}px)`,t.style.resize=c.resize?"auto":"none",r.value=!1):(f=o==null?void 0:o.getBoundingClientRect(),f.resizeDOMHeight=t==null?void 0:t.getBoundingClientRect().height,document.body.style.overflow="hidden",o.style.transform="translate(0px,0px)",o.style.width="100vw",o.style.height="100vh",t.style.width="100vw",t.style.resize="none",r.value=!0)})}function j(){let o=null;const t=document.getElementById(d);let p=document.getElementById(u);const w=l==null?void 0:l.appContext.config.globalProperties.modalIndex,x={x:5*w,y:5*w};t.style.transform=`translate(${document.documentElement.clientWidth/2-t.getBoundingClientRect().width/2+x.x}px,${document.documentElement.clientHeight/2-t.getBoundingClientRect().height/2+x.y}px)`,p==null||p.addEventListener("dragstart",h=>{h.target.id!==u&&!t||r.value||(o=h,t.style.opacity=".92")}),document==null||document.addEventListener("dragover",h=>{if(h.target.id!==u&&!o)return;const X=window.innerHeight-o.target.offsetHeight,Y=window.innerWidth-o.target.offsetWidth;t.style.transform=`translate(${Math.min(Math.max(0,h.clientX-o.offsetX),Y)}px,${Math.min(Math.max(0,h.clientY-o.offsetY),X)}px)`,h.preventDefault()}),t==null||t.addEventListener("drop",()=>{t.style.opacity="1"})}function _(o){switch(o){case"cancel":case"close":case"submit":l==null||l.appContext.config.globalProperties.unmountModal();break}}async function U(){if(typeof c.submitModalBeforeEvent!="function")return _("submit");await new Promise(()=>{if(c.submitModalBeforeEvent())return _("submit")})}return e.onMounted(()=>{j()}),s({uniqueId:a}),(o,t)=>(e.openBlock(),e.createElementBlock("div",{id:d,class:"modal-content"},[e.createElementVNode("div",{id:u,class:"modal-header",draggable:"true"},[e.createElementVNode("div",k,[e.renderSlot(o.$slots,"header",{},()=>[e.createElementVNode("span",C,e.toDisplayString(n.title),1)],!0)]),e.createElementVNode("div",B,[e.createElementVNode("div",{class:"modal-header-right-btn",onClick:t[0]||(t[0]=p=>o.$emit("update:modalShow",!1))},$),e.createElementVNode("div",{class:"modal-header-right-btn",onClick:W},[r.value?(e.openBlock(),e.createElementBlock("svg",S,N)):(e.openBlock(),e.createElementBlock("svg",I,V))]),e.createElementVNode("div",{class:"modal-header-right-btn",onClick:t[1]||(t[1]=p=>_("close"))},z)])]),e.createElementVNode("div",{id:g,class:"modal-body",style:e.normalizeStyle(`width: ${n.width}px; height: ${n.height}px ;resize: ${n.resize?"auto":"none"}`)},[e.renderSlot(o.$slots,"default",{},void 0,!0)],4),e.renderSlot(o.$slots,"footer",{},()=>[n.footerHide?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",D,[e.createElementVNode("button",{class:"modal-button",onClick:t[2]||(t[2]=p=>_("cancel"))},"取消"),e.createElementVNode("button",{class:"modal-button modal-button-primary",onClick:U},"提交")]))],!0)]))}}),M=(n,s)=>{const c=n.__vccOpts||n;for(const[l,a]of s)c[l]=a;return c},q=M(v,[["__scopeId","data-v-7529da5a"]]),H={class:"modal"},L={name:"LxModal"},O=e.defineComponent({...L,props:{maskClosable:{type:Boolean,default:!0},modalMaskDisplay:{type:Boolean,default:!1}},emits:["close"],setup(n,{expose:s,emit:c}){const l=n,a=e.getCurrentInstance();function d(){l.maskClosable&&(a==null||a.appContext.config.globalProperties.unmountModal())}const u=e.ref(!0);function g(r){u.value=r}return s({minShowModal:g}),(r,f)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",H,[e.withDirectives(e.createElementVNode("div",{class:"modal-mask",onClick:d},null,512),[[e.vShow,n.modalMaskDisplay]]),e.createVNode(q,e.mergeProps(r.$attrs,{"onUpdate:modalShow":g}),{default:e.withCtx(()=>[e.renderSlot(r.$slots,"default",{},void 0,!0)]),_:3},16)],512)),[[e.vShow,u.value]])}}),b=M(O,[["__scopeId","data-v-019cd53d"]]);function A(){return Math.random().toString(36).substr(2,9)}let m=e.ref(new Map);function F(){m.value.size!==0&&m.value.forEach(n=>{n.config.globalProperties.unmountModal()})}function R(n,s){return new Promise(c=>{const l=A(),a=document.createElement("div");a.id=l,document.body.appendChild(a);const d=e.createApp(e.h(b,s,[e.h(n,s)]),{});d.config.globalProperties.modalIndex=m.value.size,d.config.globalProperties.uniqueId=l,m.value.set(l,d),d.mount(a),d.config.globalProperties.unmountModal=function(){document.body.style.overflow="auto",m.value.get(l).unmount(),a.remove(),m.value.delete(l)},c({uniqueId:l,element:a,app:d})})}const E=[b],T={install(n){E==null||E.forEach(s=>{n.component(s.name,s)})}};i.LxModal=b,i.ModalInstanceMap=m,i.closeAllModal=F,i.default=T,i.openModal=R,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
