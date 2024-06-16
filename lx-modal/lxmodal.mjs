import { defineComponent as C, getCurrentInstance as E, ref as b, onMounted as H, openBlock as h, createElementBlock as p, createElementVNode as l, renderSlot as v, toDisplayString as q, createCommentVNode as O, pushScopeId as W, popScopeId as N, withDirectives as w, vShow as k, createVNode as F, mergeProps as L, withCtx as A, createApp as V, h as $ } from "vue";
const M = (n) => (W("data-v-9b85fced"), n = n(), N(), n), U = { class: "modal-header-left" }, X = { class: "modal-header-left-title" }, Y = { class: "modal-header-right" }, j = /* @__PURE__ */ M(() => /* @__PURE__ */ l("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuixiaohua" })
], -1)), G = [
  j
], J = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}, K = /* @__PURE__ */ M(() => /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuidahua" }, null, -1)), Q = [
  K
], R = {
  key: 1,
  class: "icon",
  "aria-hidden": "true"
}, T = /* @__PURE__ */ M(() => /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuidahua1" }, null, -1)), Z = [
  T
], ee = /* @__PURE__ */ M(() => /* @__PURE__ */ l("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("use", { "xlink:href": "#icon-guanbi" })
], -1)), te = [
  ee
], oe = ["style:any"], ne = {
  key: 0,
  class: "modal-footer"
}, le = /* @__PURE__ */ C({
  __name: "ModalContent",
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: "🐽lx-modal"
    },
    // 是否隐藏底部按钮
    footerHide: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 250
    },
    zIndex: {
      type: String,
      default: "100"
    },
    // 能否通过遮罩关闭弹窗
    maskClosable: {
      type: Boolean,
      default: !0
    },
    // 遮罩
    ModalMaskDisplay: {
      type: Boolean,
      default: !1
    },
    // 弹窗尺寸可拖动
    resize: {
      type: String,
      default: "auto"
    },
    // 提交前的狗子函数
    submitModalBeforeEvent: {
      type: Function,
      default: null
    }
  },
  emits: ["update:modalShow"],
  setup(n, { expose: d }) {
    const i = n, t = E(), a = b(t == null ? void 0 : t.appContext.config.globalProperties.uniqueId), s = `draggableDOM-${a.value}`, m = `draggableDOMPoint-${a.value}`, r = `resizeDOM-${a.value}`, f = b(!1);
    function S() {
      let e = document.getElementById(s);
      const o = document.getElementById(r);
      f.value ? (requestAnimationFrame(() => {
        document.body.style.overflow = "auto", o.style.width = i.width + "px", o.style.height = i.height + "px", e.style.width = "inherit", e.style.height = "inherit", e.style.transform = `translate(${document.documentElement.clientWidth / 2 - e.offsetWidth / 2}px,${document.documentElement.clientHeight / 2 - e.offsetHeight / 2}px)`;
      }), f.value = !1) : (document.body.style.overflow = "hidden", e.style.transform = "translate(0px,0px)", e.style.height = "100vh", requestAnimationFrame(() => {
        o.style.width = "100vw", o.style.resize = "none";
      }), f.value = !0);
    }
    function g(e) {
      t == null || t.appContext.config.globalProperties.unmountModal(), console.log("==type==", e);
    }
    async function B() {
      if (typeof i.submitModalBeforeEvent != "function")
        return g("submit");
      await new Promise(() => {
        if (i.submitModalBeforeEvent())
          return g("submit");
      });
    }
    H(() => {
      D();
    });
    function D() {
      let e = null;
      const o = document.getElementById(s);
      let u = document.getElementById(m);
      const _ = t == null ? void 0 : t.appContext.config.globalProperties.modalIndex, x = {
        x: 5 * _,
        y: 5 * _
      };
      o.style.transform = `translate(${document.documentElement.clientWidth / 2 - o.offsetWidth / 2 + x.x}px,${document.documentElement.clientHeight / 2 - o.offsetHeight / 2 + x.y}px)`, u == null || u.addEventListener("dragstart", (c) => {
        c.target.id !== m && !o || (e = c, o.style.opacity = ".7");
      }), document == null || document.addEventListener("dragover", (c) => {
        if (c.target.id !== m && !e)
          return;
        const z = window.innerHeight - e.target.offsetHeight, P = window.innerWidth - e.target.offsetWidth;
        o.style.transform = `translate(${Math.min(Math.max(0, c.clientX - e.offsetX), P)}px,${Math.min(Math.max(0, c.clientY - e.offsetY), z)}px)`, c.preventDefault();
      }), o == null || o.addEventListener("drop", () => {
        e = null, u = null, o.style.opacity = "1";
      });
    }
    return d({
      uniqueId: a
    }), (e, o) => (h(), p("div", {
      id: s,
      class: "modal-content"
    }, [
      l("div", {
        id: m,
        class: "modal-header",
        draggable: "true"
      }, [
        l("div", U, [
          v(e.$slots, "header", {}, () => [
            l("span", X, q(n.title), 1)
          ], !0)
        ]),
        l("div", Y, [
          l("div", {
            class: "modal-header-right-btn",
            onClick: o[0] || (o[0] = (u) => e.$emit("update:modalShow", !1))
          }, G),
          l("div", {
            class: "modal-header-right-btn",
            onClick: S
          }, [
            f.value ? (h(), p("svg", J, Q)) : (h(), p("svg", R, Z))
          ]),
          l("div", {
            class: "modal-header-right-btn",
            onClick: o[1] || (o[1] = (u) => g("close"))
          }, te)
        ])
      ]),
      l("div", {
        id: r,
        class: "modal-body",
        "style:any": { width: `${n.width}px`, height: `${n.height}px`, resize: n.resize }
      }, [
        v(e.$slots, "default", {}, void 0, !0)
      ], 8, oe),
      v(e.$slots, "footer", {}, () => [
        n.footerHide ? O("", !0) : (h(), p("div", ne, [
          l("button", {
            class: "modal-button",
            onClick: o[2] || (o[2] = (u) => g("cancel"))
          }, "取消"),
          l("button", {
            class: "modal-button modal-button-primary",
            onClick: B
          }, "提交")
        ]))
      ], !0)
    ]));
  }
}), I = (n, d) => {
  const i = n.__vccOpts || n;
  for (const [t, a] of d)
    i[t] = a;
  return i;
}, ae = /* @__PURE__ */ I(le, [["__scopeId", "data-v-9b85fced"]]), se = { class: "modal" }, ie = /* @__PURE__ */ C({
  __name: "index",
  props: {
    // 能否通过遮罩关闭弹窗
    maskClosable: {
      type: Boolean,
      default: !0
    },
    // 遮罩
    ModalMaskDisplay: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(n, { emit: d }) {
    const i = n, t = E();
    function a() {
      i.maskClosable && (t == null || t.appContext.config.globalProperties.unmountModal());
    }
    const s = b(!0);
    function m(r) {
      s.value = r;
    }
    return (r, f) => w((h(), p("div", se, [
      w(l("div", {
        class: "modal-mask",
        onClick: a
      }, null, 512), [
        [k, n.ModalMaskDisplay]
      ]),
      F(ae, L(r.$attrs, { "onUpdate:modalShow": m }), {
        default: A(() => [
          v(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 512)), [
      [k, s.value]
    ]);
  }
}), de = /* @__PURE__ */ I(ie, [["__scopeId", "data-v-cd541b9d"]]);
function re() {
  return Math.random().toString(36).substr(2, 9);
}
let y = b(/* @__PURE__ */ new Map());
function ce(n, d) {
  return new Promise((i) => {
    const t = re(), a = document.createElement("div");
    a.id = t, document.body.appendChild(a);
    const s = V($(de, d, [$(n, d)]));
    s.config.globalProperties.modalIndex = y.value.size, s.config.globalProperties.uniqueId = t, y.value.set(t, s), s.mount(a), s.config.globalProperties.unmountModal = function() {
      document.body.style.overflow = "auto", y.value.get(t).unmount(), a.remove(), y.value.delete(t);
    }, i({ uniqueId: t, element: a, app: s });
  });
}
const me = {
  // install(App:any) {
  //     component?.forEach((item:any) => {
  //         App.component(item.name, item);
  //     });
  // },
  // install(app:any) {
  //     app.component('HelloWorld', HelloWorld);
  // }
};
export {
  me as default,
  ce as openModal
};
