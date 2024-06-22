var Q = Object.defineProperty;
var Z = (e, o, d) => o in e ? Q(e, o, { enumerable: !0, configurable: !0, writable: !0, value: d }) : e[o] = d;
var y = (e, o, d) => (Z(e, typeof o != "symbol" ? o + "" : o, d), d);
import { defineComponent as E, getCurrentInstance as V, ref as _, onMounted as N, openBlock as h, createElementBlock as f, renderSlot as $, createElementVNode as t, toDisplayString as C, createCommentVNode as X, normalizeClass as O, normalizeStyle as ee, pushScopeId as U, popScopeId as A, createBlock as te, Transition as oe, withCtx as Y, withDirectives as S, vShow as D, createVNode as ne, mergeProps as se, createApp as ie, h as T, useModel as F, unref as q, Fragment as le, renderList as ae } from "vue";
const b = (e) => (U("data-v-cc1b2fb9"), e = e(), A(), e), de = { class: "modal-header-left" }, re = ["textContent"], ce = { class: "modal-header-right" }, ue = /* @__PURE__ */ b(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuixiaohua" })
], -1)), he = [
  ue
], me = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}, fe = /* @__PURE__ */ b(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuidahua" }, null, -1)), ge = [
  fe
], ve = {
  key: 1,
  class: "icon",
  "aria-hidden": "true"
}, pe = /* @__PURE__ */ b(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuidahua1" }, null, -1)), _e = [
  pe
], xe = /* @__PURE__ */ b(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-guanbi" })
], -1)), be = [
  xe
], we = { class: "modal-header-right" }, ye = { class: "modal-header-right-btn" }, $e = /* @__PURE__ */ b(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-guanbi1" }, null, -1)), ke = [
  $e
], Me = { class: "modal-header-right-btn" }, Ce = /* @__PURE__ */ b(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuidahua2" }, null, -1)), Se = [
  Ce
], De = { class: "modal-header-right-btn" }, Pe = /* @__PURE__ */ b(() => /* @__PURE__ */ t("use", { "xlink:href": "#icon-zuixiaohua4-copy" }, null, -1)), Be = [
  Pe
], Ee = { class: "modal-header-left" }, Ie = ["textContent"], Le = {
  key: 0,
  class: "modal-footer"
}, Re = {
  name: "ModalContent"
}, ze = /* @__PURE__ */ E({
  ...Re,
  props: {
    modalTitle: {
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
  setup(e, { expose: o }) {
    const d = e, s = V(), i = _(s == null ? void 0 : s.appContext.config.globalProperties.uniqueId), u = `draggableDOM-${i.value}`, c = `draggableDOMPoint-${i.value}`, a = _(!1);
    let r;
    function g(n, l) {
      requestAnimationFrame(() => {
        n.classList.add("modal-transition"), a.value ? (document.body.style.overflow = "auto", l.style.width = r.width + "px", l.style.height = r.resizeDOMHeight + "px", n.style.width = "inherit", n.style.height = "inherit", n.style.transform = `translate(${r.left}px,${r.top}px)`, l.style.resize = d.resize ? "auto" : "none", a.value = !1) : (r = n == null ? void 0 : n.getBoundingClientRect(), r.resizeDOMHeight = l == null ? void 0 : l.getBoundingClientRect().height, document.body.style.overflow = "hidden", n.style.transform = "translate(0px,0px)", n.style.width = "100vw", n.style.height = "100vh", l.style.width = "100vw", l.style.resize = "none", a.value = !0);
      });
    }
    const m = _(), p = _(), k = _();
    let w = null;
    function J(n) {
      const l = s == null ? void 0 : s.appContext.config.globalProperties.modalIndex, v = {
        x: 5 * l,
        y: 5 * l
      }, z = n.getBoundingClientRect(), H = document.documentElement;
      n.style.transform = `translate(${H.clientWidth / 2 - z.width / 2 + v.x}px,${H.clientHeight / 2 - z.height / 2 + v.y}px)`, document == null || document.addEventListener("dragover", P);
    }
    function L(n) {
      a.value || n.target.id !== c && !m || (w = n, document == null || document.addEventListener("dragover", P));
    }
    function P(n) {
      if (a.value || n.target.id !== c && !w || !m.value)
        return;
      const l = window.innerHeight - w.target.offsetHeight, v = window.innerWidth - w.target.offsetWidth;
      m.value.style.transform = `translate(${Math.min(Math.max(0, n.clientX - w.offsetX), v)}px,${Math.min(
        Math.max(0, n.clientY - w.offsetY),
        l
      )}px)`, n.preventDefault();
    }
    function R(n) {
      document.removeEventListener("dragover", P);
    }
    function M(n) {
      switch (n) {
        case "cancel":
        case "close":
        case "submit":
          s == null || s.appContext.config.globalProperties.unmountModal();
          break;
      }
    }
    async function K() {
      if (typeof d.submitModalBeforeEvent != "function")
        return M("submit");
      await new Promise(() => {
        if (d.submitModalBeforeEvent())
          return M("submit");
      });
    }
    return N(() => {
      J(m.value);
    }), o({
      uniqueId: i
    }), (n, l) => (h(), f("div", {
      ref_key: "draggableDOMRef",
      ref: m,
      id: u,
      class: "modal-content"
    }, [
      $(n.$slots, "header", {}, () => [
        e.modalStyle === "windows" ? (h(), f("div", {
          key: 0,
          ref_key: "draggableDOMPointRef",
          ref: p,
          id: c,
          class: "modal-header windows",
          draggable: "true",
          onDragstart: L,
          onDrop: R
        }, [
          t("div", de, [
            $(n.$slots, "header-left", {}, () => [
              t("span", {
                class: "modal-header-left-title",
                textContent: C(e.modalTitle)
              }, null, 8, re)
            ], !0)
          ]),
          t("div", ce, [
            t("div", {
              class: "modal-header-right-btn",
              onClick: l[0] || (l[0] = (v) => n.$emit("update:modalShow", !1))
            }, he),
            t("div", {
              class: "modal-header-right-btn",
              onClick: l[1] || (l[1] = (v) => g(m.value, k.value))
            }, [
              a.value ? (h(), f("svg", me, ge)) : (h(), f("svg", ve, _e))
            ]),
            t("div", {
              class: "modal-header-right-btn",
              onClick: l[2] || (l[2] = (v) => M("close"))
            }, be)
          ])
        ], 544)) : e.modalStyle === "mac" ? (h(), f("div", {
          key: 1,
          ref_key: "draggableDOMPointRef",
          ref: p,
          id: c,
          class: "modal-header mac",
          draggable: "true",
          onDragstart: L,
          onDrop: R
        }, [
          t("div", we, [
            t("div", ye, [
              (h(), f("svg", {
                class: "icon",
                "aria-hidden": "true",
                onClick: l[3] || (l[3] = (v) => M("close"))
              }, ke))
            ]),
            t("div", Me, [
              (h(), f("svg", {
                class: "icon",
                "aria-hidden": "true",
                onClick: l[4] || (l[4] = (v) => g(m.value, k.value))
              }, Se))
            ]),
            t("div", De, [
              (h(), f("svg", {
                class: "icon",
                "aria-hidden": "true",
                onClick: l[5] || (l[5] = (v) => n.$emit("update:modalShow", !1))
              }, Be))
            ])
          ]),
          t("div", Ee, [
            $(n.$slots, "header-left", {}, () => [
              t("span", {
                class: "modal-header-left-title",
                textContent: C(e.modalTitle)
              }, null, 8, Ie)
            ], !0)
          ])
        ], 544)) : X("", !0)
      ], !0),
      t("div", {
        ref_key: "resizeDOMRef",
        ref: k,
        class: O(["modal-body scroll-container", { "modal-diy-body": e.footerHide }]),
        style: ee(`width: ${e.width}px; height: ${e.height}px ;resize: ${e.resize ? "auto" : "none"}`)
      }, [
        $(n.$slots, "default", {}, void 0, !0)
      ], 6),
      $(n.$slots, "footer", {}, () => [
        e.footerHide ? X("", !0) : (h(), f("div", Le, [
          t("button", {
            class: "modal-button",
            onClick: l[6] || (l[6] = (v) => M("cancel"))
          }, "取消"),
          t("button", {
            class: "modal-button modal-button-primary",
            onClick: K
          }, "提交")
        ]))
      ], !0)
    ], 512));
  }
}), I = (e, o) => {
  const d = e.__vccOpts || e;
  for (const [s, i] of o)
    d[s] = i;
  return d;
}, He = /* @__PURE__ */ I(ze, [["__scopeId", "data-v-cc1b2fb9"]]), Xe = { class: "modal" }, Ye = {
  name: "LxModal"
}, Te = /* @__PURE__ */ E({
  ...Ye,
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
  setup(e, { expose: o, emit: d }) {
    const s = e, i = V();
    function u() {
      s.maskClosable && (i == null || i.appContext.config.globalProperties.unmountModal());
    }
    const c = _(!0);
    function a(r) {
      c.value = !c.value;
    }
    return o({
      modalShow: c,
      minShowModal: a
    }), (r, g) => (h(), te(oe, null, {
      default: Y(() => [
        S(t("div", Xe, [
          S(t("div", {
            class: "modal-mask",
            onClick: u
          }, null, 512), [
            [D, e.modalMaskDisplay]
          ]),
          ne(He, se(r.$attrs, { "onUpdate:modalShow": a }), {
            default: Y(() => [
              $(r.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 16)
        ], 512), [
          [D, c.value]
        ])
      ]),
      _: 3
    }));
  }
}), j = /* @__PURE__ */ I(Te, [["__scopeId", "data-v-d0e46f78"]]);
function Fe() {
  return Math.random().toString(36).substr(2, 9);
}
let x = _(/* @__PURE__ */ new Map());
function W() {
  x.value.size !== 0 && x.value.forEach((e) => {
    e.config.globalProperties.unmountModal();
  });
}
function it(e, o) {
  return new Promise((d) => {
    const s = Fe(), i = document.createElement("div");
    i.id = s, document.body.appendChild(i);
    const u = ie(T(j, o, [T(e, o)]), {});
    u.config.globalProperties.modalIndex = x.value.size, u.config.globalProperties.uniqueId = s, x.value.set(s, u), u.mount(i), u.config.globalProperties.unmountModal = function() {
      x.value.get(s)._instance.exposed.modalShow.value = !1, document.body.style.overflow = "auto", x.value.get(s).unmount(), i.remove(), x.value.delete(s);
    }, d({ uniqueId: s, element: i, app: u });
  });
}
class qe {
  constructor(o) {
    y(this, "element");
    y(this, "startX", 0);
    y(this, "startY", 0);
    y(this, "isDragging", !1);
    y(this, "adsorb");
    this.element = document.querySelector(o.el), this.adsorb = o.adsorb, this.element ? (this.element.addEventListener("mousedown", this.onMouseDown.bind(this)), document.addEventListener("mousemove", this.onMouseMove.bind(this), { capture: !0 }), document.addEventListener("mouseup", this.onMouseUp.bind(this), { capture: !0 })) : console.error(`Element with selector '${o.el}' not found.`);
  }
  onMouseDown(o) {
    this.element && o.target === this.element && (o.preventDefault(), this.startX = o.clientX - this.element.offsetLeft, this.startY = o.clientY - this.element.offsetTop, this.isDragging = !0);
  }
  onMouseMove(o) {
    if (this.isDragging) {
      o.preventDefault();
      const d = o.clientX - this.startX, s = o.clientY - this.startY, i = window.innerWidth, u = window.innerHeight, c = this.element.getBoundingClientRect(), a = 0, r = 0, g = i - c.width, m = u - c.height;
      let p = Math.min(Math.max(d, a), g), k = Math.min(Math.max(s, r), m);
      this.element.style.left = p + "px", this.element.style.top = k + "px";
    }
  }
  onMouseUp(o) {
    if (this.isDragging && (o.preventDefault(), this.isDragging = !1, this.adsorb)) {
      const d = window.innerWidth, s = window.innerHeight, i = this.element.getBoundingClientRect();
      let u = i.left, c = i.top;
      const a = i.left, r = d - (i.left + i.width), g = i.top, m = s - (i.top + i.height), p = Math.min(a, r, g, m);
      p === a ? u = 0 : p === r && (u = d - i.width), p === g ? c = 0 : p === m && (c = s - i.height), this.element.style.left = u + "px", this.element.style.top = c + "px";
    }
  }
}
const G = (e) => (U("data-v-0031aae5"), e = e(), A(), e), We = { class: "lx-modal-box" }, Ve = ["textContent"], Ne = {
  id: "box2",
  class: "lx-modal-box-max"
}, Ue = { class: "header-box" }, Ae = /* @__PURE__ */ G(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-guanbi" })
], -1)), je = [
  Ae
], Ge = { key: 0 }, Je = ["onClick"], Ke = ["onClick"], Qe = /* @__PURE__ */ G(() => /* @__PURE__ */ t("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#icon-guanbi1" })
], -1)), Ze = [
  Qe
], Oe = {
  key: 1,
  class: "lx-modal-box-max-nodata"
}, et = {
  name: "LxModalBox"
}, tt = /* @__PURE__ */ E({
  ...et,
  props: {
    modelValue: { type: Map, default: /* @__PURE__ */ new Map() },
    modelModifiers: {},
    showbox: { type: Boolean, default: !1 },
    showboxModifiers: {}
  },
  emits: ["update:modelValue", "update:showbox"],
  setup(e, { expose: o }) {
    const d = F(e, "modelValue"), s = F(e, "showbox");
    function i(c, a) {
      a._instance.exposed.minShowModal();
    }
    function u(c, a) {
      a.config.globalProperties.unmountModal();
    }
    return o({}), N(() => {
      new qe({ el: "#box1", adsorb: !0 });
    }), (c, a) => (h(), f("div", We, [
      S(t("div", {
        id: "box1",
        class: "lx-modal-box-min",
        onDblclick: a[0] || (a[0] = (r) => s.value = !0)
      }, [
        t("span", {
          textContent: C(d.value.size)
        }, null, 8, Ve)
      ], 544), [
        [D, !s.value]
      ]),
      S(t("div", Ne, [
        t("div", Ue, [
          t("div", {
            class: "allclose-div",
            onClick: a[1] || (a[1] = //@ts-ignore
            (...r) => q(W) && q(W)(...r))
          }, "关闭所有"),
          t("div", {
            class: "close-div",
            onClick: a[2] || (a[2] = (r) => s.value = !1)
          }, je)
        ]),
        d.value.size > 0 ? (h(), f("ul", Ge, [
          (h(!0), f(le, null, ae(d.value, ([r, g]) => (h(), f("li", { key: r }, [
            t("div", {
              onClick: (m) => i(r, g)
            }, C(g._instance.attrs.modalTitle), 9, Je),
            t("div", {
              onClick: (m) => u(r, g)
            }, Ze, 8, Ke)
          ]))), 128))
        ])) : (h(), f("div", Oe, "你没有未关闭的弹窗~"))
      ], 512), [
        [D, s.value]
      ])
    ]));
  }
}), ot = /* @__PURE__ */ I(tt, [["__scopeId", "data-v-0031aae5"]]), B = [j, ot], lt = {
  install(e) {
    B == null || B.forEach((o) => {
      e.component(o.name, o);
    });
  }
};
export {
  j as LxModal,
  ot as LxModalBox,
  x as ModalInstanceMap,
  W as closeAllModal,
  lt as default,
  it as openModal
};
