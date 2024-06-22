import { defineComponent as F, getCurrentInstance as q, ref as v, onMounted as U, openBlock as m, createElementBlock as b, renderSlot as _, createElementVNode as t, toDisplayString as E, createCommentVNode as z, normalizeClass as X, normalizeStyle as Y, pushScopeId as T, popScopeId as j, createBlock as G, Transition as J, withCtx as D, withDirectives as R, vShow as L, createVNode as K, mergeProps as Q, createApp as Z, h as H } from "vue";
const p = (n) => (T("data-v-6bf5990b"), n = n(), j(), n), O = { class: "modal-header-left" }, ee = ["textContent"], te = { class: "modal-header-right" }, oe = /* @__PURE__ */ p(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuixiaohua" })
], -1)), ne = [
  oe
], ae = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}, le = /* @__PURE__ */ p(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuidahua" }, null, -1)), ie = [
  le
], se = {
  key: 1,
  class: "icon",
  "aria-hidden": "true"
}, de = /* @__PURE__ */ p(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuidahua1" }, null, -1)), re = [
  de
], ue = /* @__PURE__ */ p(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-guanbi" })
], -1)), ce = [
  ue
], fe = { class: "modal-header-right" }, he = /* @__PURE__ */ p(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-guanbi1" })
], -1)), me = [
  he
], ve = /* @__PURE__ */ p(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuidahua2" })
], -1)), ge = [
  ve
], pe = /* @__PURE__ */ p(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuixiaohua4-copy" })
], -1)), ye = [
  pe
], be = { class: "modal-header-left" }, _e = ["textContent"], we = {
  key: 0,
  class: "modal-footer"
}, xe = {
  name: "ModalContent"
}, ke = /* @__PURE__ */ F({
  ...xe,
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
    },
    // 窗口风格
    modalStyle: {
      type: String,
      default: "windows"
    }
  },
  emits: ["update:modalShow"],
  setup(n, { expose: i }) {
    const u = n, a = q(), l = v(a == null ? void 0 : a.appContext.config.globalProperties.uniqueId), d = `draggableDOM-${l.value}`, c = `draggableDOMPoint-${l.value}`, f = v(!1);
    let r;
    function x(e, o) {
      requestAnimationFrame(() => {
        e.classList.add("modal-transition"), f.value ? (document.body.style.overflow = "auto", o.style.width = r.width + "px", o.style.height = r.resizeDOMHeight + "px", e.style.width = "inherit", e.style.height = "inherit", e.style.transform = `translate(${r.left}px,${r.top}px)`, o.style.resize = u.resize ? "auto" : "none", f.value = !1) : (r = e == null ? void 0 : e.getBoundingClientRect(), r.resizeDOMHeight = o == null ? void 0 : o.getBoundingClientRect().height, document.body.style.overflow = "hidden", e.style.transform = "translate(0px,0px)", e.style.width = "100vw", e.style.height = "100vh", o.style.width = "100vw", o.style.resize = "none", f.value = !0);
      });
    }
    const h = v(), S = v(), k = v();
    let y = null;
    function V(e) {
      const o = a == null ? void 0 : a.appContext.config.globalProperties.modalIndex, s = {
        x: 5 * o,
        y: 5 * o
      }, I = e.getBoundingClientRect(), B = document.documentElement;
      e.style.transform = `translate(${B.clientWidth / 2 - I.width / 2 + s.x}px,${B.clientHeight / 2 - I.height / 2 + s.y}px)`, document == null || document.addEventListener("dragover", C);
    }
    function M(e) {
      f.value || e.target.id !== c && !h || (y = e, h.value.style.opacity = ".92", document == null || document.addEventListener("dragover", C));
    }
    function C(e) {
      if (f.value || e.target.id !== c && !y || !h.value)
        return;
      const o = window.innerHeight - y.target.offsetHeight, s = window.innerWidth - y.target.offsetWidth;
      h.value.style.transform = `translate(${Math.min(Math.max(0, e.clientX - y.offsetX), s)}px,${Math.min(
        Math.max(0, e.clientY - y.offsetY),
        o
      )}px)`, e.preventDefault();
    }
    function P(e) {
      h.value.style.opacity = "1", document.removeEventListener("dragover", C);
    }
    function w(e) {
      switch (e) {
        case "cancel":
        case "close":
        case "submit":
          a == null || a.appContext.config.globalProperties.unmountModal();
          break;
      }
    }
    async function W() {
      if (typeof u.submitModalBeforeEvent != "function")
        return w("submit");
      await new Promise(() => {
        if (u.submitModalBeforeEvent())
          return w("submit");
      });
    }
    return U(() => {
      V(h.value);
    }), i({
      uniqueId: l
    }), (e, o) => (m(), b("div", {
      ref_key: "draggableDOMRef",
      ref: h,
      id: d,
      class: "modal-content"
    }, [
      _(e.$slots, "header", {}, () => [
        n.modalStyle === "windows" ? (m(), b("div", {
          key: 0,
          ref_key: "draggableDOMPointRef",
          ref: S,
          id: c,
          class: "modal-header windows",
          draggable: "true",
          onDragstart: M,
          onDrop: P
        }, [
          t("div", O, [
            _(e.$slots, "header-left", {}, () => [
              t("span", {
                class: "modal-header-left-title",
                textContent: E(n.title)
              }, null, 8, ee)
            ], !0)
          ]),
          t("div", te, [
            t("div", {
              class: "modal-header-right-btn",
              onClick: o[0] || (o[0] = (s) => e.$emit("update:modalShow", !1))
            }, ne),
            t("div", {
              class: "modal-header-right-btn",
              onClick: o[1] || (o[1] = (s) => x(h.value, k.value))
            }, [
              f.value ? (m(), b("svg", ae, ie)) : (m(), b("svg", se, re))
            ]),
            t("div", {
              class: "modal-header-right-btn",
              onClick: o[2] || (o[2] = (s) => w("close"))
            }, ce)
          ])
        ], 544)) : n.modalStyle === "mac" ? (m(), b("div", {
          key: 1,
          ref_key: "draggableDOMPointRef",
          ref: S,
          id: c,
          class: "modal-header mac",
          draggable: "true",
          onDragstart: M,
          onDrop: P
        }, [
          t("div", fe, [
            t("div", {
              class: "modal-header-right-btn",
              onClick: o[3] || (o[3] = (s) => w("close"))
            }, me),
            t("div", {
              class: "modal-header-right-btn",
              onClick: o[4] || (o[4] = (s) => x(h.value, k.value))
            }, ge),
            t("div", {
              class: "modal-header-right-btn",
              onClick: o[5] || (o[5] = (s) => e.$emit("update:modalShow", !1))
            }, ye)
          ]),
          t("div", be, [
            _(e.$slots, "header-left", {}, () => [
              t("span", {
                class: "modal-header-left-title",
                textContent: E(n.title)
              }, null, 8, _e)
            ], !0)
          ])
        ], 544)) : z("", !0)
      ], !0),
      t("div", {
        ref_key: "resizeDOMRef",
        ref: k,
        class: X(["modal-body scroll-container", { "modal-diy-body": n.footerHide }]),
        style: Y(`width: ${n.width}px; height: ${n.height}px ;resize: ${n.resize ? "auto" : "none"}`)
      }, [
        _(e.$slots, "default", {}, void 0, !0)
      ], 6),
      _(e.$slots, "footer", {}, () => [
        n.footerHide ? z("", !0) : (m(), b("div", we, [
          t("button", {
            class: "modal-button",
            onClick: o[6] || (o[6] = (s) => w("cancel"))
          }, "取消"),
          t("button", {
            class: "modal-button modal-button-primary",
            onClick: W
          }, "提交")
        ]))
      ], !0)
    ], 512));
  }
}), N = (n, i) => {
  const u = n.__vccOpts || n;
  for (const [a, l] of i)
    u[a] = l;
  return u;
}, Ce = /* @__PURE__ */ N(ke, [["__scopeId", "data-v-6bf5990b"]]), $e = { class: "modal" }, Se = {
  name: "LxModal"
}, Me = /* @__PURE__ */ F({
  ...Se,
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
  setup(n, { expose: i, emit: u }) {
    const a = n, l = q();
    function d() {
      a.maskClosable && (l == null || l.appContext.config.globalProperties.unmountModal());
    }
    const c = v(!0);
    function f(r) {
      c.value = !c.value;
    }
    return i({
      modalShow: c,
      minShowModal: f
    }), (r, x) => (m(), G(J, null, {
      default: D(() => [
        R(t("div", $e, [
          R(t("div", {
            class: "modal-mask",
            onClick: d
          }, null, 512), [
            [L, n.modalMaskDisplay]
          ]),
          K(Ce, Q(r.$attrs, { "onUpdate:modalShow": f }), {
            default: D(() => [
              _(r.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 16)
        ], 512), [
          [L, c.value]
        ])
      ]),
      _: 3
    }));
  }
}), A = /* @__PURE__ */ N(Me, [["__scopeId", "data-v-d0e46f78"]]);
function Pe() {
  return Math.random().toString(36).substr(2, 9);
}
let g = v(/* @__PURE__ */ new Map());
function Be() {
  g.value.size !== 0 && g.value.forEach((n) => {
    n.config.globalProperties.unmountModal();
  });
}
function Ee(n, i) {
  return new Promise((u) => {
    const a = Pe(), l = document.createElement("div");
    l.id = a, document.body.appendChild(l);
    const d = Z(H(A, i, [H(n, i)]), {});
    d.config.globalProperties.modalIndex = g.value.size, d.config.globalProperties.uniqueId = a, g.value.set(a, d), d.mount(l), d.config.globalProperties.unmountModal = function() {
      g.value.get(a)._instance.exposed.modalShow.value = !1, document.body.style.overflow = "auto", g.value.get(a).unmount(), l.remove(), g.value.delete(a);
    }, u({ uniqueId: a, element: l, app: d });
  });
}
const $ = [A], ze = {
  install(n) {
    $ == null || $.forEach((i) => {
      n.component(i.name, i);
    });
  }
};
export {
  A as LxModal,
  g as ModalInstanceMap,
  Be as closeAllModal,
  ze as default,
  Ee as openModal
};
