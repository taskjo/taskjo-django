! function (e, t) {
  for (var i in t) e[i] = t[i]
}(window, function (e) {
  var t = {};

  function i(s) {
    if (t[s]) return t[s].exports;
    var a = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(a.exports, a, a.exports, i), a.l = !0, a.exports
  }
  return i.m = e, i.c = t, i.d = function (e, t, s) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    })
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var a in e) i.d(s, a, function (t) {
        return e[t]
      }.bind(null, a));
    return s
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "", i(i.s = 487)
}({
  487: function (e, t, i) {
    "use strict";

    function s(e) {
      return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function a(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function (i) {
        void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i])
      }))
    }
    i.r(t);
    var r = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ""
      },
      querySelector: function () {
        return null
      },
      querySelectorAll: function () {
        return []
      },
      getElementById: function () {
        return null
      },
      createEvent: function () {
        return {
          initEvent: function () {}
        }
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return []
          }
        }
      },
      createElementNS: function () {
        return {}
      },
      importNode: function () {
        return null
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function n() {
      var e = "undefined" != typeof document ? document : {};
      return a(e, r), e
    }
    var o = {
      document: r,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {}
      },
      CustomEvent: function () {
        return this
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return ""
          }
        }
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {}
      },
      requestAnimationFrame: function (e) {
        return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
      },
      cancelAnimationFrame: function (e) {
        "undefined" != typeof setTimeout && clearTimeout(e)
      }
    };

    function l() {
      var e = "undefined" != typeof window ? window : {};
      return a(e, o), e
    }

    function d(e) {
      return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e
      })(e, t)
    }

    function p() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
      } catch (e) {
        return !1
      }
    }

    function u(e, t, i) {
      return (u = p() ? Reflect.construct : function (e, t, i) {
        var s = [null];
        s.push.apply(s, t);
        var a = new(Function.bind.apply(e, s));
        return i && h(a, i.prototype), a
      }).apply(null, arguments)
    }

    function c(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return (c = function (e) {
        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
        var i;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, s)
        }

        function s() {
          return u(e, arguments, d(this).constructor)
        }
        return s.prototype = Object.create(e.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), h(s, e)
      })(e)
    }
    var f = function (e) {
      var t, i;

      function s(t) {
        var i, s, a;
        return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(i), a = s.__proto__, Object.defineProperty(s, "__proto__", {
          get: function () {
            return a
          },
          set: function (e) {
            a.__proto__ = e
          }
        }), i
      }
      return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s
    }(c(Array));

    function v(e) {
      void 0 === e && (e = []);
      var t = [];
      return e.forEach((function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e)
      })), t
    }

    function m(e, t) {
      return Array.prototype.filter.call(e, t)
    }

    function g(e, t) {
      var i = l(),
        s = n(),
        a = [];
      if (!t && e instanceof f) return e;
      if (!e) return new f(a);
      if ("string" == typeof e) {
        var r = e.trim();
        if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
          var o = "div";
          0 === r.indexOf("<li") && (o = "ul"), 0 === r.indexOf("<tr") && (o = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (o = "tr"), 0 === r.indexOf("<tbody") && (o = "table"), 0 === r.indexOf("<option") && (o = "select");
          var d = s.createElement(o);
          d.innerHTML = r;
          for (var h = 0; h < d.childNodes.length; h += 1) a.push(d.childNodes[h])
        } else a = function (e, t) {
          if ("string" != typeof e) return [e];
          for (var i = [], s = t.querySelectorAll(e), a = 0; a < s.length; a += 1) i.push(s[a]);
          return i
        }(e.trim(), t || s)
      } else if (e.nodeType || e === i || e === s) a.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof f) return e;
        a = e
      }
      return new f(function (e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
      }(a))
    }
    g.fn = f.prototype;
    var b = "resize scroll".split(" ");

    function y(e) {
      return function () {
        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        if (void 0 === i[0]) {
          for (var a = 0; a < this.length; a += 1) b.indexOf(e) < 0 && (e in this[a] ? this[a][e]() : g(this[a]).trigger(e));
          return this
        }
        return this.on.apply(this, [e].concat(i))
      }
    }
    y("click"), y("blur"), y("focus"), y("focusin"), y("focusout"), y("keyup"), y("keydown"), y("keypress"), y("submit"), y("change"), y("mousedown"), y("mousemove"), y("mouseup"), y("mouseenter"), y("mouseleave"), y("mouseout"), y("mouseover"), y("touchstart"), y("touchend"), y("touchmove"), y("resize"), y("scroll");
    var w = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = v(t.map((function (e) {
          return e.split(" ")
        })));
        return this.forEach((function (e) {
          var t;
          (t = e.classList).add.apply(t, s)
        })), this
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = v(t.map((function (e) {
          return e.split(" ")
        })));
        return this.forEach((function (e) {
          var t;
          (t = e.classList).remove.apply(t, s)
        })), this
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = v(t.map((function (e) {
          return e.split(" ")
        })));
        return m(this, (function (e) {
          return s.filter((function (t) {
            return e.classList.contains(t)
          })).length > 0
        })).length > 0
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = v(t.map((function (e) {
          return e.split(" ")
        })));
        this.forEach((function (e) {
          s.forEach((function (t) {
            e.classList.toggle(t)
          }))
        }))
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        return this
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
        return this
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];

        function o(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if (i.indexOf(e) < 0 && i.unshift(e), g(t).is(a)) r.apply(t, i);
            else
              for (var s = g(t).parents(), n = 0; n < s.length; n += 1) g(s[n]).is(a) && r.apply(s[n], i)
          }
        }

        function l(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
        }
        "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
        for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
          var u = this[p];
          if (a)
            for (d = 0; d < h.length; d += 1) {
              var c = h[d];
              u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []), u.dom7LiveListeners[c].push({
                listener: r,
                proxyListener: o
              }), u.addEventListener(c, o, n)
            } else
              for (d = 0; d < h.length; d += 1) {
                var f = h[d];
                u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                  listener: r,
                  proxyListener: l
                }), u.addEventListener(f, l, n)
              }
        }
        return this
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] && (s = t[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
        for (var o = s.split(" "), l = 0; l < o.length; l += 1)
          for (var d = o[l], h = 0; h < this.length; h += 1) {
            var p = this[h],
              u = void 0;
            if (!a && p.dom7Listeners ? u = p.dom7Listeners[d] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]), u && u.length)
              for (var c = u.length - 1; c >= 0; c -= 1) {
                var f = u[c];
                r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(d, f.proxyListener, n), u.splice(c, 1))
              }
          }
        return this
      },
      trigger: function () {
        for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
          for (var o = a[n], d = 0; d < this.length; d += 1) {
            var h = this[d];
            if (e.CustomEvent) {
              var p = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0
              });
              h.dom7EventData = i.filter((function (e, t) {
                return t > 0
              })), h.dispatchEvent(p), h.dom7EventData = [], delete h.dom7EventData
            }
          }
        return this
      },
      transitionEnd: function (e) {
        var t = this;
        return e && t.on("transitionend", (function i(s) {
          s.target === this && (e.call(this, s), t.off("transitionend", i))
        })), this
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {}
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = n(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            r = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
          return {
            top: s.top + d - r,
            left: s.left + h - o
          }
        }
        return null
      },
      css: function (e, t) {
        var i, s = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (var a in e) this[i].style[a] = e[a];
            return this
          }
          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this
        }
        return this
      },
      each: function (e) {
        return e ? (this.forEach((function (t, i) {
          e.apply(t, [t, i])
        })), this) : this
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this
      },
      is: function (e) {
        var t, i, s = l(),
          a = n(),
          r = this[0];
        if (!r || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (r.matches) return r.matches(e);
          if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
          if (r.msMatchesSelector) return r.msMatchesSelector(e);
          for (t = g(e), i = 0; i < t.length; i += 1)
            if (t[i] === r) return !0;
          return !1
        }
        if (e === a) return r === a;
        if (e === s) return r === s;
        if (e.nodeType || e instanceof f) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
            if (t[i] === r) return !0;
          return !1
        }
        return !1
      },
      index: function () {
        var e, t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
          return e
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return g([]);
        if (e < 0) {
          var i = t + e;
          return g(i < 0 ? [] : [this[i]])
        }
        return g([this[e]])
      },
      append: function () {
        for (var e, t = n(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (var s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              var a = t.createElement("div");
              for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
            } else if (e instanceof f)
            for (var r = 0; r < e.length; r += 1) this[s].appendChild(e[r]);
          else this[s].appendChild(e)
        }
        return this
      },
      prepend: function (e) {
        var t, i, s = n();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var a = s.createElement("div");
            for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0])
          } else if (e instanceof f)
          for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
        return this
      },
      next: function (e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e) ? g([this[0].nextElementSibling]) : g([]) : this[0].nextElementSibling ? g([this[0].nextElementSibling]) : g([]) : g([])
      },
      nextAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return g([]);
        for (; i.nextElementSibling;) {
          var s = i.nextElementSibling;
          e ? g(s).is(e) && t.push(s) : t.push(s), i = s
        }
        return g(t)
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && g(t.previousElementSibling).is(e) ? g([t.previousElementSibling]) : g([]) : t.previousElementSibling ? g([t.previousElementSibling]) : g([])
        }
        return g([])
      },
      prevAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return g([]);
        for (; i.previousElementSibling;) {
          var s = i.previousElementSibling;
          e ? g(s).is(e) && t.push(s) : t.push(s), i = s
        }
        return g(t)
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? g(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
        return g(t)
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].parentNode; s;) e ? g(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        return g(t)
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
        return g(t)
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].children, a = 0; a < s.length; a += 1) e && !g(s[a]).is(e) || t.push(s[a]);
        return g(t)
      },
      filter: function (e) {
        return g(m(this, e))
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this
      }
    };
    Object.keys(w).forEach((function (e) {
      Object.defineProperty(g.fn, e, {
        value: w[e],
        writable: !0
      })
    }));
    var E, x, T, C = g;

    function S(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function M() {
      return Date.now()
    }

    function z(e, t) {
      void 0 === t && (t = "x");
      var i, s, a, r = l(),
        n = function (e) {
          var t, i = l();
          return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
        }(e);
      return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function (e) {
        return e.replace(",", ".")
      })).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function P(e) {
      return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function k() {
      for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
        var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != s)
          for (var a = Object.keys(Object(s)).filter((function (e) {
              return t.indexOf(e) < 0
            })), r = 0, n = a.length; r < n; r += 1) {
            var o = a[r],
              l = Object.getOwnPropertyDescriptor(s, o);
            void 0 !== l && l.enumerable && (P(e[o]) && P(s[o]) ? s[o].__swiper__ ? e[o] = s[o] : k(e[o], s[o]) : !P(e[o]) && P(s[o]) ? (e[o] = {}, s[o].__swiper__ ? e[o] = s[o] : k(e[o], s[o])) : e[o] = s[o])
          }
      }
      return e
    }

    function O(e, t) {
      Object.keys(t).forEach((function (i) {
        P(t[i]) && Object.keys(t[i]).forEach((function (s) {
          "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e))
        })), e[i] = t[i]
      }))
    }

    function $(e) {
      return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".")
    }

    function L() {
      return E || (E = function () {
        var e = l(),
          t = n();
        return {
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
          passiveListener: function () {
            var t = !1;
            try {
              var i = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0
                }
              });
              e.addEventListener("testPassiveListener", null, i)
            } catch (e) {}
            return t
          }(),
          gestures: "ongesturestart" in e
        }
      }()), E
    }

    function I(e) {
      return void 0 === e && (e = {}), x || (x = function (e) {
        var t = (void 0 === e ? {} : e).userAgent,
          i = L(),
          s = l(),
          a = s.navigator.platform,
          r = t || s.navigator.userAgent,
          n = {
            ios: !1,
            android: !1
          },
          o = s.screen.width,
          d = s.screen.height,
          h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          p = r.match(/(iPad).*OS\s([\d_]+)/),
          u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          f = "Win32" === a,
          v = "MacIntel" === a;
        return !p && v && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), v = !1), h && !f && (n.os = "android", n.android = !0), (p || c || u) && (n.os = "ios", n.ios = !0), n
      }(e)), x
    }

    function A() {
      return T || (T = function () {
        var e, t = l();
        return {
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        }
      }()), T
    }
    var D = {
      name: "resize",
      create: function () {
        var e = this;
        k(e, {
          resize: {
            observer: null,
            createObserver: function () {
              e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver((function (t) {
                var i = e.width,
                  s = e.height,
                  a = i,
                  r = s;
                t.forEach((function (t) {
                  var i = t.contentBoxSize,
                    s = t.contentRect,
                    n = t.target;
                  n && n !== e.el || (a = s ? s.width : (i[0] || i).inlineSize, r = s ? s.height : (i[0] || i).blockSize)
                })), a === i && r === s || e.resize.resizeHandler()
              })), e.resize.observer.observe(e.el))
            },
            removeObserver: function () {
              e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null)
            },
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange")
            }
          }
        })
      },
      on: {
        init: function (e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
        },
        destroy: function (e) {
          var t = l();
          e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
        }
      }
    };

    function N() {
      return (N = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var G = {
        attach: function (e, t) {
          void 0 === t && (t = {});
          var i = l(),
            s = this,
            a = new(i.MutationObserver || i.WebkitMutationObserver)((function (e) {
              if (1 !== e.length) {
                var t = function () {
                  s.emit("observerUpdate", e[0])
                };
                i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
              } else s.emit("observerUpdate", e[0])
            }));
          a.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData
          }), s.observer.observers.push(a)
        },
        init: function () {
          if (this.support.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
            this.observer.attach(this.$el[0], {
              childList: this.params.observeSlideChildren
            }), this.observer.attach(this.$wrapperEl[0], {
              attributes: !1
            })
          }
        },
        destroy: function () {
          this.observer.observers.forEach((function (e) {
            e.disconnect()
          })), this.observer.observers = []
        }
      },
      B = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        },
        create: function () {
          O(this, {
            observer: N({}, G, {
              observers: []
            })
          })
        },
        on: {
          init: function (e) {
            e.observer.init()
          },
          destroy: function (e) {
            e.observer.destroy()
          }
        }
      };

    function H(e) {
      var t = n(),
        i = l(),
        s = this.touchEventsData,
        a = this.params,
        r = this.touches;
      if (this.enabled && (!this.animating || !a.preventInteractionOnTransition)) {
        var o = e;
        o.originalEvent && (o = o.originalEvent);
        var d = C(o.target);
        if ("wrapper" !== a.touchEventsTarget || d.closest(this.wrapperEl).length)
          if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which)
            if (!(!s.isTouchEvent && "button" in o && o.button > 0))
              if (!s.isTouched || !s.isMoved)
                if (!!a.noSwipingClass && "" !== a.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = C(e.path[0])), a.noSwiping && d.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
                else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
          r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
          var h = r.currentX,
            p = r.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
          if (u && (h <= c || h >= i.innerWidth - c)) {
            if ("prevent" !== u) return;
            e.preventDefault()
          }
          if (k(s, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0
            }), r.startX = h, r.startY = p, s.touchStartTime = M(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var f = !0;
            d.is(s.formElements) && (f = !1), t.activeElement && C(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var v = f && this.allowTouchMove && a.touchStartPreventDefault;
            !a.touchStartForcePreventDefault && !v || d[0].isContentEditable || o.preventDefault()
          }
          this.emit("touchStart", o)
        }
      }
    }

    function X(e) {
      var t = n(),
        i = this.touchEventsData,
        s = this.params,
        a = this.touches,
        r = this.rtlTranslate;
      if (this.enabled) {
        var o = e;
        if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "touchmove" === o.type) {
            var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
              d = "touchmove" === o.type ? l.pageX : o.pageX,
              h = "touchmove" === o.type ? l.pageY : o.pageY;
            if (o.preventedByNestedSwiper) return a.startX = d, void(a.startY = h);
            if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (k(a, {
              startX: d,
              startY: h,
              currentX: d,
              currentY: h
            }), i.touchStartTime = M()));
            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
              if (this.isVertical()) {
                if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
              } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
            if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && C(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
            if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
              a.currentX = d, a.currentY = h;
              var p = a.currentX - a.startX,
                u = a.currentY - a.startY;
              if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                var c;
                if (void 0 === i.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (c = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
                if (i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                else if (i.startMoving) {
                  this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                  var f = this.isHorizontal() ? p : u;
                  a.diff = f, f *= s.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                  var v = !0,
                    m = s.resistanceRatio;
                  if (s.touchReleaseOnEdges && (m = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, m))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, m))), v && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                    if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                  }
                  s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                    position: a[this.isHorizontal() ? "startX" : "startY"],
                    time: i.touchStartTime
                  }), i.velocities.push({
                    position: a[this.isHorizontal() ? "currentX" : "currentY"],
                    time: M()
                  })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                }
              }
            }
          }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
      }
    }

    function j(e) {
      var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid;
      if (t.enabled) {
        var d = e;
        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var h, p = M(),
          u = p - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = M(), S((function () {
            t.destroyed || (t.allowClick = !0)
          })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
          if (s.freeMode) {
            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
              if (i.velocities.length > 1) {
                var c = i.velocities.pop(),
                  f = i.velocities.pop(),
                  v = c.position - f.position,
                  m = c.time - f.time;
                t.velocity = v / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || M() - c.time > 300) && (t.velocity = 0)
              } else t.velocity = 0;
              t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
              var g = 1e3 * s.freeModeMomentumRatio,
                b = t.velocity * g,
                y = t.translate + b;
              r && (y = -y);
              var w, E, x = !1,
                T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
              if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T), w = t.maxTranslate(), x = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
              else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > T && (y = t.minTranslate() + T), w = t.minTranslate(), x = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
              else if (s.freeModeSticky) {
                for (var C, z = 0; z < l.length; z += 1)
                  if (l[z] > -y) {
                    C = z;
                    break
                  } y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
              }
              if (E && t.once("transitionEnd", (function () {
                  t.loopFix()
                })), 0 !== t.velocity) {
                if (g = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                  var P = Math.abs((r ? -y : y) - t.translate),
                    k = t.slidesSizesGrid[t.activeIndex];
                  g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed
                }
              } else if (s.freeModeSticky) return void t.slideToClosest();
              s.freeModeMomentumBounce && x ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function () {
                t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout((function () {
                  t.setTranslate(w), n.transitionEnd((function () {
                    t && !t.destroyed && t.transitionEnd()
                  }))
                }), 0))
              }))) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function () {
                t && !t.destroyed && t.transitionEnd()
              })))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(y)), t.updateActiveIndex(), t.updateSlidesClasses()
            } else {
              if (s.freeModeSticky) return void t.slideToClosest();
              s.freeMode && t.emit("_freeModeNoMomentumRelease")
            }(!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          } else {
            for (var O = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
              var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
              void 0 !== o[L + I] ? h >= o[L] && h < o[L + I] && (O = L, $ = o[L + I] - o[L]) : h >= o[L] && (O = L, $ = o[o.length - 1] - o[o.length - 2])
            }
            var A = (h - o[O]) / $,
              D = O < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (u > s.longSwipesMs) {
              if (!s.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo(O + D) : t.slideTo(O)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo(O + D) : t.slideTo(O))
            } else {
              if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
              t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(O + D) : t.slideTo(O) : ("next" === t.swipeDirection && t.slideTo(O + D), "prev" === t.swipeDirection && t.slideTo(O))
            }
          }
      }
    }

    function Y() {
      var e = this.params,
        t = this.el;
      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;
        this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
      }
    }

    function R(e) {
      this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function W() {
      var e = this.wrapperEl,
        t = this.rtlTranslate;
      if (this.enabled) {
        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var i = this.maxTranslate() - this.minTranslate();
        (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
      }
    }
    var V = !1;

    function F() {}
    var _ = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      enabled: !0,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };

    function q(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }
    var U = {
        modular: {
          useParams: function (e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach((function (i) {
              var s = t.modules[i];
              s.params && k(e, s.params)
            }))
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach((function (i) {
              var s = t.modules[i],
                a = e[i] || {};
              s.on && t.on && Object.keys(s.on).forEach((function (e) {
                t.on(e, s.on[e])
              })), s.create && s.create.bind(t)(a)
            }))
          }
        },
        eventsEmitter: {
          on: function (e, t, i) {
            var s = this;
            if ("function" != typeof t) return s;
            var a = i ? "unshift" : "push";
            return e.split(" ").forEach((function (e) {
              s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
            })), s
          },
          once: function (e, t, i) {
            var s = this;
            if ("function" != typeof t) return s;

            function a() {
              s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
              for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
              t.apply(s, r)
            }
            return a.__emitterProxy = t, s.on(e, a, i)
          },
          onAny: function (e, t) {
            if ("function" != typeof e) return this;
            var i = t ? "unshift" : "push";
            return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this
          },
          offAny: function (e) {
            if (!this.eventsAnyListeners) return this;
            var t = this.eventsAnyListeners.indexOf(e);
            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
          },
          off: function (e, t) {
            var i = this;
            return i.eventsListeners ? (e.split(" ").forEach((function (e) {
              void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((function (s, a) {
                (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(a, 1)
              }))
            })), i) : i
          },
          emit: function () {
            var e, t, i, s = this;
            if (!s.eventsListeners) return s;
            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i);
            var o = Array.isArray(e) ? e : e.split(" ");
            return o.forEach((function (e) {
              s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach((function (s) {
                s.apply(i, [e].concat(t))
              })), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach((function (e) {
                e.apply(i, t)
              }))
            })), s
          }
        },
        update: {
          updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), k(this, {
              width: e,
              height: t,
              size: this.isHorizontal() ? e : t
            }))
          },
          updateSlides: function () {
            var e = this;

            function t(t) {
              return e.isHorizontal() ? t : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
              } [t]
            }

            function i(e, i) {
              return parseFloat(e.getPropertyValue(t(i)) || 0)
            }
            var s = e.params,
              a = e.$wrapperEl,
              r = e.size,
              n = e.rtlTranslate,
              o = e.wrongRTL,
              l = e.virtual && s.virtual.enabled,
              d = l ? e.virtual.slides.length : e.slides.length,
              h = a.children("." + e.params.slideClass),
              p = l ? e.virtual.slides.length : h.length,
              u = [],
              c = [],
              f = [],
              v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            var m = s.slidesOffsetAfter;
            "function" == typeof m && (m = s.slidesOffsetAfter.call(e));
            var g = e.snapGrid.length,
              b = e.slidesGrid.length,
              y = s.spaceBetween,
              w = -v,
              E = 0,
              x = 0;
            if (void 0 !== r) {
              var T, C;
              "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), e.virtualSize = -y, n ? h.css({
                marginLeft: "",
                marginTop: ""
              }) : h.css({
                marginRight: "",
                marginBottom: ""
              }), s.slidesPerColumn > 1 && (T = Math.floor(p / s.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / s.slidesPerColumn) * s.slidesPerColumn, "auto" !== s.slidesPerView && "row" === s.slidesPerColumnFill && (T = Math.max(T, s.slidesPerView * s.slidesPerColumn)));
              for (var S, M, z, P = s.slidesPerColumn, O = T / P, $ = Math.floor(p / s.slidesPerColumn), L = 0; L < p; L += 1) {
                C = 0;
                var I = h.eq(L);
                if (s.slidesPerColumn > 1) {
                  var A = void 0,
                    D = void 0,
                    N = void 0;
                  if ("row" === s.slidesPerColumnFill && s.slidesPerGroup > 1) {
                    var G = Math.floor(L / (s.slidesPerGroup * s.slidesPerColumn)),
                      B = L - s.slidesPerColumn * s.slidesPerGroup * G,
                      H = 0 === G ? s.slidesPerGroup : Math.min(Math.ceil((p - G * P * s.slidesPerGroup) / P), s.slidesPerGroup);
                    A = (D = B - (N = Math.floor(B / H)) * H + G * s.slidesPerGroup) + N * T / P, I.css({
                      "-webkit-box-ordinal-group": A,
                      "-moz-box-ordinal-group": A,
                      "-ms-flex-order": A,
                      "-webkit-order": A,
                      order: A
                    })
                  } else "column" === s.slidesPerColumnFill ? (N = L - (D = Math.floor(L / P)) * P, (D > $ || D === $ && N === P - 1) && (N += 1) >= P && (N = 0, D += 1)) : D = L - (N = Math.floor(L / O)) * O;
                  I.css(t("margin-top"), 0 !== N && s.spaceBetween && s.spaceBetween + "px")
                }
                if ("none" !== I.css("display")) {
                  if ("auto" === s.slidesPerView) {
                    var X = getComputedStyle(I[0]),
                      j = I[0].style.transform,
                      Y = I[0].style.webkitTransform;
                    if (j && (I[0].style.transform = "none"), Y && (I[0].style.webkitTransform = "none"), s.roundLengths) C = e.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0);
                    else {
                      var R = i(X, "width"),
                        W = i(X, "padding-left"),
                        V = i(X, "padding-right"),
                        F = i(X, "margin-left"),
                        _ = i(X, "margin-right"),
                        q = X.getPropertyValue("box-sizing");
                      if (q && "border-box" === q) C = R + F + _;
                      else {
                        var U = I[0],
                          K = U.clientWidth;
                        C = R + W + V + F + _ + (U.offsetWidth - K)
                      }
                    }
                    j && (I[0].style.transform = j), Y && (I[0].style.webkitTransform = Y), s.roundLengths && (C = Math.floor(C))
                  } else C = (r - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (C = Math.floor(C)), h[L] && (h[L].style[t("width")] = C + "px");
                  h[L] && (h[L].swiperSlideSize = C), f.push(C), s.centeredSlides ? (w = w + C / 2 + E / 2 + y, 0 === E && 0 !== L && (w = w - r / 2 - y), 0 === L && (w = w - r / 2 - y), Math.abs(w) < .001 && (w = 0), s.roundLengths && (w = Math.floor(w)), x % s.slidesPerGroup == 0 && u.push(w), c.push(w)) : (s.roundLengths && (w = Math.floor(w)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(w), c.push(w), w = w + C + y), e.virtualSize += C + y, E = C, x += 1
                }
              }
              if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && o && ("slide" === s.effect || "coverflow" === s.effect) && a.css({
                  width: e.virtualSize + s.spaceBetween + "px"
                }), s.setWrapperSize) a.css(((M = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", M));
              if (s.slidesPerColumn > 1)
                if (e.virtualSize = (C + s.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / s.slidesPerColumn) - s.spaceBetween, a.css(((z = {})[t("width")] = e.virtualSize + s.spaceBetween + "px", z)), s.centeredSlides) {
                  S = [];
                  for (var Z = 0; Z < u.length; Z += 1) {
                    var J = u[Z];
                    s.roundLengths && (J = Math.floor(J)), u[Z] < e.virtualSize + u[0] && S.push(J)
                  }
                  u = S
                } if (!s.centeredSlides) {
                S = [];
                for (var Q = 0; Q < u.length; Q += 1) {
                  var ee = u[Q];
                  s.roundLengths && (ee = Math.floor(ee)), u[Q] <= e.virtualSize - r && S.push(ee)
                }
                u = S, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
              }
              if (0 === u.length && (u = [0]), 0 !== s.spaceBetween) {
                var te, ie = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                h.filter((function (e, t) {
                  return !s.cssMode || t !== h.length - 1
                })).css(((te = {})[ie] = y + "px", te))
              }
              if (s.centeredSlides && s.centeredSlidesBounds) {
                var se = 0;
                f.forEach((function (e) {
                  se += e + (s.spaceBetween ? s.spaceBetween : 0)
                }));
                var ae = (se -= s.spaceBetween) - r;
                u = u.map((function (e) {
                  return e < 0 ? -v : e > ae ? ae + m : e
                }))
              }
              if (s.centerInsufficientSlides) {
                var re = 0;
                if (f.forEach((function (e) {
                    re += e + (s.spaceBetween ? s.spaceBetween : 0)
                  })), (re -= s.spaceBetween) < r) {
                  var ne = (r - re) / 2;
                  u.forEach((function (e, t) {
                    u[t] = e - ne
                  })), c.forEach((function (e, t) {
                    c[t] = e + ne
                  }))
                }
              }
              k(e, {
                slides: h,
                snapGrid: u,
                slidesGrid: c,
                slidesSizesGrid: f
              }), p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== b && e.emit("slidesGridLengthChange"), (s.watchSlidesProgress || s.watchSlidesVisibility) && e.updateSlidesOffset()
            }
          },
          updateAutoHeight: function (e) {
            var t, i = this,
              s = [],
              a = i.virtual && i.params.virtual.enabled,
              r = 0;
            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
            var n = function (e) {
              return a ? i.slides.filter((function (t) {
                return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              }))[0] : i.slides.eq(e)[0]
            };
            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
              if (i.params.centeredSlides) i.visibleSlides.each((function (e) {
                s.push(e)
              }));
              else
                for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                  var o = i.activeIndex + t;
                  if (o > i.slides.length && !a) break;
                  s.push(n(o))
                } else s.push(n(i.activeIndex));
            for (t = 0; t < s.length; t += 1)
              if (void 0 !== s[t]) {
                var l = s[t].offsetHeight;
                r = l > r ? l : r
              } r && i.$wrapperEl.css("height", r + "px")
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params,
              i = this.slides,
              s = this.rtlTranslate;
            if (0 !== i.length) {
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              var a = -e;
              s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
              for (var r = 0; r < i.length; r += 1) {
                var n = i[r],
                  o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                  var l = -(a - n.swiperSlideOffset),
                    d = l + this.slidesSizesGrid[r];
                  (l >= 0 && l < this.size - 1 || d > 1 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                }
                n.progress = s ? -o : o
              }
              this.visibleSlides = C(this.visibleSlides)
            }
          },
          updateProgress: function (e) {
            if (void 0 === e) {
              var t = this.rtlTranslate ? -1 : 1;
              e = this && this.translate && this.translate * t || 0
            }
            var i = this.params,
              s = this.maxTranslate() - this.minTranslate(),
              a = this.progress,
              r = this.isBeginning,
              n = this.isEnd,
              o = r,
              l = n;
            0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), k(this, {
              progress: a,
              isBeginning: r,
              isEnd: n
            }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !r || l && !n) && this.emit("fromEdge"), this.emit("progress", a)
          },
          updateSlidesClasses: function () {
            var e, t = this.slides,
              i = this.params,
              s = this.$wrapperEl,
              a = this.activeIndex,
              r = this.realIndex,
              n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
          },
          updateActiveIndex: function (e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate,
              s = this.slidesGrid,
              a = this.snapGrid,
              r = this.params,
              n = this.activeIndex,
              o = this.realIndex,
              l = this.snapIndex,
              d = e;
            if (void 0 === d) {
              for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
              r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i);
            else {
              var p = Math.min(r.slidesPerGroupSkip, d);
              t = p + Math.floor((d - p) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1), d !== n) {
              var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
              k(this, {
                snapIndex: t,
                realIndex: u,
                previousIndex: n,
                activeIndex: d
              }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
          },
          updateClickedSlide: function (e) {
            var t, i = this.params,
              s = C(e.target).closest("." + i.slideClass)[0],
              a = !1;
            if (s)
              for (var r = 0; r < this.slides.length; r += 1)
                if (this.slides[r] === s) {
                  a = !0, t = r;
                  break
                } if (!s || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(C(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t, i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
          }
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
              i = this.rtlTranslate,
              s = this.translate,
              a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = z(a[0], e);
            return i && (r = -r), r || 0
          },
          setTranslate: function (e, t) {
            var i = this.rtlTranslate,
              s = this.params,
              a = this.$wrapperEl,
              r = this.wrapperEl,
              n = this.progress,
              o = 0,
              l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
          },
          minTranslate: function () {
            return -this.snapGrid[0]
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
          },
          translateTo: function (e, t, i, s, a) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var r = this,
              n = r.params,
              o = r.wrapperEl;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            var l, d = r.minTranslate(),
              h = r.maxTranslate();
            if (l = s && e > d ? d : s && e < h ? h : e, r.updateProgress(l), n.cssMode) {
              var p, u = r.isHorizontal();
              if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
              else if (o.scrollTo) o.scrollTo(((p = {})[u ? "left" : "top"] = -l, p.behavior = "smooth", p));
              else o[u ? "scrollLeft" : "scrollTop"] = -l;
              return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(l), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
              r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
          }
        },
        transition: {
          setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              s = this.params,
              a = this.previousIndex;
            if (!s.cssMode) {
              s.autoHeight && this.updateAutoHeight();
              var r = t;
              if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
              }
            }
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
              s = this.previousIndex,
              a = this.params;
            if (this.animating = !1, !a.cssMode) {
              this.setTransition(0);
              var r = t;
              if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
              }
            }
          }
        },
        slide: {
          slideTo: function (e, t, i, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
            if ("string" == typeof e) {
              var r = parseInt(e, 10);
              if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
              e = r
            }
            var n = this,
              o = e;
            o < 0 && (o = 0);
            var l = n.params,
              d = n.snapGrid,
              h = n.slidesGrid,
              p = n.previousIndex,
              u = n.activeIndex,
              c = n.rtlTranslate,
              f = n.wrapperEl,
              v = n.enabled;
            if (n.animating && l.preventInteractionOnTransition || !v && !s && !a) return !1;
            var m = Math.min(n.params.slidesPerGroupSkip, o),
              g = m + Math.floor((o - m) / n.params.slidesPerGroup);
            g >= d.length && (g = d.length - 1), (u || l.initialSlide || 0) === (p || 0) && i && n.emit("beforeSlideChangeStart");
            var b, y = -d[g];
            if (n.updateProgress(y), l.normalizeSlideIndex)
              for (var w = 0; w < h.length; w += 1) {
                var E = -Math.floor(100 * y),
                  x = Math.floor(100 * h[w]),
                  T = Math.floor(100 * h[w + 1]);
                void 0 !== h[w + 1] ? E >= x && E < T - (T - x) / 2 ? o = w : E >= x && E < T && (o = w + 1) : E >= x && (o = w)
              }
            if (n.initialized && o !== u) {
              if (!n.allowSlideNext && y < n.translate && y < n.minTranslate()) return !1;
              if (!n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (u || 0) !== o) return !1
            }
            if (b = o > u ? "next" : o < u ? "prev" : "reset", c && -y === n.translate || !c && y === n.translate) return n.updateActiveIndex(o), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(y), "reset" !== b && (n.transitionStart(i, b), n.transitionEnd(i, b)), !1;
            if (l.cssMode) {
              var C, S = n.isHorizontal(),
                M = -y;
              if (c && (M = f.scrollWidth - f.offsetWidth - M), 0 === t) f[S ? "scrollLeft" : "scrollTop"] = M;
              else if (f.scrollTo) f.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C));
              else f[S ? "scrollLeft" : "scrollTop"] = M;
              return !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(y), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, b), n.transitionEnd(i, b)) : (n.setTransition(t), n.setTranslate(y), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
              n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, b))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
          },
          slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
          },
          slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
              a = this.animating;
            if (!this.enabled) return this;
            var r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
              if (a && s.loopPreventsSlide) return !1;
              this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
          },
          slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
              a = this.animating,
              r = this.snapGrid,
              n = this.slidesGrid,
              o = this.rtlTranslate;
            if (!this.enabled) return this;
            if (s.loop) {
              if (a && s.loopPreventsSlide) return !1;
              this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var d, h = l(o ? this.translate : -this.translate),
              p = r.map((function (e) {
                return l(e)
              })),
              u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === u && s.cssMode && r.forEach((function (e) {
              !u && h >= e && (u = e)
            })), void 0 !== u && (d = n.indexOf(u)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
          },
          slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
          },
          slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex,
              r = Math.min(this.params.slidesPerGroupSkip, a),
              n = r + Math.floor((a - r) / this.params.slidesPerGroup),
              o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
              var l = this.snapGrid[n];
              o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
              var d = this.snapGrid[n - 1];
              o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
          },
          slideToClickedSlide: function () {
            var e, t = this,
              i = t.params,
              s = t.$wrapperEl,
              a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
              r = t.clickedIndex;
            if (i.loop) {
              if (t.animating) return;
              e = parseInt(C(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), S((function () {
                t.slideTo(r)
              }))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), S((function () {
                t.slideTo(r)
              }))) : t.slideTo(r)
            } else t.slideTo(r)
          }
        },
        loop: {
          loopCreate: function () {
            var e = this,
              t = n(),
              i = e.params,
              s = e.$wrapperEl;
            s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var a = s.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
              if (r !== i.slidesPerGroup) {
                for (var o = 0; o < r; o += 1) {
                  var l = C(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                  s.append(l)
                }
                a = s.children("." + i.slideClass)
              }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var d = [],
              h = [];
            a.each((function (t, i) {
              var s = C(t);
              i < e.loopedSlides && h.push(t), i < a.length && i >= a.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i)
            }));
            for (var p = 0; p < h.length; p += 1) s.append(C(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var u = d.length - 1; u >= 0; u -= 1) s.prepend(C(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
          },
          loopFix: function () {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex,
              i = this.slides,
              s = this.loopedSlides,
              a = this.allowSlidePrev,
              r = this.allowSlideNext,
              n = this.snapGrid,
              o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
            else if (t >= i.length - s) {
              e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
          },
          loopDestroy: function () {
            var e = this.$wrapperEl,
              t = this.params,
              i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
          }
        },
        grabCursor: {
          setGrabCursor: function (e) {
            if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
              var t = this.el;
              t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
          },
          unsetGrabCursor: function () {
            this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
          }
        },
        manipulation: {
          appendSlide: function (e) {
            var t = this.$wrapperEl,
              i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
              for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
            else t.append(e);
            i.loop && this.loopCreate(), i.observer && this.support.observer || this.update()
          },
          prependSlide: function (e) {
            var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
              for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
              a = s + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(a, 0, !1)
          },
          addSlide: function (e, t) {
            var i = this.$wrapperEl,
              s = this.params,
              a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t);
            else if (e >= r) this.appendSlide(t);
            else {
              for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                var d = this.slides.eq(l);
                d.remove(), o.unshift(d)
              }
              if ("object" == typeof t && "length" in t) {
                for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                n = a > e ? a + t.length : a
              } else i.append(t);
              for (var p = 0; p < o.length; p += 1) i.append(o[p]);
              s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
          },
          removeSlide: function (e) {
            var t = this.params,
              i = this.$wrapperEl,
              s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
              for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
              r = Math.max(r, 0)
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
          },
          removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
          }
        },
        events: {
          attachEvents: function () {
            var e = n(),
              t = this.params,
              i = this.touchEvents,
              s = this.el,
              a = this.wrapperEl,
              r = this.device,
              o = this.support;
            this.onTouchStart = H.bind(this), this.onTouchMove = X.bind(this), this.onTouchEnd = j.bind(this), t.cssMode && (this.onScroll = W.bind(this)), this.onClick = R.bind(this);
            var l = !!t.nested;
            if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, l), e.addEventListener(i.end, this.onTouchEnd, !1);
            else {
              if (o.touch) {
                var d = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                  passive: !1,
                  capture: l
                } : l), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), V || (e.addEventListener("touchstart", F), V = !0)
              }(t.simulateTouch && !r.ios && !r.android || t.simulateTouch && !o.touch && r.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
            }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y, !0) : this.on("observerUpdate", Y, !0)
          },
          detachEvents: function () {
            var e = n(),
              t = this.params,
              i = this.touchEvents,
              s = this.el,
              a = this.wrapperEl,
              r = this.device,
              o = this.support,
              l = !!t.nested;
            if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, l), e.removeEventListener(i.end, this.onTouchEnd, !1);
            else {
              if (o.touch) {
                var d = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, l), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d)
              }(t.simulateTouch && !r.ios && !r.android || t.simulateTouch && !o.touch && r.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, l), e.removeEventListener("mouseup", this.onTouchEnd, !1))
            }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y)
          }
        },
        breakpoints: {
          setBreakpoint: function () {
            var e = this.activeIndex,
              t = this.initialized,
              i = this.loopedSlides,
              s = void 0 === i ? 0 : i,
              a = this.params,
              r = this.$el,
              n = a.breakpoints;
            if (n && (!n || 0 !== Object.keys(n).length)) {
              var o = this.getBreakpoint(n, this.params.breakpointsBase, this.el);
              if (o && this.currentBreakpoint !== o) {
                var l = o in n ? n[o] : void 0;
                l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function (e) {
                  var t = l[e];
                  void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                }));
                var d = l || this.originalParams,
                  h = a.slidesPerColumn > 1,
                  p = d.slidesPerColumn > 1,
                  u = a.enabled;
                h && !p ? (r.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && p && (r.addClass(a.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && r.addClass(a.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                var c = d.direction && d.direction !== a.direction,
                  f = a.loop && (d.slidesPerView !== a.slidesPerView || c);
                c && t && this.changeDirection(), k(this.params, d);
                var v = this.params.enabled;
                k(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev
                }), u && !v ? this.disable() : !u && v && this.enable(), this.currentBreakpoint = o, this.emit("_beforeBreakpoint", d), f && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
              }
            }
          },
          getBreakpoint: function (e, t, i) {
            if (void 0 === t && (t = "window"), e && ("container" !== t || i)) {
              var s = !1,
                a = l(),
                r = "window" === t ? a.innerWidth : i.clientWidth,
                n = "window" === t ? a.innerHeight : i.clientHeight,
                o = Object.keys(e).map((function (e) {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    var t = parseFloat(e.substr(1));
                    return {
                      value: n * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort((function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10)
              }));
              for (var d = 0; d < o.length; d += 1) {
                var h = o[d],
                  p = h.point;
                h.value <= r && (s = p)
              }
              return s || "max"
            }
          }
        },
        checkOverflow: {
          checkOverflow: function () {
            var e = this.params,
              t = this.isLocked,
              i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
            e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update())
          }
        },
        classes: {
          addClasses: function () {
            var e, t, i, s = this.classNames,
              a = this.params,
              r = this.rtl,
              n = this.$el,
              o = this.device,
              l = this.support,
              d = (e = ["initialized", a.direction, {
                "pointer-events": l.pointerEvents && !l.touch
              }, {
                "free-mode": a.freeMode
              }, {
                autoheight: a.autoHeight
              }, {
                rtl: r
              }, {
                multirow: a.slidesPerColumn > 1
              }, {
                "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill
              }, {
                android: o.android
              }, {
                ios: o.ios
              }, {
                "css-mode": a.cssMode
              }], t = a.containerModifierClass, i = [], e.forEach((function (e) {
                "object" == typeof e ? Object.keys(e).forEach((function (s) {
                  e[s] && i.push(t + s)
                })) : "string" == typeof e && i.push(t + e)
              })), i);
            s.push.apply(s, d), n.addClass([].concat(s).join(" ")), this.emitContainerClasses()
          },
          removeClasses: function () {
            var e = this.$el,
              t = this.classNames;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
          }
        },
        images: {
          loadImage: function (e, t, i, s, a, r) {
            var n, o = l();

            function d() {
              r && r()
            }
            C(e).parent("picture")[0] || e.complete && a ? d() : t ? ((n = new o.Image).onload = d, n.onerror = d, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : d()
          },
          preloadImages: function () {
            var e = this;

            function t() {
              null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
            }
            e.imagesToLoad = e.$el.find("img");
            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
              var s = e.imagesToLoad[i];
              e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
            }
          }
        }
      },
      K = {},
      Z = function () {
        function e() {
          for (var t, i, s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
          if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? i = a[0] : (t = a[0], i = a[1]), i || (i = {}), i = k({}, i), t && !i.el && (i.el = t), i.el && C(i.el).length > 1) {
            var n = [];
            return C(i.el).each((function (t) {
              var s = k({}, i, {
                el: t
              });
              n.push(new e(s))
            })), n
          }
          var o = this;
          o.__swiper__ = !0, o.support = L(), o.device = I({
            userAgent: i.userAgent
          }), o.browser = A(), o.eventsListeners = {}, o.eventsAnyListeners = [], void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach((function (e) {
            var t = o.modules[e];
            if (t.params) {
              var s = Object.keys(t.params)[0],
                a = t.params[s];
              if ("object" != typeof a || null === a) return;
              if (!(s in i) || !("enabled" in a)) return;
              !0 === i[s] && (i[s] = {
                enabled: !0
              }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
                enabled: !1
              })
            }
          }));
          var l, d, h = k({}, _);
          return o.useParams(h), o.params = k({}, h, K, i), o.originalParams = k({}, o.params), o.passedParams = k({}, i), o.params && o.params.on && Object.keys(o.params.on).forEach((function (e) {
            o.on(e, o.params.on[e])
          })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = C, k(o, {
            enabled: o.params.enabled,
            el: t,
            classNames: [],
            slides: C(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === o.params.direction
            },
            isVertical: function () {
              return "vertical" === o.params.direction
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEvents: (l = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], o.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3]
            }, o.touchEventsDesktop = {
              start: d[0],
              move: d[1],
              end: d[2]
            }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video, label",
              lastClickTime: M(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o
        }
        var t, i, s, a = e.prototype;
        return a.enable = function () {
          this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
        }, a.disable = function () {
          this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
        }, a.setProgress = function (e, t) {
          e = Math.min(Math.max(e, 0), 1);
          var i = this.minTranslate(),
            s = (this.maxTranslate() - i) * e + i;
          this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
        }, a.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(" ").filter((function (t) {
              return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass)
            }));
            e.emit("_containerClasses", t.join(" "))
          }
        }, a.getSlideClasses = function (e) {
          var t = this;
          return e.className.split(" ").filter((function (e) {
            return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
          })).join(" ")
        }, a.emitSlidesClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = [];
            e.slides.each((function (i) {
              var s = e.getSlideClasses(i);
              t.push({
                slideEl: i,
                classNames: s
              }), e.emit("_slideClass", i, s)
            })), e.emit("_slideClasses", t)
          }
        }, a.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
          } else
            for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
          return r
        }, a.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
          }

          function s() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
          }
        }, a.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each((function (t) {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), this.emit("changeDirection"), t && this.update()), this
        }, a.mount = function (e) {
          if (this.mounted) return !0;
          var t, i = C(e || this.params.el);
          return !!(e = i[0]) && (e.swiper = this, e && e.shadowRoot && e.shadowRoot.querySelector ? (t = C(e.shadowRoot.querySelector("." + this.params.wrapperClass))).children = function (e) {
            return i.children(e)
          } : t = i.children("." + this.params.wrapperClass), k(this, {
            $el: i,
            el: e,
            $wrapperEl: t,
            wrapperEl: t[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate: "horizontal" === this.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === t.css("display")
          }), !0)
        }, a.init = function (e) {
          return this.initialized || !1 === this.mount(e) || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.enabled && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit, !1, !0) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit, !1, !0), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit")), this
        }, a.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i, s = this,
            a = s.params,
            r = s.$el,
            n = s.$wrapperEl,
            o = s.slides;
          return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), o && o.length && o.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((function (e) {
            s.off(e)
          })), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach((function (e) {
            try {
              i[e] = null
            } catch (e) {}
            try {
              delete i[e]
            } catch (e) {}
          }))), s.destroyed = !0), null
        }, e.extendDefaults = function (e) {
          k(K, e)
        }, e.installModule = function (t) {
          e.prototype.modules || (e.prototype.modules = {});
          var i = t.name || Object.keys(e.prototype.modules).length + "_" + M();
          e.prototype.modules[i] = t
        }, e.use = function (t) {
          return Array.isArray(t) ? (t.forEach((function (t) {
            return e.installModule(t)
          })), e) : (e.installModule(t), e)
        }, t = e, s = [{
          key: "extendedDefaults",
          get: function () {
            return K
          }
        }, {
          key: "defaults",
          get: function () {
            return _
          }
        }], (i = null) && q(t.prototype, i), s && q(t, s), e
      }();
    Object.keys(U).forEach((function (e) {
      Object.keys(U[e]).forEach((function (t) {
        Z.prototype[t] = U[e][t]
      }))
    })), Z.use([D, B]);
    var J = Z;

    function Q() {
      return (Q = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ee = {
        update: function (e) {
          var t = this,
            i = t.params,
            s = i.slidesPerView,
            a = i.slidesPerGroup,
            r = i.centeredSlides,
            n = t.params.virtual,
            o = n.addSlidesBefore,
            l = n.addSlidesAfter,
            d = t.virtual,
            h = d.from,
            p = d.to,
            u = d.slides,
            c = d.slidesGrid,
            f = d.renderSlide,
            v = d.offset;
          t.updateActiveIndex();
          var m, g, b, y = t.activeIndex || 0;
          m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + l, b = Math.floor(s / 2) + a + o) : (g = s + (a - 1) + l, b = a + o);
          var w = Math.max((y || 0) - b, 0),
            E = Math.min((y || 0) + g, u.length - 1),
            x = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

          function T() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
          }
          if (k(t.virtual, {
              from: w,
              to: E,
              offset: x,
              slidesGrid: t.slidesGrid
            }), h === w && p === E && !e) return t.slidesGrid !== c && x !== v && t.slides.css(m, x + "px"), void t.updateProgress();
          if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
            offset: x,
            from: w,
            to: E,
            slides: function () {
              for (var e = [], t = w; t <= E; t += 1) e.push(u[t]);
              return e
            }()
          }), void(t.params.virtual.renderExternalUpdate && T());
          var C = [],
            S = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (var M = h; M <= p; M += 1)(M < w || M > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
          for (var z = 0; z < u.length; z += 1) z >= w && z <= E && (void 0 === p || e ? S.push(z) : (z > p && S.push(z), z < h && C.push(z)));
          S.forEach((function (e) {
            t.$wrapperEl.append(f(u[e], e))
          })), C.sort((function (e, t) {
            return t - e
          })).forEach((function (e) {
            t.$wrapperEl.prepend(f(u[e], e))
          })), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T()
        },
        renderSlide: function (e, t) {
          var i = this.params.virtual;
          if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
          var s = i.renderSlide ? C(i.renderSlide.call(this, e, t)) : C('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
          return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
        },
        appendSlide: function (e) {
          if ("object" == typeof e && "length" in e)
            for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
          else this.virtual.slides.push(e);
          this.virtual.update(!0)
        },
        prependSlide: function (e) {
          var t = this.activeIndex,
            i = t + 1,
            s = 1;
          if (Array.isArray(e)) {
            for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
            i = t + e.length, s = e.length
          } else this.virtual.slides.unshift(e);
          if (this.params.virtual.cache) {
            var r = this.virtual.cache,
              n = {};
            Object.keys(r).forEach((function (e) {
              var t = r[e],
                i = t.attr("data-swiper-slide-index");
              i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
            })), this.virtual.cache = n
          }
          this.virtual.update(!0), this.slideTo(i, 0)
        },
        removeSlide: function (e) {
          if (null != e) {
            var t = this.activeIndex;
            if (Array.isArray(e))
              for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
            else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
            this.virtual.update(!0), this.slideTo(t, 0)
          }
        },
        removeAllSlides: function () {
          this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
        }
      },
      te = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create: function () {
          O(this, {
            virtual: Q({}, ee, {
              slides: this.params.virtual.slides,
              cache: {}
            })
          })
        },
        on: {
          beforeInit: function (e) {
            if (e.params.virtual.enabled) {
              e.classNames.push(e.params.containerModifierClass + "virtual");
              var t = {
                watchSlidesProgress: !0
              };
              k(e.params, t), k(e.originalParams, t), e.params.initialSlide || e.virtual.update()
            }
          },
          setTranslate: function (e) {
            e.params.virtual.enabled && e.virtual.update()
          }
        }
      };

    function ie() {
      return (ie = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var se = {
        handle: function (e) {
          if (this.enabled) {
            var t = l(),
              i = n(),
              s = this.rtlTranslate,
              a = e;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode,
              o = this.params.keyboard.pageUpDown,
              d = o && 33 === r,
              h = o && 34 === r,
              p = 37 === r,
              u = 39 === r,
              c = 38 === r,
              f = 40 === r;
            if (!this.allowSlideNext && (this.isHorizontal() && u || this.isVertical() && f || h)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && p || this.isVertical() && c || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
              if (this.params.keyboard.onlyInViewport && (d || h || p || u || c || f)) {
                var v = !1;
                if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                var m = this.$el,
                  g = m[0].clientWidth,
                  b = m[0].clientHeight,
                  y = t.innerWidth,
                  w = t.innerHeight,
                  E = this.$el.offset();
                s && (E.left -= this.$el[0].scrollLeft);
                for (var x = [
                    [E.left, E.top],
                    [E.left + g, E.top],
                    [E.left, E.top + b],
                    [E.left + g, E.top + b]
                  ], T = 0; T < x.length; T += 1) {
                  var C = x[T];
                  if (C[0] >= 0 && C[0] <= y && C[1] >= 0 && C[1] <= w) {
                    if (0 === C[0] && 0 === C[1]) continue;
                    v = !0
                  }
                }
                if (!v) return
              }
              this.isHorizontal() ? ((d || h || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((h || u) && !s || (d || p) && s) && this.slideNext(), ((d || p) && !s || (h || u) && s) && this.slidePrev()) : ((d || h || c || f) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (h || f) && this.slideNext(), (d || c) && this.slidePrev()), this.emit("keyPress", r)
            }
          }
        },
        enable: function () {
          var e = n();
          this.keyboard.enabled || (C(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        },
        disable: function () {
          var e = n();
          this.keyboard.enabled && (C(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
      },
      ae = {
        name: "keyboard",
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
          }
        },
        create: function () {
          O(this, {
            keyboard: ie({
              enabled: !1
            }, se)
          })
        },
        on: {
          init: function (e) {
            e.params.keyboard.enabled && e.keyboard.enable()
          },
          destroy: function (e) {
            e.keyboard.enabled && e.keyboard.disable()
          }
        }
      };
    var re = {
      lastScrollTime: M(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = n(),
            t = "onwheel" in e;
          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
          }
          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel"
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: i,
          pixelX: s,
          pixelY: a
        }
      },
      handleMouseEnter: function () {
        this.enabled && (this.mouseEntered = !0)
      },
      handleMouseLeave: function () {
        this.enabled && (this.mouseEntered = !1)
      },
      handle: function (e) {
        var t = e,
          i = this;
        if (i.enabled) {
          var s = i.params.mousewheel;
          i.params.cssMode && t.preventDefault();
          var a = i.$el;
          if ("container" !== i.params.mousewheel.eventsTarget && (a = C(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
            n = i.rtlTranslate ? -1 : 1,
            o = re.normalize(t);
          if (s.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
              r = -o.pixelX * n
            } else {
              if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
              r = -o.pixelY
            }
          else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
          if (0 === r) return !0;
          s.invert && (r = -r);
          var l = i.getTranslate() + r * s.sensitivity;
          if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), (!!i.params.loop || !(l === i.minTranslate() || l === i.maxTranslate())) && i.params.nested && t.stopPropagation(), i.params.freeMode) {
            var d = {
                time: M(),
                delta: Math.abs(r),
                direction: Math.sign(r)
              },
              h = i.mousewheel.lastEventBeforeSnap,
              p = h && d.time < h.time + 500 && d.delta <= h.delta && d.direction === h.direction;
            if (!p) {
              i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
              var u = i.getTranslate() + r * s.sensitivity,
                c = i.isBeginning,
                f = i.isEnd;
              if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                var v = i.mousewheel.recentWheelEvents;
                v.length >= 15 && v.shift();
                var m = v.length ? v[v.length - 1] : void 0,
                  g = v[0];
                if (v.push(d), m && (d.delta > m.delta || d.direction !== m.direction)) v.splice(0);
                else if (v.length >= 15 && d.time - g.time < 500 && g.delta - d.delta >= 1 && d.delta <= 6) {
                  var b = r > 0 ? .8 : .2;
                  i.mousewheel.lastEventBeforeSnap = d, v.splice(0), i.mousewheel.timeout = S((function () {
                    i.slideToClosest(i.params.speed, !0, void 0, b)
                  }), 0)
                }
                i.mousewheel.timeout || (i.mousewheel.timeout = S((function () {
                  i.mousewheel.lastEventBeforeSnap = d, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                }), 500))
              }
              if (p || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
            }
          } else {
            var y = {
                time: M(),
                delta: Math.abs(r),
                direction: Math.sign(r),
                raw: e
              },
              w = i.mousewheel.recentWheelEvents;
            w.length >= 2 && w.shift();
            var E = w.length ? w[w.length - 1] : void 0;
            if (w.push(y), E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
          }
          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }
      },
      animateSlider: function (e) {
        var t = l();
        return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && M() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && M() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)))
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
        return !1
      },
      enable: function () {
        var e = re.event();
        if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarget && (t = C(this.params.mousewheel.eventsTarget)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
      },
      disable: function () {
        var e = re.event();
        if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarget && (t = C(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
      }
    };

    function ne() {
      return (ne = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var oe = {
      toggleEl: function (e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
      },
      update: function () {
        var e = this.params.navigation,
          t = this.navigation.toggleEl;
        if (!this.params.loop) {
          var i = this.navigation,
            s = i.$nextEl,
            a = i.$prevEl;
          a && a.length > 0 && (this.isBeginning ? t(a, !0) : t(a, !1), this.params.watchOverflow && this.enabled && a[this.isLocked ? "addClass" : "removeClass"](e.lockClass)), s && s.length > 0 && (this.isEnd ? t(s, !0) : t(s, !1), this.params.watchOverflow && this.enabled && s[this.isLocked ? "addClass" : "removeClass"](e.lockClass))
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
      },
      onNextClick: function (e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
      },
      init: function () {
        var e, t, i = this.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = C(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = C(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), k(this.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }), this.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)))
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
      }
    };

    function le() {
      return (le = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var de = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var n, o, l, d = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = i - this.pagination.dynamicBulletIndex, l = ((o = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each((function (e) {
              var s = C(e),
                a = s.index();
              a === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (a >= n && a <= o && s.addClass(t.bulletActiveClass + "-main"), a === n && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), a === o && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
            }));
            else {
              var h = d.eq(i),
                p = h.index();
              if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = d.eq(n), c = d.eq(o), f = n; f <= o; f += 1) d.eq(f).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop)
                  if (p >= d.length - t.dynamicMainBullets) {
                    for (var v = t.dynamicMainBullets; v >= 0; v -= 1) d.eq(d.length - v).addClass(t.bulletActiveClass + "-main");
                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                  } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
              }
            }
            if (t.dynamicBullets) {
              var m = Math.min(d.length, t.dynamicMainBullets + 4),
                g = (this.pagination.bulletSize * m - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                b = e ? "right" : "left";
              d.css(this.isHorizontal() ? b : "top", g + "px")
            }
          }
          if ("fraction" === t.type && (a.find($(t.currentClass)).text(t.formatFractionCurrent(i + 1)), a.find($(t.totalClass)).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
            var y;
            y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var w = (i + 1) / r,
              E = 1,
              x = 1;
            "horizontal" === y ? E = w : x = w, a.find($(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + x + ")").transition(this.params.speed)
          }
          "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", a[0])) : this.emit("paginationUpdate", a[0]), this.params.watchOverflow && this.enabled && a[this.isLocked ? "addClass" : "removeClass"](t.lockClass)
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
            this.params.freeMode && !this.params.loop && a > t && (a = t);
            for (var r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            i.html(s), this.pagination.bullets = i.find($(e.bulletClass))
          }
          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = C(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", $(t.bulletClass), (function (t) {
            t.preventDefault();
            var i = C(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i)
          })), k(e.pagination, {
            $el: i,
            el: i[0]
          }), e.enabled || i.addClass(t.lockClass))
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", $(e.bulletClass))
        }
      }
    };

    function he() {
      return (he = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var pe = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
            n[0].style.opacity = 0, n.transition(400)
          }), 1e3))
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          t[0].style.width = "", t[0].style.height = "";
          var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), k(e, {
            trackSize: a,
            divider: r,
            moveDivider: n,
            dragSize: s
          }), this.params.watchOverflow && this.enabled && e.$el[this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
      },
      setDragPosition: function (e) {
        var t, i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
        t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = S((function () {
          a.css("opacity", 0), a.transition(400)
        }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = n(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = this.support,
            o = t.$el[0],
            l = !(!r.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            d = !(!r.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o && (r.touch ? (o.addEventListener(i.start, this.scrollbar.onDragStart, l), o.addEventListener(i.move, this.scrollbar.onDragMove, l), o.addEventListener(i.end, this.scrollbar.onDragEnd, d)) : (o.addEventListener(s.start, this.scrollbar.onDragStart, l), e.addEventListener(s.move, this.scrollbar.onDragMove, l), e.addEventListener(s.end, this.scrollbar.onDragEnd, d)))
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = n(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = this.support,
            o = t.$el[0],
            l = !(!r.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            d = !(!r.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o && (r.touch ? (o.removeEventListener(i.start, this.scrollbar.onDragStart, l), o.removeEventListener(i.move, this.scrollbar.onDragMove, l), o.removeEventListener(i.end, this.scrollbar.onDragEnd, d)) : (o.removeEventListener(s.start, this.scrollbar.onDragStart, l), e.removeEventListener(s.move, this.scrollbar.onDragMove, l), e.removeEventListener(s.end, this.scrollbar.onDragEnd, d)))
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = C(i.el);
          this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
          var a = s.find("." + this.params.scrollbar.dragClass);
          0 === a.length && (a = C('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), k(e, {
            $el: s,
            el: s[0],
            $dragEl: a,
            dragEl: a[0]
          }), i.draggable && e.enableDraggable(), s && s[this.enabled ? "removeClass" : "addClass"](this.params.scrollbar.lockClass)
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable()
      }
    };

    function ue() {
      return (ue = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ce = {
      setTransform: function (e, t) {
        var i = this.rtl,
          s = C(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          o = s.attr("data-swiper-parallax-y"),
          l = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");
        if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
          var h = d - (d - 1) * (1 - Math.abs(t));
          s[0].style.opacity = h
        }
        if (null == l) s.transform("translate3d(" + n + ", " + o + ", 0px)");
        else {
          var p = l - (l - 1) * (1 - Math.abs(t));
          s.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + p + ")")
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
          e.parallax.setTransform(t, s)
        })), i.each((function (t, i) {
          var r = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), C(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
            e.parallax.setTransform(t, r)
          }))
        }))
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t) {
          var i = C(t),
            s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), i.transition(s)
        }))
      }
    };

    function fe() {
      return (fe = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ve = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
      },
      onGestureStart: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !t.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureTouched = !0, a.scaleStart = ve.getDistanceBetweenTouches(e)
        }
        a.$slideEl && a.$slideEl.length || (a.$slideEl = C(e.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
      },
      onGestureChange: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (!t.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureMoved = !0, a.scaleMove = ve.getDistanceBetweenTouches(e)
        }
        a.$imageEl && 0 !== a.$imageEl.length ? (t.gestures ? s.scale = e.scale * s.currentScale : s.scale = a.scaleMove / a.scaleStart * s.currentScale, s.scale > a.maxRatio && (s.scale = a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e)
      },
      onGestureEnd: function (e) {
        var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;
        if (!i.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
        }
        r.$imageEl && 0 !== r.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio), r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (r.$slideEl = void 0))
      },
      onTouchStart: function (e) {
        var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
        s.$imageEl && 0 !== s.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = z(i.$imageWrapEl[0], "x") || 0, s.startY = z(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
              if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
              if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
          i.isTouched = !1, i.isMoved = !1;
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          i.currentX = o, i.currentY = d;
          var p = i.width * e.scale,
            u = i.height * e.scale;
          i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e)
      },
      in: function (e) {
        var t, i, s, a, r, n, o, d, h, p, u, c, f, v, m, g, b = l(),
          y = this.zoom,
          w = this.params.zoom,
          E = y.gesture,
          x = y.image;
        (E.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? E.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : E.$slideEl = this.slides.eq(this.activeIndex), E.$imageEl = E.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), E.$imageWrapEl = E.$imageEl.parent("." + w.containerClass)), E.$imageEl && 0 !== E.$imageEl.length && E.$imageWrapEl && 0 !== E.$imageWrapEl.length) && (E.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = E.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = E.$slideEl[0].offsetWidth, g = E.$slideEl[0].offsetHeight, s = E.$slideEl.offset().left + b.scrollX + m / 2 - t, a = E.$slideEl.offset().top + b.scrollY + g / 2 - i, o = E.$imageEl[0].offsetWidth, d = E.$imageEl[0].offsetHeight, h = o * y.scale, p = d * y.scale, f = -(u = Math.min(m / 2 - h / 2, 0)), v = -(c = Math.min(g / 2 - p / 2, 0)), (r = s * y.scale) < u && (r = u), r > f && (r = f), (n = a * y.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), E.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), E.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
      },
      toggleGestures: function (e) {
        var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
        this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s)
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
      },
      enable: function () {
        var e = this.support,
          t = this.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            s = !e.passiveListener || {
              passive: !1,
              capture: !0
            },
            a = "." + this.params.slideClass;
          this.zoom.passiveListener = i, this.zoom.slideSelector = a, e.gestures ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, a, t.onGestureStart, i), this.$wrapperEl.on(this.touchEvents.move, a, t.onGestureChange, s), this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, a, t.onGestureEnd, i)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s)
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          var t = this.support;
          this.zoom.enabled = !1;
          var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            s = !t.passiveListener || {
              passive: !1,
              capture: !0
            },
            a = "." + this.params.slideClass;
          t.gestures ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, a, e.onGestureStart, i), this.$wrapperEl.off(this.touchEvents.move, a, e.onGestureChange, s), this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, a, e.onGestureEnd, i)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s)
        }
      }
    };

    function me() {
      return (me = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ge = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
          !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each((function (e) {
            var r = C(e);
            r.addClass(s.loadingClass);
            var n = r.attr("data-background"),
              o = r.attr("data-src"),
              l = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              h = r.parent("picture");
            i.loadImage(r[0], o || n, l, d, !1, (function () {
              if (null != i && i && (!i || i.params) && !i.destroyed) {
                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (l && (r.attr("srcset", l), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), h.length && h.children("source").each((function (e) {
                    var t = C(e);
                    t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                  })), o && (r.attr("src", o), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                  var e = a.attr("data-swiper-slide-index");
                  if (a.hasClass(i.params.slideDuplicateClass)) {
                    var p = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(p.index(), !1)
                  } else {
                    var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(u.index(), !1)
                  }
                }
                i.emit("lazyImageReady", a[0], r[0]), i.params.autoHeight && i.updateAutoHeight()
              }
            })), i.emit("lazyImageLoad", a[0], r[0])
          }))
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          o = i.slidesPerView;

        function l(e) {
          if (r) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
          } else if (s[e]) return !0;
          return !1
        }

        function d(e) {
          return r ? C(e).attr("data-swiper-slide-index") : C(e).index()
        }
        if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t) {
          var i = r ? C(t).attr("data-swiper-slide-index") : C(t).index();
          e.lazy.loadInSlide(i)
        }));
        else if (o > 1)
          for (var h = a; h < a + o; h += 1) l(h) && e.lazy.loadInSlide(h);
        else e.lazy.loadInSlide(a);
        if (n.loadPrevNext)
          if (o > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
            for (var p = n.loadPrevNextAmount, u = o, c = Math.min(a + u + Math.max(p, u), s.length), f = Math.max(a - Math.max(u, p), 0), v = a + o; v < c; v += 1) l(v) && e.lazy.loadInSlide(v);
            for (var m = f; m < a; m += 1) l(m) && e.lazy.loadInSlide(m)
          } else {
            var g = t.children("." + i.slideNextClass);
            g.length > 0 && e.lazy.loadInSlide(d(g));
            var b = t.children("." + i.slidePrevClass);
            b.length > 0 && e.lazy.loadInSlide(d(b))
          }
      },
      checkInViewOnLoad: function () {
        var e = l();
        if (this && !this.destroyed) {
          var t = this.params.lazy.scrollingElement ? C(this.params.lazy.scrollingElement) : C(e),
            i = t[0] === e,
            s = i ? e.innerWidth : t[0].offsetWidth,
            a = i ? e.innerHeight : t[0].offsetHeight,
            r = this.$el.offset(),
            n = !1;
          this.rtlTranslate && (r.left -= this.$el[0].scrollLeft);
          for (var o = [
              [r.left, r.top],
              [r.left + this.width, r.top],
              [r.left, r.top + this.height],
              [r.left + this.width, r.top + this.height]
            ], d = 0; d < o.length; d += 1) {
            var h = o[d];
            if (h[0] >= 0 && h[0] <= s && h[1] >= 0 && h[1] <= a) {
              if (0 === h[0] && 0 === h[1]) continue;
              n = !0
            }
          }
          n ? (this.lazy.load(), t.off("scroll", this.lazy.checkInViewOnLoad)) : this.lazy.scrollHandlerAttached || (this.lazy.scrollHandlerAttached = !0, t.on("scroll", this.lazy.checkInViewOnLoad))
        }
      }
    };

    function be() {
      return (be = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ye = {
      LinearSpline: function (e, t) {
        var i, s, a, r, n, o = function (e, t) {
          for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
          return i
        };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
        }, this
      },
      getInterpolateFunction: function (e) {
        this.controller.spline || (this.controller.spline = this.params.loop ? new ye.LinearSpline(this.slidesGrid, e.slidesGrid) : new ye.LinearSpline(this.snapGrid, e.snapGrid))
      },
      setTranslate: function (e, t) {
        var i, s, a = this,
          r = a.controller.control,
          n = a.constructor;

        function o(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        if (Array.isArray(r))
          for (var l = 0; l < r.length; l += 1) r[l] !== t && r[l] instanceof n && o(r[l]);
        else r instanceof n && t !== r && o(r)
      },
      setTransition: function (e, t) {
        var i, s = this,
          a = s.constructor,
          r = s.controller.control;

        function n(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && S((function () {
            t.updateAutoHeight()
          })), t.$wrapperEl.transitionEnd((function () {
            r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
          })))
        }
        if (Array.isArray(r))
          for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof a && n(r[i]);
        else r instanceof a && t !== r && n(r)
      }
    };

    function we() {
      return (we = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var Ee = {
      getRandomNumber: function (e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, (function () {
          return Math.round(16 * Math.random()).toString(16)
        }))
      },
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e
      },
      addElRoleDescription: function (e, t) {
        return e.attr("aria-roledescription", t), e
      },
      addElControls: function (e, t) {
        return e.attr("aria-controls", t), e
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e
      },
      addElId: function (e, t) {
        return e.attr("id", t), e
      },
      addElLive: function (e, t) {
        return e.attr("aria-live", t), e
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e
      },
      onEnterOrSpaceKey: function (e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this.params.a11y,
            i = C(e.target);
          this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is($(this.params.pagination.bulletClass)) && i[0].click()
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e))
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)))
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i) {
          var s = C(i);
          e.a11y.makeElFocusable(s), e.params.pagination.renderBullet || (e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))
        }))
      },
      init: function () {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var i = e.$el;
        t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
        var s, a, r = e.$wrapperEl,
          n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          o = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(r, n), e.a11y.addElLive(r, o), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(C(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(C(e.slides), t.slideRole), e.slides.each((function (i) {
          var s = C(i),
            a = t.slideLabelMessage.replace(/\{\{index\}\}/, s.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
          e.a11y.addElLabel(s, a)
        })), e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.nextSlideMessage), e.a11y.addElControls(s, n)), a && a.length && (e.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (e.a11y.addElRole(a, "button"), a.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(a, t.prevSlideMessage), e.a11y.addElControls(a, n)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", $(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey)
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterOrSpaceKey), t && t.off("keydown", this.a11y.onEnterOrSpaceKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", $(this.params.pagination.bulletClass), this.a11y.onEnterOrSpaceKey)
      }
    };

    function xe() {
      return (xe = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var Te = {
      init: function () {
        var e = l();
        if (this.params.history) {
          if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
          var t = this.history;
          t.initialized = !0, t.paths = Te.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
      },
      setHistoryPopState: function () {
        this.history.paths = Te.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
      },
      getPathValues: function (e) {
        var t = l(),
          i = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter((function (e) {
            return "" !== e
          })),
          s = i.length;
        return {
          key: i[s - 2],
          value: i[s - 1]
        }
      },
      setHistory: function (e, t) {
        var i = l();
        if (this.history.initialized && this.params.history.enabled) {
          var s;
          s = this.params.url ? new URL(this.params.url) : i.location;
          var a = this.slides.eq(t),
            r = Te.slugify(a.attr("data-history"));
          if (this.params.history.root.length > 0) {
            var n = this.params.history.root;
            "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), r = n + "/" + e + "/" + r
          } else s.pathname.includes(e) || (r = e + "/" + r);
          var o = i.history.state;
          o && o.value === r || (this.params.history.replaceState ? i.history.replaceState({
            value: r
          }, null, r) : i.history.pushState({
            value: r
          }, null, r))
        }
      },
      slugify: function (e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (Te.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
              var n = r.index();
              this.slideTo(n, e, i)
            }
          } else this.slideTo(0, e, i)
      }
    };

    function Ce() {
      return (Ce = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var Se = {
      onHashCange: function () {
        var e = n();
        this.emit("hashChange");
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === i) return;
          this.slideTo(i)
        }
      },
      setHash: function () {
        var e = l(),
          t = n();
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
          if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1), this.emit("hashSet");
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            t.location.hash = s || "", this.emit("hashSet")
          }
      },
      init: function () {
        var e = n(),
          t = l();
        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i)
            for (var s = 0, a = this.slides.length; s < a; s += 1) {
              var r = this.slides.eq(s);
              if ((r.attr("data-hash") || r.attr("data-history")) === i && !r.hasClass(this.params.slideDuplicateClass)) {
                var o = r.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
              }
            }
          this.params.hashNavigation.watchState && C(t).on("hashchange", this.hashNavigation.onHashCange)
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState && C(e).off("hashchange", this.hashNavigation.onHashCange)
      }
    };

    function Me() {
      return (Me = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ze = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = S((function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run()
        }), i)
      },
      start: function () {
        return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
      },
      stop: function () {
        return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((function (e) {
          t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd)
        })) : (t.autoplay.paused = !1, t.autoplay.run())))
      },
      onVisibilityChange: function () {
        var e = n();
        "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1)
      },
      onTransitionEnd: function (e) {
        var t = this;
        t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((function (e) {
          t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
        })), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
      },
      onMouseEnter: function () {
        var e = this;
        e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach((function (t) {
          e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd)
        }))
      },
      onMouseLeave: function () {
        this.autoplay.paused = !1, this.autoplay.run()
      },
      attachMouseEvents: function () {
        this.params.autoplay.pauseOnMouseEnter && (this.$el.on("mouseenter", this.autoplay.onMouseEnter), this.$el.on("mouseleave", this.autoplay.onMouseLeave))
      },
      detachMouseEvents: function () {
        this.$el.off("mouseenter", this.autoplay.onMouseEnter), this.$el.off("mouseleave", this.autoplay.onMouseLeave)
      }
    };

    function Pe() {
      return (Pe = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var ke = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || (a = s, s = 0);
          var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: r
          }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          i.transitionEnd((function () {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
            }
          }))
        }
      }
    };

    function Oe() {
      return (Oe = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var $e = {
      setTranslate: function () {
        var e, t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          o = this.size,
          l = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
        d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = C('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: a + "px"
        })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = C('<div class="swiper-cube-shadow"></div>'), t.append(e)));
        for (var c = 0; c < s.length; c += 1) {
          var f = s.eq(c),
            v = c;
          p && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
          var m = 90 * v,
            g = Math.floor(m / 360);
          n && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(f[0].progress, 1), -1),
            y = 0,
            w = 0,
            E = 0;
          v % 4 == 0 ? (y = 4 * -g * o, E = 0) : (v - 1) % 4 == 0 ? (y = 0, E = 4 * -g * o) : (v - 2) % 4 == 0 ? (y = o + 4 * g * o, E = o) : (v - 3) % 4 == 0 && (y = -o, E = 3 * o + 4 * o * g), n && (y = -y), h || (w = y, y = 0);
          var x = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + y + "px, " + w + "px, " + E + "px)";
          if (b <= 1 && b > -1 && (u = 90 * v + 90 * b, n && (u = 90 * -v - 90 * b)), f.transform(x), d.slideShadows) {
            var T = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              S = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === T.length && (T = C('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(T)), 0 === S.length && (S = C('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
          }
        }
        if (i.css({
            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
            "transform-origin": "50% 50% -" + o / 2 + "px"
          }), d.shadow)
          if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
          else {
            var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
              P = d.shadowScale,
              k = d.shadowScale / z,
              O = d.shadowOffset;
            e.transform("scale3d(" + P + ", 1, " + k + ") translate3d(0px, " + (r / 2 + O) + "px, " + -r / 2 / k + "px) rotateX(-90deg)")
          } var $ = l.isSafari || l.isWebView ? -o / 2 : 0;
        i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
      }
    };

    function Le() {
      return (Le = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var Ie = {
      setTranslate: function () {
        for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
          var s = e.eq(i),
            a = s[0].progress;
          this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
          var r = -180 * a,
            n = 0,
            o = -s[0].swiperSlideOffset,
            l = 0;
          if (this.isHorizontal() ? t && (r = -r) : (l = o, o = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
            var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === d.length && (d = C('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = C('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
          }
          s.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          i.eq(s).transitionEnd((function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
            }
          }))
        }
      }
    };

    function Ae() {
      return (Ae = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var De = {
      setTranslate: function () {
        for (var e = this.width, t = this.height, i = this.slides, s = this.slidesSizesGrid, a = this.params.coverflowEffect, r = this.isHorizontal(), n = this.translate, o = r ? e / 2 - n : t / 2 - n, l = r ? a.rotate : -a.rotate, d = a.depth, h = 0, p = i.length; h < p; h += 1) {
          var u = i.eq(h),
            c = s[h],
            f = (o - u[0].swiperSlideOffset - c / 2) / c * a.modifier,
            v = r ? l * f : 0,
            m = r ? 0 : l * f,
            g = -d * Math.abs(f),
            b = a.stretch;
          "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(a.stretch) / 100 * c);
          var y = r ? 0 : b * f,
            w = r ? b * f : 0,
            E = 1 - (1 - a.scale) * Math.abs(f);
          Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(g) < .001 && (g = 0), Math.abs(v) < .001 && (v = 0), Math.abs(m) < .001 && (m = 0), Math.abs(E) < .001 && (E = 0);
          var x = "translate3d(" + w + "px," + y + "px," + g + "px)  rotateX(" + m + "deg) rotateY(" + v + "deg) scale(" + E + ")";
          if (u.transform(x), u[0].style.zIndex = 1 - Math.abs(Math.round(f)), a.slideShadows) {
            var T = r ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
              S = r ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
            0 === T.length && (T = C('<div class="swiper-slide-shadow-' + (r ? "left" : "top") + '"></div>'), u.append(T)), 0 === S.length && (S = C('<div class="swiper-slide-shadow-' + (r ? "right" : "bottom") + '"></div>'), u.append(S)), T.length && (T[0].style.opacity = f > 0 ? f : 0), S.length && (S[0].style.opacity = -f > 0 ? -f : 0)
          }
        }
      },
      setTransition: function (e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
      }
    };

    function Ne() {
      return (Ne = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
      }).apply(this, arguments)
    }
    var Ge = {
        init: function () {
          var e = this.params.thumbs;
          if (this.thumbs.initialized) return !1;
          this.thumbs.initialized = !0;
          var t = this.constructor;
          return e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, k(this.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), k(this.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })) : P(e.swiper) && (this.thumbs.swiper = new t(k({}, e.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick), !0
        },
        onThumbClick: function () {
          var e = this.thumbs.swiper;
          if (e) {
            var t = e.clickedIndex,
              i = e.clickedSlide;
            if (!(i && C(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
              var s;
              if (s = e.params.loop ? parseInt(C(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                var a = this.activeIndex;
                this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                  n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r
              }
              this.slideTo(s)
            }
          }
        },
        update: function (e) {
          var t = this.thumbs.swiper;
          if (t) {
            var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
              s = this.params.thumbs.autoScrollOffset,
              a = s && !t.params.loop;
            if (this.realIndex !== t.realIndex || a) {
              var r, n, o = t.activeIndex;
              if (t.params.loop) {
                t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
                var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                  d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev"
              } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
              a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0))
            }
            var h = 1,
              p = this.params.thumbs.slideThumbActiveClass;
            if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled)
              for (var u = 0; u < h; u += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + u) + '"]').addClass(p);
            else
              for (var c = 0; c < h; c += 1) t.slides.eq(this.realIndex + c).addClass(p)
          }
        }
      },
      Be = [te, ae, {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null
          }
        },
        create: function () {
          O(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: M(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: re.enable,
              disable: re.disable,
              handle: re.handle,
              handleMouseEnter: re.handleMouseEnter,
              handleMouseLeave: re.handleMouseLeave,
              animateSlider: re.animateSlider,
              releaseScroll: re.releaseScroll
            }
          })
        },
        on: {
          init: function (e) {
            !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
          },
          destroy: function (e) {
            e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
          }
        }
      }, {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function () {
          O(this, {
            navigation: ne({}, oe)
          })
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update()
          },
          toEdge: function (e) {
            e.navigation.update()
          },
          fromEdge: function (e) {
            e.navigation.update()
          },
          destroy: function (e) {
            e.navigation.destroy()
          },
          "enable disable": function (e) {
            var t = e.navigation,
              i = t.$nextEl,
              s = t.$prevEl;
            i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
          },
          click: function (e, t) {
            var i = e.navigation,
              s = i.$nextEl,
              a = i.$prevEl,
              r = t.target;
            if (e.params.navigation.hideOnClick && !C(r).is(a) && !C(r).is(s)) {
              if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
              var n;
              s ? n = s.hasClass(e.params.navigation.hiddenClass) : a && (n = a.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), s && s.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
            }
          }
        }
      }, {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e
            },
            formatFractionTotal: function (e) {
              return e
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function () {
          O(this, {
            pagination: le({
              dynamicBulletIndex: 0
            }, de)
          })
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update()
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update()
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update())
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update())
          },
          destroy: function (e) {
            e.pagination.destroy()
          },
          "enable disable": function (e) {
            var t = e.pagination.$el;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
          },
          click: function (e, t) {
            var i = t.target;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !C(i).hasClass(e.params.pagination.bulletClass)) {
              if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
            }
          }
        }
      }, {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function () {
          O(this, {
            scrollbar: he({
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }, pe)
          })
        },
        on: {
          init: function (e) {
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
          },
          update: function (e) {
            e.scrollbar.updateSize()
          },
          resize: function (e) {
            e.scrollbar.updateSize()
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize()
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate()
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t)
          },
          "enable disable": function (e) {
            var t = e.scrollbar.$el;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
          },
          destroy: function (e) {
            e.scrollbar.destroy()
          }
        }
      }, {
        name: "parallax",
        params: {
          parallax: {
            enabled: !1
          }
        },
        create: function () {
          O(this, {
            parallax: ue({}, ce)
          })
        },
        on: {
          beforeInit: function (e) {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
          },
          init: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate()
          },
          setTranslate: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate()
          },
          setTransition: function (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t)
          }
        }
      }, {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function () {
          var e = this;
          O(e, {
            zoom: fe({
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            }, ve)
          });
          var t = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return t
            },
            set: function (i) {
              if (t !== i) {
                var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                e.emit("zoomChange", i, s, a)
              }
              t = i
            }
          })
        },
        on: {
          init: function (e) {
            e.params.zoom.enabled && e.zoom.enable()
          },
          destroy: function (e) {
            e.zoom.disable()
          },
          touchStart: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t)
          },
          touchEnd: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t)
          },
          doubleTap: function (e, t) {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
          },
          transitionEnd: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
          },
          slideChange: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
          }
        }
      }, {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function () {
          O(this, {
            lazy: me({
              initialImageLoaded: !1
            }, ge)
          })
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
          },
          init: function (e) {
            e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
          },
          "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
            e.params.lazy.enabled && e.lazy.load()
          },
          transitionStart: function (e) {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
          },
          slideChange: function (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
          }
        }
      }, {
        name: "controller",
        params: {
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        },
        create: function () {
          O(this, {
            controller: be({
              control: this.params.controller.control
            }, ye)
          })
        },
        on: {
          update: function (e) {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
          },
          resize: function (e) {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
          },
          observerUpdate: function (e) {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
          },
          setTranslate: function (e, t, i) {
            e.controller.control && e.controller.setTranslate(t, i)
          },
          setTransition: function (e, t, i) {
            e.controller.control && e.controller.setTransition(t, i)
          }
        }
      }, {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group"
          }
        },
        create: function () {
          O(this, {
            a11y: we({}, Ee, {
              liveRegion: C('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
            })
          })
        },
        on: {
          afterInit: function (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
          },
          toEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation()
          },
          fromEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation()
          },
          paginationUpdate: function (e) {
            e.params.a11y.enabled && e.a11y.updatePagination()
          },
          destroy: function (e) {
            e.params.a11y.enabled && e.a11y.destroy()
          }
        }
      }, {
        name: "history",
        params: {
          history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides"
          }
        },
        create: function () {
          O(this, {
            history: xe({}, Te)
          })
        },
        on: {
          init: function (e) {
            e.params.history.enabled && e.history.init()
          },
          destroy: function (e) {
            e.params.history.enabled && e.history.destroy()
          },
          "transitionEnd _freeModeNoMomentumRelease": function (e) {
            e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
          },
          slideChange: function (e) {
            e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
          }
        }
      }, {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        },
        create: function () {
          O(this, {
            hashNavigation: Ce({
              initialized: !1
            }, Se)
          })
        },
        on: {
          init: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init()
          },
          destroy: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy()
          },
          "transitionEnd _freeModeNoMomentumRelease": function (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash()
          },
          slideChange: function (e) {
            e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
          }
        }
      }, {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
          }
        },
        create: function () {
          O(this, {
            autoplay: Me({}, ze, {
              running: !1,
              paused: !1
            })
          })
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled && (e.autoplay.start(), n().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents())
          },
          beforeTransitionStart: function (e, t, i) {
            e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
          },
          sliderFirstMove: function (e) {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
          },
          touchEnd: function (e) {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
          },
          destroy: function (e) {
            e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), n().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
          }
        }
      }, {
        name: "effect-fade",
        params: {
          fadeEffect: {
            crossFade: !1
          }
        },
        create: function () {
          O(this, {
            fadeEffect: Pe({}, ke)
          })
        },
        on: {
          beforeInit: function (e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              k(e.params, t), k(e.originalParams, t)
            }
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate()
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t)
          }
        }
      }, {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        },
        create: function () {
          O(this, {
            cubeEffect: Oe({}, $e)
          })
        },
        on: {
          beforeInit: function (e) {
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              k(e.params, t), k(e.originalParams, t)
            }
          },
          setTranslate: function (e) {
            "cube" === e.params.effect && e.cubeEffect.setTranslate()
          },
          setTransition: function (e, t) {
            "cube" === e.params.effect && e.cubeEffect.setTransition(t)
          }
        }
      }, {
        name: "effect-flip",
        params: {
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0
          }
        },
        create: function () {
          O(this, {
            flipEffect: Le({}, Ie)
          })
        },
        on: {
          beforeInit: function (e) {
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              k(e.params, t), k(e.originalParams, t)
            }
          },
          setTranslate: function (e) {
            "flip" === e.params.effect && e.flipEffect.setTranslate()
          },
          setTransition: function (e, t) {
            "flip" === e.params.effect && e.flipEffect.setTransition(t)
          }
        }
      }, {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function () {
          O(this, {
            coverflowEffect: Ae({}, De)
          })
        },
        on: {
          beforeInit: function (e) {
            "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
          },
          setTranslate: function (e) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
          },
          setTransition: function (e, t) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
          }
        }
      }, {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create: function () {
          O(this, {
            thumbs: Ne({
              swiper: null,
              initialized: !1
            }, Ge)
          })
        },
        on: {
          beforeInit: function (e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
          },
          slideChange: function (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          update: function (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          resize: function (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          observerUpdate: function (e) {
            e.thumbs.swiper && e.thumbs.update()
          },
          setTransition: function (e, t) {
            var i = e.thumbs.swiper;
            i && i.setTransition(t)
          },
          beforeDestroy: function (e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy()
          }
        }
      }];
    J.use(Be), i.d(t, "Swiper", (function () {
      return J
    }))
  }
}));