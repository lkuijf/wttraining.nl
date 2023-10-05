var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_swiper_bundle_min_004 = __commonJS({
  "assets/swiper-bundle.min-f73df683.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
    }(globalThis, function() {
      function e(e2) {
        return null !== e2 && "object" == typeof e2 && "constructor" in e2 && e2.constructor === Object;
      }
      function t(s2, a2) {
        void 0 === s2 && (s2 = {}), void 0 === a2 && (a2 = {}), Object.keys(a2).forEach((i2) => {
          void 0 === s2[i2] ? s2[i2] = a2[i2] : e(a2[i2]) && e(s2[i2]) && Object.keys(a2[i2]).length > 0 && t(s2[i2], a2[i2]);
        });
      }
      const s = { body: {}, addEventListener() {
      }, removeEventListener() {
      }, activeElement: { blur() {
      }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {
      } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {
      }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
      function a() {
        const e2 = "undefined" != typeof document ? document : {};
        return t(e2, s), e2;
      }
      const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
      }, pushState() {
      }, go() {
      }, back() {
      } }, CustomEvent: function() {
        return this;
      }, addEventListener() {
      }, removeEventListener() {
      }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {
      }, Date() {
      }, screen: {}, setTimeout() {
      }, clearTimeout() {
      }, matchMedia: () => ({}), requestAnimationFrame: (e2) => "undefined" == typeof setTimeout ? (e2(), null) : setTimeout(e2, 0), cancelAnimationFrame(e2) {
        "undefined" != typeof setTimeout && clearTimeout(e2);
      } };
      function r() {
        const e2 = "undefined" != typeof window ? window : {};
        return t(e2, i), e2;
      }
      function n(e2, t2) {
        return void 0 === t2 && (t2 = 0), setTimeout(e2, t2);
      }
      function l() {
        return Date.now();
      }
      function o(e2, t2) {
        void 0 === t2 && (t2 = "x");
        const s2 = r();
        let a2, i2, n2;
        const l2 = function(e3) {
          const t3 = r();
          let s3;
          return t3.getComputedStyle && (s3 = t3.getComputedStyle(e3, null)), !s3 && e3.currentStyle && (s3 = e3.currentStyle), s3 || (s3 = e3.style), s3;
        }(e2);
        return s2.WebKitCSSMatrix ? (i2 = l2.transform || l2.webkitTransform, i2.split(",").length > 6 && (i2 = i2.split(", ").map((e3) => e3.replace(",", ".")).join(", ")), n2 = new s2.WebKitCSSMatrix("none" === i2 ? "" : i2)) : (n2 = l2.MozTransform || l2.OTransform || l2.MsTransform || l2.msTransform || l2.transform || l2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a2 = n2.toString().split(",")), "x" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m41 : 16 === a2.length ? parseFloat(a2[12]) : parseFloat(a2[4])), "y" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m42 : 16 === a2.length ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
      }
      function d(e2) {
        return "object" == typeof e2 && null !== e2 && e2.constructor && "Object" === Object.prototype.toString.call(e2).slice(8, -1);
      }
      function c(e2) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e2 instanceof HTMLElement : e2 && (1 === e2.nodeType || 11 === e2.nodeType);
      }
      function p() {
        const e2 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t2 = ["__proto__", "constructor", "prototype"];
        for (let s2 = 1; s2 < arguments.length; s2 += 1) {
          const a2 = s2 < 0 || arguments.length <= s2 ? void 0 : arguments[s2];
          if (null != a2 && !c(a2)) {
            const s3 = Object.keys(Object(a2)).filter((e3) => t2.indexOf(e3) < 0);
            for (let t3 = 0, i2 = s3.length; t3 < i2; t3 += 1) {
              const i3 = s3[t3], r2 = Object.getOwnPropertyDescriptor(a2, i3);
              void 0 !== r2 && r2.enumerable && (d(e2[i3]) && d(a2[i3]) ? a2[i3].__swiper__ ? e2[i3] = a2[i3] : p(e2[i3], a2[i3]) : !d(e2[i3]) && d(a2[i3]) ? (e2[i3] = {}, a2[i3].__swiper__ ? e2[i3] = a2[i3] : p(e2[i3], a2[i3])) : e2[i3] = a2[i3]);
            }
          }
        }
        return e2;
      }
      function u(e2, t2, s2) {
        e2.style.setProperty(t2, s2);
      }
      function m(e2) {
        let { swiper: t2, targetPosition: s2, side: a2 } = e2;
        const i2 = r(), n2 = -t2.translate;
        let l2, o2 = null;
        const d2 = t2.params.speed;
        t2.wrapperEl.style.scrollSnapType = "none", i2.cancelAnimationFrame(t2.cssModeFrameID);
        const c2 = s2 > n2 ? "next" : "prev", p2 = (e3, t3) => "next" === c2 && e3 >= t3 || "prev" === c2 && e3 <= t3, u2 = () => {
          l2 = (/* @__PURE__ */ new Date()).getTime(), null === o2 && (o2 = l2);
          const e3 = Math.max(Math.min((l2 - o2) / d2, 1), 0), r2 = 0.5 - Math.cos(e3 * Math.PI) / 2;
          let c3 = n2 + r2 * (s2 - n2);
          if (p2(c3, s2) && (c3 = s2), t2.wrapperEl.scrollTo({ [a2]: c3 }), p2(c3, s2))
            return t2.wrapperEl.style.overflow = "hidden", t2.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
              t2.wrapperEl.style.overflow = "", t2.wrapperEl.scrollTo({ [a2]: c3 });
            }), void i2.cancelAnimationFrame(t2.cssModeFrameID);
          t2.cssModeFrameID = i2.requestAnimationFrame(u2);
        };
        u2();
      }
      function h(e2) {
        return e2.querySelector(".swiper-slide-transform") || e2.shadowEl && e2.shadowEl.querySelector(".swiper-slide-transform") || e2;
      }
      function f(e2, t2) {
        return void 0 === t2 && (t2 = ""), [...e2.children].filter((e3) => e3.matches(t2));
      }
      function g(e2, t2) {
        void 0 === t2 && (t2 = []);
        const s2 = document.createElement(e2);
        return s2.classList.add(...Array.isArray(t2) ? t2 : [t2]), s2;
      }
      function v(e2) {
        const t2 = r(), s2 = a(), i2 = e2.getBoundingClientRect(), n2 = s2.body, l2 = e2.clientTop || n2.clientTop || 0, o2 = e2.clientLeft || n2.clientLeft || 0, d2 = e2 === t2 ? t2.scrollY : e2.scrollTop, c2 = e2 === t2 ? t2.scrollX : e2.scrollLeft;
        return { top: i2.top + d2 - l2, left: i2.left + c2 - o2 };
      }
      function w(e2, t2) {
        return r().getComputedStyle(e2, null).getPropertyValue(t2);
      }
      function b(e2) {
        let t2, s2 = e2;
        if (s2) {
          for (t2 = 0; null !== (s2 = s2.previousSibling); )
            1 === s2.nodeType && (t2 += 1);
          return t2;
        }
      }
      function y(e2, t2) {
        const s2 = [];
        let a2 = e2.parentElement;
        for (; a2; )
          t2 ? a2.matches(t2) && s2.push(a2) : s2.push(a2), a2 = a2.parentElement;
        return s2;
      }
      function E(e2, t2) {
        t2 && e2.addEventListener("transitionend", function s2(a2) {
          a2.target === e2 && (t2.call(e2, a2), e2.removeEventListener("transitionend", s2));
        });
      }
      function x(e2, t2, s2) {
        const a2 = r();
        return s2 ? e2["width" === t2 ? "offsetWidth" : "offsetHeight"] + parseFloat(a2.getComputedStyle(e2, null).getPropertyValue("width" === t2 ? "margin-right" : "margin-top")) + parseFloat(a2.getComputedStyle(e2, null).getPropertyValue("width" === t2 ? "margin-left" : "margin-bottom")) : e2.offsetWidth;
      }
      let S, T, M;
      function C() {
        return S || (S = function() {
          const e2 = r(), t2 = a();
          return { smoothScroll: t2.documentElement && "scrollBehavior" in t2.documentElement.style, touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t2 instanceof e2.DocumentTouch) };
        }()), S;
      }
      function P(e2) {
        return void 0 === e2 && (e2 = {}), T || (T = function(e3) {
          let { userAgent: t2 } = void 0 === e3 ? {} : e3;
          const s2 = C(), a2 = r(), i2 = a2.navigator.platform, n2 = t2 || a2.navigator.userAgent, l2 = { ios: false, android: false }, o2 = a2.screen.width, d2 = a2.screen.height, c2 = n2.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p2 = n2.match(/(iPad).*OS\s([\d_]+)/);
          const u2 = n2.match(/(iPod)(.*OS\s([\d_]+))?/), m2 = !p2 && n2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h2 = "Win32" === i2;
          let f2 = "MacIntel" === i2;
          return !p2 && f2 && s2.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o2}x${d2}`) >= 0 && (p2 = n2.match(/(Version)\/([\d.]+)/), p2 || (p2 = [0, 1, "13_0_0"]), f2 = false), c2 && !h2 && (l2.os = "android", l2.android = true), (p2 || m2 || u2) && (l2.os = "ios", l2.ios = true), l2;
        }(e2)), T;
      }
      function L() {
        return M || (M = function() {
          const e2 = r();
          let t2 = false;
          function s2() {
            const t3 = e2.navigator.userAgent.toLowerCase();
            return t3.indexOf("safari") >= 0 && t3.indexOf("chrome") < 0 && t3.indexOf("android") < 0;
          }
          if (s2()) {
            const s3 = String(e2.navigator.userAgent);
            if (s3.includes("Version/")) {
              const [e3, a2] = s3.split("Version/")[1].split(" ")[0].split(".").map((e4) => Number(e4));
              t2 = e3 < 16 || 16 === e3 && a2 < 2;
            }
          }
          return { isSafari: t2 || s2(), needPerspectiveFix: t2, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e2.navigator.userAgent) };
        }()), M;
      }
      var A = { on(e2, t2, s2) {
        const a2 = this;
        if (!a2.eventsListeners || a2.destroyed)
          return a2;
        if ("function" != typeof t2)
          return a2;
        const i2 = s2 ? "unshift" : "push";
        return e2.split(" ").forEach((e3) => {
          a2.eventsListeners[e3] || (a2.eventsListeners[e3] = []), a2.eventsListeners[e3][i2](t2);
        }), a2;
      }, once(e2, t2, s2) {
        const a2 = this;
        if (!a2.eventsListeners || a2.destroyed)
          return a2;
        if ("function" != typeof t2)
          return a2;
        function i2() {
          a2.off(e2, i2), i2.__emitterProxy && delete i2.__emitterProxy;
          for (var s3 = arguments.length, r2 = new Array(s3), n2 = 0; n2 < s3; n2++)
            r2[n2] = arguments[n2];
          t2.apply(a2, r2);
        }
        return i2.__emitterProxy = t2, a2.on(e2, i2, s2);
      }, onAny(e2, t2) {
        const s2 = this;
        if (!s2.eventsListeners || s2.destroyed)
          return s2;
        if ("function" != typeof e2)
          return s2;
        const a2 = t2 ? "unshift" : "push";
        return s2.eventsAnyListeners.indexOf(e2) < 0 && s2.eventsAnyListeners[a2](e2), s2;
      }, offAny(e2) {
        const t2 = this;
        if (!t2.eventsListeners || t2.destroyed)
          return t2;
        if (!t2.eventsAnyListeners)
          return t2;
        const s2 = t2.eventsAnyListeners.indexOf(e2);
        return s2 >= 0 && t2.eventsAnyListeners.splice(s2, 1), t2;
      }, off(e2, t2) {
        const s2 = this;
        return !s2.eventsListeners || s2.destroyed ? s2 : s2.eventsListeners ? (e2.split(" ").forEach((e3) => {
          void 0 === t2 ? s2.eventsListeners[e3] = [] : s2.eventsListeners[e3] && s2.eventsListeners[e3].forEach((a2, i2) => {
            (a2 === t2 || a2.__emitterProxy && a2.__emitterProxy === t2) && s2.eventsListeners[e3].splice(i2, 1);
          });
        }), s2) : s2;
      }, emit() {
        const e2 = this;
        if (!e2.eventsListeners || e2.destroyed)
          return e2;
        if (!e2.eventsListeners)
          return e2;
        let t2, s2, a2;
        for (var i2 = arguments.length, r2 = new Array(i2), n2 = 0; n2 < i2; n2++)
          r2[n2] = arguments[n2];
        "string" == typeof r2[0] || Array.isArray(r2[0]) ? (t2 = r2[0], s2 = r2.slice(1, r2.length), a2 = e2) : (t2 = r2[0].events, s2 = r2[0].data, a2 = r2[0].context || e2), s2.unshift(a2);
        return (Array.isArray(t2) ? t2 : t2.split(" ")).forEach((t3) => {
          e2.eventsAnyListeners && e2.eventsAnyListeners.length && e2.eventsAnyListeners.forEach((e3) => {
            e3.apply(a2, [t3, ...s2]);
          }), e2.eventsListeners && e2.eventsListeners[t3] && e2.eventsListeners[t3].forEach((e3) => {
            e3.apply(a2, s2);
          });
        }), e2;
      } };
      var z = { updateSize: function() {
        const e2 = this;
        let t2, s2;
        const a2 = e2.el;
        t2 = void 0 !== e2.params.width && null !== e2.params.width ? e2.params.width : a2.clientWidth, s2 = void 0 !== e2.params.height && null !== e2.params.height ? e2.params.height : a2.clientHeight, 0 === t2 && e2.isHorizontal() || 0 === s2 && e2.isVertical() || (t2 = t2 - parseInt(w(a2, "padding-left") || 0, 10) - parseInt(w(a2, "padding-right") || 0, 10), s2 = s2 - parseInt(w(a2, "padding-top") || 0, 10) - parseInt(w(a2, "padding-bottom") || 0, 10), Number.isNaN(t2) && (t2 = 0), Number.isNaN(s2) && (s2 = 0), Object.assign(e2, { width: t2, height: s2, size: e2.isHorizontal() ? t2 : s2 }));
      }, updateSlides: function() {
        const e2 = this;
        function t2(t3) {
          return e2.isHorizontal() ? t3 : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t3];
        }
        function s2(e3, s3) {
          return parseFloat(e3.getPropertyValue(t2(s3)) || 0);
        }
        const a2 = e2.params, { wrapperEl: i2, slidesEl: r2, size: n2, rtlTranslate: l2, wrongRTL: o2 } = e2, d2 = e2.virtual && a2.virtual.enabled, c2 = d2 ? e2.virtual.slides.length : e2.slides.length, p2 = f(r2, `.${e2.params.slideClass}, swiper-slide`), m2 = d2 ? e2.virtual.slides.length : p2.length;
        let h2 = [];
        const g2 = [], v2 = [];
        let b2 = a2.slidesOffsetBefore;
        "function" == typeof b2 && (b2 = a2.slidesOffsetBefore.call(e2));
        let y2 = a2.slidesOffsetAfter;
        "function" == typeof y2 && (y2 = a2.slidesOffsetAfter.call(e2));
        const E2 = e2.snapGrid.length, S2 = e2.slidesGrid.length;
        let T2 = a2.spaceBetween, M2 = -b2, C2 = 0, P2 = 0;
        if (void 0 === n2)
          return;
        "string" == typeof T2 && T2.indexOf("%") >= 0 && (T2 = parseFloat(T2.replace("%", "")) / 100 * n2), e2.virtualSize = -T2, p2.forEach((e3) => {
          l2 ? e3.style.marginLeft = "" : e3.style.marginRight = "", e3.style.marginBottom = "", e3.style.marginTop = "";
        }), a2.centeredSlides && a2.cssMode && (u(i2, "--swiper-centered-offset-before", ""), u(i2, "--swiper-centered-offset-after", ""));
        const L2 = a2.grid && a2.grid.rows > 1 && e2.grid;
        let A2;
        L2 && e2.grid.initSlides(m2);
        const z2 = "auto" === a2.slidesPerView && a2.breakpoints && Object.keys(a2.breakpoints).filter((e3) => void 0 !== a2.breakpoints[e3].slidesPerView).length > 0;
        for (let i3 = 0; i3 < m2; i3 += 1) {
          let r3;
          if (A2 = 0, p2[i3] && (r3 = p2[i3]), L2 && e2.grid.updateSlide(i3, r3, m2, t2), !p2[i3] || "none" !== w(r3, "display")) {
            if ("auto" === a2.slidesPerView) {
              z2 && (p2[i3].style[t2("width")] = "");
              const n3 = getComputedStyle(r3), l3 = r3.style.transform, o3 = r3.style.webkitTransform;
              if (l3 && (r3.style.transform = "none"), o3 && (r3.style.webkitTransform = "none"), a2.roundLengths)
                A2 = e2.isHorizontal() ? x(r3, "width", true) : x(r3, "height", true);
              else {
                const e3 = s2(n3, "width"), t3 = s2(n3, "padding-left"), a3 = s2(n3, "padding-right"), i4 = s2(n3, "margin-left"), l4 = s2(n3, "margin-right"), o4 = n3.getPropertyValue("box-sizing");
                if (o4 && "border-box" === o4)
                  A2 = e3 + i4 + l4;
                else {
                  const { clientWidth: s3, offsetWidth: n4 } = r3;
                  A2 = e3 + t3 + a3 + i4 + l4 + (n4 - s3);
                }
              }
              l3 && (r3.style.transform = l3), o3 && (r3.style.webkitTransform = o3), a2.roundLengths && (A2 = Math.floor(A2));
            } else
              A2 = (n2 - (a2.slidesPerView - 1) * T2) / a2.slidesPerView, a2.roundLengths && (A2 = Math.floor(A2)), p2[i3] && (p2[i3].style[t2("width")] = `${A2}px`);
            p2[i3] && (p2[i3].swiperSlideSize = A2), v2.push(A2), a2.centeredSlides ? (M2 = M2 + A2 / 2 + C2 / 2 + T2, 0 === C2 && 0 !== i3 && (M2 = M2 - n2 / 2 - T2), 0 === i3 && (M2 = M2 - n2 / 2 - T2), Math.abs(M2) < 1e-3 && (M2 = 0), a2.roundLengths && (M2 = Math.floor(M2)), P2 % a2.slidesPerGroup == 0 && h2.push(M2), g2.push(M2)) : (a2.roundLengths && (M2 = Math.floor(M2)), (P2 - Math.min(e2.params.slidesPerGroupSkip, P2)) % e2.params.slidesPerGroup == 0 && h2.push(M2), g2.push(M2), M2 = M2 + A2 + T2), e2.virtualSize += A2 + T2, C2 = A2, P2 += 1;
          }
        }
        if (e2.virtualSize = Math.max(e2.virtualSize, n2) + y2, l2 && o2 && ("slide" === a2.effect || "coverflow" === a2.effect) && (i2.style.width = `${e2.virtualSize + a2.spaceBetween}px`), a2.setWrapperSize && (i2.style[t2("width")] = `${e2.virtualSize + a2.spaceBetween}px`), L2 && e2.grid.updateWrapperSize(A2, h2, t2), !a2.centeredSlides) {
          const t3 = [];
          for (let s3 = 0; s3 < h2.length; s3 += 1) {
            let i3 = h2[s3];
            a2.roundLengths && (i3 = Math.floor(i3)), h2[s3] <= e2.virtualSize - n2 && t3.push(i3);
          }
          h2 = t3, Math.floor(e2.virtualSize - n2) - Math.floor(h2[h2.length - 1]) > 1 && h2.push(e2.virtualSize - n2);
        }
        if (d2 && a2.loop) {
          const t3 = v2[0] + T2;
          if (a2.slidesPerGroup > 1) {
            const s3 = Math.ceil((e2.virtual.slidesBefore + e2.virtual.slidesAfter) / a2.slidesPerGroup), i3 = t3 * a2.slidesPerGroup;
            for (let e3 = 0; e3 < s3; e3 += 1)
              h2.push(h2[h2.length - 1] + i3);
          }
          for (let s3 = 0; s3 < e2.virtual.slidesBefore + e2.virtual.slidesAfter; s3 += 1)
            1 === a2.slidesPerGroup && h2.push(h2[h2.length - 1] + t3), g2.push(g2[g2.length - 1] + t3), e2.virtualSize += t3;
        }
        if (0 === h2.length && (h2 = [0]), 0 !== a2.spaceBetween) {
          const s3 = e2.isHorizontal() && l2 ? "marginLeft" : t2("marginRight");
          p2.filter((e3, t3) => !(a2.cssMode && !a2.loop) || t3 !== p2.length - 1).forEach((e3) => {
            e3.style[s3] = `${T2}px`;
          });
        }
        if (a2.centeredSlides && a2.centeredSlidesBounds) {
          let e3 = 0;
          v2.forEach((t4) => {
            e3 += t4 + (a2.spaceBetween ? a2.spaceBetween : 0);
          }), e3 -= a2.spaceBetween;
          const t3 = e3 - n2;
          h2 = h2.map((e4) => e4 < 0 ? -b2 : e4 > t3 ? t3 + y2 : e4);
        }
        if (a2.centerInsufficientSlides) {
          let e3 = 0;
          if (v2.forEach((t3) => {
            e3 += t3 + (a2.spaceBetween ? a2.spaceBetween : 0);
          }), e3 -= a2.spaceBetween, e3 < n2) {
            const t3 = (n2 - e3) / 2;
            h2.forEach((e4, s3) => {
              h2[s3] = e4 - t3;
            }), g2.forEach((e4, s3) => {
              g2[s3] = e4 + t3;
            });
          }
        }
        if (Object.assign(e2, { slides: p2, snapGrid: h2, slidesGrid: g2, slidesSizesGrid: v2 }), a2.centeredSlides && a2.cssMode && !a2.centeredSlidesBounds) {
          u(i2, "--swiper-centered-offset-before", -h2[0] + "px"), u(i2, "--swiper-centered-offset-after", e2.size / 2 - v2[v2.length - 1] / 2 + "px");
          const t3 = -e2.snapGrid[0], s3 = -e2.slidesGrid[0];
          e2.snapGrid = e2.snapGrid.map((e3) => e3 + t3), e2.slidesGrid = e2.slidesGrid.map((e3) => e3 + s3);
        }
        if (m2 !== c2 && e2.emit("slidesLengthChange"), h2.length !== E2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), g2.length !== S2 && e2.emit("slidesGridLengthChange"), a2.watchSlidesProgress && e2.updateSlidesOffset(), !(d2 || a2.cssMode || "slide" !== a2.effect && "fade" !== a2.effect)) {
          const t3 = `${a2.containerModifierClass}backface-hidden`, s3 = e2.el.classList.contains(t3);
          m2 <= a2.maxBackfaceHiddenSlides ? s3 || e2.el.classList.add(t3) : s3 && e2.el.classList.remove(t3);
        }
      }, updateAutoHeight: function(e2) {
        const t2 = this, s2 = [], a2 = t2.virtual && t2.params.virtual.enabled;
        let i2, r2 = 0;
        "number" == typeof e2 ? t2.setTransition(e2) : true === e2 && t2.setTransition(t2.params.speed);
        const n2 = (e3) => a2 ? t2.slides.filter((t3) => parseInt(t3.getAttribute("data-swiper-slide-index"), 10) === e3)[0] : t2.slides[e3];
        if ("auto" !== t2.params.slidesPerView && t2.params.slidesPerView > 1)
          if (t2.params.centeredSlides)
            (t2.visibleSlides || []).forEach((e3) => {
              s2.push(e3);
            });
          else
            for (i2 = 0; i2 < Math.ceil(t2.params.slidesPerView); i2 += 1) {
              const e3 = t2.activeIndex + i2;
              if (e3 > t2.slides.length && !a2)
                break;
              s2.push(n2(e3));
            }
        else
          s2.push(n2(t2.activeIndex));
        for (i2 = 0; i2 < s2.length; i2 += 1)
          if (void 0 !== s2[i2]) {
            const e3 = s2[i2].offsetHeight;
            r2 = e3 > r2 ? e3 : r2;
          }
        (r2 || 0 === r2) && (t2.wrapperEl.style.height = `${r2}px`);
      }, updateSlidesOffset: function() {
        const e2 = this, t2 = e2.slides, s2 = e2.isElement ? e2.isHorizontal() ? e2.wrapperEl.offsetLeft : e2.wrapperEl.offsetTop : 0;
        for (let a2 = 0; a2 < t2.length; a2 += 1)
          t2[a2].swiperSlideOffset = (e2.isHorizontal() ? t2[a2].offsetLeft : t2[a2].offsetTop) - s2;
      }, updateSlidesProgress: function(e2) {
        void 0 === e2 && (e2 = this && this.translate || 0);
        const t2 = this, s2 = t2.params, { slides: a2, rtlTranslate: i2, snapGrid: r2 } = t2;
        if (0 === a2.length)
          return;
        void 0 === a2[0].swiperSlideOffset && t2.updateSlidesOffset();
        let n2 = -e2;
        i2 && (n2 = e2), a2.forEach((e3) => {
          e3.classList.remove(s2.slideVisibleClass);
        }), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
        for (let e3 = 0; e3 < a2.length; e3 += 1) {
          const l2 = a2[e3];
          let o2 = l2.swiperSlideOffset;
          s2.cssMode && s2.centeredSlides && (o2 -= a2[0].swiperSlideOffset);
          const d2 = (n2 + (s2.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s2.spaceBetween), c2 = (n2 - r2[0] + (s2.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s2.spaceBetween), p2 = -(n2 - o2), u2 = p2 + t2.slidesSizesGrid[e3];
          (p2 >= 0 && p2 < t2.size - 1 || u2 > 1 && u2 <= t2.size || p2 <= 0 && u2 >= t2.size) && (t2.visibleSlides.push(l2), t2.visibleSlidesIndexes.push(e3), a2[e3].classList.add(s2.slideVisibleClass)), l2.progress = i2 ? -d2 : d2, l2.originalProgress = i2 ? -c2 : c2;
        }
      }, updateProgress: function(e2) {
        const t2 = this;
        if (void 0 === e2) {
          const s3 = t2.rtlTranslate ? -1 : 1;
          e2 = t2 && t2.translate && t2.translate * s3 || 0;
        }
        const s2 = t2.params, a2 = t2.maxTranslate() - t2.minTranslate();
        let { progress: i2, isBeginning: r2, isEnd: n2, progressLoop: l2 } = t2;
        const o2 = r2, d2 = n2;
        if (0 === a2)
          i2 = 0, r2 = true, n2 = true;
        else {
          i2 = (e2 - t2.minTranslate()) / a2;
          const s3 = Math.abs(e2 - t2.minTranslate()) < 1, l3 = Math.abs(e2 - t2.maxTranslate()) < 1;
          r2 = s3 || i2 <= 0, n2 = l3 || i2 >= 1, s3 && (i2 = 0), l3 && (i2 = 1);
        }
        if (s2.loop) {
          const s3 = b(t2.slides.filter((e3) => "0" === e3.getAttribute("data-swiper-slide-index"))[0]), a3 = b(t2.slides.filter((e3) => 1 * e3.getAttribute("data-swiper-slide-index") == t2.slides.length - 1)[0]), i3 = t2.slidesGrid[s3], r3 = t2.slidesGrid[a3], n3 = t2.slidesGrid[t2.slidesGrid.length - 1], o3 = Math.abs(e2);
          l2 = o3 >= i3 ? (o3 - i3) / n3 : (o3 + n3 - r3) / n3, l2 > 1 && (l2 -= 1);
        }
        Object.assign(t2, { progress: i2, progressLoop: l2, isBeginning: r2, isEnd: n2 }), (s2.watchSlidesProgress || s2.centeredSlides && s2.autoHeight) && t2.updateSlidesProgress(e2), r2 && !o2 && t2.emit("reachBeginning toEdge"), n2 && !d2 && t2.emit("reachEnd toEdge"), (o2 && !r2 || d2 && !n2) && t2.emit("fromEdge"), t2.emit("progress", i2);
      }, updateSlidesClasses: function() {
        const e2 = this, { slides: t2, params: s2, slidesEl: a2, activeIndex: i2 } = e2, r2 = e2.virtual && s2.virtual.enabled, n2 = (e3) => f(a2, `.${s2.slideClass}${e3}, swiper-slide${e3}`)[0];
        let l2;
        if (t2.forEach((e3) => {
          e3.classList.remove(s2.slideActiveClass, s2.slideNextClass, s2.slidePrevClass);
        }), r2)
          if (s2.loop) {
            let t3 = i2 - e2.virtual.slidesBefore;
            t3 < 0 && (t3 = e2.virtual.slides.length + t3), t3 >= e2.virtual.slides.length && (t3 -= e2.virtual.slides.length), l2 = n2(`[data-swiper-slide-index="${t3}"]`);
          } else
            l2 = n2(`[data-swiper-slide-index="${i2}"]`);
        else
          l2 = t2[i2];
        if (l2) {
          l2.classList.add(s2.slideActiveClass);
          let e3 = function(e4, t3) {
            const s3 = [];
            for (; e4.nextElementSibling; ) {
              const a4 = e4.nextElementSibling;
              t3 ? a4.matches(t3) && s3.push(a4) : s3.push(a4), e4 = a4;
            }
            return s3;
          }(l2, `.${s2.slideClass}, swiper-slide`)[0];
          s2.loop && !e3 && (e3 = t2[0]), e3 && e3.classList.add(s2.slideNextClass);
          let a3 = function(e4, t3) {
            const s3 = [];
            for (; e4.previousElementSibling; ) {
              const a4 = e4.previousElementSibling;
              t3 ? a4.matches(t3) && s3.push(a4) : s3.push(a4), e4 = a4;
            }
            return s3;
          }(l2, `.${s2.slideClass}, swiper-slide`)[0];
          s2.loop && 0 === !a3 && (a3 = t2[t2.length - 1]), a3 && a3.classList.add(s2.slidePrevClass);
        }
        e2.emitSlidesClasses();
      }, updateActiveIndex: function(e2) {
        const t2 = this, s2 = t2.rtlTranslate ? t2.translate : -t2.translate, { snapGrid: a2, params: i2, activeIndex: r2, realIndex: n2, snapIndex: l2 } = t2;
        let o2, d2 = e2;
        const c2 = (e3) => {
          let s3 = e3 - t2.virtual.slidesBefore;
          return s3 < 0 && (s3 = t2.virtual.slides.length + s3), s3 >= t2.virtual.slides.length && (s3 -= t2.virtual.slides.length), s3;
        };
        if (void 0 === d2 && (d2 = function(e3) {
          const { slidesGrid: t3, params: s3 } = e3, a3 = e3.rtlTranslate ? e3.translate : -e3.translate;
          let i3;
          for (let e4 = 0; e4 < t3.length; e4 += 1)
            void 0 !== t3[e4 + 1] ? a3 >= t3[e4] && a3 < t3[e4 + 1] - (t3[e4 + 1] - t3[e4]) / 2 ? i3 = e4 : a3 >= t3[e4] && a3 < t3[e4 + 1] && (i3 = e4 + 1) : a3 >= t3[e4] && (i3 = e4);
          return s3.normalizeSlideIndex && (i3 < 0 || void 0 === i3) && (i3 = 0), i3;
        }(t2)), a2.indexOf(s2) >= 0)
          o2 = a2.indexOf(s2);
        else {
          const e3 = Math.min(i2.slidesPerGroupSkip, d2);
          o2 = e3 + Math.floor((d2 - e3) / i2.slidesPerGroup);
        }
        if (o2 >= a2.length && (o2 = a2.length - 1), d2 === r2)
          return o2 !== l2 && (t2.snapIndex = o2, t2.emit("snapIndexChange")), void (t2.params.loop && t2.virtual && t2.params.virtual.enabled && (t2.realIndex = c2(d2)));
        let p2;
        p2 = t2.virtual && i2.virtual.enabled && i2.loop ? c2(d2) : t2.slides[d2] ? parseInt(t2.slides[d2].getAttribute("data-swiper-slide-index") || d2, 10) : d2, Object.assign(t2, { snapIndex: o2, realIndex: p2, previousIndex: r2, activeIndex: d2 }), t2.emit("activeIndexChange"), t2.emit("snapIndexChange"), n2 !== p2 && t2.emit("realIndexChange"), (t2.initialized || t2.params.runCallbacksOnInit) && t2.emit("slideChange");
      }, updateClickedSlide: function(e2) {
        const t2 = this, s2 = t2.params, a2 = e2.closest(`.${s2.slideClass}, swiper-slide`);
        let i2, r2 = false;
        if (a2) {
          for (let e3 = 0; e3 < t2.slides.length; e3 += 1)
            if (t2.slides[e3] === a2) {
              r2 = true, i2 = e3;
              break;
            }
        }
        if (!a2 || !r2)
          return t2.clickedSlide = void 0, void (t2.clickedIndex = void 0);
        t2.clickedSlide = a2, t2.virtual && t2.params.virtual.enabled ? t2.clickedIndex = parseInt(a2.getAttribute("data-swiper-slide-index"), 10) : t2.clickedIndex = i2, s2.slideToClickedSlide && void 0 !== t2.clickedIndex && t2.clickedIndex !== t2.activeIndex && t2.slideToClickedSlide();
      } };
      var k = { getTranslate: function(e2) {
        void 0 === e2 && (e2 = this.isHorizontal() ? "x" : "y");
        const { params: t2, rtlTranslate: s2, translate: a2, wrapperEl: i2 } = this;
        if (t2.virtualTranslate)
          return s2 ? -a2 : a2;
        if (t2.cssMode)
          return a2;
        let r2 = o(i2, e2);
        return s2 && (r2 = -r2), r2 || 0;
      }, setTranslate: function(e2, t2) {
        const s2 = this, { rtlTranslate: a2, params: i2, wrapperEl: r2, progress: n2 } = s2;
        let l2, o2 = 0, d2 = 0;
        s2.isHorizontal() ? o2 = a2 ? -e2 : e2 : d2 = e2, i2.roundLengths && (o2 = Math.floor(o2), d2 = Math.floor(d2)), i2.cssMode ? r2[s2.isHorizontal() ? "scrollLeft" : "scrollTop"] = s2.isHorizontal() ? -o2 : -d2 : i2.virtualTranslate || (r2.style.transform = `translate3d(${o2}px, ${d2}px, 0px)`), s2.previousTranslate = s2.translate, s2.translate = s2.isHorizontal() ? o2 : d2;
        const c2 = s2.maxTranslate() - s2.minTranslate();
        l2 = 0 === c2 ? 0 : (e2 - s2.minTranslate()) / c2, l2 !== n2 && s2.updateProgress(e2), s2.emit("setTranslate", s2.translate, t2);
      }, minTranslate: function() {
        return -this.snapGrid[0];
      }, maxTranslate: function() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }, translateTo: function(e2, t2, s2, a2, i2) {
        void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), void 0 === a2 && (a2 = true);
        const r2 = this, { params: n2, wrapperEl: l2 } = r2;
        if (r2.animating && n2.preventInteractionOnTransition)
          return false;
        const o2 = r2.minTranslate(), d2 = r2.maxTranslate();
        let c2;
        if (c2 = a2 && e2 > o2 ? o2 : a2 && e2 < d2 ? d2 : e2, r2.updateProgress(c2), n2.cssMode) {
          const e3 = r2.isHorizontal();
          if (0 === t2)
            l2[e3 ? "scrollLeft" : "scrollTop"] = -c2;
          else {
            if (!r2.support.smoothScroll)
              return m({ swiper: r2, targetPosition: -c2, side: e3 ? "left" : "top" }), true;
            l2.scrollTo({ [e3 ? "left" : "top"]: -c2, behavior: "smooth" });
          }
          return true;
        }
        return 0 === t2 ? (r2.setTransition(0), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionEnd"))) : (r2.setTransition(t2), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionStart")), r2.animating || (r2.animating = true, r2.onTranslateToWrapperTransitionEnd || (r2.onTranslateToWrapperTransitionEnd = function(e3) {
          r2 && !r2.destroyed && e3.target === this && (r2.wrapperEl.removeEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.onTranslateToWrapperTransitionEnd = null, delete r2.onTranslateToWrapperTransitionEnd, s2 && r2.emit("transitionEnd"));
        }), r2.wrapperEl.addEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd))), true;
      } };
      function $(e2) {
        let { swiper: t2, runCallbacks: s2, direction: a2, step: i2 } = e2;
        const { activeIndex: r2, previousIndex: n2 } = t2;
        let l2 = a2;
        if (l2 || (l2 = r2 > n2 ? "next" : r2 < n2 ? "prev" : "reset"), t2.emit(`transition${i2}`), s2 && r2 !== n2) {
          if ("reset" === l2)
            return void t2.emit(`slideResetTransition${i2}`);
          t2.emit(`slideChangeTransition${i2}`), "next" === l2 ? t2.emit(`slideNextTransition${i2}`) : t2.emit(`slidePrevTransition${i2}`);
        }
      }
      var I = { slideTo: function(e2, t2, s2, a2, i2) {
        void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), "string" == typeof e2 && (e2 = parseInt(e2, 10));
        const r2 = this;
        let n2 = e2;
        n2 < 0 && (n2 = 0);
        const { params: l2, snapGrid: o2, slidesGrid: d2, previousIndex: c2, activeIndex: p2, rtlTranslate: u2, wrapperEl: h2, enabled: f2 } = r2;
        if (r2.animating && l2.preventInteractionOnTransition || !f2 && !a2 && !i2)
          return false;
        const g2 = Math.min(r2.params.slidesPerGroupSkip, n2);
        let v2 = g2 + Math.floor((n2 - g2) / r2.params.slidesPerGroup);
        v2 >= o2.length && (v2 = o2.length - 1);
        const w2 = -o2[v2];
        if (l2.normalizeSlideIndex)
          for (let e3 = 0; e3 < d2.length; e3 += 1) {
            const t3 = -Math.floor(100 * w2), s3 = Math.floor(100 * d2[e3]), a3 = Math.floor(100 * d2[e3 + 1]);
            void 0 !== d2[e3 + 1] ? t3 >= s3 && t3 < a3 - (a3 - s3) / 2 ? n2 = e3 : t3 >= s3 && t3 < a3 && (n2 = e3 + 1) : t3 >= s3 && (n2 = e3);
          }
        if (r2.initialized && n2 !== p2) {
          if (!r2.allowSlideNext && w2 < r2.translate && w2 < r2.minTranslate())
            return false;
          if (!r2.allowSlidePrev && w2 > r2.translate && w2 > r2.maxTranslate() && (p2 || 0) !== n2)
            return false;
        }
        let b2;
        if (n2 !== (c2 || 0) && s2 && r2.emit("beforeSlideChangeStart"), r2.updateProgress(w2), b2 = n2 > p2 ? "next" : n2 < p2 ? "prev" : "reset", u2 && -w2 === r2.translate || !u2 && w2 === r2.translate)
          return r2.updateActiveIndex(n2), l2.autoHeight && r2.updateAutoHeight(), r2.updateSlidesClasses(), "slide" !== l2.effect && r2.setTranslate(w2), "reset" !== b2 && (r2.transitionStart(s2, b2), r2.transitionEnd(s2, b2)), false;
        if (l2.cssMode) {
          const e3 = r2.isHorizontal(), s3 = u2 ? w2 : -w2;
          if (0 === t2) {
            const t3 = r2.virtual && r2.params.virtual.enabled;
            t3 && (r2.wrapperEl.style.scrollSnapType = "none", r2._immediateVirtual = true), t3 && !r2._cssModeVirtualInitialSet && r2.params.initialSlide > 0 ? (r2._cssModeVirtualInitialSet = true, requestAnimationFrame(() => {
              h2[e3 ? "scrollLeft" : "scrollTop"] = s3;
            })) : h2[e3 ? "scrollLeft" : "scrollTop"] = s3, t3 && requestAnimationFrame(() => {
              r2.wrapperEl.style.scrollSnapType = "", r2._immediateVirtual = false;
            });
          } else {
            if (!r2.support.smoothScroll)
              return m({ swiper: r2, targetPosition: s3, side: e3 ? "left" : "top" }), true;
            h2.scrollTo({ [e3 ? "left" : "top"]: s3, behavior: "smooth" });
          }
          return true;
        }
        return r2.setTransition(t2), r2.setTranslate(w2), r2.updateActiveIndex(n2), r2.updateSlidesClasses(), r2.emit("beforeTransitionStart", t2, a2), r2.transitionStart(s2, b2), 0 === t2 ? r2.transitionEnd(s2, b2) : r2.animating || (r2.animating = true, r2.onSlideToWrapperTransitionEnd || (r2.onSlideToWrapperTransitionEnd = function(e3) {
          r2 && !r2.destroyed && e3.target === this && (r2.wrapperEl.removeEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.onSlideToWrapperTransitionEnd = null, delete r2.onSlideToWrapperTransitionEnd, r2.transitionEnd(s2, b2));
        }), r2.wrapperEl.addEventListener("transitionend", r2.onSlideToWrapperTransitionEnd)), true;
      }, slideToLoop: function(e2, t2, s2, a2) {
        if (void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), "string" == typeof e2) {
          e2 = parseInt(e2, 10);
        }
        const i2 = this;
        let r2 = e2;
        return i2.params.loop && (i2.virtual && i2.params.virtual.enabled ? r2 += i2.virtual.slidesBefore : r2 = b(i2.slides.filter((e3) => 1 * e3.getAttribute("data-swiper-slide-index") === r2)[0])), i2.slideTo(r2, t2, s2, a2);
      }, slideNext: function(e2, t2, s2) {
        void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
        const a2 = this, { enabled: i2, params: r2, animating: n2 } = a2;
        if (!i2)
          return a2;
        let l2 = r2.slidesPerGroup;
        "auto" === r2.slidesPerView && 1 === r2.slidesPerGroup && r2.slidesPerGroupAuto && (l2 = Math.max(a2.slidesPerViewDynamic("current", true), 1));
        const o2 = a2.activeIndex < r2.slidesPerGroupSkip ? 1 : l2, d2 = a2.virtual && r2.virtual.enabled;
        if (r2.loop) {
          if (n2 && !d2 && r2.loopPreventsSliding)
            return false;
          a2.loopFix({ direction: "next" }), a2._clientLeft = a2.wrapperEl.clientLeft;
        }
        return r2.rewind && a2.isEnd ? a2.slideTo(0, e2, t2, s2) : a2.slideTo(a2.activeIndex + o2, e2, t2, s2);
      }, slidePrev: function(e2, t2, s2) {
        void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
        const a2 = this, { params: i2, snapGrid: r2, slidesGrid: n2, rtlTranslate: l2, enabled: o2, animating: d2 } = a2;
        if (!o2)
          return a2;
        const c2 = a2.virtual && i2.virtual.enabled;
        if (i2.loop) {
          if (d2 && !c2 && i2.loopPreventsSliding)
            return false;
          a2.loopFix({ direction: "prev" }), a2._clientLeft = a2.wrapperEl.clientLeft;
        }
        function p2(e3) {
          return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
        }
        const u2 = p2(l2 ? a2.translate : -a2.translate), m2 = r2.map((e3) => p2(e3));
        let h2 = r2[m2.indexOf(u2) - 1];
        if (void 0 === h2 && i2.cssMode) {
          let e3;
          r2.forEach((t3, s3) => {
            u2 >= t3 && (e3 = s3);
          }), void 0 !== e3 && (h2 = r2[e3 > 0 ? e3 - 1 : e3]);
        }
        let f2 = 0;
        if (void 0 !== h2 && (f2 = n2.indexOf(h2), f2 < 0 && (f2 = a2.activeIndex - 1), "auto" === i2.slidesPerView && 1 === i2.slidesPerGroup && i2.slidesPerGroupAuto && (f2 = f2 - a2.slidesPerViewDynamic("previous", true) + 1, f2 = Math.max(f2, 0))), i2.rewind && a2.isBeginning) {
          const i3 = a2.params.virtual && a2.params.virtual.enabled && a2.virtual ? a2.virtual.slides.length - 1 : a2.slides.length - 1;
          return a2.slideTo(i3, e2, t2, s2);
        }
        return a2.slideTo(f2, e2, t2, s2);
      }, slideReset: function(e2, t2, s2) {
        return void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), this.slideTo(this.activeIndex, e2, t2, s2);
      }, slideToClosest: function(e2, t2, s2, a2) {
        void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), void 0 === a2 && (a2 = 0.5);
        const i2 = this;
        let r2 = i2.activeIndex;
        const n2 = Math.min(i2.params.slidesPerGroupSkip, r2), l2 = n2 + Math.floor((r2 - n2) / i2.params.slidesPerGroup), o2 = i2.rtlTranslate ? i2.translate : -i2.translate;
        if (o2 >= i2.snapGrid[l2]) {
          const e3 = i2.snapGrid[l2];
          o2 - e3 > (i2.snapGrid[l2 + 1] - e3) * a2 && (r2 += i2.params.slidesPerGroup);
        } else {
          const e3 = i2.snapGrid[l2 - 1];
          o2 - e3 <= (i2.snapGrid[l2] - e3) * a2 && (r2 -= i2.params.slidesPerGroup);
        }
        return r2 = Math.max(r2, 0), r2 = Math.min(r2, i2.slidesGrid.length - 1), i2.slideTo(r2, e2, t2, s2);
      }, slideToClickedSlide: function() {
        const e2 = this, { params: t2, slidesEl: s2 } = e2, a2 = "auto" === t2.slidesPerView ? e2.slidesPerViewDynamic() : t2.slidesPerView;
        let i2, r2 = e2.clickedIndex;
        const l2 = e2.isElement ? "swiper-slide" : `.${t2.slideClass}`;
        if (t2.loop) {
          if (e2.animating)
            return;
          i2 = parseInt(e2.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t2.centeredSlides ? r2 < e2.loopedSlides - a2 / 2 || r2 > e2.slides.length - e2.loopedSlides + a2 / 2 ? (e2.loopFix(), r2 = b(f(s2, `${l2}[data-swiper-slide-index="${i2}"]`)[0]), n(() => {
            e2.slideTo(r2);
          })) : e2.slideTo(r2) : r2 > e2.slides.length - a2 ? (e2.loopFix(), r2 = b(f(s2, `${l2}[data-swiper-slide-index="${i2}"]`)[0]), n(() => {
            e2.slideTo(r2);
          })) : e2.slideTo(r2);
        } else
          e2.slideTo(r2);
      } };
      var O = { loopCreate: function(e2) {
        const t2 = this, { params: s2, slidesEl: a2 } = t2;
        if (!s2.loop || t2.virtual && t2.params.virtual.enabled)
          return;
        f(a2, `.${s2.slideClass}, swiper-slide`).forEach((e3, t3) => {
          e3.setAttribute("data-swiper-slide-index", t3);
        }), t2.loopFix({ slideRealIndex: e2, direction: s2.centeredSlides ? void 0 : "next" });
      }, loopFix: function(e2) {
        let { slideRealIndex: t2, slideTo: s2 = true, direction: a2, setTranslate: i2, activeSlideIndex: r2, byController: n2, byMousewheel: l2 } = void 0 === e2 ? {} : e2;
        const o2 = this;
        if (!o2.params.loop)
          return;
        o2.emit("beforeLoopFix");
        const { slides: d2, allowSlidePrev: c2, allowSlideNext: p2, slidesEl: u2, params: m2 } = o2;
        if (o2.allowSlidePrev = true, o2.allowSlideNext = true, o2.virtual && m2.virtual.enabled)
          return s2 && (m2.centeredSlides || 0 !== o2.snapIndex ? m2.centeredSlides && o2.snapIndex < m2.slidesPerView ? o2.slideTo(o2.virtual.slides.length + o2.snapIndex, 0, false, true) : o2.snapIndex === o2.snapGrid.length - 1 && o2.slideTo(o2.virtual.slidesBefore, 0, false, true) : o2.slideTo(o2.virtual.slides.length, 0, false, true)), o2.allowSlidePrev = c2, o2.allowSlideNext = p2, void o2.emit("loopFix");
        const h2 = "auto" === m2.slidesPerView ? o2.slidesPerViewDynamic() : Math.ceil(parseFloat(m2.slidesPerView, 10));
        let f2 = m2.loopedSlides || h2;
        f2 % m2.slidesPerGroup != 0 && (f2 += m2.slidesPerGroup - f2 % m2.slidesPerGroup), o2.loopedSlides = f2;
        const g2 = [], v2 = [];
        let w2 = o2.activeIndex;
        void 0 === r2 ? r2 = b(o2.slides.filter((e3) => e3.classList.contains("swiper-slide-active"))[0]) : w2 = r2;
        const y2 = "next" === a2 || !a2, E2 = "prev" === a2 || !a2;
        let x2 = 0, S2 = 0;
        if (r2 < f2) {
          x2 = f2 - r2;
          for (let e3 = 0; e3 < f2 - r2; e3 += 1) {
            const t3 = e3 - Math.floor(e3 / d2.length) * d2.length;
            g2.push(d2.length - t3 - 1);
          }
        } else if (r2 > o2.slides.length - 2 * f2) {
          S2 = r2 - (o2.slides.length - 2 * f2);
          for (let e3 = 0; e3 < S2; e3 += 1) {
            const t3 = e3 - Math.floor(e3 / d2.length) * d2.length;
            v2.push(t3);
          }
        }
        if (E2 && g2.forEach((e3) => {
          u2.prepend(o2.slides[e3]);
        }), y2 && v2.forEach((e3) => {
          u2.append(o2.slides[e3]);
        }), o2.recalcSlides(), m2.watchSlidesProgress && o2.updateSlidesOffset(), s2) {
          if (g2.length > 0 && E2)
            if (void 0 === t2) {
              const e3 = o2.slidesGrid[w2], t3 = o2.slidesGrid[w2 + x2] - e3;
              l2 ? o2.setTranslate(o2.translate - t3) : (o2.slideTo(w2 + x2, 0, false, true), i2 && (o2.touches[o2.isHorizontal() ? "startX" : "startY"] += t3));
            } else
              i2 && o2.slideToLoop(t2, 0, false, true);
          else if (v2.length > 0 && y2)
            if (void 0 === t2) {
              const e3 = o2.slidesGrid[w2], t3 = o2.slidesGrid[w2 - S2] - e3;
              l2 ? o2.setTranslate(o2.translate - t3) : (o2.slideTo(w2 - S2, 0, false, true), i2 && (o2.touches[o2.isHorizontal() ? "startX" : "startY"] += t3));
            } else
              o2.slideToLoop(t2, 0, false, true);
        }
        if (o2.allowSlidePrev = c2, o2.allowSlideNext = p2, o2.controller && o2.controller.control && !n2) {
          const e3 = { slideRealIndex: t2, slideTo: false, direction: a2, setTranslate: i2, activeSlideIndex: r2, byController: true };
          Array.isArray(o2.controller.control) ? o2.controller.control.forEach((t3) => {
            t3.params.loop && t3.loopFix(e3);
          }) : o2.controller.control instanceof o2.constructor && o2.controller.control.params.loop && o2.controller.control.loopFix(e3);
        }
        o2.emit("loopFix");
      }, loopDestroy: function() {
        const e2 = this, { slides: t2, params: s2, slidesEl: a2 } = e2;
        if (!s2.loop || e2.virtual && e2.params.virtual.enabled)
          return;
        e2.recalcSlides();
        const i2 = [];
        t2.forEach((e3) => {
          const t3 = void 0 === e3.swiperSlideIndex ? 1 * e3.getAttribute("data-swiper-slide-index") : e3.swiperSlideIndex;
          i2[t3] = e3;
        }), t2.forEach((e3) => {
          e3.removeAttribute("data-swiper-slide-index");
        }), i2.forEach((e3) => {
          a2.append(e3);
        }), e2.recalcSlides(), e2.slideTo(e2.realIndex, 0);
      } };
      function D(e2) {
        const t2 = this, s2 = a(), i2 = r(), n2 = t2.touchEventsData;
        n2.evCache.push(e2);
        const { params: o2, touches: d2, enabled: c2 } = t2;
        if (!c2)
          return;
        if (!o2.simulateTouch && "mouse" === e2.pointerType)
          return;
        if (t2.animating && o2.preventInteractionOnTransition)
          return;
        !t2.animating && o2.cssMode && o2.loop && t2.loopFix();
        let p2 = e2;
        p2.originalEvent && (p2 = p2.originalEvent);
        let u2 = p2.target;
        if ("wrapper" === o2.touchEventsTarget && !t2.wrapperEl.contains(u2))
          return;
        if ("which" in p2 && 3 === p2.which)
          return;
        if ("button" in p2 && p2.button > 0)
          return;
        if (n2.isTouched && n2.isMoved)
          return;
        const m2 = !!o2.noSwipingClass && "" !== o2.noSwipingClass, h2 = e2.composedPath ? e2.composedPath() : e2.path;
        m2 && p2.target && p2.target.shadowRoot && h2 && (u2 = h2[0]);
        const f2 = o2.noSwipingSelector ? o2.noSwipingSelector : `.${o2.noSwipingClass}`, g2 = !(!p2.target || !p2.target.shadowRoot);
        if (o2.noSwiping && (g2 ? function(e3, t3) {
          return void 0 === t3 && (t3 = this), function t4(s3) {
            if (!s3 || s3 === a() || s3 === r())
              return null;
            s3.assignedSlot && (s3 = s3.assignedSlot);
            const i3 = s3.closest(e3);
            return i3 || s3.getRootNode ? i3 || t4(s3.getRootNode().host) : null;
          }(t3);
        }(f2, u2) : u2.closest(f2)))
          return void (t2.allowClick = true);
        if (o2.swipeHandler && !u2.closest(o2.swipeHandler))
          return;
        d2.currentX = p2.pageX, d2.currentY = p2.pageY;
        const v2 = d2.currentX, w2 = d2.currentY, b2 = o2.edgeSwipeDetection || o2.iOSEdgeSwipeDetection, y2 = o2.edgeSwipeThreshold || o2.iOSEdgeSwipeThreshold;
        if (b2 && (v2 <= y2 || v2 >= i2.innerWidth - y2)) {
          if ("prevent" !== b2)
            return;
          e2.preventDefault();
        }
        Object.assign(n2, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), d2.startX = v2, d2.startY = w2, n2.touchStartTime = l(), t2.allowClick = true, t2.updateSize(), t2.swipeDirection = void 0, o2.threshold > 0 && (n2.allowThresholdMove = false);
        let E2 = true;
        u2.matches(n2.focusableElements) && (E2 = false, "SELECT" === u2.nodeName && (n2.isTouched = false)), s2.activeElement && s2.activeElement.matches(n2.focusableElements) && s2.activeElement !== u2 && s2.activeElement.blur();
        const x2 = E2 && t2.allowTouchMove && o2.touchStartPreventDefault;
        !o2.touchStartForcePreventDefault && !x2 || u2.isContentEditable || p2.preventDefault(), t2.params.freeMode && t2.params.freeMode.enabled && t2.freeMode && t2.animating && !o2.cssMode && t2.freeMode.onTouchStart(), t2.emit("touchStart", p2);
      }
      function G(e2) {
        const t2 = a(), s2 = this, i2 = s2.touchEventsData, { params: r2, touches: n2, rtlTranslate: o2, enabled: d2 } = s2;
        if (!d2)
          return;
        if (!r2.simulateTouch && "mouse" === e2.pointerType)
          return;
        let c2 = e2;
        if (c2.originalEvent && (c2 = c2.originalEvent), !i2.isTouched)
          return void (i2.startMoving && i2.isScrolling && s2.emit("touchMoveOpposite", c2));
        const p2 = i2.evCache.findIndex((e3) => e3.pointerId === c2.pointerId);
        p2 >= 0 && (i2.evCache[p2] = c2);
        const u2 = i2.evCache.length > 1 ? i2.evCache[0] : c2, m2 = u2.pageX, h2 = u2.pageY;
        if (c2.preventedByNestedSwiper)
          return n2.startX = m2, void (n2.startY = h2);
        if (!s2.allowTouchMove)
          return c2.target.matches(i2.focusableElements) || (s2.allowClick = false), void (i2.isTouched && (Object.assign(n2, { startX: m2, startY: h2, prevX: s2.touches.currentX, prevY: s2.touches.currentY, currentX: m2, currentY: h2 }), i2.touchStartTime = l()));
        if (r2.touchReleaseOnEdges && !r2.loop) {
          if (s2.isVertical()) {
            if (h2 < n2.startY && s2.translate <= s2.maxTranslate() || h2 > n2.startY && s2.translate >= s2.minTranslate())
              return i2.isTouched = false, void (i2.isMoved = false);
          } else if (m2 < n2.startX && s2.translate <= s2.maxTranslate() || m2 > n2.startX && s2.translate >= s2.minTranslate())
            return;
        }
        if (t2.activeElement && c2.target === t2.activeElement && c2.target.matches(i2.focusableElements))
          return i2.isMoved = true, void (s2.allowClick = false);
        if (i2.allowTouchCallbacks && s2.emit("touchMove", c2), c2.targetTouches && c2.targetTouches.length > 1)
          return;
        n2.currentX = m2, n2.currentY = h2;
        const f2 = n2.currentX - n2.startX, g2 = n2.currentY - n2.startY;
        if (s2.params.threshold && Math.sqrt(f2 ** 2 + g2 ** 2) < s2.params.threshold)
          return;
        if (void 0 === i2.isScrolling) {
          let e3;
          s2.isHorizontal() && n2.currentY === n2.startY || s2.isVertical() && n2.currentX === n2.startX ? i2.isScrolling = false : f2 * f2 + g2 * g2 >= 25 && (e3 = 180 * Math.atan2(Math.abs(g2), Math.abs(f2)) / Math.PI, i2.isScrolling = s2.isHorizontal() ? e3 > r2.touchAngle : 90 - e3 > r2.touchAngle);
        }
        if (i2.isScrolling && s2.emit("touchMoveOpposite", c2), void 0 === i2.startMoving && (n2.currentX === n2.startX && n2.currentY === n2.startY || (i2.startMoving = true)), i2.isScrolling || s2.zoom && s2.params.zoom && s2.params.zoom.enabled && i2.evCache.length > 1)
          return void (i2.isTouched = false);
        if (!i2.startMoving)
          return;
        s2.allowClick = false, !r2.cssMode && c2.cancelable && c2.preventDefault(), r2.touchMoveStopPropagation && !r2.nested && c2.stopPropagation();
        let v2 = s2.isHorizontal() ? f2 : g2, w2 = s2.isHorizontal() ? n2.currentX - n2.previousX : n2.currentY - n2.previousY;
        r2.oneWayMovement && (v2 = Math.abs(v2) * (o2 ? 1 : -1), w2 = Math.abs(w2) * (o2 ? 1 : -1)), n2.diff = v2, v2 *= r2.touchRatio, o2 && (v2 = -v2, w2 = -w2);
        const b2 = s2.touchesDirection;
        s2.swipeDirection = v2 > 0 ? "prev" : "next", s2.touchesDirection = w2 > 0 ? "prev" : "next";
        const y2 = s2.params.loop && !r2.cssMode;
        if (!i2.isMoved) {
          if (y2 && s2.loopFix({ direction: s2.swipeDirection }), i2.startTranslate = s2.getTranslate(), s2.setTransition(0), s2.animating) {
            const e3 = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true });
            s2.wrapperEl.dispatchEvent(e3);
          }
          i2.allowMomentumBounce = false, !r2.grabCursor || true !== s2.allowSlideNext && true !== s2.allowSlidePrev || s2.setGrabCursor(true), s2.emit("sliderFirstMove", c2);
        }
        let E2;
        i2.isMoved && b2 !== s2.touchesDirection && y2 && Math.abs(v2) >= 1 && (s2.loopFix({ direction: s2.swipeDirection, setTranslate: true }), E2 = true), s2.emit("sliderMove", c2), i2.isMoved = true, i2.currentTranslate = v2 + i2.startTranslate;
        let x2 = true, S2 = r2.resistanceRatio;
        if (r2.touchReleaseOnEdges && (S2 = 0), v2 > 0 ? (y2 && !E2 && i2.currentTranslate > (r2.centeredSlides ? s2.minTranslate() - s2.size / 2 : s2.minTranslate()) && s2.loopFix({ direction: "prev", setTranslate: true, activeSlideIndex: 0 }), i2.currentTranslate > s2.minTranslate() && (x2 = false, r2.resistance && (i2.currentTranslate = s2.minTranslate() - 1 + (-s2.minTranslate() + i2.startTranslate + v2) ** S2))) : v2 < 0 && (y2 && !E2 && i2.currentTranslate < (r2.centeredSlides ? s2.maxTranslate() + s2.size / 2 : s2.maxTranslate()) && s2.loopFix({ direction: "next", setTranslate: true, activeSlideIndex: s2.slides.length - ("auto" === r2.slidesPerView ? s2.slidesPerViewDynamic() : Math.ceil(parseFloat(r2.slidesPerView, 10))) }), i2.currentTranslate < s2.maxTranslate() && (x2 = false, r2.resistance && (i2.currentTranslate = s2.maxTranslate() + 1 - (s2.maxTranslate() - i2.startTranslate - v2) ** S2))), x2 && (c2.preventedByNestedSwiper = true), !s2.allowSlideNext && "next" === s2.swipeDirection && i2.currentTranslate < i2.startTranslate && (i2.currentTranslate = i2.startTranslate), !s2.allowSlidePrev && "prev" === s2.swipeDirection && i2.currentTranslate > i2.startTranslate && (i2.currentTranslate = i2.startTranslate), s2.allowSlidePrev || s2.allowSlideNext || (i2.currentTranslate = i2.startTranslate), r2.threshold > 0) {
          if (!(Math.abs(v2) > r2.threshold || i2.allowThresholdMove))
            return void (i2.currentTranslate = i2.startTranslate);
          if (!i2.allowThresholdMove)
            return i2.allowThresholdMove = true, n2.startX = n2.currentX, n2.startY = n2.currentY, i2.currentTranslate = i2.startTranslate, void (n2.diff = s2.isHorizontal() ? n2.currentX - n2.startX : n2.currentY - n2.startY);
        }
        r2.followFinger && !r2.cssMode && ((r2.freeMode && r2.freeMode.enabled && s2.freeMode || r2.watchSlidesProgress) && (s2.updateActiveIndex(), s2.updateSlidesClasses()), s2.params.freeMode && r2.freeMode.enabled && s2.freeMode && s2.freeMode.onTouchMove(), s2.updateProgress(i2.currentTranslate), s2.setTranslate(i2.currentTranslate));
      }
      function H(e2) {
        const t2 = this, s2 = t2.touchEventsData, a2 = s2.evCache.findIndex((t3) => t3.pointerId === e2.pointerId);
        if (a2 >= 0 && s2.evCache.splice(a2, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e2.type))
          return;
        const { params: i2, touches: r2, rtlTranslate: o2, slidesGrid: d2, enabled: c2 } = t2;
        if (!c2)
          return;
        if (!i2.simulateTouch && "mouse" === e2.pointerType)
          return;
        let p2 = e2;
        if (p2.originalEvent && (p2 = p2.originalEvent), s2.allowTouchCallbacks && t2.emit("touchEnd", p2), s2.allowTouchCallbacks = false, !s2.isTouched)
          return s2.isMoved && i2.grabCursor && t2.setGrabCursor(false), s2.isMoved = false, void (s2.startMoving = false);
        i2.grabCursor && s2.isMoved && s2.isTouched && (true === t2.allowSlideNext || true === t2.allowSlidePrev) && t2.setGrabCursor(false);
        const u2 = l(), m2 = u2 - s2.touchStartTime;
        if (t2.allowClick) {
          const e3 = p2.path || p2.composedPath && p2.composedPath();
          t2.updateClickedSlide(e3 && e3[0] || p2.target), t2.emit("tap click", p2), m2 < 300 && u2 - s2.lastClickTime < 300 && t2.emit("doubleTap doubleClick", p2);
        }
        if (s2.lastClickTime = l(), n(() => {
          t2.destroyed || (t2.allowClick = true);
        }), !s2.isTouched || !s2.isMoved || !t2.swipeDirection || 0 === r2.diff || s2.currentTranslate === s2.startTranslate)
          return s2.isTouched = false, s2.isMoved = false, void (s2.startMoving = false);
        let h2;
        if (s2.isTouched = false, s2.isMoved = false, s2.startMoving = false, h2 = i2.followFinger ? o2 ? t2.translate : -t2.translate : -s2.currentTranslate, i2.cssMode)
          return;
        if (t2.params.freeMode && i2.freeMode.enabled)
          return void t2.freeMode.onTouchEnd({ currentPos: h2 });
        let f2 = 0, g2 = t2.slidesSizesGrid[0];
        for (let e3 = 0; e3 < d2.length; e3 += e3 < i2.slidesPerGroupSkip ? 1 : i2.slidesPerGroup) {
          const t3 = e3 < i2.slidesPerGroupSkip - 1 ? 1 : i2.slidesPerGroup;
          void 0 !== d2[e3 + t3] ? h2 >= d2[e3] && h2 < d2[e3 + t3] && (f2 = e3, g2 = d2[e3 + t3] - d2[e3]) : h2 >= d2[e3] && (f2 = e3, g2 = d2[d2.length - 1] - d2[d2.length - 2]);
        }
        let v2 = null, w2 = null;
        i2.rewind && (t2.isBeginning ? w2 = t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? t2.virtual.slides.length - 1 : t2.slides.length - 1 : t2.isEnd && (v2 = 0));
        const b2 = (h2 - d2[f2]) / g2, y2 = f2 < i2.slidesPerGroupSkip - 1 ? 1 : i2.slidesPerGroup;
        if (m2 > i2.longSwipesMs) {
          if (!i2.longSwipes)
            return void t2.slideTo(t2.activeIndex);
          "next" === t2.swipeDirection && (b2 >= i2.longSwipesRatio ? t2.slideTo(i2.rewind && t2.isEnd ? v2 : f2 + y2) : t2.slideTo(f2)), "prev" === t2.swipeDirection && (b2 > 1 - i2.longSwipesRatio ? t2.slideTo(f2 + y2) : null !== w2 && b2 < 0 && Math.abs(b2) > i2.longSwipesRatio ? t2.slideTo(w2) : t2.slideTo(f2));
        } else {
          if (!i2.shortSwipes)
            return void t2.slideTo(t2.activeIndex);
          t2.navigation && (p2.target === t2.navigation.nextEl || p2.target === t2.navigation.prevEl) ? p2.target === t2.navigation.nextEl ? t2.slideTo(f2 + y2) : t2.slideTo(f2) : ("next" === t2.swipeDirection && t2.slideTo(null !== v2 ? v2 : f2 + y2), "prev" === t2.swipeDirection && t2.slideTo(null !== w2 ? w2 : f2));
        }
      }
      let B;
      function X() {
        const e2 = this, { params: t2, el: s2 } = e2;
        if (s2 && 0 === s2.offsetWidth)
          return;
        t2.breakpoints && e2.setBreakpoint();
        const { allowSlideNext: a2, allowSlidePrev: i2, snapGrid: r2 } = e2, n2 = e2.virtual && e2.params.virtual.enabled;
        e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses();
        const l2 = n2 && t2.loop;
        !("auto" === t2.slidesPerView || t2.slidesPerView > 1) || !e2.isEnd || e2.isBeginning || e2.params.centeredSlides || l2 ? e2.params.loop && !n2 ? e2.slideToLoop(e2.realIndex, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true) : e2.slideTo(e2.slides.length - 1, 0, false, true), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && (clearTimeout(B), B = setTimeout(() => {
          e2.autoplay.resume();
        }, 500)), e2.allowSlidePrev = i2, e2.allowSlideNext = a2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
      }
      function Y(e2) {
        const t2 = this;
        t2.enabled && (t2.allowClick || (t2.params.preventClicks && e2.preventDefault(), t2.params.preventClicksPropagation && t2.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
      }
      function N() {
        const e2 = this, { wrapperEl: t2, rtlTranslate: s2, enabled: a2 } = e2;
        if (!a2)
          return;
        let i2;
        e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = -t2.scrollLeft : e2.translate = -t2.scrollTop, 0 === e2.translate && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
        const r2 = e2.maxTranslate() - e2.minTranslate();
        i2 = 0 === r2 ? 0 : (e2.translate - e2.minTranslate()) / r2, i2 !== e2.progress && e2.updateProgress(s2 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
      }
      const q = (e2, t2) => {
        if (!e2 || e2.destroyed || !e2.params)
          return;
        const s2 = t2.closest(e2.isElement ? "swiper-slide" : `.${e2.params.slideClass}`);
        if (s2) {
          const t3 = s2.querySelector(`.${e2.params.lazyPreloaderClass}`);
          t3 && t3.remove();
        }
      };
      function R(e2) {
        q(this, e2.target), this.update();
      }
      let V = false;
      function F() {
      }
      const W = (e2, t2) => {
        const s2 = a(), { params: i2, el: r2, wrapperEl: n2, device: l2 } = e2, o2 = !!i2.nested, d2 = "on" === t2 ? "addEventListener" : "removeEventListener", c2 = t2;
        r2[d2]("pointerdown", e2.onTouchStart, { passive: false }), s2[d2]("pointermove", e2.onTouchMove, { passive: false, capture: o2 }), s2[d2]("pointerup", e2.onTouchEnd, { passive: true }), s2[d2]("pointercancel", e2.onTouchEnd, { passive: true }), s2[d2]("pointerout", e2.onTouchEnd, { passive: true }), s2[d2]("pointerleave", e2.onTouchEnd, { passive: true }), (i2.preventClicks || i2.preventClicksPropagation) && r2[d2]("click", e2.onClick, true), i2.cssMode && n2[d2]("scroll", e2.onScroll), i2.updateOnWindowResize ? e2[c2](l2.ios || l2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", X, true) : e2[c2]("observerUpdate", X, true), r2[d2]("load", e2.onLoad, { capture: true });
      };
      const j = (e2, t2) => e2.grid && t2.grid && t2.grid.rows > 1;
      var _ = { init: true, direction: "horizontal", oneWayMovement: false, touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 5, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, loop: false, loopedSlides: null, loopPreventsSliding: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", runCallbacksOnInit: true, _emitClasses: false };
      function U(e2, t2) {
        return function(s2) {
          void 0 === s2 && (s2 = {});
          const a2 = Object.keys(s2)[0], i2 = s2[a2];
          "object" == typeof i2 && null !== i2 ? (["navigation", "pagination", "scrollbar"].indexOf(a2) >= 0 && true === e2[a2] && (e2[a2] = { auto: true }), a2 in e2 && "enabled" in i2 ? (true === e2[a2] && (e2[a2] = { enabled: true }), "object" != typeof e2[a2] || "enabled" in e2[a2] || (e2[a2].enabled = true), e2[a2] || (e2[a2] = { enabled: false }), p(t2, s2)) : p(t2, s2)) : p(t2, s2);
        };
      }
      const K = { eventsEmitter: A, update: z, translate: k, transition: { setTransition: function(e2, t2) {
        const s2 = this;
        s2.params.cssMode || (s2.wrapperEl.style.transitionDuration = `${e2}ms`), s2.emit("setTransition", e2, t2);
      }, transitionStart: function(e2, t2) {
        void 0 === e2 && (e2 = true);
        const s2 = this, { params: a2 } = s2;
        a2.cssMode || (a2.autoHeight && s2.updateAutoHeight(), $({ swiper: s2, runCallbacks: e2, direction: t2, step: "Start" }));
      }, transitionEnd: function(e2, t2) {
        void 0 === e2 && (e2 = true);
        const s2 = this, { params: a2 } = s2;
        s2.animating = false, a2.cssMode || (s2.setTransition(0), $({ swiper: s2, runCallbacks: e2, direction: t2, step: "End" }));
      } }, slide: I, loop: O, grabCursor: { setGrabCursor: function(e2) {
        const t2 = this;
        if (!t2.params.simulateTouch || t2.params.watchOverflow && t2.isLocked || t2.params.cssMode)
          return;
        const s2 = "container" === t2.params.touchEventsTarget ? t2.el : t2.wrapperEl;
        s2.style.cursor = "move", s2.style.cursor = e2 ? "grabbing" : "grab";
      }, unsetGrabCursor: function() {
        const e2 = this;
        e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2["container" === e2.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      } }, events: { attachEvents: function() {
        const e2 = this, t2 = a(), { params: s2 } = e2;
        e2.onTouchStart = D.bind(e2), e2.onTouchMove = G.bind(e2), e2.onTouchEnd = H.bind(e2), s2.cssMode && (e2.onScroll = N.bind(e2)), e2.onClick = Y.bind(e2), e2.onLoad = R.bind(e2), V || (t2.addEventListener("touchstart", F), V = true), W(e2, "on");
      }, detachEvents: function() {
        W(this, "off");
      } }, breakpoints: { setBreakpoint: function() {
        const e2 = this, { realIndex: t2, initialized: s2, params: a2, el: i2 } = e2, r2 = a2.breakpoints;
        if (!r2 || r2 && 0 === Object.keys(r2).length)
          return;
        const n2 = e2.getBreakpoint(r2, e2.params.breakpointsBase, e2.el);
        if (!n2 || e2.currentBreakpoint === n2)
          return;
        const l2 = (n2 in r2 ? r2[n2] : void 0) || e2.originalParams, o2 = j(e2, a2), d2 = j(e2, l2), c2 = a2.enabled;
        o2 && !d2 ? (i2.classList.remove(`${a2.containerModifierClass}grid`, `${a2.containerModifierClass}grid-column`), e2.emitContainerClasses()) : !o2 && d2 && (i2.classList.add(`${a2.containerModifierClass}grid`), (l2.grid.fill && "column" === l2.grid.fill || !l2.grid.fill && "column" === a2.grid.fill) && i2.classList.add(`${a2.containerModifierClass}grid-column`), e2.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t3) => {
          const s3 = a2[t3] && a2[t3].enabled, i3 = l2[t3] && l2[t3].enabled;
          s3 && !i3 && e2[t3].disable(), !s3 && i3 && e2[t3].enable();
        });
        const u2 = l2.direction && l2.direction !== a2.direction, m2 = a2.loop && (l2.slidesPerView !== a2.slidesPerView || u2);
        u2 && s2 && e2.changeDirection(), p(e2.params, l2);
        const h2 = e2.params.enabled;
        Object.assign(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), c2 && !h2 ? e2.disable() : !c2 && h2 && e2.enable(), e2.currentBreakpoint = n2, e2.emit("_beforeBreakpoint", l2), m2 && s2 && (e2.loopDestroy(), e2.loopCreate(t2), e2.updateSlides()), e2.emit("breakpoint", l2);
      }, getBreakpoint: function(e2, t2, s2) {
        if (void 0 === t2 && (t2 = "window"), !e2 || "container" === t2 && !s2)
          return;
        let a2 = false;
        const i2 = r(), n2 = "window" === t2 ? i2.innerHeight : s2.clientHeight, l2 = Object.keys(e2).map((e3) => {
          if ("string" == typeof e3 && 0 === e3.indexOf("@")) {
            const t3 = parseFloat(e3.substr(1));
            return { value: n2 * t3, point: e3 };
          }
          return { value: e3, point: e3 };
        });
        l2.sort((e3, t3) => parseInt(e3.value, 10) - parseInt(t3.value, 10));
        for (let e3 = 0; e3 < l2.length; e3 += 1) {
          const { point: r2, value: n3 } = l2[e3];
          "window" === t2 ? i2.matchMedia(`(min-width: ${n3}px)`).matches && (a2 = r2) : n3 <= s2.clientWidth && (a2 = r2);
        }
        return a2 || "max";
      } }, checkOverflow: { checkOverflow: function() {
        const e2 = this, { isLocked: t2, params: s2 } = e2, { slidesOffsetBefore: a2 } = s2;
        if (a2) {
          const t3 = e2.slides.length - 1, s3 = e2.slidesGrid[t3] + e2.slidesSizesGrid[t3] + 2 * a2;
          e2.isLocked = e2.size > s3;
        } else
          e2.isLocked = 1 === e2.snapGrid.length;
        true === s2.allowSlideNext && (e2.allowSlideNext = !e2.isLocked), true === s2.allowSlidePrev && (e2.allowSlidePrev = !e2.isLocked), t2 && t2 !== e2.isLocked && (e2.isEnd = false), t2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock");
      } }, classes: { addClasses: function() {
        const e2 = this, { classNames: t2, params: s2, rtl: a2, el: i2, device: r2 } = e2, n2 = function(e3, t3) {
          const s3 = [];
          return e3.forEach((e4) => {
            "object" == typeof e4 ? Object.keys(e4).forEach((a3) => {
              e4[a3] && s3.push(t3 + a3);
            }) : "string" == typeof e4 && s3.push(t3 + e4);
          }), s3;
        }(["initialized", s2.direction, { "free-mode": e2.params.freeMode && s2.freeMode.enabled }, { autoheight: s2.autoHeight }, { rtl: a2 }, { grid: s2.grid && s2.grid.rows > 1 }, { "grid-column": s2.grid && s2.grid.rows > 1 && "column" === s2.grid.fill }, { android: r2.android }, { ios: r2.ios }, { "css-mode": s2.cssMode }, { centered: s2.cssMode && s2.centeredSlides }, { "watch-progress": s2.watchSlidesProgress }], s2.containerModifierClass);
        t2.push(...n2), i2.classList.add(...t2), e2.emitContainerClasses();
      }, removeClasses: function() {
        const { el: e2, classNames: t2 } = this;
        e2.classList.remove(...t2), this.emitContainerClasses();
      } } }, Z = {};
      class Q {
        constructor() {
          let e2, t2;
          for (var s2 = arguments.length, i2 = new Array(s2), r2 = 0; r2 < s2; r2++)
            i2[r2] = arguments[r2];
          1 === i2.length && i2[0].constructor && "Object" === Object.prototype.toString.call(i2[0]).slice(8, -1) ? t2 = i2[0] : [e2, t2] = i2, t2 || (t2 = {}), t2 = p({}, t2), e2 && !t2.el && (t2.el = e2);
          const n2 = a();
          if (t2.el && "string" == typeof t2.el && n2.querySelectorAll(t2.el).length > 1) {
            const e3 = [];
            return n2.querySelectorAll(t2.el).forEach((s3) => {
              const a2 = p({}, t2, { el: s3 });
              e3.push(new Q(a2));
            }), e3;
          }
          const o2 = this;
          o2.__swiper__ = true, o2.support = C(), o2.device = P({ userAgent: t2.userAgent }), o2.browser = L(), o2.eventsListeners = {}, o2.eventsAnyListeners = [], o2.modules = [...o2.__modules__], t2.modules && Array.isArray(t2.modules) && o2.modules.push(...t2.modules);
          const d2 = {};
          o2.modules.forEach((e3) => {
            e3({ params: t2, swiper: o2, extendParams: U(t2, d2), on: o2.on.bind(o2), once: o2.once.bind(o2), off: o2.off.bind(o2), emit: o2.emit.bind(o2) });
          });
          const c2 = p({}, _, d2);
          return o2.params = p({}, c2, Z, t2), o2.originalParams = p({}, o2.params), o2.passedParams = p({}, t2), o2.params && o2.params.on && Object.keys(o2.params.on).forEach((e3) => {
            o2.on(e3, o2.params.on[e3]);
          }), o2.params && o2.params.onAny && o2.onAny(o2.params.onAny), Object.assign(o2, { enabled: o2.params.enabled, el: e2, classNames: [], slides: [], slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === o2.params.direction, isVertical: () => "vertical" === o2.params.direction, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: o2.params.allowSlideNext, allowSlidePrev: o2.params.allowSlidePrev, touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: o2.params.focusableElements, lastClickTime: l(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, evCache: [] }, allowClick: true, allowTouchMove: o2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), o2.emit("_swiper"), o2.params.init && o2.init(), o2;
        }
        recalcSlides() {
          const { slidesEl: e2, params: t2 } = this;
          this.slides = f(e2, `.${t2.slideClass}, swiper-slide`);
        }
        enable() {
          const e2 = this;
          e2.enabled || (e2.enabled = true, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
        }
        disable() {
          const e2 = this;
          e2.enabled && (e2.enabled = false, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
        }
        setProgress(e2, t2) {
          const s2 = this;
          e2 = Math.min(Math.max(e2, 0), 1);
          const a2 = s2.minTranslate(), i2 = (s2.maxTranslate() - a2) * e2 + a2;
          s2.translateTo(i2, void 0 === t2 ? 0 : t2), s2.updateActiveIndex(), s2.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e2 = this;
          if (!e2.params._emitClasses || !e2.el)
            return;
          const t2 = e2.el.className.split(" ").filter((t3) => 0 === t3.indexOf("swiper") || 0 === t3.indexOf(e2.params.containerModifierClass));
          e2.emit("_containerClasses", t2.join(" "));
        }
        getSlideClasses(e2) {
          const t2 = this;
          return t2.destroyed ? "" : e2.className.split(" ").filter((e3) => 0 === e3.indexOf("swiper-slide") || 0 === e3.indexOf(t2.params.slideClass)).join(" ");
        }
        emitSlidesClasses() {
          const e2 = this;
          if (!e2.params._emitClasses || !e2.el)
            return;
          const t2 = [];
          e2.slides.forEach((s2) => {
            const a2 = e2.getSlideClasses(s2);
            t2.push({ slideEl: s2, classNames: a2 }), e2.emit("_slideClass", s2, a2);
          }), e2.emit("_slideClasses", t2);
        }
        slidesPerViewDynamic(e2, t2) {
          void 0 === e2 && (e2 = "current"), void 0 === t2 && (t2 = false);
          const { params: s2, slides: a2, slidesGrid: i2, slidesSizesGrid: r2, size: n2, activeIndex: l2 } = this;
          let o2 = 1;
          if (s2.centeredSlides) {
            let e3, t3 = a2[l2].swiperSlideSize;
            for (let s3 = l2 + 1; s3 < a2.length; s3 += 1)
              a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
            for (let s3 = l2 - 1; s3 >= 0; s3 -= 1)
              a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
          } else if ("current" === e2)
            for (let e3 = l2 + 1; e3 < a2.length; e3 += 1) {
              (t2 ? i2[e3] + r2[e3] - i2[l2] < n2 : i2[e3] - i2[l2] < n2) && (o2 += 1);
            }
          else
            for (let e3 = l2 - 1; e3 >= 0; e3 -= 1) {
              i2[l2] - i2[e3] < n2 && (o2 += 1);
            }
          return o2;
        }
        update() {
          const e2 = this;
          if (!e2 || e2.destroyed)
            return;
          const { snapGrid: t2, params: s2 } = e2;
          function a2() {
            const t3 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, s3 = Math.min(Math.max(t3, e2.maxTranslate()), e2.minTranslate());
            e2.setTranslate(s3), e2.updateActiveIndex(), e2.updateSlidesClasses();
          }
          let i2;
          s2.breakpoints && e2.setBreakpoint(), [...e2.el.querySelectorAll('[loading="lazy"]')].forEach((t3) => {
            t3.complete && q(e2, t3);
          }), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode && e2.params.freeMode.enabled ? (a2(), e2.params.autoHeight && e2.updateAutoHeight()) : (i2 = ("auto" === e2.params.slidesPerView || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), i2 || a2()), s2.watchOverflow && t2 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
        }
        changeDirection(e2, t2) {
          void 0 === t2 && (t2 = true);
          const s2 = this, a2 = s2.params.direction;
          return e2 || (e2 = "horizontal" === a2 ? "vertical" : "horizontal"), e2 === a2 || "horizontal" !== e2 && "vertical" !== e2 || (s2.el.classList.remove(`${s2.params.containerModifierClass}${a2}`), s2.el.classList.add(`${s2.params.containerModifierClass}${e2}`), s2.emitContainerClasses(), s2.params.direction = e2, s2.slides.forEach((t3) => {
            "vertical" === e2 ? t3.style.width = "" : t3.style.height = "";
          }), s2.emit("changeDirection"), t2 && s2.update()), s2;
        }
        changeLanguageDirection(e2) {
          const t2 = this;
          t2.rtl && "rtl" === e2 || !t2.rtl && "ltr" === e2 || (t2.rtl = "rtl" === e2, t2.rtlTranslate = "horizontal" === t2.params.direction && t2.rtl, t2.rtl ? (t2.el.classList.add(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "rtl") : (t2.el.classList.remove(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "ltr"), t2.update());
        }
        mount(e2) {
          const t2 = this;
          if (t2.mounted)
            return true;
          let s2 = e2 || t2.params.el;
          if ("string" == typeof s2 && (s2 = document.querySelector(s2)), !s2)
            return false;
          s2.swiper = t2, s2.shadowEl && (t2.isElement = true);
          const a2 = () => `.${(t2.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let i2 = (() => {
            if (s2 && s2.shadowRoot && s2.shadowRoot.querySelector) {
              return s2.shadowRoot.querySelector(a2());
            }
            return f(s2, a2())[0];
          })();
          return !i2 && t2.params.createElements && (i2 = g("div", t2.params.wrapperClass), s2.append(i2), f(s2, `.${t2.params.slideClass}`).forEach((e3) => {
            i2.append(e3);
          })), Object.assign(t2, { el: s2, wrapperEl: i2, slidesEl: t2.isElement ? s2 : i2, mounted: true, rtl: "rtl" === s2.dir.toLowerCase() || "rtl" === w(s2, "direction"), rtlTranslate: "horizontal" === t2.params.direction && ("rtl" === s2.dir.toLowerCase() || "rtl" === w(s2, "direction")), wrongRTL: "-webkit-box" === w(i2, "display") }), true;
        }
        init(e2) {
          const t2 = this;
          if (t2.initialized)
            return t2;
          return false === t2.mount(e2) || (t2.emit("beforeInit"), t2.params.breakpoints && t2.setBreakpoint(), t2.addClasses(), t2.updateSize(), t2.updateSlides(), t2.params.watchOverflow && t2.checkOverflow(), t2.params.grabCursor && t2.enabled && t2.setGrabCursor(), t2.params.loop && t2.virtual && t2.params.virtual.enabled ? t2.slideTo(t2.params.initialSlide + t2.virtual.slidesBefore, 0, t2.params.runCallbacksOnInit, false, true) : t2.slideTo(t2.params.initialSlide, 0, t2.params.runCallbacksOnInit, false, true), t2.params.loop && t2.loopCreate(), t2.attachEvents(), [...t2.el.querySelectorAll('[loading="lazy"]')].forEach((e3) => {
            e3.complete ? q(t2, e3) : e3.addEventListener("load", (e4) => {
              q(t2, e4.target);
            });
          }), t2.initialized = true, t2.emit("init"), t2.emit("afterInit")), t2;
        }
        destroy(e2, t2) {
          void 0 === e2 && (e2 = true), void 0 === t2 && (t2 = true);
          const s2 = this, { params: a2, el: i2, wrapperEl: r2, slides: n2 } = s2;
          return void 0 === s2.params || s2.destroyed || (s2.emit("beforeDestroy"), s2.initialized = false, s2.detachEvents(), a2.loop && s2.loopDestroy(), t2 && (s2.removeClasses(), i2.removeAttribute("style"), r2.removeAttribute("style"), n2 && n2.length && n2.forEach((e3) => {
            e3.classList.remove(a2.slideVisibleClass, a2.slideActiveClass, a2.slideNextClass, a2.slidePrevClass), e3.removeAttribute("style"), e3.removeAttribute("data-swiper-slide-index");
          })), s2.emit("destroy"), Object.keys(s2.eventsListeners).forEach((e3) => {
            s2.off(e3);
          }), false !== e2 && (s2.el.swiper = null, function(e3) {
            const t3 = e3;
            Object.keys(t3).forEach((e4) => {
              try {
                t3[e4] = null;
              } catch (e5) {
              }
              try {
                delete t3[e4];
              } catch (e5) {
              }
            });
          }(s2)), s2.destroyed = true), null;
        }
        static extendDefaults(e2) {
          p(Z, e2);
        }
        static get extendedDefaults() {
          return Z;
        }
        static get defaults() {
          return _;
        }
        static installModule(e2) {
          Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
          const t2 = Q.prototype.__modules__;
          "function" == typeof e2 && t2.indexOf(e2) < 0 && t2.push(e2);
        }
        static use(e2) {
          return Array.isArray(e2) ? (e2.forEach((e3) => Q.installModule(e3)), Q) : (Q.installModule(e2), Q);
        }
      }
      function J(e2, t2, s2, a2) {
        return e2.params.createElements && Object.keys(a2).forEach((i2) => {
          if (!s2[i2] && true === s2.auto) {
            let r2 = f(e2.el, `.${a2[i2]}`)[0];
            r2 || (r2 = g("div", a2[i2]), r2.className = a2[i2], e2.el.append(r2)), s2[i2] = r2, t2[i2] = r2;
          }
        }), s2;
      }
      function ee(e2) {
        return void 0 === e2 && (e2 = ""), `.${e2.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
      }
      function te(e2) {
        const t2 = this, { params: s2, slidesEl: a2 } = t2;
        s2.loop && t2.loopDestroy();
        const i2 = (e3) => {
          if ("string" == typeof e3) {
            const t3 = document.createElement("div");
            t3.innerHTML = e3, a2.append(t3.children[0]), t3.innerHTML = "";
          } else
            a2.append(e3);
        };
        if ("object" == typeof e2 && "length" in e2)
          for (let t3 = 0; t3 < e2.length; t3 += 1)
            e2[t3] && i2(e2[t3]);
        else
          i2(e2);
        t2.recalcSlides(), s2.loop && t2.loopCreate(), s2.observer && !t2.isElement || t2.update();
      }
      function se(e2) {
        const t2 = this, { params: s2, activeIndex: a2, slidesEl: i2 } = t2;
        s2.loop && t2.loopDestroy();
        let r2 = a2 + 1;
        const n2 = (e3) => {
          if ("string" == typeof e3) {
            const t3 = document.createElement("div");
            t3.innerHTML = e3, i2.prepend(t3.children[0]), t3.innerHTML = "";
          } else
            i2.prepend(e3);
        };
        if ("object" == typeof e2 && "length" in e2) {
          for (let t3 = 0; t3 < e2.length; t3 += 1)
            e2[t3] && n2(e2[t3]);
          r2 = a2 + e2.length;
        } else
          n2(e2);
        t2.recalcSlides(), s2.loop && t2.loopCreate(), s2.observer && !t2.isElement || t2.update(), t2.slideTo(r2, 0, false);
      }
      function ae(e2, t2) {
        const s2 = this, { params: a2, activeIndex: i2, slidesEl: r2 } = s2;
        let n2 = i2;
        a2.loop && (n2 -= s2.loopedSlides, s2.loopDestroy(), s2.recalcSlides());
        const l2 = s2.slides.length;
        if (e2 <= 0)
          return void s2.prependSlide(t2);
        if (e2 >= l2)
          return void s2.appendSlide(t2);
        let o2 = n2 > e2 ? n2 + 1 : n2;
        const d2 = [];
        for (let t3 = l2 - 1; t3 >= e2; t3 -= 1) {
          const e3 = s2.slides[t3];
          e3.remove(), d2.unshift(e3);
        }
        if ("object" == typeof t2 && "length" in t2) {
          for (let e3 = 0; e3 < t2.length; e3 += 1)
            t2[e3] && r2.append(t2[e3]);
          o2 = n2 > e2 ? n2 + t2.length : n2;
        } else
          r2.append(t2);
        for (let e3 = 0; e3 < d2.length; e3 += 1)
          r2.append(d2[e3]);
        s2.recalcSlides(), a2.loop && s2.loopCreate(), a2.observer && !s2.isElement || s2.update(), a2.loop ? s2.slideTo(o2 + s2.loopedSlides, 0, false) : s2.slideTo(o2, 0, false);
      }
      function ie(e2) {
        const t2 = this, { params: s2, activeIndex: a2 } = t2;
        let i2 = a2;
        s2.loop && (i2 -= t2.loopedSlides, t2.loopDestroy());
        let r2, n2 = i2;
        if ("object" == typeof e2 && "length" in e2) {
          for (let s3 = 0; s3 < e2.length; s3 += 1)
            r2 = e2[s3], t2.slides[r2] && t2.slides[r2].remove(), r2 < n2 && (n2 -= 1);
          n2 = Math.max(n2, 0);
        } else
          r2 = e2, t2.slides[r2] && t2.slides[r2].remove(), r2 < n2 && (n2 -= 1), n2 = Math.max(n2, 0);
        t2.recalcSlides(), s2.loop && t2.loopCreate(), s2.observer && !t2.isElement || t2.update(), s2.loop ? t2.slideTo(n2 + t2.loopedSlides, 0, false) : t2.slideTo(n2, 0, false);
      }
      function re() {
        const e2 = this, t2 = [];
        for (let s2 = 0; s2 < e2.slides.length; s2 += 1)
          t2.push(s2);
        e2.removeSlide(t2);
      }
      function ne(e2) {
        const { effect: t2, swiper: s2, on: a2, setTranslate: i2, setTransition: r2, overwriteParams: n2, perspective: l2, recreateShadows: o2, getEffectParams: d2 } = e2;
        let c2;
        a2("beforeInit", () => {
          if (s2.params.effect !== t2)
            return;
          s2.classNames.push(`${s2.params.containerModifierClass}${t2}`), l2 && l2() && s2.classNames.push(`${s2.params.containerModifierClass}3d`);
          const e3 = n2 ? n2() : {};
          Object.assign(s2.params, e3), Object.assign(s2.originalParams, e3);
        }), a2("setTranslate", () => {
          s2.params.effect === t2 && i2();
        }), a2("setTransition", (e3, a3) => {
          s2.params.effect === t2 && r2(a3);
        }), a2("transitionEnd", () => {
          if (s2.params.effect === t2 && o2) {
            if (!d2 || !d2().slideShadows)
              return;
            s2.slides.forEach((e3) => {
              e3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e4) => e4.remove());
            }), o2();
          }
        }), a2("virtualUpdate", () => {
          s2.params.effect === t2 && (s2.slides.length || (c2 = true), requestAnimationFrame(() => {
            c2 && s2.slides && s2.slides.length && (i2(), c2 = false);
          }));
        });
      }
      function le(e2, t2) {
        const s2 = h(t2);
        return s2 !== t2 && (s2.style.backfaceVisibility = "hidden", s2.style["-webkit-backface-visibility"] = "hidden"), s2;
      }
      function oe(e2) {
        let { swiper: t2, duration: s2, transformElements: a2, allSlides: i2 } = e2;
        const { activeIndex: r2 } = t2;
        if (t2.params.virtualTranslate && 0 !== s2) {
          let e3, s3 = false;
          e3 = i2 ? a2 : a2.filter((e4) => b(e4.classList.contains("swiper-slide-transform") ? ((e5) => {
            if (!e5.parentElement)
              return t2.slides.filter((t3) => t3.shadowEl && t3.shadowEl === e5.parentNode)[0];
            return e5.parentElement;
          })(e4) : e4) === r2), e3.forEach((e4) => {
            E(e4, () => {
              if (s3)
                return;
              if (!t2 || t2.destroyed)
                return;
              s3 = true, t2.animating = false;
              const e5 = new window.CustomEvent("transitionend", { bubbles: true, cancelable: true });
              t2.wrapperEl.dispatchEvent(e5);
            });
          });
        }
      }
      function de(e2, t2, s2) {
        const a2 = "swiper-slide-shadow" + (s2 ? `-${s2}` : ""), i2 = h(t2);
        let r2 = i2.querySelector(`.${a2}`);
        return r2 || (r2 = g("div", "swiper-slide-shadow" + (s2 ? `-${s2}` : "")), i2.append(r2)), r2;
      }
      Object.keys(K).forEach((e2) => {
        Object.keys(K[e2]).forEach((t2) => {
          Q.prototype[t2] = K[e2][t2];
        });
      }), Q.use([function(e2) {
        let { swiper: t2, on: s2, emit: a2 } = e2;
        const i2 = r();
        let n2 = null, l2 = null;
        const o2 = () => {
          t2 && !t2.destroyed && t2.initialized && (a2("beforeResize"), a2("resize"));
        }, d2 = () => {
          t2 && !t2.destroyed && t2.initialized && a2("orientationchange");
        };
        s2("init", () => {
          t2.params.resizeObserver && void 0 !== i2.ResizeObserver ? t2 && !t2.destroyed && t2.initialized && (n2 = new ResizeObserver((e3) => {
            l2 = i2.requestAnimationFrame(() => {
              const { width: s3, height: a3 } = t2;
              let i3 = s3, r2 = a3;
              e3.forEach((e4) => {
                let { contentBoxSize: s4, contentRect: a4, target: n3 } = e4;
                n3 && n3 !== t2.el || (i3 = a4 ? a4.width : (s4[0] || s4).inlineSize, r2 = a4 ? a4.height : (s4[0] || s4).blockSize);
              }), i3 === s3 && r2 === a3 || o2();
            });
          }), n2.observe(t2.el)) : (i2.addEventListener("resize", o2), i2.addEventListener("orientationchange", d2));
        }), s2("destroy", () => {
          l2 && i2.cancelAnimationFrame(l2), n2 && n2.unobserve && t2.el && (n2.unobserve(t2.el), n2 = null), i2.removeEventListener("resize", o2), i2.removeEventListener("orientationchange", d2);
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const n2 = [], l2 = r(), o2 = function(e3, t3) {
          void 0 === t3 && (t3 = {});
          const s3 = new (l2.MutationObserver || l2.WebkitMutationObserver)((e4) => {
            if (1 === e4.length)
              return void i2("observerUpdate", e4[0]);
            const t4 = function() {
              i2("observerUpdate", e4[0]);
            };
            l2.requestAnimationFrame ? l2.requestAnimationFrame(t4) : l2.setTimeout(t4, 0);
          });
          s3.observe(e3, { attributes: void 0 === t3.attributes || t3.attributes, childList: void 0 === t3.childList || t3.childList, characterData: void 0 === t3.characterData || t3.characterData }), n2.push(s3);
        };
        s2({ observer: false, observeParents: false, observeSlideChildren: false }), a2("init", () => {
          if (t2.params.observer) {
            if (t2.params.observeParents) {
              const e3 = y(t2.el);
              for (let t3 = 0; t3 < e3.length; t3 += 1)
                o2(e3[t3]);
            }
            o2(t2.el, { childList: t2.params.observeSlideChildren }), o2(t2.wrapperEl, { attributes: false });
          }
        }), a2("destroy", () => {
          n2.forEach((e3) => {
            e3.disconnect();
          }), n2.splice(0, n2.length);
        });
      }]);
      const ce = [function(e2) {
        let t2, { swiper: s2, extendParams: i2, on: r2, emit: n2 } = e2;
        i2({ virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } });
        const l2 = a();
        s2.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] };
        const o2 = l2.createElement("div");
        function d2(e3, t3) {
          const a2 = s2.params.virtual;
          if (a2.cache && s2.virtual.cache[t3])
            return s2.virtual.cache[t3];
          let i3;
          return a2.renderSlide ? (i3 = a2.renderSlide.call(s2, e3, t3), "string" == typeof i3 && (o2.innerHTML = i3, i3 = o2.children[0])) : i3 = s2.isElement ? g("swiper-slide") : g("div", s2.params.slideClass), i3.setAttribute("data-swiper-slide-index", t3), a2.renderSlide || (i3.textContent = e3), a2.cache && (s2.virtual.cache[t3] = i3), i3;
        }
        function c2(e3) {
          const { slidesPerView: t3, slidesPerGroup: a2, centeredSlides: i3, loop: r3 } = s2.params, { addSlidesBefore: l3, addSlidesAfter: o3 } = s2.params.virtual, { from: c3, to: p2, slides: u2, slidesGrid: m2, offset: h2 } = s2.virtual;
          s2.params.cssMode || s2.updateActiveIndex();
          const g2 = s2.activeIndex || 0;
          let v2, w2, b2;
          v2 = s2.rtlTranslate ? "right" : s2.isHorizontal() ? "left" : "top", i3 ? (w2 = Math.floor(t3 / 2) + a2 + o3, b2 = Math.floor(t3 / 2) + a2 + l3) : (w2 = t3 + (a2 - 1) + o3, b2 = (r3 ? t3 : a2) + l3);
          let y2 = g2 - b2, E2 = g2 + w2;
          r3 || (y2 = Math.max(y2, 0), E2 = Math.min(E2, u2.length - 1));
          let x2 = (s2.slidesGrid[y2] || 0) - (s2.slidesGrid[0] || 0);
          function S2() {
            s2.updateSlides(), s2.updateProgress(), s2.updateSlidesClasses(), n2("virtualUpdate");
          }
          if (r3 && g2 >= b2 ? (y2 -= b2, i3 || (x2 += s2.slidesGrid[0])) : r3 && g2 < b2 && (y2 = -b2, i3 && (x2 += s2.slidesGrid[0])), Object.assign(s2.virtual, { from: y2, to: E2, offset: x2, slidesGrid: s2.slidesGrid, slidesBefore: b2, slidesAfter: w2 }), c3 === y2 && p2 === E2 && !e3)
            return s2.slidesGrid !== m2 && x2 !== h2 && s2.slides.forEach((e4) => {
              e4.style[v2] = `${x2}px`;
            }), s2.updateProgress(), void n2("virtualUpdate");
          if (s2.params.virtual.renderExternal)
            return s2.params.virtual.renderExternal.call(s2, { offset: x2, from: y2, to: E2, slides: function() {
              const e4 = [];
              for (let t4 = y2; t4 <= E2; t4 += 1)
                e4.push(u2[t4]);
              return e4;
            }() }), void (s2.params.virtual.renderExternalUpdate ? S2() : n2("virtualUpdate"));
          const T2 = [], M2 = [], C2 = (e4) => {
            let t4 = e4;
            return e4 < 0 ? t4 = u2.length + e4 : t4 >= u2.length && (t4 -= u2.length), t4;
          };
          if (e3)
            s2.slidesEl.querySelectorAll(`.${s2.params.slideClass}, swiper-slide`).forEach((e4) => {
              e4.remove();
            });
          else
            for (let e4 = c3; e4 <= p2; e4 += 1)
              if (e4 < y2 || e4 > E2) {
                const t4 = C2(e4);
                s2.slidesEl.querySelectorAll(`.${s2.params.slideClass}[data-swiper-slide-index="${t4}"], swiper-slide[data-swiper-slide-index="${t4}"]`).forEach((e5) => {
                  e5.remove();
                });
              }
          const P2 = r3 ? -u2.length : 0, L2 = r3 ? 2 * u2.length : u2.length;
          for (let t4 = P2; t4 < L2; t4 += 1)
            if (t4 >= y2 && t4 <= E2) {
              const s3 = C2(t4);
              void 0 === p2 || e3 ? M2.push(s3) : (t4 > p2 && M2.push(s3), t4 < c3 && T2.push(s3));
            }
          if (M2.forEach((e4) => {
            s2.slidesEl.append(d2(u2[e4], e4));
          }), r3)
            for (let e4 = T2.length - 1; e4 >= 0; e4 -= 1) {
              const t4 = T2[e4];
              s2.slidesEl.prepend(d2(u2[t4], t4));
            }
          else
            T2.sort((e4, t4) => t4 - e4), T2.forEach((e4) => {
              s2.slidesEl.prepend(d2(u2[e4], e4));
            });
          f(s2.slidesEl, ".swiper-slide, swiper-slide").forEach((e4) => {
            e4.style[v2] = `${x2}px`;
          }), S2();
        }
        r2("beforeInit", () => {
          if (!s2.params.virtual.enabled)
            return;
          let e3;
          if (void 0 === s2.passedParams.virtual.slides) {
            const t3 = s2.slidesEl.querySelectorAll(`.${s2.params.slideClass}, swiper-slide`);
            t3 && t3.length && (s2.virtual.slides = [...t3], e3 = true, t3.forEach((e4, t4) => {
              e4.setAttribute("data-swiper-slide-index", t4), s2.virtual.cache[t4] = e4, e4.remove();
            }));
          }
          e3 || (s2.virtual.slides = s2.params.virtual.slides), s2.classNames.push(`${s2.params.containerModifierClass}virtual`), s2.params.watchSlidesProgress = true, s2.originalParams.watchSlidesProgress = true, s2.params.initialSlide || c2();
        }), r2("setTranslate", () => {
          s2.params.virtual.enabled && (s2.params.cssMode && !s2._immediateVirtual ? (clearTimeout(t2), t2 = setTimeout(() => {
            c2();
          }, 100)) : c2());
        }), r2("init update resize", () => {
          s2.params.virtual.enabled && s2.params.cssMode && u(s2.wrapperEl, "--swiper-virtual-size", `${s2.virtualSize}px`);
        }), Object.assign(s2.virtual, { appendSlide: function(e3) {
          if ("object" == typeof e3 && "length" in e3)
            for (let t3 = 0; t3 < e3.length; t3 += 1)
              e3[t3] && s2.virtual.slides.push(e3[t3]);
          else
            s2.virtual.slides.push(e3);
          c2(true);
        }, prependSlide: function(e3) {
          const t3 = s2.activeIndex;
          let a2 = t3 + 1, i3 = 1;
          if (Array.isArray(e3)) {
            for (let t4 = 0; t4 < e3.length; t4 += 1)
              e3[t4] && s2.virtual.slides.unshift(e3[t4]);
            a2 = t3 + e3.length, i3 = e3.length;
          } else
            s2.virtual.slides.unshift(e3);
          if (s2.params.virtual.cache) {
            const e4 = s2.virtual.cache, t4 = {};
            Object.keys(e4).forEach((s3) => {
              const a3 = e4[s3], r3 = a3.getAttribute("data-swiper-slide-index");
              r3 && a3.setAttribute("data-swiper-slide-index", parseInt(r3, 10) + i3), t4[parseInt(s3, 10) + i3] = a3;
            }), s2.virtual.cache = t4;
          }
          c2(true), s2.slideTo(a2, 0);
        }, removeSlide: function(e3) {
          if (null == e3)
            return;
          let t3 = s2.activeIndex;
          if (Array.isArray(e3))
            for (let a2 = e3.length - 1; a2 >= 0; a2 -= 1)
              s2.virtual.slides.splice(e3[a2], 1), s2.params.virtual.cache && delete s2.virtual.cache[e3[a2]], e3[a2] < t3 && (t3 -= 1), t3 = Math.max(t3, 0);
          else
            s2.virtual.slides.splice(e3, 1), s2.params.virtual.cache && delete s2.virtual.cache[e3], e3 < t3 && (t3 -= 1), t3 = Math.max(t3, 0);
          c2(true), s2.slideTo(t3, 0);
        }, removeAllSlides: function() {
          s2.virtual.slides = [], s2.params.virtual.cache && (s2.virtual.cache = {}), c2(true), s2.slideTo(0, 0);
        }, update: c2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: i2, emit: n2 } = e2;
        const l2 = a(), o2 = r();
        function d2(e3) {
          if (!t2.enabled)
            return;
          const { rtlTranslate: s3 } = t2;
          let a2 = e3;
          a2.originalEvent && (a2 = a2.originalEvent);
          const i3 = a2.keyCode || a2.charCode, r2 = t2.params.keyboard.pageUpDown, d3 = r2 && 33 === i3, c3 = r2 && 34 === i3, p3 = 37 === i3, u2 = 39 === i3, m2 = 38 === i3, h2 = 40 === i3;
          if (!t2.allowSlideNext && (t2.isHorizontal() && u2 || t2.isVertical() && h2 || c3))
            return false;
          if (!t2.allowSlidePrev && (t2.isHorizontal() && p3 || t2.isVertical() && m2 || d3))
            return false;
          if (!(a2.shiftKey || a2.altKey || a2.ctrlKey || a2.metaKey || l2.activeElement && l2.activeElement.nodeName && ("input" === l2.activeElement.nodeName.toLowerCase() || "textarea" === l2.activeElement.nodeName.toLowerCase()))) {
            if (t2.params.keyboard.onlyInViewport && (d3 || c3 || p3 || u2 || m2 || h2)) {
              let e4 = false;
              if (y(t2.el, `.${t2.params.slideClass}, swiper-slide`).length > 0 && 0 === y(t2.el, `.${t2.params.slideActiveClass}`).length)
                return;
              const a3 = t2.el, i4 = a3.clientWidth, r3 = a3.clientHeight, n3 = o2.innerWidth, l3 = o2.innerHeight, d4 = v(a3);
              s3 && (d4.left -= a3.scrollLeft);
              const c4 = [[d4.left, d4.top], [d4.left + i4, d4.top], [d4.left, d4.top + r3], [d4.left + i4, d4.top + r3]];
              for (let t3 = 0; t3 < c4.length; t3 += 1) {
                const s4 = c4[t3];
                if (s4[0] >= 0 && s4[0] <= n3 && s4[1] >= 0 && s4[1] <= l3) {
                  if (0 === s4[0] && 0 === s4[1])
                    continue;
                  e4 = true;
                }
              }
              if (!e4)
                return;
            }
            t2.isHorizontal() ? ((d3 || c3 || p3 || u2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), ((c3 || u2) && !s3 || (d3 || p3) && s3) && t2.slideNext(), ((d3 || p3) && !s3 || (c3 || u2) && s3) && t2.slidePrev()) : ((d3 || c3 || m2 || h2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), (c3 || h2) && t2.slideNext(), (d3 || m2) && t2.slidePrev()), n2("keyPress", i3);
          }
        }
        function c2() {
          t2.keyboard.enabled || (l2.addEventListener("keydown", d2), t2.keyboard.enabled = true);
        }
        function p2() {
          t2.keyboard.enabled && (l2.removeEventListener("keydown", d2), t2.keyboard.enabled = false);
        }
        t2.keyboard = { enabled: false }, s2({ keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true } }), i2("init", () => {
          t2.params.keyboard.enabled && c2();
        }), i2("destroy", () => {
          t2.keyboard.enabled && p2();
        }), Object.assign(t2.keyboard, { enable: c2, disable: p2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const o2 = r();
        let d2;
        s2({ mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), t2.mousewheel = { enabled: false };
        let c2, p2 = l();
        const u2 = [];
        function m2() {
          t2.enabled && (t2.mouseEntered = true);
        }
        function h2() {
          t2.enabled && (t2.mouseEntered = false);
        }
        function f2(e3) {
          return !(t2.params.mousewheel.thresholdDelta && e3.delta < t2.params.mousewheel.thresholdDelta) && (!(t2.params.mousewheel.thresholdTime && l() - p2 < t2.params.mousewheel.thresholdTime) && (e3.delta >= 6 && l() - p2 < 60 || (e3.direction < 0 ? t2.isEnd && !t2.params.loop || t2.animating || (t2.slideNext(), i2("scroll", e3.raw)) : t2.isBeginning && !t2.params.loop || t2.animating || (t2.slidePrev(), i2("scroll", e3.raw)), p2 = new o2.Date().getTime(), false)));
        }
        function g2(e3) {
          let s3 = e3, a3 = true;
          if (!t2.enabled)
            return;
          const r2 = t2.params.mousewheel;
          t2.params.cssMode && s3.preventDefault();
          let o3 = t2.el;
          "container" !== t2.params.mousewheel.eventsTarget && (o3 = document.querySelector(t2.params.mousewheel.eventsTarget));
          const p3 = o3 && o3.contains(s3.target);
          if (!t2.mouseEntered && !p3 && !r2.releaseOnEdges)
            return true;
          s3.originalEvent && (s3 = s3.originalEvent);
          let m3 = 0;
          const h3 = t2.rtlTranslate ? -1 : 1, g3 = function(e4) {
            let t3 = 0, s4 = 0, a4 = 0, i3 = 0;
            return "detail" in e4 && (s4 = e4.detail), "wheelDelta" in e4 && (s4 = -e4.wheelDelta / 120), "wheelDeltaY" in e4 && (s4 = -e4.wheelDeltaY / 120), "wheelDeltaX" in e4 && (t3 = -e4.wheelDeltaX / 120), "axis" in e4 && e4.axis === e4.HORIZONTAL_AXIS && (t3 = s4, s4 = 0), a4 = 10 * t3, i3 = 10 * s4, "deltaY" in e4 && (i3 = e4.deltaY), "deltaX" in e4 && (a4 = e4.deltaX), e4.shiftKey && !a4 && (a4 = i3, i3 = 0), (a4 || i3) && e4.deltaMode && (1 === e4.deltaMode ? (a4 *= 40, i3 *= 40) : (a4 *= 800, i3 *= 800)), a4 && !t3 && (t3 = a4 < 1 ? -1 : 1), i3 && !s4 && (s4 = i3 < 1 ? -1 : 1), { spinX: t3, spinY: s4, pixelX: a4, pixelY: i3 };
          }(s3);
          if (r2.forceToAxis)
            if (t2.isHorizontal()) {
              if (!(Math.abs(g3.pixelX) > Math.abs(g3.pixelY)))
                return true;
              m3 = -g3.pixelX * h3;
            } else {
              if (!(Math.abs(g3.pixelY) > Math.abs(g3.pixelX)))
                return true;
              m3 = -g3.pixelY;
            }
          else
            m3 = Math.abs(g3.pixelX) > Math.abs(g3.pixelY) ? -g3.pixelX * h3 : -g3.pixelY;
          if (0 === m3)
            return true;
          r2.invert && (m3 = -m3);
          let v3 = t2.getTranslate() + m3 * r2.sensitivity;
          if (v3 >= t2.minTranslate() && (v3 = t2.minTranslate()), v3 <= t2.maxTranslate() && (v3 = t2.maxTranslate()), a3 = !!t2.params.loop || !(v3 === t2.minTranslate() || v3 === t2.maxTranslate()), a3 && t2.params.nested && s3.stopPropagation(), t2.params.freeMode && t2.params.freeMode.enabled) {
            const e4 = { time: l(), delta: Math.abs(m3), direction: Math.sign(m3) }, a4 = c2 && e4.time < c2.time + 500 && e4.delta <= c2.delta && e4.direction === c2.direction;
            if (!a4) {
              c2 = void 0;
              let l2 = t2.getTranslate() + m3 * r2.sensitivity;
              const o4 = t2.isBeginning, p4 = t2.isEnd;
              if (l2 >= t2.minTranslate() && (l2 = t2.minTranslate()), l2 <= t2.maxTranslate() && (l2 = t2.maxTranslate()), t2.setTransition(0), t2.setTranslate(l2), t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses(), (!o4 && t2.isBeginning || !p4 && t2.isEnd) && t2.updateSlidesClasses(), t2.params.loop && t2.loopFix({ direction: e4.direction < 0 ? "next" : "prev", byMousewheel: true }), t2.params.freeMode.sticky) {
                clearTimeout(d2), d2 = void 0, u2.length >= 15 && u2.shift();
                const s4 = u2.length ? u2[u2.length - 1] : void 0, a5 = u2[0];
                if (u2.push(e4), s4 && (e4.delta > s4.delta || e4.direction !== s4.direction))
                  u2.splice(0);
                else if (u2.length >= 15 && e4.time - a5.time < 500 && a5.delta - e4.delta >= 1 && e4.delta <= 6) {
                  const s5 = m3 > 0 ? 0.8 : 0.2;
                  c2 = e4, u2.splice(0), d2 = n(() => {
                    t2.slideToClosest(t2.params.speed, true, void 0, s5);
                  }, 0);
                }
                d2 || (d2 = n(() => {
                  c2 = e4, u2.splice(0), t2.slideToClosest(t2.params.speed, true, void 0, 0.5);
                }, 500));
              }
              if (a4 || i2("scroll", s3), t2.params.autoplay && t2.params.autoplayDisableOnInteraction && t2.autoplay.stop(), l2 === t2.minTranslate() || l2 === t2.maxTranslate())
                return true;
            }
          } else {
            const s4 = { time: l(), delta: Math.abs(m3), direction: Math.sign(m3), raw: e3 };
            u2.length >= 2 && u2.shift();
            const a4 = u2.length ? u2[u2.length - 1] : void 0;
            if (u2.push(s4), a4 ? (s4.direction !== a4.direction || s4.delta > a4.delta || s4.time > a4.time + 150) && f2(s4) : f2(s4), function(e4) {
              const s5 = t2.params.mousewheel;
              if (e4.direction < 0) {
                if (t2.isEnd && !t2.params.loop && s5.releaseOnEdges)
                  return true;
              } else if (t2.isBeginning && !t2.params.loop && s5.releaseOnEdges)
                return true;
              return false;
            }(s4))
              return true;
          }
          return s3.preventDefault ? s3.preventDefault() : s3.returnValue = false, false;
        }
        function v2(e3) {
          let s3 = t2.el;
          "container" !== t2.params.mousewheel.eventsTarget && (s3 = document.querySelector(t2.params.mousewheel.eventsTarget)), s3[e3]("mouseenter", m2), s3[e3]("mouseleave", h2), s3[e3]("wheel", g2);
        }
        function w2() {
          return t2.params.cssMode ? (t2.wrapperEl.removeEventListener("wheel", g2), true) : !t2.mousewheel.enabled && (v2("addEventListener"), t2.mousewheel.enabled = true, true);
        }
        function b2() {
          return t2.params.cssMode ? (t2.wrapperEl.addEventListener(event, g2), true) : !!t2.mousewheel.enabled && (v2("removeEventListener"), t2.mousewheel.enabled = false, true);
        }
        a2("init", () => {
          !t2.params.mousewheel.enabled && t2.params.cssMode && b2(), t2.params.mousewheel.enabled && w2();
        }), a2("destroy", () => {
          t2.params.cssMode && w2(), t2.mousewheel.enabled && b2();
        }), Object.assign(t2.mousewheel, { enable: w2, disable: b2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        s2({ navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), t2.navigation = { nextEl: null, prevEl: null };
        const r2 = (e3) => (Array.isArray(e3) || (e3 = [e3].filter((e4) => !!e4)), e3);
        function n2(e3) {
          let s3;
          return e3 && "string" == typeof e3 && t2.isElement && (s3 = t2.el.shadowRoot.querySelector(e3), s3) ? s3 : (e3 && ("string" == typeof e3 && (s3 = [...document.querySelectorAll(e3)]), t2.params.uniqueNavElements && "string" == typeof e3 && s3.length > 1 && 1 === t2.el.querySelectorAll(e3).length && (s3 = t2.el.querySelector(e3))), e3 && !s3 ? e3 : s3);
        }
        function l2(e3, s3) {
          const a3 = t2.params.navigation;
          (e3 = r2(e3)).forEach((e4) => {
            e4 && (e4.classList[s3 ? "add" : "remove"](...a3.disabledClass.split(" ")), "BUTTON" === e4.tagName && (e4.disabled = s3), t2.params.watchOverflow && t2.enabled && e4.classList[t2.isLocked ? "add" : "remove"](a3.lockClass));
          });
        }
        function o2() {
          const { nextEl: e3, prevEl: s3 } = t2.navigation;
          if (t2.params.loop)
            return l2(s3, false), void l2(e3, false);
          l2(s3, t2.isBeginning && !t2.params.rewind), l2(e3, t2.isEnd && !t2.params.rewind);
        }
        function d2(e3) {
          e3.preventDefault(), (!t2.isBeginning || t2.params.loop || t2.params.rewind) && (t2.slidePrev(), i2("navigationPrev"));
        }
        function c2(e3) {
          e3.preventDefault(), (!t2.isEnd || t2.params.loop || t2.params.rewind) && (t2.slideNext(), i2("navigationNext"));
        }
        function p2() {
          const e3 = t2.params.navigation;
          if (t2.params.navigation = J(t2, t2.originalParams.navigation, t2.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !e3.nextEl && !e3.prevEl)
            return;
          let s3 = n2(e3.nextEl), a3 = n2(e3.prevEl);
          Object.assign(t2.navigation, { nextEl: s3, prevEl: a3 }), s3 = r2(s3), a3 = r2(a3);
          const i3 = (s4, a4) => {
            s4 && s4.addEventListener("click", "next" === a4 ? c2 : d2), !t2.enabled && s4 && s4.classList.add(...e3.lockClass.split(" "));
          };
          s3.forEach((e4) => i3(e4, "next")), a3.forEach((e4) => i3(e4, "prev"));
        }
        function u2() {
          let { nextEl: e3, prevEl: s3 } = t2.navigation;
          e3 = r2(e3), s3 = r2(s3);
          const a3 = (e4, s4) => {
            e4.removeEventListener("click", "next" === s4 ? c2 : d2), e4.classList.remove(...t2.params.navigation.disabledClass.split(" "));
          };
          e3.forEach((e4) => a3(e4, "next")), s3.forEach((e4) => a3(e4, "prev"));
        }
        a2("init", () => {
          false === t2.params.navigation.enabled ? m2() : (p2(), o2());
        }), a2("toEdge fromEdge lock unlock", () => {
          o2();
        }), a2("destroy", () => {
          u2();
        }), a2("enable disable", () => {
          let { nextEl: e3, prevEl: s3 } = t2.navigation;
          e3 = r2(e3), s3 = r2(s3), [...e3, ...s3].filter((e4) => !!e4).forEach((e4) => e4.classList[t2.enabled ? "remove" : "add"](t2.params.navigation.lockClass));
        }), a2("click", (e3, s3) => {
          let { nextEl: a3, prevEl: n3 } = t2.navigation;
          a3 = r2(a3), n3 = r2(n3);
          const l3 = s3.target;
          if (t2.params.navigation.hideOnClick && !n3.includes(l3) && !a3.includes(l3)) {
            if (t2.pagination && t2.params.pagination && t2.params.pagination.clickable && (t2.pagination.el === l3 || t2.pagination.el.contains(l3)))
              return;
            let e4;
            a3.length ? e4 = a3[0].classList.contains(t2.params.navigation.hiddenClass) : n3.length && (e4 = n3[0].classList.contains(t2.params.navigation.hiddenClass)), i2(true === e4 ? "navigationShow" : "navigationHide"), [...a3, ...n3].filter((e5) => !!e5).forEach((e5) => e5.classList.toggle(t2.params.navigation.hiddenClass));
          }
        });
        const m2 = () => {
          t2.el.classList.add(...t2.params.navigation.navigationDisabledClass.split(" ")), u2();
        };
        Object.assign(t2.navigation, { enable: () => {
          t2.el.classList.remove(...t2.params.navigation.navigationDisabledClass.split(" ")), p2(), o2();
        }, disable: m2, update: o2, init: p2, destroy: u2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const r2 = "swiper-pagination";
        let n2;
        s2({ pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: (e3) => e3, formatFractionTotal: (e3) => e3, bulletClass: `${r2}-bullet`, bulletActiveClass: `${r2}-bullet-active`, modifierClass: `${r2}-`, currentClass: `${r2}-current`, totalClass: `${r2}-total`, hiddenClass: `${r2}-hidden`, progressbarFillClass: `${r2}-progressbar-fill`, progressbarOppositeClass: `${r2}-progressbar-opposite`, clickableClass: `${r2}-clickable`, lockClass: `${r2}-lock`, horizontalClass: `${r2}-horizontal`, verticalClass: `${r2}-vertical`, paginationDisabledClass: `${r2}-disabled` } }), t2.pagination = { el: null, bullets: [] };
        let l2 = 0;
        const o2 = (e3) => (Array.isArray(e3) || (e3 = [e3].filter((e4) => !!e4)), e3);
        function d2() {
          return !t2.params.pagination.el || !t2.pagination.el || Array.isArray(t2.pagination.el) && 0 === t2.pagination.el.length;
        }
        function c2(e3, s3) {
          const { bulletActiveClass: a3 } = t2.params.pagination;
          e3 && (e3 = e3[("prev" === s3 ? "previous" : "next") + "ElementSibling"]) && (e3.classList.add(`${a3}-${s3}`), (e3 = e3[("prev" === s3 ? "previous" : "next") + "ElementSibling"]) && e3.classList.add(`${a3}-${s3}-${s3}`));
        }
        function p2(e3) {
          if (!e3.target.matches(ee(t2.params.pagination.bulletClass)))
            return;
          e3.preventDefault();
          const s3 = b(e3.target) * t2.params.slidesPerGroup;
          t2.params.loop ? t2.slideToLoop(s3) : t2.slideTo(s3);
        }
        function u2() {
          const e3 = t2.rtl, s3 = t2.params.pagination;
          if (d2())
            return;
          let a3, r3 = t2.pagination.el;
          r3 = o2(r3);
          const p3 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.slides.length : t2.slides.length, u3 = t2.params.loop ? Math.ceil(p3 / t2.params.slidesPerGroup) : t2.snapGrid.length;
          if (a3 = t2.params.loop ? t2.params.slidesPerGroup > 1 ? Math.floor(t2.realIndex / t2.params.slidesPerGroup) : t2.realIndex : void 0 !== t2.snapIndex ? t2.snapIndex : t2.activeIndex || 0, "bullets" === s3.type && t2.pagination.bullets && t2.pagination.bullets.length > 0) {
            const i3 = t2.pagination.bullets;
            let o3, d3, p4;
            if (s3.dynamicBullets && (n2 = x(i3[0], t2.isHorizontal() ? "width" : "height", true), r3.forEach((e4) => {
              e4.style[t2.isHorizontal() ? "width" : "height"] = n2 * (s3.dynamicMainBullets + 4) + "px";
            }), s3.dynamicMainBullets > 1 && void 0 !== t2.previousIndex && (l2 += a3 - (t2.previousIndex || 0), l2 > s3.dynamicMainBullets - 1 ? l2 = s3.dynamicMainBullets - 1 : l2 < 0 && (l2 = 0)), o3 = Math.max(a3 - l2, 0), d3 = o3 + (Math.min(i3.length, s3.dynamicMainBullets) - 1), p4 = (d3 + o3) / 2), i3.forEach((e4) => {
              e4.classList.remove(...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e5) => `${s3.bulletActiveClass}${e5}`));
            }), r3.length > 1)
              i3.forEach((e4) => {
                const t3 = b(e4);
                t3 === a3 && e4.classList.add(s3.bulletActiveClass), s3.dynamicBullets && (t3 >= o3 && t3 <= d3 && e4.classList.add(`${s3.bulletActiveClass}-main`), t3 === o3 && c2(e4, "prev"), t3 === d3 && c2(e4, "next"));
              });
            else {
              const e4 = i3[a3];
              if (e4 && e4.classList.add(s3.bulletActiveClass), s3.dynamicBullets) {
                const e5 = i3[o3], t3 = i3[d3];
                for (let e6 = o3; e6 <= d3; e6 += 1)
                  i3[e6].classList.add(`${s3.bulletActiveClass}-main`);
                c2(e5, "prev"), c2(t3, "next");
              }
            }
            if (s3.dynamicBullets) {
              const a4 = Math.min(i3.length, s3.dynamicMainBullets + 4), r4 = (n2 * a4 - n2) / 2 - p4 * n2, l3 = e3 ? "right" : "left";
              i3.forEach((e4) => {
                e4.style[t2.isHorizontal() ? l3 : "top"] = `${r4}px`;
              });
            }
          }
          r3.forEach((e4, r4) => {
            if ("fraction" === s3.type && (e4.querySelectorAll(ee(s3.currentClass)).forEach((e5) => {
              e5.textContent = s3.formatFractionCurrent(a3 + 1);
            }), e4.querySelectorAll(ee(s3.totalClass)).forEach((e5) => {
              e5.textContent = s3.formatFractionTotal(u3);
            })), "progressbar" === s3.type) {
              let i3;
              i3 = s3.progressbarOpposite ? t2.isHorizontal() ? "vertical" : "horizontal" : t2.isHorizontal() ? "horizontal" : "vertical";
              const r5 = (a3 + 1) / u3;
              let n3 = 1, l3 = 1;
              "horizontal" === i3 ? n3 = r5 : l3 = r5, e4.querySelectorAll(ee(s3.progressbarFillClass)).forEach((e5) => {
                e5.style.transform = `translate3d(0,0,0) scaleX(${n3}) scaleY(${l3})`, e5.style.transitionDuration = `${t2.params.speed}ms`;
              });
            }
            "custom" === s3.type && s3.renderCustom ? (e4.innerHTML = s3.renderCustom(t2, a3 + 1, u3), 0 === r4 && i2("paginationRender", e4)) : (0 === r4 && i2("paginationRender", e4), i2("paginationUpdate", e4)), t2.params.watchOverflow && t2.enabled && e4.classList[t2.isLocked ? "add" : "remove"](s3.lockClass);
          });
        }
        function m2() {
          const e3 = t2.params.pagination;
          if (d2())
            return;
          const s3 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.slides.length : t2.slides.length;
          let a3 = t2.pagination.el;
          a3 = o2(a3);
          let r3 = "";
          if ("bullets" === e3.type) {
            let a4 = t2.params.loop ? Math.ceil(s3 / t2.params.slidesPerGroup) : t2.snapGrid.length;
            t2.params.freeMode && t2.params.freeMode.enabled && a4 > s3 && (a4 = s3);
            for (let s4 = 0; s4 < a4; s4 += 1)
              e3.renderBullet ? r3 += e3.renderBullet.call(t2, s4, e3.bulletClass) : r3 += `<${e3.bulletElement} class="${e3.bulletClass}"></${e3.bulletElement}>`;
          }
          "fraction" === e3.type && (r3 = e3.renderFraction ? e3.renderFraction.call(t2, e3.currentClass, e3.totalClass) : `<span class="${e3.currentClass}"></span> / <span class="${e3.totalClass}"></span>`), "progressbar" === e3.type && (r3 = e3.renderProgressbar ? e3.renderProgressbar.call(t2, e3.progressbarFillClass) : `<span class="${e3.progressbarFillClass}"></span>`), a3.forEach((s4) => {
            "custom" !== e3.type && (s4.innerHTML = r3 || ""), "bullets" === e3.type && (t2.pagination.bullets = [...s4.querySelectorAll(ee(e3.bulletClass))]);
          }), "custom" !== e3.type && i2("paginationRender", a3[0]);
        }
        function h2() {
          t2.params.pagination = J(t2, t2.originalParams.pagination, t2.params.pagination, { el: "swiper-pagination" });
          const e3 = t2.params.pagination;
          if (!e3.el)
            return;
          let s3;
          "string" == typeof e3.el && t2.isElement && (s3 = t2.el.shadowRoot.querySelector(e3.el)), s3 || "string" != typeof e3.el || (s3 = [...document.querySelectorAll(e3.el)]), s3 || (s3 = e3.el), s3 && 0 !== s3.length && (t2.params.uniqueNavElements && "string" == typeof e3.el && Array.isArray(s3) && s3.length > 1 && (s3 = [...t2.el.querySelectorAll(e3.el)], s3.length > 1 && (s3 = s3.filter((e4) => y(e4, ".swiper")[0] === t2.el)[0])), Array.isArray(s3) && 1 === s3.length && (s3 = s3[0]), Object.assign(t2.pagination, { el: s3 }), s3 = o2(s3), s3.forEach((s4) => {
            "bullets" === e3.type && e3.clickable && s4.classList.add(e3.clickableClass), s4.classList.add(e3.modifierClass + e3.type), s4.classList.add(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), "bullets" === e3.type && e3.dynamicBullets && (s4.classList.add(`${e3.modifierClass}${e3.type}-dynamic`), l2 = 0, e3.dynamicMainBullets < 1 && (e3.dynamicMainBullets = 1)), "progressbar" === e3.type && e3.progressbarOpposite && s4.classList.add(e3.progressbarOppositeClass), e3.clickable && s4.addEventListener("click", p2), t2.enabled || s4.classList.add(e3.lockClass);
          }));
        }
        function f2() {
          const e3 = t2.params.pagination;
          if (d2())
            return;
          let s3 = t2.pagination.el;
          s3 && (s3 = o2(s3), s3.forEach((s4) => {
            s4.classList.remove(e3.hiddenClass), s4.classList.remove(e3.modifierClass + e3.type), s4.classList.remove(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), e3.clickable && s4.removeEventListener("click", p2);
          })), t2.pagination.bullets && t2.pagination.bullets.forEach((t3) => t3.classList.remove(e3.bulletActiveClass));
        }
        a2("init", () => {
          false === t2.params.pagination.enabled ? g2() : (h2(), m2(), u2());
        }), a2("activeIndexChange", () => {
          void 0 === t2.snapIndex && u2();
        }), a2("snapIndexChange", () => {
          u2();
        }), a2("snapGridLengthChange", () => {
          m2(), u2();
        }), a2("destroy", () => {
          f2();
        }), a2("enable disable", () => {
          let { el: e3 } = t2.pagination;
          e3 && (e3 = o2(e3), e3.forEach((e4) => e4.classList[t2.enabled ? "remove" : "add"](t2.params.pagination.lockClass)));
        }), a2("lock unlock", () => {
          u2();
        }), a2("click", (e3, s3) => {
          const a3 = s3.target;
          let { el: r3 } = t2.pagination;
          if (Array.isArray(r3) || (r3 = [r3].filter((e4) => !!e4)), t2.params.pagination.el && t2.params.pagination.hideOnClick && r3 && r3.length > 0 && !a3.classList.contains(t2.params.pagination.bulletClass)) {
            if (t2.navigation && (t2.navigation.nextEl && a3 === t2.navigation.nextEl || t2.navigation.prevEl && a3 === t2.navigation.prevEl))
              return;
            const e4 = r3[0].classList.contains(t2.params.pagination.hiddenClass);
            i2(true === e4 ? "paginationShow" : "paginationHide"), r3.forEach((e5) => e5.classList.toggle(t2.params.pagination.hiddenClass));
          }
        });
        const g2 = () => {
          t2.el.classList.add(t2.params.pagination.paginationDisabledClass);
          let { el: e3 } = t2.pagination;
          e3 && (e3 = o2(e3), e3.forEach((e4) => e4.classList.add(t2.params.pagination.paginationDisabledClass))), f2();
        };
        Object.assign(t2.pagination, { enable: () => {
          t2.el.classList.remove(t2.params.pagination.paginationDisabledClass);
          let { el: e3 } = t2.pagination;
          e3 && (e3 = o2(e3), e3.forEach((e4) => e4.classList.remove(t2.params.pagination.paginationDisabledClass))), h2(), m2(), u2();
        }, disable: g2, render: m2, update: u2, init: h2, destroy: f2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: i2, emit: r2 } = e2;
        const l2 = a();
        let o2, d2, c2, p2, u2 = false, m2 = null, h2 = null;
        function f2() {
          if (!t2.params.scrollbar.el || !t2.scrollbar.el)
            return;
          const { scrollbar: e3, rtlTranslate: s3 } = t2, { dragEl: a2, el: i3 } = e3, r3 = t2.params.scrollbar, n2 = t2.params.loop ? t2.progressLoop : t2.progress;
          let l3 = d2, o3 = (c2 - d2) * n2;
          s3 ? (o3 = -o3, o3 > 0 ? (l3 = d2 - o3, o3 = 0) : -o3 + d2 > c2 && (l3 = c2 + o3)) : o3 < 0 ? (l3 = d2 + o3, o3 = 0) : o3 + d2 > c2 && (l3 = c2 - o3), t2.isHorizontal() ? (a2.style.transform = `translate3d(${o3}px, 0, 0)`, a2.style.width = `${l3}px`) : (a2.style.transform = `translate3d(0px, ${o3}px, 0)`, a2.style.height = `${l3}px`), r3.hide && (clearTimeout(m2), i3.style.opacity = 1, m2 = setTimeout(() => {
            i3.style.opacity = 0, i3.style.transitionDuration = "400ms";
          }, 1e3));
        }
        function w2() {
          if (!t2.params.scrollbar.el || !t2.scrollbar.el)
            return;
          const { scrollbar: e3 } = t2, { dragEl: s3, el: a2 } = e3;
          s3.style.width = "", s3.style.height = "", c2 = t2.isHorizontal() ? a2.offsetWidth : a2.offsetHeight, p2 = t2.size / (t2.virtualSize + t2.params.slidesOffsetBefore - (t2.params.centeredSlides ? t2.snapGrid[0] : 0)), d2 = "auto" === t2.params.scrollbar.dragSize ? c2 * p2 : parseInt(t2.params.scrollbar.dragSize, 10), t2.isHorizontal() ? s3.style.width = `${d2}px` : s3.style.height = `${d2}px`, a2.style.display = p2 >= 1 ? "none" : "", t2.params.scrollbar.hide && (a2.style.opacity = 0), t2.params.watchOverflow && t2.enabled && e3.el.classList[t2.isLocked ? "add" : "remove"](t2.params.scrollbar.lockClass);
        }
        function b2(e3) {
          return t2.isHorizontal() ? e3.clientX : e3.clientY;
        }
        function y2(e3) {
          const { scrollbar: s3, rtlTranslate: a2 } = t2, { el: i3 } = s3;
          let r3;
          r3 = (b2(e3) - v(i3)[t2.isHorizontal() ? "left" : "top"] - (null !== o2 ? o2 : d2 / 2)) / (c2 - d2), r3 = Math.max(Math.min(r3, 1), 0), a2 && (r3 = 1 - r3);
          const n2 = t2.minTranslate() + (t2.maxTranslate() - t2.minTranslate()) * r3;
          t2.updateProgress(n2), t2.setTranslate(n2), t2.updateActiveIndex(), t2.updateSlidesClasses();
        }
        function E2(e3) {
          const s3 = t2.params.scrollbar, { scrollbar: a2, wrapperEl: i3 } = t2, { el: n2, dragEl: l3 } = a2;
          u2 = true, o2 = e3.target === l3 ? b2(e3) - e3.target.getBoundingClientRect()[t2.isHorizontal() ? "left" : "top"] : null, e3.preventDefault(), e3.stopPropagation(), i3.style.transitionDuration = "100ms", l3.style.transitionDuration = "100ms", y2(e3), clearTimeout(h2), n2.style.transitionDuration = "0ms", s3.hide && (n2.style.opacity = 1), t2.params.cssMode && (t2.wrapperEl.style["scroll-snap-type"] = "none"), r2("scrollbarDragStart", e3);
        }
        function x2(e3) {
          const { scrollbar: s3, wrapperEl: a2 } = t2, { el: i3, dragEl: n2 } = s3;
          u2 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, y2(e3), a2.style.transitionDuration = "0ms", i3.style.transitionDuration = "0ms", n2.style.transitionDuration = "0ms", r2("scrollbarDragMove", e3));
        }
        function S2(e3) {
          const s3 = t2.params.scrollbar, { scrollbar: a2, wrapperEl: i3 } = t2, { el: l3 } = a2;
          u2 && (u2 = false, t2.params.cssMode && (t2.wrapperEl.style["scroll-snap-type"] = "", i3.style.transitionDuration = ""), s3.hide && (clearTimeout(h2), h2 = n(() => {
            l3.style.opacity = 0, l3.style.transitionDuration = "400ms";
          }, 1e3)), r2("scrollbarDragEnd", e3), s3.snapOnRelease && t2.slideToClosest());
        }
        function T2(e3) {
          const { scrollbar: s3, params: a2 } = t2, i3 = s3.el;
          if (!i3)
            return;
          const r3 = i3, n2 = !!a2.passiveListeners && { passive: false, capture: false }, o3 = !!a2.passiveListeners && { passive: true, capture: false };
          if (!r3)
            return;
          const d3 = "on" === e3 ? "addEventListener" : "removeEventListener";
          r3[d3]("pointerdown", E2, n2), l2[d3]("pointermove", x2, n2), l2[d3]("pointerup", S2, o3);
        }
        function M2() {
          const { scrollbar: e3, el: s3 } = t2;
          t2.params.scrollbar = J(t2, t2.originalParams.scrollbar, t2.params.scrollbar, { el: "swiper-scrollbar" });
          const a2 = t2.params.scrollbar;
          if (!a2.el)
            return;
          let i3, r3;
          "string" == typeof a2.el && t2.isElement && (i3 = t2.el.shadowRoot.querySelector(a2.el)), i3 || "string" != typeof a2.el ? i3 || (i3 = a2.el) : i3 = l2.querySelectorAll(a2.el), t2.params.uniqueNavElements && "string" == typeof a2.el && i3.length > 1 && 1 === s3.querySelectorAll(a2.el).length && (i3 = s3.querySelector(a2.el)), i3.length > 0 && (i3 = i3[0]), i3.classList.add(t2.isHorizontal() ? a2.horizontalClass : a2.verticalClass), i3 && (i3.querySelector(`.${t2.params.scrollbar.dragClass}`), r3 || (r3 = g("div", t2.params.scrollbar.dragClass), i3.append(r3))), Object.assign(e3, { el: i3, dragEl: r3 }), a2.draggable && t2.params.scrollbar.el && t2.scrollbar.el && T2("on"), i3 && i3.classList[t2.enabled ? "remove" : "add"](t2.params.scrollbar.lockClass);
        }
        function C2() {
          const e3 = t2.params.scrollbar, s3 = t2.scrollbar.el;
          s3 && s3.classList.remove(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), t2.params.scrollbar.el && t2.scrollbar.el && T2("off");
        }
        s2({ scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), t2.scrollbar = { el: null, dragEl: null }, i2("init", () => {
          false === t2.params.scrollbar.enabled ? P2() : (M2(), w2(), f2());
        }), i2("update resize observerUpdate lock unlock", () => {
          w2();
        }), i2("setTranslate", () => {
          f2();
        }), i2("setTransition", (e3, s3) => {
          !function(e4) {
            t2.params.scrollbar.el && t2.scrollbar.el && (t2.scrollbar.dragEl.style.transitionDuration = `${e4}ms`);
          }(s3);
        }), i2("enable disable", () => {
          const { el: e3 } = t2.scrollbar;
          e3 && e3.classList[t2.enabled ? "remove" : "add"](t2.params.scrollbar.lockClass);
        }), i2("destroy", () => {
          C2();
        });
        const P2 = () => {
          t2.el.classList.add(t2.params.scrollbar.scrollbarDisabledClass), t2.scrollbar.el && t2.scrollbar.el.classList.add(t2.params.scrollbar.scrollbarDisabledClass), C2();
        };
        Object.assign(t2.scrollbar, { enable: () => {
          t2.el.classList.remove(t2.params.scrollbar.scrollbarDisabledClass), t2.scrollbar.el && t2.scrollbar.el.classList.remove(t2.params.scrollbar.scrollbarDisabledClass), M2(), w2(), f2();
        }, disable: P2, updateSize: w2, setTranslate: f2, init: M2, destroy: C2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ parallax: { enabled: false } });
        const i2 = (e3, s3) => {
          const { rtl: a3 } = t2, i3 = a3 ? -1 : 1, r3 = e3.getAttribute("data-swiper-parallax") || "0";
          let n2 = e3.getAttribute("data-swiper-parallax-x"), l2 = e3.getAttribute("data-swiper-parallax-y");
          const o2 = e3.getAttribute("data-swiper-parallax-scale"), d2 = e3.getAttribute("data-swiper-parallax-opacity"), c2 = e3.getAttribute("data-swiper-parallax-rotate");
          if (n2 || l2 ? (n2 = n2 || "0", l2 = l2 || "0") : t2.isHorizontal() ? (n2 = r3, l2 = "0") : (l2 = r3, n2 = "0"), n2 = n2.indexOf("%") >= 0 ? parseInt(n2, 10) * s3 * i3 + "%" : n2 * s3 * i3 + "px", l2 = l2.indexOf("%") >= 0 ? parseInt(l2, 10) * s3 + "%" : l2 * s3 + "px", null != d2) {
            const t3 = d2 - (d2 - 1) * (1 - Math.abs(s3));
            e3.style.opacity = t3;
          }
          let p2 = `translate3d(${n2}, ${l2}, 0px)`;
          if (null != o2) {
            p2 += ` scale(${o2 - (o2 - 1) * (1 - Math.abs(s3))})`;
          }
          if (c2 && null != c2) {
            p2 += ` rotate(${c2 * s3 * -1}deg)`;
          }
          e3.style.transform = p2;
        }, r2 = () => {
          const { el: e3, slides: s3, progress: a3, snapGrid: r3 } = t2;
          f(e3, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e4) => {
            i2(e4, a3);
          }), s3.forEach((e4, s4) => {
            let n2 = e4.progress;
            t2.params.slidesPerGroup > 1 && "auto" !== t2.params.slidesPerView && (n2 += Math.ceil(s4 / 2) - a3 * (r3.length - 1)), n2 = Math.min(Math.max(n2, -1), 1), e4.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e5) => {
              i2(e5, n2);
            });
          });
        };
        a2("beforeInit", () => {
          t2.params.parallax.enabled && (t2.params.watchSlidesProgress = true, t2.originalParams.watchSlidesProgress = true);
        }), a2("init", () => {
          t2.params.parallax.enabled && r2();
        }), a2("setTranslate", () => {
          t2.params.parallax.enabled && r2();
        }), a2("setTransition", (e3, s3) => {
          t2.params.parallax.enabled && function(e4) {
            void 0 === e4 && (e4 = t2.params.speed);
            const { el: s4 } = t2;
            s4.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((t3) => {
              let s5 = parseInt(t3.getAttribute("data-swiper-parallax-duration"), 10) || e4;
              0 === e4 && (s5 = 0), t3.style.transitionDuration = `${s5}ms`;
            });
          }(s3);
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const n2 = r();
        s2({ zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), t2.zoom = { enabled: false };
        let l2, d2, c2 = 1, p2 = false;
        const u2 = [], m2 = { slideEl: void 0, slideWidth: void 0, slideHeight: void 0, imageEl: void 0, imageWrapEl: void 0, maxRatio: 3 }, h2 = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, g2 = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
        let w2 = 1;
        function b2() {
          if (u2.length < 2)
            return 1;
          const e3 = u2[0].pageX, t3 = u2[0].pageY, s3 = u2[1].pageX, a3 = u2[1].pageY;
          return Math.sqrt((s3 - e3) ** 2 + (a3 - t3) ** 2);
        }
        function E2(e3) {
          const s3 = t2.isElement ? "swiper-slide" : `.${t2.params.slideClass}`;
          return !!e3.target.matches(s3) || t2.slides.filter((t3) => t3.contains(e3.target)).length > 0;
        }
        function x2(e3) {
          if (!E2(e3))
            return;
          const s3 = t2.params.zoom;
          if (l2 = false, d2 = false, u2.push(e3), !(u2.length < 2)) {
            if (l2 = true, m2.scaleStart = b2(), !m2.slideEl) {
              m2.slideEl = e3.target.closest(`.${t2.params.slideClass}, swiper-slide`), m2.slideEl || (m2.slideEl = t2.slides[t2.activeIndex]);
              let a3 = m2.slideEl.querySelector(`.${s3.containerClass}`);
              if (a3 && (a3 = a3.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m2.imageEl = a3, m2.imageWrapEl = a3 ? y(m2.imageEl, `.${s3.containerClass}`)[0] : void 0, !m2.imageWrapEl)
                return void (m2.imageEl = void 0);
              m2.maxRatio = m2.imageWrapEl.getAttribute("data-swiper-zoom") || s3.maxRatio;
            }
            m2.imageEl && (m2.imageEl.style.transitionDuration = "0ms"), p2 = true;
          }
        }
        function S2(e3) {
          if (!E2(e3))
            return;
          const s3 = t2.params.zoom, a3 = t2.zoom, i3 = u2.findIndex((t3) => t3.pointerId === e3.pointerId);
          i3 >= 0 && (u2[i3] = e3), u2.length < 2 || (d2 = true, m2.scaleMove = b2(), m2.imageEl && (a3.scale = m2.scaleMove / m2.scaleStart * c2, a3.scale > m2.maxRatio && (a3.scale = m2.maxRatio - 1 + (a3.scale - m2.maxRatio + 1) ** 0.5), a3.scale < s3.minRatio && (a3.scale = s3.minRatio + 1 - (s3.minRatio - a3.scale + 1) ** 0.5), m2.imageEl.style.transform = `translate3d(0,0,0) scale(${a3.scale})`));
        }
        function T2(e3) {
          if (!E2(e3))
            return;
          const s3 = t2.params.zoom, a3 = t2.zoom, i3 = u2.findIndex((t3) => t3.pointerId === e3.pointerId);
          i3 >= 0 && u2.splice(i3, 1), l2 && d2 && (l2 = false, d2 = false, m2.imageE && (a3.scale = Math.max(Math.min(a3.scale, m2.maxRatio), s3.minRatio), m2.imageEl.style.transitionDuration = `${t2.params.speed}ms`, m2.imageEl.style.transform = `translate3d(0,0,0) scale(${a3.scale})`, c2 = a3.scale, p2 = false, 1 === a3.scale && (m2.slideEl = void 0)));
        }
        function M2(e3) {
          if (!E2(e3) || !function(e4) {
            const s4 = `.${t2.params.zoom.containerClass}`;
            return !!e4.target.matches(s4) || [...t2.el.querySelectorAll(s4)].filter((t3) => t3.contains(e4.target)).length > 0;
          }(e3))
            return;
          const s3 = t2.zoom;
          if (!m2.imageEl)
            return;
          if (t2.allowClick = false, !h2.isTouched || !m2.slideEl)
            return;
          h2.isMoved || (h2.width = m2.imageEl.offsetWidth, h2.height = m2.imageEl.offsetHeight, h2.startX = o(m2.imageWrapEl, "x") || 0, h2.startY = o(m2.imageWrapEl, "y") || 0, m2.slideWidth = m2.slideEl.offsetWidth, m2.slideHeight = m2.slideEl.offsetHeight, m2.imageWrapEl.style.transitionDuration = "0ms");
          const a3 = h2.width * s3.scale, i3 = h2.height * s3.scale;
          if (!(a3 < m2.slideWidth && i3 < m2.slideHeight)) {
            if (h2.minX = Math.min(m2.slideWidth / 2 - a3 / 2, 0), h2.maxX = -h2.minX, h2.minY = Math.min(m2.slideHeight / 2 - i3 / 2, 0), h2.maxY = -h2.minY, h2.touchesCurrent.x = u2.length > 0 ? u2[0].pageX : e3.pageX, h2.touchesCurrent.y = u2.length > 0 ? u2[0].pageY : e3.pageY, !h2.isMoved && !p2) {
              if (t2.isHorizontal() && (Math.floor(h2.minX) === Math.floor(h2.startX) && h2.touchesCurrent.x < h2.touchesStart.x || Math.floor(h2.maxX) === Math.floor(h2.startX) && h2.touchesCurrent.x > h2.touchesStart.x))
                return void (h2.isTouched = false);
              if (!t2.isHorizontal() && (Math.floor(h2.minY) === Math.floor(h2.startY) && h2.touchesCurrent.y < h2.touchesStart.y || Math.floor(h2.maxY) === Math.floor(h2.startY) && h2.touchesCurrent.y > h2.touchesStart.y))
                return void (h2.isTouched = false);
            }
            e3.cancelable && e3.preventDefault(), e3.stopPropagation(), h2.isMoved = true, h2.currentX = h2.touchesCurrent.x - h2.touchesStart.x + h2.startX, h2.currentY = h2.touchesCurrent.y - h2.touchesStart.y + h2.startY, h2.currentX < h2.minX && (h2.currentX = h2.minX + 1 - (h2.minX - h2.currentX + 1) ** 0.8), h2.currentX > h2.maxX && (h2.currentX = h2.maxX - 1 + (h2.currentX - h2.maxX + 1) ** 0.8), h2.currentY < h2.minY && (h2.currentY = h2.minY + 1 - (h2.minY - h2.currentY + 1) ** 0.8), h2.currentY > h2.maxY && (h2.currentY = h2.maxY - 1 + (h2.currentY - h2.maxY + 1) ** 0.8), g2.prevPositionX || (g2.prevPositionX = h2.touchesCurrent.x), g2.prevPositionY || (g2.prevPositionY = h2.touchesCurrent.y), g2.prevTime || (g2.prevTime = Date.now()), g2.x = (h2.touchesCurrent.x - g2.prevPositionX) / (Date.now() - g2.prevTime) / 2, g2.y = (h2.touchesCurrent.y - g2.prevPositionY) / (Date.now() - g2.prevTime) / 2, Math.abs(h2.touchesCurrent.x - g2.prevPositionX) < 2 && (g2.x = 0), Math.abs(h2.touchesCurrent.y - g2.prevPositionY) < 2 && (g2.y = 0), g2.prevPositionX = h2.touchesCurrent.x, g2.prevPositionY = h2.touchesCurrent.y, g2.prevTime = Date.now(), m2.imageWrapEl.style.transform = `translate3d(${h2.currentX}px, ${h2.currentY}px,0)`;
          }
        }
        function C2() {
          const e3 = t2.zoom;
          m2.slideEl && t2.previousIndex !== t2.activeIndex && (m2.imageEl && (m2.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m2.imageWrapEl && (m2.imageWrapEl.style.transform = "translate3d(0,0,0)"), e3.scale = 1, c2 = 1, m2.slideEl = void 0, m2.imageEl = void 0, m2.imageWrapEl = void 0);
        }
        function P2(e3) {
          const s3 = t2.zoom, a3 = t2.params.zoom;
          if (!m2.slideEl) {
            e3 && e3.target && (m2.slideEl = e3.target.closest(`.${t2.params.slideClass}, swiper-slide`)), m2.slideEl || (t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? m2.slideEl = f(t2.slidesEl, `.${t2.params.slideActiveClass}`)[0] : m2.slideEl = t2.slides[t2.activeIndex]);
            let s4 = m2.slideEl.querySelector(`.${a3.containerClass}`);
            s4 && (s4 = s4.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m2.imageEl = s4, m2.imageWrapEl = s4 ? y(m2.imageEl, `.${a3.containerClass}`)[0] : void 0;
          }
          if (!m2.imageEl || !m2.imageWrapEl)
            return;
          let i3, r2, l3, o2, d3, p3, u3, g3, w3, b3, E3, x3, S3, T3, M3, C3, P3, L3;
          t2.params.cssMode && (t2.wrapperEl.style.overflow = "hidden", t2.wrapperEl.style.touchAction = "none"), m2.slideEl.classList.add(`${a3.zoomedSlideClass}`), void 0 === h2.touchesStart.x && e3 ? (i3 = e3.pageX, r2 = e3.pageY) : (i3 = h2.touchesStart.x, r2 = h2.touchesStart.y);
          const A3 = "number" == typeof e3 ? e3 : null;
          1 === c2 && A3 && (i3 = void 0, r2 = void 0), s3.scale = A3 || m2.imageWrapEl.getAttribute("data-swiper-zoom") || a3.maxRatio, c2 = A3 || m2.imageWrapEl.getAttribute("data-swiper-zoom") || a3.maxRatio, !e3 || 1 === c2 && A3 ? (u3 = 0, g3 = 0) : (P3 = m2.slideEl.offsetWidth, L3 = m2.slideEl.offsetHeight, l3 = v(m2.slideEl).left + n2.scrollX, o2 = v(m2.slideEl).top + n2.scrollY, d3 = l3 + P3 / 2 - i3, p3 = o2 + L3 / 2 - r2, w3 = m2.imageEl.offsetWidth, b3 = m2.imageEl.offsetHeight, E3 = w3 * s3.scale, x3 = b3 * s3.scale, S3 = Math.min(P3 / 2 - E3 / 2, 0), T3 = Math.min(L3 / 2 - x3 / 2, 0), M3 = -S3, C3 = -T3, u3 = d3 * s3.scale, g3 = p3 * s3.scale, u3 < S3 && (u3 = S3), u3 > M3 && (u3 = M3), g3 < T3 && (g3 = T3), g3 > C3 && (g3 = C3)), m2.imageWrapEl.style.transitionDuration = "300ms", m2.imageWrapEl.style.transform = `translate3d(${u3}px, ${g3}px,0)`, m2.imageEl.style.transitionDuration = "300ms", m2.imageEl.style.transform = `translate3d(0,0,0) scale(${s3.scale})`;
        }
        function L2() {
          const e3 = t2.zoom, s3 = t2.params.zoom;
          if (!m2.slideEl) {
            t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? m2.slideEl = f(t2.slidesEl, `.${t2.params.slideActiveClass}`)[0] : m2.slideEl = t2.slides[t2.activeIndex];
            let e4 = m2.slideEl.querySelector(`.${s3.containerClass}`);
            e4 && (e4 = e4.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m2.imageEl = e4, m2.imageWrapEl = e4 ? y(m2.imageEl, `.${s3.containerClass}`)[0] : void 0;
          }
          m2.imageEl && m2.imageWrapEl && (t2.params.cssMode && (t2.wrapperEl.style.overflow = "", t2.wrapperEl.style.touchAction = ""), e3.scale = 1, c2 = 1, m2.imageWrapEl.style.transitionDuration = "300ms", m2.imageWrapEl.style.transform = "translate3d(0,0,0)", m2.imageEl.style.transitionDuration = "300ms", m2.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m2.slideEl.classList.remove(`${s3.zoomedSlideClass}`), m2.slideEl = void 0);
        }
        function A2(e3) {
          const s3 = t2.zoom;
          s3.scale && 1 !== s3.scale ? L2() : P2(e3);
        }
        function z2() {
          return { passiveListener: !!t2.params.passiveListeners && { passive: true, capture: false }, activeListenerWithCapture: !t2.params.passiveListeners || { passive: false, capture: true } };
        }
        function k2() {
          const e3 = t2.zoom;
          if (e3.enabled)
            return;
          e3.enabled = true;
          const { passiveListener: s3, activeListenerWithCapture: a3 } = z2();
          t2.wrapperEl.addEventListener("pointerdown", x2, s3), t2.wrapperEl.addEventListener("pointermove", S2, a3), ["pointerup", "pointercancel"].forEach((e4) => {
            t2.wrapperEl.addEventListener(e4, T2, s3);
          }), t2.wrapperEl.addEventListener("pointermove", M2, a3);
        }
        function $2() {
          const e3 = t2.zoom;
          if (!e3.enabled)
            return;
          e3.enabled = false;
          const { passiveListener: s3, activeListenerWithCapture: a3 } = z2();
          t2.wrapperEl.removeEventListener("pointerdown", x2, s3), t2.wrapperEl.removeEventListener("pointermove", S2, a3), ["pointerup", "pointercancel"].forEach((e4) => {
            t2.wrapperEl.removeEventListener(e4, T2, s3);
          }), t2.wrapperEl.removeEventListener("pointermove", M2, a3);
        }
        Object.defineProperty(t2.zoom, "scale", { get: () => w2, set(e3) {
          if (w2 !== e3) {
            const t3 = m2.imageEl, s3 = m2.slideEl;
            i2("zoomChange", e3, t3, s3);
          }
          w2 = e3;
        } }), a2("init", () => {
          t2.params.zoom.enabled && k2();
        }), a2("destroy", () => {
          $2();
        }), a2("touchStart", (e3, s3) => {
          t2.zoom.enabled && function(e4) {
            const s4 = t2.device;
            m2.imageEl && (h2.isTouched || (s4.android && e4.cancelable && e4.preventDefault(), h2.isTouched = true, h2.touchesStart.x = e4.pageX, h2.touchesStart.y = e4.pageY));
          }(s3);
        }), a2("touchEnd", (e3, s3) => {
          t2.zoom.enabled && function() {
            const e4 = t2.zoom;
            if (!m2.imageEl)
              return;
            if (!h2.isTouched || !h2.isMoved)
              return h2.isTouched = false, void (h2.isMoved = false);
            h2.isTouched = false, h2.isMoved = false;
            let s4 = 300, a3 = 300;
            const i3 = g2.x * s4, r2 = h2.currentX + i3, n3 = g2.y * a3, l3 = h2.currentY + n3;
            0 !== g2.x && (s4 = Math.abs((r2 - h2.currentX) / g2.x)), 0 !== g2.y && (a3 = Math.abs((l3 - h2.currentY) / g2.y));
            const o2 = Math.max(s4, a3);
            h2.currentX = r2, h2.currentY = l3;
            const d3 = h2.width * e4.scale, c3 = h2.height * e4.scale;
            h2.minX = Math.min(m2.slideWidth / 2 - d3 / 2, 0), h2.maxX = -h2.minX, h2.minY = Math.min(m2.slideHeight / 2 - c3 / 2, 0), h2.maxY = -h2.minY, h2.currentX = Math.max(Math.min(h2.currentX, h2.maxX), h2.minX), h2.currentY = Math.max(Math.min(h2.currentY, h2.maxY), h2.minY), m2.imageWrapEl.style.transitionDuration = `${o2}ms`, m2.imageWrapEl.style.transform = `translate3d(${h2.currentX}px, ${h2.currentY}px,0)`;
          }();
        }), a2("doubleTap", (e3, s3) => {
          !t2.animating && t2.params.zoom.enabled && t2.zoom.enabled && t2.params.zoom.toggle && A2(s3);
        }), a2("transitionEnd", () => {
          t2.zoom.enabled && t2.params.zoom.enabled && C2();
        }), a2("slideChange", () => {
          t2.zoom.enabled && t2.params.zoom.enabled && t2.params.cssMode && C2();
        }), Object.assign(t2.zoom, { enable: k2, disable: $2, in: P2, out: L2, toggle: A2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        function i2(e3, t3) {
          const s3 = function() {
            let e4, t4, s4;
            return (a4, i4) => {
              for (t4 = -1, e4 = a4.length; e4 - t4 > 1; )
                s4 = e4 + t4 >> 1, a4[s4] <= i4 ? t4 = s4 : e4 = s4;
              return e4;
            };
          }();
          let a3, i3;
          return this.x = e3, this.y = t3, this.lastIndex = e3.length - 1, this.interpolate = function(e4) {
            return e4 ? (i3 = s3(this.x, e4), a3 = i3 - 1, (e4 - this.x[a3]) * (this.y[i3] - this.y[a3]) / (this.x[i3] - this.x[a3]) + this.y[a3]) : 0;
          }, this;
        }
        function r2() {
          t2.controller.control && t2.controller.spline && (t2.controller.spline = void 0, delete t2.controller.spline);
        }
        s2({ controller: { control: void 0, inverse: false, by: "slide" } }), t2.controller = { control: void 0 }, a2("beforeInit", () => {
          if ("undefined" != typeof window && ("string" == typeof t2.params.controller.control || t2.params.controller.control instanceof HTMLElement)) {
            const e3 = document.querySelector(t2.params.controller.control);
            if (e3 && e3.swiper)
              t2.controller.control = e3.swiper;
            else if (e3) {
              const s3 = (a3) => {
                t2.controller.control = a3.detail[0], t2.update(), e3.removeEventListener("init", s3);
              };
              e3.addEventListener("init", s3);
            }
          } else
            t2.controller.control = t2.params.controller.control;
        }), a2("update", () => {
          r2();
        }), a2("resize", () => {
          r2();
        }), a2("observerUpdate", () => {
          r2();
        }), a2("setTranslate", (e3, s3, a3) => {
          t2.controller.control && t2.controller.setTranslate(s3, a3);
        }), a2("setTransition", (e3, s3, a3) => {
          t2.controller.control && t2.controller.setTransition(s3, a3);
        }), Object.assign(t2.controller, { setTranslate: function(e3, s3) {
          const a3 = t2.controller.control;
          let r3, n2;
          const l2 = t2.constructor;
          function o2(e4) {
            const s4 = t2.rtlTranslate ? -t2.translate : t2.translate;
            "slide" === t2.params.controller.by && (!function(e5) {
              t2.controller.spline || (t2.controller.spline = t2.params.loop ? new i2(t2.slidesGrid, e5.slidesGrid) : new i2(t2.snapGrid, e5.snapGrid));
            }(e4), n2 = -t2.controller.spline.interpolate(-s4)), n2 && "container" !== t2.params.controller.by || (r3 = (e4.maxTranslate() - e4.minTranslate()) / (t2.maxTranslate() - t2.minTranslate()), n2 = (s4 - t2.minTranslate()) * r3 + e4.minTranslate()), t2.params.controller.inverse && (n2 = e4.maxTranslate() - n2), e4.updateProgress(n2), e4.setTranslate(n2, t2), e4.updateActiveIndex(), e4.updateSlidesClasses();
          }
          if (Array.isArray(a3))
            for (let e4 = 0; e4 < a3.length; e4 += 1)
              a3[e4] !== s3 && a3[e4] instanceof l2 && o2(a3[e4]);
          else
            a3 instanceof l2 && s3 !== a3 && o2(a3);
        }, setTransition: function(e3, s3) {
          const a3 = t2.constructor, i3 = t2.controller.control;
          let r3;
          function l2(s4) {
            s4.setTransition(e3, t2), 0 !== e3 && (s4.transitionStart(), s4.params.autoHeight && n(() => {
              s4.updateAutoHeight();
            }), E(s4.wrapperEl, () => {
              i3 && s4.transitionEnd();
            }));
          }
          if (Array.isArray(i3))
            for (r3 = 0; r3 < i3.length; r3 += 1)
              i3[r3] !== s3 && i3[r3] instanceof a3 && l2(i3[r3]);
          else
            i3 instanceof a3 && s3 !== i3 && l2(i3);
        } });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null } }), t2.a11y = { clicked: false };
        let i2 = null;
        function r2(e3) {
          const t3 = i2;
          0 !== t3.length && (t3.innerHTML = "", t3.innerHTML = e3);
        }
        const n2 = (e3) => (Array.isArray(e3) || (e3 = [e3].filter((e4) => !!e4)), e3);
        function l2(e3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("tabIndex", "0");
          });
        }
        function o2(e3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("tabIndex", "-1");
          });
        }
        function d2(e3, t3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("role", t3);
          });
        }
        function c2(e3, t3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("aria-roledescription", t3);
          });
        }
        function p2(e3, t3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("aria-label", t3);
          });
        }
        function u2(e3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("aria-disabled", true);
          });
        }
        function m2(e3) {
          (e3 = n2(e3)).forEach((e4) => {
            e4.setAttribute("aria-disabled", false);
          });
        }
        function h2(e3) {
          if (13 !== e3.keyCode && 32 !== e3.keyCode)
            return;
          const s3 = t2.params.a11y, a3 = e3.target;
          t2.pagination && t2.pagination.el && (a3 === t2.pagination.el || t2.pagination.el.contains(e3.target)) && !e3.target.matches(ee(t2.params.pagination.bulletClass)) || (t2.navigation && t2.navigation.nextEl && a3 === t2.navigation.nextEl && (t2.isEnd && !t2.params.loop || t2.slideNext(), t2.isEnd ? r2(s3.lastSlideMessage) : r2(s3.nextSlideMessage)), t2.navigation && t2.navigation.prevEl && a3 === t2.navigation.prevEl && (t2.isBeginning && !t2.params.loop || t2.slidePrev(), t2.isBeginning ? r2(s3.firstSlideMessage) : r2(s3.prevSlideMessage)), t2.pagination && a3.matches(ee(t2.params.pagination.bulletClass)) && a3.click());
        }
        function f2() {
          return t2.pagination && t2.pagination.bullets && t2.pagination.bullets.length;
        }
        function v2() {
          return f2() && t2.params.pagination.clickable;
        }
        const w2 = (e3, t3, s3) => {
          l2(e3), "BUTTON" !== e3.tagName && (d2(e3, "button"), e3.addEventListener("keydown", h2)), p2(e3, s3), function(e4, t4) {
            (e4 = n2(e4)).forEach((e5) => {
              e5.setAttribute("aria-controls", t4);
            });
          }(e3, t3);
        }, y2 = () => {
          t2.a11y.clicked = true;
        }, E2 = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t2.destroyed || (t2.a11y.clicked = false);
            });
          });
        }, x2 = (e3) => {
          if (t2.a11y.clicked)
            return;
          const s3 = e3.target.closest(`.${t2.params.slideClass}, swiper-slide`);
          if (!s3 || !t2.slides.includes(s3))
            return;
          const a3 = t2.slides.indexOf(s3) === t2.activeIndex, i3 = t2.params.watchSlidesProgress && t2.visibleSlides && t2.visibleSlides.includes(s3);
          a3 || i3 || e3.sourceCapabilities && e3.sourceCapabilities.firesTouchEvents || (t2.isHorizontal() ? t2.el.scrollLeft = 0 : t2.el.scrollTop = 0, t2.slideTo(t2.slides.indexOf(s3), 0));
        }, S2 = () => {
          const e3 = t2.params.a11y;
          e3.itemRoleDescriptionMessage && c2(t2.slides, e3.itemRoleDescriptionMessage), e3.slideRole && d2(t2.slides, e3.slideRole);
          const s3 = t2.slides.length;
          e3.slideLabelMessage && t2.slides.forEach((a3, i3) => {
            const r3 = t2.params.loop ? parseInt(a3.getAttribute("data-swiper-slide-index"), 10) : i3;
            p2(a3, e3.slideLabelMessage.replace(/\{\{index\}\}/, r3 + 1).replace(/\{\{slidesLength\}\}/, s3));
          });
        }, T2 = () => {
          const e3 = t2.params.a11y;
          t2.el.append(i2);
          const s3 = t2.el;
          e3.containerRoleDescriptionMessage && c2(s3, e3.containerRoleDescriptionMessage), e3.containerMessage && p2(s3, e3.containerMessage);
          const a3 = t2.wrapperEl, r3 = e3.id || a3.getAttribute("id") || `swiper-wrapper-${l3 = 16, void 0 === l3 && (l3 = 16), "x".repeat(l3).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))}`;
          var l3;
          const o3 = t2.params.autoplay && t2.params.autoplay.enabled ? "off" : "polite";
          var d3;
          d3 = r3, n2(a3).forEach((e4) => {
            e4.setAttribute("id", d3);
          }), function(e4, t3) {
            (e4 = n2(e4)).forEach((e5) => {
              e5.setAttribute("aria-live", t3);
            });
          }(a3, o3), S2();
          let { nextEl: u3, prevEl: m3 } = t2.navigation ? t2.navigation : {};
          if (u3 = n2(u3), m3 = n2(m3), u3 && u3.forEach((t3) => w2(t3, r3, e3.nextSlideMessage)), m3 && m3.forEach((t3) => w2(t3, r3, e3.prevSlideMessage)), v2()) {
            (Array.isArray(t2.pagination.el) ? t2.pagination.el : [t2.pagination.el]).forEach((e4) => {
              e4.addEventListener("keydown", h2);
            });
          }
          t2.el.addEventListener("focus", x2, true), t2.el.addEventListener("pointerdown", y2, true), t2.el.addEventListener("pointerup", E2, true);
        };
        a2("beforeInit", () => {
          i2 = g("span", t2.params.a11y.notificationClass), i2.setAttribute("aria-live", "assertive"), i2.setAttribute("aria-atomic", "true"), t2.isElement && i2.setAttribute("slot", "container-end");
        }), a2("afterInit", () => {
          t2.params.a11y.enabled && T2();
        }), a2("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t2.params.a11y.enabled && S2();
        }), a2("fromEdge toEdge afterInit lock unlock", () => {
          t2.params.a11y.enabled && function() {
            if (t2.params.loop || t2.params.rewind || !t2.navigation)
              return;
            const { nextEl: e3, prevEl: s3 } = t2.navigation;
            s3 && (t2.isBeginning ? (u2(s3), o2(s3)) : (m2(s3), l2(s3))), e3 && (t2.isEnd ? (u2(e3), o2(e3)) : (m2(e3), l2(e3)));
          }();
        }), a2("paginationUpdate", () => {
          t2.params.a11y.enabled && function() {
            const e3 = t2.params.a11y;
            f2() && t2.pagination.bullets.forEach((s3) => {
              t2.params.pagination.clickable && (l2(s3), t2.params.pagination.renderBullet || (d2(s3, "button"), p2(s3, e3.paginationBulletMessage.replace(/\{\{index\}\}/, b(s3) + 1)))), s3.matches(`.${t2.params.pagination.bulletActiveClass}`) ? s3.setAttribute("aria-current", "true") : s3.removeAttribute("aria-current");
            });
          }();
        }), a2("destroy", () => {
          t2.params.a11y.enabled && function() {
            i2 && i2.length > 0 && i2.remove();
            let { nextEl: e3, prevEl: s3 } = t2.navigation ? t2.navigation : {};
            e3 = n2(e3), s3 = n2(s3), e3 && e3.forEach((e4) => e4.removeEventListener("keydown", h2)), s3 && s3.forEach((e4) => e4.removeEventListener("keydown", h2)), v2() && (Array.isArray(t2.pagination.el) ? t2.pagination.el : [t2.pagination.el]).forEach((e4) => {
              e4.removeEventListener("keydown", h2);
            });
            t2.el.removeEventListener("focus", x2, true), t2.el.removeEventListener("pointerdown", y2, true), t2.el.removeEventListener("pointerup", E2, true);
          }();
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ history: { enabled: false, root: "", replaceState: false, key: "slides", keepQuery: false } });
        let i2 = false, n2 = {};
        const l2 = (e3) => e3.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o2 = (e3) => {
          const t3 = r();
          let s3;
          s3 = e3 ? new URL(e3) : t3.location;
          const a3 = s3.pathname.slice(1).split("/").filter((e4) => "" !== e4), i3 = a3.length;
          return { key: a3[i3 - 2], value: a3[i3 - 1] };
        }, d2 = (e3, s3) => {
          const a3 = r();
          if (!i2 || !t2.params.history.enabled)
            return;
          let n3;
          n3 = t2.params.url ? new URL(t2.params.url) : a3.location;
          const o3 = t2.slides[s3];
          let d3 = l2(o3.getAttribute("data-history"));
          if (t2.params.history.root.length > 0) {
            let s4 = t2.params.history.root;
            "/" === s4[s4.length - 1] && (s4 = s4.slice(0, s4.length - 1)), d3 = `${s4}/${e3 ? `${e3}/` : ""}${d3}`;
          } else
            n3.pathname.includes(e3) || (d3 = `${e3 ? `${e3}/` : ""}${d3}`);
          t2.params.history.keepQuery && (d3 += n3.search);
          const c3 = a3.history.state;
          c3 && c3.value === d3 || (t2.params.history.replaceState ? a3.history.replaceState({ value: d3 }, null, d3) : a3.history.pushState({ value: d3 }, null, d3));
        }, c2 = (e3, s3, a3) => {
          if (s3)
            for (let i3 = 0, r2 = t2.slides.length; i3 < r2; i3 += 1) {
              const r3 = t2.slides[i3];
              if (l2(r3.getAttribute("data-history")) === s3) {
                const s4 = b(r3);
                t2.slideTo(s4, e3, a3);
              }
            }
          else
            t2.slideTo(0, e3, a3);
        }, p2 = () => {
          n2 = o2(t2.params.url), c2(t2.params.speed, n2.value, false);
        };
        a2("init", () => {
          t2.params.history.enabled && (() => {
            const e3 = r();
            if (t2.params.history) {
              if (!e3.history || !e3.history.pushState)
                return t2.params.history.enabled = false, void (t2.params.hashNavigation.enabled = true);
              i2 = true, n2 = o2(t2.params.url), n2.key || n2.value ? (c2(0, n2.value, t2.params.runCallbacksOnInit), t2.params.history.replaceState || e3.addEventListener("popstate", p2)) : t2.params.history.replaceState || e3.addEventListener("popstate", p2);
            }
          })();
        }), a2("destroy", () => {
          t2.params.history.enabled && (() => {
            const e3 = r();
            t2.params.history.replaceState || e3.removeEventListener("popstate", p2);
          })();
        }), a2("transitionEnd _freeModeNoMomentumRelease", () => {
          i2 && d2(t2.params.history.key, t2.activeIndex);
        }), a2("slideChange", () => {
          i2 && t2.params.cssMode && d2(t2.params.history.key, t2.activeIndex);
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, emit: i2, on: n2 } = e2, l2 = false;
        const o2 = a(), d2 = r();
        s2({ hashNavigation: { enabled: false, replaceState: false, watchState: false } });
        const c2 = () => {
          i2("hashChange");
          const e3 = o2.location.hash.replace("#", "");
          if (e3 !== t2.slides[t2.activeIndex].getAttribute("data-hash")) {
            const s3 = b(f(t2.slidesEl, `.${t2.params.slideClass}[data-hash="${e3}"], swiper-slide[data-hash="${e3}"]`)[0]);
            if (void 0 === s3)
              return;
            t2.slideTo(s3);
          }
        }, p2 = () => {
          if (l2 && t2.params.hashNavigation.enabled)
            if (t2.params.hashNavigation.replaceState && d2.history && d2.history.replaceState)
              d2.history.replaceState(null, null, `#${t2.slides[t2.activeIndex].getAttribute("data-hash")}` || ""), i2("hashSet");
            else {
              const e3 = t2.slides[t2.activeIndex], s3 = e3.getAttribute("data-hash") || e3.getAttribute("data-history");
              o2.location.hash = s3 || "", i2("hashSet");
            }
        };
        n2("init", () => {
          t2.params.hashNavigation.enabled && (() => {
            if (!t2.params.hashNavigation.enabled || t2.params.history && t2.params.history.enabled)
              return;
            l2 = true;
            const e3 = o2.location.hash.replace("#", "");
            if (e3) {
              const s3 = 0;
              for (let a2 = 0, i3 = t2.slides.length; a2 < i3; a2 += 1) {
                const i4 = t2.slides[a2];
                if ((i4.getAttribute("data-hash") || i4.getAttribute("data-history")) === e3) {
                  const e4 = b(i4);
                  t2.slideTo(e4, s3, t2.params.runCallbacksOnInit, true);
                }
              }
            }
            t2.params.hashNavigation.watchState && d2.addEventListener("hashchange", c2);
          })();
        }), n2("destroy", () => {
          t2.params.hashNavigation.enabled && t2.params.hashNavigation.watchState && d2.removeEventListener("hashchange", c2);
        }), n2("transitionEnd _freeModeNoMomentumRelease", () => {
          l2 && p2();
        }), n2("slideChange", () => {
          l2 && t2.params.cssMode && p2();
        });
      }, function(e2) {
        let t2, s2, { swiper: i2, extendParams: r2, on: n2, emit: l2, params: o2 } = e2;
        i2.autoplay = { running: false, paused: false, timeLeft: 0 }, r2({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } });
        let d2, c2, p2, u2, m2, h2, f2, g2 = o2 && o2.autoplay ? o2.autoplay.delay : 3e3, v2 = o2 && o2.autoplay ? o2.autoplay.delay : 3e3, w2 = (/* @__PURE__ */ new Date()).getTime;
        function b2(e3) {
          i2 && !i2.destroyed && i2.wrapperEl && e3.target === i2.wrapperEl && (i2.wrapperEl.removeEventListener("transitionend", b2), M2());
        }
        const y2 = () => {
          if (i2.destroyed || !i2.autoplay.running)
            return;
          i2.autoplay.paused ? c2 = true : c2 && (v2 = d2, c2 = false);
          const e3 = i2.autoplay.paused ? d2 : w2 + v2 - (/* @__PURE__ */ new Date()).getTime();
          i2.autoplay.timeLeft = e3, l2("autoplayTimeLeft", e3, e3 / g2), s2 = requestAnimationFrame(() => {
            y2();
          });
        }, E2 = (e3) => {
          if (i2.destroyed || !i2.autoplay.running)
            return;
          cancelAnimationFrame(s2), y2();
          let a2 = void 0 === e3 ? i2.params.autoplay.delay : e3;
          g2 = i2.params.autoplay.delay, v2 = i2.params.autoplay.delay;
          const r3 = (() => {
            let e4;
            if (e4 = i2.virtual && i2.params.virtual.enabled ? i2.slides.filter((e5) => e5.classList.contains("swiper-slide-active"))[0] : i2.slides[i2.activeIndex], !e4)
              return;
            return parseInt(e4.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r3) && r3 > 0 && void 0 === e3 && (a2 = r3, g2 = r3, v2 = r3), d2 = a2;
          const n3 = i2.params.speed, o3 = () => {
            i2.params.autoplay.reverseDirection ? !i2.isBeginning || i2.params.loop || i2.params.rewind ? (i2.slidePrev(n3, true, true), l2("autoplay")) : i2.params.autoplay.stopOnLastSlide || (i2.slideTo(i2.slides.length - 1, n3, true, true), l2("autoplay")) : !i2.isEnd || i2.params.loop || i2.params.rewind ? (i2.slideNext(n3, true, true), l2("autoplay")) : i2.params.autoplay.stopOnLastSlide || (i2.slideTo(0, n3, true, true), l2("autoplay")), i2.params.cssMode && (w2 = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
              E2();
            }));
          };
          return a2 > 0 ? (clearTimeout(t2), t2 = setTimeout(() => {
            o3();
          }, a2)) : requestAnimationFrame(() => {
            o3();
          }), a2;
        }, x2 = () => {
          i2.autoplay.running = true, E2(), l2("autoplayStart");
        }, S2 = () => {
          i2.autoplay.running = false, clearTimeout(t2), cancelAnimationFrame(s2), l2("autoplayStop");
        }, T2 = (e3, s3) => {
          if (i2.destroyed || !i2.autoplay.running)
            return;
          clearTimeout(t2), e3 || (f2 = true);
          const a2 = () => {
            l2("autoplayPause"), i2.params.autoplay.waitForTransition ? i2.wrapperEl.addEventListener("transitionend", b2) : M2();
          };
          if (i2.autoplay.paused = true, s3)
            return h2 && (d2 = i2.params.autoplay.delay), h2 = false, void a2();
          const r3 = d2 || i2.params.autoplay.delay;
          d2 = r3 - ((/* @__PURE__ */ new Date()).getTime() - w2), i2.isEnd && d2 < 0 && !i2.params.loop || (d2 < 0 && (d2 = 0), a2());
        }, M2 = () => {
          i2.isEnd && d2 < 0 && !i2.params.loop || i2.destroyed || !i2.autoplay.running || (w2 = (/* @__PURE__ */ new Date()).getTime(), f2 ? (f2 = false, E2(d2)) : E2(), i2.autoplay.paused = false, l2("autoplayResume"));
        }, C2 = () => {
          if (i2.destroyed || !i2.autoplay.running)
            return;
          const e3 = a();
          "hidden" === e3.visibilityState && (f2 = true, T2(true)), "visible" === e3.visibilityState && M2();
        }, P2 = (e3) => {
          "mouse" === e3.pointerType && (f2 = true, T2(true));
        }, L2 = (e3) => {
          "mouse" === e3.pointerType && i2.autoplay.paused && M2();
        };
        n2("init", () => {
          i2.params.autoplay.enabled && (i2.params.autoplay.pauseOnMouseEnter && (i2.el.addEventListener("pointerenter", P2), i2.el.addEventListener("pointerleave", L2)), a().addEventListener("visibilitychange", C2), w2 = (/* @__PURE__ */ new Date()).getTime(), x2());
        }), n2("destroy", () => {
          i2.el.removeEventListener("pointerenter", P2), i2.el.removeEventListener("pointerleave", L2), a().removeEventListener("visibilitychange", C2), i2.autoplay.running && S2();
        }), n2("beforeTransitionStart", (e3, t3, s3) => {
          !i2.destroyed && i2.autoplay.running && (s3 || !i2.params.autoplay.disableOnInteraction ? T2(true, true) : S2());
        }), n2("sliderFirstMove", () => {
          !i2.destroyed && i2.autoplay.running && (i2.params.autoplay.disableOnInteraction ? S2() : (p2 = true, u2 = false, f2 = false, m2 = setTimeout(() => {
            f2 = true, u2 = true, T2(true);
          }, 200)));
        }), n2("touchEnd", () => {
          if (!i2.destroyed && i2.autoplay.running && p2) {
            if (clearTimeout(m2), clearTimeout(t2), i2.params.autoplay.disableOnInteraction)
              return u2 = false, void (p2 = false);
            u2 && i2.params.cssMode && M2(), u2 = false, p2 = false;
          }
        }), n2("slideChange", () => {
          !i2.destroyed && i2.autoplay.running && (h2 = true);
        }), Object.assign(i2.autoplay, { start: x2, stop: S2, pause: T2, resume: M2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: i2 } = e2;
        s2({ thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
        let r2 = false, n2 = false;
        function l2() {
          const e3 = t2.thumbs.swiper;
          if (!e3 || e3.destroyed)
            return;
          const s3 = e3.clickedIndex, a2 = e3.clickedSlide;
          if (a2 && a2.classList.contains(t2.params.thumbs.slideThumbActiveClass))
            return;
          if (null == s3)
            return;
          let i3;
          i3 = e3.params.loop ? parseInt(e3.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s3, t2.params.loop ? t2.slideToLoop(i3) : t2.slideTo(i3);
        }
        function o2() {
          const { thumbs: e3 } = t2.params;
          if (r2)
            return false;
          r2 = true;
          const s3 = t2.constructor;
          if (e3.swiper instanceof s3)
            t2.thumbs.swiper = e3.swiper, Object.assign(t2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), Object.assign(t2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false }), t2.thumbs.swiper.update();
          else if (d(e3.swiper)) {
            const a2 = Object.assign({}, e3.swiper);
            Object.assign(a2, { watchSlidesProgress: true, slideToClickedSlide: false }), t2.thumbs.swiper = new s3(a2), n2 = true;
          }
          return t2.thumbs.swiper.el.classList.add(t2.params.thumbs.thumbsContainerClass), t2.thumbs.swiper.on("tap", l2), true;
        }
        function c2(e3) {
          const s3 = t2.thumbs.swiper;
          if (!s3 || s3.destroyed)
            return;
          const a2 = "auto" === s3.params.slidesPerView ? s3.slidesPerViewDynamic() : s3.params.slidesPerView;
          let i3 = 1;
          const r3 = t2.params.thumbs.slideThumbActiveClass;
          if (t2.params.slidesPerView > 1 && !t2.params.centeredSlides && (i3 = t2.params.slidesPerView), t2.params.thumbs.multipleActiveThumbs || (i3 = 1), i3 = Math.floor(i3), s3.slides.forEach((e4) => e4.classList.remove(r3)), s3.params.loop || s3.params.virtual && s3.params.virtual.enabled)
            for (let e4 = 0; e4 < i3; e4 += 1)
              f(s3.slidesEl, `[data-swiper-slide-index="${t2.realIndex + e4}"]`).forEach((e5) => {
                e5.classList.add(r3);
              });
          else
            for (let e4 = 0; e4 < i3; e4 += 1)
              s3.slides[t2.realIndex + e4] && s3.slides[t2.realIndex + e4].classList.add(r3);
          const n3 = t2.params.thumbs.autoScrollOffset, l3 = n3 && !s3.params.loop;
          if (t2.realIndex !== s3.realIndex || l3) {
            const i4 = s3.activeIndex;
            let r4, o3;
            if (s3.params.loop) {
              const e4 = s3.slides.filter((e5) => e5.getAttribute("data-swiper-slide-index") === `${t2.realIndex}`)[0];
              r4 = s3.slides.indexOf(e4), o3 = t2.activeIndex > t2.previousIndex ? "next" : "prev";
            } else
              r4 = t2.realIndex, o3 = r4 > t2.previousIndex ? "next" : "prev";
            l3 && (r4 += "next" === o3 ? n3 : -1 * n3), s3.visibleSlidesIndexes && s3.visibleSlidesIndexes.indexOf(r4) < 0 && (s3.params.centeredSlides ? r4 = r4 > i4 ? r4 - Math.floor(a2 / 2) + 1 : r4 + Math.floor(a2 / 2) - 1 : r4 > i4 && s3.params.slidesPerGroup, s3.slideTo(r4, e3 ? 0 : void 0));
          }
        }
        t2.thumbs = { swiper: null }, i2("beforeInit", () => {
          const { thumbs: e3 } = t2.params;
          if (e3 && e3.swiper)
            if ("string" == typeof e3.swiper || e3.swiper instanceof HTMLElement) {
              const s3 = a(), i3 = () => {
                const a2 = "string" == typeof e3.swiper ? s3.querySelector(e3.swiper) : e3.swiper;
                if (a2 && a2.swiper)
                  e3.swiper = a2.swiper, o2(), c2(true);
                else if (a2) {
                  const s4 = (i4) => {
                    e3.swiper = i4.detail[0], a2.removeEventListener("init", s4), o2(), c2(true), e3.swiper.update(), t2.update();
                  };
                  a2.addEventListener("init", s4);
                }
                return a2;
              }, r3 = () => {
                if (t2.destroyed)
                  return;
                i3() || requestAnimationFrame(r3);
              };
              requestAnimationFrame(r3);
            } else
              o2(), c2(true);
        }), i2("slideChange update resize observerUpdate", () => {
          c2();
        }), i2("setTransition", (e3, s3) => {
          const a2 = t2.thumbs.swiper;
          a2 && !a2.destroyed && a2.setTransition(s3);
        }), i2("beforeDestroy", () => {
          const e3 = t2.thumbs.swiper;
          e3 && !e3.destroyed && n2 && e3.destroy();
        }), Object.assign(t2.thumbs, { init: o2, update: c2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, emit: a2, once: i2 } = e2;
        s2({ freeMode: { enabled: false, momentum: true, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: false, minimumVelocity: 0.02 } }), Object.assign(t2, { freeMode: { onTouchStart: function() {
          const e3 = t2.getTranslate();
          t2.setTranslate(e3), t2.setTransition(0), t2.touchEventsData.velocities.length = 0, t2.freeMode.onTouchEnd({ currentPos: t2.rtl ? t2.translate : -t2.translate });
        }, onTouchMove: function() {
          const { touchEventsData: e3, touches: s3 } = t2;
          0 === e3.velocities.length && e3.velocities.push({ position: s3[t2.isHorizontal() ? "startX" : "startY"], time: e3.touchStartTime }), e3.velocities.push({ position: s3[t2.isHorizontal() ? "currentX" : "currentY"], time: l() });
        }, onTouchEnd: function(e3) {
          let { currentPos: s3 } = e3;
          const { params: r2, wrapperEl: n2, rtlTranslate: o2, snapGrid: d2, touchEventsData: c2 } = t2, p2 = l() - c2.touchStartTime;
          if (s3 < -t2.minTranslate())
            t2.slideTo(t2.activeIndex);
          else if (s3 > -t2.maxTranslate())
            t2.slides.length < d2.length ? t2.slideTo(d2.length - 1) : t2.slideTo(t2.slides.length - 1);
          else {
            if (r2.freeMode.momentum) {
              if (c2.velocities.length > 1) {
                const e5 = c2.velocities.pop(), s5 = c2.velocities.pop(), a3 = e5.position - s5.position, i3 = e5.time - s5.time;
                t2.velocity = a3 / i3, t2.velocity /= 2, Math.abs(t2.velocity) < r2.freeMode.minimumVelocity && (t2.velocity = 0), (i3 > 150 || l() - e5.time > 300) && (t2.velocity = 0);
              } else
                t2.velocity = 0;
              t2.velocity *= r2.freeMode.momentumVelocityRatio, c2.velocities.length = 0;
              let e4 = 1e3 * r2.freeMode.momentumRatio;
              const s4 = t2.velocity * e4;
              let p3 = t2.translate + s4;
              o2 && (p3 = -p3);
              let u2, m2 = false;
              const h2 = 20 * Math.abs(t2.velocity) * r2.freeMode.momentumBounceRatio;
              let f2;
              if (p3 < t2.maxTranslate())
                r2.freeMode.momentumBounce ? (p3 + t2.maxTranslate() < -h2 && (p3 = t2.maxTranslate() - h2), u2 = t2.maxTranslate(), m2 = true, c2.allowMomentumBounce = true) : p3 = t2.maxTranslate(), r2.loop && r2.centeredSlides && (f2 = true);
              else if (p3 > t2.minTranslate())
                r2.freeMode.momentumBounce ? (p3 - t2.minTranslate() > h2 && (p3 = t2.minTranslate() + h2), u2 = t2.minTranslate(), m2 = true, c2.allowMomentumBounce = true) : p3 = t2.minTranslate(), r2.loop && r2.centeredSlides && (f2 = true);
              else if (r2.freeMode.sticky) {
                let e5;
                for (let t3 = 0; t3 < d2.length; t3 += 1)
                  if (d2[t3] > -p3) {
                    e5 = t3;
                    break;
                  }
                p3 = Math.abs(d2[e5] - p3) < Math.abs(d2[e5 - 1] - p3) || "next" === t2.swipeDirection ? d2[e5] : d2[e5 - 1], p3 = -p3;
              }
              if (f2 && i2("transitionEnd", () => {
                t2.loopFix();
              }), 0 !== t2.velocity) {
                if (e4 = o2 ? Math.abs((-p3 - t2.translate) / t2.velocity) : Math.abs((p3 - t2.translate) / t2.velocity), r2.freeMode.sticky) {
                  const s5 = Math.abs((o2 ? -p3 : p3) - t2.translate), a3 = t2.slidesSizesGrid[t2.activeIndex];
                  e4 = s5 < a3 ? r2.speed : s5 < 2 * a3 ? 1.5 * r2.speed : 2.5 * r2.speed;
                }
              } else if (r2.freeMode.sticky)
                return void t2.slideToClosest();
              r2.freeMode.momentumBounce && m2 ? (t2.updateProgress(u2), t2.setTransition(e4), t2.setTranslate(p3), t2.transitionStart(true, t2.swipeDirection), t2.animating = true, E(n2, () => {
                t2 && !t2.destroyed && c2.allowMomentumBounce && (a2("momentumBounce"), t2.setTransition(r2.speed), setTimeout(() => {
                  t2.setTranslate(u2), E(n2, () => {
                    t2 && !t2.destroyed && t2.transitionEnd();
                  });
                }, 0));
              })) : t2.velocity ? (a2("_freeModeNoMomentumRelease"), t2.updateProgress(p3), t2.setTransition(e4), t2.setTranslate(p3), t2.transitionStart(true, t2.swipeDirection), t2.animating || (t2.animating = true, E(n2, () => {
                t2 && !t2.destroyed && t2.transitionEnd();
              }))) : t2.updateProgress(p3), t2.updateActiveIndex(), t2.updateSlidesClasses();
            } else {
              if (r2.freeMode.sticky)
                return void t2.slideToClosest();
              r2.freeMode && a2("_freeModeNoMomentumRelease");
            }
            (!r2.freeMode.momentum || p2 >= r2.longSwipesMs) && (t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses());
          }
        } } });
      }, function(e2) {
        let t2, s2, a2, { swiper: i2, extendParams: r2 } = e2;
        r2({ grid: { rows: 1, fill: "column" } }), i2.grid = { initSlides: (e3) => {
          const { slidesPerView: r3 } = i2.params, { rows: n2, fill: l2 } = i2.params.grid;
          s2 = t2 / n2, a2 = Math.floor(e3 / n2), t2 = Math.floor(e3 / n2) === e3 / n2 ? e3 : Math.ceil(e3 / n2) * n2, "auto" !== r3 && "row" === l2 && (t2 = Math.max(t2, r3 * n2));
        }, updateSlide: (e3, r3, n2, l2) => {
          const { slidesPerGroup: o2, spaceBetween: d2 } = i2.params, { rows: c2, fill: p2 } = i2.params.grid;
          let u2, m2, h2;
          if ("row" === p2 && o2 > 1) {
            const s3 = Math.floor(e3 / (o2 * c2)), a3 = e3 - c2 * o2 * s3, i3 = 0 === s3 ? o2 : Math.min(Math.ceil((n2 - s3 * c2 * o2) / c2), o2);
            h2 = Math.floor(a3 / i3), m2 = a3 - h2 * i3 + s3 * o2, u2 = m2 + h2 * t2 / c2, r3.style.order = u2;
          } else
            "column" === p2 ? (m2 = Math.floor(e3 / c2), h2 = e3 - m2 * c2, (m2 > a2 || m2 === a2 && h2 === c2 - 1) && (h2 += 1, h2 >= c2 && (h2 = 0, m2 += 1))) : (h2 = Math.floor(e3 / s2), m2 = e3 - h2 * s2);
          r3.style[l2("margin-top")] = 0 !== h2 ? d2 && `${d2}px` : "";
        }, updateWrapperSize: (e3, s3, a3) => {
          const { spaceBetween: r3, centeredSlides: n2, roundLengths: l2 } = i2.params, { rows: o2 } = i2.params.grid;
          if (i2.virtualSize = (e3 + r3) * t2, i2.virtualSize = Math.ceil(i2.virtualSize / o2) - r3, i2.wrapperEl.style[a3("width")] = `${i2.virtualSize + r3}px`, n2) {
            const e4 = [];
            for (let t3 = 0; t3 < s3.length; t3 += 1) {
              let a4 = s3[t3];
              l2 && (a4 = Math.floor(a4)), s3[t3] < i2.virtualSize + s3[0] && e4.push(a4);
            }
            s3.splice(0, s3.length), s3.push(...e4);
          }
        } };
      }, function(e2) {
        let { swiper: t2 } = e2;
        Object.assign(t2, { appendSlide: te.bind(t2), prependSlide: se.bind(t2), addSlide: ae.bind(t2), removeSlide: ie.bind(t2), removeAllSlides: re.bind(t2) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ fadeEffect: { crossFade: false } }), ne({ effect: "fade", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3 } = t2;
          t2.params.fadeEffect;
          for (let s3 = 0; s3 < e3.length; s3 += 1) {
            const e4 = t2.slides[s3];
            let a3 = -e4.swiperSlideOffset;
            t2.params.virtualTranslate || (a3 -= t2.translate);
            let i2 = 0;
            t2.isHorizontal() || (i2 = a3, a3 = 0);
            const r2 = t2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e4.progress), 0) : 1 + Math.min(Math.max(e4.progress, -1), 0), n2 = le(0, e4);
            n2.style.opacity = r2, n2.style.transform = `translate3d(${a3}px, ${i2}px, 0px)`;
          }
        }, setTransition: (e3) => {
          const s3 = t2.slides.map((e4) => h(e4));
          s3.forEach((t3) => {
            t3.style.transitionDuration = `${e3}ms`;
          }), oe({ swiper: t2, duration: e3, transformElements: s3, allSlides: true });
        }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t2.params.cssMode }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } });
        const i2 = (e3, t3, s3) => {
          let a3 = s3 ? e3.querySelector(".swiper-slide-shadow-left") : e3.querySelector(".swiper-slide-shadow-top"), i3 = s3 ? e3.querySelector(".swiper-slide-shadow-right") : e3.querySelector(".swiper-slide-shadow-bottom");
          a3 || (a3 = g("div", "swiper-slide-shadow-" + (s3 ? "left" : "top")), e3.append(a3)), i3 || (i3 = g("div", "swiper-slide-shadow-" + (s3 ? "right" : "bottom")), e3.append(i3)), a3 && (a3.style.opacity = Math.max(-t3, 0)), i3 && (i3.style.opacity = Math.max(t3, 0));
        };
        ne({ effect: "cube", swiper: t2, on: a2, setTranslate: () => {
          const { el: e3, wrapperEl: s3, slides: a3, width: r2, height: n2, rtlTranslate: l2, size: o2, browser: d2 } = t2, c2 = t2.params.cubeEffect, p2 = t2.isHorizontal(), u2 = t2.virtual && t2.params.virtual.enabled;
          let m2, h2 = 0;
          c2.shadow && (p2 ? (m2 = t2.slidesEl.querySelector(".swiper-cube-shadow"), m2 || (m2 = g("div", "swiper-cube-shadow"), t2.slidesEl.append(m2)), m2.style.height = `${r2}px`) : (m2 = e3.querySelector(".swiper-cube-shadow"), m2 || (m2 = g("div", "swiper-cube-shadow"), e3.append(m2))));
          for (let e4 = 0; e4 < a3.length; e4 += 1) {
            const t3 = a3[e4];
            let s4 = e4;
            u2 && (s4 = parseInt(t3.getAttribute("data-swiper-slide-index"), 10));
            let r3 = 90 * s4, n3 = Math.floor(r3 / 360);
            l2 && (r3 = -r3, n3 = Math.floor(-r3 / 360));
            const d3 = Math.max(Math.min(t3.progress, 1), -1);
            let m3 = 0, f3 = 0, g2 = 0;
            s4 % 4 == 0 ? (m3 = 4 * -n3 * o2, g2 = 0) : (s4 - 1) % 4 == 0 ? (m3 = 0, g2 = 4 * -n3 * o2) : (s4 - 2) % 4 == 0 ? (m3 = o2 + 4 * n3 * o2, g2 = o2) : (s4 - 3) % 4 == 0 && (m3 = -o2, g2 = 3 * o2 + 4 * o2 * n3), l2 && (m3 = -m3), p2 || (f3 = m3, m3 = 0);
            const v2 = `rotateX(${p2 ? 0 : -r3}deg) rotateY(${p2 ? r3 : 0}deg) translate3d(${m3}px, ${f3}px, ${g2}px)`;
            d3 <= 1 && d3 > -1 && (h2 = 90 * s4 + 90 * d3, l2 && (h2 = 90 * -s4 - 90 * d3)), t3.style.transform = v2, c2.slideShadows && i2(t3, d3, p2);
          }
          if (s3.style.transformOrigin = `50% 50% -${o2 / 2}px`, s3.style["-webkit-transform-origin"] = `50% 50% -${o2 / 2}px`, c2.shadow)
            if (p2)
              m2.style.transform = `translate3d(0px, ${r2 / 2 + c2.shadowOffset}px, ${-r2 / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c2.shadowScale})`;
            else {
              const e4 = Math.abs(h2) - 90 * Math.floor(Math.abs(h2) / 90), t3 = 1.5 - (Math.sin(2 * e4 * Math.PI / 360) / 2 + Math.cos(2 * e4 * Math.PI / 360) / 2), s4 = c2.shadowScale, a4 = c2.shadowScale / t3, i3 = c2.shadowOffset;
              m2.style.transform = `scale3d(${s4}, 1, ${a4}) translate3d(0px, ${n2 / 2 + i3}px, ${-n2 / 2 / a4}px) rotateX(-90deg)`;
            }
          const f2 = (d2.isSafari || d2.isWebView) && d2.needPerspectiveFix ? -o2 / 2 : 0;
          s3.style.transform = `translate3d(0px,0,${f2}px) rotateX(${t2.isHorizontal() ? 0 : h2}deg) rotateY(${t2.isHorizontal() ? -h2 : 0}deg)`, s3.style.setProperty("--swiper-cube-translate-z", `${f2}px`);
        }, setTransition: (e3) => {
          const { el: s3, slides: a3 } = t2;
          if (a3.forEach((t3) => {
            t3.style.transitionDuration = `${e3}ms`, t3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t4) => {
              t4.style.transitionDuration = `${e3}ms`;
            });
          }), t2.params.cubeEffect.shadow && !t2.isHorizontal()) {
            const t3 = s3.querySelector(".swiper-cube-shadow");
            t3 && (t3.style.transitionDuration = `${e3}ms`);
          }
        }, recreateShadows: () => {
          const e3 = t2.isHorizontal();
          t2.slides.forEach((t3) => {
            const s3 = Math.max(Math.min(t3.progress, 1), -1);
            i2(t3, s3, e3);
          });
        }, getEffectParams: () => t2.params.cubeEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ flipEffect: { slideShadows: true, limitRotation: true } });
        const i2 = (e3, s3, a3) => {
          let i3 = t2.isHorizontal() ? e3.querySelector(".swiper-slide-shadow-left") : e3.querySelector(".swiper-slide-shadow-top"), r2 = t2.isHorizontal() ? e3.querySelector(".swiper-slide-shadow-right") : e3.querySelector(".swiper-slide-shadow-bottom");
          i3 || (i3 = de(0, e3, t2.isHorizontal() ? "left" : "top")), r2 || (r2 = de(0, e3, t2.isHorizontal() ? "right" : "bottom")), i3 && (i3.style.opacity = Math.max(-s3, 0)), r2 && (r2.style.opacity = Math.max(s3, 0));
        };
        ne({ effect: "flip", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3, rtlTranslate: s3 } = t2, a3 = t2.params.flipEffect;
          for (let r2 = 0; r2 < e3.length; r2 += 1) {
            const n2 = e3[r2];
            let l2 = n2.progress;
            t2.params.flipEffect.limitRotation && (l2 = Math.max(Math.min(n2.progress, 1), -1));
            const o2 = n2.swiperSlideOffset;
            let d2 = -180 * l2, c2 = 0, p2 = t2.params.cssMode ? -o2 - t2.translate : -o2, u2 = 0;
            t2.isHorizontal() ? s3 && (d2 = -d2) : (u2 = p2, p2 = 0, c2 = -d2, d2 = 0), n2.style.zIndex = -Math.abs(Math.round(l2)) + e3.length, a3.slideShadows && i2(n2, l2);
            const m2 = `translate3d(${p2}px, ${u2}px, 0px) rotateX(${c2}deg) rotateY(${d2}deg)`;
            le(0, n2).style.transform = m2;
          }
        }, setTransition: (e3) => {
          const s3 = t2.slides.map((e4) => h(e4));
          s3.forEach((t3) => {
            t3.style.transitionDuration = `${e3}ms`, t3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t4) => {
              t4.style.transitionDuration = `${e3}ms`;
            });
          }), oe({ swiper: t2, duration: e3, transformElements: s3 });
        }, recreateShadows: () => {
          t2.params.flipEffect;
          t2.slides.forEach((e3) => {
            let s3 = e3.progress;
            t2.params.flipEffect.limitRotation && (s3 = Math.max(Math.min(e3.progress, 1), -1)), i2(e3, s3);
          });
        }, getEffectParams: () => t2.params.flipEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t2.params.cssMode }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true } }), ne({ effect: "coverflow", swiper: t2, on: a2, setTranslate: () => {
          const { width: e3, height: s3, slides: a3, slidesSizesGrid: i2 } = t2, r2 = t2.params.coverflowEffect, n2 = t2.isHorizontal(), l2 = t2.translate, o2 = n2 ? e3 / 2 - l2 : s3 / 2 - l2, d2 = n2 ? r2.rotate : -r2.rotate, c2 = r2.depth;
          for (let e4 = 0, t3 = a3.length; e4 < t3; e4 += 1) {
            const t4 = a3[e4], s4 = i2[e4], l3 = (o2 - t4.swiperSlideOffset - s4 / 2) / s4, p2 = "function" == typeof r2.modifier ? r2.modifier(l3) : l3 * r2.modifier;
            let u2 = n2 ? d2 * p2 : 0, m2 = n2 ? 0 : d2 * p2, h2 = -c2 * Math.abs(p2), f2 = r2.stretch;
            "string" == typeof f2 && -1 !== f2.indexOf("%") && (f2 = parseFloat(r2.stretch) / 100 * s4);
            let g2 = n2 ? 0 : f2 * p2, v2 = n2 ? f2 * p2 : 0, w2 = 1 - (1 - r2.scale) * Math.abs(p2);
            Math.abs(v2) < 1e-3 && (v2 = 0), Math.abs(g2) < 1e-3 && (g2 = 0), Math.abs(h2) < 1e-3 && (h2 = 0), Math.abs(u2) < 1e-3 && (u2 = 0), Math.abs(m2) < 1e-3 && (m2 = 0), Math.abs(w2) < 1e-3 && (w2 = 0);
            const b2 = `translate3d(${v2}px,${g2}px,${h2}px)  rotateX(${m2}deg) rotateY(${u2}deg) scale(${w2})`;
            if (le(0, t4).style.transform = b2, t4.style.zIndex = 1 - Math.abs(Math.round(p2)), r2.slideShadows) {
              let e5 = n2 ? t4.querySelector(".swiper-slide-shadow-left") : t4.querySelector(".swiper-slide-shadow-top"), s5 = n2 ? t4.querySelector(".swiper-slide-shadow-right") : t4.querySelector(".swiper-slide-shadow-bottom");
              e5 || (e5 = de(0, t4, n2 ? "left" : "top")), s5 || (s5 = de(0, t4, n2 ? "right" : "bottom")), e5 && (e5.style.opacity = p2 > 0 ? p2 : 0), s5 && (s5.style.opacity = -p2 > 0 ? -p2 : 0);
            }
          }
        }, setTransition: (e3) => {
          t2.slides.map((e4) => h(e4)).forEach((t3) => {
            t3.style.transitionDuration = `${e3}ms`, t3.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t4) => {
              t4.style.transitionDuration = `${e3}ms`;
            });
          });
        }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ creativeEffect: { limitProgress: 1, shadowPerProgress: false, progressMultiplier: 1, perspective: true, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
        const i2 = (e3) => "string" == typeof e3 ? e3 : `${e3}px`;
        ne({ effect: "creative", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3, wrapperEl: s3, slidesSizesGrid: a3 } = t2, r2 = t2.params.creativeEffect, { progressMultiplier: n2 } = r2, l2 = t2.params.centeredSlides;
          if (l2) {
            const e4 = a3[0] / 2 - t2.params.slidesOffsetBefore || 0;
            s3.style.transform = `translateX(calc(50% - ${e4}px))`;
          }
          for (let s4 = 0; s4 < e3.length; s4 += 1) {
            const a4 = e3[s4], o2 = a4.progress, d2 = Math.min(Math.max(a4.progress, -r2.limitProgress), r2.limitProgress);
            let c2 = d2;
            l2 || (c2 = Math.min(Math.max(a4.originalProgress, -r2.limitProgress), r2.limitProgress));
            const p2 = a4.swiperSlideOffset, u2 = [t2.params.cssMode ? -p2 - t2.translate : -p2, 0, 0], m2 = [0, 0, 0];
            let h2 = false;
            t2.isHorizontal() || (u2[1] = u2[0], u2[0] = 0);
            let f2 = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
            d2 < 0 ? (f2 = r2.next, h2 = true) : d2 > 0 && (f2 = r2.prev, h2 = true), u2.forEach((e4, t3) => {
              u2[t3] = `calc(${e4}px + (${i2(f2.translate[t3])} * ${Math.abs(d2 * n2)}))`;
            }), m2.forEach((e4, t3) => {
              m2[t3] = f2.rotate[t3] * Math.abs(d2 * n2);
            }), a4.style.zIndex = -Math.abs(Math.round(o2)) + e3.length;
            const g2 = u2.join(", "), v2 = `rotateX(${m2[0]}deg) rotateY(${m2[1]}deg) rotateZ(${m2[2]}deg)`, w2 = c2 < 0 ? `scale(${1 + (1 - f2.scale) * c2 * n2})` : `scale(${1 - (1 - f2.scale) * c2 * n2})`, b2 = c2 < 0 ? 1 + (1 - f2.opacity) * c2 * n2 : 1 - (1 - f2.opacity) * c2 * n2, y2 = `translate3d(${g2}) ${v2} ${w2}`;
            if (h2 && f2.shadow || !h2) {
              let e4 = a4.querySelector(".swiper-slide-shadow");
              if (!e4 && f2.shadow && (e4 = de(0, a4)), e4) {
                const t3 = r2.shadowPerProgress ? d2 * (1 / r2.limitProgress) : d2;
                e4.style.opacity = Math.min(Math.max(Math.abs(t3), 0), 1);
              }
            }
            const E2 = le(0, a4);
            E2.style.transform = y2, E2.style.opacity = b2, f2.origin && (E2.style.transformOrigin = b2);
          }
        }, setTransition: (e3) => {
          const s3 = t2.slides.map((e4) => h(e4));
          s3.forEach((t3) => {
            t3.style.transitionDuration = `${e3}ms`, t3.querySelectorAll(".swiper-slide-shadow").forEach((t4) => {
              t4.style.transitionDuration = `${e3}ms`;
            });
          }), oe({ swiper: t2, duration: e3, transformElements: s3, allSlides: true });
        }, perspective: () => t2.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t2.params.cssMode }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ cardsEffect: { slideShadows: true, rotate: true, perSlideRotate: 2, perSlideOffset: 8 } }), ne({ effect: "cards", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3, activeIndex: s3 } = t2, a3 = t2.params.cardsEffect, { startTranslate: i2, isTouched: r2 } = t2.touchEventsData, n2 = t2.translate;
          for (let l2 = 0; l2 < e3.length; l2 += 1) {
            const o2 = e3[l2], d2 = o2.progress, c2 = Math.min(Math.max(d2, -4), 4);
            let p2 = o2.swiperSlideOffset;
            t2.params.centeredSlides && !t2.params.cssMode && (t2.wrapperEl.style.transform = `translateX(${t2.minTranslate()}px)`), t2.params.centeredSlides && t2.params.cssMode && (p2 -= e3[0].swiperSlideOffset);
            let u2 = t2.params.cssMode ? -p2 - t2.translate : -p2, m2 = 0;
            const h2 = -100 * Math.abs(c2);
            let f2 = 1, g2 = -a3.perSlideRotate * c2, v2 = a3.perSlideOffset - 0.75 * Math.abs(c2);
            const w2 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.from + l2 : l2, b2 = (w2 === s3 || w2 === s3 - 1) && c2 > 0 && c2 < 1 && (r2 || t2.params.cssMode) && n2 < i2, y2 = (w2 === s3 || w2 === s3 + 1) && c2 < 0 && c2 > -1 && (r2 || t2.params.cssMode) && n2 > i2;
            if (b2 || y2) {
              const e4 = (1 - Math.abs((Math.abs(c2) - 0.5) / 0.5)) ** 0.5;
              g2 += -28 * c2 * e4, f2 += -0.5 * e4, v2 += 96 * e4, m2 = -25 * e4 * Math.abs(c2) + "%";
            }
            if (u2 = c2 < 0 ? `calc(${u2}px + (${v2 * Math.abs(c2)}%))` : c2 > 0 ? `calc(${u2}px + (-${v2 * Math.abs(c2)}%))` : `${u2}px`, !t2.isHorizontal()) {
              const e4 = m2;
              m2 = u2, u2 = e4;
            }
            const E2 = c2 < 0 ? "" + (1 + (1 - f2) * c2) : "" + (1 - (1 - f2) * c2), x2 = `
        translate3d(${u2}, ${m2}, ${h2}px)
        rotateZ(${a3.rotate ? g2 : 0}deg)
        scale(${E2})
      `;
            if (a3.slideShadows) {
              let e4 = o2.querySelector(".swiper-slide-shadow");
              e4 || (e4 = de(0, o2)), e4 && (e4.style.opacity = Math.min(Math.max((Math.abs(c2) - 0.5) / 0.5, 0), 1));
            }
            o2.style.zIndex = -Math.abs(Math.round(d2)) + e3.length;
            le(0, o2).style.transform = x2;
          }
        }, setTransition: (e3) => {
          const s3 = t2.slides.map((e4) => h(e4));
          s3.forEach((t3) => {
            t3.style.transitionDuration = `${e3}ms`, t3.querySelectorAll(".swiper-slide-shadow").forEach((t4) => {
              t4.style.transitionDuration = `${e3}ms`;
            });
          }), oe({ swiper: t2, duration: e3, transformElements: s3 });
        }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t2.params.cssMode }) });
      }];
      return Q.use(ce), Q;
    });
  }
});
export default require_swiper_bundle_min_004();
