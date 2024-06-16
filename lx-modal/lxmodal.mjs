import { defineComponent as C, getCurrentInstance as E, ref as b, onMounted as H, openBlock as f, createElementBlock as p, createElementVNode as l, renderSlot as v, toDisplayString as O, normalizeStyle as W, createCommentVNode as q, pushScopeId as N, popScopeId as F, withDirectives as w, vShow as k, createVNode as L, mergeProps as A, withCtx as V, createApp as U, h as $ } from "vue";
const M = (n) => (N("data-v-cb19211a"), n = n(), F(), n), X = { class: "modal-header-left" }, Y = { class: "modal-header-left-title" }, j = { class: "modal-header-right" }, G = /* @__PURE__ */ M(() => /* @__PURE__ */ l("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuixiaohua" })
], -1)), J = [
  G
], K = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}, Q = /* @__PURE__ */ M(() => /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuidahua" }, null, -1)), R = [
  Q
], T = {
  key: 1,
  class: "icon",
  "aria-hidden": "true"
}, Z = /* @__PURE__ */ M(() => /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuidahua1" }, null, -1)), ee = [
  Z
], te = /* @__PURE__ */ M(() => /* @__PURE__ */ l("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("use", { "xlink:href": "#icon-guanbi" })
], -1)), oe = [
  te
], ne = {
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
      default: "\u{1F43D}lx-modal"
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
    const i = n, o = E(), a = b(o == null ? void 0 : o.appContext.config.globalProperties.uniqueId), s = `draggableDOM-${a.value}`, m = `draggableDOMPoint-${a.value}`, r = `resizeDOM-${a.value}`, h = b(!1);
    function I() {
      requestAnimationFrame(() => {
        let e = document.getElementById(s);
        const t = document.getElementById(r);
        h.value ? (document.body.style.overflow = "auto", t.style.width = i.width + "px", t.style.height = i.height + "px", e.style.width = "inherit", e.style.height = "inherit", e.style.transform = `translate(${document.documentElement.clientWidth / 2 - e.offsetWidth / 2}px,${document.documentElement.clientHeight / 2 - e.offsetHeight / 2}px)`, t.style.resize = i.resize, h.value = !1) : (document.body.style.overflow = "hidden", e.style.transform = "translate(0px,0px)", e.style.width = "100vw", e.style.height = "100vh", t.style.width = "100vw", t.style.resize = "none", h.value = !0);
      });
    }
    function g(e) {
      switch (e) {
        case "cancel":
        case "close":
        case "submit":
          o == null || o.appContext.config.globalProperties.unmountModal();
          break;
      }
    }
    async function S() {
      if (typeof i.submitModalBeforeEvent != "function")
        return g("submit");
      await new Promise(() => {
        if (i.submitModalBeforeEvent())
          return g("submit");
      });
    }
    H(() => {
      z();
    });
    function z() {
      let e = null;
      const t = document.getElementById(s);
      let u = document.getElementById(m);
      const x = o == null ? void 0 : o.appContext.config.globalProperties.modalIndex, _ = {
        x: 5 * x,
        y: 5 * x
      };
      t.style.transform = `translate(${document.documentElement.clientWidth / 2 - t.offsetWidth / 2 + _.x}px,${document.documentElement.clientHeight / 2 - t.offsetHeight / 2 + _.y}px)`, u == null || u.addEventListener("dragstart", (c) => {
        c.target.id !== m && !t || (e = c, t.style.opacity = ".92");
      }), document == null || document.addEventListener("dragover", (c) => {
        if (c.target.id !== m && !e)
          return;
        const B = window.innerHeight - e.target.offsetHeight, P = window.innerWidth - e.target.offsetWidth;
        t.style.transform = `translate(${Math.min(Math.max(0, c.clientX - e.offsetX), P)}px,${Math.min(Math.max(0, c.clientY - e.offsetY), B)}px)`, c.preventDefault();
      }), t == null || t.addEventListener("drop", () => {
        e = null, u = null, t.style.opacity = "1";
      });
    }
    return d({
      uniqueId: a
    }), (e, t) => (f(), p("div", {
      id: s,
      class: "modal-content"
    }, [
      l("div", {
        id: m,
        class: "modal-header",
        draggable: "true",
        style: { height: "auto" }
      }, [
        l("div", X, [
          v(e.$slots, "header", {}, () => [
            l("span", Y, O(n.title), 1)
          ], !0)
        ]),
        l("div", j, [
          l("div", {
            class: "modal-header-right-btn",
            onClick: t[0] || (t[0] = (u) => e.$emit("update:modalShow", !1))
          }, J),
          l("div", {
            class: "modal-header-right-btn",
            onClick: I
          }, [
            h.value ? (f(), p("svg", K, R)) : (f(), p("svg", T, ee))
          ]),
          l("div", {
            class: "modal-header-right-btn",
            onClick: t[1] || (t[1] = (u) => g("close"))
          }, oe)
        ])
      ]),
      l("div", {
        id: r,
        class: "modal-body",
        style: W(`width: ${n.width}px; height: ${n.height}px ;resize: ${n.resize}`)
      }, [
        v(e.$slots, "default", {}, void 0, !0)
      ], 4),
      v(e.$slots, "footer", {}, () => [
        n.footerHide ? q("", !0) : (f(), p("div", ne, [
          l("button", {
            class: "modal-button",
            onClick: t[2] || (t[2] = (u) => g("cancel"))
          }, "\u53D6\u6D88"),
          l("button", {
            class: "modal-button modal-button-primary",
            onClick: S
          }, "\u63D0\u4EA4")
        ]))
      ], !0)
    ]));
  }
}), D = (n, d) => {
  const i = n.__vccOpts || n;
  for (const [o, a] of d)
    i[o] = a;
  return i;
}, ae = /* @__PURE__ */ D(le, [["__scopeId", "data-v-cb19211a"]]), se = { class: "modal" }, ie = /* @__PURE__ */ C({
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
    const i = n, o = E();
    function a() {
      i.maskClosable && (o == null || o.appContext.config.globalProperties.unmountModal());
    }
    const s = b(!0);
    function m(r) {
      s.value = r;
    }
    return (r, h) => w((f(), p("div", se, [
      w(l("div", {
        class: "modal-mask",
        onClick: a
      }, null, 512), [
        [k, n.ModalMaskDisplay]
      ]),
      L(ae, A(r.$attrs, { "onUpdate:modalShow": m }), {
        default: V(() => [
          v(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 512)), [
      [k, s.value]
    ]);
  }
}), de = /* @__PURE__ */ D(ie, [["__scopeId", "data-v-cd541b9d"]]);
function re() {
  return Math.random().toString(36).substr(2, 9);
}
let y = b(/* @__PURE__ */ new Map());
function ce(n, d) {
  return new Promise((i) => {
    const o = re(), a = document.createElement("div");
    a.id = o, document.body.appendChild(a);
    const s = U($(de, d, [$(n, d)]));
    s.config.globalProperties.modalIndex = y.value.size, s.config.globalProperties.uniqueId = o, y.value.set(o, s), s.mount(a), s.config.globalProperties.unmountModal = function() {
      document.body.style.overflow = "auto", y.value.get(o).unmount(), a.remove(), y.value.delete(o);
    }, i({ uniqueId: o, element: a, app: s });
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
