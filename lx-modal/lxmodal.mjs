import { defineComponent as b, getCurrentInstance as C, ref as y, onMounted as q, openBlock as _, createElementBlock as p, createElementVNode as o, renderSlot as W, toDisplayString as E, createCommentVNode as N, pushScopeId as O, popScopeId as F, withDirectives as M, vShow as w, createVNode as L, mergeProps as V, withCtx as A, createApp as U, h as k, Fragment as X, createTextVNode as u } from "vue";
const v = (n) => (O("data-v-9b85fced"), n = n(), F(), n), Y = { class: "modal-header-left" }, T = { class: "modal-header-left-title" }, j = { class: "modal-header-right" }, G = /* @__PURE__ */ v(() => /* @__PURE__ */ o("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ o("use", { "xlink:href": "#icon-zuixiaohua" })
], -1)), J = [
  G
], K = {
  key: 0,
  class: "icon",
  "aria-hidden": "true"
}, Q = /* @__PURE__ */ v(() => /* @__PURE__ */ o("use", { "xlink:href": "#icon-zuidahua" }, null, -1)), R = [
  Q
], Z = {
  key: 1,
  class: "icon",
  "aria-hidden": "true"
}, oo = /* @__PURE__ */ v(() => /* @__PURE__ */ o("use", { "xlink:href": "#icon-zuidahua1" }, null, -1)), eo = [
  oo
], to = /* @__PURE__ */ v(() => /* @__PURE__ */ o("svg", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ o("use", { "xlink:href": "#icon-guanbi" })
], -1)), lo = [
  to
], no = ["style:any"], so = {
  key: 0,
  class: "modal-footer"
}, io = /* @__PURE__ */ b({
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
  setup(n, { expose: a }) {
    const i = n, t = C(), s = y(t == null ? void 0 : t.appContext.config.globalProperties.uniqueId), d = `draggableDOM-${s.value}`, h = `draggableDOMPoint-${s.value}`, c = `resizeDOM-${s.value}`, f = y(!1);
    function S() {
      let e = document.getElementById(d);
      const l = document.getElementById(c);
      f.value ? (requestAnimationFrame(() => {
        document.body.style.overflow = "auto", l.style.width = i.width + "px", l.style.height = i.height + "px", e.style.width = "inherit", e.style.height = "inherit", e.style.transform = `translate(${document.documentElement.clientWidth / 2 - e.offsetWidth / 2}px,${document.documentElement.clientHeight / 2 - e.offsetHeight / 2}px)`;
      }), f.value = !1) : (document.body.style.overflow = "hidden", e.style.transform = "translate(0px,0px)", e.style.height = "100vh", requestAnimationFrame(() => {
        l.style.width = "100vw", l.style.resize = "none";
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
    q(() => {
      D();
    });
    function D() {
      let e = null;
      const l = document.getElementById(d);
      let r = document.getElementById(h);
      const $ = t == null ? void 0 : t.appContext.config.globalProperties.modalIndex, x = {
        x: 5 * $,
        y: 5 * $
      };
      l.style.transform = `translate(${document.documentElement.clientWidth / 2 - l.offsetWidth / 2 + x.x}px,${document.documentElement.clientHeight / 2 - l.offsetHeight / 2 + x.y}px)`, r == null || r.addEventListener("dragstart", (m) => {
        m.target.id !== h && !l || (e = m, l.style.opacity = ".7");
      }), document == null || document.addEventListener("dragover", (m) => {
        if (m.target.id !== h && !e)
          return;
        const z = window.innerHeight - e.target.offsetHeight, P = window.innerWidth - e.target.offsetWidth;
        l.style.transform = `translate(${Math.min(Math.max(0, m.clientX - e.offsetX), P)}px,${Math.min(Math.max(0, m.clientY - e.offsetY), z)}px)`, m.preventDefault();
      }), l == null || l.addEventListener("drop", () => {
        e = null, r = null, l.style.opacity = "1";
      });
    }
    return a({
      uniqueId: s
    }), (e, l) => (_(), p("div", {
      id: d,
      class: "modal-content"
    }, [
      o("div", {
        id: h,
        class: "modal-header",
        draggable: "true"
      }, [
        o("div", Y, [
          W(e.$slots, "header", {}, () => [
            o("span", T, E(n.title), 1)
          ], !0)
        ]),
        o("div", j, [
          o("div", {
            class: "modal-header-right-btn",
            onClick: l[0] || (l[0] = (r) => e.$emit("update:modalShow", !1))
          }, J),
          o("div", {
            class: "modal-header-right-btn",
            onClick: S
          }, [
            f.value ? (_(), p("svg", K, R)) : (_(), p("svg", Z, eo))
          ]),
          o("div", {
            class: "modal-header-right-btn",
            onClick: l[1] || (l[1] = (r) => g("close"))
          }, lo)
        ])
      ]),
      o("div", {
        id: c,
        class: "modal-body",
        "style:any": { width: `${n.width}px`, height: `${n.height}px`, resize: n.resize }
      }, [
        W(e.$slots, "default", {}, void 0, !0)
      ], 8, no),
      W(e.$slots, "footer", {}, () => [
        n.footerHide ? N("", !0) : (_(), p("div", so, [
          o("button", {
            class: "modal-button",
            onClick: l[2] || (l[2] = (r) => g("cancel"))
          }, "取消"),
          o("button", {
            class: "modal-button modal-button-primary",
            onClick: B
          }, "提交")
        ]))
      ], !0)
    ]));
  }
}), I = (n, a) => {
  const i = n.__vccOpts || n;
  for (const [t, s] of a)
    i[t] = s;
  return i;
}, ao = /* @__PURE__ */ I(io, [["__scopeId", "data-v-9b85fced"]]), co = { class: "modal" }, ro = /* @__PURE__ */ b({
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
  setup(n, { emit: a }) {
    const i = n, t = C();
    function s() {
      i.maskClosable && (t == null || t.appContext.config.globalProperties.unmountModal());
    }
    const d = y(!0);
    function h(c) {
      d.value = c;
    }
    return (c, f) => M((_(), p("div", co, [
      M(o("div", {
        class: "modal-mask",
        onClick: s
      }, null, 512), [
        [w, n.ModalMaskDisplay]
      ]),
      L(ao, V(c.$attrs, { "onUpdate:modalShow": h }), {
        default: A(() => [
          W(c.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 512)), [
      [w, d.value]
    ]);
  }
}), mo = /* @__PURE__ */ I(ro, [["__scopeId", "data-v-cd541b9d"]]);
function uo() {
  return Math.random().toString(36).substr(2, 9);
}
let H = y(/* @__PURE__ */ new Map());
function re(n, a) {
  return new Promise((i) => {
    const t = uo(), s = document.createElement("div");
    s.id = t, document.body.appendChild(s);
    const d = U(k(mo, a, [k(n, a)]));
    d.config.globalProperties.modalIndex = H.value.size, d.config.globalProperties.uniqueId = t, H.value.set(t, d), d.mount(s), d.config.globalProperties.unmountModal = function() {
      document.body.style.overflow = "auto", H.value.get(t).unmount(), s.remove(), H.value.delete(t);
    }, i({ uniqueId: t, element: s, app: d });
  });
}
const ho = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), _o = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), po = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), fo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), go = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Ho = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Wo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), yo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), vo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), bo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), $o = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), xo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Mo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), wo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), ko = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Co = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Eo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Io = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), So = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Bo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Do = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), zo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Po = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), qo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), No = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Oo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Fo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Lo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Vo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Ao = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Uo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Xo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Yo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), To = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), jo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Go = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Jo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Ko = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Qo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Ro = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), Zo = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), oe = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), ee = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), te = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), le = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), ne = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), se = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), de = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), ie = /* @__PURE__ */ o("h1", null, "i am HelloWorld component", -1), ae = /* @__PURE__ */ b({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(n) {
    return (a, i) => (_(), p(X, null, [
      o("h1", null, E(a.msg), 1),
      ho,
      _o,
      po,
      fo,
      go,
      Ho,
      u(),
      Wo,
      yo,
      vo,
      bo,
      $o,
      xo,
      u(),
      Mo,
      wo,
      ko,
      Co,
      Eo,
      Io,
      u(),
      So,
      Bo,
      Do,
      zo,
      Po,
      qo,
      u(),
      No,
      Oo,
      Fo,
      Lo,
      Vo,
      Ao,
      u(),
      Uo,
      Xo,
      Yo,
      To,
      jo,
      Go,
      u(),
      Jo,
      Ko,
      Qo,
      Ro,
      Zo,
      oe,
      u(),
      ee,
      te,
      le,
      ne,
      se,
      de,
      ie
    ], 64));
  }
}), me = {
  // install(App:any) {
  //     component?.forEach((item:any) => {
  //         App.component(item.name, item);
  //     });
  // },
  install(n) {
    n.component("HelloWorld", ae);
  }
};
export {
  me as default,
  re as openModal
};
