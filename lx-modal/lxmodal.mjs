import { defineComponent as E, getCurrentInstance as _, ref as y, onMounted as O, openBlock as b, createElementBlock as M, createElementVNode as d, renderSlot as g, toDisplayString as W, normalizeStyle as q, createCommentVNode as N, withDirectives as $, vShow as C, createVNode as L, mergeProps as F, withCtx as V, createApp as A, h as k } from "vue";
const U = { class: "modal-header-left" }, X = { class: "modal-header-left-title" }, Y = { class: "modal-header-right" }, j = {
  key: 0,
  class: "modal-footer"
}, G = {
  name: "ModalContent"
}, J = /* @__PURE__ */ E({
  ...G,
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
  setup(l, { expose: i }) {
    const s = l, o = _(), n = y(o == null ? void 0 : o.appContext.config.globalProperties.uniqueId), a = `draggableDOM-${n.value}`, m = `draggableDOMPoint-${n.value}`, r = `resizeDOM-${n.value}`, f = y(!1);
    function I() {
      requestAnimationFrame(() => {
        let e = document.getElementById(a);
        const t = document.getElementById(r);
        f.value ? (document.body.style.overflow = "auto", t.style.width = s.width + "px", t.style.height = s.height + "px", e.style.width = "inherit", e.style.height = "inherit", e.style.transform = `translate(${document.documentElement.clientWidth / 2 - e.offsetWidth / 2}px,${document.documentElement.clientHeight / 2 - e.offsetHeight / 2}px)`, t.style.resize = s.resize, f.value = !1) : (document.body.style.overflow = "hidden", e.style.transform = "translate(0px,0px)", e.style.width = "100vw", e.style.height = "100vh", t.style.width = "100vw", t.style.resize = "none", f.value = !0);
      });
    }
    function h(e) {
      switch (e) {
        case "cancel":
        case "close":
        case "submit":
          o == null || o.appContext.config.globalProperties.unmountModal();
          break;
      }
    }
    async function S() {
      if (typeof s.submitModalBeforeEvent != "function")
        return h("submit");
      await new Promise(() => {
        if (s.submitModalBeforeEvent())
          return h("submit");
      });
    }
    O(() => {
      z();
    });
    function z() {
      let e = null;
      const t = document.getElementById(a);
      let u = document.getElementById(m);
      const w = o == null ? void 0 : o.appContext.config.globalProperties.modalIndex, x = {
        x: 5 * w,
        y: 5 * w
      };
      t.style.transform = `translate(${document.documentElement.clientWidth / 2 - t.offsetWidth / 2 + x.x}px,${document.documentElement.clientHeight / 2 - t.offsetHeight / 2 + x.y}px)`, u == null || u.addEventListener("dragstart", (c) => {
        c.target.id !== m && !t || (e = c, t.style.opacity = ".92");
      }), document == null || document.addEventListener("dragover", (c) => {
        if (c.target.id !== m && !e)
          return;
        const P = window.innerHeight - e.target.offsetHeight, H = window.innerWidth - e.target.offsetWidth;
        t.style.transform = `translate(${Math.min(Math.max(0, c.clientX - e.offsetX), H)}px,${Math.min(Math.max(0, c.clientY - e.offsetY), P)}px)`, c.preventDefault();
      }), t == null || t.addEventListener("drop", () => {
        e = null, u = null, t.style.opacity = "1";
      });
    }
    return i({
      uniqueId: n
    }), (e, t) => (b(), M("div", {
      id: a,
      class: "modal-content"
    }, [
      d("div", {
        id: m,
        class: "modal-header",
        draggable: "true",
        style: { height: "auto" }
      }, [
        d("div", U, [
          g(e.$slots, "header", {}, () => [
            d("span", X, W(l.title), 1)
          ], !0)
        ]),
        d("div", Y, [
          d("div", {
            class: "modal-header-right-btn",
            onClick: t[0] || (t[0] = (u) => e.$emit("update:modalShow", !1))
          }, " ㇐ "),
          d("div", {
            class: "modal-header-right-btn",
            onClick: I
          }, " ▢ "),
          d("div", {
            class: "modal-header-right-btn",
            onClick: t[1] || (t[1] = (u) => h("close"))
          }, " ⨉ ")
        ])
      ]),
      d("div", {
        id: r,
        class: "modal-body",
        style: q(`width: ${l.width}px; height: ${l.height}px ;resize: ${l.resize}`)
      }, [
        g(e.$slots, "default", {}, void 0, !0)
      ], 4),
      g(e.$slots, "footer", {}, () => [
        l.footerHide ? N("", !0) : (b(), M("div", j, [
          d("button", {
            class: "modal-button",
            onClick: t[2] || (t[2] = (u) => h("cancel"))
          }, "取消"),
          d("button", {
            class: "modal-button modal-button-primary",
            onClick: S
          }, "提交")
        ]))
      ], !0)
    ]));
  }
}), B = (l, i) => {
  const s = l.__vccOpts || l;
  for (const [o, n] of i)
    s[o] = n;
  return s;
}, K = /* @__PURE__ */ B(J, [["__scopeId", "data-v-f3e5f95f"]]), Q = { class: "modal" }, R = {
  name: "LxModal"
}, T = /* @__PURE__ */ E({
  ...R,
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
  setup(l, { emit: i }) {
    const s = l, o = _();
    function n() {
      s.maskClosable && (o == null || o.appContext.config.globalProperties.unmountModal());
    }
    const a = y(!0);
    function m(r) {
      a.value = r;
    }
    return (r, f) => $((b(), M("div", Q, [
      $(d("div", {
        class: "modal-mask",
        onClick: n
      }, null, 512), [
        [C, l.ModalMaskDisplay]
      ]),
      L(K, F(r.$attrs, { "onUpdate:modalShow": m }), {
        default: V(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 512)), [
      [C, a.value]
    ]);
  }
}), D = /* @__PURE__ */ B(T, [["__scopeId", "data-v-d68f852d"]]);
function Z() {
  return Math.random().toString(36).substr(2, 9);
}
let p = y(/* @__PURE__ */ new Map());
function te(l, i) {
  return new Promise((s) => {
    const o = Z(), n = document.createElement("div");
    n.id = o, document.body.appendChild(n);
    const a = A(k(D, i, [k(l, i)]));
    a.config.globalProperties.modalIndex = p.value.size, a.config.globalProperties.uniqueId = o, p.value.set(o, a), a.mount(n), a.config.globalProperties.unmountModal = function() {
      document.body.style.overflow = "auto", p.value.get(o).unmount(), n.remove(), p.value.delete(o);
    }, s({ uniqueId: o, element: n, app: a });
  });
}
const v = [D], oe = {
  install(l) {
    v == null || v.forEach((i) => {
      l.component(i.name, i);
    });
  }
};
export {
  D as LxModal,
  p as ModalInstanceMap,
  oe as default,
  te as openModal
};
