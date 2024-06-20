import { defineComponent as I, getCurrentInstance as B, ref as _, onMounted as N, openBlock as g, createElementBlock as v, createElementVNode as l, renderSlot as b, toDisplayString as O, normalizeStyle as F, createCommentVNode as R, pushScopeId as A, popScopeId as V, withDirectives as $, vShow as k, createVNode as W, mergeProps as U, withCtx as X, createApp as Y, h as E } from "vue";
const x = (o) => (A("data-v-7529da5a"), o = o(), V(), o), j = { class: "modal-header-left" }, G = { class: "modal-header-left-title" }, J = { class: "modal-header-right" }, K = /* @__PURE__ */ x(() => /* @__PURE__ */ l("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuixiaohua" })
], -1)), Q = [
  K
], T = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}, Z = /* @__PURE__ */ x(() => /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuidahua" }, null, -1)), ee = [
  Z
], te = {
  key: 1,
  class: "icon",
  "aria-hidden": "true"
}, oe = /* @__PURE__ */ x(() => /* @__PURE__ */ l("use", { "xlink:href": "#icon-zuidahua1" }, null, -1)), ne = [
  oe
], le = /* @__PURE__ */ x(() => /* @__PURE__ */ l("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("use", { "xlink:href": "#icon-guanbi" })
], -1)), ae = [
  le
], se = {
  key: 0,
  class: "modal-footer"
}, ie = {
  name: "ModalContent"
}, de = /* @__PURE__ */ I({
  ...ie,
  props: {
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
    // 弹窗尺寸可拖动
    resize: {
      type: Boolean,
      default: !0
    },
    // 提交前的狗子函数
    submitModalBeforeEvent: {
      type: Function,
      default: null
    }
  },
  emits: ["update:modalShow"],
  setup(o, { expose: i }) {
    const r = o, n = B(), a = _(n == null ? void 0 : n.appContext.config.globalProperties.uniqueId), s = `draggableDOM-${a.value}`, u = `draggableDOMPoint-${a.value}`, p = `resizeDOM-${a.value}`, d = _(!1);
    let c;
    function D() {
      requestAnimationFrame(() => {
        let t = document.getElementById(s);
        const e = document.getElementById(p);
        d.value ? (document.body.style.overflow = "auto", e.style.width = c.width + "px", e.style.height = c.resizeDOMHeight + "px", t.style.width = "inherit", t.style.height = "inherit", t.style.transform = `translate(${c.left}px,${c.top}px)`, e.style.resize = r.resize ? "auto" : "none", d.value = !1) : (c = t == null ? void 0 : t.getBoundingClientRect(), c.resizeDOMHeight = e == null ? void 0 : e.getBoundingClientRect().height, document.body.style.overflow = "hidden", t.style.transform = "translate(0px,0px)", t.style.width = "100vw", t.style.height = "100vh", e.style.width = "100vw", e.style.resize = "none", d.value = !0);
      });
    }
    function P() {
      let t = null;
      const e = document.getElementById(s);
      let h = document.getElementById(u);
      const M = n == null ? void 0 : n.appContext.config.globalProperties.modalIndex, C = {
        x: 5 * M,
        y: 5 * M
      };
      e.style.transform = `translate(${document.documentElement.clientWidth / 2 - e.getBoundingClientRect().width / 2 + C.x}px,${document.documentElement.clientHeight / 2 - e.getBoundingClientRect().height / 2 + C.y}px)`, h == null || h.addEventListener("dragstart", (m) => {
        m.target.id !== u && !e || d.value || (t = m, e.style.opacity = ".92");
      }), document == null || document.addEventListener("dragover", (m) => {
        if (m.target.id !== u && !t)
          return;
        const q = window.innerHeight - t.target.offsetHeight, L = window.innerWidth - t.target.offsetWidth;
        e.style.transform = `translate(${Math.min(Math.max(0, m.clientX - t.offsetX), L)}px,${Math.min(
          Math.max(0, m.clientY - t.offsetY),
          q
        )}px)`, m.preventDefault();
      }), e == null || e.addEventListener("drop", () => {
        e.style.opacity = "1";
      });
    }
    function y(t) {
      switch (t) {
        case "cancel":
        case "close":
        case "submit":
          n == null || n.appContext.config.globalProperties.unmountModal();
          break;
      }
    }
    async function H() {
      if (typeof r.submitModalBeforeEvent != "function")
        return y("submit");
      await new Promise(() => {
        if (r.submitModalBeforeEvent())
          return y("submit");
      });
    }
    return N(() => {
      P();
    }), i({
      uniqueId: a
    }), (t, e) => (g(), v("div", {
      id: s,
      class: "modal-content"
    }, [
      l("div", {
        id: u,
        class: "modal-header",
        draggable: "true"
      }, [
        l("div", j, [
          b(t.$slots, "header", {}, () => [
            l("span", G, O(o.title), 1)
          ], !0)
        ]),
        l("div", J, [
          l("div", {
            class: "modal-header-right-btn",
            onClick: e[0] || (e[0] = (h) => t.$emit("update:modalShow", !1))
          }, Q),
          l("div", {
            class: "modal-header-right-btn",
            onClick: D
          }, [
            d.value ? (g(), v("svg", T, ee)) : (g(), v("svg", te, ne))
          ]),
          l("div", {
            class: "modal-header-right-btn",
            onClick: e[1] || (e[1] = (h) => y("close"))
          }, ae)
        ])
      ]),
      l("div", {
        id: p,
        class: "modal-body",
        style: F(`width: ${o.width}px; height: ${o.height}px ;resize: ${o.resize ? "auto" : "none"}`)
      }, [
        b(t.$slots, "default", {}, void 0, !0)
      ], 4),
      b(t.$slots, "footer", {}, () => [
        o.footerHide ? R("", !0) : (g(), v("div", se, [
          l("button", {
            class: "modal-button",
            onClick: e[2] || (e[2] = (h) => y("cancel"))
          }, "取消"),
          l("button", {
            class: "modal-button modal-button-primary",
            onClick: H
          }, "提交")
        ]))
      ], !0)
    ]));
  }
}), S = (o, i) => {
  const r = o.__vccOpts || o;
  for (const [n, a] of i)
    r[n] = a;
  return r;
}, re = /* @__PURE__ */ S(de, [["__scopeId", "data-v-7529da5a"]]), ue = { class: "modal" }, ce = {
  name: "LxModal"
}, me = /* @__PURE__ */ I({
  ...ce,
  props: {
    // 能否通过遮罩关闭弹窗
    maskClosable: {
      type: Boolean,
      default: !0
    },
    // 遮罩
    modalMaskDisplay: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(o, { expose: i, emit: r }) {
    const n = o, a = B();
    function s() {
      n.maskClosable && (a == null || a.appContext.config.globalProperties.unmountModal());
    }
    const u = _(!0);
    function p(d) {
      u.value = d;
    }
    return i({
      minShowModal: p
    }), (d, c) => $((g(), v("div", ue, [
      $(l("div", {
        class: "modal-mask",
        onClick: s
      }, null, 512), [
        [k, o.modalMaskDisplay]
      ]),
      W(re, U(d.$attrs, { "onUpdate:modalShow": p }), {
        default: X(() => [
          b(d.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 512)), [
      [k, u.value]
    ]);
  }
}), z = /* @__PURE__ */ S(me, [["__scopeId", "data-v-019cd53d"]]);
function he() {
  return Math.random().toString(36).substr(2, 9);
}
let f = _(/* @__PURE__ */ new Map());
function pe() {
  f.value.size !== 0 && f.value.forEach((o) => {
    o.config.globalProperties.unmountModal();
  });
}
function ge(o, i) {
  return new Promise((r) => {
    const n = he(), a = document.createElement("div");
    a.id = n, document.body.appendChild(a);
    const s = Y(E(z, i, [E(o, i)]), {});
    s.config.globalProperties.modalIndex = f.value.size, s.config.globalProperties.uniqueId = n, f.value.set(n, s), s.mount(a), s.config.globalProperties.unmountModal = function() {
      document.body.style.overflow = "auto", f.value.get(n).unmount(), a.remove(), f.value.delete(n);
    }, r({ uniqueId: n, element: a, app: s });
  });
}
const w = [z], ve = {
  install(o) {
    w == null || w.forEach((i) => {
      o.component(i.name, i);
    });
  }
};
export {
  z as LxModal,
  f as ModalInstanceMap,
  pe as closeAllModal,
  ve as default,
  ge as openModal
};
